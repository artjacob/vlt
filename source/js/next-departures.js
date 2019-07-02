// Próximas partidas
const nextDepartures = (station, from_gps = false) => {
	let departures;

	// Desliga intervalos e eventos existentes
	clearInterval(cue["interval-departures"]);
	clearInterval(cue["interval-last-updated"]);
	$(window).off("visibilitychange online");

	// Coloca o nome da estação no appbar
	$(".stations h1 .station-name").text(station["name"]);

	// Mostra animação de load
	$panel.addClass("-state--loading");


	////////////////////////////////////////////////////////////////////////////////////////////////
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


	////////////////////////////////////////////////////////////////////////////////////////////////
	// Consulta dos dados
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

			let eta_count = 0;
			let directions = [ ];
			let departures_by_direction = { };

			// Organiza as partidas por destino
			departures["lines"].forEach((line) => {
				line["directions"].forEach((direction) => {
					let direction_title = direction["name"];
					eta_count += direction["etas"].length;

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

			// Se número de próximas partidas for zero,
			// confere se ainda está dentro do horário de funcionamento
			if (eta_count === 0 && env === "production") {
				let now = moment();
				let operation_start_time = moment("06:00", "HH:mm");
				let operation_end_time = moment("00:00", "HH:mm");

				if (now.isAfter(operation_end_time) && now.isBefore(operation_start_time)) {
					$panel.addClass("-state--closed");
				}
			} else {
				// Monta as partidas
				let $departures = $("<div />").addClass("departures");
				let $title = $("<div />").addClass("departures-title").on("click", () => {
					$("body").removeClass("-mode--list");
				}).appendTo($departures);
				$("<span />").text("Próximos trens").appendTo($title);

				// Texto para compartilhamento
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
						let is_approaching = train["seconds"] < 30;

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
						share_text.push("L" + line["id"] + " " + direction + " " + departure_time);
					});
				});

				// Estado da conexão e hora da última atualização
				$status = $("<div />").addClass("status").appendTo($title);
				// $connection_status = $("<div />").addClass("connection-status").appendTo($status);
				// $last_updated = $("<div />").addClass("last-updated").appendTo($status);
				lastUpdated();

				// Limpa o painel e insere os novos dados
				$panel.removeClass("-state--closed");
				$station.empty().append($departures);

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
			}

			$panel.removeClass("-state--loading");

			// As paradas Sete de Setembro e Colombo são muito próximas, então é comum que a localização
			// do GPS do usuário leve à estação errada. Por isso, nessas paradas, é mostrado um botão para
			// facilitar a troca de parada. O botão só é exibido quando o usuário vem da localização
			// automática (não mostra se parada foi escolhida no menu)
			if (from_gps === true && ["sete-de-setembro", "colombo"].includes(station["id"])) {
				let origin_and_destination = {
					"sete-de-setembro": {
						"name": "Colombo",
						"id": "colombo"
					},
					"colombo": {
						"name": "Sete de Setembro",
						"id": "sete-de-setembro"
					}
				};

				let destination = origin_and_destination[station["id"]];

				let $change = $("<div />").addClass("change-station").appendTo($station);
				let $button = $("<a />").addClass("button").attr("href", "#").appendTo($change);
				$("<i />").addClass("material-icons").text("near_me").appendTo($button);
				$("<span />").text("Está em").appendTo($button);
				$("<strong />").text(destination["name"] + "?").appendTo($button);

				$button.on("click", (event) => {
					event.preventDefault();
					nextDepartures(destination);
				});
			}
		});
	};


	////////////////////////////////////////////////////////////////////////////////////////////////
	// Atualização
	const updateWindow = () => {
		if (document.hidden === false && navigator.onLine === true) {
			lastUpdated();
			getData();
		}
	};

	// Cria novos intervalos e eventos
	$(window).on("online visibilitychange", updateWindow);
	if (env === "production") {
		cue["interval-departures"] = setInterval(getData, 15000);
		cue["interval-last-updated"] = setInterval(lastUpdated, 5000);
	}

	getData();
};
