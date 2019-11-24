////////////////////////////////////////////////////////////////////////////////////////////////////
// localization ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// Ajustes nas traduções do Moment
moment.updateLocale("pt-br", {
	"relativeTime": {
		"past": "%s atrás"
	}
});

// Define o idioma
const default_language = "en";
const available_languages = ["pt", "en", "es"];
const user_language = (navigator.language ? navigator.language.substr(0, 2) : default_language);

const language = available_languages.includes(user_language) ? user_language : default_language;
// const language = "pt";

if (language === "pt") {
	moment.locale("pt-br");
} else {
	moment.locale(language);
}

// Traduções
const L10n = {
	"pt": {
		"next-departures": "Próximos trens",
		"real-time": "Tempo real",
		"are-you-at": "Está em",
		"direction": "Sentido",
		"now": "Agora",
		"train": "Trem",
		"line": "Linha",
		"updated": "Atualizado",
		"out-of-operation": "Fora de operação",
		"operation-hours": "O VLT Carioca circula<br> todos os dias das 6h à 0h",
		"stations": "Estações",
		"find-nearest-station": "Localizar estação mais próxima",
		"auto-theme": "Tema automático",
		"light-theme": "Tema claro",
		"dark-theme": "Tema escuro",
		"offline": "Sem conexão",
		"status-ok": "Operação normal",
	},
	"en": {
		"next-departures": "Next trains",
		"real-time": "Real time",
		"are-you-at": "Are you at",
		"direction": "Direction",
		"now": "Now",
		"train": "Train",
		"line": "Line",
		"updated": "Updated",
		"out-of-operation": "Service closed",
		"operation-hours": "VLT Carioca runs<br> daily from 6am to 12am",
		"stations": "Stations",
		"find-nearest-station": "Find nearest station",
		"auto-theme": "Auto theme",
		"light-theme": "Light theme",
		"dark-theme": "Dark theme",
		"offline": "Offline",
		"status-ok": "Normal traffic",
	},
	"es": {
		"next-departures": "Próximos trenes",
		"real-time": "Tiempo real",
		"are-you-at": "¿Estás en",
		"direction": "Dirección",
		"now": "Ahora",
		"train": "Tren",
		"line": "Línea",
		"updated": "Actualizado",
		"out-of-operation": "Servicio cerrado",
		"operation-hours": "VLT Carioca funciona<br> todos los días de 06:00 a 00:00",
		"stations": "Estaciones",
		"find-nearest-station": "Encontrar la estación más cercana",
		"auto-theme": "Tema automático",
		"light-theme": "Tema claro",
		"dark-theme": "Tema oscuro",
		"offline": "Sin conexión",
		"status-ok": "Circulación normal",
	}
};
