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

  function kasiPenunjangMedik(email, lab, radiologi, gizi){
    

    if(email == "kasi.penunjang.medik@rsudklu.com"){
      if(lab){
        db.collection(lab).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanLab(change.doc.data());
            }
          });
        });
      }
      if(radiologi){
        db.collection(radiologi).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanRadiologi(change.doc.data());
            }
          });
        });
      }
      if(gizi){
        db.collection(gizi).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanGizi(change.doc.data());
            }
          });
        });
      }
      
    }
    
  }

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log('login success!')

      // real-time listener
      // db.collection('ruangan').onSnapshot(snapshot => {
      //   snapshot.docChanges().forEach(change => {
      //     if(change.type === 'added'){
      //       renderRoom(change.doc.data());
      //     }
      //   });
      // });

      let email = user.email;

      kasiPenunjangMedik(email, "ruangLABORATORIUM", "ruangRADIOLOGI", "ruangGIZI");
      if(email == "igd@rsudklu.com"){

        db.collection('ruangIGD').onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihan(change.doc.data());
            }
          });
        });

      }
      if(email == "icu@rsudklu.com"){

        db.collection('ruangICU').onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihan(change.doc.data());
            }
          });
        });

      }
      
    } else {
      // No user is signed in.
      alert("you're not login")
    }
  });  



