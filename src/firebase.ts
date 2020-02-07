/*
  Connect to Firebase Cloud Firestore Database
*/
import * as admin from 'firebase-admin';

const serviceAccount = require('../service-account.json');

require('dotenv').config()

export const adminInit = () => {
  return admin.initializeApp({
    credential: admin.credential.cert(serviceAccount), 
    databaseURL: process.env.DB_URL
  });
}