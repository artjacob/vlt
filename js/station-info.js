let stations = [
	{
		"name": "Antonio Carlos",
		"id": "antonio-carlos",
		// "order": { 1: 2, 3: 2 },
		"coordinates": [-22.911315344391319, -43.172050997598241],
		// "platforms": 2,
		"lines": [1, 3]
	},
	{
		// "disabled": true,
		"name": "Camerino",
		"id": "camerino",
		// "order": { 3: 8 },
		"coordinates": [-22.901698046022382, -43.183983614933489],
		// "platforms": 2,
		"lines": [3]
	},
	{
		"name": "Candelária",
		"id": "candelaria",
		// "order": { 1: 6, 3: 6 },
		"coordinates": [-22.901725029384259, -43.178808665418671],
		// "platforms": 2,
		"lines": [1, 3]
	},
	{
		"name": "Carioca",
		"id": "carioca",
		// "order": { 1: 4, 3: 4 },
		"coordinates": [-22.907484507252811, -43.176645518038917],
		// "platforms": 2,
		"lines": [1, 3]
	},
	{
		"name": "Central",
		"id": "central",
		// "order": { 2: 5, 3: 10 },
		"coordinates": [-22.902704960744952, -43.192625314377338],
		// "platforms": 2,
		"lines": [2, 3]
	},
	{
		"name": "Cidade do Samba",
		"id": "cidade-do-samba",
		// "order": { 1: 11 },
		"coordinates": [-22.894179957128067, -43.196884082078476],
		// "platforms": 1,
		"lines": [1]
	},
	{
		"name": "Cinelândia",
		"id": "cinelandia",
		// "order": { 1: 3, 3: 3 },
		"coordinates": [-22.910734001842243, -43.175425387364932],
		// "platforms": 2,
		"lines": [1, 3]
	},
	{
		"name": "Colombo",
		"id": "colombo",
		// "order": { 2: 2 },
		"coordinates": [-22.905175219009415, -43.178016968228818],
		// "platforms": 2,
		"lines": [2]
	},
	{
		"name": "Cordeiro da Graça",
		"id": "cordeiro-da-graca",
		// "order": { 1: 13, 2: 8 },
		"coordinates": [-22.897104629923117, -43.204178403533703],
		// "platforms": 1,
		"lines": [1, 2]
	},
	{
		// "disabled": true,
		"name": "Cristiano Ottoni",
		"id": "cristiano-ottoni",
		// "order": { 3: 9 },
		"coordinates": [-22.903061278480648, -43.190749109421489],
		// "platforms": 2,
		"lines": [2, 3]
	},
	{
		"name": "Equador",
		"id": "equador",
		// "order": { 1: 18, 2: 11 },
		"coordinates": [-22.897894564687782, -43.204805014440815],
		// "platforms": 1,
		"lines": [1, 2]
	},
	{
		"name": "Gamboa",
		"id": "gamboa",
		// "order": { 1: 16, 2: 6 },
		"coordinates": [-22.897959408372845, -43.199336683246301],
		// "platforms": 1,
		"lines": [1, 2]
	},
	{
		"name": "Harmonia",
		"id": "harmonia",
		// "order": { 1: 14 },
		"coordinates": [-22.895754437273386, -43.191427639584496],
		// "platforms": 1,
		"lines": [1]
	},
	{
		"name": "Parada dos Museus",
		"id": "parada-dos-museus",
		// "order": { 1: 8 },
		"coordinates": [-22.895946586802264, -43.181955980581272],
		// "platforms": 2,
		"lines": [1]
	},
	{
		"name": "Parada dos Navios",
		"id": "parada-dos-navios",
		// "order": { 1: 9 },
		"coordinates": [-22.894139625303875, -43.18718183061744],
		// "platforms": 2,
		"lines": [1]
	},
	{
		"name": "Pereira Reis",
		"id": "pereira-reis",
		// "order": { 1: 17, 2: 10 },
		"coordinates": [-22.89664706496043, -43.201773111523593],
		// "platforms": 1,
		"lines": [1, 2]
	},
	{
		"name": "Praça XV",
		"id": "praca-xv",
		// "order": { 2: 1 },
		"coordinates": [-22.902070128945848, -43.173117395783876],
		// "platforms": 2,
		"lines": [2]
	},
	{
		"name": "Praia Formosa",
		"id": "praia-formosa",
		// "order": { 1: 10, 2: 13 },
		"coordinates": [-22.903177152388057, -43.208161964902303],
		// "platforms": 2,
		"lines": [1, 2]
	},
	{
		"name": "Providência",
		"id": "providencia",
		// "order": { 1: 15 },
		"coordinates": [-22.897489922014383, -43.196701400890035],
		// "platforms": 1,
		"lines": [1]
	},
	{
		"name": "Rodoviária",
		"id": "rodoviaria",
		// "order": { 1: 19, 2: 12 },
		"coordinates": [-22.898805574251799, -43.207342941475986],
		// "platforms": 2,
		"lines": [1, 2]
	},
	{
		"name": "Saara",
		"id": "saara",
		// "order": { 2: 4 },
		"coordinates": [-22.905912108460253, -43.187320782228205],
		// "platforms": 2,
		"lines": [2]
	},
	{
		// "disabled": true,
		"name": "Santa Rita",
		"id": "santa-rita",
		// "order": { 3: 7 },
		"coordinates": [-22.900594167410649, -43.181509049854206],
		// "platforms": 2,
		"lines": [3]
	},
	{
		"name": "Santo Cristo",
		"id": "santo-cristo",
		// "order": { 1: 12, 2: 7 },
		"coordinates": [-22.895327282002146, -43.20025918175574],
		// "platforms": 1,
		"lines": [1, 2]
	},
	{
		"name": "Santos Dumont",
		"id": "santos-dumont",
		// "order": { 1: 1, 3: 1 },
		"coordinates": [-22.912286874962401, -43.16763225954584],
		// "platforms": 2,
		"lines": [1, 3]
	},
	{
		"name": "São Bento",
		"id": "sao-bento",
		// "order": { 1: 7 },
		"coordinates": [-22.898648096051012, -43.179964311764884],
		// "platforms": 2,
		"lines": [1]
	},
	{
		"name": "Sete de Setembro",
		"id": "sete-de-setembro",
		// "order": { 1: 5, 3: 5 },
		"coordinates": [-22.905305900977897, -43.177463816346922],
		// "platforms": 2,
		"lines": [1, 3]
	},
	{
		"name": "Tiradentes",
		"id": "tiradentes",
		// "order": { 2: 3 },
		"coordinates": [-22.906578222026116, -43.182854236557802],
		// "platforms": 2,
		"lines": [2]
	},
	{
		"name": "Utopia AquaRio",
		"id": "utopia-aquario",
		// "order": { 1: 10 },
		"coordinates": [-22.893095471999612, -43.190236907213219],
		// "platforms": 1,
		"lines": [1]
	},
	{
		"name": "Vila Olímpica",
		"id": "vila-olimpica",
		// "order": { 2: 9 },
		"coordinates": [-22.899056572646533, -43.199643529495297],
		// "platforms": 1,
		"lines": [2]
	}
];

let station_index = {};
stations.forEach((station) => {
	let station_name = station["name"];
	station_index[station_name] = station;
});
