const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');
const username = document.getElementById('username');

btnLogin.addEventListener('click', e => {
  //get email and password
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  
  //sign in
  const promise = auth.signInWithEmailAndPassword(email, pass)
  .then((user) => {
    
    if(user.email == "kabid.penunjang.medik@rsudklu.com"){
      window.location.pathname = "/verification.html"
    }
    if(user.email == "kasi.penunjang.medik@rsudklu.com"){
      window.location.pathname = "/verification.html"
    }
    if(user.email == "admin.simpalkes@rsudklu.com"){
      window.location.pathname = "/index.html"
    }
    if(user.email == "lab@rsudklu.com"){
      window.location.pathname = "/karu.html"
    }
    console.log('login success!');
    alert('login success!');
    
  });
  promise.catch(e =>{console.log(e.message)
    alert(e.message)});

  txtEmail.value = '';
  txtPassword.value = '';
  
}); 

btnLogout.addEventListener('click', e => {
  //sign out
  firebase.auth().signOut()
    .then(function(){
      console.log('logout')
      alert('logout')
    })
    .catch(function(error) {
    // Handle Errors here.
    console.log(error.message);
    window.alert(error.message)
  });
});

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      username.style.display = "block"
      console.log("User: ",firebaseUser.email);
      username.innerHTML = `User : ${firebaseUser.email}`
      btnLogout.style.display = "block"
    } else {
      console.log("You're not logged in");
      btnLogout.style.display = "none"
      username.style.display = "none"
    }
  });

  //url karu
  function karuPage(){
    window.open("https://simpelkes-rsud-klu.web.app/pages/karu.html")
  }

