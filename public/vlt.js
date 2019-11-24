"use strict";

////////////////////////////////////////////////////////////////////////////////////////////////////
// base ////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
var cue = []; // let $panel, $station, $permission, $network, $status;

var $body, $navigation, $panel;
cue["load-document"] = $.Deferred();
cue["load-departures"] = $.Deferred(); ////////////////////////////////////////////////////////////////////////////////////////////////////
// localization ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// Ajustes nas traduções do Moment

moment.updateLocale("pt-br", {
  "relativeTime": {
    "past": "%s atrás"
  }
}); // Define o idioma

var default_language = "en";
var available_languages = ["pt", "en", "es"];
var user_language = navigator.language ? navigator.language.substr(0, 2) : default_language;
var language = available_languages.includes(user_language) ? user_language : default_language; // const language = "pt";

if (language === "pt") {
  moment.locale("pt-br");
} else {
  moment.locale(language);
} // Traduções


var L10n = {
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
    "status-ok": "Operação normal"
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
    "status-ok": "Normal traffic"
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
    "status-ok": "Circulación normal"
  }
};
var stations = [{
  "name": "Antonio Carlos",
  "id": "antonio-carlos",
  // "order": { 1: 2, 3: 2 },
  "coordinates": [-22.911315344391319, -43.172050997598241],
  // "platforms": 2,
  "lines": [1, 3]
}, {
  // "disabled": true,
  "name": "Camerino",
  "id": "camerino",
  // "order": { 3: 8 },
  "coordinates": [-22.901698046022382, -43.183983614933489],
  // "platforms": 2,
  "lines": [3]
}, {
  "name": "Candelária",
  "id": "candelaria",
  // "order": { 1: 6, 3: 6 },
  "coordinates": [-22.901725029384259, -43.178808665418671],
  // "platforms": 2,
  "lines": [1, 3]
}, {
  "name": "Carioca",
  "id": "carioca",
  // "order": { 1: 4, 3: 4 },
  "coordinates": [-22.907484507252811, -43.176645518038917],
  // "platforms": 2,
  "lines": [1, 3]
}, {
  "name": "Central",
  "id": "central",
  // "order": { 2: 5, 3: 10 },
  "coordinates": [-22.902704960744952, -43.192625314377338],
  // "platforms": 2,
  "lines": [2, 3]
}, {
  "name": "Cidade do Samba",
  "id": "cidade-do-samba",
  // "order": { 1: 11 },
  "coordinates": [-22.894179957128067, -43.196884082078476],
  // "platforms": 1,
  "lines": [1]
}, {
  "name": "Cinelândia",
  "id": "cinelandia",
  // "order": { 1: 3, 3: 3 },
  "coordinates": [-22.910734001842243, -43.175425387364932],
  // "platforms": 2,
  "lines": [1, 3]
}, {
  "name": "Colombo",
  "id": "colombo",
  // "order": { 2: 2 },
  "coordinates": [-22.905175219009415, -43.178016968228818],
  // "platforms": 2,
  "lines": [2]
}, {
  "name": "Cordeiro da Graça",
  "id": "cordeiro-da-graca",
  // "order": { 1: 13, 2: 8 },
  "coordinates": [-22.897104629923117, -43.204178403533703],
  // "platforms": 1,
  "lines": [1, 2]
}, {
  // "disabled": true,
  "name": "Cristiano Ottoni",
  "id": "cristiano-ottoni",
  // "order": { 3: 9 },
  "coordinates": [-22.903061278480648, -43.190749109421489],
  // "platforms": 2,
  "lines": [2, 3]
}, {
  "name": "Equador",
  "id": "equador",
  // "order": { 1: 18, 2: 11 },
  "coordinates": [-22.897894564687782, -43.204805014440815],
  // "platforms": 1,
  "lines": [1, 2]
}, {
  "name": "Gamboa",
  "id": "gamboa",
  // "order": { 1: 16, 2: 6 },
  "coordinates": [-22.897959408372845, -43.199336683246301],
  // "platforms": 1,
  "lines": [1, 2]
}, {
  "name": "Harmonia",
  "id": "harmonia",
  // "order": { 1: 14 },
  "coordinates": [-22.895754437273386, -43.191427639584496],
  // "platforms": 1,
  "lines": [1]
}, {
  "name": "Parada dos Museus",
  "id": "parada-dos-museus",
  // "order": { 1: 8 },
  "coordinates": [-22.895946586802264, -43.181955980581272],
  // "platforms": 2,
  "lines": [1]
}, {
  "name": "Parada dos Navios",
  "id": "parada-dos-navios",
  // "order": { 1: 9 },
  "coordinates": [-22.894139625303875, -43.18718183061744],
  // "platforms": 2,
  "lines": [1]
}, {
  "name": "Pereira Reis",
  "id": "pereira-reis",
  // "order": { 1: 17, 2: 10 },
  "coordinates": [-22.89664706496043, -43.201773111523593],
  // "platforms": 1,
  "lines": [1, 2]
}, {
  "name": "Praça XV",
  "id": "praca-xv",
  // "order": { 2: 1 },
  "coordinates": [-22.902070128945848, -43.173117395783876],
  // "platforms": 2,
  "lines": [2]
}, {
  "name": "Praia Formosa",
  "id": "praia-formosa",
  // "order": { 1: 10, 2: 13 },
  "coordinates": [-22.903177152388057, -43.208161964902303],
  // "platforms": 2,
  "lines": [1, 2]
}, {
  "name": "Providência",
  "id": "providencia",
  // "order": { 1: 15 },
  "coordinates": [-22.897489922014383, -43.196701400890035],
  // "platforms": 1,
  "lines": [1]
}, {
  "name": "Rodoviária",
  "id": "rodoviaria",
  // "order": { 1: 19, 2: 12 },
  "coordinates": [-22.898805574251799, -43.207342941475986],
  // "platforms": 2,
  "lines": [1, 2]
}, {
  "name": "Saara",
  "id": "saara",
  // "order": { 2: 4 },
  "coordinates": [-22.905912108460253, -43.187320782228205],
  // "platforms": 2,
  "lines": [2]
}, {
  // "disabled": true,
  "name": "Santa Rita",
  "id": "santa-rita",
  // "order": { 3: 7 },
  "coordinates": [-22.900594167410649, -43.181509049854206],
  // "platforms": 2,
  "lines": [3]
}, {
  "name": "Santo Cristo",
  "id": "santo-cristo",
  // "order": { 1: 12, 2: 7 },
  "coordinates": [-22.895327282002146, -43.20025918175574],
  // "platforms": 1,
  "lines": [1, 2]
}, {
  "name": "Santos Dumont",
  "id": "santos-dumont",
  // "order": { 1: 1, 3: 1 },
  "coordinates": [-22.912286874962401, -43.16763225954584],
  // "platforms": 2,
  "lines": [1, 3]
}, {
  "name": "São Bento",
  "id": "sao-bento",
  // "order": { 1: 7 },
  "coordinates": [-22.898648096051012, -43.179964311764884],
  // "platforms": 2,
  "lines": [1]
}, {
  "name": "Sete de Setembro",
  "id": "sete-de-setembro",
  // "order": { 1: 5, 3: 5 },
  "coordinates": [-22.905305900977897, -43.177463816346922],
  // "platforms": 2,
  "lines": [1, 3]
}, {
  "name": "Tiradentes",
  "id": "tiradentes",
  // "order": { 2: 3 },
  "coordinates": [-22.906578222026116, -43.182854236557802],
  // "platforms": 2,
  "lines": [2]
}, {
  "name": "Utopia AquaRio",
  "id": "utopia-aquario",
  // "order": { 1: 10 },
  "coordinates": [-22.893095471999612, -43.190236907213219],
  // "platforms": 1,
  "lines": [1]
}, {
  "name": "Vila Olímpica",
  "id": "vila-olimpica",
  // "order": { 2: 9 },
  "coordinates": [-22.899056572646533, -43.199643529495297],
  // "platforms": 1,
  "lines": [2]
}];
var station_index = {};
stations.forEach(function (station) {
  var station_name = station["name"];
  station_index[station_name] = station;
});
var lines = [{
  "id": 1,
  "name": "Linha 1",
  "color": "#68b9fb" // "directions": [
  // 	"Santos Dumont",
  // 	"Praia Formosa"
  // ]

}, {
  "id": 2,
  "name": "Linha 2",
  "color": "#73ca3f" // "directions": [
  // 	"Praça XV",
  // 	"Praia Formosa"
  // ]

}, {
  // "disabled": true,
  "id": 3,
  "name": "Linha 3",
  "color": "#f3a230" // "directions": [
  // 	"Santos Dumont",
  // 	"Central"
  // ]

}];
var line_index = {};
lines.forEach(function (line) {
  var line_name = line["name"];
  line_index[line_name] = line;
}); ////////////////////////////////////////////////////////////////////////////////////////////////////
// get location ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// Pega a localização do usuário

var getLocation = function getLocation() {
  var is_initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  navigator.geolocation.getCurrentPosition(function (position) {
    // Se vier do modo inicial, encerra ele
    if (is_initial) {
      $("body").removeClass("-mode--initial");
      $panel.removeClass("-state--permission");
    } // Descobre a estação mais próxima e procura as próximas partidas


    var nearest_station = nearestStation([position["coords"]["latitude"], position["coords"]["longitude"]]);
    nextDepartures(nearest_station, true);
  });
}; // Estação mais próxima


var deg2rad = function deg2rad(deg) {
  return deg * (Math.PI / 180);
};

var nearestStation = function nearestStation(user_coordinates) {
  var user_latitude = deg2rad(user_coordinates[0]);
  var user_longitude = deg2rad(user_coordinates[1]);
  var R = 6371;
  var shortest_distance = null;
  var nearest_station = null;
  stations.forEach(function (station) {
    if (!station["disabled"]) {
      var station_latitude = deg2rad(station["coordinates"][0]);
      var station_longitude = deg2rad(station["coordinates"][1]);
      var x = (station_longitude - user_longitude) * Math.cos((user_latitude + station_latitude) / 2);
      var y = station_latitude - user_latitude;
      var distance = Math.sqrt(x * x + y * y) * R;

      if (!shortest_distance || distance < shortest_distance) {
        shortest_distance = distance;
        nearest_station = station;
      }
    }
  });
  return nearest_station;
}; ////////////////////////////////////////////////////////////////////////////////////////////////////
// next departures /////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// Próximas partidas


var nextDepartures = function nextDepartures(station) {
  var from_gps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var departures; // Se não for passada a estação, abre lista de estações

  if (!station) {
    $body.addClass("-mode--list");
    station = station_index[localStorage.getItem("last-station") || "Central"];
  }

  localStorage.setItem("last-station", station["name"]);
  var state_classes = ["-state--station", "-state--loading", "-state--closed", "-state--permission"]; // Desliga intervalos e eventos existentes

  clearInterval(cue["interval-departures"]);
  clearInterval(cue["interval-last-updated"]);
  $(window).off("visibilitychange.departures online.departures"); // Mostra animação de load

  $panel.removeClass(state_classes).addClass("-state--loading"); // Coloca o nome da estação no appbar

  $navigation["header"]["station-name"].text(station["name"]);
  $panel["header"]["title"].empty(); // Deixa a estação selecionada na lista

  $navigation["content"]["stations"].find("a").removeClass("-state--selected");
  $navigation["content"]["stations"].find("a[data-station='" + station["name"] + "']").addClass("-state--selected"); ////////////////////////////////////////////////////////////////////////////////////////////////
  // Atualização

  var lastUpdated = function lastUpdated() {
    var $badge = $("<div />").addClass("status-badge"); // Tempo em segundos desde a última atualização

    var seconds_since_update = moment().diff(departures["lastUpdated"], "seconds"); // Se tiver sido atualizado há menos de 60 segundos, mostra Tempo Real

    if (seconds_since_update <= 60) {
      $badge.addClass("-state--real-time").text(L10n[language]["real-time"]);
    } else {
      var last_updated = L10n[language]["updated"] + " " + moment(departures["lastUpdated"]).fromNow();
      $badge.text(last_updated);
    }

    $panel["header"]["badge"].empty().append($badge);
  }; ////////////////////////////////////////////////////////////////////////////////////////////////
  // Consulta dos dados


  var getData = function getData() {
    // Só carrega se estiver em foco e online
    if (document.hidden === true || navigator.onLine === false) {
      return false;
    } // Carrega os dados


    $.getJSON("https://us-central1-vltcarioca.cloudfunctions.net/departures?callback=?", {
      "station": station["id"],
      "env": env
    }).done(function (response) {
      departures = response;
      var eta_count = 0;
      var directions = [];
      var departures_by_direction = {}; // Organiza as partidas por destino

      departures["lines"].forEach(function (line) {
        line["directions"].forEach(function (direction) {
          var direction_title = direction["name"];
          eta_count += direction["etas"].length;

          if (direction["etas"].length > 0) {
            if (!directions.includes(direction_title)) {
              directions.push(direction_title);
            }

            if (!departures_by_direction[direction_title]) {
              departures_by_direction[direction_title] = [];
            }

            direction["etas"].forEach(function (train) {
              train["line"] = line["name"];
              departures_by_direction[direction_title].push(train);
            });
          }
        });
      }); // Se número de próximas partidas for zero,
      // confere se ainda está dentro do horário de funcionamento

      if (eta_count === 0 && env === "production") {
        var now = moment();
        var operation_start_time = moment("06:00", "HH:mm");
        var operation_end_time = moment("00:00", "HH:mm");

        if (now.isAfter(operation_end_time) && now.isBefore(operation_start_time)) {
          $panel["header"]["title"].text(L10n[language]["out-of-operation"]);
          $panel["content"]["closed"].empty();
          $("<h1 />").text(L10n[language]["out-of-operation"]).appendTo($panel["content"]["closed"]);
          $("<p />").html(L10n[language]["operation-hours"]).appendTo($panel["content"]["closed"]);
          $("<i />").addClass("material-icons").text("access_time").appendTo($panel["content"]["closed"]);
          $panel.removeClass(state_classes).addClass("-state--closed");
        }
      } else {
        $panel["header"]["title"].text(L10n[language]["next-departures"]); // Monta as partidas

        var $departures = $("<div />").addClass("departures");
        directions.forEach(function (direction) {
          var $direction = $("<div />").addClass("direction").appendTo($departures);
          $("<div />").addClass("direction-caption").text(L10n[language]["direction"]).appendTo($direction);
          var etas = departures_by_direction[direction];
          etas.sort(function (a, b) {
            return a["seconds"] - b["seconds"];
          });
          etas.forEach(function (train) {
            var $train = $("<div />").addClass("train").appendTo($direction);
            var $line = $("<div />").addClass("train-line").appendTo($train);
            var is_approaching = train["seconds"] < 30;
            var line = line_index[train["line"]];
            var departure_countdown = is_approaching ? L10n[language]["now"] : Math.round(train["seconds"] / 60) + "<span>min</span>";
            var departure_time = moment(train["arrivalTime"]).format("HH:mm");
            $("<div />").addClass("line-shield").css("color", line["color"]).attr("title", L10n[language]["line"] + " " + line["id"]).attr("disabled", true).text(line["id"]).appendTo($line);
            $("<div />").addClass("train-direction").attr("title", L10n[language]["train"] + " " + train["train"]).text(direction).appendTo($train);
            $("<div />").addClass("train-eta").attr("title", departure_time).html(departure_countdown).appendTo($train);

            if (is_approaching) {
              $train.addClass("-state--approaching");
            }
          });
        });
        lastUpdated(); // Limpa o painel e insere os novos dados

        $panel.removeClass(state_classes).addClass("-state--station");
        $panel["content"]["station"].empty().append($departures); // As paradas Sete de Setembro e Colombo são muito próximas, então é comum que a localização
        // do GPS do usuário leve à estação errada. Por isso, nessas paradas, é mostrado um botão para
        // facilitar a troca de parada. O botão só é exibido quando o usuário vem da localização
        // automática (não mostra se parada foi escolhida no menu)

        if (from_gps === true && ["sete-de-setembro", "colombo"].includes(station["id"])) {
          var origin_and_destination = {
            "sete-de-setembro": {
              "name": "Colombo",
              "id": "colombo"
            },
            "colombo": {
              "name": "Sete de Setembro",
              "id": "sete-de-setembro"
            }
          };
          var destination = origin_and_destination[station["id"]];
          var $suggestion = $("<div />").addClass("suggestion");
          var $button = $("<a />").addClass("button").attr("href", "#").appendTo($suggestion);
          $("<i />").addClass("material-icons").text("near_me").appendTo($button);
          $("<span />").text(L10n[language]["are-you-at"]).appendTo($button);
          $("<strong />").text(destination["name"] + "?").appendTo($button);
          $button.on("click", function (event) {
            event.preventDefault();
            nextDepartures(destination);
          });
          $panel["content"]["station"].append($suggestion);
        }
      }

      cue["load-departures"].resolve();
    });
  }; // Atualização


  var updateWindow = function updateWindow() {
    if (document.hidden === false && navigator.onLine === true) {
      lastUpdated();
      getData();
    }
  }; // Cria novos intervalos e eventos


  $(window).on("online.departures visibilitychange.departures", updateWindow);
  cue["interval-departures"] = setInterval(getData, 15000);
  cue["interval-last-updated"] = setInterval(lastUpdated, 5000);
  getData();
}; ////////////////////////////////////////////////////////////////////////////////////////////////////
// system status ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// Pega o estado do sistema


var systemStatus = function () {
  cue["load-document"].done(function () {
    cue["interval-system-status"] = setInterval(getStatus, 60 * 1000);
    getStatus();
  });
  var last_status;
  var state_classes = ["-state--ok", "-state--warning"];

  var getStatus = function getStatus() {
    // Só carrega se estiver em foco e online
    if (document.hidden === true || navigator.onLine === false) {
      return false;
    }

    $.getJSON("https://us-central1-vltcarioca.cloudfunctions.net/status?callback=?", {
      "env": env
    }).done(function (response) {
      cue["load-departures"].done(function () {
        $panel["footer"]["status"].removeClass(state_classes);

        if (response["status"]) {
          if (response["status"] === "Normal") {
            $panel["footer"]["status"].addClass("-state--ok");

            if (last_status !== "Normal") {
              $panel["footer"]["status"]["icon"].text("check_circle");
              $panel["footer"]["status"]["text"].text(L10n[language]["status-ok"]);
              var message_height = $panel["footer"]["status"]["text"].outerHeight();
              $panel["footer"]["status"].height(message_height);
              $panel["footer"]["status"].removeClass("-mode--collapsed");
              setTimeout(function () {
                $panel["footer"]["status"].css("height", "").addClass("-mode--collapsed");
              }, 10000);
            }
          } else {
            $panel["footer"]["status"].addClass("-state--warning");
            $panel["footer"]["status"]["icon"].text("error");
            $panel["footer"]["status"]["text"].text(response["message"]);

            var _message_height = $panel["footer"]["status"]["text"].outerHeight();

            $panel["footer"]["status"].height(_message_height);
            $panel["footer"]["status"].removeClass("-mode--collapsed");
          }

          last_status = response["status"];
        }
      });
    });
  };

  $(window).on("visibilitychange.systemStatus", function () {
    last_status = null;
    getStatus();
  });
}(); ////////////////////////////////////////////////////////////////////////////////////////////////////
// station list ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


var stationList = function stationList() {
  $navigation["header"]["station-name"].text(L10n[language]["stations"]);
  $navigation["header"]["placeholder"].text(L10n[language]["stations"]); // Botão para localizar estação mais próxima

  var $nearest = $("<a />").attr("href", "#").on("click", function (event) {
    event.preventDefault();
    $(".stations h1 .station-name").text("");
    $("body").removeClass("-mode--list");
    getLocation();
  }).appendTo($navigation["content"]["stations"]);
  $("<i />").addClass("material-icons").text("near_me").appendTo($nearest);
  $("<span />").text(L10n[language]["find-nearest-station"]).appendTo($nearest);
  $("<li />").addClass("nearest-station").append($nearest).appendTo($navigation["content"]["stations"]); // Monta lista de estações

  stations.forEach(function (station) {
    var $station = $("<a />").attr("href", "#" + station["id"]).attr("data-station", station["name"]);
    $("<div />").addClass("station-name").text(station["name"]).appendTo($station);
    var $lines = $("<ul />").addClass("station-lines").appendTo($station);
    lines.forEach(function (line) {
      var $line = $("<li />").appendTo($lines);

      if (station["lines"].includes(line["id"])) {
        var $shield = $("<div />").addClass("line-shield").css("color", line["color"]).text(line["id"]).appendTo($line);

        if (line["disabled"]) {
          $shield.attr("disabled", true).addClass("-state--disabled");
        }
      }
    });

    if (!station["disabled"]) {
      $station.on("click", function (event) {
        event.preventDefault();
        nextDepartures(station);
        $body.removeClass("-mode--list");
      });
    } else {
      $station.addClass("-state--disabled");
      $station.on("click", function (event) {
        event.preventDefault();
      });
    }

    $("<li />").append($station).appendTo($navigation["content"]["stations"]);
  }); // Associa o evento de click para abrir ou fechar a lista

  $navigation["header"].on("click", function () {
    $body.toggleClass("-mode--list");
  });
  $panel["header"].on("click", function () {
    if ($body.hasClass("-mode--list")) {
      $body.removeClass("-mode--list");
    }
  }); // Scroll dentro da lista

  $(window).on("scroll", function (event) {
    var scroll_top_position = $(window).scrollTop();

    if (scroll_top_position >= 12) {
      $body.addClass("-mode--scroll");
    } else {
      $body.removeClass("-mode--scroll");
    }
  });
}; ////////////////////////////////////////////////////////////////////////////////////////////////////
// theme ///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


var theme = function () {
  var theme_order = ["auto", "light", "dark"];
  var theme_settings = {
    "auto": {
      "title": L10n[language]["auto-theme"],
      "icon": "brightness_auto"
    },
    "light": {
      "title": L10n[language]["light-theme"],
      "icon": "brightness_5"
    },
    "dark": {
      "title": L10n[language]["dark-theme"],
      "icon": "brightness_4"
    }
  };

  var set = function set(new_theme) {
    var old_theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    current_theme = new_theme;
    $(".settings .theme span").text(theme_settings[new_theme]["title"]);
    $(".settings .theme i").text(theme_settings[new_theme]["icon"]);
    $("body").removeClass("-theme--" + old_theme).addClass("-theme--" + new_theme); // Salva configuração no localStorage

    if (new_theme === "auto") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", new_theme);
    }
  }; // Confere se já há tema salvo no localStorage.
  // Se não houver, pega o padrão do sistema
  // let current_theme = localStorage.getItem("theme") || getComputedStyle($(".settings .current-theme")[0]).getPropertyValue("content").replace(/"/g, "");


  var current_theme = localStorage.getItem("theme") || "auto";

  if (current_theme) {
    set(current_theme);
  }

  $(function () {
    if (!current_theme) {
      $(".settings .theme span").text(L10n[language]["auto-theme"]);
    }

    $(".settings .theme").on("click", function (event) {
      event.preventDefault(); // Descobre a posição do tema na ordem

      var theme_position = theme_order.indexOf(current_theme);
      var new_theme = theme_order[theme_position + 1] || theme_order[0]; // Seta o novo tema

      set(new_theme, current_theme);
    });
  });
}(); ////////////////////////////////////////////////////////////////////////////////////////////////////
// start ///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


$(function () {
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
  cue["load-document"].resolve(); // Tudo começa aqui!

  stationList(); // Confere se usuário já havia habilitado geolocalização antes

  if ("geolocation" in navigator) {
    $panel["content"]["permission"].find("span").text(L10n[language]["find-nearest-station"]);

    if ("permissions" in navigator) {
      navigator.permissions.query({
        "name": "geolocation"
      }).then(function (permission) {
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
          $(".button", $panel["content"]["permission"]).on("click", function (event) {
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
}); ////////////////////////////////////////////////////////////////////////////////////////////////////
// Service Worker

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    cue["service-worker"] = navigator.serviceWorker.register("/service-worker.js");
    cue["service-worker"].then(function (registration) {// console.log("Service Worker registration successful!", registration);
    }, function (error) {// console.log("Service Worker registration failed: ", error);
    });
  });
} ////////////////////////////////////////////////////////////////////////////////////////////////////
// Estado da conexão


$(function () {
  $panel["footer"]["network"]["icon"].text("cloud_off");
  $panel["footer"]["network"]["text"].text(L10n[language]["offline"]);
});

var updateConnectionStatus = function updateConnectionStatus() {
  var connected = navigator.onLine;

  if (connected === true) {
    $panel["footer"]["network"].removeClass("-state--offline");
  } else {
    $panel["footer"]["network"].addClass("-state--offline");
  }
};

window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiLCJMMTBuLmpzIiwic3RhdGlvbi1pbmZvLmpzIiwibGluZS1pbmZvLmpzIiwiZ2V0LWxvY2F0aW9uLmpzIiwibmVhcmVzdC1zdGF0aW9uLmpzIiwibmV4dC1kZXBhcnR1cmVzLmpzIiwic3lzdGVtLXN0YXR1cy5qcyIsInN0YXRpb24tbGlzdC5qcyIsInRoZW1lLmpzIiwic3RhcnQuanMiXSwibmFtZXMiOlsiY3VlIiwiJGJvZHkiLCIkbmF2aWdhdGlvbiIsIiRwYW5lbCIsIiQiLCJEZWZlcnJlZCIsIm1vbWVudCIsInVwZGF0ZUxvY2FsZSIsImRlZmF1bHRfbGFuZ3VhZ2UiLCJhdmFpbGFibGVfbGFuZ3VhZ2VzIiwidXNlcl9sYW5ndWFnZSIsIm5hdmlnYXRvciIsImxhbmd1YWdlIiwic3Vic3RyIiwiaW5jbHVkZXMiLCJsb2NhbGUiLCJMMTBuIiwic3RhdGlvbnMiLCJzdGF0aW9uX2luZGV4IiwiZm9yRWFjaCIsInN0YXRpb24iLCJzdGF0aW9uX25hbWUiLCJsaW5lcyIsImxpbmVfaW5kZXgiLCJsaW5lIiwibGluZV9uYW1lIiwiZ2V0TG9jYXRpb24iLCJpc19pbml0aWFsIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsInJlbW92ZUNsYXNzIiwibmVhcmVzdF9zdGF0aW9uIiwibmVhcmVzdFN0YXRpb24iLCJuZXh0RGVwYXJ0dXJlcyIsImRlZzJyYWQiLCJkZWciLCJNYXRoIiwiUEkiLCJ1c2VyX2Nvb3JkaW5hdGVzIiwidXNlcl9sYXRpdHVkZSIsInVzZXJfbG9uZ2l0dWRlIiwiUiIsInNob3J0ZXN0X2Rpc3RhbmNlIiwic3RhdGlvbl9sYXRpdHVkZSIsInN0YXRpb25fbG9uZ2l0dWRlIiwieCIsImNvcyIsInkiLCJkaXN0YW5jZSIsInNxcnQiLCJmcm9tX2dwcyIsImRlcGFydHVyZXMiLCJhZGRDbGFzcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RhdGVfY2xhc3NlcyIsImNsZWFySW50ZXJ2YWwiLCJ3aW5kb3ciLCJvZmYiLCJ0ZXh0IiwiZW1wdHkiLCJmaW5kIiwibGFzdFVwZGF0ZWQiLCIkYmFkZ2UiLCJzZWNvbmRzX3NpbmNlX3VwZGF0ZSIsImRpZmYiLCJsYXN0X3VwZGF0ZWQiLCJmcm9tTm93IiwiYXBwZW5kIiwiZ2V0RGF0YSIsImRvY3VtZW50IiwiaGlkZGVuIiwib25MaW5lIiwiZ2V0SlNPTiIsImVudiIsImRvbmUiLCJyZXNwb25zZSIsImV0YV9jb3VudCIsImRpcmVjdGlvbnMiLCJkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbiIsImRpcmVjdGlvbiIsImRpcmVjdGlvbl90aXRsZSIsImxlbmd0aCIsInB1c2giLCJ0cmFpbiIsIm5vdyIsIm9wZXJhdGlvbl9zdGFydF90aW1lIiwib3BlcmF0aW9uX2VuZF90aW1lIiwiaXNBZnRlciIsImlzQmVmb3JlIiwiYXBwZW5kVG8iLCJodG1sIiwiJGRlcGFydHVyZXMiLCIkZGlyZWN0aW9uIiwiZXRhcyIsInNvcnQiLCJhIiwiYiIsIiR0cmFpbiIsIiRsaW5lIiwiaXNfYXBwcm9hY2hpbmciLCJkZXBhcnR1cmVfY291bnRkb3duIiwicm91bmQiLCJkZXBhcnR1cmVfdGltZSIsImZvcm1hdCIsImNzcyIsImF0dHIiLCJvcmlnaW5fYW5kX2Rlc3RpbmF0aW9uIiwiZGVzdGluYXRpb24iLCIkc3VnZ2VzdGlvbiIsIiRidXR0b24iLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNvbHZlIiwidXBkYXRlV2luZG93Iiwic2V0SW50ZXJ2YWwiLCJzeXN0ZW1TdGF0dXMiLCJnZXRTdGF0dXMiLCJsYXN0X3N0YXR1cyIsIm1lc3NhZ2VfaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJoZWlnaHQiLCJzZXRUaW1lb3V0Iiwic3RhdGlvbkxpc3QiLCIkbmVhcmVzdCIsIiRzdGF0aW9uIiwiJGxpbmVzIiwiJHNoaWVsZCIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJzY3JvbGxfdG9wX3Bvc2l0aW9uIiwic2Nyb2xsVG9wIiwidGhlbWUiLCJ0aGVtZV9vcmRlciIsInRoZW1lX3NldHRpbmdzIiwic2V0IiwibmV3X3RoZW1lIiwib2xkX3RoZW1lIiwiY3VycmVudF90aGVtZSIsInJlbW92ZUl0ZW0iLCJ0aGVtZV9wb3NpdGlvbiIsImluZGV4T2YiLCJwZXJtaXNzaW9ucyIsInF1ZXJ5IiwidGhlbiIsInBlcm1pc3Npb24iLCJoaWRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInJlZ2lzdHJhdGlvbiIsImVycm9yIiwidXBkYXRlQ29ubmVjdGlvblN0YXR1cyIsImNvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFBQSxHQUFBLEdBQUEsRUFBQSxDLENBQ0E7O0FBQ0EsSUFBQUMsS0FBQSxFQUFBQyxXQUFBLEVBQUFDLE1BQUE7QUFFQUgsR0FBQSxDQUFBLGVBQUEsQ0FBQSxHQUFBSSxDQUFBLENBQUFDLFFBQUEsRUFBQTtBQUNBTCxHQUFBLENBQUEsaUJBQUEsQ0FBQSxHQUFBSSxDQUFBLENBQUFDLFFBQUEsRUFBQSxDLENDVEE7QUFDQTtBQUNBO0FBRUE7O0FBQ0FDLE1BQUEsQ0FBQUMsWUFBQSxDQUFBLE9BQUEsRUFBQTtBQUNBLGtCQUFBO0FBQ0EsWUFBQTtBQURBO0FBREEsQ0FBQSxFLENBTUE7O0FBQ0EsSUFBQUMsZ0JBQUEsR0FBQSxJQUFBO0FBQ0EsSUFBQUMsbUJBQUEsR0FBQSxDQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxDQUFBO0FBQ0EsSUFBQUMsYUFBQSxHQUFBQyxTQUFBLENBQUFDLFFBQUEsR0FBQUQsU0FBQSxDQUFBQyxRQUFBLENBQUFDLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUFMLGdCQUFBO0FBRUEsSUFBQUksUUFBQSxHQUFBSCxtQkFBQSxDQUFBSyxRQUFBLENBQUFKLGFBQUEsSUFBQUEsYUFBQSxHQUFBRixnQkFBQSxDLENBQ0E7O0FBRUEsSUFBQUksUUFBQSxLQUFBLElBQUEsRUFBQTtBQUNB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QUFBLENBQUE7QUFOQSxDQTFDQSxFQWtEQTtBQUNBLFVBQUEsWUFEQTtBQUVBLFFBQUEsWUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQWxEQSxFQTBEQTtBQUNBLFVBQUEsU0FEQTtBQUVBLFFBQUEsU0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBMURBLEVBa0VBO0FBQ0EsVUFBQSxtQkFEQTtBQUVBLFFBQUEsbUJBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FsRUEsRUEwRUE7QUFDQTtBQUNBLFVBQUEsa0JBRkE7QUFHQSxRQUFBLGtCQUhBO0FBSUE7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBTEE7QUFNQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQVBBLENBMUVBLEVBbUZBO0FBQ0EsVUFBQSxTQURBO0FBRUEsUUFBQSxTQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbkZBLEVBMkZBO0FBQ0EsVUFBQSxRQURBO0FBRUEsUUFBQSxRQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBM0ZBLEVBbUdBO0FBQ0EsVUFBQSxVQURBO0FBRUEsUUFBQSxVQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFB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UCxXQUFBLENBQUFRLE9BQUEsQ0FBQUgsYUFBQSxDQUFBO0FBQ0EsVUFBQUYsU0FBQSxHQUFBSCxXQUFBLENBQUFPLGNBQUEsR0FBQSxDQUFBLENBQUEsSUFBQVAsV0FBQSxDQUFBLENBQUEsQ0FBQSxDQUxBLENBT0E7O0FBQ0FFLE1BQUFBLEdBQUEsQ0FBQUMsU0FBQSxFQUFBRSxhQUFBLENBQUE7QUFDQSxLQVRBO0FBVUEsR0FmQSxDQUFBO0FBZ0JBLENBL0RBLEVBQUEsQyxDQ0pBO0FBQ0E7QUFDQTs7O0FBRUF6SSxDQUFBLENBQUEsWUFBQTtBQUNBSCxFQUFBQSxLQUFBLEdBQUFHLENBQUEsQ0FBQSxNQUFBLENBQUE7QUFFQUYsRUFBQUEsV0FBQSxHQUFBRSxDQUFBLENBQUEsYUFBQSxDQUFBO0FBQ0FGLEVBQUFBLFdBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQUUsQ0FBQSxDQUFBLG9CQUFBLEVBQUFGLFdBQUEsQ0FBQTtBQUNBQSxFQUFBQSxXQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsY0FBQSxJQUFBRSxDQUFBLENBQUEsZUFBQSxFQUFBRixXQUFBLENBQUEsUUFBQSxDQUFBLENBQUE7QUFDQUEsRUFBQUEsV0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLGFBQUEsSUFBQUUsQ0FBQSxDQUFBLGNBQUEsRUFBQUYsV0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLFdBQUEsQ0FBQSxTQUFBLENBQUEsR0FBQUUsQ0FBQSxDQUFBLHFCQUFBLEVBQUFGLFdBQUEsQ0FBQTtBQUNBQSxFQUFBQSxXQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsVUFBQSxJQUFBRSxDQUFBLENBQUEsV0FBQSxFQUFBRixXQUFBLENBQUEsU0FBQSxDQUFBLENBQUE7QUFFQUMsRUFBQUEsTUFBQSxHQUFBQyxDQUFBLENBQUEsUUFBQSxDQUFBO0FBQ0FELEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsR0FBQUMsQ0FBQSxDQUFBLGVBQUEsRUFBQUQsTUFBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLElBQUFDLENBQUEsQ0FBQSxRQUFBLEVBQUFELE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQSxJQUFBQyxDQUFBLENBQUEsUUFBQSxFQUFBRCxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxHQUFBQyxDQUFBLENBQUEsZ0JBQUEsRUFBQUQsTUFBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxTQUFBLElBQUFDLENBQUEsQ0FBQSxVQUFBLEVBQUFELE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsUUFBQSxJQUFBQyxDQUFBLENBQUEsU0FBQSxFQUFBRCxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFlBQUEsSUFBQUMsQ0FBQSxDQUFBLGFBQUEsRUFBQUQsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxTQUFBLElBQUFDLENBQUEsQ0FBQSxVQUFBLEVBQUFELE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLEdBQUFDLENBQUEsQ0FBQSxlQUFBLEVBQUFELE1BQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxJQUFBQyxDQUFBLENBQUEsU0FBQSxFQUFBRCxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFFBQUEsRUFBQSxNQUFBLElBQUFDLENBQUEsQ0FBQSxPQUFBLEVBQUFELE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxN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QUFBLENBQ0E7QUFDQSxLQUpBO0FBS0EsR0FSQTtBQVNBLEMsQ0FFQTtBQUNBOzs7QUFDQXRKLENBQUEsQ0FBQSxZQUFBO0FBQ0FELEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxTQUFBLEVBQUEsTUFBQSxFQUFBMEQsSUFBQSxDQUFBLFdBQUE7QUFDQTFELEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxTQUFBLEVBQUEsTUFBQSxFQUFBMEQsSUFBQSxDQUFBN0MsSUFBQSxDQUFBSixRQUFBLENBQUEsQ0FBQSxTQUFBLENBQUE7QUFDQSxDQUhBLENBQUE7O0FBS0EsSUFBQStJLHNCQUFBLEdBQUEsU0FBQUEsc0JBQUEsR0FBQTtBQUNBLE1BQUFDLFNBQUEsR0FBQWpKLFNBQUEsQ0FBQStELE1BQUE7O0FBRUEsTUFBQWtGLFNBQUEsS0FBQSxJQUFBLEVBQUE7QUFDQXpKLElBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxTQUFBLEVBQUE0QixXQUFBLENBQUEsaUJBQUE7QUFDQSxHQUZBLE1BRUE7QUFDQTVCLElBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxTQUFBLEVBQUFrRCxRQUFBLENBQUEsaUJBQUE7QUFDQTtBQUNBLENBUkE7O0FBVUFNLE1BQUEsQ0FBQTJGLGdCQUFBLENBQUEsUUFBQSxFQUFBSyxzQkFBQTtBQUNBaEcsTUFBQSxDQUFBMkYsZ0JBQUEsQ0FBQSxTQUFBLEVBQUFLLHNCQUFBIiwiZmlsZSI6InZsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gYmFzZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5sZXQgY3VlID0gWyBdO1xyXG4vLyBsZXQgJHBhbmVsLCAkc3RhdGlvbiwgJHBlcm1pc3Npb24sICRuZXR3b3JrLCAkc3RhdHVzO1xyXG5sZXQgJGJvZHksICRuYXZpZ2F0aW9uLCAkcGFuZWw7XHJcblxyXG5jdWVbXCJsb2FkLWRvY3VtZW50XCJdID0gJC5EZWZlcnJlZCgpO1xyXG5jdWVbXCJsb2FkLWRlcGFydHVyZXNcIl0gPSAkLkRlZmVycmVkKCk7XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gbG9jYWxpemF0aW9uIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBBanVzdGVzIG5hcyB0cmFkdcOnw7VlcyBkbyBNb21lbnRcclxubW9tZW50LnVwZGF0ZUxvY2FsZShcInB0LWJyXCIsIHtcclxuXHRcInJlbGF0aXZlVGltZVwiOiB7XHJcblx0XHRcInBhc3RcIjogXCIlcyBhdHLDoXNcIlxyXG5cdH1cclxufSk7XHJcblxyXG4vLyBEZWZpbmUgbyBpZGlvbWFcclxuY29uc3QgZGVmYXVsdF9sYW5ndWFnZSA9IFwiZW5cIjtcclxuY29uc3QgYXZhaWxhYmxlX2xhbmd1YWdlcyA9IFtcInB0XCIsIFwiZW5cIiwgXCJlc1wiXTtcclxuY29uc3QgdXNlcl9sYW5ndWFnZSA9IChuYXZpZ2F0b3IubGFuZ3VhZ2UgPyBuYXZpZ2F0b3IubGFuZ3VhZ2Uuc3Vic3RyKDAsIDIpIDogZGVmYXVsdF9sYW5ndWFnZSk7XHJcblxyXG5jb25zdCBsYW5ndWFnZSA9IGF2YWlsYWJsZV9sYW5ndWFnZXMuaW5jbHVkZXModXNlcl9sYW5ndWFnZSkgPyB1c2VyX2xhbmd1YWdlIDogZGVmYXVsdF9sYW5ndWFnZTtcclxuLy8gY29uc3QgbGFuZ3VhZ2UgPSBcInB0XCI7XHJcblxyXG5pZiAobGFuZ3VhZ2UgPT09IFwicHRcIikge1xyXG5cdG1vbWVudC5sb2NhbGUoXCJwdC1iclwiKTtcclxufSBlbHNlIHtcclxuXHRtb21lbnQubG9jYWxlKGxhbmd1YWdlKTtcclxufVxyXG5cclxuLy8gVHJhZHXDp8O1ZXNcclxuY29uc3QgTDEwbiA9IHtcclxuXHRcInB0XCI6IHtcclxuXHRcdFwibmV4dC1kZXBhcnR1cmVzXCI6IFwiUHLDs3hpbW9zIHRyZW5zXCIsXHJcblx0XHRcInJlYWwtdGltZVwiOiBcIlRlbXBvIHJlYWxcIixcclxuXHRcdFwiYXJlLXlvdS1hdFwiOiBcIkVzdMOhIGVtXCIsXHJcblx0XHRcImRpcmVjdGlvblwiOiBcIlNlbnRpZG9cIixcclxuXHRcdFwibm93XCI6IFwiQWdvcmFcIixcclxuXHRcdFwidHJhaW5cIjogXCJUcmVtXCIsXHJcblx0XHRcImxpbmVcIjogXCJMaW5oYVwiLFxyXG5cdFx0XCJ1cGRhdGVkXCI6IFwiQXR1YWxpemFkb1wiLFxyXG5cdFx0XCJvdXQtb2Ytb3BlcmF0aW9uXCI6IFwiRm9yYSBkZSBvcGVyYcOnw6NvXCIsXHJcblx0XHRcIm9wZXJhdGlvbi1ob3Vyc1wiOiBcIk8gVkxUIENhcmlvY2EgY2lyY3VsYTxicj4gdG9kb3Mgb3MgZGlhcyBkYXMgNmggw6AgMGhcIixcclxuXHRcdFwic3RhdGlvbnNcIjogXCJFc3Rhw6fDtWVzXCIsXHJcblx0XHRcImZpbmQtbmVhcmVzdC1zdGF0aW9uXCI6IFwiTG9jYWxpemFyIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXCIsXHJcblx0XHRcImF1dG8tdGhlbWVcIjogXCJUZW1hIGF1dG9tw6F0aWNvXCIsXHJcblx0XHRcImxpZ2h0LXRoZW1lXCI6IFwiVGVtYSBjbGFyb1wiLFxyXG5cdFx0XCJkYXJrLXRoZW1lXCI6IFwiVGVtYSBlc2N1cm9cIixcclxuXHRcdFwib2ZmbGluZVwiOiBcIlNlbSBjb25leMOjb1wiLFxyXG5cdFx0XCJzdGF0dXMtb2tcIjogXCJPcGVyYcOnw6NvIG5vcm1hbFwiLFxyXG5cdH0sXHJcblx0XCJlblwiOiB7XHJcblx0XHRcIm5leHQtZGVwYXJ0dXJlc1wiOiBcIk5leHQgdHJhaW5zXCIsXHJcblx0XHRcInJlYWwtdGltZVwiOiBcIlJlYWwgdGltZVwiLFxyXG5cdFx0XCJhcmUteW91LWF0XCI6IFwiQXJlIHlvdSBhdFwiLFxyXG5cdFx0XCJkaXJlY3Rpb25cIjogXCJEaXJlY3Rpb25cIixcclxuXHRcdFwibm93XCI6IFwiTm93XCIsXHJcblx0XHRcInRyYWluXCI6IFwiVHJhaW5cIixcclxuXHRcdFwibGluZVwiOiBcIkxpbmVcIixcclxuXHRcdFwidXBkYXRlZFwiOiBcIlVwZGF0ZWRcIixcclxuXHRcdFwib3V0LW9mLW9wZXJhdGlvblwiOiBcIlNlcnZpY2UgY2xvc2VkXCIsXHJcblx0XHRcIm9wZXJhdGlvbi1ob3Vyc1wiOiBcIlZMVCBDYXJpb2NhIHJ1bnM8YnI+IGRhaWx5IGZyb20gNmFtIHRvIDEyYW1cIixcclxuXHRcdFwic3RhdGlvbnNcIjogXCJTdGF0aW9uc1wiLFxyXG5cdFx0XCJmaW5kLW5lYXJlc3Qtc3RhdGlvblwiOiBcIkZpbmQgbmVhcmVzdCBzdGF0aW9uXCIsXHJcblx0XHRcImF1dG8tdGhlbWVcIjogXCJBdXRvIHRoZW1lXCIsXHJcblx0XHRcImxpZ2h0LXRoZW1lXCI6IFwiTGlnaHQgdGhlbWVcIixcclxuXHRcdFwiZGFyay10aGVtZVwiOiBcIkRhcmsgdGhlbWVcIixcclxuXHRcdFwib2ZmbGluZVwiOiBcIk9mZmxpbmVcIixcclxuXHRcdFwic3RhdHVzLW9rXCI6IFwiTm9ybWFsIHRyYWZmaWNcIixcclxuXHR9LFxyXG5cdFwiZXNcIjoge1xyXG5cdFx0XCJuZXh0LWRlcGFydHVyZXNcIjogXCJQcsOzeGltb3MgdHJlbmVzXCIsXHJcblx0XHRcInJlYWwtdGltZVwiOiBcIlRpZW1wbyByZWFsXCIsXHJcblx0XHRcImFyZS15b3UtYXRcIjogXCLCv0VzdMOhcyBlblwiLFxyXG5cdFx0XCJkaXJlY3Rpb25cIjogXCJEaXJlY2Npw7NuXCIsXHJcblx0XHRcIm5vd1wiOiBcIkFob3JhXCIsXHJcblx0XHRcInRyYWluXCI6IFwiVHJlblwiLFxyXG5cdFx0XCJsaW5lXCI6IFwiTMOtbmVhXCIsXHJcblx0XHRcInVwZGF0ZWRcIjogXCJBY3R1YWxpemFkb1wiLFxyXG5cdFx0XCJvdXQtb2Ytb3BlcmF0aW9uXCI6IFwiU2VydmljaW8gY2VycmFkb1wiLFxyXG5cdFx0XCJvcGVyYXRpb24taG91cnNcIjogXCJWTFQgQ2FyaW9jYSBmdW5jaW9uYTxicj4gdG9kb3MgbG9zIGTDrWFzIGRlIDA2OjAwIGEgMDA6MDBcIixcclxuXHRcdFwic3RhdGlvbnNcIjogXCJFc3RhY2lvbmVzXCIsXHJcblx0XHRcImZpbmQtbmVhcmVzdC1zdGF0aW9uXCI6IFwiRW5jb250cmFyIGxhIGVzdGFjacOzbiBtw6FzIGNlcmNhbmFcIixcclxuXHRcdFwiYXV0by10aGVtZVwiOiBcIlRlbWEgYXV0b23DoXRpY29cIixcclxuXHRcdFwibGlnaHQtdGhlbWVcIjogXCJUZW1hIGNsYXJvXCIsXHJcblx0XHRcImRhcmstdGhlbWVcIjogXCJUZW1hIG9zY3Vyb1wiLFxyXG5cdFx0XCJvZmZsaW5lXCI6IFwiU2luIGNvbmV4acOzblwiLFxyXG5cdFx0XCJzdGF0dXMtb2tcIjogXCJDaXJjdWxhY2nDs24gbm9ybWFsXCIsXHJcblx0fVxyXG59O1xyXG4iLCJsZXQgc3RhdGlvbnMgPSBbXG5cdHtcblx0XHRcIm5hbWVcIjogXCJBbnRvbmlvIENhcmxvc1wiLFxuXHRcdFwiaWRcIjogXCJhbnRvbmlvLWNhcmxvc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAyLCAzOiAyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkxMTMxNTM0NDM5MTMxOSwgLTQzLjE3MjA1MDk5NzU5ODI0MV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIkNhbWVyaW5vXCIsXG5cdFx0XCJpZFwiOiBcImNhbWVyaW5vXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDM6IDggfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAxNjk4MDQ2MDIyMzgyLCAtNDMuMTgzOTgzNjE0OTMzNDg5XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDYW5kZWzDoXJpYVwiLFxuXHRcdFwiaWRcIjogXCJjYW5kZWxhcmlhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDYsIDM6IDYgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAxNzI1MDI5Mzg0MjU5LCAtNDMuMTc4ODA4NjY1NDE4NjcxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDYXJpb2NhXCIsXG5cdFx0XCJpZFwiOiBcImNhcmlvY2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNCwgMzogNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDc0ODQ1MDcyNTI4MTEsIC00My4xNzY2NDU1MTgwMzg5MTddLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNlbnRyYWxcIixcblx0XHRcImlkXCI6IFwiY2VudHJhbFwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA1LCAzOiAxMCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDI3MDQ5NjA3NDQ5NTIsIC00My4xOTI2MjUzMTQzNzczMzhdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMiwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNpZGFkZSBkbyBTYW1iYVwiLFxuXHRcdFwiaWRcIjogXCJjaWRhZGUtZG8tc2FtYmFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk0MTc5OTU3MTI4MDY3LCAtNDMuMTk2ODg0MDgyMDc4NDc2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDaW5lbMOibmRpYVwiLFxuXHRcdFwiaWRcIjogXCJjaW5lbGFuZGlhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDMsIDM6IDMgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTEwNzM0MDAxODQyMjQzLCAtNDMuMTc1NDI1Mzg3MzY0OTMyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDb2xvbWJvXCIsXG5cdFx0XCJpZFwiOiBcImNvbG9tYm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogMiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDUxNzUyMTkwMDk0MTUsIC00My4xNzgwMTY5NjgyMjg4MThdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNvcmRlaXJvIGRhIEdyYcOnYVwiLFxuXHRcdFwiaWRcIjogXCJjb3JkZWlyby1kYS1ncmFjYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMywgMjogOCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTcxMDQ2Mjk5MjMxMTcsIC00My4yMDQxNzg0MDM1MzM3MDNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcIm5hbWVcIjogXCJDcmlzdGlhbm8gT3R0b25pXCIsXG5cdFx0XCJpZFwiOiBcImNyaXN0aWFuby1vdHRvbmlcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogOSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDMwNjEyNzg0ODA2NDgsIC00My4xOTA3NDkxMDk0MjE0ODldLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMiwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkVxdWFkb3JcIixcblx0XHRcImlkXCI6IFwiZXF1YWRvclwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxOCwgMjogMTEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3ODk0NTY0Njg3NzgyLCAtNDMuMjA0ODA1MDE0NDQwODE1XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJHYW1ib2FcIixcblx0XHRcImlkXCI6IFwiZ2FtYm9hXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE2LCAyOiA2IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5Nzk1OTQwODM3Mjg0NSwgLTQzLjE5OTMzNjY4MzI0NjMwMV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiSGFybW9uaWFcIixcblx0XHRcImlkXCI6IFwiaGFybW9uaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTQgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1NzU0NDM3MjczMzg2LCAtNDMuMTkxNDI3NjM5NTg0NDk2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQYXJhZGEgZG9zIE11c2V1c1wiLFxuXHRcdFwiaWRcIjogXCJwYXJhZGEtZG9zLW11c2V1c1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA4IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NTk0NjU4NjgwMjI2NCwgLTQzLjE4MTk1NTk4MDU4MTI3Ml0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUGFyYWRhIGRvcyBOYXZpb3NcIixcblx0XHRcImlkXCI6IFwicGFyYWRhLWRvcy1uYXZpb3NcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogOSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTQxMzk2MjUzMDM4NzUsIC00My4xODcxODE4MzA2MTc0NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUGVyZWlyYSBSZWlzXCIsXG5cdFx0XCJpZFwiOiBcInBlcmVpcmEtcmVpc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNywgMjogMTAgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk2NjQ3MDY0OTYwNDMsIC00My4yMDE3NzMxMTE1MjM1OTNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlByYcOnYSBYVlwiLFxuXHRcdFwiaWRcIjogXCJwcmFjYS14dlwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAxIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMjA3MDEyODk0NTg0OCwgLTQzLjE3MzExNzM5NTc4Mzg3Nl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJhaWEgRm9ybW9zYVwiLFxuXHRcdFwiaWRcIjogXCJwcmFpYS1mb3Jtb3NhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEwLCAyOiAxMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDMxNzcxNTIzODgwNTcsIC00My4yMDgxNjE5NjQ5MDIzMDNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlByb3ZpZMOqbmNpYVwiLFxuXHRcdFwiaWRcIjogXCJwcm92aWRlbmNpYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTc0ODk5MjIwMTQzODMsIC00My4xOTY3MDE0MDA4OTAwMzVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlJvZG92acOhcmlhXCIsXG5cdFx0XCJpZFwiOiBcInJvZG92aWFyaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTksIDI6IDEyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5ODgwNTU3NDI1MTc5OSwgLTQzLjIwNzM0Mjk0MTQ3NTk4Nl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FhcmFcIixcblx0XHRcImlkXCI6IFwic2FhcmFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDU5MTIxMDg0NjAyNTMsIC00My4xODczMjA3ODIyMjgyMDVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcIm5hbWVcIjogXCJTYW50YSBSaXRhXCIsXG5cdFx0XCJpZFwiOiBcInNhbnRhLXJpdGFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogNyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDA1OTQxNjc0MTA2NDksIC00My4xODE1MDkwNDk4NTQyMDZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlNhbnRvIENyaXN0b1wiLFxuXHRcdFwiaWRcIjogXCJzYW50by1jcmlzdG9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTIsIDI6IDcgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1MzI3MjgyMDAyMTQ2LCAtNDMuMjAwMjU5MTgxNzU1NzRdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlNhbnRvcyBEdW1vbnRcIixcblx0XHRcImlkXCI6IFwic2FudG9zLWR1bW9udFwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxLCAzOiAxIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkxMjI4Njg3NDk2MjQwMSwgLTQzLjE2NzYzMjI1OTU0NTg0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTw6NvIEJlbnRvXCIsXG5cdFx0XCJpZFwiOiBcInNhby1iZW50b1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA3IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5ODY0ODA5NjA1MTAxMiwgLTQzLjE3OTk2NDMxMTc2NDg4NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2V0ZSBkZSBTZXRlbWJyb1wiLFxuXHRcdFwiaWRcIjogXCJzZXRlLWRlLXNldGVtYnJvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDUsIDM6IDUgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTA1MzA1OTAwOTc3ODk3LCAtNDMuMTc3NDYzODE2MzQ2OTIyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJUaXJhZGVudGVzXCIsXG5cdFx0XCJpZFwiOiBcInRpcmFkZW50ZXNcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDY1NzgyMjIwMjYxMTYsIC00My4xODI4NTQyMzY1NTc4MDJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlV0b3BpYSBBcXVhUmlvXCIsXG5cdFx0XCJpZFwiOiBcInV0b3BpYS1hcXVhcmlvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEwIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5MzA5NTQ3MTk5OTYxMiwgLTQzLjE5MDIzNjkwNzIxMzIxOV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiVmlsYSBPbMOtbXBpY2FcIixcblx0XHRcImlkXCI6IFwidmlsYS1vbGltcGljYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5OTA1NjU3MjY0NjUzMywgLTQzLjE5OTY0MzUyOTQ5NTI5N10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9XG5dO1xuXG5sZXQgc3RhdGlvbl9pbmRleCA9IHsgfTtcbnN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcblx0bGV0IHN0YXRpb25fbmFtZSA9IHN0YXRpb25bXCJuYW1lXCJdO1xuXHRzdGF0aW9uX2luZGV4W3N0YXRpb25fbmFtZV0gPSBzdGF0aW9uO1xufSk7XG4iLCJsZXQgbGluZXMgPSBbXG5cdHtcblx0XHRcImlkXCI6IDEsXG5cdFx0XCJuYW1lXCI6IFwiTGluaGEgMVwiLFxuXHRcdFwiY29sb3JcIjogXCIjNjhiOWZiXCIsXG5cdFx0Ly8gXCJkaXJlY3Rpb25zXCI6IFtcblx0XHQvLyBcdFwiU2FudG9zIER1bW9udFwiLFxuXHRcdC8vIFx0XCJQcmFpYSBGb3Jtb3NhXCJcblx0XHQvLyBdXG5cdH0sXG5cdHtcblx0XHRcImlkXCI6IDIsXG5cdFx0XCJuYW1lXCI6IFwiTGluaGEgMlwiLFxuXHRcdFwiY29sb3JcIjogXCIjNzNjYTNmXCIsXG5cdFx0Ly8gXCJkaXJlY3Rpb25zXCI6IFtcblx0XHQvLyBcdFwiUHJhw6dhIFhWXCIsXG5cdFx0Ly8gXHRcIlByYWlhIEZvcm1vc2FcIlxuXHRcdC8vIF1cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcImlkXCI6IDMsXG5cdFx0XCJuYW1lXCI6IFwiTGluaGEgM1wiLFxuXHRcdFwiY29sb3JcIjogXCIjZjNhMjMwXCIsXG5cdFx0Ly8gXCJkaXJlY3Rpb25zXCI6IFtcblx0XHQvLyBcdFwiU2FudG9zIER1bW9udFwiLFxuXHRcdC8vIFx0XCJDZW50cmFsXCJcblx0XHQvLyBdXG5cdH1cbl07XG5cbmxldCBsaW5lX2luZGV4ID0geyB9O1xubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuXHRsZXQgbGluZV9uYW1lID0gbGluZVtcIm5hbWVcIl07XG5cdGxpbmVfaW5kZXhbbGluZV9uYW1lXSA9IGxpbmU7XG59KTtcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIGdldCBsb2NhdGlvbiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gUGVnYSBhIGxvY2FsaXphw6fDo28gZG8gdXN1w6FyaW9cbmNvbnN0IGdldExvY2F0aW9uID0gKGlzX2luaXRpYWwgPSBmYWxzZSkgPT4ge1xuXHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuXG5cdFx0Ly8gU2UgdmllciBkbyBtb2RvIGluaWNpYWwsIGVuY2VycmEgZWxlXG5cdFx0aWYgKGlzX2luaXRpYWwpIHtcblx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWluaXRpYWxcIik7XG5cdFx0XHQkcGFuZWwucmVtb3ZlQ2xhc3MoXCItc3RhdGUtLXBlcm1pc3Npb25cIik7XG5cdFx0fVxuXG5cdFx0Ly8gRGVzY29icmUgYSBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYSBlIHByb2N1cmEgYXMgcHLDs3hpbWFzIHBhcnRpZGFzXG5cdFx0bGV0IG5lYXJlc3Rfc3RhdGlvbiA9IG5lYXJlc3RTdGF0aW9uKFtwb3NpdGlvbltcImNvb3Jkc1wiXVtcImxhdGl0dWRlXCJdLCBwb3NpdGlvbltcImNvb3Jkc1wiXVtcImxvbmdpdHVkZVwiXV0pO1xuXHRcdG5leHREZXBhcnR1cmVzKG5lYXJlc3Rfc3RhdGlvbiwgdHJ1ZSk7XG5cdH0pO1xufTtcbiIsIi8vIEVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXG5jb25zdCBkZWcycmFkID0gKGRlZykgPT4ge1xuXHRyZXR1cm4gZGVnICogKE1hdGguUEkgLyAxODApO1xufTtcblxuY29uc3QgbmVhcmVzdFN0YXRpb24gPSAodXNlcl9jb29yZGluYXRlcykgPT4ge1xuXHRjb25zdCB1c2VyX2xhdGl0dWRlID0gZGVnMnJhZCh1c2VyX2Nvb3JkaW5hdGVzWzBdKTtcblx0Y29uc3QgdXNlcl9sb25naXR1ZGUgPSBkZWcycmFkKHVzZXJfY29vcmRpbmF0ZXNbMV0pO1xuXG5cdGNvbnN0IFIgPSA2MzcxO1xuXG5cdGxldCBzaG9ydGVzdF9kaXN0YW5jZSA9IG51bGw7XG5cdGxldCBuZWFyZXN0X3N0YXRpb24gPSBudWxsO1xuXG5cdHN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcblx0XHRpZiAoIXN0YXRpb25bXCJkaXNhYmxlZFwiXSkge1xuXHRcdFx0Y29uc3Qgc3RhdGlvbl9sYXRpdHVkZSA9IGRlZzJyYWQoc3RhdGlvbltcImNvb3JkaW5hdGVzXCJdWzBdKTtcblx0XHRcdGNvbnN0IHN0YXRpb25fbG9uZ2l0dWRlID0gZGVnMnJhZChzdGF0aW9uW1wiY29vcmRpbmF0ZXNcIl1bMV0pO1xuXG5cdFx0XHRjb25zdCB4ID0gKHN0YXRpb25fbG9uZ2l0dWRlIC0gdXNlcl9sb25naXR1ZGUpICogTWF0aC5jb3MoKHVzZXJfbGF0aXR1ZGUgKyBzdGF0aW9uX2xhdGl0dWRlKSAvIDIpO1xuXHRcdFx0Y29uc3QgeSA9IChzdGF0aW9uX2xhdGl0dWRlIC0gdXNlcl9sYXRpdHVkZSk7XG5cdFx0XHRjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KSAqIFI7XG5cblx0XHRcdGlmICghc2hvcnRlc3RfZGlzdGFuY2UgfHwgZGlzdGFuY2UgPCBzaG9ydGVzdF9kaXN0YW5jZSkge1xuXHRcdFx0XHRzaG9ydGVzdF9kaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRuZWFyZXN0X3N0YXRpb24gPSBzdGF0aW9uO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIG5lYXJlc3Rfc3RhdGlvbjtcbn07XG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBuZXh0IGRlcGFydHVyZXMgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIFByw7N4aW1hcyBwYXJ0aWRhc1xuY29uc3QgbmV4dERlcGFydHVyZXMgPSAoc3RhdGlvbiwgZnJvbV9ncHMgPSBmYWxzZSkgPT4ge1xuXHRsZXQgZGVwYXJ0dXJlcztcblxuXHQvLyBTZSBuw6NvIGZvciBwYXNzYWRhIGEgZXN0YcOnw6NvLCBhYnJlIGxpc3RhIGRlIGVzdGHDp8O1ZXNcblx0aWYgKCFzdGF0aW9uKSB7XG5cdFx0JGJvZHkuYWRkQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRzdGF0aW9uID0gc3RhdGlvbl9pbmRleFtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhc3Qtc3RhdGlvblwiKSB8fCBcIkNlbnRyYWxcIl07XG5cdH1cblxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxhc3Qtc3RhdGlvblwiLCBzdGF0aW9uW1wibmFtZVwiXSk7XG5cblx0Y29uc3Qgc3RhdGVfY2xhc3NlcyA9IFtcblx0XHRcIi1zdGF0ZS0tc3RhdGlvblwiLFxuXHRcdFwiLXN0YXRlLS1sb2FkaW5nXCIsXG5cdFx0XCItc3RhdGUtLWNsb3NlZFwiLFxuXHRcdFwiLXN0YXRlLS1wZXJtaXNzaW9uXCJcblx0XTtcblxuXHQvLyBEZXNsaWdhIGludGVydmFsb3MgZSBldmVudG9zIGV4aXN0ZW50ZXNcblx0Y2xlYXJJbnRlcnZhbChjdWVbXCJpbnRlcnZhbC1kZXBhcnR1cmVzXCJdKTtcblx0Y2xlYXJJbnRlcnZhbChjdWVbXCJpbnRlcnZhbC1sYXN0LXVwZGF0ZWRcIl0pO1xuXHQkKHdpbmRvdykub2ZmKFwidmlzaWJpbGl0eWNoYW5nZS5kZXBhcnR1cmVzIG9ubGluZS5kZXBhcnR1cmVzXCIpO1xuXG5cdC8vIE1vc3RyYSBhbmltYcOnw6NvIGRlIGxvYWRcblx0JHBhbmVsLnJlbW92ZUNsYXNzKHN0YXRlX2NsYXNzZXMpLmFkZENsYXNzKFwiLXN0YXRlLS1sb2FkaW5nXCIpO1xuXG5cdC8vIENvbG9jYSBvIG5vbWUgZGEgZXN0YcOnw6NvIG5vIGFwcGJhclxuXHQkbmF2aWdhdGlvbltcImhlYWRlclwiXVtcInN0YXRpb24tbmFtZVwiXS50ZXh0KHN0YXRpb25bXCJuYW1lXCJdKTtcblx0JHBhbmVsW1wiaGVhZGVyXCJdW1widGl0bGVcIl0uZW1wdHkoKTtcblxuXHQvLyBEZWl4YSBhIGVzdGHDp8OjbyBzZWxlY2lvbmFkYSBuYSBsaXN0YVxuXHQkbmF2aWdhdGlvbltcImNvbnRlbnRcIl1bXCJzdGF0aW9uc1wiXS5maW5kKFwiYVwiKS5yZW1vdmVDbGFzcyhcIi1zdGF0ZS0tc2VsZWN0ZWRcIik7XG5cdCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXVtcInN0YXRpb25zXCJdLmZpbmQoXCJhW2RhdGEtc3RhdGlvbj0nXCIgKyBzdGF0aW9uW1wibmFtZVwiXSArIFwiJ11cIikuYWRkQ2xhc3MoXCItc3RhdGUtLXNlbGVjdGVkXCIpO1xuXG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdC8vIEF0dWFsaXphw6fDo29cblx0Y29uc3QgbGFzdFVwZGF0ZWQgPSAoKSA9PiB7XG5cdFx0bGV0ICRiYWRnZSA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdHVzLWJhZGdlXCIpO1xuXG5cdFx0Ly8gVGVtcG8gZW0gc2VndW5kb3MgZGVzZGUgYSDDumx0aW1hIGF0dWFsaXphw6fDo29cblx0XHRsZXQgc2Vjb25kc19zaW5jZV91cGRhdGUgPSBtb21lbnQoKS5kaWZmKGRlcGFydHVyZXNbXCJsYXN0VXBkYXRlZFwiXSwgXCJzZWNvbmRzXCIpO1xuXG5cdFx0Ly8gU2UgdGl2ZXIgc2lkbyBhdHVhbGl6YWRvIGjDoSBtZW5vcyBkZSA2MCBzZWd1bmRvcywgbW9zdHJhIFRlbXBvIFJlYWxcblx0XHRpZiAoc2Vjb25kc19zaW5jZV91cGRhdGUgPD0gNjApIHtcblx0XHRcdCRiYWRnZS5hZGRDbGFzcyhcIi1zdGF0ZS0tcmVhbC10aW1lXCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJyZWFsLXRpbWVcIl0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgbGFzdF91cGRhdGVkID0gTDEwbltsYW5ndWFnZV1bXCJ1cGRhdGVkXCJdICsgXCIgXCIgKyBtb21lbnQoZGVwYXJ0dXJlc1tcImxhc3RVcGRhdGVkXCJdKS5mcm9tTm93KCk7XG5cdFx0XHQkYmFkZ2UudGV4dChsYXN0X3VwZGF0ZWQpO1xuXHRcdH1cblxuXHRcdCRwYW5lbFtcImhlYWRlclwiXVtcImJhZGdlXCJdLmVtcHR5KCkuYXBwZW5kKCRiYWRnZSk7XG5cdH07XG5cblxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0Ly8gQ29uc3VsdGEgZG9zIGRhZG9zXG5cdGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG5cdFx0Ly8gU8OzIGNhcnJlZ2Egc2UgZXN0aXZlciBlbSBmb2NvIGUgb25saW5lXG5cdFx0aWYgKGRvY3VtZW50LmhpZGRlbiA9PT0gdHJ1ZSB8fCBuYXZpZ2F0b3Iub25MaW5lID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIENhcnJlZ2Egb3MgZGFkb3Ncblx0XHQkLmdldEpTT04oXCJodHRwczovL3VzLWNlbnRyYWwxLXZsdGNhcmlvY2EuY2xvdWRmdW5jdGlvbnMubmV0L2RlcGFydHVyZXM/Y2FsbGJhY2s9P1wiLCB7XG5cdFx0XHRcInN0YXRpb25cIjogc3RhdGlvbltcImlkXCJdLFxuXHRcdFx0XCJlbnZcIjogZW52XG5cdFx0fSkuZG9uZSgocmVzcG9uc2UpID0+IHtcblx0XHRcdGRlcGFydHVyZXMgPSByZXNwb25zZTtcblxuXHRcdFx0bGV0IGV0YV9jb3VudCA9IDA7XG5cdFx0XHRsZXQgZGlyZWN0aW9ucyA9IFsgXTtcblx0XHRcdGxldCBkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbiA9IHsgfTtcblxuXHRcdFx0Ly8gT3JnYW5pemEgYXMgcGFydGlkYXMgcG9yIGRlc3Rpbm9cblx0XHRcdGRlcGFydHVyZXNbXCJsaW5lc1wiXS5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdFx0XHRcdGxpbmVbXCJkaXJlY3Rpb25zXCJdLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuXHRcdFx0XHRcdGxldCBkaXJlY3Rpb25fdGl0bGUgPSBkaXJlY3Rpb25bXCJuYW1lXCJdO1xuXHRcdFx0XHRcdGV0YV9jb3VudCArPSBkaXJlY3Rpb25bXCJldGFzXCJdLmxlbmd0aDtcblxuXHRcdFx0XHRcdGlmIChkaXJlY3Rpb25bXCJldGFzXCJdLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdGlmICghZGlyZWN0aW9ucy5pbmNsdWRlcyhkaXJlY3Rpb25fdGl0bGUpKSB7XG5cdFx0XHRcdFx0XHRcdGRpcmVjdGlvbnMucHVzaChkaXJlY3Rpb25fdGl0bGUpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoIWRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0pIHtcblx0XHRcdFx0XHRcdFx0ZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb25bZGlyZWN0aW9uX3RpdGxlXSA9IFsgXTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uW1wiZXRhc1wiXS5mb3JFYWNoKCh0cmFpbikgPT4ge1xuXHRcdFx0XHRcdFx0XHR0cmFpbltcImxpbmVcIl0gPSBsaW5lW1wibmFtZVwiXTtcblx0XHRcdFx0XHRcdFx0ZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb25bZGlyZWN0aW9uX3RpdGxlXS5wdXNoKHRyYWluKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gU2UgbsO6bWVybyBkZSBwcsOzeGltYXMgcGFydGlkYXMgZm9yIHplcm8sXG5cdFx0XHQvLyBjb25mZXJlIHNlIGFpbmRhIGVzdMOhIGRlbnRybyBkbyBob3LDoXJpbyBkZSBmdW5jaW9uYW1lbnRvXG5cdFx0XHRpZiAoZXRhX2NvdW50ID09PSAwICYmIGVudiA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcblx0XHRcdFx0bGV0IG5vdyA9IG1vbWVudCgpO1xuXHRcdFx0XHRsZXQgb3BlcmF0aW9uX3N0YXJ0X3RpbWUgPSBtb21lbnQoXCIwNjowMFwiLCBcIkhIOm1tXCIpO1xuXHRcdFx0XHRsZXQgb3BlcmF0aW9uX2VuZF90aW1lID0gbW9tZW50KFwiMDA6MDBcIiwgXCJISDptbVwiKTtcblxuXHRcdFx0XHRpZiAobm93LmlzQWZ0ZXIob3BlcmF0aW9uX2VuZF90aW1lKSAmJiBub3cuaXNCZWZvcmUob3BlcmF0aW9uX3N0YXJ0X3RpbWUpKSB7XG5cdFx0XHRcdFx0JHBhbmVsW1wiaGVhZGVyXCJdW1widGl0bGVcIl0udGV4dChMMTBuW2xhbmd1YWdlXVtcIm91dC1vZi1vcGVyYXRpb25cIl0pO1xuXG5cdFx0XHRcdFx0JHBhbmVsW1wiY29udGVudFwiXVtcImNsb3NlZFwiXS5lbXB0eSgpO1xuXHRcdFx0XHRcdCQoXCI8aDEgLz5cIikudGV4dChMMTBuW2xhbmd1YWdlXVtcIm91dC1vZi1vcGVyYXRpb25cIl0pLmFwcGVuZFRvKCRwYW5lbFtcImNvbnRlbnRcIl1bXCJjbG9zZWRcIl0pO1xuXHRcdFx0XHRcdCQoXCI8cCAvPlwiKS5odG1sKEwxMG5bbGFuZ3VhZ2VdW1wib3BlcmF0aW9uLWhvdXJzXCJdKS5hcHBlbmRUbygkcGFuZWxbXCJjb250ZW50XCJdW1wiY2xvc2VkXCJdKTtcblx0XHRcdFx0XHQkKFwiPGkgLz5cIikuYWRkQ2xhc3MoXCJtYXRlcmlhbC1pY29uc1wiKS50ZXh0KFwiYWNjZXNzX3RpbWVcIikuYXBwZW5kVG8oJHBhbmVsW1wiY29udGVudFwiXVtcImNsb3NlZFwiXSk7XG5cdFx0XHRcdFx0JHBhbmVsLnJlbW92ZUNsYXNzKHN0YXRlX2NsYXNzZXMpLmFkZENsYXNzKFwiLXN0YXRlLS1jbG9zZWRcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRwYW5lbFtcImhlYWRlclwiXVtcInRpdGxlXCJdLnRleHQoTDEwbltsYW5ndWFnZV1bXCJuZXh0LWRlcGFydHVyZXNcIl0pO1xuXG5cdFx0XHRcdC8vIE1vbnRhIGFzIHBhcnRpZGFzXG5cdFx0XHRcdGxldCAkZGVwYXJ0dXJlcyA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGVwYXJ0dXJlc1wiKTtcblxuXHRcdFx0XHRkaXJlY3Rpb25zLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuXHRcdFx0XHRcdGxldCAkZGlyZWN0aW9uID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJkaXJlY3Rpb25cIikuYXBwZW5kVG8oJGRlcGFydHVyZXMpO1xuXHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGlyZWN0aW9uLWNhcHRpb25cIikudGV4dChMMTBuW2xhbmd1YWdlXVtcImRpcmVjdGlvblwiXSkuYXBwZW5kVG8oJGRpcmVjdGlvbik7XG5cblx0XHRcdFx0XHRsZXQgZXRhcyA9IGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl07XG5cdFx0XHRcdFx0ZXRhcy5zb3J0KChhLCBiKSA9PiB7IHJldHVybiBhW1wic2Vjb25kc1wiXSAtIGJbXCJzZWNvbmRzXCJdIH0pO1xuXG5cdFx0XHRcdFx0ZXRhcy5mb3JFYWNoKCh0cmFpbikgPT4ge1xuXHRcdFx0XHRcdFx0bGV0ICR0cmFpbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW5cIikuYXBwZW5kVG8oJGRpcmVjdGlvbik7XG5cdFx0XHRcdFx0XHRsZXQgJGxpbmUgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInRyYWluLWxpbmVcIikuYXBwZW5kVG8oJHRyYWluKTtcblx0XHRcdFx0XHRcdGxldCBpc19hcHByb2FjaGluZyA9IHRyYWluW1wic2Vjb25kc1wiXSA8IDMwO1xuXG5cdFx0XHRcdFx0XHRsZXQgbGluZSA9IGxpbmVfaW5kZXhbdHJhaW5bXCJsaW5lXCJdXTtcblx0XHRcdFx0XHRcdGxldCBkZXBhcnR1cmVfY291bnRkb3duID0gKGlzX2FwcHJvYWNoaW5nPyBMMTBuW2xhbmd1YWdlXVtcIm5vd1wiXSA6IE1hdGgucm91bmQodHJhaW5bXCJzZWNvbmRzXCJdIC8gNjApICsgXCI8c3Bhbj5taW48L3NwYW4+XCIpO1xuXHRcdFx0XHRcdFx0bGV0IGRlcGFydHVyZV90aW1lID0gbW9tZW50KHRyYWluW1wiYXJyaXZhbFRpbWVcIl0pLmZvcm1hdChcIkhIOm1tXCIpO1xuXG5cdFx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImxpbmUtc2hpZWxkXCIpLmNzcyhcImNvbG9yXCIsIGxpbmVbXCJjb2xvclwiXSkuYXR0cihcInRpdGxlXCIsIEwxMG5bbGFuZ3VhZ2VdW1wibGluZVwiXSArIFwiIFwiICsgbGluZVtcImlkXCJdKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSkudGV4dChsaW5lW1wiaWRcIl0pLmFwcGVuZFRvKCRsaW5lKTtcblx0XHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW4tZGlyZWN0aW9uXCIpLmF0dHIoXCJ0aXRsZVwiLCBMMTBuW2xhbmd1YWdlXVtcInRyYWluXCJdICsgXCIgXCIgKyB0cmFpbltcInRyYWluXCJdKS50ZXh0KGRpcmVjdGlvbikuYXBwZW5kVG8oJHRyYWluKTtcblx0XHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW4tZXRhXCIpLmF0dHIoXCJ0aXRsZVwiLCBkZXBhcnR1cmVfdGltZSkuaHRtbChkZXBhcnR1cmVfY291bnRkb3duKS5hcHBlbmRUbygkdHJhaW4pO1xuXG5cdFx0XHRcdFx0XHRpZiAoaXNfYXBwcm9hY2hpbmcpIHtcblx0XHRcdFx0XHRcdFx0JHRyYWluLmFkZENsYXNzKFwiLXN0YXRlLS1hcHByb2FjaGluZ1wiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bGFzdFVwZGF0ZWQoKTtcblxuXHRcdFx0XHQvLyBMaW1wYSBvIHBhaW5lbCBlIGluc2VyZSBvcyBub3ZvcyBkYWRvc1xuXHRcdFx0XHQkcGFuZWwucmVtb3ZlQ2xhc3Moc3RhdGVfY2xhc3NlcykuYWRkQ2xhc3MoXCItc3RhdGUtLXN0YXRpb25cIik7XG5cdFx0XHRcdCRwYW5lbFtcImNvbnRlbnRcIl1bXCJzdGF0aW9uXCJdLmVtcHR5KCkuYXBwZW5kKCRkZXBhcnR1cmVzKTtcblxuXHRcdFx0XHQvLyBBcyBwYXJhZGFzIFNldGUgZGUgU2V0ZW1icm8gZSBDb2xvbWJvIHPDo28gbXVpdG8gcHLDs3hpbWFzLCBlbnTDo28gw6kgY29tdW0gcXVlIGEgbG9jYWxpemHDp8Ojb1xuXHRcdFx0XHQvLyBkbyBHUFMgZG8gdXN1w6FyaW8gbGV2ZSDDoCBlc3Rhw6fDo28gZXJyYWRhLiBQb3IgaXNzbywgbmVzc2FzIHBhcmFkYXMsIMOpIG1vc3RyYWRvIHVtIGJvdMOjbyBwYXJhXG5cdFx0XHRcdC8vIGZhY2lsaXRhciBhIHRyb2NhIGRlIHBhcmFkYS4gTyBib3TDo28gc8OzIMOpIGV4aWJpZG8gcXVhbmRvIG8gdXN1w6FyaW8gdmVtIGRhIGxvY2FsaXphw6fDo29cblx0XHRcdFx0Ly8gYXV0b23DoXRpY2EgKG7Do28gbW9zdHJhIHNlIHBhcmFkYSBmb2kgZXNjb2xoaWRhIG5vIG1lbnUpXG5cdFx0XHRcdGlmIChmcm9tX2dwcyA9PT0gdHJ1ZSAmJiBbXCJzZXRlLWRlLXNldGVtYnJvXCIsIFwiY29sb21ib1wiXS5pbmNsdWRlcyhzdGF0aW9uW1wiaWRcIl0pKSB7XG5cdFx0XHRcdFx0bGV0IG9yaWdpbl9hbmRfZGVzdGluYXRpb24gPSB7XG5cdFx0XHRcdFx0XHRcInNldGUtZGUtc2V0ZW1icm9cIjoge1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJDb2xvbWJvXCIsXG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogXCJjb2xvbWJvXCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcImNvbG9tYm9cIjoge1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJTZXRlIGRlIFNldGVtYnJvXCIsXG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogXCJzZXRlLWRlLXNldGVtYnJvXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0bGV0IGRlc3RpbmF0aW9uID0gb3JpZ2luX2FuZF9kZXN0aW5hdGlvbltzdGF0aW9uW1wiaWRcIl1dO1xuXG5cdFx0XHRcdFx0bGV0ICRzdWdnZXN0aW9uID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJzdWdnZXN0aW9uXCIpO1xuXHRcdFx0XHRcdGxldCAkYnV0dG9uID0gJChcIjxhIC8+XCIpLmFkZENsYXNzKFwiYnV0dG9uXCIpLmF0dHIoXCJocmVmXCIsIFwiI1wiKS5hcHBlbmRUbygkc3VnZ2VzdGlvbik7XG5cdFx0XHRcdFx0JChcIjxpIC8+XCIpLmFkZENsYXNzKFwibWF0ZXJpYWwtaWNvbnNcIikudGV4dChcIm5lYXJfbWVcIikuYXBwZW5kVG8oJGJ1dHRvbik7XG5cdFx0XHRcdFx0JChcIjxzcGFuIC8+XCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJhcmUteW91LWF0XCJdKS5hcHBlbmRUbygkYnV0dG9uKTtcblx0XHRcdFx0XHQkKFwiPHN0cm9uZyAvPlwiKS50ZXh0KGRlc3RpbmF0aW9uW1wibmFtZVwiXSArIFwiP1wiKS5hcHBlbmRUbygkYnV0dG9uKTtcblxuXHRcdFx0XHRcdCRidXR0b24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRuZXh0RGVwYXJ0dXJlcyhkZXN0aW5hdGlvbik7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQkcGFuZWxbXCJjb250ZW50XCJdW1wic3RhdGlvblwiXS5hcHBlbmQoJHN1Z2dlc3Rpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGN1ZVtcImxvYWQtZGVwYXJ0dXJlc1wiXS5yZXNvbHZlKCk7XG5cdFx0fSk7XG5cdH07XG5cblxuXHQvLyBBdHVhbGl6YcOnw6NvXG5cdGNvbnN0IHVwZGF0ZVdpbmRvdyA9ICgpID0+IHtcblx0XHRpZiAoZG9jdW1lbnQuaGlkZGVuID09PSBmYWxzZSAmJiBuYXZpZ2F0b3Iub25MaW5lID09PSB0cnVlKSB7XG5cdFx0XHRsYXN0VXBkYXRlZCgpO1xuXHRcdFx0Z2V0RGF0YSgpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBDcmlhIG5vdm9zIGludGVydmFsb3MgZSBldmVudG9zXG5cdCQod2luZG93KS5vbihcIm9ubGluZS5kZXBhcnR1cmVzIHZpc2liaWxpdHljaGFuZ2UuZGVwYXJ0dXJlc1wiLCB1cGRhdGVXaW5kb3cpO1xuXHRjdWVbXCJpbnRlcnZhbC1kZXBhcnR1cmVzXCJdID0gc2V0SW50ZXJ2YWwoZ2V0RGF0YSwgMTUwMDApO1xuXHRjdWVbXCJpbnRlcnZhbC1sYXN0LXVwZGF0ZWRcIl0gPSBzZXRJbnRlcnZhbChsYXN0VXBkYXRlZCwgNTAwMCk7XG5cblx0Z2V0RGF0YSgpO1xufTtcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gc3lzdGVtIHN0YXR1cyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBQZWdhIG8gZXN0YWRvIGRvIHNpc3RlbWFcclxuY29uc3Qgc3lzdGVtU3RhdHVzID0gKCgpID0+IHtcclxuICAgIGN1ZVtcImxvYWQtZG9jdW1lbnRcIl0uZG9uZSgoKSA9PiB7XHJcbiAgICAgICAgY3VlW1wiaW50ZXJ2YWwtc3lzdGVtLXN0YXR1c1wiXSA9IHNldEludGVydmFsKGdldFN0YXR1cywgNjAgKiAxMDAwKTtcclxuICAgICAgICBnZXRTdGF0dXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBsYXN0X3N0YXR1cztcclxuXHJcbiAgICBjb25zdCBzdGF0ZV9jbGFzc2VzID0gW1xyXG4gICAgICAgIFwiLXN0YXRlLS1va1wiLFxyXG4gICAgICAgIFwiLXN0YXRlLS13YXJuaW5nXCJcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIFPDsyBjYXJyZWdhIHNlIGVzdGl2ZXIgZW0gZm9jbyBlIG9ubGluZVxyXG4gICAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4gPT09IHRydWUgfHwgbmF2aWdhdG9yLm9uTGluZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJC5nZXRKU09OKFwiaHR0cHM6Ly91cy1jZW50cmFsMS12bHRjYXJpb2NhLmNsb3VkZnVuY3Rpb25zLm5ldC9zdGF0dXM/Y2FsbGJhY2s9P1wiLCB7XHJcbiAgICAgICAgICAgIFwiZW52XCI6IGVudlxyXG4gICAgICAgIH0pLmRvbmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGN1ZVtcImxvYWQtZGVwYXJ0dXJlc1wiXS5kb25lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5yZW1vdmVDbGFzcyhzdGF0ZV9jbGFzc2VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJzdGF0dXNcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJzdGF0dXNcIl0gPT09IFwiTm9ybWFsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdLmFkZENsYXNzKFwiLXN0YXRlLS1va1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0X3N0YXR1cyAhPT0gXCJOb3JtYWxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1wiaWNvblwiXS50ZXh0KFwiY2hlY2tfY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1widGV4dFwiXS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wic3RhdHVzLW9rXCJdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZV9oZWlnaHQgPSAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJ0ZXh0XCJdLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0uaGVpZ2h0KG1lc3NhZ2VfaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0ucmVtb3ZlQ2xhc3MoXCItbW9kZS0tY29sbGFwc2VkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5jc3MoXCJoZWlnaHRcIiwgXCJcIikuYWRkQ2xhc3MoXCItbW9kZS0tY29sbGFwc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdLmFkZENsYXNzKFwiLXN0YXRlLS13YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJpY29uXCJdLnRleHQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1widGV4dFwiXS50ZXh0KHJlc3BvbnNlW1wibWVzc2FnZVwiXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZV9oZWlnaHQgPSAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJ0ZXh0XCJdLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5oZWlnaHQobWVzc2FnZV9oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3Rfc3RhdHVzID0gcmVzcG9uc2VbXCJzdGF0dXNcIl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkKHdpbmRvdykub24oXCJ2aXNpYmlsaXR5Y2hhbmdlLnN5c3RlbVN0YXR1c1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbGFzdF9zdGF0dXMgPSBudWxsO1xyXG4gICAgICAgIGdldFN0YXR1cygpO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIHN0YXRpb24gbGlzdCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3Qgc3RhdGlvbkxpc3QgPSAoKSA9PiB7XG5cdCRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdW1wic3RhdGlvbi1uYW1lXCJdLnRleHQoTDEwbltsYW5ndWFnZV1bXCJzdGF0aW9uc1wiXSk7XG5cdCRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdW1wicGxhY2Vob2xkZXJcIl0udGV4dChMMTBuW2xhbmd1YWdlXVtcInN0YXRpb25zXCJdKTtcblxuXHQvLyBCb3TDo28gcGFyYSBsb2NhbGl6YXIgZXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcblx0bGV0ICRuZWFyZXN0ID0gJChcIjxhIC8+XCIpXG5cdFx0LmF0dHIoXCJocmVmXCIsIFwiI1wiKVxuXHRcdC5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdCQoXCIuc3RhdGlvbnMgaDEgLnN0YXRpb24tbmFtZVwiKS50ZXh0KFwiXCIpO1xuXHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRcdGdldExvY2F0aW9uKCk7XG5cdFx0fSlcblx0XHQuYXBwZW5kVG8oJG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0pO1xuXHQkKFwiPGkgLz5cIikuYWRkQ2xhc3MoXCJtYXRlcmlhbC1pY29uc1wiKS50ZXh0KFwibmVhcl9tZVwiKS5hcHBlbmRUbygkbmVhcmVzdCk7XG5cdCQoXCI8c3BhbiAvPlwiKS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wiZmluZC1uZWFyZXN0LXN0YXRpb25cIl0pLmFwcGVuZFRvKCRuZWFyZXN0KTtcblxuXHQkKFwiPGxpIC8+XCIpLmFkZENsYXNzKFwibmVhcmVzdC1zdGF0aW9uXCIpLmFwcGVuZCgkbmVhcmVzdCkuYXBwZW5kVG8oJG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0pO1xuXG5cdC8vIE1vbnRhIGxpc3RhIGRlIGVzdGHDp8O1ZXNcblx0c3RhdGlvbnMuZm9yRWFjaCgoc3RhdGlvbikgPT4ge1xuXHRcdGxldCAkc3RhdGlvbiA9ICQoXCI8YSAvPlwiKS5hdHRyKFwiaHJlZlwiLCBcIiNcIiArIHN0YXRpb25bXCJpZFwiXSkuYXR0cihcImRhdGEtc3RhdGlvblwiLCBzdGF0aW9uW1wibmFtZVwiXSk7XG5cblx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInN0YXRpb24tbmFtZVwiKS50ZXh0KHN0YXRpb25bXCJuYW1lXCJdKS5hcHBlbmRUbygkc3RhdGlvbik7XG5cblx0XHRsZXQgJGxpbmVzID0gJChcIjx1bCAvPlwiKS5hZGRDbGFzcyhcInN0YXRpb24tbGluZXNcIikuYXBwZW5kVG8oJHN0YXRpb24pO1xuXHRcdGxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcblx0XHRcdGxldCAkbGluZSA9ICQoXCI8bGkgLz5cIikuYXBwZW5kVG8oJGxpbmVzKTtcblx0XHRcdGlmIChzdGF0aW9uW1wibGluZXNcIl0uaW5jbHVkZXMobGluZVtcImlkXCJdKSkge1xuXHRcdFx0XHRsZXQgJHNoaWVsZCA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwibGluZS1zaGllbGRcIikuY3NzKFwiY29sb3JcIiwgbGluZVtcImNvbG9yXCJdKS50ZXh0KGxpbmVbXCJpZFwiXSkuYXBwZW5kVG8oJGxpbmUpO1xuXG5cdFx0XHRcdGlmIChsaW5lW1wiZGlzYWJsZWRcIl0pIHtcblx0XHRcdFx0XHQkc2hpZWxkLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKS5hZGRDbGFzcyhcIi1zdGF0ZS0tZGlzYWJsZWRcIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmICghc3RhdGlvbltcImRpc2FibGVkXCJdKSB7XG5cdFx0XHQkc3RhdGlvbi5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRuZXh0RGVwYXJ0dXJlcyhzdGF0aW9uKTtcblx0XHRcdFx0JGJvZHkucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkc3RhdGlvbi5hZGRDbGFzcyhcIi1zdGF0ZS0tZGlzYWJsZWRcIik7XG5cdFx0XHQkc3RhdGlvbi5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0JChcIjxsaSAvPlwiKS5hcHBlbmQoJHN0YXRpb24pLmFwcGVuZFRvKCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXVtcInN0YXRpb25zXCJdKTtcblx0fSk7XG5cblx0Ly8gQXNzb2NpYSBvIGV2ZW50byBkZSBjbGljayBwYXJhIGFicmlyIG91IGZlY2hhciBhIGxpc3RhXG5cdCRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdCRib2R5LnRvZ2dsZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdH0pO1xuXG5cdCRwYW5lbFtcImhlYWRlclwiXS5vbihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAoJGJvZHkuaGFzQ2xhc3MoXCItbW9kZS0tbGlzdFwiKSkge1xuXHRcdFx0JGJvZHkucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIFNjcm9sbCBkZW50cm8gZGEgbGlzdGFcblx0JCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIChldmVudCkgPT4ge1xuXHRcdGxldCBzY3JvbGxfdG9wX3Bvc2l0aW9uID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0aWYgKHNjcm9sbF90b3BfcG9zaXRpb24gPj0gMTIpIHtcblx0XHRcdCRib2R5LmFkZENsYXNzKFwiLW1vZGUtLXNjcm9sbFwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGJvZHkucmVtb3ZlQ2xhc3MoXCItbW9kZS0tc2Nyb2xsXCIpO1xuXHRcdH1cblx0fSk7XG59O1xuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyB0aGVtZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmNvbnN0IHRoZW1lID0gKCgpID0+IHtcclxuICAgIGxldCB0aGVtZV9vcmRlciA9IFtcclxuICAgICAgICBcImF1dG9cIixcclxuICAgICAgICBcImxpZ2h0XCIsXHJcbiAgICAgICAgXCJkYXJrXCJcclxuICAgIF07XHJcblxyXG4gICAgbGV0IHRoZW1lX3NldHRpbmdzID0ge1xyXG4gICAgICAgIFwiYXV0b1wiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogTDEwbltsYW5ndWFnZV1bXCJhdXRvLXRoZW1lXCJdLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJicmlnaHRuZXNzX2F1dG9cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsaWdodFwiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogTDEwbltsYW5ndWFnZV1bXCJsaWdodC10aGVtZVwiXSxcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiYnJpZ2h0bmVzc181XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGFya1wiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogTDEwbltsYW5ndWFnZV1bXCJkYXJrLXRoZW1lXCJdLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJicmlnaHRuZXNzXzRcIlxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBzZXQgPSAobmV3X3RoZW1lLCBvbGRfdGhlbWUgPSBcIlwiKSA9PiB7XHJcbiAgICAgICAgY3VycmVudF90aGVtZSA9IG5ld190aGVtZTtcclxuXHJcbiAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWUgc3BhblwiKS50ZXh0KHRoZW1lX3NldHRpbmdzW25ld190aGVtZV1bXCJ0aXRsZVwiXSk7XHJcbiAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWUgaVwiKS50ZXh0KHRoZW1lX3NldHRpbmdzW25ld190aGVtZV1bXCJpY29uXCJdKTtcclxuXHJcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItdGhlbWUtLVwiICsgb2xkX3RoZW1lKS5hZGRDbGFzcyhcIi10aGVtZS0tXCIgKyBuZXdfdGhlbWUpO1xyXG5cclxuICAgICAgICAvLyBTYWx2YSBjb25maWd1cmHDp8OjbyBubyBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBpZiAobmV3X3RoZW1lID09PSBcImF1dG9cIikge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRoZW1lXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgbmV3X3RoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENvbmZlcmUgc2UgasOhIGjDoSB0ZW1hIHNhbHZvIG5vIGxvY2FsU3RvcmFnZS5cclxuICAgIC8vIFNlIG7Do28gaG91dmVyLCBwZWdhIG8gcGFkcsOjbyBkbyBzaXN0ZW1hXHJcbiAgICAvLyBsZXQgY3VycmVudF90aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgfHwgZ2V0Q29tcHV0ZWRTdHlsZSgkKFwiLnNldHRpbmdzIC5jdXJyZW50LXRoZW1lXCIpWzBdKS5nZXRQcm9wZXJ0eVZhbHVlKFwiY29udGVudFwiKS5yZXBsYWNlKC9cIi9nLCBcIlwiKTtcclxuICAgIGxldCBjdXJyZW50X3RoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSB8fCBcImF1dG9cIjtcclxuXHJcbiAgICBpZiAoY3VycmVudF90aGVtZSkge1xyXG4gICAgICAgIHNldChjdXJyZW50X3RoZW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghY3VycmVudF90aGVtZSkge1xyXG4gICAgICAgICAgICAkKFwiLnNldHRpbmdzIC50aGVtZSBzcGFuXCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJhdXRvLXRoZW1lXCJdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBEZXNjb2JyZSBhIHBvc2nDp8OjbyBkbyB0ZW1hIG5hIG9yZGVtXHJcbiAgICAgICAgICAgIGxldCB0aGVtZV9wb3NpdGlvbiA9IHRoZW1lX29yZGVyLmluZGV4T2YoY3VycmVudF90aGVtZSk7XHJcbiAgICAgICAgICAgIGxldCBuZXdfdGhlbWUgPSB0aGVtZV9vcmRlclt0aGVtZV9wb3NpdGlvbiArIDFdIHx8IHRoZW1lX29yZGVyWzBdO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0YSBvIG5vdm8gdGVtYVxyXG4gICAgICAgICAgICBzZXQobmV3X3RoZW1lLCBjdXJyZW50X3RoZW1lKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIHN0YXJ0IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuJChmdW5jdGlvbigpIHtcblx0JGJvZHkgPSAkKFwiYm9keVwiKTtcblxuXHQkbmF2aWdhdGlvbiA9ICQoXCIubmF2aWdhdGlvblwiKTtcblx0JG5hdmlnYXRpb25bXCJoZWFkZXJcIl0gPSAkKFwiLm5hdmlnYXRpb24taGVhZGVyXCIsICRuYXZpZ2F0aW9uKTtcblx0JG5hdmlnYXRpb25bXCJoZWFkZXJcIl1bXCJzdGF0aW9uLW5hbWVcIl0gPSAkKFwiLnN0YXRpb24tbmFtZVwiLCAkbmF2aWdhdGlvbltcImhlYWRlclwiXSk7XG5cdCRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdW1wicGxhY2Vob2xkZXJcIl0gPSAkKFwiLnBsYWNlaG9sZGVyXCIsICRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdKTtcblx0JG5hdmlnYXRpb25bXCJjb250ZW50XCJdID0gJChcIi5uYXZpZ2F0aW9uLWNvbnRlbnRcIiwgJG5hdmlnYXRpb24pO1xuXHQkbmF2aWdhdGlvbltcImNvbnRlbnRcIl1bXCJzdGF0aW9uc1wiXSA9ICQoXCIuc3RhdGlvbnNcIiwgJG5hdmlnYXRpb25bXCJjb250ZW50XCJdKTtcblxuXHQkcGFuZWwgPSAkKFwiLnBhbmVsXCIpO1xuXHQkcGFuZWxbXCJoZWFkZXJcIl0gPSAkKFwiLnBhbmVsLWhlYWRlclwiLCAkcGFuZWwpO1xuXHQkcGFuZWxbXCJoZWFkZXJcIl1bXCJ0aXRsZVwiXSA9ICQoXCIudGl0bGVcIiwgJHBhbmVsW1wiaGVhZGVyXCJdKTtcblx0JHBhbmVsW1wiaGVhZGVyXCJdW1wiYmFkZ2VcIl0gPSAkKFwiLmJhZGdlXCIsICRwYW5lbFtcImhlYWRlclwiXSk7XG5cdCRwYW5lbFtcImNvbnRlbnRcIl0gPSAkKFwiLnBhbmVsLWNvbnRlbnRcIiwgJHBhbmVsKTtcblx0JHBhbmVsW1wiY29udGVudFwiXVtcInN0YXRpb25cIl0gPSAkKFwiLnN0YXRpb25cIiwgJHBhbmVsW1wiY29udGVudFwiXSk7XG5cdCRwYW5lbFtcImNvbnRlbnRcIl1bXCJjbG9zZWRcIl0gPSAkKFwiLmNsb3NlZFwiLCAkcGFuZWxbXCJjb250ZW50XCJdKTtcblx0JHBhbmVsW1wiY29udGVudFwiXVtcInBlcm1pc3Npb25cIl0gPSAkKFwiLnBlcm1pc3Npb25cIiwgJHBhbmVsW1wiY29udGVudFwiXSk7XG5cdCRwYW5lbFtcImNvbnRlbnRcIl1bXCJsb2FkaW5nXCJdID0gJChcIi5sb2FkaW5nXCIsICRwYW5lbFtcImNvbnRlbnRcIl0pO1xuXHQkcGFuZWxbXCJmb290ZXJcIl0gPSAkKFwiLnBhbmVsLWZvb3RlclwiLCAkcGFuZWwpO1xuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0gPSAkKFwiLnN0YXR1c1wiLCAkcGFuZWxbXCJmb290ZXJcIl0pO1xuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJpY29uXCJdID0gJChcIi5pY29uXCIsICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXSk7XG5cdCRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXVtcInRleHRcIl0gPSAkKFwiLnRleHRcIiwgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdKTtcblx0JHBhbmVsW1wiZm9vdGVyXCJdW1wibmV0d29ya1wiXSA9ICQoXCIubmV0d29ya1wiLCAkcGFuZWxbXCJmb290ZXJcIl0pO1xuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdW1wiaWNvblwiXSA9ICQoXCIuaWNvblwiLCAkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdKTtcblx0JHBhbmVsW1wiZm9vdGVyXCJdW1wibmV0d29ya1wiXVtcInRleHRcIl0gPSAkKFwiLnRleHRcIiwgJHBhbmVsW1wiZm9vdGVyXCJdW1wibmV0d29ya1wiXSk7XG5cblx0Y3VlW1wibG9hZC1kb2N1bWVudFwiXS5yZXNvbHZlKCk7XG5cblx0Ly8gVHVkbyBjb21lw6dhIGFxdWkhXG5cdHN0YXRpb25MaXN0KCk7XG5cblx0Ly8gQ29uZmVyZSBzZSB1c3XDoXJpbyBqw6EgaGF2aWEgaGFiaWxpdGFkbyBnZW9sb2NhbGl6YcOnw6NvIGFudGVzXG5cdGlmIChcImdlb2xvY2F0aW9uXCIgaW4gbmF2aWdhdG9yKSB7XG5cdFx0JHBhbmVsW1wiY29udGVudFwiXVtcInBlcm1pc3Npb25cIl0uZmluZChcInNwYW5cIikudGV4dChMMTBuW2xhbmd1YWdlXVtcImZpbmQtbmVhcmVzdC1zdGF0aW9uXCJdKTtcblxuXHRcdGlmIChcInBlcm1pc3Npb25zXCIgaW4gbmF2aWdhdG9yKSB7XG5cdFx0XHRuYXZpZ2F0b3IucGVybWlzc2lvbnMucXVlcnkoeyBcIm5hbWVcIjogXCJnZW9sb2NhdGlvblwiIH0pLnRoZW4oKHBlcm1pc3Npb24pID0+IHtcblx0XHRcdFx0aWYgKHBlcm1pc3Npb25bXCJzdGF0ZVwiXSA9PT0gXCJncmFudGVkXCIpIHtcblx0XHRcdFx0XHQvLyBTZSBqw6EgdGl2ZXIsIHBlZ2EgYSBsb2NhbGl6YcOnw6NvIGF0dWFsIGUgcHJvY3VyYSBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYVxuXHRcdFx0XHRcdGdldExvY2F0aW9uKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAocGVybWlzc2lvbltcInN0YXRlXCJdID09PSBcImRlbmllZFwiKSB7XG5cdFx0XHRcdFx0Ly8gU2UgbsOjbyBmb2kgZGF0YSBwZXJtaXNzw6NvLCBhYnJlIGEgbGlzdGEgZGUgZXN0YcOnw7Vlc1xuXHRcdFx0XHRcdG5leHREZXBhcnR1cmVzKCk7XG5cdFx0XHRcdFx0JG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0uZmluZChcIi5uZWFyZXN0LXN0YXRpb25cIikuaGlkZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIFNlIG7Do28gdGl2ZXIsIG1vc3RyYSBib3TDo28gcGFyYSBzb2xpY2l0YXIgYXV0b3JpemHDp8Ojb1xuXHRcdFx0XHRcdCQoXCJib2R5XCIpLmFkZENsYXNzKFwiLW1vZGUtLWluaXRpYWxcIik7XG5cdFx0XHRcdFx0JHBhbmVsLmFkZENsYXNzKFwiLXN0YXRlLS1wZXJtaXNzaW9uXCIpO1xuXG5cdFx0XHRcdFx0JChcIi5idXR0b25cIiwgJHBhbmVsW1wiY29udGVudFwiXVtcInBlcm1pc3Npb25cIl0pLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0Z2V0TG9jYXRpb24odHJ1ZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRnZXRMb2NhdGlvbigpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBTZSBuw6NvIGhvdXZlciBnZW9sb2NhbGl6YcOnw6NvLCBhYnJlIGEgbGlzdGEgZGUgZXN0YcOnw7Vlc1xuXHRcdG5leHREZXBhcnR1cmVzKCk7XG5cdFx0JG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0uZmluZChcIi5uZWFyZXN0LXN0YXRpb25cIikuaGlkZSgpO1xuXHR9XG59KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gU2VydmljZSBXb3JrZXJcbmlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcblx0XHRjdWVbXCJzZXJ2aWNlLXdvcmtlclwiXSA9IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFwiL3NlcnZpY2Utd29ya2VyLmpzXCIpO1xuXG5cdFx0Y3VlW1wic2VydmljZS13b3JrZXJcIl0udGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIVwiLCByZWdpc3RyYXRpb24pO1xuXHRcdH0sIChlcnJvcikgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiBcIiwgZXJyb3IpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRXN0YWRvIGRhIGNvbmV4w6NvXG4kKGZ1bmN0aW9uKCkge1xuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdW1wiaWNvblwiXS50ZXh0KFwiY2xvdWRfb2ZmXCIpO1xuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdW1widGV4dFwiXS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wib2ZmbGluZVwiXSk7XG59KTtcblxuY29uc3QgdXBkYXRlQ29ubmVjdGlvblN0YXR1cyA9ICgpID0+IHtcblx0bGV0IGNvbm5lY3RlZCA9IG5hdmlnYXRvci5vbkxpbmU7XG5cblx0aWYgKGNvbm5lY3RlZCA9PT0gdHJ1ZSkge1xuXHRcdCRwYW5lbFtcImZvb3RlclwiXVtcIm5ldHdvcmtcIl0ucmVtb3ZlQ2xhc3MoXCItc3RhdGUtLW9mZmxpbmVcIik7XG5cdH0gZWxzZSB7XG5cdFx0JHBhbmVsW1wiZm9vdGVyXCJdW1wibmV0d29ya1wiXS5hZGRDbGFzcyhcIi1zdGF0ZS0tb2ZmbGluZVwiKTtcblx0fVxufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIiwgdXBkYXRlQ29ubmVjdGlvblN0YXR1cyk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9mZmxpbmVcIiwgdXBkYXRlQ29ubmVjdGlvblN0YXR1cyk7XG4iXX0=