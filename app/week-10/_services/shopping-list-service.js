import { db } from "../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

 export async function getItems (userId) {
   try {
    const itemsCollectionRef = collection(db, "users", userId, "items");
     const querySnapshot = await getDocs(itemsCollectionRef);

     return querySnapshot.docs.map((doc) => ({
       id: doc.id,
       ...doc.data(),
     }));
   } catch (error) {
     console.error("Error reading items for user: ", userId, error);
     return []; // Returns an empty list so UI doesn't break
   }
 };

 export async function addItem (userId, item) {
  try {
    const itemsCollectionRef = collection(db, "users", userId, "items");
    const docRef = await addDoc((itemsCollectionRef), item);
    
    return docRef.id; // return new document ID.
  } catch (error) {
    console.error("Error adding document: ", error);
  }
 };