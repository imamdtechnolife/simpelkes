const renderAlkes = (data, id) => {
  
    const html = `
      <div class="card-panel recipe white row" data-id="${id}">
        <img src="/img/tools.png" alt="recipe thumb">
        <div class="recipe-details">
          <div class="recipe-title">
            <label>                
            <input type="checkbox" value="${data.nama_alat}">
            <span class="checkmark left"></span>
            ${data.nama_alat}
            </label>
          </div>
          <div class="recipe-ingredients">${data.jenis_alat}</div>
          <div type='checkbox' id='data'></a>
        </div>
      </div>
      
    `;
    listAlkes.innerHTML += html;
    console.log('render alkes success!');
  
  };