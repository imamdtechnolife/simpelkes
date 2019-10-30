const formAlkes = document.querySelector('.listBajakLaut');
var selection = {};
const listAlkesTerpilih = document.querySelector('.listAlkes');
const btnSubmit = document.querySelector('#submit');
const btnRefresh = document.querySelector('#refresh');

document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
});

// daftar alkes
const renderAlkes = (data, id) => {

  let p = document.createElement('p');
  let label = document.createElement('label');
  let input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', `${id}`);
  input.setAttribute('value',`${data.nama_alat}`);
  input.addEventListener("change", checkedOrNot);
  
  let span = document.createElement('span');
  span.innerHTML = `${data.nama_alat}`;

  p.appendChild(label);
  label.appendChild(input);
  label.appendChild(span);
  formAlkes.appendChild(p);
};

function hanyaAngka(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57))

  return false;
  return true;
}

function checkedOrNot(e) {
  var isChecked = this.checked;
 
  if (isChecked) { //checked
    console.log('checked');
    selection[e.target.id] = {
      name : e.target.value
    }
  } else { //unchecked
    console.log('unchecked');
    delete selection[e.target.id];
  }

  var result = [];

  for(key in selection){

    var alkesTerpilih = 
    `
    <form class="alkes" value="${selection[key].name}">
      <p class="container" style="margin-bottom: 10px;">
        <label class="container">
          <input type="checkbox" checked="checked" disabled="disabled" id="listTerpilih" value="${selection[key].name}"/>
          <span>${selection[key].name}</span>
        </label>
        <div class="input-field">
          <input type="text" class="jumlah" id="jumlah" onkeypress="return hanyaAngka(event)" data-id="${selection[key].name}"/>
          <label for="#jumlah-alat">Jumlah</label>
        </div>
      </p>
    </form>
    `;
    result.push(alkesTerpilih);
  }
  listAlkesTerpilih.innerHTML = result.join(""); 
}

  // refresh action for delete documents
  btnRefresh.addEventListener('click', e => {
    firebase.auth().onAuthStateChanged(function(user) {
      if(user.email == "igd@rsudklu.com"){
        db.collection("ruangIGD")
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
      if(user.email == "icu@rsudklu.com"){
        db.collection("ruangICU")
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
      if(user.email == "anak@rsudklu.com"){
        db.collection("ruangANAK")
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
      if(user.email == "irna1@rsudklu.com"){
        db.collection("ruangIRNA1")
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
      if(user.email == "irna2@rsudklu.com"){
        db.collection("ruangIRNA2")
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
      if(user.email == "ok@rsudklu.com"){
        db.collection("ruangOK")
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
      if(user.email == "bersalin@rsudklu.com"){
        db.collection("ruangBERSALIN")
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
      if(user.email == "nifas@rsudklu.com"){
        db.collection("ruangNIFAS")
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
    
  })

  // submit action for save data to documents
  btnSubmit.addEventListener('click', e => {
    
    const alkes = document.querySelectorAll('.alkes');

        for(let i=0; i < alkes.length;){
        const alkesPilihan = {
          nama_alat: alkes[i].listTerpilih.value,
          jumlah_alat: alkes[i].jumlah.value
        };
        console.log(alkesPilihan);
        firebase.auth().onAuthStateChanged(function(user) {
          if(user.email == "igd@rsudklu.com"){
            db.collection('ruangIGD').add(alkesPilihan)
            .catch(err => console.log(err));
          }
          if(user.email == "icu@rsudklu.com"){
            db.collection('ruangICU').add(alkesPilihan)
            .catch(err => console.log(err));
          }
          if(user.email == "anak@rsudklu.com"){
            db.collection('ruangANAK').add(alkesPilihan)
            .catch(err => console.log(err));
          }
          if(user.email == "irna1@rsudklu.com"){
            db.collection('ruangIRNA1').add(alkesPilihan)
            .catch(err => console.log(err));
          }
          if(user.email == "irna2@rsudklu.com"){
            db.collection('ruangIRNA2').add(alkesPilihan)
            .catch(err => console.log(err));
          }
          if(user.email == "ok@rsudklu.com"){
            db.collection('ruangOK').add(alkesPilihan)
            .catch(err => console.log(err));
          }
          if(user.email == "bersalin@rsudklu.com"){
            db.collection('ruangBERSALIN').add(alkesPilihan)
            .catch(err => console.log(err));
          }
          if(user.email == "nifas@rsudklu.com"){
            db.collection('ruangNIFAS').add(alkesPilihan)
            .catch(err => console.log(err));
          }
        })
        
        
        i++;
      }
    M.toast({html: 'Data alkes berhasil tersimpan!'});
  })
    
  

  