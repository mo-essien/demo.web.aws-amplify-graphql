// library/ package imports
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// file component imports
import Layout from './layout';
import { createCollection, deleteCollection, updateCollection } from './graphql/mutations';
import { listCollections } from './graphql/queries';
import { onCreateCollection, onDeleteCollection, onUpdateCollection } from './graphql/subscriptions';

// stylesheet imports
import './styles/app.css';
import './styles/form.css';

function Home () {
  // data variables
  const [collections, setCollections] = useState([])
  const [newCollectionData, setNewCollectionData] = useState({})
  const [updateCollectionData, setUpdateCollectionData] = useState({})
  const [affectedCollection, setAffectedCollection] = useState('')
	const user = useState(localStorage.getItem("CognitoIdentityServiceProvider.tgs7u7o834c98dbqu0mbvklff.mo-essien.userData"))

  // component state variables
  const [modal_form_createCollection, setModalFormCreateCollection] = useState(false)
  const [modal_form_updateCollection, setModalFormUpdateCollection] = useState(false)

  // create, read, update and delete operations on API
  async function CREATE_collection(activity) {
    activity.preventDefault();

    const { title, description } = newCollectionData
    if (!title.length > 0 || !description > 0) return

    try {
      await API.graphql({
        query: createCollection,
        variables: { input: newCollectionData },
        authMode: 'API_KEY'
      })
      setCollections([...collections, newCollectionData])
      setNewCollectionData({})
    } catch (err) { console.log('error creating collection...', err) }
    
    setModalFormCreateCollection(!modal_form_createCollection);
  }

  async function DELETE_collection(id) {
    try {
      const response = await API.graphql({
        query: deleteCollection,
        variables: { input: { id } },
        authMode: 'API_KEY'
      })
      setAffectedCollection(id)

      await setCollections(collections.filter(item => item.id !== id ));

      console.log('successfully deleted collection...', response)
    } catch (err) { console.log('error creating collection...', err) }
  }

  async function READ_collections() {
    try {
      const collectionsData = await API.graphql({
        query: listCollections,
        authMode: 'API_KEY'
      })
      const collectionsItems = collectionsData.data.listCollections.items;
      setCollections(collectionsItems);
    } catch (err) { console.log({ err }); }
  }

  async function UPDATE_collection(activity, id) {
    activity.preventDefault();

    try {
      await API.graphql({
        query: updateCollection,
        variables: { input: updateCollectionData },
        authMode: 'API_KEY'
      })
      
      setAffectedCollection(updateCollectionData.id)

      setCollections(collections.map(item => {
        if (item.id === updateCollectionData.id) {
          return updateCollectionData
        } else { return item }
      }));
      setUpdateCollectionData({});
    } catch (err) { console.log({ err }); }
    
    setModalFormUpdateCollection(!modal_form_updateCollection);
  }

  const PREPARE_updateCollection = (collection) => {
    const { id, title, description } = collection;

    setUpdateCollectionData({
      id: id,
      title: title,
      description: description
    })

    setModalFormUpdateCollection(!modal_form_updateCollection);
  }
  
  // form input on change event handlers
  const UPDATE_createCollectionsFormData = (event) => { setNewCollectionData({ ...newCollectionData, [event.target.name]: event.target.value })  }
  const UPDATE_updateCollectionsFormData = (event) => { setUpdateCollectionData({ ...updateCollectionData, [event.target.name]: event.target.value })  }
  
  // event detectors
  useEffect(() => {
    // on page load
    (async () => {
      // fetch all collections from API
      await READ_collections();
    })();
  }, []);
  
  useEffect(() => {
    // on change to API in the form of a create, read, update or delete operation

    let WATCH_createCollection = API.graphql({
      query: onCreateCollection,
      authMode: 'API_KEY'
    }).subscribe({
      next: (value) => {
        console.log(value);

        setCollections([...collections, value.data.onCreateCollection]);
      }
    });
    
    let WATCH_deleteCollection = API.graphql({
      query: onDeleteCollection,
      variables: { id: affectedCollection },
      authMode: 'API_KEY'
    }).subscribe({
      next: ({ _, value }) => {
        console.log({ _, value });

        setCollections(collections.filter(item => {
          if (item.id !== value.data.onDeleteCollection) {
            return item
          }
          return true
        }));
      }
    });
    
    let WATCH_updateCollection = API.graphql({
      query: onUpdateCollection,
      variables: { id: affectedCollection },
      authMode: 'API_KEY'
    }).subscribe({
      next: ({ _, value }) => {
        console.log(value);
        setAffectedCollection(``);

        setCollections(collections.map(item => {
          if (item.id === value.data.onUpdateCollection.id) {
            return value.data.onUpdateCollection
          } else { return item }
        }));
      }
    })

    return () => {
      WATCH_createCollection.unsubscribe()
      WATCH_deleteCollection.unsubscribe()
      WATCH_updateCollection.unsubscribe()
    }
  });

  return (
    <Layout>
      <div className='Collections'>
        <section className='Collection'>
          { collections.map(collection => {
            return (
              <div key={ collection.id } className="Brief">
                {
                  JSON.parse(user[0]).Username === collection.createdBy ?
                  <div className='crud_actions'>
                    <div className='update' onClick={ () => { PREPARE_updateCollection(collection) } }>| Update</div>
                    <div className='delete' onClick={ () => { DELETE_collection(collection.id) } }>| Delete</div>
                  </div>
                  : <></>
                }
                <Link to={ `/collection/${ collection.slug }` }>
                  <div className="name">{ collection.title }</div>
                  <div className="description">{ collection.description }</div>
                  <div className="date_created">{ new Date(collection.createdAt).toDateString() }</div>
                </Link>
              </div>
            )
          }) }
          {/* <div className='Author'>Author</div>
          <div className='Viewers'>Viewers</div> */}
        </section>
        <div className='NewEntry' onClick={ (e) => setModalFormCreateCollection(!modal_form_createCollection) }>+</div>
      </div>

      <div className={ modal_form_createCollection? `Modal-Open` : `Modal-Close` }>
        <div className='Modal'>
          <form>
            <div className="field">
              <label htmlFor="title">Title</label>
              <input type="text" name='title' placeholder='Name this collection' required onChange={ (e) => UPDATE_createCollectionsFormData(e) } />
            </div>
            <div className="field">
              <label htmlFor="description">Title</label>
              <textarea name='description' placeholder='Briedly describe this collection' onChange={ (e) => UPDATE_createCollectionsFormData(e) }></textarea>
            </div>
            <div className='button_set'>
              <button type='reset' onClick={ (e) => setModalFormCreateCollection(!modal_form_createCollection) }>Cancel</button>
              <button type='submit' onClick={ (e) => CREATE_collection(e) }>Save</button>
            </div>
          </form>
        </div>
      </div>

      <div className={ modal_form_updateCollection? `Modal-Open` : `Modal-Close` }>
        <div className='Modal'>
          <form>
            <div className="field">
              <label htmlFor="title">Title</label>
              <input type="text" name='title' value={ updateCollectionData.title } required onChange={ (e) => UPDATE_updateCollectionsFormData(e) } />
            </div>
            <div className="field">
              <label htmlFor="description">Title</label>
              <textarea name='description' value={ updateCollectionData.description } onChange={ (e) => UPDATE_updateCollectionsFormData(e) }></textarea>
            </div>
            <div className='button_set'>
              <button type='reset' onClick={ (e) => setModalFormUpdateCollection(!modal_form_updateCollection) }>Cancel</button>
              <button type='submit' onClick={ (e) => UPDATE_collection(e, updateCollectionData.id) }>Update</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
