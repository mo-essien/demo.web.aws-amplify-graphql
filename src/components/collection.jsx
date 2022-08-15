import { API } from 'aws-amplify';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../layout"
import { createCollectionItem, deleteCollectionItem, updateCollectionItem } from '../graphql/mutations';
import { searchCollections } from "../graphql/queries"

import "../styles/collection.css"

function Collection() {
	const params = useParams()
	const [data, setData] = useState([])
	const user = useState(localStorage.getItem("CognitoIdentityServiceProvider.tgs7u7o834c98dbqu0mbvklff.mo-essien.userData"))
	const [modal_form_createCollectionItem, setModal_form_createCollectionItem] = useState(false)
	const [modal_form_updateCollectionItem, setModal_form_updateCollectionItem] = useState(false)
	const [formData_createCollectionItem, setFormData_createCollectionItem] = useState({ "createdBy": JSON.parse(user[0]).Username })
	const [formData_updateCollectionItem, setFormData_updateCollectionItem] = useState({})

	// create, read, update and delete operations on API
	async function CREATE_collectionItem(activity) {
		activity.preventDefault();
		console.log(formData_createCollectionItem);
		console.log(data);
  
		const { title, quantity, collectionID } = formData_createCollectionItem
		if (!title.length > 0 || !quantity > 0 || !collectionID > 0) return
  
		try {
			await API.graphql({
				query: createCollectionItem,
				variables: { input: formData_createCollectionItem },
				authMode: 'API_KEY'
			})

			await READ_collection();
			setFormData_createCollectionItem({
				collectionID: data[0].id,
				createdBy: JSON.parse(user[0]).Username
			})
		} catch (err) { console.log('error creating collection...', err) }
		
		setModal_form_createCollectionItem(!modal_form_createCollectionItem);
	}

	async function DELETE_collectionItem(id) {
	  	try {
			await API.graphql({
			query: deleteCollectionItem,
			variables: { input: { id } },
			authMode: 'API_KEY'
		})
 
		await READ_collection()
	  } catch (err) { console.log('error creating collection...', err) }
	}

	async function READ_collection() {
		try {
		  	const response = await API.graphql({
				query: searchCollections,
				variables: { filter: { slug: { eq: params.slug } } },
				authMode: 'API_KEY'
		  	})
		  
		  	const collectionData = response.data.searchCollections.items
		  	setData(collectionData)
		} catch (err) { console.log({ err }); }
	}

	async function UPDATE_collectionItem(activity) {
	  activity.preventDefault();
 
	  try {
		 await API.graphql({
			query: updateCollectionItem,
			variables: { input: formData_updateCollectionItem },
			authMode: 'API_KEY'
		 })
		 
		 await READ_collection();
	  } catch (err) { console.log({ err }); }
		
	  setModal_form_updateCollectionItem(!modal_form_updateCollectionItem);
	}

	// event detectors
	useEffect(() => {
		(async () => {
			await READ_collection()
			setFormData_createCollectionItem({ ...formData_createCollectionItem, collectionID: data[0].id })
		})()
		// eslint-disable-next-line
	}, [])

	// form input on change event handlers	
	const UPDATE_createCollectionItemFormData = (activity) => { setFormData_createCollectionItem({ ...formData_createCollectionItem, [activity.target.name]: activity.target.value })  }
	const UPDATE_updateCollectionItemFormData = (activity) => { setFormData_updateCollectionItem({ ...formData_updateCollectionItem, [activity.target.name]: activity.target.value })  }

	return (
		<Layout>
			<div data-component='page_collection_component' id='page_collection_component'>
				<div id='add_item' onClick={ () => setModal_form_createCollectionItem(true) }>| Add Item</div>
				{
					data.map(dataItem => {
						return (
							<div key={ dataItem.id }>
								<div>
									<div>Title: { dataItem.title }</div>
									<div>Description: { dataItem.description }</div>
									<div>Created At: { new Date(dataItem.createdAt).toDateString() }</div>
								</div>
								<div id='collection_items'>
									{
										dataItem.collectionItems.items.length > 0 ?
										dataItem.collectionItems.items.map((item) => {
											return (
												<div key={ item.id } className="collection_item">
													{
														JSON.parse(user[0]).Username === item.createdBy ?
														<div className='collection_item_controls'>
															<div onClick={ () => {
																setModal_form_updateCollectionItem(true)
																setFormData_updateCollectionItem({
																	"id": item.id,
																	"title": item.title,
																	"quantity": item.quantity,
																	"done": item.done,
																})
															} }>| Update</div>
															<div onClick={ () => DELETE_collectionItem(item.id) }>| Delete</div>
														</div>
														: <div>No items is available in this list</div>
													}
													<div>Title: { item.title }</div>
													<div>Quantity: { item.quantity }</div>
													<div>Status: { item.done }</div>
												</div>
											)
										}) : <></>
									}
								</div>
							</div>
						)
					})
				}
			</div>

			<div className={ modal_form_createCollectionItem ? `Modal-Open` : `Modal-Close` }>
				<div className='Modal'>
					<form>
						<div className="field">
							<label htmlFor="title">Title</label>
							<input type="text" name='title' placeholder='Name this collection' required onChange={ (e) => UPDATE_createCollectionItemFormData(e) } />
						</div>
						<div className="field">
							<label htmlFor="quantity">Quantity</label>
							<input type="number" name='quantity' placeholder='0' onChange={ (e) => UPDATE_createCollectionItemFormData(e) } />
						</div>
						<div className='button_set'>
							<button type='reset' onClick={ (e) => setModal_form_createCollectionItem(!modal_form_createCollectionItem) }>Cancel</button>
							<button type='submit' onClick={ (e) => CREATE_collectionItem(e) }>Save</button>
						</div>
					</form>
				</div>
			</div>

			<div className={ modal_form_updateCollectionItem ? `Modal-Open` : `Modal-Close` }>
				<div className='Modal'>
					<form>
						<div className="field">
							<label htmlFor="title">Title</label>
							<input type="text" name='title' value={ formData_updateCollectionItem.title } required onChange={ (e) => UPDATE_updateCollectionItemFormData(e) } />
						</div>
						<div className="field">
							<label htmlFor="quantity">Quantity</label>
							<input type="number" name='quantity' value={ formData_updateCollectionItem.quantity } onChange={ (e) => UPDATE_updateCollectionItemFormData(e) } />
						</div>
						{/* <div className="field">
							<label htmlFor="quantity">Done</label>
							<input type="radio" value={ `TRUE` } onChange={ (e) => UPDATE_updateCollectionItemFormData(e) } /> { `TRUE` }
							<input type="radio" value={ `FALSE` } onChange={ (e) => UPDATE_updateCollectionItemFormData(e) } /> { `FALSE` }
						</div> */}
						<div className='button_set'>
							<button type='reset' onClick={ (e) => setModal_form_updateCollectionItem(!modal_form_updateCollectionItem) }>Cancel</button>
							<button type='submit' onClick={ (e) => UPDATE_collectionItem(e) }>Save</button>
						</div>
					</form>
				</div>
			</div>
		</Layout>
	)
}

export default Collection;