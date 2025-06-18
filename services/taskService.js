// services/taskService.js
import { collection, addDoc, updateDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { auth } from './firebaseConfig';

export const addTask = async (title, xp) => {
  try {
    await addDoc(collection(db, 'tasks'), {
      title,
      xp,
      completed: false,
      userId: auth.currentUser.uid,
      createdAt: new Date()
    });
  } catch (error) {
    console.error('Failed to add task:', error);
  }
};

export const getTasks = async () => {
  const snapshot = await getDocs(collection(db, 'tasks'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const toggleTaskComplete = async (taskId, currentValue) => {
  await updateDoc(doc(db, 'tasks', taskId), { completed: !currentValue });
};

export const deleteTask = async (taskId) => {
  await deleteDoc(doc(db, 'tasks', taskId));
};