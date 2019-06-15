$(function() {
	// Monta lista de paradas e estações
	let $stations = $(".stations ul");

	let $nearest = $("<a />").attr("href", "#").on("click", (event) => {
		event.preventDefault();
		$(".stations h1 .station-name").text("");
		$("body").removeClass("-mode--list");
		getLocation();
	}).appendTo($stations);
	$("<i />").addClass("material-icons").text("near_me").appendTo($nearest);
	$("<span />").text("Localizar estação mais próxima").appendTo($nearest);

	$("<li />").addClass("nearest-station").append($nearest).appendTo($stations);

	stations.forEach((station) => {
		let $station = $("<a />").attr("href", "#" + station["id"]);

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
				$("body").removeClass("-mode--list");
			});
		} else {
			$station.on("click", (event) => {
				event.preventDefault();
				// $("body").removeClass("-mode--list");
			});
			$station.addClass("-state--disabled");
		}

		$("<li />").append($station).appendTo($stations);
	});

	// Navegação
	$(".appbar").on("click", () => {
		$("body").toggleClass("-mode--list");
	});

	$(window).on("scroll", (event) => {
		let scroll_top_position = $(window).scrollTop();

		if (scroll_top_position >= 12) {
			$("body").addClass("-mode--scroll");
		} else {
			$("body").removeClass("-mode--scroll");
		}
	});
});
