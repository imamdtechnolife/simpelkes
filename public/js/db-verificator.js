var title = document.getElementById('title')
const btnSubmitRadiologi = document.getElementById('submitRadiologi')
const btnSubmitLab = document.getElementById("submitLab")
const btnSubmitGizi = document.getElementById('submitGizi')
const btnSubmitUtdrs = document.getElementById('submitUtdrs')
const btnSubmitIgd = document.getElementById('submitIgd')
const btnSubmitIcu = document.getElementById('submitIcu')
const btnSubmitNicu = document.getElementById('submitNicu')
const btnSubmitIrna1 = document.getElementById('submitIrna1')
const btnSubmitIrna2 = document.getElementById('submitIrna2')
const btnSubmitOk = document.getElementById('submitOk')
const btnSubmitAnak = document.getElementById('submitAnak')
const btnSubmitBersalin = document.getElementById('submitBersalin')
const btnSubmitNifas = document.getElementById('submitNifas')
const btnSubmitPoli = document.getElementById('submitPoli')

const btnRefreshRadiologi = document.getElementById('refreshRadiologi')
const btnRefreshLab = document.getElementById('refreshLab')
const btnRefreshGizi = document.getElementById('refreshGizi')
const btnRefreshUtdrs = document.getElementById('refreshUtdrs')
const btnRefreshIgd = document.getElementById('refreshIgd')
const btnRefreshIcu = document.getElementById('refreshIcu')
const btnRefreshNicu = document.getElementById('refreshNicu')
const btnRefreshIrna1 = document.getElementById('refreshIrna1')
const btnRefreshIrna2 = document.getElementById('refreshIrna2')
const btnRefreshOk = document.getElementById('refreshOk')
const btnRefreshAnak = document.getElementById('refreshAnak')
const btnRefreshBersalin = document.getElementById('refreshBersalin')
const btnRefreshNifas = document.getElementById('refreshNifas')
const btnRefreshPoli = document.getElementById('refreshPoli')

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
  function kabidPenunjangMedik(email, lab, radiologi, gizi, utdrs, igd, icu, nicu, irna1, irna2, ok, anak, bersalin, nifas, poli){
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
      if(utdrs){
        db.collection(utdrs).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanUtdrs(change.doc.data());
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });
      }
      if(igd){
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

  // list usulan alkes pelayanan medik yang di verifikasi oleh kasi keperawatan
  function kasiKeperawatan(email, igd, icu, nicu, irna1, irna2, ok, anak, bersalin, nifas, poli){ 
    // icu, nicu, irna1, irna2, ok, anak, bersalin, nifas, hd, poli, polianak, polifisioterapi){
    if(email == "kasi.keperawatan@rsudklu.com"){
      if(igd){
        db.collection(igd).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanIgd(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressIgd');
          progress.remove();
        });
        btnSubmitIgd.disabled = true
      }
      if(icu){
        db.collection(icu).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanIcu(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressIcu');
          progress.remove();
        });
        btnSubmitIcu.disabled = true
      }
      if(nicu){
        db.collection(nicu).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanNicu(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressNicu');
          progress.remove();
        });
        btnSubmitNicu.disabled = true
      }
      if(irna1){
        db.collection(irna1).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanIrna1(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressIrna1');
          progress.remove();
        });
        btnSubmitIrna1.disabled = true
      }
      if(irna2){
        db.collection(irna2).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanIrna2(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressIrna2');
          progress.remove();
        });
        btnSubmitIrna2.disabled = true
      }
      if(ok){
        db.collection(ok).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanOk(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressOk');
          progress.remove();
        });
        btnSubmitOk.disabled = true
      }
      if(anak){
        db.collection(anak).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanAnak(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressAnak');
          progress.remove();
        });
        btnSubmitAnak.disabled = true
      }
      if(bersalin){
        db.collection(bersalin).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanBersalin(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressBersalin');
          progress.remove();
        });
        btnSubmitBersalin.disabled = true
      }
      if(nifas){
        db.collection(nifas).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanNifas(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressNifas');
          progress.remove();
        });
        btnSubmitNifas.disabled = true
      }
      if(poli){
        db.collection(poli).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanPoli(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressPoli');
          progress.remove();
        });
        btnSubmitPoli.disabled = true
      }
    }
  }

  //list usulan alkes for pelayanan medik
  function kabidPelayanan(email, igd, icu, nicu, irna1, irna2, ok, anak, bersalin, nifas, poli){ 
    // icu, nicu, irna1, irna2, ok, anak, bersalin, nifas, hd, poli, polianak, polifisioterapi){
    if(email == "kabid.pelayanan@rsudklu.com"){
      if(igd){
        db.collection("kasiKeperawatan/daftarAlkes/"+igd).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanIgd(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressIgd');
          progress.remove();
        });
        btnSubmitIgd.disabled = true
      }
      if(icu){
        db.collection("kasiKeperawatan/daftarAlkes/"+icu).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanIcu(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressIcu');
          progress.remove();
        });
        btnSubmitIcu.disabled = true
      }
      if(nicu){
        db.collection("kasiKeperawatan/daftarAlkes/"+nicu).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanNicu(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressNicu');
          progress.remove();
        });
        btnSubmitNicu.disabled = true
      }
      if(irna1){
        db.collection("kasiKeperawatan/daftarAlkes/"+irna1).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanIrna1(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressIrna1');
          progress.remove();
        });
        btnSubmitIrna1.disabled = true
      }
      if(irna2){
        db.collection("kasiKeperawatan/daftarAlkes/"+irna2).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanIrna2(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressIrna2');
          progress.remove();
        });
        btnSubmitIrna2.disabled = true
      }
      if(ok){
        db.collection("kasiKeperawatan/daftarAlkes/"+ok).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanOk(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressOk');
          progress.remove();
        });
        btnSubmitOk.disabled = true
      }
      if(anak){
        db.collection("kasiKeperawatan/daftarAlkes/"+anak).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanAnak(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressAnak');
          progress.remove();
        });
        btnSubmitAnak.disabled = true
      }
      if(bersalin){
        db.collection("kasiKeperawatan/daftarAlkes/"+bersalin).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanBersalin(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressBersalin');
          progress.remove();
        });
        btnSubmitBersalin.disabled = true
      }
      if(nifas){
        db.collection("kasiKeperawatan/daftarAlkes/"+nifas).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanNifas(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressNifas');
          progress.remove();
        });
        btnSubmitNifas.disabled = true
      }
      if(poli){
        db.collection("kasiKeperawatan/daftarAlkes/"+poli).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanPoli(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressPoli');
          progress.remove();
        });
        btnSubmitPoli.disabled = true
      }
    }
  }
  // list usulan alkes for penunjang medik
  function kasiPenunjangMedik(email, lab, radiologi, gizi, utdrs){
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
      if(utdrs){
        db.collection(utdrs).onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderPilihanUtdrs(change.doc.data());
            }
          });
          let progress = document.querySelector('.progressUtdrs');
          progress.remove();
        });
        btnSubmitGizi.disabled = true
      } 
    } 
  }

  // action refresh button for penunjang medik
  function actionRefreshButtonPenunjangMedik(email, collection){
    if(email == "kasi.penunjang.medik@rsudklu.com" || "kabid.penunjang.medik@rsudklu.com"){
      btnRefreshLab.addEventListener('click', e => {
            db.collection(collection+"/daftarAlkes/ruangLABORATORIUM")
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    doc.ref.delete()
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
        btnSubmitLab.disabled = false
        btnRefreshLab.disabled = true    
      })
      btnRefreshRadiologi.addEventListener('click', e => {
            db.collection(collection+"/daftarAlkes/ruangRADIOLOGI")
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    doc.ref.delete()
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
        btnSubmitRadiologi.disabled = false
        btnRefreshRadiologi.disabled = true    
      })
      btnRefreshGizi.addEventListener('click', e => {
            db.collection(collection+"/daftarAlkes/ruangGIZI")
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    doc.ref.delete()
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
        btnSubmitGizi.disabled = false
        btnRefreshGizi.disabled = true    
      })
      btnRefreshUtdrs.addEventListener('click', e => {
        db.collection(collection+"/daftarAlkes/ruangUTDRS")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                doc.ref.delete()
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
        btnSubmitUtdrs.disabled = false
        btnRefreshUtdrs.disabled = true    
      })
    }
    
  }

  // action submit button for kasi penunjang
  function actionButtonPenunjangMedik(email, collection){
    if(email == "kasi.penunjang.medik@rsudklu.com" || "kabid.penunjang.medik@rsudklu.com"){
      btnSubmitLab.addEventListener('click', e => {
        
        let daftarUsulanAlkesLab = document.querySelectorAll('.alkesLab')

        daftarUsulanAlkesLab.forEach(element => {
          if(element.listTerpilih.checked){
            const usulanAlkesLabdisetujuiKasi = {
              nama_alat : element.listTerpilih.value,
              jumlah_alat : element.jumlah.value
            }
            console.log(usulanAlkesLabdisetujuiKasi)
    
            db.collection(collection+"/daftarAlkes/ruangLABORATORIUM").add(usulanAlkesLabdisetujuiKasi)
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
    
            db.collection(collection+"/daftarAlkes/ruangRADIOLOGI").add(usulanAlkesRadiologidisetujuiKasi)
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
    
            db.collection(collection+"/daftarAlkes/ruangGIZI").add(usulanAlkesGizidisetujuiKasi)
            .catch(err => console.log(err))
          }
        })
        M.toast({html: 'Data alkes berhasil tersimpan!'});
        btnSubmitGizi.disabled = true
        btnRefreshGizi.disabled = false
      })
      btnSubmitUtdrs.addEventListener('click', e => {
        
        let daftarUsulanAlkesUtdrs = document.querySelectorAll('.alkesUtdrs')

        daftarUsulanAlkesUtdrs.forEach(element => {
          if(element.listTerpilih.checked){
            const usulanAlkesUtdrsdisetujuiKasi = {
              nama_alat : element.listTerpilih.value,
              jumlah_alat : element.jumlah.value
            }
            console.log(usulanAlkesUtdrsdisetujuiKasi)
    
            db.collection(collection+"/daftarAlkes/ruangUTDRS").add(usulanAlkesUtdrsdisetujuiKasi)
            .catch(err => console.log(err))
          }
        })
        M.toast({html: 'Data alkes berhasil tersimpan!'});
        btnSubmitGizi.disabled = true
        btnRefreshGizi.disabled = false
      })
    }
  }

  // action refresh button for kabid pelayanan
  function actionRefreshButtonKabidPelayanan(collection){
    // if(email == "kabid.penunjang.medik@rsudklu.com"){
    
    btnRefreshIgd.addEventListener('click', e => {
      // firebase.auth().onAuthStateChanged(function(user) {
      //   if(user.email == email){
          db.collection(collection+"/daftarAlkes/ruangIGD")
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  doc.ref.delete()
              });
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });
      //   }
      // })
      btnSubmitIgd.disabled = false
      btnRefreshIgd.disabled = true    
    })
    btnRefreshIcu.addEventListener('click', e => {
      // firebase.auth().onAuthStateChanged(function(user) {
      //   if(user.email == email){
          db.collection(collection+"/daftarAlkes/ruangICU")
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  doc.ref.delete()
              });
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });
      //   }
      // })
      btnSubmitIcu.disabled = false
      btnRefreshIcu.disabled = true    
    })
    btnRefreshNicu.addEventListener('click', e => {
      // firebase.auth().onAuthStateChanged(function(user) {
      //   if(user.email == email){
          db.collection(collection+"/daftarAlkes/ruangNICU")
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  doc.ref.delete()
              });
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });
      //   }
      // })
      btnSubmitNicu.disabled = false
      btnRefreshNicu.disabled = true    
    })
    btnRefreshIrna1.addEventListener('click', e => {
      // firebase.auth().onAuthStateChanged(function(user) {
      //   if(user.email == email){
          db.collection(collection+"/daftarAlkes/ruangIRNA1")
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  doc.ref.delete()
              });
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });
      //   }
      // })
      btnSubmitIrna1.disabled = false
      btnRefreshIrna1.disabled = true    
    })
    btnRefreshIrna2.addEventListener('click', e => {
      // firebase.auth().onAuthStateChanged(function(user) {
      //   if(user.email == email){
          db.collection(collection+"/daftarAlkes/ruangIRNA2")
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  doc.ref.delete()
              });
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });
      //   }
      // })
      btnSubmitIrna2.disabled = false
      btnRefreshIrna2.disabled = true    
    })
    btnRefreshOk.addEventListener('click', e => {
      // firebase.auth().onAuthStateChanged(function(user) {
      //   if(user.email == email){
          db.collection(collection+"/daftarAlkes/ruangOK")
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  doc.ref.delete()
              });
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });
      //   }
      // })
      btnSubmitOk.disabled = false
      btnRefreshOk.disabled = true    
    })
    btnRefreshAnak.addEventListener('click', e => {
      // firebase.auth().onAuthStateChanged(function(user) {
      //   if(user.email == email){
          db.collection(collection+"/daftarAlkes/ruangANAK")
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  doc.ref.delete()
              });
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });
      //   }
      // })
      btnSubmitAnak.disabled = false
      btnRefreshAnak.disabled = true    
    })
    btnRefreshBersalin.addEventListener('click', e => {
      // firebase.auth().onAuthStateChanged(function(user) {
      //   if(user.email == email){
          db.collection(collection+"/daftarAlkes/ruangBERSALIN")
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  doc.ref.delete()
              });
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });
      //   }
      // })
      btnSubmitBersalin.disabled = false
      btnRefreshBersalin.disabled = true    
    })
    btnRefreshNifas.addEventListener('click', e => {
      // firebase.auth().onAuthStateChanged(function(user) {
      //   if(user.email == email){
          db.collection(collection+"/daftarAlkes/ruangNIFAS")
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  doc.ref.delete()
              });
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });
      //   }
      // })
      btnSubmitNifas.disabled = false
      btnRefreshNifas.disabled = true    
    })
    btnRefreshPoli.addEventListener('click', e => {
      // firebase.auth().onAuthStateChanged(function(user) {
      //   if(user.email == email){
          db.collection(collection+"/daftarAlkes/ruangPOLI")
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  doc.ref.delete()
              });
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });
      //   }
      // })
      btnSubmitPoli.disabled = false
      btnRefreshPoli.disabled = true    
    })
  }
  // }

  // action refresh button for kasi keperawatan
  function actionRefreshButtonKeperawatan(email){
    btnRefreshIgd.addEventListener('click', e => {
      firebase.auth().onAuthStateChanged(function(user) {
        if(user.email == email){
          db.collection("kasiKeperawatan/daftarAlkes/ruangIGD")
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
      btnSubmitIgd.disabled = false
      btnRefreshIgd.disabled = true    
    })
    btnRefreshIcu.addEventListener('click', e => {
      firebase.auth().onAuthStateChanged(function(user) {
        if(user.email == email){
          db.collection("kasiKeperawatan/daftarAlkes/ruangICU")
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
      btnSubmitIcu.disabled = false
      btnRefreshIcu.disabled = true    
    })
    btnRefreshNicu.addEventListener('click', e => {
      firebase.auth().onAuthStateChanged(function(user) {
        if(user.email == email){
          db.collection("kasiKeperawatan/daftarAlkes/ruangNICU")
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
      btnSubmitNicu.disabled = false
      btnRefreshNicu.disabled = true    
    })
    btnRefreshIrna1.addEventListener('click', e => {
      firebase.auth().onAuthStateChanged(function(user) {
        if(user.email == email){
          db.collection("kasiKeperawatan/daftarAlkes/ruangIRNA1")
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
      btnSubmitIrna1.disabled = false
      btnRefreshIrna1.disabled = true    
    })
    btnRefreshIrna2.addEventListener('click', e => {
      firebase.auth().onAuthStateChanged(function(user) {
        if(user.email == email){
          db.collection("kasiKeperawatan/daftarAlkes/ruangIRNA2")
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
      btnSubmitIrna2.disabled = false
      btnRefreshIrna2.disabled = true    
    })
    btnRefreshOk.addEventListener('click', e => {
      firebase.auth().onAuthStateChanged(function(user) {
        if(user.email == email){
          db.collection("kasiKeperawatan/daftarAlkes/ruangOK")
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
      btnSubmitOk.disabled = false
      btnRefreshOk.disabled = true    
    })
    btnRefreshAnak.addEventListener('click', e => {
      firebase.auth().onAuthStateChanged(function(user) {
        if(user.email == email){
          db.collection("kasiKeperawatan/daftarAlkes/ruangANAK")
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
      btnSubmitAnak.disabled = false
      btnRefreshAnak.disabled = true    
    })
    btnRefreshBersalin.addEventListener('click', e => {
      firebase.auth().onAuthStateChanged(function(user) {
        if(user.email == email){
          db.collection("kasiKeperawatan/daftarAlkes/ruangBERSALIN")
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
      btnSubmitBersalin.disabled = false
      btnRefreshBersalin.disabled = true    
    })
    btnRefreshNifas.addEventListener('click', e => {
      firebase.auth().onAuthStateChanged(function(user) {
        if(user.email == email){
          db.collection("kasiKeperawatan/daftarAlkes/ruangNIFAS")
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
      btnSubmitNifas.disabled = false
      btnRefreshNifas.disabled = true    
    })
    btnRefreshPoli.addEventListener('click', e => {
      firebase.auth().onAuthStateChanged(function(user) {
        if(user.email == email){
          db.collection("kasiKeperawatan/daftarAlkes/ruangPOLI")
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
      btnSubmitPoli.disabled = false
      btnRefreshPoli.disabled = true    
    })
  }

  // action submit button for kabid pelayanan
  function actionButtonKabidPelayanan(collection){
    btnSubmitIgd.addEventListener('click', e => {
      
      let daftarUsulanAlkesIgd = document.querySelectorAll('.alkesIgd')

      daftarUsulanAlkesIgd.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesIgddisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesIgddisetujuiKasi)
  
          db.collection(collection+"/daftarAlkes/ruangIGD").add(usulanAlkesIgddisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Usulan alkes berhasil terkirim!'});
      btnSubmitIgd.disabled = true
      btnRefreshIgd.disabled = false
    })
    btnSubmitIcu.addEventListener('click', e => {
      
      let daftarUsulanAlkes = document.querySelectorAll('.alkesIcu')

      daftarUsulanAlkes.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesdisetujuiKasi)
  
          db.collection(collection+"/daftarAlkes/ruangICU").add(usulanAlkesdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Usulan alkes berhasil terkirim!'});
      btnSubmitIcu.disabled = true
      btnRefreshIcu.disabled = false
    })
    btnSubmitNicu.addEventListener('click', e => {
      
      let daftarUsulanAlkes = document.querySelectorAll('.alkesNicu')

      daftarUsulanAlkes.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesdisetujuiKasi)
  
          db.collection(collection+"/daftarAlkes/ruangNICU").add(usulanAlkesdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Usulan alkes berhasil terkirim!'});
      btnSubmitNicu.disabled = true
      btnRefreshNicu.disabled = false
    })
    btnSubmitIrna1.addEventListener('click', e => {
      
      let daftarUsulanAlkes = document.querySelectorAll('.alkesIrna1')

      daftarUsulanAlkes.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesdisetujuiKasi)
  
          db.collection(collection+"/daftarAlkes/ruangIRNA1").add(usulanAlkesdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Usulan alkes berhasil terkirim!'});
      btnSubmitIrna1.disabled = true
      btnRefreshIrna1.disabled = false
    })
    btnSubmitIrna2.addEventListener('click', e => {
      
      let daftarUsulanAlkes = document.querySelectorAll('.alkesIrna2')

      daftarUsulanAlkes.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesdisetujuiKasi)
  
          db.collection(collection+"/daftarAlkes/ruangIRNA2").add(usulanAlkesdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Usulan alkes berhasil terkirim!'});
      btnSubmitIrna2.disabled = true
      btnRefreshIrna2.disabled = false
    })
    btnSubmitOk.addEventListener('click', e => {
      
      let daftarUsulanAlkes = document.querySelectorAll('.alkesOk')

      daftarUsulanAlkes.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesdisetujuiKasi)
  
          db.collection(collection+"/daftarAlkes/ruangOK").add(usulanAlkesdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Usulan alkes berhasil terkirim!'});
      btnSubmitOk.disabled = true
      btnRefreshOk.disabled = false
    })
    btnSubmitAnak.addEventListener('click', e => {
      
      let daftarUsulanAlkes = document.querySelectorAll('.alkesAnak')

      daftarUsulanAlkes.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesdisetujuiKasi)
  
          db.collection(collection+"/daftarAlkes/ruangANAK").add(usulanAlkesdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Usulan alkes berhasil terkirim!'});
      btnSubmitAnak.disabled = true
      btnRefreshAnak.disabled = false
    })
    btnSubmitBersalin.addEventListener('click', e => {
      
      let daftarUsulanAlkes = document.querySelectorAll('.alkesBersalin')

      daftarUsulanAlkes.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesdisetujuiKasi)
  
          db.collection(collection+"/daftarAlkes/ruangBERSALIN").add(usulanAlkesdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Usulan alkes berhasil terkirim!'});
      btnSubmitBersalin.disabled = true
      btnRefreshBersalin.disabled = false
    })
    btnSubmitNifas.addEventListener('click', e => {
      
      let daftarUsulanAlkes = document.querySelectorAll('.alkesNifas')

      daftarUsulanAlkes.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesdisetujuiKasi)
  
          db.collection(collection+"/daftarAlkes/ruangNIFAS").add(usulanAlkesdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Usulan alkes berhasil terkirim!'});
      btnSubmitNifas.disabled = true
      btnRefreshNifas.disabled = false
    })
    btnSubmitPoli.addEventListener('click', e => {
      
      let daftarUsulanAlkes = document.querySelectorAll('.alkesPoli')

      daftarUsulanAlkes.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesdisetujuiKasi)
  
          db.collection(collection+"/daftarAlkes/ruangPOLI").add(usulanAlkesdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Usulan alkes berhasil terkirim!'});
      btnSubmitPoli.disabled = true
      btnRefreshPoli.disabled = false
    })
  }

  // action submit button fir kasi keperawatan
  function actionButtonKeperawatan(){
    btnSubmitIgd.addEventListener('click', e => {
      // db.collection('kasiPenunjangmedik/daftarAlkes/ruangLABORATORIUM').add()
      
      let daftarUsulanAlkesIgd = document.querySelectorAll('.alkesIgd')

      daftarUsulanAlkesIgd.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesIgddisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesIgddisetujuiKasi)
  
          db.collection("kasiKeperawatan/daftarAlkes/ruangIGD").add(usulanAlkesIgddisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Data alkes berhasil tersimpan!'});
      btnSubmitIgd.disabled = true
      btnRefreshIgd.disabled = false
    })
    btnSubmitIcu.addEventListener('click', e => {
      // db.collection('kasiPenunjangmedik/daftarAlkes/ruangLABORATORIUM').add()
      
      let daftarUsulanAlkes = document.querySelectorAll('.alkesIcu')

      daftarUsulanAlkes.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesdisetujuiKasi)
  
          db.collection("kasiKeperawatan/daftarAlkes/ruangICU").add(usulanAlkesdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Data alkes berhasil tersimpan!'});
      btnSubmitIcu.disabled = true
      btnRefreshIcu.disabled = false
    })
    btnSubmitNicu.addEventListener('click', e => {
      // db.collection('kasiPenunjangmedik/daftarAlkes/ruangLABORATORIUM').add()
      
      let daftarUsulanAlkes = document.querySelectorAll('.alkesNicu')

      daftarUsulanAlkes.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesdisetujuiKasi)
  
          db.collection("kasiKeperawatan/daftarAlkes/ruangNICU").add(usulanAlkesdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Data alkes berhasil tersimpan!'});
      btnSubmitNicu.disabled = true
      btnRefreshNicu.disabled = false
    })
    btnSubmitIrna1.addEventListener('click', e => {
      // db.collection('kasiPenunjangmedik/daftarAlkes/ruangLABORATORIUM').add()
      
      let daftarUsulanAlkes = document.querySelectorAll('.alkesIrna1')

      daftarUsulanAlkes.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesdisetujuiKasi)
  
          db.collection("kasiKeperawatan/daftarAlkes/ruangIRNA1").add(usulanAlkesdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Data alkes berhasil tersimpan!'});
      btnSubmitIrna1.disabled = true
      btnRefreshIrna1.disabled = false
    })
    btnSubmitIrna2.addEventListener('click', e => {
      // db.collection('kasiPenunjangmedik/daftarAlkes/ruangLABORATORIUM').add()
      
      let daftarUsulanAlkes = document.querySelectorAll('.alkesIrna2')

      daftarUsulanAlkes.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesdisetujuiKasi)
  
          db.collection("kasiKeperawatan/daftarAlkes/ruangIRNA2").add(usulanAlkesdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Data alkes berhasil tersimpan!'});
      btnSubmitIrna2.disabled = true
      btnRefreshIrna2.disabled = false
    })
    btnSubmitOk.addEventListener('click', e => {
      // db.collection('kasiPenunjangmedik/daftarAlkes/ruangLABORATORIUM').add()
      
      let daftarUsulanAlkes = document.querySelectorAll('.alkesOk')

      daftarUsulanAlkes.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesdisetujuiKasi)
  
          db.collection("kasiKeperawatan/daftarAlkes/ruangOK").add(usulanAlkesdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Data alkes berhasil tersimpan!'});
      btnSubmitOk.disabled = true
      btnRefreshOk.disabled = false
    })
    btnSubmitAnak.addEventListener('click', e => {
      // db.collection('kasiPenunjangmedik/daftarAlkes/ruangLABORATORIUM').add()
      
      let daftarUsulanAlkes = document.querySelectorAll('.alkesAnak')

      daftarUsulanAlkes.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesdisetujuiKasi)
  
          db.collection("kasiKeperawatan/daftarAlkes/ruangANAK").add(usulanAlkesdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Usulan alkes berhasil terkirim!'});
      btnSubmitAnak.disabled = true
      btnRefreshAnak.disabled = false
    })
    btnSubmitBersalin.addEventListener('click', e => {
      // db.collection('kasiPenunjangmedik/daftarAlkes/ruangLABORATORIUM').add()
      
      let daftarUsulanAlkes = document.querySelectorAll('.alkesBersalin')

      daftarUsulanAlkes.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesdisetujuiKasi)
  
          db.collection("kasiKeperawatan/daftarAlkes/ruangBERSALIN").add(usulanAlkesdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Usulan alkes berhasil terkirim!'});
      btnSubmitBersalin.disabled = true
      btnRefreshBersalin.disabled = false
    })
    btnSubmitNifas.addEventListener('click', e => {
      // db.collection('kasiPenunjangmedik/daftarAlkes/ruangLABORATORIUM').add()
      
      let daftarUsulanAlkes = document.querySelectorAll('.alkesNifas')

      daftarUsulanAlkes.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesdisetujuiKasi)
  
          db.collection("kasiKeperawatan/daftarAlkes/ruangNIFAS").add(usulanAlkesdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Usulan alkes berhasil terkirim!'});
      btnSubmitNifas.disabled = true
      btnRefreshNifas.disabled = false
    })
    btnSubmitPoli.addEventListener('click', e => {
      // db.collection('kasiPenunjangmedik/daftarAlkes/ruangLABORATORIUM').add()
      
      let daftarUsulanAlkes = document.querySelectorAll('.alkesPoli')

      daftarUsulanAlkes.forEach(element => {
        if(element.listTerpilih.checked){
          const usulanAlkesdisetujuiKasi = {
            nama_alat : element.listTerpilih.value,
            jumlah_alat : element.jumlah.value
          }
          console.log(usulanAlkesdisetujuiKasi)
  
          db.collection("kasiKeperawatan/daftarAlkes/ruangPOLI").add(usulanAlkesdisetujuiKasi)
          .catch(err => console.log(err))
        }
      })
      M.toast({html: 'Usulan alkes berhasil terkirim!'});
      btnSubmitPoli.disabled = true
      btnRefreshPoli.disabled = false
    })
  }

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      const userView = document.getElementById('user')
      userView.innerHTML = `User : ${user.email}`
      console.log('login success!')

      let email = user.email;
      if(email == "kabid.penunjang.medik@rsudklu.com"){
        kabidPenunjangMedik(email,
        "kasiPenunjangMedik/daftarAlkes/ruangLABORATORIUM", 
        "kasiPenunjangMedik/daftarAlkes/ruangRADIOLOGI", 
        "kasiPenunjangMedik/daftarAlkes/ruangGIZI",
        "kasiPenunjangMedik/daftarAlkes/ruangUTDRS",
        "KabidPelayananMedik/daftarAlkes/ruangIGD",
        "KabidPelayananMedik/daftarAlkes/ruangICU",
        "KabidPelayananMedik/daftarAlkes/ruangNICU",
        "KabidPelayananMedik/daftarAlkes/ruangIRNA1",
        "KabidPelayananMedik/daftarAlkes/ruangIRNA2",
        "KabidPelayananMedik/daftarAlkes/ruangOK",
        "KabidPelayananMedik/daftarAlkes/ruangANAK",
        "KabidPelayananMedik/daftarAlkes/ruangBERSALIN",
        "KabidPelayananMedik/daftarAlkes/ruangNIFAS",
        "KabidPelayananMedik/daftarAlkes/ruangPOLI")
        actionRefreshButtonPenunjangMedik(email, "kabidPenunjangMedik")
        actionButtonPenunjangMedik(email, "kabidPenunjangMedik")
        actionRefreshButtonKabidPelayanan("kabidPenunjangMedik")
        actionButtonKabidPelayanan("kabidPenunjangMedik")
      }
      if(email == "kasi.penunjang.medik@rsudklu.com"){
        kasiPenunjangMedik(email, "ruangLABORATORIUM", "ruangRADIOLOGI", "ruangGIZI", "ruangUTDRS");
        actionRefreshButtonPenunjangMedik(email, "kasiPenunjangMedik")
        actionButtonPenunjangMedik(email, "kasiPenunjangMedik")
      }
      if(email == "kasi.keperawatan@rsudklu.com"){
        kasiKeperawatan(email, "ruangIGD", "ruangICU", "ruangNICU", "ruangIRNA1", "ruangIRNA2", "ruangOK", "ruangANAK", "ruangBERSALIN", "ruangNIFAS", "ruangPOLI") 
        actionRefreshButtonKeperawatan(email)
        actionButtonKeperawatan()
      }
      if(email == "kabid.pelayanan@rsudklu.com"){
        kabidPelayanan(email, "ruangIGD", "ruangICU", "ruangNICU", "ruangIRNA1", "ruangIRNA2", "ruangOK", "ruangANAK", "ruangBERSALIN", "ruangNIFAS", "ruangPOLI")
        actionRefreshButtonKabidPelayanan("KabidPelayananMedik")
        actionButtonKabidPelayanan("KabidPelayananMedik")
      }
      
    } else {
      // No user is signed in.
      alert("you're not login")
    }
  });  



