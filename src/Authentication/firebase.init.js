import { firebaseConfig } from "./firebase.config";
import { initializeApp } from "firebase/app";

const firebaseInit = () => {

    return initializeApp(firebaseConfig);
}
export default firebaseInit;