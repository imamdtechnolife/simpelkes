
  ruangan = ['Laboratorium', 'Radiologi', 'Gizi', 'UTDRS','IGD', 'ICU', 'NICU', 'IRNA1', 'IRNA2', 'OK',
   'ANAK', 'BERSALIN', 'NIFAS', 'POLI'];
    
    ruangan.forEach(element => {
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
    const nicu = document.querySelector('.listNICU');
    const irna1 = document.querySelector('.listIRNA1');
    const irna2 = document.querySelector('.listIRNA2');
    const ok = document.querySelector('.listOK');
    const anak = document.querySelector('.listANAK');
    const bersalin = document.querySelector('.listBERSALIN');
    const nifas = document.querySelector('.listNIFAS');
    const poli = document.querySelector('.listPOLI');
    const lab = document.querySelector('.listLAB');
    const radiologi = document.querySelector('.listRADIOLOGI');
    const gizi = document.querySelector('.listGIZI');
    const utdrs = document.querySelector('.listUTDRS');

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

    // render alkes pilihan gizi
    const renderPilihanUtdrs = (data) => {
      const pilihan = 
      `<form class="alkesUtdrs" value="${data.nama_alat}">
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

      utdrs.innerHTML += pilihan;
      console.log('render alkes pilihan utdrs success!')
    }

    // render alkes pilihan igd
    const renderPilihanIgd = (data) => {
      const pilihan = 
      `<form class="alkesIgd" value="${data.nama_alat}">
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

      igd.innerHTML += pilihan;
      console.log('render alkes pilihan igd success!')
    }

    // render alkes pilihan icu
    const renderPilihanIcu = (data) => {
      const pilihan = 
      `<form class="alkesIcu" value="${data.nama_alat}">
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

      icu.innerHTML += pilihan;
      console.log('render alkes pilihan icu success!')
    }

    // render alkes pilihan icu
    const renderPilihanNicu = (data) => {
      const pilihan = 
      `<form class="alkesNicu" value="${data.nama_alat}">
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

      nicu.innerHTML += pilihan;
      console.log('render alkes pilihan nicu success!')
    }

    // render alkes pilihan irna1
    const renderPilihanIrna1 = (data) => {
      const pilihan = 
      `<form class="alkesIrna1" value="${data.nama_alat}">
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

      irna1.innerHTML += pilihan;
      console.log('render alkes pilihan irna1 success!')
    }

    // render alkes pilihan irna2
    const renderPilihanIrna2 = (data) => {
      const pilihan = 
      `<form class="alkesIrna2" value="${data.nama_alat}">
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

      irna2.innerHTML += pilihan;
      console.log('render alkes pilihan irna2 success!')
    }

    // render alkes pilihan ok
    const renderPilihanOk = (data) => {
      const pilihan = 
      `<form class="alkesOk" value="${data.nama_alat}">
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

      ok.innerHTML += pilihan;
      console.log('render alkes pilihan ok success!')
    }

    // render alkes pilihan anak
    const renderPilihanAnak = (data) => {
      const pilihan = 
      `<form class="alkesAnak" value="${data.nama_alat}">
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

      anak.innerHTML += pilihan;
      console.log('render alkes pilihan anak success!')
    }

    // render alkes pilihan bersalin
    const renderPilihanBersalin = (data) => {
      const pilihan = 
      `<form class="alkesBersalin" value="${data.nama_alat}">
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

      bersalin.innerHTML += pilihan;
      console.log('render alkes pilihan bersalin success!')
    }

    // render alkes pilihan nifas
    const renderPilihanNifas = (data) => {
      const pilihan = 
      `<form class="alkesNifas" value="${data.nama_alat}">
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

      nifas.innerHTML += pilihan;
      console.log('render alkes pilihan nifas success!')
    }

    const renderPilihanPoli = (data) => {
      const pilihan = 
      `<form class="alkesPoli" value="${data.nama_alat}">
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

      poli.innerHTML += pilihan;
      console.log('render alkes pilihan poli success!')
    }
      
    