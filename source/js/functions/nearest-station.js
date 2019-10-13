// Estação mais próxima
const deg2rad = (deg) => {
	return deg * (Math.PI / 180);
};

const nearestStation = (user_coordinates) => {
	const user_latitude = deg2rad(user_coordinates[0]);
	const user_longitude = deg2rad(user_coordinates[1]);

	const R = 6371;

	let shortest_distance = null;
	let nearest_station = null;

	stations.forEach((station) => {
		if (!station["disabled"]) {
			const station_latitude = deg2rad(station["coordinates"][0]);
			const station_longitude = deg2rad(station["coordinates"][1]);

			const x = (station_longitude - user_longitude) * Math.cos((user_latitude + station_latitude) / 2);
			const y = (station_latitude - user_latitude);
			const distance = Math.sqrt(x * x + y * y) * R;

			if (!shortest_distance || distance < shortest_distance) {
				shortest_distance = distance;
				nearest_station = station;
			}
		}
	});

	return nearest_station;
};
