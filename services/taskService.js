// services/taskService.js
import { collection, addDoc } from 'firebase/firestore';
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