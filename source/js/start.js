let cue = [ ];
let $panel;

$(function () {
	$panel = $(".panel");

	// Confere se usuário já havia habilitado geolocalização antes
	if ("geolocation" in navigator) {
		if ("permissions" in navigator) {
			navigator.permissions.query({ "name": "geolocation" }).then((permission) => {
				if (permission["state"] === "granted") {
					// Se já tiver, pega a localização atual e procura estação mais próxima
					getLocation();
				} else {
					// Se não tiver, mostra botão para solicitar autorização
					$("body").addClass("-mode--initial");

					let $permission = $("<div />").addClass("permission").appendTo($panel);
					let $button = $("<a />").addClass("button").attr("href", "#").appendTo($permission);
					$("<i />").addClass("material-icons").text("near_me").appendTo($button);
					$("<span />").text("Localizar estação mais próxima").appendTo($button);

					$button.on("click", (event) => {
						event.preventDefault();
						getLocation(true);
					});
				}
			});
		} else {
			getLocation();
		}
	}
});

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

// Estado da conexão
let $status;
let $connection_status;

const updateConnectionStatus = () => {
	return false;
	let connected = navigator.onLine;

	if (connected === true) {
		// $("<div />").addClass("-state--success").text("Conexão reestabelecida!").appendTo($connection_status);

		setTimeout(() => {
			$connection_status.empty();
		}, 4000);
	} else {
		$connection_status.empty();
		$("<div />").addClass("-state--error").text("Sem conexão").appendTo($connection_status);
	}
};

$(window).on("online offline", updateConnectionStatus);

// window.addEventListener("online", updateConnectionStatus);
// window.addEventListener("offline", updateConnectionStatus);
