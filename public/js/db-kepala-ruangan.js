const dbku = firebase.firestore();
const searching = document.getElementById('searching');

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

  searching.addEventListener('change', e => {
    console.log(e)
  })
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log('login success!')
      let dragon = [];
      // real-time listener
      dbku.collection('alkes').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            renderAlkes(change.doc.data(), change.doc.id);
            // console.log(change.doc.data());
            dragon = change.doc.data()
            // console.log(dragon)

          }
        });
      });

      var checkbox = document.getElementsByTagName('input');
      for(var i = 0; i < checkbox.length; i++){
        if(checkbox[i].type == "checkbox") {
            checkbox[i].addEventListener("change", checkedOrNot)
        }
    }

      function checkedOrNot() {
        var isChecked = this.checked;
      
        if (isChecked) { //checked
          console.log('checked');
        } else { //unchecked
          console.log('unchecked');
        }
      }
      console.log(checkbox);
    }
  });

