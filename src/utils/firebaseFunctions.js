import { collection, doc, getDocs, orderBy, setDoc, query } from "firebase/firestore";
import { firestore } from "../firebase.config";

export const saveItem = async (data) => {
  await setDoc(doc(firestore, "menu", `${Date.now()}`), data, { 
    merge: true });
};



export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "menu"), orderBy("id", "desc"))
  );
  return items.docs.map((doc)=>doc.data())
};