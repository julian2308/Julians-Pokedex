// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDocFromCache,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzSmaOA8_gGjAX2TCeg2rlVRPDUFksi1g",
  authDomain: "julian-spokedex.firebaseapp.com",
  projectId: "julian-spokedex",
  storageBucket: "julian-spokedex.appspot.com",
  messagingSenderId: "800276618142",
  appId: "1:800276618142:web:c4d49f4b2c45f495ee548f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const addCatchedOrUnkownPokemon = async (id, name, type) => {
  try {
    const collectionRef = collection(db, type);
    const objectToPost = { id: id, name: name };

    const docRef = await addDoc(collectionRef, objectToPost);

    console.log("Document with ID", docRef.id);
  } catch (e) {
    console.error(e);
  }
};

export const getCatchedPokemons = async () => {
  const allRef = collection(db, "catched");
  const pokemones = []

  try {
    await getDocs(allRef).then((querySnapshot) => {
      querySnapshot.docs.map((doc) => (
        pokemones.push(doc.data())));
    });

    return pokemones;
  } catch (e) {
    console.log("Error getting catched document:", e);
  }


};
