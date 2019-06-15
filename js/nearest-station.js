// Estação mais próxima
const deg2rad = (deg) => {
	return deg * (Math.PI / 180);
};

const nearestStation = (user_coordinates) => {
	let user_latitude = deg2rad(user_coordinates[0]);
	let user_longitude = deg2rad(user_coordinates[1]);

	let R = 6371;

	let shortest_distance = null;
	let nearest_station = null;

	stations.forEach((station) => {
		if (!station["disabled"]) {
			let station_latitude = deg2rad(station["coordinates"][0]);
			let station_longitude = deg2rad(station["coordinates"][1]);

			let x = (station_longitude - user_longitude) * Math.cos((user_latitude + station_latitude) / 2);
			let y = (station_latitude - user_latitude);
			let distance = Math.sqrt(x * x + y * y) * R;

			if (!shortest_distance || distance < shortest_distance) {
				shortest_distance = distance;
				nearest_station = station;
			}
		}
	});

	return nearest_station;
};
