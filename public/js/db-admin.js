// enable offline data
db.enablePersistence()
  .catch(function(err) {
    if (err.code == 'failed-precondition') {
      // probably multible tabs open at once
      console.log('persistance failed');
    } else if (err.code == 'unimplemented') {
      // lack of browser support for the feature
      console.log('persistance not available');
    }
  });

  firebase.auth().onAuthStateChanged(function(user) {
    userView.innerHTML = `User : ${user.email}`;
    if (user.email == "admin.simpalkes@rsudklu.com") {
      // User is signed in.
      console.log(user.email);
      console.log('login success!')
      form.style.visibility = "visible"

      // real-time listener
      db.collection('alkes').orderBy('nama_alat', 'asc').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            renderRecipe(change.doc.data(), change.doc.id);
          }
          if(change.type === 'removed'){
            removeRecipe(change.doc.id);
          }
        });
        let progress = document.querySelector('.progress');
        progress.remove();
      });

      db.collection('kategori_alkes').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            //renderSelect(change.doc.data());
          }
        });
      });
      
    }
    if (user.email == "kasi.penunjang.medik@rsudklu.com"){
        let menuKaru = document.getElementById("karu");
        menuKaru.remove()
    }
    if (user.email == "igd@rsudklu.com" || user.email == "icu@rsudklu.com"){
      let menuKaru = document.getElementById("verifikasi");
      menuKaru.remove()
    } else {
      // No user is signed in.
      
    }
  });  



// add new recipe
const form = document.querySelector('form');
var e = document.getElementById("kategori");
form.addEventListener('submit', evt => {
  evt.preventDefault();

  const recipe = {
    nama_alat: form.title.value,
    jenis_alat: form.ingredients.value,
    kategori_alat: e.options[e.selectedIndex].value
  };

  db.collection('alkes').add(recipe)
    .catch(err => console.log(err));

  form.title.value = '';
  form.ingredients.value = '';
  
  M.toast({html: 'Data alkes berhasi tersimpan!'});
  
});

// remove a recipe
const recipeContainer = document.querySelector('.recipes');
recipeContainer.addEventListener('click', evt => {
  if(evt.target.tagName === 'I'){
    const id = evt.target.getAttribute('data-id');
    //console.log(id);
    db.collection('alkes').doc(id).delete();
  }
})