const div_del_menu = document.querySelector('#menu');
const secciones = [{
  seccion: 'Página 1',
  ruta: 'nueva_pag.html'
}, {
  seccion: 'Página 2',
  ruta: 'pagina2.html'
}, {
  seccion: 'Página 3',
  ruta: 'pagina3.html'
}]
var link;
const contenedor_menu = document.createElement('div');
contenedor_menu.id = 'mi_menu';

for (let i = 0; i< secciones.length; i++){
  link = document.createElement('a');
  link.textContent = secciones[i].seccion;
  link.setAttribute('href',secciones[i].ruta);
  link.className = 'menuitem';
  contenedor_menu.appendChild(link);  
}

div_del_menu.appendChild(contenedor_menu);