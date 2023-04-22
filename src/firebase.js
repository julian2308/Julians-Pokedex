// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  getDocs,
  getFirestore,

  updateDoc
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3NCdANQ0h_rJjG6C7GJLq5_SsT0cgqiQ",
  authDomain: "julian-pokedex-39133.firebaseapp.com",
  projectId: "julian-pokedex-39133",
  storageBucket: "julian-pokedex-39133.appspot.com",
  messagingSenderId: "635976389709",
  appId: "1:635976389709:web:e0f96c79889f7c39043804",
  measurementId: "G-YEG63CHCQG"
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

export const getUnknownPokemons = async () => {
  const allRef = collection(db, "unknown");
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

export const getTrainers = async() => {
  const allRef = collection(db, "trainer");
  const trainers = []
  try {
    await getDocs(allRef).then((querySnapshot) => {
      querySnapshot.docs.map((doc) => (
        trainers.push({
          idTrainerDb: doc.id,
          ...doc.data()
        })));
    });

    return trainers;
  } catch (e) {
    console.log("Error getting catched document:", e);
  }
}

export const handleDeleteTrainer = async (trainerId) => {
  const docRef = doc(db, "trainer", trainerId);
  try {
    await deleteDoc(docRef)
    console.log(`Entrenador con ID ${trainerId} eliminado de Cloud Firestore.`);
  } catch (error) {
    console.error(error);
  }
};

export const handleUpdateTrainer = async (trainerId, data) => {
  const docRef = doc(db, "trainer", trainerId);
  try {
    await updateDoc(docRef,data)
    console.log(`Entrenador con ID ${trainerId} eliminado de Cloud Firestore.`);
  } catch (error) {
    console.error(error);
  }
};
