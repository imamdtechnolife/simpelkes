const renderAlkes = (data, id) => {
  
    const html = `
      <div class="card-panel recipe white row" data-id="${id}">
        <img src="/img/tools.png" alt="recipe thumb">
        <div class="recipe-details">
          <div class="recipe-title">
            <label>
              ${data.nama_alat}
              <input id="${id}" type="checkbox" name="checkbox" value="${data.nama_alat}">
              <span class="checkmark left"></span>
            </label> 
          </div>
          <div class="jenis-alat" id="jenis-alat">
            Jenis alat       : ${data.jenis_alat}
          </div>
          <div class="kategori-alat" id="kategori-alat">
            Kategori alat : ${data.kategori_alat}
          </div>
          <div class="jumlah-alat">
              <input class="amount right" id="jumla-alat" placeholder="Jumlah" data-id="${id}"></input>
              <label for="amount"></label>
          </div>
        </div>
      </div>
      
    `;
    // listAlkes.innerHTML += html;
    listAlkes.insertAdjacentHTML( 'beforeend', html );
    
  
  };