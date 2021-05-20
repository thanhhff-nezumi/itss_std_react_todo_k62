import firebase from 'firebase';

  // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbeORb2U5VuCc525zl_rWx9vqTiwM8EiI",
  authDomain: "thanhhff-firebase-sample.firebaseapp.com",
  projectId: "thanhhff-firebase-sample",
  storageBucket: "thanhhff-firebase-sample.appspot.com",
  messagingSenderId: "829487628826",
  appId: "1:829487628826:web:f1927b3123035b2e1ec7a3"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;

export const getFirebaseItems = async () => {
  try {
    const snapshot = await db
      .collection("todos")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("todos").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
};