import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

//app configuration

var firebaseConfig = {
  apiKey: "AIzaSyCggI_g09XtEC7NRbgAaTNttTQ50LaRUSQ",
  authDomain: "snapgallery-9889c.firebaseapp.com",
  projectId: "snapgallery-9889c",
  storageBucket: "snapgallery-9889c.appspot.com",
  messagingSenderId: "296829516136",
  appId: "1:296829516136:web:597ff00531d2cdb4fe7edd",
};

//initialise firebase

firebaseConfig.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
