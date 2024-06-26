import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCC9-08v6nx-GqZHujgy01V5TSMQFgEyoM",
    authDomain: "app-lixo-eletronico.firebaseapp.com",
    projectId: "app-lixo-eletronico",
    storageBucket: "app-lixo-eletronico.appspot.com",
    messagingSenderId: "627951231094",
    appId: "1:627951231094:web:0dbaa8ff6de0520c577f57"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { app, auth, database, storage };
