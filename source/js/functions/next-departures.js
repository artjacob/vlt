////////////////////////////////////////////////////////////////////////////////////////////////////
// next departures /////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// Próximas partidas
const nextDepartures = (station, from_gps = false) => {
	let departures;

	// Se não for passada a estação, abre lista de estações
	if (!station) {
		$body.addClass("-mode--list");
		station = station_index[localStorage.getItem("last-station") || "Central"];
	}

	localStorage.setItem("last-station", station["name"]);

	const state_classes = [
		"-state--station",
		"-state--loading",
		"-state--closed",
		"-state--permission"
	];

	// Desliga intervalos e eventos existentes
	clearInterval(cue["interval-departures"]);
	clearInterval(cue["interval-last-updated"]);
	$(window).off("visibilitychange.departures online.departures");

	// Mostra animação de load
	$panel.removeClass(state_classes).addClass("-state--loading");

	// Coloca o nome da estação no appbar
	$navigation["header"]["station-name"].text(station["name"]);
	$panel["header"]["title"].empty();

	// Deixa a estação selecionada na lista
	$navigation["content"]["stations"].find("a").removeClass("-state--selected");
	$navigation["content"]["stations"].find("a[data-station='" + station["name"] + "']").addClass("-state--selected");


	////////////////////////////////////////////////////////////////////////////////////////////////
	// Atualização
	const lastUpdated = () => {
		let $badge = $("<div />").addClass("status-badge");

		// Tempo em segundos desde a última atualização
		let seconds_since_update = moment().diff(departures["lastUpdated"], "seconds");

		// Se tiver sido atualizado há menos de 60 segundos, mostra Tempo Real
		if (seconds_since_update <= 60) {
			$badge.addClass("-state--real-time").text(L10n[language]["real-time"]);
		} else {
			let last_updated = L10n[language]["updated"] + " " + moment(departures["lastUpdated"]).fromNow(true) + " " + L10n[language]["ago"];
			$badge.text(last_updated);
		}

		$panel["header"]["badge"].empty().append($badge);
	};


	////////////////////////////////////////////////////////////////////////////////////////////////
	// Consulta dos dados
	const getData = () => {
		// Só carrega se estiver em foco e online
		if (document.hidden === true || navigator.onLine === false) {
			return false;
		}

		// Carrega os dados
		$.getJSON("https://emitremmus.com/-/vlt/departures?callback=?", {
		// $.getJSON("https://us-central1-vltcarioca.cloudfunctions.net/departures?callback=?", {
			"station": station["id"],
			"env": "dev"
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
					$panel["header"]["title"].text(L10n[language]["out-of-operation"]);

					$panel["content"]["closed"].empty();
					$("<h1 />").text(L10n[language]["out-of-operation"]).appendTo($panel["content"]["closed"]);
					$("<p />").html(L10n[language]["operation-hours"]).appendTo($panel["content"]["closed"]);
					$("<i />").addClass("material-icons").text("access_time").appendTo($panel["content"]["closed"]);
					$panel.removeClass(state_classes).addClass("-state--closed");
				}
			} else {
				$panel["header"]["title"].text(L10n[language]["next-departures"]);

				// Monta as partidas
				let $departures = $("<div />").addClass("departures");

				directions.forEach((direction) => {
					let $direction = $("<div />").addClass("direction").appendTo($departures);
					$("<div />").addClass("direction-caption").text(L10n[language]["direction"]).appendTo($direction);

					let etas = departures_by_direction[direction];
					etas.sort((a, b) => { return a["seconds"] - b["seconds"] });

					etas.forEach((train) => {
						let $train = $("<div />").addClass("train").appendTo($direction);
						let $line = $("<div />").addClass("train-line").appendTo($train);
						let is_approaching = train["seconds"] < 30;

						let line = line_index[train["line"]];
						let departure_countdown = (is_approaching? L10n[language]["now"] : Math.round(train["seconds"] / 60) + "<span>min</span>");
						let departure_time = moment(train["arrivalTime"]).format("HH:mm");

						$("<div />").addClass("line-shield").css("color", line["color"]).attr("title", L10n[language]["line"] + " " + line["id"]).attr("disabled", true).text(line["id"]).appendTo($line);
						$("<div />").addClass("train-direction").attr("title", L10n[language]["train"] + " " + train["train"]).text(direction).appendTo($train);
						$("<div />").addClass("train-eta").attr("title", departure_time).html(departure_countdown).appendTo($train);

						if (is_approaching) {
							$train.addClass("-state--approaching");
						}
					});
				});

				lastUpdated();

				// Limpa o painel e insere os novos dados
				$panel.removeClass(state_classes).addClass("-state--station");
				$panel["content"]["station"].empty().append($departures);

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

					let $suggestion = $("<div />").addClass("suggestion");
					let $button = $("<a />").addClass("button").attr("href", "#").appendTo($suggestion);
					$("<i />").addClass("material-icons").text("near_me").appendTo($button);
					$("<span />").text(L10n[language]["are-you-at"]).appendTo($button);
					$("<strong />").text(destination["name"] + "?").appendTo($button);

					$button.on("click", (event) => {
						event.preventDefault();
						nextDepartures(destination);
					});

					$panel["content"]["station"].append($suggestion);
				}
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
	$(window).on("online.departures visibilitychange.departures", updateWindow);

	if (env === "production") {
		cue["interval-departures"] = setInterval(getData, 15000);
		cue["interval-last-updated"] = setInterval(lastUpdated, 5000);
	}

	getData();
};
