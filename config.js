import firebase, {firestore} from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPUl0jUoSdFE-fco-ZBNZ2Unh1PBcFJMM",
  authDomain: "eride-49691.firebaseapp.com",
  projectId: "eride-49691",
  storageBucket: "eride-49691.appspot.com",
  messagingSenderId: "200696192731",
  appId: "1:200696192731:web:67a319b6dc05b69c33b6fe"
};
if(firebase.apps.length===0){
firebase.initializeApp(firebaseConfig)
}
export default firebase.firestore();
