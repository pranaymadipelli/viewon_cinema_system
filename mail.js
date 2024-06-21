const firebaseConfig = {
    apiKey: "AIzaSyDKvKXIUlCY2ID3-dYvPeYnb7i4E5Ih2pg",
    authDomain: "viewon-cinema-system.firebaseapp.com",
    databaseURL: "https://viewon-cinema-system-default-rtdb.firebaseio.com",
    projectId: "viewon-cinema-system",
    storageBucket: "viewon-cinema-system.appspot.com",
    messagingSenderId: "634356913680",
    appId: "1:634356913680:web:61d13251c5ddbdeebadc95"
};



// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var emailid = getElementVal("emailid");
    var password = getElementVal("password");


    saveMessages(emailid, password);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();

    window.location = "./Pages/Home.html"
}

const saveMessages = (emailid, password) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        emailid: emailid,
        password: password,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};