"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
  Connect to Firebase Cloud Firestore Database
*/
const admin = require("firebase-admin");
const serviceAccount = require('../service-account.json');
require('dotenv').config();
exports.adminInit = () => {
    return admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: process.env.DB_URL
    });
};
//# sourceMappingURL=firebase.js.map