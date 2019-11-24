////////////////////////////////////////////////////////////////////////////////////////////////////
// station list ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

const stationList = () => {
	$navigation["header"]["station-name"].text(L10n[language]["stations"]);
	$navigation["header"]["placeholder"].text(L10n[language]["stations"]);

	// Botão para localizar estação mais próxima
	let $nearest = $("<a />")
		.attr("href", "#")
		.on("click", (event) => {
			event.preventDefault();
			$(".stations h1 .station-name").text("");
			$("body").removeClass("-mode--list");
			getLocation();
		})
		.appendTo($navigation["content"]["stations"]);
	$("<i />").addClass("material-icons").text("near_me").appendTo($nearest);
	$("<span />").text(L10n[language]["find-nearest-station"]).appendTo($nearest);

	$("<li />").addClass("nearest-station").append($nearest).appendTo($navigation["content"]["stations"]);

	// Monta lista de estações
	stations.forEach((station) => {
		let $station = $("<a />").attr("href", "#" + station["id"]).attr("data-station", station["name"]);

		$("<div />").addClass("station-name").text(station["name"]).appendTo($station);

		let $lines = $("<ul />").addClass("station-lines").appendTo($station);
		lines.forEach((line) => {
			let $line = $("<li />").appendTo($lines);
			if (station["lines"].includes(line["id"])) {
				let $shield = $("<div />").addClass("line-shield").css("color", line["color"]).text(line["id"]).appendTo($line);

				if (line["disabled"]) {
					$shield.attr("disabled", true).addClass("-state--disabled");
				}
			}
		});

		if (!station["disabled"]) {
			$station.on("click", (event) => {
				event.preventDefault();
				nextDepartures(station);
				$body.removeClass("-mode--list");
			});
		} else {
			$station.addClass("-state--disabled");
			$station.on("click", (event) => {
				event.preventDefault();
			});
		}

		$("<li />").append($station).appendTo($navigation["content"]["stations"]);
	});

	// Associa o evento de click para abrir ou fechar a lista
	$navigation["header"].on("click", () => {
		$body.toggleClass("-mode--list");
	});

	$panel["header"].on("click", () => {
		if ($body.hasClass("-mode--list")) {
			$body.removeClass("-mode--list");
		}
	});

	// Scroll dentro da lista
	$(window).on("scroll", (event) => {
		let scroll_top_position = $(window).scrollTop();

		if (scroll_top_position >= 12) {
			$body.addClass("-mode--scroll");
		} else {
			$body.removeClass("-mode--scroll");
		}
	});
};
