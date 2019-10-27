const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');

btnLogin.addEventListener('click', e => {
  //get email and password
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  
  //sign in
  const promise = auth.signInWithEmailAndPassword(email, pass)
  .then((user) => {
    if(user.email == "igd@rsudklu.com" || user.email == "icu@rsudklu.com"){
      karuPage
    }
    else{
      window.history.back();
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
  });
});

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log("User: ",firebaseUser.email);
      
    } else {
      console.log("You're not logged in");
    }
  });

  //url karu
  function karuPage(){
    window.open("https://simpelkes-rsud-klu.web.app/pages/karu.html")
  }

