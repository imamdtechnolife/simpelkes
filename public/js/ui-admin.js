
    // render recipe data
    const renderRecipe = (data, id) => {
  
      const html = `
        <div class="card-panel recipe white row" data-id="${id}">
          <img src="/img/tools.png" alt="recipe thumb">
          <div class="recipe-details">
            <div class="recipe-title">
              <label>                
                ${data.nama_alat}
              </label>
            </div>
            <div class="recipe-ingredients">${data.jenis_alat}</div>
            <div type='checkbox' id='data'></a>
          </div>
          <div class="recipe-delete">
            <i class="material-icons" data-id="${id}">delete_outline</i>
          </div>
        </div>
        
      `;
      recipes.innerHTML += html;
      console.log('render alkes success!');
    
    };
  
    // remove recipe
    const removeRecipe = (id) => {
        const recipe = document.querySelector(`.recipe[data-id=${id}]`);
        recipe.remove();
      };

    // const renderSelect = data => {
    //   const select = `<option value="${data.kategori}">${data.kategori}</option>`

    //   kategori_alkes.innerHTML += select;
    //   console.log('render kategori_alkes success!');

    // };


      
