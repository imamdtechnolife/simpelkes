const recipes = document.querySelector('.recipes');
const tab = document.querySelector('.tabs');
const kategori_alkes = document.querySelector('.kategori_alkes');
const btnSubmit = document.querySelector('.center');
const toolList = document.querySelector('.tool-list');


document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

  var tabs = document.querySelectorAll('.tabs');
  M.Tabs.init(tabs);

  var elems = document.querySelectorAll('select');
  M.FormSelect.init(elems);
  
});

