const formAlkes = document.querySelector('.listBajakLaut');
var selection = {};
const listAlkesTerpilih = document.querySelector('.listAlkes');
const btnSubmit = document.querySelector('#submit');

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
    <div class="alkes" value="${selection[key].name}">
      <p class="container" style="margin-bottom: 10px;">
        <label class="container">
          <input type="checkbox" checked="checked" disabled="disabled" id="listTerpilih" value="${selection[key].name}"/>
          <span>${selection[key].name}</span>
        </label>
        <div class="input-field">
          <input type="text" id="jumlah-alat"/>
          <label for="#jumlah-alat">Jumlah</label>
        </div>
      </p>
    </div>
    `;
    result.push(alkesTerpilih);
  }


  listAlkesTerpilih.innerHTML = result.join(""); 
}

  const jumlahAlat = document.querySelectorAll("jumlah-alat");
  jumlahAlat.forEach( e =>{
    var jmlAlat = e.target.value
    console.log(jmlAlat);
  });
  btnSubmit.addEventListener('click', e => {

    for(key in selection){

     

      const alkesPilihan = {
        nama_alat: selection[key].name,
        jumlah_alat: 3,
        number: 3
      };
      console.log(alkesPilihan);
      db.collection('ruangIGD').add(alkesPilihan)
      .catch(err => console.log(err));

    }

    M.toast({html: 'Data alkes berhasil tersimpan!'});
  })
    
  

  