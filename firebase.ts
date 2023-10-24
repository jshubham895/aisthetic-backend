import admin from "firebase-admin";

import * as serviceAccount from "./key.json";

const firebase = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

export default firebase;
