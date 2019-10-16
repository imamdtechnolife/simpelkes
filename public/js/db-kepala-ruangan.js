const dbku = firebase.firestore();

dbku.enablePersistence()
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
    if (user) {
      // User is signed in.
      console.log('login success!')

      // real-time listener
      dbku.collection('alkes').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            renderAlkes(change.doc.data(), change.doc.id);
          }
        });
      });
    }
  });

  // add new recipe
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
  evt.preventDefault();
  
  if (uid === admin_igd){

  }
  const recipe = {
    nama_alat: form.title.value,
    jenis_alat: form.ingredients.value,
    kategori_alat: selSelect.value
  };

  db.collection('alkes').add(recipe)
    .catch(err => console.log(err));

  form.title.value = '';
  form.ingredients.value = '';
  
});