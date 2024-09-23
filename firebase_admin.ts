import { getFirestore } from "firebase-admin/firestore";


var admin = require("firebase-admin");

var serviceAccount = require("./service_admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const adminDB=getFirestore(admin)

export {admin as adminApp,adminDB}