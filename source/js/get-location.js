////////////////////////////////////////////////////////////////////////////////////////////////////
// get location ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// Pega a localização do usuário
const getLocation = (is_initial = false) => {
	navigator.geolocation.getCurrentPosition((position) => {
		// Se vier do modo inicial, encerra ele
		if (is_initial) {
			$("body").removeClass("-mode--initial");
		}

		// Descobre a estação mais próxima e procura as próximas partidas
		let nearest_station = nearestStation([position["coords"]["latitude"], position["coords"]["longitude"]]);
		nextDepartures(nearest_station);
	});
};
