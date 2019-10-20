const recipes = document.querySelector('.recipes'); //index.html
const tab = document.querySelector('tabs-bro'); //verification.html
const kategori_alkes = document.querySelector('.kategori_alkes'); //index.html
const listAlkes = document.querySelector('.listAlkes');


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

  var tabs = document.querySelector('.tabs');
  var instance = M.Tabs.init(tabs);

  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
  
});

