import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";

// getItems function.
 export async function getItems (userId) {
   try {
    const itemsReference = collection(db, "users", userId, "items");
     const querySnapshot = await getDocs(itemsReference);

     return querySnapshot.docs.map((doc) => ({
       id: doc.id,
       ...doc.data(),
     }));
   } catch (error) {
     console.error("Error reading items for user: ", userId, error);
     return []; // Returns an empty list so UI doesn't break
   }
 };

 // addItem function.
 export async function addItem (userId, item) {
  try {
    const itemsReference = collection(db, "users", userId, "items");
    const docRef = await addDoc((itemsReference), item);
    
    return docRef.id; // return new document ID.
  } catch (error) {
    console.error("Error adding document: ", error);
  }
 };