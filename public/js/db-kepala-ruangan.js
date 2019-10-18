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
// const form = document.querySelector('form');
// form.addEventListener('checkbox-alat', evt => {
//   evt.preventDefault();
  
//   // if (uid === admin_igd){
//   //   if(){
    
// });

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  let selection = {};
  let checkboxElems = document.querySelectorAll("div");
  let toolsTotal = document.getElementById('total');
  let listTools = document.getElementById('list-karu');

  console.log(checkboxElems);

  for(let i = 0; i < checkboxElems.length; i++){
    checkboxElems[i].addEventListener("click", itemClicked)
  }

  function itemClicked(e){
    if(e.target.checked){
      selection[e.target.id] = {
        nama_alat : 'dragon',
        id_alat : e.target.id
      };
    } else {
      delete selection[e.target.id];
    }
  };

  let result = [];
  let total = 0;

  for (var key in selection){
    var listItem = "<li>" + selections[key].value + "</li>";
    result.push(listItem);
  }
  console.log(listItem); 

  listTools.innerHTML = result;
  // var checkbox = document.querySelector("checkbox");
//   var checkbox = document.querySelector("checkbox");
// if(checkbox){
//   checkbox.addEventListener("change", function() {
//     if(this.checked) {
//         // Checkbox is checked..
//         console.log("running")
//     } else {
//         // Checkbox is not checked..
//     }
// });
});

// document.addEventListener('DOMContentLoaded', function () {
//  let dragon =  document.querySelector('#checkbox').addEventListener('change', function() {
//    if(dragon){
//     if(this.checked) {
//       // Checkbox is checked..
//       console.log("running")
//   } else {
//       // Checkbox is not checked..
//   };
//    }
   
//   });
// });


// const checkbox = document.querySelectorAll("checkbox");

//     checkbox.addEventListener('change', function(e) {
//     if(checkbox.checked) {
//         // Checkbox is checked.. 
//         console.log('jalan');
//         const alkes = {
//           nama_alat: form.nama-alat.value,
//           jenis_alat: form.jenis-alat.value,
//           kategori_alat: form.kategori_alat.value,
//           jumlah_alat: form.jumlah-alat.value
//         };
      
//         db.collection('igd').add(recipe)
//           .catch(err => console.log(err));
//           console.log("data save successfull!")
//     } else {
//         // Checkbox is not checked..
//         // const removeRecipe = (id) => {
//         //   const recipe = document.querySelector(`.recipe[data-id=${id}]`);
//         //   recipe.remove();
//         // };
//         console.log("run");
//     }
//   });


// form.checkbox.addEventListener('chh', evt => {
//   //evt.preventDefault();
    
//   console.log("checked running!")
     
// })

