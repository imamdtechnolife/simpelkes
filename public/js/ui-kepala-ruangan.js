const renderAlkes = (data, id) => {
  
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
  // console.log(divRecipeTitle);
  let label = document.createElement('label');
  label.setAttribute('class', "list");
  label.innerHTML = `${data.nama_alat}`;
  let input = document.createElement('input');
  input.setAttribute('id', `${id}`);
  input.setAttribute('class', "checkbox");
  input.setAttribute('type', "checkbox");
  input.setAttribute('name', "checkbox");
  input.setAttribute('value', `${data.nama_alat}`);
  let span = document.createElement('span');
  span.setAttribute('class', "checkmark left");
  // console.log(label);
  divPanel.appendChild(imgTools);
  divPanel.appendChild(divRecipeDetail);
  divRecipeDetail.appendChild(divRecipeTitle);
  divRecipeTitle.appendChild(label);
  label.appendChild(input);
  label.appendChild(span);
  // console.log(divPanel);
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
    //  listAlkes.innerHTML += html;
    // listAlkes.insertAdjacentHTML( 'beforeend', divPanel );
    listAlkes.appendChild(divPanel);
  };

  