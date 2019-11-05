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
      dbku.collection('ruangIGD').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            renderAlkesTerkirim(change.doc.data(), change.doc.id);
            console.log(change.doc.data());
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
      dbku.collection('ruangICU').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            renderAlkesTerkirim(change.doc.data(), change.doc.id);
            console.log(change.doc.data());
          }
        });
        let progress = document.querySelector('.progress');
        progress.remove();
      });        
    }
    if (user.email == "nicu@rsudklu.com") {
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
      dbku.collection('ruangNICU').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            renderAlkesTerkirim(change.doc.data(), change.doc.id);
            console.log(change.doc.data());
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
      dbku.collection('ruangANAK').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            renderAlkesTerkirim(change.doc.data(), change.doc.id);
            console.log(change.doc.data());
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
      dbku.collection('ruangIRNA1').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            renderAlkesTerkirim(change.doc.data(), change.doc.id);
            console.log(change.doc.data());
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
      dbku.collection('ruangIRNA2').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            renderAlkesTerkirim(change.doc.data(), change.doc.id);
            console.log(change.doc.data());
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
        dbku.collection('ruangOK').onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderAlkesTerkirim(change.doc.data(), change.doc.id);
              console.log(change.doc.data());
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });   
        
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
        dbku.collection('ruangBERSALIN').onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderAlkesTerkirim(change.doc.data(), change.doc.id);
              console.log(change.doc.data());
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
        dbku.collection('ruangNIFAS').onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderAlkesTerkirim(change.doc.data(), change.doc.id);
              console.log(change.doc.data());
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });   
      }
      if (user.email == "poli@rsudklu.com") {
        // User is signed in.
        console.log(user.email)
        console.log('login success!')
        // let dragon = [];
        // real-time listener
        dbku.collection('alkes').where("kategori_alat","==","Pelayanan Penyakit Dalam").orderBy("nama_alat", "asc").onSnapshot(snapshot => {
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
        dbku.collection('ruangPOLI').onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderAlkesTerkirim(change.doc.data(), change.doc.id);
              console.log(change.doc.data());
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
        dbku.collection('ruangRADIOLOGI').onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderAlkesTerkirim(change.doc.data(), change.doc.id);
              console.log(change.doc.data());
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
        dbku.collection('alkes').where("kategori_alat","==","Pelayanan Patologi Klinik").orderBy("nama_alat", "asc").onSnapshot(snapshot => {
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
        dbku.collection('ruangLABORATORIUM').onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderAlkesTerkirim(change.doc.data(), change.doc.id);
              console.log(change.doc.data());
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
        dbku.collection('ruangGIZI').onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderAlkesTerkirim(change.doc.data(), change.doc.id);
              console.log(change.doc.data());
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });    
      } 
      if (user.email == "utdrs@rsudklu.com") {
        // User is signed in.
        console.log(user.email)
        console.log('login success!')
        // let dragon = [];
        // real-time listener
        dbku.collection('alkes').where("kategori_alat","==","Pelayanan UTDRS").orderBy("nama_alat", "asc").onSnapshot(snapshot => {
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
        dbku.collection('ruangUTDRS').onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type === 'added'){
              renderAlkesTerkirim(change.doc.data(), change.doc.id);
              console.log(change.doc.data());
            }
          });
          let progress = document.querySelector('.progress');
          progress.remove();
        });    
      }                       
    })                


