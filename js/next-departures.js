// Próximas partidas
const nextDepartures = (station) => {
	let departures;

	let line_emoji = {
		1: "1️⃣",
		2: "2️⃣",
		3: "3️⃣"
	};

	// Desliga intervalos e eventos existentes
	clearInterval(cue["interval-departures"]);
	clearInterval(cue["interval-last-updated"]);

	$(window).off("visibilitychange online");
	// $(window).off("online");

	// Coloca o nome da estação no appbar
	$(".stations h1 .station-name").text(station["name"]);

	// Insire animação de load
	let $loading = $("<div />").addClass("loading");
	$("<div />").addClass("animation").appendTo($loading);
	$panel.empty().append($loading);

	// Atualização
	const lastUpdated = () => {
		let $badge = $("<div />").addClass("status-badge");
		let connected = navigator.onLine;

		// Tempo em segundos desde a última atualização
		let seconds_since_update = moment().diff(departures["lastUpdated"], "seconds");

		// Se tiver sido atualizado há menos de 60 segundos, mostra Tempo Real
		if (seconds_since_update <= 60) {
			$badge.addClass("-state--real-time").text("Tempo real");
		} else {
			let last_updated = "Atualizado " + moment(departures["lastUpdated"]).fromNow(true) + " atrás";
			$badge.text(last_updated);
		}

		$status.empty().append($badge);
	};

	const getData = () => {
		// Só carrega se estiver com foco
		if (document.hidden === true || navigator.onLine === false) {
			return false;
		}

		// Carrega os dados
		$.getJSON("https://emitremmus.com/-/vlt/departures?callback=?", {
			"station": station["id"],
			// "env": "dev"
		}).done((response) => {
			departures = response;

			let $station = $("<div />").addClass("station");
			let directions = [ ];
			let departures_by_direction = { };

			// Organiza as partidas por destino
			departures["lines"].forEach((line) => {
				line["directions"].forEach((direction) => {
					let direction_title = direction["name"];

					if (direction["etas"].length > 0) {
						if (!directions.includes(direction_title)) {
							directions.push(direction_title);
						}

						if (!departures_by_direction[direction_title]) {
							departures_by_direction[direction_title] = [ ];
						}

						direction["etas"].forEach((train) => {
							train["line"] = line["name"];
							departures_by_direction[direction_title].push(train);
						});
					}
				});
			});

			// Monta as partidas
			let $departures = $("<div />").addClass("departures").appendTo($station);
			let $title = $("<div />").addClass("departures-title").on("click", () => {
				$("body").removeClass("-mode--list");
			}).appendTo($departures);
			$("<span />").text("Próximos trens").appendTo($title);

			let share_text = ["Próximos trens", "🚉 *" + station["name"] + "*", ""];

			// directions.sort();
			directions.forEach((direction) => {
				let $direction = $("<div />").addClass("direction").appendTo($departures);
				$("<div />").addClass("direction-caption").text("Destino").appendTo($direction);

				let etas = departures_by_direction[direction];
				etas.sort((a, b) => { return a["seconds"] - b["seconds"] });

				etas.forEach((train) => {
					let $train = $("<div />").addClass("train").appendTo($direction);
					let $line = $("<div />").addClass("train-line").appendTo($train);
					let is_approaching = train["seconds"] < 25;

					let line = line_index[train["line"]];
					let departure_countdown = (is_approaching? "Agora" : Math.round(train["seconds"] / 60) + "<span>min</span>");
					let departure_time = moment(train["arrivalTime"]).format("HH:mm");

					$("<div />").addClass("line-shield").css("color", line["color"]).attr("title", "Linha " + line["id"]).attr("disabled", true).text(line["id"]).appendTo($line);
					$("<div />").addClass("train-direction").attr("title", "Trem " + train["train"]).text(direction).appendTo($train);
					$("<div />").addClass("train-eta").attr("title", departure_time).html(departure_countdown).appendTo($train);

					if (is_approaching) {
						$train.addClass("-state--approaching");
					}

					// Texto para compartilhamento
					share_text.push(line_emoji[line["id"]] + " " + direction + " " + departure_time);
				});

				// Compartilhar
				// if (navigator.share) {
				// 	let longpress;
				// 	let longpress_delay = 1300;

				// 	$direction.on("click", () => {
				// 		longpress = setTimeout(() => {
				// 			navigator.share({
				// 				text: share_text.join("\n")
				// 			});
				// 		}, longpress_delay);
				// 	}).on("mouseup mouseout", () => {
				// 		// clearInterval(longpress);
				// 	});
				// }
			});

			// Estado da conexão e hora da última atualização
			$status = $("<div />").addClass("status").appendTo($title);
			// $connection_status = $("<div />").addClass("connection-status").appendTo($status);
			// $last_updated = $("<div />").addClass("last-updated").appendTo($status);
			lastUpdated();

			// Limpa o painel e insere os novos dados
			$panel.empty().append($station);
		});
	};

	const updateWindow = () => {
		if (document.hidden === false && navigator.onLine === true) {
			lastUpdated();
			getData();
		}
	};

	getData();

	// Cria novos intervalos e eventos
	// cue["interval-departures"] = setInterval(getData, 15000); // TEMP
	// cue["interval-last-updated"] = setInterval(lastUpdated, 5000);

	$(window).on("online visibilitychange", updateWindow);
};
