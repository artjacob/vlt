const departures = {
	"lastUpdated": 1571101028599,
	"station": "Cinelândia",
	"status": "ATIVA",
	"lines": [
		{
			"name": "Linha 1",
			"directions": [
				{
					"name": "Praia Formosa",
					"etas": [
						{
							"train": "132",
							"arrivalTime": 1571103315799,
							"stoppedSeconds": 570,
							"distance": 7998,
							"stations": 17,
							"minutes": 39,
							"seconds": 2283
						},
						{
							"train": "122",
							"arrivalTime": 1571104260599,
							"stoppedSeconds": 0,
							"distance": 11747,
							"stations": 25,
							"minutes": 54,
							"seconds": 3228
						}
					]
				},
				{
					"name": "Santos Dumont",
					"etas": [
						{
							"train": "132",
							"arrivalTime": 1571102735799,
							"stoppedSeconds": 570,
							"distance": 5476,
							"stations": 13,
							"minutes": 29,
							"seconds": 1703
						},
						{
							"train": "122",
							"arrivalTime": 1571103680599,
							"stoppedSeconds": 0,
							"distance": 9225,
							"stations": 21,
							"minutes": 45,
							"seconds": 2648
						}
					]
				}
			]
		}
	],
	"_id": "vlt_station_3",
	"_rev": "10213008-e4313d72d765f39a850ef4ba06ca27ad"
};

const status = {
	"ok": {
		"status": "Em atenção",
		"message": "Linha 1 opera entre Praia Formosa e Cinelândia por conta de instabilidade no sistema de energia na região do Santos Dumont."
	},
	"warning": {
		"status": "Em atenção",
		"message": "Linha 1 opera entre Praia Formosa e Cinelândia por conta de instabilidade no sistema de energia na região do Santos Dumont."
	},
	"warning-2": {
		"status": "Em atenção",
		"message": "Operação: Linha 01 praia formosa x parada dos museus.      Linha 02 parcialmente interrompida.Linha 03 central x Est. Santa Rita."
	},
	"warning-3": {
		"status": "Em atenção",
		"message": "Operação:    Linha 02 operando parcialmente.       Linha 03 fora de serviço."
	},
	"warning-4": {
		"status": "Em atenção",
		"message": "Atenção as alterações: Linha 1 trafegando de praia formosa a parada dos Museus devido a blocos carnavalescos no local. linhas 2 de Praia Formosa a colombo e linha 3 temporariamente fora de circulação devido um bloco carnavalesco na Marechal Floriano"
	},
	"warning-5": {
		"status": "Em atenção",
		"message": "Linha 1 trafegando de praia formosa a parada dos Navios devido a blocos carnavalescos no local. linhas 2 de Praia Formosa a colombo e linha 3 trafegando de Central ate Santa Rita"
	},
};

module.exports = { departures, status };
