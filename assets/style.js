
if( typeof window === 'object' ){ 

	window.addEventListener('DOMContentLoaded', () => {

		let formulario = document.querySelector('#formPeliculas');

		formulario.addEventListener('submit', ( event ) => {

			event.preventDefault();

			let tituloPelicula = document.querySelector('#addPelicula').value;
	
		
			if ( tituloPelicula.length >= 1 ) {
				
				localStorage.setItem( tituloPelicula, tituloPelicula);
				location.reload();
			}else{
				alert('Debe ingresa una película')
			}
	
		});
	
	
		let ul = document.querySelector('#listaPeliculas');

		ul.classList.add('list-group', 'list-group-flush');

	
		for( let i in localStorage ){
			
			if( typeof localStorage[i] == 'string'){
				let li = document.createElement('li');
				li.classList.add('list-group-item');
				li.append( localStorage[i] );
				ul.append(li);
			}
	
		}

		
	
	
		let removeFormulario = document.querySelector('#formBorrarPeliculas');
	
		removeFormulario.addEventListener('submit', ( event ) => {
			

			let tituloPelicula = document.querySelector('#removePelicula').value;
	
		
			if ( tituloPelicula.length >= 1 ) {
				
				localStorage.removeItem(tituloPelicula);
				location.reload();
			}
	
	
		});

		
		let usuario = {
			nombre: 'octavio',
			email: 'octavioodasso709@gmail.com',
		}

		localStorage.setItem('usuario',  usuario );

	})
}