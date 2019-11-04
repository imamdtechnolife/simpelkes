var title = document.getElementById('title')

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


  // list usulan alkes fix
  function kabidPenunjangMedik(email, lab, radiologi, gizi, igd, icu, nicu, irna1, irna2, ok, anak, bersalin, nifas, poli){
    if(email == "kabid.penunjang.medik@rsudklu.com" ||
    "laboratorium@rsudklu.com" ||
    "radiologi@rsudklu.com" || 
    "gizi@rsudklu.com" ||
    "igd@rsudklu.com" ||
    "icu@rsudklu.com" ||
    "nicu@rsudklu.com" ||
    "irna1@rsudklu.com" ||
    "irna2@rsudklu.com" || 
    "ok@rsudklu.com" ||
    "anak@rsudklu.com" ||
    "bersalin@rsudklu.com" ||
    "nifas@rsudklu.com" ||
    "poli@rsudklu.com" ){
      if(lab){
        db.collection(lab).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanLab(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressLab');
          progress.remove();
        });
      }
      if(radiologi){
        db.collection(radiologi).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanRadiologi(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressRadiologi');
          progress.remove();
        });
      }
      if(gizi){
        db.collection(gizi).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanGizi(change.doc.data());
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });
      }
      if(igd){
        console.log("dragon")
        db.collection(igd).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanIgd(change.doc.data());
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });
      }
      if(icu){
        db.collection(icu).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanIcu(change.doc.data());
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });
      }
      if(nicu){
        db.collection(nicu).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanNicu(change.doc.data());
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });
      }
      if(irna1){
        db.collection(irna1).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanIrna1(change.doc.data());
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });
      }
      if(irna2){
        db.collection(irna2).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanIrna2(change.doc.data());
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });
      }
      if(ok){
        db.collection(gizi).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanOk(change.doc.data());
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });
      }
      if(anak){
        db.collection(anak).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanAnak(change.doc.data());
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });
      }
      if(bersalin){
        db.collection(bersalin).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanBersalin(change.doc.data());
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });
      }
      if(nifas){
        db.collection(nifas).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanNifas(change.doc.data());
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });
      }
      if(poli){
        db.collection(poli).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanPoli(change.doc.data());
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });
      }
    }
  }

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      const userView = document.getElementById('user')
      userView.innerHTML = `User : ${user.email}`
      console.log('login success!')

      let email = user.email;
      if(email == "kabid.penunjang.medik@rsudklu.com" ||  
      "kabid.pelayanan@rsudklu.com" ||
      "kasi.penunjang.medik@rsudklu.com" ||
      "kasi.keperawatan@rsudklu.com" ||
      "laboratorium@rsudklu.com" ||
      "radiologi@rsudklu.com" || 
      "gizi@rsudklu.com" ||
      "igd@rsudklu.com" ||
      "icu@rsudklu.com" ||
      "nicu@rsudklu.com" ||
      "irna1@rsudklu.com" ||
      "irna2@rsudklu.com" || 
      "ok@rsudklu.com" ||
      "anak@rsudklu.com" ||
      "bersalin@rsudklu.com" ||
      "nifas@rsudklu.com" ||
      "poli@rsudklu.com"){
        kabidPenunjangMedik(email,
        "kabidPenunjangMedik/daftarAlkes/ruangLABORATORIUM", 
        "kabidPenunjangMedik/daftarAlkes/ruangRADIOLOGI", 
        "kabidPenunjangMedik/daftarAlkes/ruangGIZI",
        "kabidPenunjangMedik/daftarAlkes/ruangIGD",
        "kabidPenunjangMedik/daftarAlkes/ruangICU",
        "kabidPenunjangMedik/daftarAlkes/ruangNICU",
        "kabidPenunjangMedik/daftarAlkes/ruangIRNA1",
        "kabidPenunjangMedik/daftarAlkes/ruangIRNA2",
        "kabidPenunjangMedik/daftarAlkes/ruangOK",
        "kabidPenunjangMedik/daftarAlkes/ruangANAK",
        "kabidPenunjangMedik/daftarAlkes/ruangBERSALIN",
        "kabidPenunjangMedik/daftarAlkes/ruangNIFAS",
        "kabidPenunjangMedik/daftarAlkes/ruangPOLI")
      }
      
    } else {
      // No user is signed in.
      alert("you're not login")
    }
  });  



