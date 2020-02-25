const functions = require("firebase-functions");
const request = require("request");
const samples = require("./samples");

const runtime_options = {
	"memory": "128MB",
	"timeoutSeconds": 10
};

const content_type = {
	"json": "application/json; charset=utf-8",
	"jsonp": "application/javascript; charset=utf-8"
};


////////////////////////////////////////////////////////////////////////////////////////////////////
// Próximas partidas

exports.departures = functions.runWith(runtime_options).https.onRequest((req, res) => {
	const station = req.query.station;
	const env = req.query.env;
	const callback = req.query.callback;

	const stations = {
		"santos-dumont": 1,
		"antonio-carlos": 2,
		"cinelandia": 3,
		"carioca": 4,
		"sete-de-setembro": 5,
		"candelaria": 6,
		"sao-bento": 7,
		"parada-dos-museus": 8,
		"parada-dos-navios": 9,
		"utopia-aquario": 10,
		"cidade-do-samba": 11,
		"santo-cristo": 12,
		"cordeiro-da-graca": 13,
		"praia-formosa": 14,
		"rodoviaria": 15,
		"equador": 16,
		"pereira-reis": 17,
		"gamboa": 18,
		"providencia": 19,
		"harmonia": 20,
		"vila-olimpica": 21,
		"central": 22,
		"saara": 23,
		"tiradentes": 24,
		"colombo": 25,
		"praca-xv": 26,
		"cristiano-ottoni": 27,
		"camerino": 28,
		"santa-rita": 29
	};

	const data = new Promise((resolve) => {
		if (env === "development") {
			resolve(JSON.stringify(samples["departures"]));
		} else {
			request("http://appmobile.vltrio.com.br:8080/station/eta?id=vlt_station_" + stations[station], (error, response, body) => {
				resolve(body);
			});
		}
	}).then((response) => {
		if (callback) {
			res.header("content-type", content_type["jsonp"]);
			res.send(callback + "(" + response + ");");
		} else {
			res.header("content-type", content_type["json"]);
			res.send(response);
		}
	});
});


////////////////////////////////////////////////////////////////////////////////////////////////////
// Status do sistema

exports.status = functions.runWith(runtime_options).https.onRequest((req, res) => {
	const language = req.query.language;
	const env = req.query.env;
	const callback = req.query.callback;

	const stations = [
		"Antonio Carlos",
		"Camerino",
		"Candelária",
		"Carioca",
		"Central",
		"Cidade do Samba",
		"Cinelândia",
		"Colombo",
		"Cordeiro da Graça",
		"Cristiano Ottoni",
		"Equador",
		"Gamboa",
		"Harmonia",
		"Parada dos Museus",
		"Parada dos Navios",
		"Pereira Reis",
		"Praça XV",
		"Praia Formosa",
		"Providência",
		"Rodoviária",
		"Saara",
		"Santa Rita",
		"Santo Cristo",
		"Santos Dumont",
		"São Bento",
		"Sete de Setembro",
		"Tiradentes",
		"Utopia AquaRio",
		"Vila Olímpica"
	];

	const fixMessage = (message) => {
		// Retira "Operação:" e traços do começo
		message = message.replace(/^Operação: /, "");
		message = message.replace(/^[-–—][\s]?/, "");

		// Corrige espaços a mais
		message = message.replace(/(\s)+/g, " ");

		// Corrige falta de espaço apõs pontuação
		message = message.replace(/, /g, ",").replace(/,/g, ", ");
		message = message.replace(/\. /g, ".").replace(/\./g, ". ");

		// Retira espaços e pontuação do começo e do final
		message = message.replace(/^\s/g, "");
		message = message.replace(/\s$/g, "");
		message = message.replace(/\.$/g, "");

		// Corrige algarismos a mais nos nomes das linhas
		message = message.replace(/(Linha 0)/gi, "Linha ");

		// Se "Linha" aparecer em começo de frase, coloca em negrito
		message = message.replace(/^Linha(s?) (\d*)( e \d*)?/gi, "<strong>Linha$1 $2$3:</strong>");
		message = message.replace(/. Linha(s?) (\d*)( e \d*)?/gi, ". <strong>• Linha$1 $2$3:</strong>");

		// Se estiver escrito "Linhas" mas só houver 1 linha, coloca no singular
		message = message.replace(/Linhas (\d*):/gi, "Linha $1:");

		// Remove abreviação de estação
		message = message.replace(/(Est\. )/gi, "");

		// Troca " x " por " — "
		message = message.replace(/( x )/gi, " — ");

		// Corrige espaço extra antes de pontuação
		message = message.replace(/ ,/g, ",");
		message = message.replace(/ \./g, ".");

		// Correções que envolvem nome das estações
		stations.forEach((station) => {
			// Corrige capitalização dos nomes das estações
			message = message.replace(RegExp(station, "gi"), station);

			// "até [nome de estação]" vira "a [nome de estação]"
			message = message.replace(RegExp("at(é|e) " + station, "gi"), "a " + station);
		});

		return message;
	};

	const data = new Promise((resolve) => {
		if (env === "development") {
			const test_message = "warning-5";
			resolve({
				"status": samples["status"][test_message]["status"],
				"raw-message": samples["status"][test_message]["message"],
				"message": fixMessage(samples["status"][test_message]["message"])
			});
		} else {
			request("http://157.230.119.186/modal_api", (error, response, body) => {
				const vlt = body.split("\n")[1];
				const parts = vlt.split(";");

				resolve({
					"status": parts[1],
					"raw-message": parts[2] || null,
					"message": fixMessage(parts[2]) || null
				});
			});
		}
	}).then((response) => {
		if (callback) {
			res.header("content-type", content_type["jsonp"]);
			res.send(callback + "(" + JSON.stringify(response) + ");");
		} else {
			res.header("content-type", content_type["json"]);
			res.send(response);
		}
	});
});
