import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDRXOy5kcvXpcGli_xtxv_GWB3GWiUrvvo",
    authDomain: "thera-2cea5.firebaseapp.com",
    projectId: "thera-2cea5",
    storageBucket: "thera-2cea5.appspot.com",
    messagingSenderId: "656304006510",
    appId: "1:656304006510:web:59e2fd6590f5721b8ccd7f"
};

firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
export default db;