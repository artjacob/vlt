////////////////////////////////////////////////////////////////////////////////////////////////////
// start ///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

$(function() {
	$body = $("body");

	$navigation = $(".navigation");
	$navigation["header"] = $(".navigation-header", $navigation);
	$navigation["header"]["station-name"] = $(".station-name", $navigation["header"]);
	$navigation["header"]["placeholder"] = $(".placeholder", $navigation["header"]);
	$navigation["content"] = $(".navigation-content", $navigation);
	$navigation["content"]["stations"] = $(".stations", $navigation["content"]);

	$panel = $(".panel");
	$panel["header"] = $(".panel-header", $panel);
	$panel["header"]["title"] = $(".title", $panel["header"]);
	$panel["header"]["badge"] = $(".badge", $panel["header"]);
	$panel["content"] = $(".panel-content", $panel);
	$panel["content"]["station"] = $(".station", $panel["content"]);
	$panel["content"]["closed"] = $(".closed", $panel["content"]);
	$panel["content"]["permission"] = $(".permission", $panel["content"]);
	$panel["content"]["loading"] = $(".loading", $panel["content"]);
	$panel["footer"] = $(".panel-footer", $panel);
	$panel["footer"]["status"] = $(".status", $panel["footer"]);
	$panel["footer"]["status"]["icon"] = $(".icon", $panel["footer"]["status"]);
	$panel["footer"]["status"]["text"] = $(".text", $panel["footer"]["status"]);
	$panel["footer"]["network"] = $(".network", $panel["footer"]);
	$panel["footer"]["network"]["icon"] = $(".icon", $panel["footer"]["network"]);
	$panel["footer"]["network"]["text"] = $(".text", $panel["footer"]["network"]);

	cue["load-document"].resolve();

	// Tudo começa aqui!
	stationList();

	// Confere se usuário já havia habilitado geolocalização antes
	if ("geolocation" in navigator) {
		$panel["content"]["permission"].find("span").text(L10n[language]["find-nearest-station"]);

		if ("permissions" in navigator) {
			navigator.permissions.query({ "name": "geolocation" }).then((permission) => {
				if (permission["state"] === "granted") {
					// Se já tiver, pega a localização atual e procura estação mais próxima
					getLocation();
				} else if (permission["state"] === "denied") {
					// Se não foi data permissão, abre a lista de estações
					nextDepartures();
					$navigation["content"]["stations"].find(".nearest-station").hide();
				} else {
					// Se não tiver, mostra botão para solicitar autorização
					$("body").addClass("-mode--initial");
					$panel.addClass("-state--permission");

					$(".button", $panel["content"]["permission"]).on("click", (event) => {
						event.preventDefault();
						getLocation(true);
					});
				}
			});
		} else {
			getLocation();
		}
	} else {
		// Se não houver geolocalização, abre a lista de estações
		nextDepartures();
		$navigation["content"]["stations"].find(".nearest-station").hide();
	}
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// Service Worker
if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		cue["service-worker"] = navigator.serviceWorker.register("/service-worker.js");

		cue["service-worker"].then((registration) => {
			// console.log("Service Worker registration successful!", registration);
		}, (error) => {
			// console.log("Service Worker registration failed: ", error);
		});
	});
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// Estado da conexão
$(function() {
	$panel["footer"]["network"]["icon"].text("cloud_off");
	$panel["footer"]["network"]["text"].text(L10n[language]["offline"]);
});

const updateConnectionStatus = () => {
	let connected = navigator.onLine;

	if (connected === true) {
		$panel["footer"]["network"].removeClass("-state--offline");
	} else {
		$panel["footer"]["network"].addClass("-state--offline");
	}
};

window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);
