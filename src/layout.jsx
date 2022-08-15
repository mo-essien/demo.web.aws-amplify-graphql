// library/ package imports
import { Amplify, Storage } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// file component imports
import AWS_AMPLIFY_CONFIG from './aws-exports';

// stylesheet imports
import './styles/app.css';
import './styles/form.css';
import '@aws-amplify/ui-react/styles.css';

// media imports
import DEFAULT_profileImage from './images/WOOLitalianwoolcashmerepiarapantslook_1.jpg'

// initialisations
Amplify.configure(AWS_AMPLIFY_CONFIG);

function Layout ({ children, signOut, user }) {
	if (user) {
		localStorage.setItem("appsync_app_user", user.username)
	}
	
	// data variables
  	const [profileImage, setProfileImage] = useState(DEFAULT_profileImage)

	const UPLOADFILE = async (e) => {
		const file = e.target.files[0];
  
		if (file === null || file === undefined) return
		
		const fileNameDecoded = file.name.split(`.`)
		const fileExtension = file.name.split(`.`)[fileNameDecoded.length - 1]
  
		// const [fileName, fileExtension] = file.name.split(`.`)
		// const key = `images/lists/${ fileName }_${ uuidv4 }.${ fileExtension }` // this if to make the image unique
  
		const key = `images/profile-images/${ user.username }.${ fileExtension }`
		try {
		  await Storage.put(key, file, {
			 contentType: file.type,
			 metadata: {
				app: "demo.web.aws-amplify-graphql"
			 }
		  })
		  setProfileImage(URL.createObjectURL(file))
		} catch (error) { console.log(error) }
	}

  	// event detectors
	useEffect(() => {
		// on page load
		(async () => {
		  // fetch user profile image
		  try {
			 const key = `images/profile-images/${ user.username }.jpg`
  
			 setProfileImage(await Storage.get(key));
		  } catch (error) { console.log(error); }
		})();
		// eslint-disable-next-line
	 }, []);

  	return (
		<div className="App">
			<div className="Nav">
				<h3 className="Logo"><Link to={ `/` }>Demo: AWS Amplify & GraphQL API</Link></h3>
				<div className='Auth'>
					<div className='profile_picture' onClick={ () => document.getElementById(`uploadImageButton`).click() }>
						<img src={ profileImage } alt="profile" />
					</div>
					<div>
						<div className='profile_name'>{ user.username }</div>
						<div className='signout' onClick={ signOut }>Sign Out</div>
					</div>
				</div>
			</div>
			
			<div className="upload_image">
				<form>
					<input type="file" name="collectionImage" id="uploadImageButton" onChange={ (e) => UPLOADFILE(e) } />
				</form>
			</div>

			{ children }
		</div>
	);
}

export default withAuthenticator(Layout);
