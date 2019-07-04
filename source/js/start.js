$(function () {
	$panel = $(".panel");
	$station = $(".station", $panel);
	$permission = $(".permission", $panel);
	$network = $(".network", $panel);

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
					$panel.addClass("-state--permission");

					$(".button", $permission).on("click", (event) => {
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
const updateConnectionStatus = () => {
	let connected = navigator.onLine;

	if (connected === true) {
		$network.removeClass("-state--offline");
	} else {
		$network.addClass("-state--offline");
	}
};

// $(window).on("online offline", updateConnectionStatus);

window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);
