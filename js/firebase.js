import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBdAHhespxbRKW2AX4LmlbyeCSUAWJEb4M",
    authDomain: "midonapp-b4a74.firebaseapp.com",
    projectId: "midonapp-b4a74",
    storageBucket: "midonapp-b4a74.appspot.com",
    messagingSenderId: "402627775904",
    appId: "1:402627775904:web:ad0e137e3a9f80d1e2e8c5",
    measurementId: "G-WHHY3F6PNB"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getOrganizations() {
    const snapshot = await getDocs(collection(db, "organizaciones"));

    if (snapshot.empty) {
        return [];
    }

    const organizations = snapshot.docs.map(doc => {
        const data = doc.data();

        const geopoint = data.geopoint ? {
            latitude: data.geopoint.latitude,
            longitude: data.geopoint.longitude
        } : null;

        return {
            name: data.name,
            adress: data.adress,
            onMaps: data.onMaps,
            phoneNumber: data.phoneNumber,
            email: data.email,
            website: data.website,
            recibe: data.recibe,
            geopoint: geopoint
        };
    });

    return organizations;
}

export { getOrganizations };
