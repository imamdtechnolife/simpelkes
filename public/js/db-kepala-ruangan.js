const dbku = firebase.firestore();
const searching = document.getElementById('searching');
const divAlkes = document.querySelector('.alkes');
const menuVerifikasi = document.getElementById("verifikasi")

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
  // searching.addEventListener('change', e => {
  //   console.log(e);
  // })

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
      menuVerifikasi.remove()
      
      // let dragon = [];
      // real-time listener
      dbku.collection('alkes').where("kategori_alat","==","Pelayanan Gawat Darurat").orderBy("nama_alat", "asc").onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            renderAlkes(change.doc.data(), change.doc.id);
            console.log(change.doc.data());
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
      dbku.collection('alkes').where("kategori_alat","==","Pelayanan Anestesiologi dan Terapi Intensif").orderBy("nama_alat", "asc").onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            renderAlkes(change.doc.data(), change.doc.id);
            console.log(change.doc.data());
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
      dbku.collection('alkes').where("kategori_alat","==","Pelayanan Kesehatan Anak").orderBy("nama_alat", "asc").onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            renderAlkes(change.doc.data(), change.doc.id);
            console.log(change.doc.data());
            // dragon = change.doc.data()
            
          }
        });
        let progress = document.querySelector('.progress');
        progress.remove();
      });      
    }
    if (user.email == "irna1@rsudklu.com") {
      // User is signed in.
      console.log(user.email)
      console.log('login success!')
      // let dragon = [];
      // real-time listener
      dbku.collection('alkes').where("kategori_alat","==","Pelayanan Gawat Darurat").orderBy("nama_alat", "asc").onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            renderAlkes(change.doc.data(), change.doc.id);
            console.log(change.doc.data());
            // dragon = change.doc.data()
            
          }
        });
        let progress = document.querySelector('.progress');
        progress.remove();
      });      
    }
    if (user.email == "irna2@rsudklu.com") {
      // User is signed in.
      console.log(user.email)
      console.log('login success!')
      // let dragon = [];
      // real-time listener
      dbku.collection('alkes').where("kategori_alat","==","Pelayanan Gawat Darurat").orderBy("nama_alat", "asc").onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            renderAlkes(change.doc.data(), change.doc.id);
            console.log(change.doc.data());
            // dragon = change.doc.data()
            
          }
        });
        let progress = document.querySelector('.progress');
        progress.remove();
      });      
    }
    if (user.email == "ok@rsudklu.com") {
      // User is signed in.
      console.log(user.email)
      console.log('login success!')

        dbku.collection('alkes').where("kategori_alat","==","Pelayanan Bedah").orderBy("nama_alat", "asc")
        .get().then((querySnapshot) =>{
            querySnapshot.forEach(doc => {
            
                renderAlkes(doc.data(), doc.id);
                console.log(doc.data());
                // dragon = change.doc.data()
      
            })
        })
        
        let progress = document.querySelector('.progress');
        progress.remove();
      }
      if (user.email == "bersalin@rsudklu.com") {
        // User is signed in.
        console.log(user.email)
        console.log('login success!')
        // let dragon = [];
        // real-time listener
        dbku.collection('alkes').where("kategori_alat","==","Pelayanan Obstetri dan Ginekologi").orderBy("nama_alat", "asc").onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderAlkes(change.doc.data(), change.doc.id);
              console.log(change.doc.data());
              // dragon = change.doc.data()
              
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });      
      }
      if (user.email == "nifas@rsudklu.com") {
        // User is signed in.
        console.log(user.email)
        console.log('login success!')
        // let dragon = [];
        // real-time listener
        dbku.collection('alkes').where("kategori_alat","==","Pelayanan Obstetri dan Ginekologi").orderBy("nama_alat", "asc").onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderAlkes(change.doc.data(), change.doc.id);
              console.log(change.doc.data());
              // dragon = change.doc.data()
              
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });      
      }
      if (user.email == "radiologi@rsudklu.com") {
        // User is signed in.
        console.log(user.email)
        console.log('login success!')
        // let dragon = [];
        // real-time listener
        dbku.collection('alkes').where("kategori_alat","==","Pelayanan Radiologi").orderBy("nama_alat", "asc").onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderAlkes(change.doc.data(), change.doc.id);
              console.log(change.doc.data());
              // dragon = change.doc.data()
              
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });      
      }
      if (user.email == "laboratorium@rsudklu.com") {
        // User is signed in.
        console.log(user.email)
        console.log('login success!')
        // let dragon = [];
        // real-time listener
        dbku.collection('alkes').where("kategori_alat","==","Pelayanan Patologi Anotomi").orderBy("nama_alat", "asc").onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderAlkes(change.doc.data(), change.doc.id);
              console.log(change.doc.data());
              // dragon = change.doc.data()
              
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });      
      }       
      if (user.email == "gizi@rsudklu.com") {
        // User is signed in.
        console.log(user.email)
        console.log('login success!')
        // let dragon = [];
        // real-time listener
        dbku.collection('alkes').where("kategori_alat","==","Instalasi Gizi").orderBy("nama_alat", "asc").onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderAlkes(change.doc.data(), change.doc.id);
              console.log(change.doc.data());
              // dragon = change.doc.data()
              
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });      
      }                   
    })                
  // });

