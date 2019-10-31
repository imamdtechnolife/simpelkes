
 
  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     let email = user.email;

      
  //   }
  // })
  ruanganKasiPenunjangMedik = ['Laboratorium', 'Radiologi', 'Gizi'];
    
    ruanganKasiPenunjangMedik.forEach(element => {
      const room = `<li class="tab col s3"><a href="#${element}">${element}</a></li>`;

      tab.innerHTML += room;
     
      console.log('render room success!');
    });
    
    

    function hanyaAngka(evt) {
      var charCode = (evt.which) ? evt.which : event.keyCode
      if (charCode > 31 && (charCode < 48 || charCode > 57))
    
      return false;
      return true;
    }

    const igd = document.querySelector('.listIGD');
    const icu = document.querySelector('.listICU');
    const lab = document.querySelector('.listLAB');
    const radiologi = document.querySelector('.listRADIOLOGI');
    const gizi = document.querySelector('.listGIZI');

    //render alkes pilihan laboratorium
    const renderPilihanLab = (data) => {
      const pilihan = 
      `<form class="alkesLab" value="${data.nama_alat}">
      <p class="container" style="margin-bottom: 10px;">
        <label class="container">
          <input type="checkbox" checked="checked" id="listTerpilih" value="${data.nama_alat}"/>
          <span>${data.nama_alat}</span>
        </label>
        <div class="input-field">
          <input type="text" class="jumlah" id="jumlah" onkeypress="return hanyaAngka(event)" data-id="${data.jumlah_alat}"/>
          <label for="#jumlah-alat">${data.jumlah_alat}</label>
        </div>
      </p>
    </form>`

      lab.innerHTML += pilihan;
      console.log('render alkes pilihan laboratorium success!')
    }

    // render alkes pilihan radiologi
    const renderPilihanRadiologi = (data) => {
      const pilihan = 
      `<form class="alkesRadiologi" value="${data.nama_alat}">
      <p class="container" style="margin-bottom: 10px;">
        <label class="container">
          <input type="checkbox" checked="checked" id="listTerpilih" value="${data.nama_alat}"/>
          <span>${data.nama_alat}</span>
        </label>
        <div class="input-field">
          <input type="text" class="jumlah" id="jumlah" onkeypress="return hanyaAngka(event)" data-id="${data.jumlah_alat}"/>
          <label for="#jumlah-alat">${data.jumlah_alat}</label>
        </div>
      </p>
    </form>`

      radiologi.innerHTML += pilihan;
      console.log('render alkes pilihan radiologi success!')
    }

    // render alkes pilihan gizi
    const renderPilihanGizi = (data) => {
      const pilihan = 
      `<form class="alkesGizi" value="${data.nama_alat}">
      <p class="container" style="margin-bottom: 10px;">
        <label class="container">
          <input type="checkbox" checked="checked" id="listTerpilih" value="${data.nama_alat}"/>
          <span>${data.nama_alat}</span>
        </label>
        <div class="input-field">
          <input type="text" class="jumlah" id="jumlah" onkeypress="return hanyaAngka(event)" data-id="${data.jumlah_alat}"/>
          <label for="#jumlah-alat">${data.jumlah_alat}</label>
        </div>
      </p>
    </form>`

      gizi.innerHTML += pilihan;
      console.log('render alkes pilihan gizi success!')
    }
      
