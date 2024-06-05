


import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCS7nGz07gNakdw6FeC0gZ3JW1-L2afqos",
  authDomain: "netify-build-clone.firebaseapp.com",
  projectId: "netify-build-clone",
  storageBucket: "netify-build-clone.appspot.com",
  messagingSenderId: "221983860733",
  appId: "1:221983860733:web:01ad542036b1c30729db94"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
export {auth};
