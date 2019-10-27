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
          <input type="text" class="jumlah" id="jumlah" data-id="${selection[key].name}"/>
          <label for="#jumlah-alat">Jumlah</label>
        </div>
      </p>
    </form>
    `;
    result.push(alkesTerpilih);
  }
  listAlkesTerpilih.innerHTML = result.join(""); 
}

  // refresh action
  btnRefresh.addEventListener('click', e => {
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
  })

  // submit action
  btnSubmit.addEventListener('click', e => {
    
    const alkes = document.querySelectorAll('.alkes');

        for(let i=0; i < alkes.length;){
        const alkesPilihan = {
          nama_alat: alkes[i].listTerpilih.value,
          jumlah_alat: alkes[i].jumlah.value
        };
        console.log(alkesPilihan);
        db.collection('ruangIGD').add(alkesPilihan)
        .catch(err => console.log(err));
        i++;
      }
    M.toast({html: 'Data alkes berhasil tersimpan!'});
  })
    
  

  