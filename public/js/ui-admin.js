const userView = document.getElementById('user');

    // render recipe data
    const renderRecipe = (data, id) => {

      let divPanel = document.createElement('div')
      divPanel.setAttribute('class', "card-panel recipe white row");
      divPanel.setAttribute('data-id', `${id}`);
      // console.log(divPanel);
      let imgTools = document.createElement('img');
      imgTools.setAttribute('src', "/img/tools.png");
      imgTools.setAttribute('alt', "recipe thumb");
      // console.log(imgTools);
      let divRecipeDetail = document.createElement('div');
      divRecipeDetail.setAttribute('class', "recipe-details");
      // console.log(divRecipeDetail);
      let divRecipeTitle = document.createElement('div');
      divRecipeTitle.setAttribute('class', "recipe-title");
      divRecipeTitle.innerHTML = `${data.nama_alat}`;
      let divJenisAlkes = document.createElement('div');
      divJenisAlkes.setAttribute('class', "recipe-ingredients");
      divJenisAlkes.innerHTML = `Jenis Alkes   : ${data.jenis_alat}`;
      let divKategoriAlkes = document.createElement('div');
      divKategoriAlkes.setAttribute('class', "recipe-ingredients");
      divKategoriAlkes.innerHTML = `Kategori Alkes  : ${data.kategori_alat}`;
      let divDeleteButton = document.createElement('div');
      divDeleteButton.setAttribute('class', "recipe-delete");
      let iButton = document.createElement('i');
      iButton.setAttribute('class', "material-icons");
      iButton.setAttribute('data-id', `${id}`);
      iButton.innerHTML = "delete_outline";
      divPanel.appendChild(imgTools);
      divPanel.appendChild(divRecipeDetail);
      divRecipeDetail.appendChild(divRecipeTitle);
      divRecipeDetail.appendChild(divJenisAlkes);
      divRecipeDetail.appendChild(divKategoriAlkes);
      divPanel.appendChild(divDeleteButton);
      divDeleteButton.appendChild(iButton);
      recipes.appendChild(divPanel);
      console.log("render success!");

      iButton.addEventListener('click', e => {
        e.stopPropagation()
        let id = e.target.getAttribute('data-id')
        db.collection('alkes').doc(id).delete()
        M.toast({html: 'Data alkes berhasil terhapus!'});
      })
          
    };
  
    // remove recipe
    const removeRecipe = (id) => {
        const recipe = document.querySelector(`.recipe[data-id=${id}]`);
        recipe.remove();
      };


      
