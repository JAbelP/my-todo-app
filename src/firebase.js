import { initializeApp } from "firebase/app";
import {
  getDatabase,
  // connectDatabaseEmulator,
  ref,
  push,
  onValue,
  remove,
  update
} from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};


//initialize the application
const app = initializeApp(firebaseConfig);
//initialize the the database connection
const db = getDatabase(app);

// Enable offline persistence for testing
// connectDatabaseEmulator(db, "127.0.0.1", 9000);


// Reference to the "todos" database collection in Firebase Realtime Database
const todosRef = ref(db, "todos");

//adds todos to the database 
const addTodo = (todoText) => {
  push(todosRef, { text: todoText, completed: false })
    .then(() => console.log("Todo added successfully!"))
    .catch((error) => console.error("Error adding todo:", error));
};

// updates a todo in the database
const updateTodo = (todoId, updates) => {
  const todoRef = ref(db, `todos/${todoId}`);
  return update(todoRef, updates)
    .then(() => console.log("Todo updated successfully"))
    .catch((error) => console.error("Error updating todo", error));
};

// gets a list of todos
const getTodos = (callback) => {
  onValue(todosRef, (snapshot) => {
    const data = snapshot.val();
    // console.log("Data from Firebase:", data); // DEBUGGING
    callback(data || {}); // Provide empty object if data is null ( Avoid persist loading)
  });
};

// delete todos
const deleteTodo = (todoId) => {
  const todoRef = ref(db, `todos/${todoId}`);
  remove(todoRef)
    .then(() => {
      console.log("Todo deleted successfully");
    })
    .catch((error) => {
      console.error("Error deleting todo:", error);
    });
};

export { db, addTodo, getTodos, deleteTodo,updateTodo };
