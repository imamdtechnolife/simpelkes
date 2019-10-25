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
      name : e.target.value,
    }
  } else { //unchecked
    console.log('unchecked');
    delete selection[e.target.id];
  }

  var result = [];
  const form = document.querySelector('form');
  let alkes = document.querySelectorAll('.alkes');
  

  for(key in selection){
    // let p = document.createElement('p');
    // let label = document.createElement('label');
    // let input = document.createElement('input');
    // input.setAttribute('type','checbox');
    // input.setAttribute('checked','checked');
    // input.setAttribute('status','disabled');
    // let span = document.createElement('span');
    // span.innerHTML = selection[key].name;
    // p.appendChild(label);
    // label.appendChild(input);
    // label.appendChild(span);

    var alkesTerpilih = 
    `
    <div class="alkes" value="${selection[key].name}">
      <p class="container" style="margin-bottom: 10px;">
        <label class="container">
          <input type="checkbox" checked="checked" disabled="disabled" id="listTerpilih" value="${selection[key].name}"/>
          <span>${selection[key].name}</span>
        </label>
        <input type="text" placeholder="Jumlah" id="jumlah-alat"/>
      </p>
    </div>
    `;
    result.push(alkesTerpilih);
  }


  listAlkesTerpilih.innerHTML = result.join(""); 
}

  // btnSubmit.addEventListener('click', e => {
  //   console.log('hello');

  //   console.log(alkes);
  //   alkes.forEach(i => {

  //     const terpilih = {
  //       name : form.listTerpilih.value
  //     }

  //     db.collection('igd').add(terpilih)
  //     .then(console.log('data berhasil tersimpan!'))
  //     .catch(err => console.log(err));

  //   })
  // });

  btnSubmit.addEventListener('click', e => {

    for(key in selection){
      const alkesPilihan = {
        nama_alat: selection[key].name
        // jenis_alat: form.ingredients.value,
        // kategori_alat: e.options[e.selectedIndex].value
      };
      console.log(alkesPilihan);
      db.collection('igd').add(alkesPilihan)
      .catch(err => console.log(err));

    }

    
    // alkes.forEach(e => {
      
    //   const alkesPilihan = {
    //     nama_alat: selection[key].name
    //     // jenis_alat: form.ingredients.value,
    //     // kategori_alat: e.options[e.selectedIndex].value
    //   };
      
    //   console.log(alkesPilihan)
    //   db.collection('igd').add(alkesPilihan)
    //     .catch(err => console.log(err));
    // }
    M.toast({html: 'Data alkes berhasil tersimpan!'});
  })

  
  // let divPanel = document.createElement('div')
  // divPanel.setAttribute('class', "card-panel recipe white row");
  // divPanel.setAttribute('data-id', `${id}`);
  
  // // console.log(divPanel);
  // let imgTools = document.createElement('img');
  // imgTools.setAttribute('src', "/img/tools.png");
  // imgTools.setAttribute('alt', "recipe thumb");
  // // console.log(imgTools);
  // let divRecipeDetail = document.createElement('div');
  // divRecipeDetail.setAttribute('class', "recipe-details");
  // // console.log(divRecipeDetail);
  // let divRecipeTitle = document.createElement('div');
  // divRecipeTitle.setAttribute('class', "recipe-title");
  // // console.log(divRecipeTitle);
  // form = document.createElement('form');
  // form.setAttribute('action','#')
  // form.setAttribute('class', 'container center')
  // let label = document.createElement('label');
  // label.setAttribute('class', "list");
  // label.innerHTML = `${data.nama_alat}`;
  // let input = document.createElement('input');
  // input.setAttribute('id', `${id}`);
  // input.setAttribute('class', "checkbox");
  // input.setAttribute('type', "checkbox");
  // input.setAttribute('name', "checkbox");
  // input.setAttribute('value', `${data.nama_alat}`);
  // let span = document.createElement('span');
  // span.setAttribute('class', "checkmark left");
  // // console.log(label);
  // divPanel.appendChild(imgTools);
  // divPanel.appendChild(divRecipeDetail);
  
  // // divRecipeTitle.appendChild(form);
  // // form.appendChild(label);
  // label.appendChild(input);
  // label.appendChild(span);
  // form.appendChild(label);
  // divRecipeDetail.appendChild(form);

  // console.log(divPanel);
    // const html = `
    //   <div class="card-panel recipe white row" data-id="${id}">
    //     <img src="/img/tools.png" alt="recipe thumb">
    //     <div class="recipe-details">
    //       <div class="recipe-title">
    //         <label>
    //           ${data.nama_alat}
    //           <input id="${id}" type="checkbox" name="checkbox" value="${data.nama_alat}">
    //           <span class="checkmark left"></span>
    //         </label> 
    //       </div>
    //       <div class="jenis-alat" id="jenis-alat">
    //         Jenis alat       : ${data.jenis_alat}
    //       </div>
    //       <div class="kategori-alat" id="kategori-alat">
    //         Kategori alat : ${data.kategori_alat}
    //       </div>
    //       <div class="jumlah-alat">
    //           <input class="amount right" id="jumla-alat" placeholder="Jumlah" data-id="${id}"></input>
    //           <label for="amount"></label>
    //       </div>
    //     </div>
    //   </div>
    // `;
    // //  listAlkes.innerHTML += html;
    // // listAlkes.insertAdjacentHTML( 'beforeend', divPanel );
    // listAlkes.appendChild(divPanel);
    
      
   
    // console.log(divPanel);
  

  