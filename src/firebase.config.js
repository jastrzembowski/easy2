import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCdC9GA4D1sAtYw4v5WEj0ltr9ckH_Gxxc",
    authDomain: "easybar-9df33.firebaseapp.com",
    databaseURL: "https://easybar-9df33-default-rtdb.firebaseio.com",
    projectId: "easybar-9df33",
    storageBucket: "easybar-9df33.appspot.com",
    messagingSenderId: "606309298605",
    appId: "1:606309298605:web:21958112994f3bf72cf124"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)


export {app, firestore, storage }