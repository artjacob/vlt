let lines = [
	{
		"id": 1,
		"name": "Linha 1",
		"color": "#68b9fb",
		// "directions": [
		// 	"Santos Dumont",
		// 	"Praia Formosa"
		// ]
	},
	{
		"id": 2,
		"name": "Linha 2",
		"color": "#73ca3f",
		// "directions": [
		// 	"Praça XV",
		// 	"Praia Formosa"
		// ]
	},
	{
		// "disabled": true,
		"id": 3,
		"name": "Linha 3",
		"color": "#f3a230",
		// "directions": [
		// 	"Santos Dumont",
		// 	"Central"
		// ]
	}
];

let line_index = { };
lines.forEach((line) => {
	let line_name = line["name"];
	line_index[line_name] = line;
});
