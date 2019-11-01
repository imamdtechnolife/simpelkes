var title = document.getElementById('title')
const btnSubmitRadiologi = document.getElementById('submitRadiologi')
const btnSubmitLab = document.getElementById("submitLab")
const btnSubmitGizi = document.getElementById('submitGizi')
const btnRefreshRadiologi = document.getElementById('refreshRadiologi')
const btnRefreshLab = document.getElementById('refreshLab')
const btnRefreshGizi = document.getElementById('refreshGizi')

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

  function kabidPenunjangMedik(email, lab, radiologi, gizi){
    if(email == "kabid.penunjang.medik@rsudklu.com"){
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
    }
  }

  // menampilkan list ruangan-ruangan yang sudah mengusulkan alat kepada kasi penunjang medik
  function kasiPenunjangMedik(email, lab, radiologi, gizi){
    if(email == "kasi.penunjang.medik@rsudklu.com"){
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
        btnSubmitLab.disabled = true
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
        btnSubmitRadiologi.disabled = true
      }
      if(gizi){
        db.collection(gizi).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanGizi(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressGizi');
          progress.remove();
        });
        btnSubmitGizi.disabled = true
      } 
    } 
  }

  // action refresh button
  function actionRefreshButton(){
    btnRefreshLab.addEventListener('click', e => {
        firebase.auth().onAuthStateChanged(function(user) {
          if(user.email == "kasi.penunjang.medik@rsudklu.com"){
            db.collection("kasiPenunjangMedik/daftarAlkes/ruangLABORATORIUM")
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    doc.ref.delete()
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
          }
        })
        btnSubmitLab.disabled = false
        btnRefreshLab.disabled = true    
    })
    btnRefreshRadiologi.addEventListener('click', e => {
      firebase.auth().onAuthStateChanged(function(user) {
        if(user.email == "kasi.penunjang.medik@rsudklu.com"){
          db.collection("kasiPenunjangMedik/daftarAlkes/ruangRADIOLOGI")
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  doc.ref.delete()
              });
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });
        }
      })
      btnSubmitRadiologi.disabled = false
      btnRefreshRadiologi.disabled = true    
  })
  btnRefreshGizi.addEventListener('click', e => {
    firebase.auth().onAuthStateChanged(function(user) {
      if(user.email == "kasi.penunjang.medik@rsudklu.com"){
        db.collection("kasiPenunjangMedik/daftarAlkes/ruangGIZI")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                doc.ref.delete()
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
      }
    })
    btnSubmitGizi.disabled = false
    btnRefreshGizi.disabled = true    
})
  }
  // action submit button
  function actionButtonPenunjangMedik(){
    btnSubmitLab.addEventListener('click', e => {
      // db.collection('kasiPenunjangmedik/daftarAlkes/ruangLABORATORIUM').add()
      
      let daftarUsulanAlkesLab = document.querySelectorAll('.alkesLab')

      daftarUsulanAlkesLab.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesLabdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesLabdisetujuiKasi)
  
          db.collection("kasiPenunjangMedik/daftarAlkes/ruangLABORATORIUM").add(usulanAlkesLabdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Data alkes berhasil tersimpan!'});
      btnSubmitLab.disabled = true
      btnRefreshLab.disabled = false
    })
    btnSubmitRadiologi.addEventListener('click', e => {
      
      let daftarUsulanAlkesRadiologi = document.querySelectorAll('.alkesRadiologi')

      daftarUsulanAlkesRadiologi.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesRadiologidisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesRadiologidisetujuiKasi)
  
          db.collection("kasiPenunjangMedik/daftarAlkes/ruangRADIOLOGI").add(usulanAlkesRadiologidisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Data alkes berhasil tersimpan!'});
      btnSubmitRadiologi.disabled = true
      btnRefreshRadiologi.disabled = false
    })
    btnSubmitGizi.addEventListener('click', e => {
      
      let daftarUsulanAlkesGizi = document.querySelectorAll('.alkesGizi')

      daftarUsulanAlkesGizi.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesGizidisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesGizidisetujuiKasi)
  
          db.collection("kasiPenunjangMedik/daftarAlkes/ruangGIZI").add(usulanAlkesGizidisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Data alkes berhasil tersimpan!'});
      btnSubmitGizi.disabled = true
      btnRefreshGizi.disabled = false
    })
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
      if(email == "kabid.penunjang.medik@rsudklu.com"){
        kabidPenunjangMedik(email,"kasiPenunjangMedik/daftarAlkes/ruangLABORATORIUM", "kasiPenunjangMedik/daftarAlkes/ruangRADIOLOGI", "kasiPenunjangMedik/daftarAlkes/ruangGIZI")
        btnRefreshGizi.style.display = "none";
        btnRefreshLab.style.display = "none";
        btnRefreshRadiologi.style.display = "none";
        btnSubmitGizi.style.display = "none";
        btnSubmitLab.style.display = "none";
        btnSubmitRadiologi.style.display = "none";
      }
      if(email == "kasi.penunjang.medik@rsudklu.com"){
        kasiPenunjangMedik(email, "ruangLABORATORIUM", "ruangRADIOLOGI", "ruangGIZI");
        actionRefreshButton()
        actionButtonPenunjangMedik()
      }
      
      
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



