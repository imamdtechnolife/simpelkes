const menuVerifikasi = document.getElementById("verfikasi");
const menuKaru = document.getElementById("karu");

firebase.auth().onAuthStateChanged(function(user) {

    if(user.email == "igd@rsudklu.com" || 
    user.email == "icu@rsudklu.com" ||
    user.email == "anak@rsudklu.com" || 
    user.email == "irna1@rsudklu.com"|| 
    user.email == "irna2@rsudklu.com" ||
    user.email == "ok@rsudklu.com" ||
    user.email == "bersalin@rsudklu.com" ||
    user.email == "nifas@rsudklu.com" ||
    user.email == "radiologi@rsudklu.com" ||
    user.email == "laboratorium@rsudklu.com" ||
    user.email == "gizi@rsudklu.com"){
        
        // menuVerifikasi.remove();

    }
    if(user.email == "kasi.penunjang.medik@rsudklu.com"){
        menuKaru.remove();

    }
})