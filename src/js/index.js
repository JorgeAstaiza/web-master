(function(){
	document.addEventListener('DOMContentLoade', domloade);
	function domloade (){
		var boton = document.getElementById('boton');
		var lista = document.getElementById('lista');
		var navegacion = document.getElementById('princ-header');
		boton.addEventListener('click', onclick);
		window.addEventListener('scroll', onScroll);

		function onclick (){
			lista.classList.toggle('header-listaMenu--show');
		}

		function onScroll (){
			if(window.scrollY >= 106){
				navegacion.classList.add('header--white');
			}else if(window.scrollY >= 106){
				lista.classList.add('header-listaMenu--white');
			}else{
				navegacion.classList.remove('header--white');
			}
		}
	}
	domloade();

}());