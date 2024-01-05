'use server'
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "@/firebase/firebase";

export async function getPhotos(category) {
    const querySnapshot = await getDocs(query(collection(db, "photos", "gallery", category), orderBy("number", "asc")));
    const data = querySnapshot.docs.map((doc) => doc.data());
    return data
}