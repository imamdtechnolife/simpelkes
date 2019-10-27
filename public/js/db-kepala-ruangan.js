const dbku = firebase.firestore();
const searching = document.getElementById('searching');
const divAlkes = document.querySelector('.alkes');

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

  // searching
  searching.addEventListener('change', e => {
    console.log(e);
  })

  firebase.auth().onAuthStateChanged(function(user) {
    if (user.email == "admin.simpalkes@rsudklu.com") {
      // User is signed in.
      console.log(user.email)
      console.log('login success!')
      // let dragon = [];
      // real-time listener
      dbku.collection('alkes').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            renderAlkes(change.doc.data(), change.doc.id);
            // console.log(change.doc.data());
            // dragon = change.doc.data()
            
          }
        });
        let progress = document.querySelector('.progress');
        progress.remove();
      });      
    } 
    if (user.email == "igd@rsudklu.com") {
      // User is signed in.
      console.log(user.email)
      console.log('login success!')
      
      // let dragon = [];
      // real-time listener
      dbku.collection('alkes').where("kategori-alat","==","Pelayanan Gawat Darurat").onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            renderAlkes(change.doc.data(), change.doc.id);
            // console.log(change.doc.data());
            // dragon = change.doc.data()
            
          }
        });
        let progress = document.querySelector('.progress');
        progress.remove();
      });      
    }
    if (user.email == "icu@rsudklu.com") {
      // User is signed in.
      console.log(user.email)
      console.log('login success!')
      // let dragon = [];
      // real-time listener
      dbku.collection('alkes').where("kategori-alat","==","Pelayanan Anestesiologi dan Terapi Intensif").onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            renderAlkes(change.doc.data(), change.doc.id);
            // console.log(change.doc.data());
            // dragon = change.doc.data()
            
          }
        });
        let progress = document.querySelector('.progress');
        progress.remove();
      });      
    }
    if (user.email == "anak@rsudklu.com") {
      // User is signed in.
      console.log(user.email)
      console.log('login success!')
      // let dragon = [];
      // real-time listener
      dbku.collection('alkes').where("kategori_alat","==","Pelayanan Kesehatan Anak").onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            renderAlkes(change.doc.data(), change.doc.id);
            // console.log(change.doc.data());
            // dragon = change.doc.data()
            
          }
        });
        let progress = document.querySelector('.progress');
        progress.remove();
      });      
    }    
  });

