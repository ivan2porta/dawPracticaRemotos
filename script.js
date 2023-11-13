console.log(tamanoVentanaNavegador());
		window.onload = function (){
			document.onmousemove = posicion;
		}

		function posicion(event) {
			let dimensiones = tamanoVentanaNavegador();
			let coordenadaX, coordenadaY;
			let divInfo = document.getElementById("info");

			if (event.type === "mousemove") {
				let ie = navigator.userAgent.toLowerCase().indexOf('msie') !== -1;

				if (ie) {
					coordenadaX = event.clientX + document.body.scrollLeft;
					coordenadaY = event.clientY + document.body.scrollTop;
				} else {
					coordenadaX = event.clientX;
					coordenadaY = event.clientY;
				}

				if(dimensiones[0]/2 > coordenadaX && dimensiones[1]/2 > coordenadaY ){
					divInfo.innerHTML = "<h1>Esquerra, Dalt</h1>";
				}

				if(dimensiones[0]/2 < coordenadaX && dimensiones[1]/2 > coordenadaY ){
					divInfo.innerHTML = "<h1>Dreta, Dalt</h1>";
				}

				if(dimensiones[0]/2 > coordenadaX && dimensiones[1]/2 < coordenadaY ){
					divInfo.innerHTML = "<h1>Esquerra, Baix</h1>";
				}

				if(dimensiones[0]/2 < coordenadaX && dimensiones[1]/2 < coordenadaY ){
					divInfo.innerHTML = "<h1>Dreta, Baix</h1>";
				}

			}
		}



		function tamanoVentanaNavegador() {
			// Adaptada de http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
			var dimensiones = [];
			if (typeof (window.innerWidth) == 'number') {
				// No es IE
				dimensiones = [window.innerWidth, window.innerHeight];
			} else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
				//IE 6 en modo estandar (no quirks)
				dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
			} else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
				//IE en modo quirks
				dimensiones = [document.body.clientWidth, document.body.clientHeight];
			}
			return dimensiones;
		}