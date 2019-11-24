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


    $.getJSON(endpoints["departures"], {
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

    $.getJSON(endpoints["status"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiLCJMMTBuLmpzIiwic3RhdGlvbi1pbmZvLmpzIiwibGluZS1pbmZvLmpzIiwiZ2V0LWxvY2F0aW9uLmpzIiwibmVhcmVzdC1zdGF0aW9uLmpzIiwibmV4dC1kZXBhcnR1cmVzLmpzIiwic3lzdGVtLXN0YXR1cy5qcyIsInN0YXRpb24tbGlzdC5qcyIsInRoZW1lLmpzIiwic3RhcnQuanMiXSwibmFtZXMiOlsiY3VlIiwiJGJvZHkiLCIkbmF2aWdhdGlvbiIsIiRwYW5lbCIsIiQiLCJEZWZlcnJlZCIsIm1vbWVudCIsInVwZGF0ZUxvY2FsZSIsImRlZmF1bHRfbGFuZ3VhZ2UiLCJhdmFpbGFibGVfbGFuZ3VhZ2VzIiwidXNlcl9sYW5ndWFnZSIsIm5hdmlnYXRvciIsImxhbmd1YWdlIiwic3Vic3RyIiwiaW5jbHVkZXMiLCJsb2NhbGUiLCJMMTBuIiwic3RhdGlvbnMiLCJzdGF0aW9uX2luZGV4IiwiZm9yRWFjaCIsInN0YXRpb24iLCJzdGF0aW9uX25hbWUiLCJsaW5lcyIsImxpbmVfaW5kZXgiLCJsaW5lIiwibGluZV9uYW1lIiwiZ2V0TG9jYXRpb24iLCJpc19pbml0aWFsIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsInJlbW92ZUNsYXNzIiwibmVhcmVzdF9zdGF0aW9uIiwibmVhcmVzdFN0YXRpb24iLCJuZXh0RGVwYXJ0dXJlcyIsImRlZzJyYWQiLCJkZWciLCJNYXRoIiwiUEkiLCJ1c2VyX2Nvb3JkaW5hdGVzIiwidXNlcl9sYXRpdHVkZSIsInVzZXJfbG9uZ2l0dWRlIiwiUiIsInNob3J0ZXN0X2Rpc3RhbmNlIiwic3RhdGlvbl9sYXRpdHVkZSIsInN0YXRpb25fbG9uZ2l0dWRlIiwieCIsImNvcyIsInkiLCJkaXN0YW5jZSIsInNxcnQiLCJmcm9tX2dwcyIsImRlcGFydHVyZXMiLCJhZGRDbGFzcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RhdGVfY2xhc3NlcyIsImNsZWFySW50ZXJ2YWwiLCJ3aW5kb3ciLCJvZmYiLCJ0ZXh0IiwiZW1wdHkiLCJmaW5kIiwibGFzdFVwZGF0ZWQiLCIkYmFkZ2UiLCJzZWNvbmRzX3NpbmNlX3VwZGF0ZSIsImRpZmYiLCJsYXN0X3VwZGF0ZWQiLCJmcm9tTm93IiwiYXBwZW5kIiwiZ2V0RGF0YSIsImRvY3VtZW50IiwiaGlkZGVuIiwib25MaW5lIiwiZ2V0SlNPTiIsImVuZHBvaW50cyIsImVudiIsImRvbmUiLCJyZXNwb25zZSIsImV0YV9jb3VudCIsImRpcmVjdGlvbnMiLCJkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbiIsImRpcmVjdGlvbiIsImRpcmVjdGlvbl90aXRsZSIsImxlbmd0aCIsInB1c2giLCJ0cmFpbiIsIm5vdyIsIm9wZXJhdGlvbl9zdGFydF90aW1lIiwib3BlcmF0aW9uX2VuZF90aW1lIiwiaXNBZnRlciIsImlzQmVmb3JlIiwiYXBwZW5kVG8iLCJodG1sIiwiJGRlcGFydHVyZXMiLCIkZGlyZWN0aW9uIiwiZXRhcyIsInNvcnQiLCJhIiwiYiIsIiR0cmFpbiIsIiRsaW5lIiwiaXNfYXBwcm9hY2hpbmciLCJkZXBhcnR1cmVfY291bnRkb3duIiwicm91bmQiLCJkZXBhcnR1cmVfdGltZSIsImZvcm1hdCIsImNzcyIsImF0dHIiLCJvcmlnaW5fYW5kX2Rlc3RpbmF0aW9uIiwiZGVzdGluYXRpb24iLCIkc3VnZ2VzdGlvbiIsIiRidXR0b24iLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNvbHZlIiwidXBkYXRlV2luZG93Iiwic2V0SW50ZXJ2YWwiLCJzeXN0ZW1TdGF0dXMiLCJnZXRTdGF0dXMiLCJsYXN0X3N0YXR1cyIsIm1lc3NhZ2VfaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJoZWlnaHQiLCJzZXRUaW1lb3V0Iiwic3RhdGlvbkxpc3QiLCIkbmVhcmVzdCIsIiRzdGF0aW9uIiwiJGxpbmVzIiwiJHNoaWVsZCIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJzY3JvbGxfdG9wX3Bvc2l0aW9uIiwic2Nyb2xsVG9wIiwidGhlbWUiLCJ0aGVtZV9vcmRlciIsInRoZW1lX3NldHRpbmdzIiwic2V0IiwibmV3X3RoZW1lIiwib2xkX3RoZW1lIiwiY3VycmVudF90aGVtZSIsInJlbW92ZUl0ZW0iLCJ0aGVtZV9wb3NpdGlvbiIsImluZGV4T2YiLCJwZXJtaXNzaW9ucyIsInF1ZXJ5IiwidGhlbiIsInBlcm1pc3Npb24iLCJoaWRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInJlZ2lzdHJhdGlvbiIsImVycm9yIiwidXBkYXRlQ29ubmVjdGlvblN0YXR1cyIsImNvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFBQSxHQUFBLEdBQUEsRUFBQSxDLENBQ0E7O0FBQ0EsSUFBQUMsS0FBQSxFQUFBQyxXQUFBLEVBQUFDLE1BQUE7QUFFQUgsR0FBQSxDQUFBLGVBQUEsQ0FBQSxHQUFBSSxDQUFBLENBQUFDLFFBQUEsRUFBQTtBQUNBTCxHQUFBLENBQUEsaUJBQUEsQ0FBQSxHQUFBSSxDQUFBLENBQUFDLFFBQUEsRUFBQSxDLENDVEE7QUFDQTtBQUNBO0FBRUE7O0FBQ0FDLE1BQUEsQ0FBQUMsWUFBQSxDQUFBLE9BQUEsRUFBQTtBQUNBLGtCQUFBO0FBQ0EsWUFBQTtBQURBO0FBREEsQ0FBQSxFLENBTUE7O0FBQ0EsSUFBQUMsZ0JBQUEsR0FBQSxJQUFBO0FBQ0EsSUFBQUMsbUJBQUEsR0FBQSxDQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxDQUFBO0FBQ0EsSUFBQUMsYUFBQSxHQUFBQyxTQUFBLENBQUFDLFFBQUEsR0FBQUQsU0FBQSxDQUFBQyxRQUFBLENBQUFDLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUFMLGdCQUFBO0FBRUEsSUFBQUksUUFBQSxHQUFBSCxtQkFBQSxDQUFBSyxRQUFBLENBQUFKLGFBQUEsSUFBQUEsYUFBQSxHQUFBRixnQkFBQSxDLENBQ0E7O0FBRUEsSUFBQUksUUFBQSxLQUFBLElB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O0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQTFDQSxFQWtEQTtBQUNBLFVBQUEsWUFEQTtBQUVBLFFBQUEsWUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQWxEQSxFQTBEQTtBQUNBLFVBQUEsU0FEQTtBQUVBLFFBQUEsU0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBMURBLEVBa0VBO0FBQ0EsVUFBQSxtQkFEQTtBQUVBLFFBQUEsbUJBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FsRUEsRUEwRUE7QUFDQTtBQUNBLFVBQUEsa0JBRkE7QUFHQSxRQUFBLGtCQUhBO0FBSUE7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBTEE7QUFNQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQVBBLENBMUVBLEVBbUZBO0FBQ0EsVUFBQSxTQURBO0FBRUEsUUFBQSxTQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbkZBLEVBMkZBO0FBQ0EsVUFBQSxRQURBO0FBRUEsUUFBQSxRQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBM0ZBLEVBbUdBO0FBQ0EsVUFBQSxVQURBO0FBRUEsUUFBQSxVQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0FuR0EsRUEyR0E7QUFDQSxVQUFBLG1CQURBO0FBRUEsUUFBQSxtQkFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBM0dBLEVBbUhBO0FBQ0EsVUFBQSxtQkFEQTtBQUVBLFFBQUEsbUJBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsaUJBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQW5IQSxFQTJIQTtBQUNBLFVBQUEsY0FEQTtBQUVBLFFBQUEsY0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGlCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQTNIQSxFQW1JQTtBQUNBLFVBQUEsVUFEQTtBQUVBLFFBQUEsVUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBbklBLEVBMklBO0FBQ0EsVUFBQSxlQURBO0FBRUEsUUFBQSxlQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBM0lBLEVBbUpBO0FBQ0EsVUFBQSxhQURBO0FBRUEsUUFBQSxhQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0FuSkEsRUEySkE7QUFDQSxVQUFBLFlBREE7QUFFQSxRQUFBLFlBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0EzSkEsRUFtS0E7QUFDQSxVQUFBLE9BREE7QUFFQSxRQUFBLE9BRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQW5LQSxFQTJLQTtBQUNBO0FBQ0EsVUFBQSxZQUZBO0FBR0EsUUFBQSxZQUhBO0FBSUE7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBTEE7QUFNQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBUEEsQ0EzS0EsRUFvTEE7QUFDQSxVQUFBLGNBREE7QUFFQSxRQUFBLGNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsaUJBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FwTEEsRUE0TEE7QUFDQSxVQUFBLGVBREE7QUFFQSxRQUFBLGVBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsaUJBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0E1TEEsRUFvTUE7QUFDQSxVQUFBLFdBREE7QUFFQSxRQUFBLFdBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQXBNQSxFQTRNQTtBQUNBLFVBQUEsa0JBREE7QUFFQSxRQUFBLGtCQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBNU1BLEVBb05BO0FBQ0EsVUFBQSxZQURBO0FBRUEsUUFBQSxZQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0FwTkEsRUE0TkE7QUFDQSxVQUFBLGdCQURBO0FBRUEsUUFBQSxnQkFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBNU5BLEVBb09BO0FBQ0EsVUFBQSxlQURBO0FBRUEsUUFBQSxlQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0FwT0EsQ0FBQTtBQThPQSxJQUFBQyxhQUFBLEdBQUEsRUFBQTtBQUNBRCxRQUFBLENBQUFFLE9BQUEsQ0FBQSxVQUFBQyxPQUFBLEVBQUE7QUFDQSxNQUFBQyxZQUFBLEdBQUFELE9BQUEsQ0FBQSxNQUFBLENBQUE7QUFDQUYsRUFBQUEsYUFBQSxDQUFBRyxZQUFBLENBQUEsR0FBQUQsT0FBQTtBQUNBLENBSEE7QUMvT0EsSUFBQUUsS0FBQSxHQUFBLENBQ0E7QUFDQSxRQUFBLENBREE7QUFFQSxVQUFBLFNBRkE7QUFHQSxXQUFBLFNBSEEsQ0FJQTtBQUNBO0FBQ0E7QUFDQTs7QUFQQSxDQURBLEVBVUE7QUFDQSxRQUFBLENBREE7QUFFQSxVQUFBLFNBRkE7QUFHQSxXQUFBLFNBSEEsQ0FJQTtBQUNBO0FBQ0E7QUFDQTs7QUFQQSxDQVZBLEVBbUJBO0FBQ0E7QUFDQSxRQUFBLENBRkE7QUFHQSxVQUFBLFNBSEE7QUFJQSxXQUFBLFNBSkEsQ0FLQTtBQUNBO0FBQ0E7QUFDQTs7QUFSQSxDQW5CQSxDQUFBO0FBK0JBLElBQUFDLFVBQUEsR0FBQSxFQUFBO0FBQ0FELEtBQUEsQ0FBQUgsT0FBQSxDQUFBLFVBQUFLLElBQUEsRUFBQTtBQUNBLE1BQUFDLFNBQUEsR0FBQUQsSUFBQSxDQUFBLE1BQUEsQ0FBQTtBQUNBRCxFQUFBQSxVQUFBLENBQUFFLFNBQUEsQ0FBQSxHQUFBRCxJQUFBO0FBQ0EsQ0FIQSxFLENDaENBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLElBQUFFLFdBQUEsR0FBQSxTQUFBQSxXQUFBLEdBQUE7QUFBQSxNQUFBQyxVQUFBLHVFQUFBLEtBQUE7QUFDQWhCLEVBQUFBLFNBQUEsQ0FBQWlCLFdBQUEsQ0FBQUMsa0JBQUEsQ0FBQSxVQUFBQyxRQUFBLEVBQUE7QUFFQTtBQUNBLFFBQUFILFVBQUEsRUFBQTtBQUNBdkIsTUFBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBMkIsV0FBQSxDQUFBLGdCQUFBO0FBQ0E1QixNQUFBQSxNQUFBLENBQUE0QixXQUFBLENBQUEsb0JBQUE7QUFDQSxLQU5BLENBUUE7OztBQUNBLFFBQUFDLGVBQUEsR0FBQUMsY0FBQSxDQUFBLENBQUFILFFBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsRUFBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQUksSUFBQUEsY0FBQSxDQUFBRixlQUFBLEVBQUEsSUFBQSxDQUFBO0FBQ0EsR0FYQTtBQVlBLENBYkEsQyxDQ0xBOzs7QUFDQSxJQUFBRyxPQUFBLEdBQUEsU0FBQUEsT0FBQSxDQUFBQyxHQUFBLEVBQUE7QUFDQSxTQUFBQSxHQUFBLElBQUFDLElBQUEsQ0FBQUMsRUFBQSxHQUFBLEdBQUEsQ0FBQTtBQUNBLENBRkE7O0FBSUEsSUFBQUwsY0FBQSxHQUFBLFNBQUFBLGNBQUEsQ0FBQU0sZ0JBQUEsRUFBQTtBQUNBLE1BQUFDLGFBQUEsR0FBQUwsT0FBQSxDQUFBSSxnQkFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsTUFBQUUsY0FBQSxHQUFBTixPQUFBLENBQUFJLGdCQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFFQSxNQUFBRyxDQUFBLEdBQUEsSUFBQTtBQUVBLE1BQUFDLGlCQUFBLEdBQUEsSUFBQTtBQUNBLE1BQUFYLGVBQUEsR0FBQSxJQUFBO0FBRUFmLEVBQUFBLFFBQUEsQ0FBQUUsT0FBQSxDQUFBLFVBQUFDLE9BQUEsRUFBQTtBQUNBLFFBQUEsQ0FBQUEsT0FBQSxDQUFBLFVBQUEsQ0FBQSxFQUFBO0FBQ0EsVUFBQXdCLGdCQUFBLEdBQUFULE9BQUEsQ0FBQWYsT0FBQSxDQUFBLGFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsVUFBQXlCLGlCQUFBLEdBQUFWLE9BQUEsQ0FBQWYsT0FBQSxDQUFBLGFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBRUEsVUFBQTBCLENBQUEsR0FBQSxDQUFBRCxpQkFBQSxHQUFBSixjQUFBLElBQUFKLElBQUEsQ0FBQVUsR0FBQSxDQUFBLENBQUFQLGFBQUEsR0FBQUksZ0JBQUEsSUFBQSxDQUFBLENBQUE7QUFDQSxVQUFBSSxDQUFBLEdBQUFKLGdCQUFBLEdBQUFKLGFBQUE7QUFDQSxVQUFBUyxRQUFBLEdBQUFaLElBQUEsQ0FBQWEsSUFBQSxDQUFBSixDQUFBLEdBQUFBLENBQUEsR0FBQUUsQ0FBQSxHQUFBQSxDQUFBLElBQUFOLENBQUE7O0FBRUEsVUFBQSxDQUFBQyxpQkFBQSxJQUFBTSxRQUFBLEdBQUFOLGlCQUFBLEVBQUE7QUFDQUEsUUFBQUEsaUJBQUEsR0FBQU0sUUFBQTtBQUNBakIsUUFBQUEsZUFBQSxHQUFBWixPQUFBO0FBQ0E7QUFDQTtBQUNBLEdBZEE7QUFnQkEsU0FBQVksZUFBQTtBQUNBLENBMUJBLEMsQ0NMQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0EsSUFBQUUsY0FBQSxHQUFBLFNBQUFBLGNBQUEsQ0FBQWQsT0FBQSxFQUFBO0FBQUEsTUFBQStCLFFBQUEsdUVBQUEsS0FBQTtBQUNBLE1BQUFDLFVBQUEsQ0FEQSxDQUdBOztBQUNBLE1BQUEsQ0FBQWhDLE9BQUEsRUFBQTtBQUNBbkIsSUFBQUEsS0FBQSxDQUFBb0QsUUFBQSxDQUFBLGFBQUE7QUFDQWpDLElBQUFBLE9BQUEsR0FBQUYsYUFBQSxDQUFBb0MsWUFBQSxDQUFBQyxPQUFBLENBQUEsY0FBQSxLQUFBLFNBQUEsQ0FBQTtBQUNBOztBQUVBRCxFQUFBQSxZQUFBLENBQUFFLE9BQUEsQ0FBQSxjQUFBLEVBQUFwQyxPQUFBLENBQUEsTUFBQSxDQUFBO0FBRUEsTUFBQXFDLGFBQUEsR0FBQSxDQUNBLGlCQURBLEVBRUEsaUJBRkEsRUFHQSxnQkFIQSxFQUlBLG9CQUpBLENBQUEsQ0FYQSxDQWtCQTs7QUFDQUMsRUFBQUEsYUFBQSxDQUFBMUQsR0FBQSxDQUFBLHFCQUFBLENBQUEsQ0FBQTtBQUNBMEQsRUFBQUEsYUFBQSxDQUFBMUQsR0FBQSxDQUFBLHVCQUFBLENBQUEsQ0FBQTtBQUNBSSxFQUFBQSxDQUFBLENBQUF1RCxNQUFBLENBQUEsQ0FBQUMsR0FBQSxDQUFBLCtDQUFBLEVBckJBLENBdUJBOztBQUNBekQsRUFBQUEsTUFBQSxDQUFBNEIsV0FBQSxDQUFBMEIsYUFBQSxFQUFBSixRQUFBLENBQUEsaUJBQUEsRUF4QkEsQ0EwQkE7O0FBQ0FuRCxFQUFBQSxXQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsY0FBQSxFQUFBMkQsSUFBQSxDQUFBekMsT0FBQSxDQUFBLE1BQUEsQ0FBQTtBQUNBakIsRUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQTJELEtBQUEsR0E1QkEsQ0E4QkE7O0FBQ0E1RCxFQUFBQSxXQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsVUFBQSxFQUFBNkQsSUFBQSxDQUFBLEdBQUEsRUFBQWhDLFdBQUEsQ0FBQSxrQkFBQTtBQUNBN0IsRUFBQUEsV0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQTZELElBQUEsQ0FBQSxxQkFBQTNDLE9BQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxJQUFBLEVBQUFpQyxRQUFBLENBQUEsa0JBQUEsRUFoQ0EsQ0FtQ0E7QUFDQTs7QUFDQSxNQUFBVyxXQUFBLEdBQUEsU0FBQUEsV0FBQSxHQUFBO0FBQ0EsUUFBQUMsTUFBQSxHQUFBN0QsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBaUQsUUFBQSxDQUFBLGNBQUEsQ0FBQSxDQURBLENBR0E7O0FBQ0EsUUFBQWEsb0JBQUEsR0FBQTVELE1BQUEsR0FBQTZELElBQUEsQ0FBQWYsVUFBQSxDQUFBLGFBQUEsQ0FBQSxFQUFBLFNBQUEsQ0FBQSxDQUpBLENBTUE7O0FBQ0EsUUFBQWMsb0JBQUEsSUFBQSxFQUFBLEVBQUE7QUFDQUQsTUFBQUEsTUFBQSxDQUFBWixRQUFBLENBQUEsbUJBQUEsRUFBQVEsSUFBQSxDQUFBN0MsSUFBQSxDQUFBSixRQUFBLENBQUEsQ0FBQSxXQUFBLENBQUE7QUFDQSxLQUZBLE1BRUE7QUFDQSxVQUFBd0QsWUFBQSxHQUFBcEQsSUFBQSxDQUFBSixRQUFBLENBQUEsQ0FBQSxTQUFBLElBQUEsR0FBQSxHQUFBTixNQUFBLENBQUE4QyxVQUFBLENBQUEsYUFBQSxDQUFBLENBQUEsQ0FBQWlCLE9BQUEsRUFBQTtBQUNBSixNQUFBQSxNQUFBLENBQUFKLElBQUEsQ0FBQU8sWUFBQTtBQUNBOztBQUVBakUsSUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQTJELEtBQUEsR0FBQVEsTUFBQSxDQUFBTCxNQUFBO0FBQ0EsR0FmQSxDQXJDQSxDQXVEQTtBQUNBOzs7QUFDQSxNQUFBTSxPQUFBLEdBQUEsU0FBQUEsT0FBQSxHQUFBO0FBQ0E7QUFDQSxRQUFBQyxRQUFBLENBQUFDLE1BQUEsS0FBQSxJQUFBLElBQUE5RCxTQUFBLENBQUErRCxNQUFBLEtBQUEsS0FBQSxFQUFBO0FBQ0EsYUFBQSxLQUFBO0FBQ0EsS0FKQSxDQU1BOzs7QUFDQXRFLElBQUFBLENBQUEsQ0FBQXVFLE9BQUEsQ0FBQUMsU0FBQSxDQUFBLFlBQUEsQ0FBQSxFQUFBO0FBQ0EsaUJBQUF4RCxPQUFBLENBQUEsSUFBQSxDQURBO0FBRUEsYUFBQXlEO0FBRkEsS0FBQSxFQUdBQyxJQUhBLENBR0EsVUFBQUMsUUFBQSxFQUFBO0FBQ0EzQixNQUFBQSxVQUFBLEdBQUEyQixRQUFBO0FBRUEsVUFBQUMsU0FBQSxHQUFBLENBQUE7QUFDQSxVQUFBQyxVQUFBLEdBQUEsRUFBQTtBQUNBLFVBQUFDLHVCQUFBLEdBQUEsRUFBQSxDQUxBLENBT0E7O0FBQ0E5QixNQUFBQSxVQUFBLENBQUEsT0FBQSxDQUFBLENBQUFqQyxPQUFBLENBQUEsVUFBQUssSUFBQSxFQUFBO0FBQ0FBLFFBQUFBLElBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQUwsT0FBQSxDQUFBLFVBQUFnRSxTQUFBLEVBQUE7QUFDQSxjQUFBQyxlQUFBLEdBQUFELFNBQUEsQ0FBQSxNQUFBLENBQUE7QUFDQUgsVUFBQUEsU0FBQSxJQUFBRyxTQUFBLENBQUEsTUFBQSxDQUFBLENBQUFFLE1BQUE7O0FBRUEsY0FBQUYsU0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBRSxNQUFBLEdBQUEsQ0FBQSxFQUFBO0FBQ0EsZ0JBQUEsQ0FBQUosVUFBQSxDQUFBbkUsUUFBQSxDQUFBc0UsZUFBQSxDQUFBLEVBQUE7QUFDQUgsY0FBQUEsVUFBQSxDQUFBSyxJQUFBLENBQUFGLGVBQUE7QUFDQTs7QUFFQSxnQkFBQSxDQUFBRix1QkFBQSxDQUFBRSxlQUFBLENBQUEsRUFBQTtBQUNBRixjQUFBQSx1QkFBQSxDQUFBRSxlQUFBLENBQUEsR0FBQSxFQUFBO0FBQ0E7O0FBRUFELFlBQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQWhFLE9BQUEsQ0FBQSxVQUFBb0UsS0FBQSxFQUFBO0FBQ0FBLGNBQUFBLEtBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQS9ELElBQUEsQ0FBQSxNQUFBLENBQUE7QUFDQTBELGNBQUFBLHVCQUFBLENBQUFFLGVBQUEsQ0FBQSxDQUFBRSxJQUFBLENBQUFDLEtBQUE7QUFDQSxhQUhBO0FBSUE7QUFDQSxTQWxCQTtBQW1CQSxPQXBCQSxFQVJBLENBOEJBO0FBQ0E7O0FBQ0EsVUFBQVAsU0FBQSxLQUFBLENBQUEsSUFBQUgsR0FBQSxLQUFBLFlBQUEsRUFBQTtBQUNBLFlBQUFXLEdBQUEsR0FBQWxGLE1BQUEsRUFBQTtBQUNBLFlBQUFtRixvQkFBQSxHQUFBbkYsTUFBQSxDQUFBLE9BQUEsRUFBQSxPQUFBLENBQUE7QUFDQSxZQUFBb0Ysa0JBQUEsR0FBQXBGLE1BQUEsQ0FBQSxPQUFBLEVBQUEsT0FBQSxDQUFBOztBQUVBLFlBQUFrRixHQUFBLENBQUFHLE9BQUEsQ0FBQUQsa0JBQUEsS0FBQUYsR0FBQSxDQUFBSSxRQUFBLENBQUFILG9CQUFBLENBQUEsRUFBQTtBQUNBdEYsVUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQTBELElBQUEsQ0FBQTdDLElBQUEsQ0FBQUosUUFBQSxDQUFBLENBQUEsa0JBQUEsQ0FBQTtBQUVBVCxVQUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsUUFBQSxFQUFBMkQsS0FBQTtBQUNBMUQsVUFBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBeUQsSUFBQSxDQUFBN0MsSUFBQSxDQUFBSixRQUFBLENBQUEsQ0FBQSxrQkFBQSxDQUFBLEVBQUFpRixRQUFBLENBQUExRixNQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsUUFBQSxDQUFBO0FBQ0FDLFVBQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQTBGLElBQUEsQ0FBQTlFLElBQUEsQ0FBQUosUUFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBaUYsUUFBQSxDQUFBMUYsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQTtBQUNBQyxVQUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUFpRCxRQUFBLENBQUEsZ0JBQUEsRUFBQVEsSUFBQSxDQUFBLGFBQUEsRUFBQWdDLFFBQUEsQ0FBQTFGLE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxRQUFBLENBQUE7QUFDQUEsVUFBQUEsTUFBQSxDQUFBNEIsV0FBQSxDQUFBMEIsYUFBQSxFQUFBSixRQUFBLENBQUEsZ0JBQUE7QUFDQTtBQUNBLE9BZEEsTUFjQTtBQUNBbEQsUUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQTBELElBQUEsQ0FBQTdDLElBQUEsQ0FBQUosUUFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQURBLENBR0E7O0FBQ0EsWUFBQW1GLFdBQUEsR0FBQTNGLENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQWlELFFBQUEsQ0FBQSxZQUFBLENBQUE7QUFFQTRCLFFBQUFBLFVBQUEsQ0FBQTlELE9BQUEsQ0FBQSxVQUFBZ0UsU0FBQSxFQUFBO0FBQ0EsY0FBQWEsVUFBQSxHQUFBNUYsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBaUQsUUFBQSxDQUFBLFdBQUEsRUFBQXdDLFFBQUEsQ0FBQUUsV0FBQSxDQUFBO0FBQ0EzRixVQUFBQSxDQUFBLENBQUEsU0FBQSxDQUFBLENBQUFpRCxRQUFBLENBQUEsbUJBQUEsRUFBQVEsSUFBQSxDQUFBN0MsSUFBQSxDQUFBSixRQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEsRUFBQWlGLFFBQUEsQ0FBQUcsVUFBQTtBQUVBLGNBQUFDLElBQUEsR0FBQWYsdUJBQUEsQ0FBQUMsU0FBQSxDQUFBO0FBQ0FjLFVBQUFBLElBQUEsQ0FBQUMsSUFBQSxDQUFBLFVBQUFDLENBQUEsRUFBQUMsQ0FBQSxFQUFBO0FBQUEsbUJBQUFELENBQUEsQ0FBQSxTQUFBLENBQUEsR0FBQUMsQ0FBQSxDQUFBLFNBQUEsQ0FBQTtBQUFBLFdBQUE7QUFFQUgsVUFBQUEsSUFBQSxDQUFBOUUsT0FBQSxDQUFBLFVBQUFvRSxLQUFBLEVBQUE7QUFDQSxnQkFBQWMsTUFBQSxHQUFBakcsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBaUQsUUFBQSxDQUFBLE9BQUEsRUFBQXdDLFFBQUEsQ0FBQUcsVUFBQSxDQUFBO0FBQ0EsZ0JBQUFNLEtBQUEsR0FBQWxHLENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQWlELFFBQUEsQ0FBQSxZQUFBLEVBQUF3QyxRQUFBLENBQUFRLE1BQUEsQ0FBQTtBQUNBLGdCQUFBRSxjQUFBLEdBQUFoQixLQUFBLENBQUEsU0FBQSxDQUFBLEdBQUEsRUFBQTtBQUVBLGdCQUFBL0QsSUFBQSxHQUFBRCxVQUFBLENBQUFnRSxLQUFBLENBQUEsTUFBQSxDQUFBLENBQUE7QUFDQSxnQkFBQWlCLG1CQUFBLEdBQUFELGNBQUEsR0FBQXZGLElBQUEsQ0FBQUosUUFBQSxDQUFBLENBQUEsS0FBQSxDQUFBLEdBQUF5QixJQUFBLENBQUFvRSxLQUFBLENBQUFsQixLQUFBLENBQUEsU0FBQSxDQUFBLEdBQUEsRUFBQSxJQUFBLGtCQUFBO0FBQ0EsZ0JBQUFtQixjQUFBLEdBQUFwRyxNQUFBLENBQUFpRixLQUFBLENBQUEsYUFBQSxDQUFBLENBQUEsQ0FBQW9CLE1BQUEsQ0FBQSxPQUFBLENBQUE7QUFFQXZHLFlBQUFBLENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQWlELFFBQUEsQ0FBQSxhQUFBLEVBQUF1RCxHQUFBLENBQUEsT0FBQSxFQUFBcEYsSUFBQSxDQUFBLE9BQUEsQ0FBQSxFQUFBcUYsSUFBQSxDQUFBLE9BQUEsRUFBQTdGLElBQUEsQ0FBQUosUUFBQSxDQUFBLENBQUEsTUFBQSxJQUFBLEdBQUEsR0FBQVksSUFBQSxDQUFBLElBQUEsQ0FBQSxFQUFBcUYsSUFBQSxDQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUFoRCxJQUFBLENBQUFyQyxJQUFBLENBQUEsSUFBQSxDQUFBLEVBQUFxRSxRQUFBLENBQUFTLEtBQUE7QUFDQWxHLFlBQUFBLENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQWlELFFBQUEsQ0FBQSxpQkFBQSxFQUFBd0QsSUFBQSxDQUFBLE9BQUEsRUFBQTdGLElBQUEsQ0FBQUosUUFBQSxDQUFBLENBQUEsT0FBQSxJQUFBLEdBQUEsR0FBQTJFLEtBQUEsQ0FBQSxPQUFBLENBQUEsRUFBQTFCLElBQUEsQ0FBQXNCLFNBQUEsRUFBQVUsUUFBQSxDQUFBUSxNQUFBO0FBQ0FqRyxZQUFBQSxDQUFBLENBQUEsU0FBQSxDQUFBLENBQUFpRCxRQUFBLENBQUEsV0FBQSxFQUFBd0QsSUFBQSxDQUFBLE9BQUEsRUFBQUgsY0FBQSxFQUFBWixJQUFBLENBQUFVLG1CQUFBLEVBQUFYLFFBQUEsQ0FBQVEsTUFBQTs7QUFFQSxnQkFBQUUsY0FBQSxFQUFBO0FBQ0FGLGNBQUFBLE1BQUEsQ0FBQWhELFFBQUEsQ0FBQSxxQkFBQTtBQUNBO0FBQ0EsV0FoQkE7QUFpQkEsU0F4QkE7QUEwQkFXLFFBQUFBLFdBQUEsR0FoQ0EsQ0FrQ0E7O0FBQ0E3RCxRQUFBQSxNQUFBLENBQUE0QixXQUFBLENBQUEwQixhQUFBLEVBQUFKLFFBQUEsQ0FBQSxpQkFBQTtBQUNBbEQsUUFBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFNBQUEsRUFBQTJELEtBQUEsR0FBQVEsTUFBQSxDQUFBeUIsV0FBQSxFQXBDQSxDQXNDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxZQUFBNUMsUUFBQSxLQUFBLElBQUEsSUFBQSxDQUFBLGtCQUFBLEVBQUEsU0FBQSxFQUFBckMsUUFBQSxDQUFBTSxPQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQTtBQUNBLGNBQUEwRixzQkFBQSxHQUFBO0FBQ0EsZ0NBQUE7QUFDQSxzQkFBQSxTQURBO0FBRUEsb0JBQUE7QUFGQSxhQURBO0FBS0EsdUJBQUE7QUFDQSxzQkFBQSxrQkFEQTtBQUVBLG9CQUFBO0FBRkE7QUFMQSxXQUFBO0FBV0EsY0FBQUMsV0FBQSxHQUFBRCxzQkFBQSxDQUFBMUYsT0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBO0FBRUEsY0FBQTRGLFdBQUEsR0FBQTVHLENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQWlELFFBQUEsQ0FBQSxZQUFBLENBQUE7QUFDQSxjQUFBNEQsT0FBQSxHQUFBN0csQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBaUQsUUFBQSxDQUFBLFFBQUEsRUFBQXdELElBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSxFQUFBaEIsUUFBQSxDQUFBbUIsV0FBQSxDQUFBO0FBQ0E1RyxVQUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUFpRCxRQUFBLENBQUEsZ0JBQUEsRUFBQVEsSUFBQSxDQUFBLFNBQUEsRUFBQWdDLFFBQUEsQ0FBQW9CLE9BQUE7QUFDQTdHLFVBQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQXlELElBQUEsQ0FBQTdDLElBQUEsQ0FBQUosUUFBQSxDQUFBLENBQUEsWUFBQSxDQUFBLEVBQUFpRixRQUFBLENBQUFvQixPQUFBO0FBQ0E3RyxVQUFBQSxDQUFBLENBQUEsWUFBQSxDQUFBLENBQUF5RCxJQUFBLENBQUFrRCxXQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsR0FBQSxFQUFBbEIsUUFBQSxDQUFBb0IsT0FBQTtBQUVBQSxVQUFBQSxPQUFBLENBQUFDLEVBQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQUMsS0FBQSxFQUFBO0FBQ0FBLFlBQUFBLEtBQUEsQ0FBQUMsY0FBQTtBQUNBbEYsWUFBQUEsY0FBQSxDQUFBNkUsV0FBQSxDQUFBO0FBQ0EsV0FIQTtBQUtBNUcsVUFBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFNBQUEsRUFBQW1FLE1BQUEsQ0FBQTBDLFdBQUE7QUFDQTtBQUNBOztBQUVBaEgsTUFBQUEsR0FBQSxDQUFBLGlCQUFBLENBQUEsQ0FBQXFILE9BQUE7QUFDQSxLQXpIQTtBQTBIQSxHQWpJQSxDQXpEQSxDQTZMQTs7O0FBQ0EsTUFBQUMsWUFBQSxHQUFBLFNBQUFBLFlBQUEsR0FBQTtBQUNBLFFBQUE5QyxRQUFBLENBQUFDLE1BQUEsS0FBQSxLQUFBLElBQUE5RCxTQUFBLENBQUErRCxNQUFBLEtBQUEsSUFBQSxFQUFBO0FBQ0FWLE1BQUFBLFdBQUE7QUFDQU8sTUFBQUEsT0FBQTtBQUNBO0FBQ0EsR0FMQSxDQTlMQSxDQXFNQTs7O0FBQ0FuRSxFQUFBQSxDQUFBLENBQUF1RCxNQUFBLENBQUEsQ0FBQXVELEVBQUEsQ0FBQSwrQ0FBQSxFQUFBSSxZQUFBO0FBQ0F0SCxFQUFBQSxHQUFBLENBQUEscUJBQUEsQ0FBQSxHQUFBdUgsV0FBQSxDQUFBaEQsT0FBQSxFQUFBLEtBQUEsQ0FBQTtBQUNBdkUsRUFBQUEsR0FBQSxDQUFBLHVCQUFBLENBQUEsR0FBQXVILFdBQUEsQ0FBQXZELFdBQUEsRUFBQSxJQUFBLENBQUE7QUFFQU8sRUFBQUEsT0FBQTtBQUNBLENBM01BLEMsQ0NMQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0EsSUFBQWlELFlBQUEsR0FBQSxZQUFBO0FBQ0F4SCxFQUFBQSxHQUFBLENBQUEsZUFBQSxDQUFBLENBQUE4RSxJQUFBLENBQUEsWUFBQTtBQUNBOUUsSUFBQUEsR0FBQSxDQUFBLHdCQUFBLENBQUEsR0FBQXVILFdBQUEsQ0FBQUUsU0FBQSxFQUFBLEtBQUEsSUFBQSxDQUFBO0FBQ0FBLElBQUFBLFNBQUE7QUFDQSxHQUhBO0FBS0EsTUFBQUMsV0FBQTtBQUVBLE1BQUFqRSxhQUFBLEdBQUEsQ0FDQSxZQURBLEVBRUEsaUJBRkEsQ0FBQTs7QUFLQSxNQUFBZ0UsU0FBQSxHQUFBLFNBQUFBLFNBQUEsR0FBQTtBQUNBO0FBQ0EsUUFBQWpELFFBQUEsQ0FBQUMsTUFBQSxLQUFBLElBQUEsSUFBQTlELFNBQUEsQ0FBQStELE1BQUEsS0FBQSxLQUFBLEVBQUE7QUFDQSxhQUFBLEtBQUE7QUFDQTs7QUFFQXRFLElBQUFBLENBQUEsQ0FBQXVFLE9BQUEsQ0FBQUMsU0FBQSxDQUFBLFFBQUEsQ0FBQSxFQUFBO0FBQ0EsYUFBQUM7QUFEQSxLQUFBLEVBRUFDLElBRkEsQ0FFQSxVQUFBQyxRQUFBLEVBQUE7QUFDQS9FLE1BQUFBLEdBQUEsQ0FBQSxpQkFBQSxDQUFBLENBQUE4RSxJQUFBLENBQUEsWUFBQTtBQUNBM0UsUUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFFBQUEsRUFBQTRCLFdBQUEsQ0FBQTBCLGFBQUE7O0FBRUEsWUFBQXNCLFFBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTtBQUNBLGNBQUFBLFFBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxRQUFBLEVBQUE7QUFDQTVFLFlBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUFrRCxRQUFBLENBQUEsWUFBQTs7QUFFQSxnQkFBQXFFLFdBQUEsS0FBQSxRQUFBLEVBQUE7QUFDQXZILGNBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUEsTUFBQSxFQUFBMEQsSUFBQSxDQUFBLGNBQUE7QUFDQTFELGNBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUEsTUFBQSxFQUFBMEQsSUFBQSxDQUFBN0MsSUFBQSxDQUFBSixRQUFBLENBQUEsQ0FBQSxXQUFBLENBQUE7QUFFQSxrQkFBQStHLGNBQUEsR0FBQXhILE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUEsTUFBQSxFQUFBeUgsV0FBQSxFQUFBO0FBQ0F6SCxjQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBMEgsTUFBQSxDQUFBRixjQUFBO0FBRUF4SCxjQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBNEIsV0FBQSxDQUFBLGtCQUFBO0FBRUErRixjQUFBQSxVQUFBLENBQUEsWUFBQTtBQUNBM0gsZ0JBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUF5RyxHQUFBLENBQUEsUUFBQSxFQUFBLEVBQUEsRUFBQXZELFFBQUEsQ0FBQSxrQkFBQTtBQUNBLGVBRkEsRUFFQSxLQUZBLENBQUE7QUFHQTtBQUNBLFdBaEJBLE1BZ0JBO0FBQ0FsRCxZQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBa0QsUUFBQSxDQUFBLGlCQUFBO0FBQ0FsRCxZQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBLE1BQUEsRUFBQTBELElBQUEsQ0FBQSxPQUFBO0FBQ0ExRCxZQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBLE1BQUEsRUFBQTBELElBQUEsQ0FBQWtCLFFBQUEsQ0FBQSxTQUFBLENBQUE7O0FBRUEsZ0JBQUE0QyxlQUFBLEdBQUF4SCxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBLE1BQUEsRUFBQXlILFdBQUEsRUFBQTs7QUFDQXpILFlBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUEwSCxNQUFBLENBQUFGLGVBQUE7QUFFQXhILFlBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUE0QixXQUFBLENBQUEsa0JBQUE7QUFDQTs7QUFFQTJGLFVBQUFBLFdBQUEsR0FBQTNDLFFBQUEsQ0FBQSxRQUFBLENBQUE7QUFDQTtBQUNBLE9BakNBO0FBa0NBLEtBckNBO0FBc0NBLEdBNUNBOztBQThDQTNFLEVBQUFBLENBQUEsQ0FBQXVELE1BQUEsQ0FBQSxDQUFBdUQsRUFBQSxDQUFBLCtCQUFBLEVBQUEsWUFBQTtBQUNBUSxJQUFBQSxXQUFBLEdBQUEsSUFBQTtBQUNBRCxJQUFBQSxTQUFBO0FBQ0EsR0FIQTtBQUlBLENBL0RBLEVBQUEsQyxDQ0xBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBQU0sV0FBQSxHQUFBLFNBQUFBLFdBQUEsR0FBQTtBQUNBN0gsRUFBQUEsV0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLGNBQUEsRUFBQTJELElBQUEsQ0FBQTdDLElBQUEsQ0FBQUosUUFBQSxDQUFBLENBQUEsVUFBQSxDQUFBO0FBQ0FWLEVBQUFBLFdBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxhQUFBLEVBQUEyRCxJQUFBLENBQUE3QyxJQUFBLENBQUFKLFFBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxFQUZBLENBSUE7O0FBQ0EsTUFBQW9ILFFBQUEsR0FBQTVILENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FDQXlHLElBREEsQ0FDQSxNQURBLEVBQ0EsR0FEQSxFQUVBSyxFQUZBLENBRUEsT0FGQSxFQUVBLFVBQUFDLEtBQUEsRUFBQTtBQUNBQSxJQUFBQSxLQUFBLENBQUFDLGNBQUE7QUFDQWhILElBQUFBLENBQUEsQ0FBQSw0QkFBQSxDQUFBLENBQUF5RCxJQUFBLENBQUEsRUFBQTtBQUNBekQsSUFBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBMkIsV0FBQSxDQUFBLGFBQUE7QUFDQUwsSUFBQUEsV0FBQTtBQUNBLEdBUEEsRUFRQW1FLFFBUkEsQ0FRQTNGLFdBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxVQUFBLENBUkEsQ0FBQTtBQVNBRSxFQUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUFpRCxRQUFBLENBQUEsZ0JBQUEsRUFBQVEsSUFBQSxDQUFBLFNBQUEsRUFBQWdDLFFBQUEsQ0FBQW1DLFFBQUE7QUFDQTVILEVBQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQXlELElBQUEsQ0FBQTdDLElBQUEsQ0FBQUosUUFBQSxDQUFBLENBQUEsc0JBQUEsQ0FBQSxFQUFBaUYsUUFBQSxDQUFBbUMsUUFBQTtBQUVBNUgsRUFBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBaUQsUUFBQSxDQUFBLGlCQUFBLEVBQUFpQixNQUFBLENBQUEwRCxRQUFBLEVBQUFuQyxRQUFBLENBQUEzRixXQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBLEVBakJBLENBbUJBOztBQUNBZSxFQUFBQSxRQUFBLENBQUFFLE9BQUEsQ0FBQSxVQUFBQyxPQUFBLEVBQUE7QUFDQSxRQUFBNkcsUUFBQSxHQUFBN0gsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBeUcsSUFBQSxDQUFBLE1BQUEsRUFBQSxNQUFBekYsT0FBQSxDQUFBLElBQUEsQ0FBQSxFQUFBeUYsSUFBQSxDQUFBLGNBQUEsRUFBQXpGLE9BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQTtBQUVBaEIsSUFBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBaUQsUUFBQSxDQUFBLGNBQUEsRUFBQVEsSUFBQSxDQUFBekMsT0FBQSxDQUFBLE1BQUEsQ0FBQSxFQUFBeUUsUUFBQSxDQUFBb0MsUUFBQTtBQUVBLFFBQUFDLE1BQUEsR0FBQTlILENBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQWlELFFBQUEsQ0FBQSxlQUFBLEVBQUF3QyxRQUFBLENBQUFvQyxRQUFBLENBQUE7QUFDQTNHLElBQUFBLEtBQUEsQ0FBQUgsT0FBQSxDQUFBLFVBQUFLLElBQUEsRUFBQTtBQUNBLFVBQUE4RSxLQUFBLEdBQUFsRyxDQUFBLENBQUEsUUFBQSxDQUFBLENBQUF5RixRQUFBLENBQUFxQyxNQUFBLENBQUE7O0FBQ0EsVUFBQTlHLE9BQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQU4sUUFBQSxDQUFBVSxJQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQTtBQUNBLFlBQUEyRyxPQUFBLEdBQUEvSCxDQUFBLENBQUEsU0FBQSxDQUFBLENBQUFpRCxRQUFBLENBQUEsYUFBQSxFQUFBdUQsR0FBQSxDQUFBLE9BQUEsRUFBQXBGLElBQUEsQ0FBQSxPQUFBLENBQUEsRUFBQXFDLElBQUEsQ0FBQXJDLElBQUEsQ0FBQSxJQUFBLENBQUEsRUFBQXFFLFFBQUEsQ0FBQVMsS0FBQSxDQUFBOztBQUVBLFlBQUE5RSxJQUFBLENBQUEsVUFBQSxDQUFBLEVBQUE7QUFDQTJHLFVBQUFBLE9BQUEsQ0FBQXRCLElBQUEsQ0FBQSxVQUFBLEVBQUEsSUFBQSxFQUFBeEQsUUFBQSxDQUFBLGtCQUFBO0FBQ0E7QUFDQTtBQUNBLEtBVEE7O0FBV0EsUUFBQSxDQUFBakMsT0FBQSxDQUFBLFVBQUEsQ0FBQSxFQUFBO0FBQ0E2RyxNQUFBQSxRQUFBLENBQUFmLEVBQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQUMsS0FBQSxFQUFBO0FBQ0FBLFFBQUFBLEtBQUEsQ0FBQUMsY0FBQTtBQUNBbEYsUUFBQUEsY0FBQSxDQUFBZCxPQUFBLENBQUE7QUFDQW5CLFFBQUFBLEtBQUEsQ0FBQThCLFdBQUEsQ0FBQSxhQUFBO0FBQ0EsT0FKQTtBQUtBLEtBTkEsTUFNQTtBQUNBa0csTUFBQUEsUUFBQSxDQUFBNUUsUUFBQSxDQUFBLGtCQUFBO0FBQ0E0RSxNQUFBQSxRQUFBLENBQUFmLEVBQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQUMsS0FBQSxFQUFBO0FBQ0FBLFFBQUFBLEtBQUEsQ0FBQUMsY0FBQTtBQUNBLE9BRkE7QUFHQTs7QUFFQWhILElBQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQWtFLE1BQUEsQ0FBQTJELFFBQUEsRUFBQXBDLFFBQUEsQ0FBQTNGLFdBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxVQUFBLENBQUE7QUFDQSxHQS9CQSxFQXBCQSxDQXFEQTs7QUFDQUEsRUFBQUEsV0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBZ0gsRUFBQSxDQUFBLE9BQUEsRUFBQSxZQUFBO0FBQ0FqSCxJQUFBQSxLQUFBLENBQUFtSSxXQUFBLENBQUEsYUFBQTtBQUNBLEdBRkE7QUFJQWpJLEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQStHLEVBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQTtBQUNBLFFBQUFqSCxLQUFBLENBQUFvSSxRQUFBLENBQUEsYUFBQSxDQUFBLEVBQUE7QUFDQXBJLE1BQUFBLEtBQUEsQ0FBQThCLFdBQUEsQ0FBQSxhQUFBO0FBQ0E7QUFDQSxHQUpBLEVBMURBLENBZ0VBOztBQUNBM0IsRUFBQUEsQ0FBQSxDQUFBdUQsTUFBQSxDQUFBLENBQUF1RCxFQUFBLENBQUEsUUFBQSxFQUFBLFVBQUFDLEtBQUEsRUFBQTtBQUNBLFFBQUFtQixtQkFBQSxHQUFBbEksQ0FBQSxDQUFBdUQsTUFBQSxDQUFBLENBQUE0RSxTQUFBLEVBQUE7O0FBRUEsUUFBQUQsbUJBQUEsSUFBQSxFQUFBLEVBQUE7QUFDQXJJLE1BQUFBLEtBQUEsQ0FBQW9ELFFBQUEsQ0FBQSxlQUFBO0FBQ0EsS0FGQSxNQUVBO0FBQ0FwRCxNQUFBQSxLQUFBLENBQUE4QixXQUFBLENBQUEsZUFBQTtBQUNBO0FBQ0EsR0FSQTtBQVNBLENBMUVBLEMsQ0NKQTtBQUNBO0FBQ0E7OztBQUVBLElBQUF5RyxLQUFBLEdBQUEsWUFBQTtBQUNBLE1BQUFDLFdBQUEsR0FBQSxDQUNBLE1BREEsRUFFQSxPQUZBLEVBR0EsTUFIQSxDQUFBO0FBTUEsTUFBQUMsY0FBQSxHQUFBO0FBQ0EsWUFBQTtBQUNBLGVBQUExSCxJQUFBLENBQUFKLFFBQUEsQ0FBQSxDQUFBLFlBQUEsQ0FEQTtBQUVBLGNBQUE7QUFGQSxLQURBO0FBS0EsYUFBQTtBQUNBLGVBQUFJLElBQUEsQ0FBQUosUUFBQSxDQUFBLENBQUEsYUFBQSxDQURBO0FBRUEsY0FBQTtBQUZBLEtBTEE7QUFTQSxZQUFBO0FBQ0EsZUFBQUksSUFBQSxDQUFBSixRQUFBLENBQUEsQ0FBQSxZQUFBLENBREE7QUFFQSxjQUFBO0FBRkE7QUFUQSxHQUFBOztBQWVBLE1BQUErSCxHQUFBLEdBQUEsU0FBQUEsR0FBQSxDQUFBQyxTQUFBLEVBQUE7QUFBQSxRQUFBQyxTQUFBLHVFQUFBLEVBQUE7QUFDQUMsSUFBQUEsYUFBQSxHQUFBRixTQUFBO0FBRUF4SSxJQUFBQSxDQUFBLENBQUEsdUJBQUEsQ0FBQSxDQUFBeUQsSUFBQSxDQUFBNkUsY0FBQSxDQUFBRSxTQUFBLENBQUEsQ0FBQSxPQUFBLENBQUE7QUFDQXhJLElBQUFBLENBQUEsQ0FBQSxvQkFBQSxDQUFBLENBQUF5RCxJQUFBLENBQUE2RSxjQUFBLENBQUFFLFNBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQTtBQUVBeEksSUFBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBMkIsV0FBQSxDQUFBLGFBQUE4RyxTQUFBLEVBQUF4RixRQUFBLENBQUEsYUFBQXVGLFNBQUEsRUFOQSxDQVFBOztBQUNBLFFBQUFBLFNBQUEsS0FBQSxNQUFBLEVBQUE7QUFDQXRGLE1BQUFBLFlBQUEsQ0FBQXlGLFVBQUEsQ0FBQSxPQUFBO0FBQ0EsS0FGQSxNQUVBO0FBQ0F6RixNQUFBQSxZQUFBLENBQUFFLE9BQUEsQ0FBQSxPQUFBLEVBQUFvRixTQUFBO0FBQ0E7QUFDQSxHQWRBLENBdEJBLENBc0NBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBQUUsYUFBQSxHQUFBeEYsWUFBQSxDQUFBQyxPQUFBLENBQUEsT0FBQSxLQUFBLE1BQUE7O0FBRUEsTUFBQXVGLGFBQUEsRUFBQTtBQUNBSCxJQUFBQSxHQUFBLENBQUFHLGFBQUEsQ0FBQTtBQUNBOztBQUVBMUksRUFBQUEsQ0FBQSxDQUFBLFlBQUE7QUFDQSxRQUFBLENBQUEwSSxhQUFBLEVBQUE7QUFDQTFJLE1BQUFBLENBQUEsQ0FBQSx1QkFBQSxDQUFBLENBQUF5RCxJQUFBLENBQUE3QyxJQUFBLENBQUFKLFFBQUEsQ0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUNBOztBQUVBUixJQUFBQSxDQUFBLENBQUEsa0JBQUEsQ0FBQSxDQUFBOEcsRUFBQSxDQUFBLE9BQUEsRUFBQSxVQUFBQyxLQUFBLEVBQUE7QUFDQUEsTUFBQUEsS0FBQSxDQUFBQyxjQUFBLEdBREEsQ0FHQTs7QUFDQSxVQUFBNEIsY0FBQSxHQUFBUCxXQUFBLENBQUFRLE9BQUEsQ0FBQUgsYUFBQSxDQUFBO0FBQ0EsVUFBQUYsU0FBQSxHQUFBSCxXQUFBLENBQUFPLGNBQUEsR0FBQSxDQUFBLENBQUEsSUFBQVAsV0FBQSxDQUFBLENBQUEsQ0FBQSxDQUxBLENBT0E7O0FBQ0FFLE1BQUFBLEdBQUEsQ0FBQUMsU0FBQSxFQUFBRSxhQUFBLENBQUE7QUFDQSxLQVRBO0FBVUEsR0FmQSxDQUFBO0FBZ0JBLENBL0RBLEVBQUEsQyxDQ0pBO0FBQ0E7QUFDQTs7O0FBRUExSSxDQUFBLENBQUEsWUFBQTtBQUNBSCxFQUFBQSxLQUFBLEdBQUFHLENBQUEsQ0FBQSxNQUFBLENBQUE7QUFFQUYsRUFBQUEsV0FBQSxHQUFBRSxDQUFBLENBQUEsYUFBQSxDQUFBO0FBQ0FGLEVBQUFBLFdBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQUUsQ0FBQSxDQUFBLG9CQUFBLEVBQUFGLFdBQUEsQ0FBQTtBQUNBQSxFQUFBQSxXQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsY0FBQSxJQUFBRSxDQUFBLENBQUEsZUFBQSxFQUFBRixXQUFBLENBQUEsUUFBQSxDQUFBLENBQUE7QUFDQUEsRUFBQUEsV0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLGFBQUEsSUFBQUUsQ0FBQSxDQUFBLGNBQUEsRUFBQUYsV0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLFdBQUEsQ0FBQSxTQUFBLENBQUEsR0FBQUUsQ0FBQSxDQUFBLHFCQUFBLEVBQUFGLFdBQUEsQ0FBQTtBQUNBQSxFQUFBQSxXQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsVUFBQSxJQUFBRSxDQUFBLENBQUEsV0FBQSxFQUFBRixXQUFBLENBQUEsU0FBQSxDQUFBLENBQUE7QUFFQUMsRUFBQUEsTUFBQSxHQUFBQyxDQUFBLENBQUEsUUFBQSxDQUFBO0FBQ0FELEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsR0FBQUMsQ0FBQSxDQUFBLGVBQUEsRUFBQUQsTUFBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLElBQUFDLENBQUEsQ0FBQSxRQUFBLEVBQUFELE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQSxJQUFBQyxDQUFBLENBQUEsUUFBQSxFQUFBRCxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxHQUFBQyxDQUFBLENBQUEsZ0JBQUEsRUFBQUQsTUFBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxTQUFBLElBQUFDLENBQUEsQ0FBQSxVQUFBLEVBQUFELE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsUUFBQSxJQUFBQyxDQUFBLENBQUEsU0FBQSxFQUFBRCxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFlBQUEsSUFBQUMsQ0FBQSxDQUFBLGFBQUEsRUFBQUQsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxTQUFBLElBQUFDLENBQUEsQ0FBQSxVQUFBLEVBQUFELE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLEdBQUFDLENBQUEsQ0FBQSxlQUFBLEVBQUFELE1BQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxJQUFBQyxDQUFBLENBQUEsU0FBQSxFQUFBRCxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFFBQUEsRUFBQSxNQUFBLElBQUFDLENBQUEsQ0FBQSxPQUFBLEVBQUFELE1BQUEsQ0FBQSxR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WUFBQSxFQUFBLENBQ0E7QUFDQSxLQUZBLEVBRUEsVUFBQUMsS0FBQSxFQUFBLENBQ0E7QUFDQSxLQUpBO0FBS0EsR0FSQTtBQVNBLEMsQ0FFQTtBQUNBOzs7QUFDQXZKLENBQUEsQ0FBQSxZQUFBO0FBQ0FELEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxTQUFBLEVBQUEsTUFBQSxFQUFBMEQsSUFBQSxDQUFBLFdBQUE7QUFDQTFELEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxTQUFBLEVBQUEsTUFBQSxFQUFBMEQsSUFBQSxDQUFBN0MsSUFBQSxDQUFBSixRQUFBLENBQUEsQ0FBQSxTQUFBLENBQUE7QUFDQSxDQUhBLENBQUE7O0FBS0EsSUFBQWdKLHNCQUFBLEdBQUEsU0FBQUEsc0JBQUEsR0FBQTtBQUNBLE1BQUFDLFNBQUEsR0FBQWxKLFNBQUEsQ0FBQStELE1BQUE7O0FBRUEsTUFBQW1GLFNBQUEsS0FBQSxJQUFBLEVBQUE7QUFDQTFKLElBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxTQUFBLEVBQUE0QixXQUFBLENBQUEsaUJBQUE7QUFDQSxHQUZBLE1BRUE7QUFDQTVCLElBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxTQUFBLEVBQUFrRCxRQUFBLENBQUEsaUJBQUE7QUFDQTtBQUNBLENBUkE7O0FBVUFNLE1BQUEsQ0FBQTRGLGdCQUFBLENBQUEsUUFBQSxFQUFBSyxzQkFBQTtBQUNBakcsTUFBQSxDQUFBNEYsZ0JBQUEsQ0FBQSxTQUFBLEVBQUFLLHNCQUFBIiwiZmlsZSI6InZsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gYmFzZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5sZXQgY3VlID0gWyBdO1xyXG4vLyBsZXQgJHBhbmVsLCAkc3RhdGlvbiwgJHBlcm1pc3Npb24sICRuZXR3b3JrLCAkc3RhdHVzO1xyXG5sZXQgJGJvZHksICRuYXZpZ2F0aW9uLCAkcGFuZWw7XHJcblxyXG5jdWVbXCJsb2FkLWRvY3VtZW50XCJdID0gJC5EZWZlcnJlZCgpO1xyXG5jdWVbXCJsb2FkLWRlcGFydHVyZXNcIl0gPSAkLkRlZmVycmVkKCk7XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gbG9jYWxpemF0aW9uIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBBanVzdGVzIG5hcyB0cmFkdcOnw7VlcyBkbyBNb21lbnRcclxubW9tZW50LnVwZGF0ZUxvY2FsZShcInB0LWJyXCIsIHtcclxuXHRcInJlbGF0aXZlVGltZVwiOiB7XHJcblx0XHRcInBhc3RcIjogXCIlcyBhdHLDoXNcIlxyXG5cdH1cclxufSk7XHJcblxyXG4vLyBEZWZpbmUgbyBpZGlvbWFcclxuY29uc3QgZGVmYXVsdF9sYW5ndWFnZSA9IFwiZW5cIjtcclxuY29uc3QgYXZhaWxhYmxlX2xhbmd1YWdlcyA9IFtcInB0XCIsIFwiZW5cIiwgXCJlc1wiXTtcclxuY29uc3QgdXNlcl9sYW5ndWFnZSA9IChuYXZpZ2F0b3IubGFuZ3VhZ2UgPyBuYXZpZ2F0b3IubGFuZ3VhZ2Uuc3Vic3RyKDAsIDIpIDogZGVmYXVsdF9sYW5ndWFnZSk7XHJcblxyXG5jb25zdCBsYW5ndWFnZSA9IGF2YWlsYWJsZV9sYW5ndWFnZXMuaW5jbHVkZXModXNlcl9sYW5ndWFnZSkgPyB1c2VyX2xhbmd1YWdlIDogZGVmYXVsdF9sYW5ndWFnZTtcclxuLy8gY29uc3QgbGFuZ3VhZ2UgPSBcInB0XCI7XHJcblxyXG5pZiAobGFuZ3VhZ2UgPT09IFwicHRcIikge1xyXG5cdG1vbWVudC5sb2NhbGUoXCJwdC1iclwiKTtcclxufSBlbHNlIHtcclxuXHRtb21lbnQubG9jYWxlKGxhbmd1YWdlKTtcclxufVxyXG5cclxuLy8gVHJhZHXDp8O1ZXNcclxuY29uc3QgTDEwbiA9IHtcclxuXHRcInB0XCI6IHtcclxuXHRcdFwibmV4dC1kZXBhcnR1cmVzXCI6IFwiUHLDs3hpbW9zIHRyZW5zXCIsXHJcblx0XHRcInJlYWwtdGltZVwiOiBcIlRlbXBvIHJlYWxcIixcclxuXHRcdFwiYXJlLXlvdS1hdFwiOiBcIkVzdMOhIGVtXCIsXHJcblx0XHRcImRpcmVjdGlvblwiOiBcIlNlbnRpZG9cIixcclxuXHRcdFwibm93XCI6IFwiQWdvcmFcIixcclxuXHRcdFwidHJhaW5cIjogXCJUcmVtXCIsXHJcblx0XHRcImxpbmVcIjogXCJMaW5oYVwiLFxyXG5cdFx0XCJ1cGRhdGVkXCI6IFwiQXR1YWxpemFkb1wiLFxyXG5cdFx0XCJvdXQtb2Ytb3BlcmF0aW9uXCI6IFwiRm9yYSBkZSBvcGVyYcOnw6NvXCIsXHJcblx0XHRcIm9wZXJhdGlvbi1ob3Vyc1wiOiBcIk8gVkxUIENhcmlvY2EgY2lyY3VsYTxicj4gdG9kb3Mgb3MgZGlhcyBkYXMgNmggw6AgMGhcIixcclxuXHRcdFwic3RhdGlvbnNcIjogXCJFc3Rhw6fDtWVzXCIsXHJcblx0XHRcImZpbmQtbmVhcmVzdC1zdGF0aW9uXCI6IFwiTG9jYWxpemFyIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXCIsXHJcblx0XHRcImF1dG8tdGhlbWVcIjogXCJUZW1hIGF1dG9tw6F0aWNvXCIsXHJcblx0XHRcImxpZ2h0LXRoZW1lXCI6IFwiVGVtYSBjbGFyb1wiLFxyXG5cdFx0XCJkYXJrLXRoZW1lXCI6IFwiVGVtYSBlc2N1cm9cIixcclxuXHRcdFwib2ZmbGluZVwiOiBcIlNlbSBjb25leMOjb1wiLFxyXG5cdFx0XCJzdGF0dXMtb2tcIjogXCJPcGVyYcOnw6NvIG5vcm1hbFwiLFxyXG5cdH0sXHJcblx0XCJlblwiOiB7XHJcblx0XHRcIm5leHQtZGVwYXJ0dXJlc1wiOiBcIk5leHQgdHJhaW5zXCIsXHJcblx0XHRcInJlYWwtdGltZVwiOiBcIlJlYWwgdGltZVwiLFxyXG5cdFx0XCJhcmUteW91LWF0XCI6IFwiQXJlIHlvdSBhdFwiLFxyXG5cdFx0XCJkaXJlY3Rpb25cIjogXCJEaXJlY3Rpb25cIixcclxuXHRcdFwibm93XCI6IFwiTm93XCIsXHJcblx0XHRcInRyYWluXCI6IFwiVHJhaW5cIixcclxuXHRcdFwibGluZVwiOiBcIkxpbmVcIixcclxuXHRcdFwidXBkYXRlZFwiOiBcIlVwZGF0ZWRcIixcclxuXHRcdFwib3V0LW9mLW9wZXJhdGlvblwiOiBcIlNlcnZpY2UgY2xvc2VkXCIsXHJcblx0XHRcIm9wZXJhdGlvbi1ob3Vyc1wiOiBcIlZMVCBDYXJpb2NhIHJ1bnM8YnI+IGRhaWx5IGZyb20gNmFtIHRvIDEyYW1cIixcclxuXHRcdFwic3RhdGlvbnNcIjogXCJTdGF0aW9uc1wiLFxyXG5cdFx0XCJmaW5kLW5lYXJlc3Qtc3RhdGlvblwiOiBcIkZpbmQgbmVhcmVzdCBzdGF0aW9uXCIsXHJcblx0XHRcImF1dG8tdGhlbWVcIjogXCJBdXRvIHRoZW1lXCIsXHJcblx0XHRcImxpZ2h0LXRoZW1lXCI6IFwiTGlnaHQgdGhlbWVcIixcclxuXHRcdFwiZGFyay10aGVtZVwiOiBcIkRhcmsgdGhlbWVcIixcclxuXHRcdFwib2ZmbGluZVwiOiBcIk9mZmxpbmVcIixcclxuXHRcdFwic3RhdHVzLW9rXCI6IFwiTm9ybWFsIHRyYWZmaWNcIixcclxuXHR9LFxyXG5cdFwiZXNcIjoge1xyXG5cdFx0XCJuZXh0LWRlcGFydHVyZXNcIjogXCJQcsOzeGltb3MgdHJlbmVzXCIsXHJcblx0XHRcInJlYWwtdGltZVwiOiBcIlRpZW1wbyByZWFsXCIsXHJcblx0XHRcImFyZS15b3UtYXRcIjogXCLCv0VzdMOhcyBlblwiLFxyXG5cdFx0XCJkaXJlY3Rpb25cIjogXCJEaXJlY2Npw7NuXCIsXHJcblx0XHRcIm5vd1wiOiBcIkFob3JhXCIsXHJcblx0XHRcInRyYWluXCI6IFwiVHJlblwiLFxyXG5cdFx0XCJsaW5lXCI6IFwiTMOtbmVhXCIsXHJcblx0XHRcInVwZGF0ZWRcIjogXCJBY3R1YWxpemFkb1wiLFxyXG5cdFx0XCJvdXQtb2Ytb3BlcmF0aW9uXCI6IFwiU2VydmljaW8gY2VycmFkb1wiLFxyXG5cdFx0XCJvcGVyYXRpb24taG91cnNcIjogXCJWTFQgQ2FyaW9jYSBmdW5jaW9uYTxicj4gdG9kb3MgbG9zIGTDrWFzIGRlIDA2OjAwIGEgMDA6MDBcIixcclxuXHRcdFwic3RhdGlvbnNcIjogXCJFc3RhY2lvbmVzXCIsXHJcblx0XHRcImZpbmQtbmVhcmVzdC1zdGF0aW9uXCI6IFwiRW5jb250cmFyIGxhIGVzdGFjacOzbiBtw6FzIGNlcmNhbmFcIixcclxuXHRcdFwiYXV0by10aGVtZVwiOiBcIlRlbWEgYXV0b23DoXRpY29cIixcclxuXHRcdFwibGlnaHQtdGhlbWVcIjogXCJUZW1hIGNsYXJvXCIsXHJcblx0XHRcImRhcmstdGhlbWVcIjogXCJUZW1hIG9zY3Vyb1wiLFxyXG5cdFx0XCJvZmZsaW5lXCI6IFwiU2luIGNvbmV4acOzblwiLFxyXG5cdFx0XCJzdGF0dXMtb2tcIjogXCJDaXJjdWxhY2nDs24gbm9ybWFsXCIsXHJcblx0fVxyXG59O1xyXG4iLCJsZXQgc3RhdGlvbnMgPSBbXG5cdHtcblx0XHRcIm5hbWVcIjogXCJBbnRvbmlvIENhcmxvc1wiLFxuXHRcdFwiaWRcIjogXCJhbnRvbmlvLWNhcmxvc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAyLCAzOiAyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkxMTMxNTM0NDM5MTMxOSwgLTQzLjE3MjA1MDk5NzU5ODI0MV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIkNhbWVyaW5vXCIsXG5cdFx0XCJpZFwiOiBcImNhbWVyaW5vXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDM6IDggfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAxNjk4MDQ2MDIyMzgyLCAtNDMuMTgzOTgzNjE0OTMzNDg5XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDYW5kZWzDoXJpYVwiLFxuXHRcdFwiaWRcIjogXCJjYW5kZWxhcmlhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDYsIDM6IDYgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAxNzI1MDI5Mzg0MjU5LCAtNDMuMTc4ODA4NjY1NDE4NjcxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDYXJpb2NhXCIsXG5cdFx0XCJpZFwiOiBcImNhcmlvY2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNCwgMzogNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDc0ODQ1MDcyNTI4MTEsIC00My4xNzY2NDU1MTgwMzg5MTddLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNlbnRyYWxcIixcblx0XHRcImlkXCI6IFwiY2VudHJhbFwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA1LCAzOiAxMCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDI3MDQ5NjA3NDQ5NTIsIC00My4xOTI2MjUzMTQzNzczMzhdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMiwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNpZGFkZSBkbyBTYW1iYVwiLFxuXHRcdFwiaWRcIjogXCJjaWRhZGUtZG8tc2FtYmFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk0MTc5OTU3MTI4MDY3LCAtNDMuMTk2ODg0MDgyMDc4NDc2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDaW5lbMOibmRpYVwiLFxuXHRcdFwiaWRcIjogXCJjaW5lbGFuZGlhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDMsIDM6IDMgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTEwNzM0MDAxODQyMjQzLCAtNDMuMTc1NDI1Mzg3MzY0OTMyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDb2xvbWJvXCIsXG5cdFx0XCJpZFwiOiBcImNvbG9tYm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogMiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDUxNzUyMTkwMDk0MTUsIC00My4xNzgwMTY5NjgyMjg4MThdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNvcmRlaXJvIGRhIEdyYcOnYVwiLFxuXHRcdFwiaWRcIjogXCJjb3JkZWlyby1kYS1ncmFjYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMywgMjogOCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTcxMDQ2Mjk5MjMxMTcsIC00My4yMDQxNzg0MDM1MzM3MDNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcIm5hbWVcIjogXCJDcmlzdGlhbm8gT3R0b25pXCIsXG5cdFx0XCJpZFwiOiBcImNyaXN0aWFuby1vdHRvbmlcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogOSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDMwNjEyNzg0ODA2NDgsIC00My4xOTA3NDkxMDk0MjE0ODldLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMiwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkVxdWFkb3JcIixcblx0XHRcImlkXCI6IFwiZXF1YWRvclwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxOCwgMjogMTEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3ODk0NTY0Njg3NzgyLCAtNDMuMjA0ODA1MDE0NDQwODE1XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJHYW1ib2FcIixcblx0XHRcImlkXCI6IFwiZ2FtYm9hXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE2LCAyOiA2IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5Nzk1OTQwODM3Mjg0NSwgLTQzLjE5OTMzNjY4MzI0NjMwMV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiSGFybW9uaWFcIixcblx0XHRcImlkXCI6IFwiaGFybW9uaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTQgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1NzU0NDM3MjczMzg2LCAtNDMuMTkxNDI3NjM5NTg0NDk2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQYXJhZGEgZG9zIE11c2V1c1wiLFxuXHRcdFwiaWRcIjogXCJwYXJhZGEtZG9zLW11c2V1c1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA4IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NTk0NjU4NjgwMjI2NCwgLTQzLjE4MTk1NTk4MDU4MTI3Ml0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUGFyYWRhIGRvcyBOYXZpb3NcIixcblx0XHRcImlkXCI6IFwicGFyYWRhLWRvcy1uYXZpb3NcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogOSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTQxMzk2MjUzMDM4NzUsIC00My4xODcxODE4MzA2MTc0NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUGVyZWlyYSBSZWlzXCIsXG5cdFx0XCJpZFwiOiBcInBlcmVpcmEtcmVpc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNywgMjogMTAgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk2NjQ3MDY0OTYwNDMsIC00My4yMDE3NzMxMTE1MjM1OTNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlByYcOnYSBYVlwiLFxuXHRcdFwiaWRcIjogXCJwcmFjYS14dlwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAxIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMjA3MDEyODk0NTg0OCwgLTQzLjE3MzExNzM5NTc4Mzg3Nl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJhaWEgRm9ybW9zYVwiLFxuXHRcdFwiaWRcIjogXCJwcmFpYS1mb3Jtb3NhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEwLCAyOiAxMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDMxNzcxNTIzODgwNTcsIC00My4yMDgxNjE5NjQ5MDIzMDNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlByb3ZpZMOqbmNpYVwiLFxuXHRcdFwiaWRcIjogXCJwcm92aWRlbmNpYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTc0ODk5MjIwMTQzODMsIC00My4xOTY3MDE0MDA4OTAwMzVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlJvZG92acOhcmlhXCIsXG5cdFx0XCJpZFwiOiBcInJvZG92aWFyaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTksIDI6IDEyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5ODgwNTU3NDI1MTc5OSwgLTQzLjIwNzM0Mjk0MTQ3NTk4Nl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FhcmFcIixcblx0XHRcImlkXCI6IFwic2FhcmFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDU5MTIxMDg0NjAyNTMsIC00My4xODczMjA3ODIyMjgyMDVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcIm5hbWVcIjogXCJTYW50YSBSaXRhXCIsXG5cdFx0XCJpZFwiOiBcInNhbnRhLXJpdGFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogNyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDA1OTQxNjc0MTA2NDksIC00My4xODE1MDkwNDk4NTQyMDZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlNhbnRvIENyaXN0b1wiLFxuXHRcdFwiaWRcIjogXCJzYW50by1jcmlzdG9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTIsIDI6IDcgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1MzI3MjgyMDAyMTQ2LCAtNDMuMjAwMjU5MTgxNzU1NzRdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlNhbnRvcyBEdW1vbnRcIixcblx0XHRcImlkXCI6IFwic2FudG9zLWR1bW9udFwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxLCAzOiAxIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkxMjI4Njg3NDk2MjQwMSwgLTQzLjE2NzYzMjI1OTU0NTg0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTw6NvIEJlbnRvXCIsXG5cdFx0XCJpZFwiOiBcInNhby1iZW50b1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA3IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5ODY0ODA5NjA1MTAxMiwgLTQzLjE3OTk2NDMxMTc2NDg4NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2V0ZSBkZSBTZXRlbWJyb1wiLFxuXHRcdFwiaWRcIjogXCJzZXRlLWRlLXNldGVtYnJvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDUsIDM6IDUgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTA1MzA1OTAwOTc3ODk3LCAtNDMuMTc3NDYzODE2MzQ2OTIyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJUaXJhZGVudGVzXCIsXG5cdFx0XCJpZFwiOiBcInRpcmFkZW50ZXNcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDY1NzgyMjIwMjYxMTYsIC00My4xODI4NTQyMzY1NTc4MDJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlV0b3BpYSBBcXVhUmlvXCIsXG5cdFx0XCJpZFwiOiBcInV0b3BpYS1hcXVhcmlvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEwIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5MzA5NTQ3MTk5OTYxMiwgLTQzLjE5MDIzNjkwNzIxMzIxOV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiVmlsYSBPbMOtbXBpY2FcIixcblx0XHRcImlkXCI6IFwidmlsYS1vbGltcGljYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5OTA1NjU3MjY0NjUzMywgLTQzLjE5OTY0MzUyOTQ5NTI5N10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9XG5dO1xuXG5sZXQgc3RhdGlvbl9pbmRleCA9IHsgfTtcbnN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcblx0bGV0IHN0YXRpb25fbmFtZSA9IHN0YXRpb25bXCJuYW1lXCJdO1xuXHRzdGF0aW9uX2luZGV4W3N0YXRpb25fbmFtZV0gPSBzdGF0aW9uO1xufSk7XG4iLCJsZXQgbGluZXMgPSBbXG5cdHtcblx0XHRcImlkXCI6IDEsXG5cdFx0XCJuYW1lXCI6IFwiTGluaGEgMVwiLFxuXHRcdFwiY29sb3JcIjogXCIjNjhiOWZiXCIsXG5cdFx0Ly8gXCJkaXJlY3Rpb25zXCI6IFtcblx0XHQvLyBcdFwiU2FudG9zIER1bW9udFwiLFxuXHRcdC8vIFx0XCJQcmFpYSBGb3Jtb3NhXCJcblx0XHQvLyBdXG5cdH0sXG5cdHtcblx0XHRcImlkXCI6IDIsXG5cdFx0XCJuYW1lXCI6IFwiTGluaGEgMlwiLFxuXHRcdFwiY29sb3JcIjogXCIjNzNjYTNmXCIsXG5cdFx0Ly8gXCJkaXJlY3Rpb25zXCI6IFtcblx0XHQvLyBcdFwiUHJhw6dhIFhWXCIsXG5cdFx0Ly8gXHRcIlByYWlhIEZvcm1vc2FcIlxuXHRcdC8vIF1cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcImlkXCI6IDMsXG5cdFx0XCJuYW1lXCI6IFwiTGluaGEgM1wiLFxuXHRcdFwiY29sb3JcIjogXCIjZjNhMjMwXCIsXG5cdFx0Ly8gXCJkaXJlY3Rpb25zXCI6IFtcblx0XHQvLyBcdFwiU2FudG9zIER1bW9udFwiLFxuXHRcdC8vIFx0XCJDZW50cmFsXCJcblx0XHQvLyBdXG5cdH1cbl07XG5cbmxldCBsaW5lX2luZGV4ID0geyB9O1xubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuXHRsZXQgbGluZV9uYW1lID0gbGluZVtcIm5hbWVcIl07XG5cdGxpbmVfaW5kZXhbbGluZV9uYW1lXSA9IGxpbmU7XG59KTtcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIGdldCBsb2NhdGlvbiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gUGVnYSBhIGxvY2FsaXphw6fDo28gZG8gdXN1w6FyaW9cbmNvbnN0IGdldExvY2F0aW9uID0gKGlzX2luaXRpYWwgPSBmYWxzZSkgPT4ge1xuXHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuXG5cdFx0Ly8gU2UgdmllciBkbyBtb2RvIGluaWNpYWwsIGVuY2VycmEgZWxlXG5cdFx0aWYgKGlzX2luaXRpYWwpIHtcblx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWluaXRpYWxcIik7XG5cdFx0XHQkcGFuZWwucmVtb3ZlQ2xhc3MoXCItc3RhdGUtLXBlcm1pc3Npb25cIik7XG5cdFx0fVxuXG5cdFx0Ly8gRGVzY29icmUgYSBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYSBlIHByb2N1cmEgYXMgcHLDs3hpbWFzIHBhcnRpZGFzXG5cdFx0bGV0IG5lYXJlc3Rfc3RhdGlvbiA9IG5lYXJlc3RTdGF0aW9uKFtwb3NpdGlvbltcImNvb3Jkc1wiXVtcImxhdGl0dWRlXCJdLCBwb3NpdGlvbltcImNvb3Jkc1wiXVtcImxvbmdpdHVkZVwiXV0pO1xuXHRcdG5leHREZXBhcnR1cmVzKG5lYXJlc3Rfc3RhdGlvbiwgdHJ1ZSk7XG5cdH0pO1xufTtcbiIsIi8vIEVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXG5jb25zdCBkZWcycmFkID0gKGRlZykgPT4ge1xuXHRyZXR1cm4gZGVnICogKE1hdGguUEkgLyAxODApO1xufTtcblxuY29uc3QgbmVhcmVzdFN0YXRpb24gPSAodXNlcl9jb29yZGluYXRlcykgPT4ge1xuXHRjb25zdCB1c2VyX2xhdGl0dWRlID0gZGVnMnJhZCh1c2VyX2Nvb3JkaW5hdGVzWzBdKTtcblx0Y29uc3QgdXNlcl9sb25naXR1ZGUgPSBkZWcycmFkKHVzZXJfY29vcmRpbmF0ZXNbMV0pO1xuXG5cdGNvbnN0IFIgPSA2MzcxO1xuXG5cdGxldCBzaG9ydGVzdF9kaXN0YW5jZSA9IG51bGw7XG5cdGxldCBuZWFyZXN0X3N0YXRpb24gPSBudWxsO1xuXG5cdHN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcblx0XHRpZiAoIXN0YXRpb25bXCJkaXNhYmxlZFwiXSkge1xuXHRcdFx0Y29uc3Qgc3RhdGlvbl9sYXRpdHVkZSA9IGRlZzJyYWQoc3RhdGlvbltcImNvb3JkaW5hdGVzXCJdWzBdKTtcblx0XHRcdGNvbnN0IHN0YXRpb25fbG9uZ2l0dWRlID0gZGVnMnJhZChzdGF0aW9uW1wiY29vcmRpbmF0ZXNcIl1bMV0pO1xuXG5cdFx0XHRjb25zdCB4ID0gKHN0YXRpb25fbG9uZ2l0dWRlIC0gdXNlcl9sb25naXR1ZGUpICogTWF0aC5jb3MoKHVzZXJfbGF0aXR1ZGUgKyBzdGF0aW9uX2xhdGl0dWRlKSAvIDIpO1xuXHRcdFx0Y29uc3QgeSA9IChzdGF0aW9uX2xhdGl0dWRlIC0gdXNlcl9sYXRpdHVkZSk7XG5cdFx0XHRjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KSAqIFI7XG5cblx0XHRcdGlmICghc2hvcnRlc3RfZGlzdGFuY2UgfHwgZGlzdGFuY2UgPCBzaG9ydGVzdF9kaXN0YW5jZSkge1xuXHRcdFx0XHRzaG9ydGVzdF9kaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRuZWFyZXN0X3N0YXRpb24gPSBzdGF0aW9uO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIG5lYXJlc3Rfc3RhdGlvbjtcbn07XG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBuZXh0IGRlcGFydHVyZXMgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIFByw7N4aW1hcyBwYXJ0aWRhc1xuY29uc3QgbmV4dERlcGFydHVyZXMgPSAoc3RhdGlvbiwgZnJvbV9ncHMgPSBmYWxzZSkgPT4ge1xuXHRsZXQgZGVwYXJ0dXJlcztcblxuXHQvLyBTZSBuw6NvIGZvciBwYXNzYWRhIGEgZXN0YcOnw6NvLCBhYnJlIGxpc3RhIGRlIGVzdGHDp8O1ZXNcblx0aWYgKCFzdGF0aW9uKSB7XG5cdFx0JGJvZHkuYWRkQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRzdGF0aW9uID0gc3RhdGlvbl9pbmRleFtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhc3Qtc3RhdGlvblwiKSB8fCBcIkNlbnRyYWxcIl07XG5cdH1cblxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxhc3Qtc3RhdGlvblwiLCBzdGF0aW9uW1wibmFtZVwiXSk7XG5cblx0Y29uc3Qgc3RhdGVfY2xhc3NlcyA9IFtcblx0XHRcIi1zdGF0ZS0tc3RhdGlvblwiLFxuXHRcdFwiLXN0YXRlLS1sb2FkaW5nXCIsXG5cdFx0XCItc3RhdGUtLWNsb3NlZFwiLFxuXHRcdFwiLXN0YXRlLS1wZXJtaXNzaW9uXCJcblx0XTtcblxuXHQvLyBEZXNsaWdhIGludGVydmFsb3MgZSBldmVudG9zIGV4aXN0ZW50ZXNcblx0Y2xlYXJJbnRlcnZhbChjdWVbXCJpbnRlcnZhbC1kZXBhcnR1cmVzXCJdKTtcblx0Y2xlYXJJbnRlcnZhbChjdWVbXCJpbnRlcnZhbC1sYXN0LXVwZGF0ZWRcIl0pO1xuXHQkKHdpbmRvdykub2ZmKFwidmlzaWJpbGl0eWNoYW5nZS5kZXBhcnR1cmVzIG9ubGluZS5kZXBhcnR1cmVzXCIpO1xuXG5cdC8vIE1vc3RyYSBhbmltYcOnw6NvIGRlIGxvYWRcblx0JHBhbmVsLnJlbW92ZUNsYXNzKHN0YXRlX2NsYXNzZXMpLmFkZENsYXNzKFwiLXN0YXRlLS1sb2FkaW5nXCIpO1xuXG5cdC8vIENvbG9jYSBvIG5vbWUgZGEgZXN0YcOnw6NvIG5vIGFwcGJhclxuXHQkbmF2aWdhdGlvbltcImhlYWRlclwiXVtcInN0YXRpb24tbmFtZVwiXS50ZXh0KHN0YXRpb25bXCJuYW1lXCJdKTtcblx0JHBhbmVsW1wiaGVhZGVyXCJdW1widGl0bGVcIl0uZW1wdHkoKTtcblxuXHQvLyBEZWl4YSBhIGVzdGHDp8OjbyBzZWxlY2lvbmFkYSBuYSBsaXN0YVxuXHQkbmF2aWdhdGlvbltcImNvbnRlbnRcIl1bXCJzdGF0aW9uc1wiXS5maW5kKFwiYVwiKS5yZW1vdmVDbGFzcyhcIi1zdGF0ZS0tc2VsZWN0ZWRcIik7XG5cdCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXVtcInN0YXRpb25zXCJdLmZpbmQoXCJhW2RhdGEtc3RhdGlvbj0nXCIgKyBzdGF0aW9uW1wibmFtZVwiXSArIFwiJ11cIikuYWRkQ2xhc3MoXCItc3RhdGUtLXNlbGVjdGVkXCIpO1xuXG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdC8vIEF0dWFsaXphw6fDo29cblx0Y29uc3QgbGFzdFVwZGF0ZWQgPSAoKSA9PiB7XG5cdFx0bGV0ICRiYWRnZSA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdHVzLWJhZGdlXCIpO1xuXG5cdFx0Ly8gVGVtcG8gZW0gc2VndW5kb3MgZGVzZGUgYSDDumx0aW1hIGF0dWFsaXphw6fDo29cblx0XHRsZXQgc2Vjb25kc19zaW5jZV91cGRhdGUgPSBtb21lbnQoKS5kaWZmKGRlcGFydHVyZXNbXCJsYXN0VXBkYXRlZFwiXSwgXCJzZWNvbmRzXCIpO1xuXG5cdFx0Ly8gU2UgdGl2ZXIgc2lkbyBhdHVhbGl6YWRvIGjDoSBtZW5vcyBkZSA2MCBzZWd1bmRvcywgbW9zdHJhIFRlbXBvIFJlYWxcblx0XHRpZiAoc2Vjb25kc19zaW5jZV91cGRhdGUgPD0gNjApIHtcblx0XHRcdCRiYWRnZS5hZGRDbGFzcyhcIi1zdGF0ZS0tcmVhbC10aW1lXCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJyZWFsLXRpbWVcIl0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgbGFzdF91cGRhdGVkID0gTDEwbltsYW5ndWFnZV1bXCJ1cGRhdGVkXCJdICsgXCIgXCIgKyBtb21lbnQoZGVwYXJ0dXJlc1tcImxhc3RVcGRhdGVkXCJdKS5mcm9tTm93KCk7XG5cdFx0XHQkYmFkZ2UudGV4dChsYXN0X3VwZGF0ZWQpO1xuXHRcdH1cblxuXHRcdCRwYW5lbFtcImhlYWRlclwiXVtcImJhZGdlXCJdLmVtcHR5KCkuYXBwZW5kKCRiYWRnZSk7XG5cdH07XG5cblxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0Ly8gQ29uc3VsdGEgZG9zIGRhZG9zXG5cdGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG5cdFx0Ly8gU8OzIGNhcnJlZ2Egc2UgZXN0aXZlciBlbSBmb2NvIGUgb25saW5lXG5cdFx0aWYgKGRvY3VtZW50LmhpZGRlbiA9PT0gdHJ1ZSB8fCBuYXZpZ2F0b3Iub25MaW5lID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIENhcnJlZ2Egb3MgZGFkb3Ncblx0XHQkLmdldEpTT04oZW5kcG9pbnRzW1wiZGVwYXJ0dXJlc1wiXSwge1xuXHRcdFx0XCJzdGF0aW9uXCI6IHN0YXRpb25bXCJpZFwiXSxcblx0XHRcdFwiZW52XCI6IGVudlxuXHRcdH0pLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRkZXBhcnR1cmVzID0gcmVzcG9uc2U7XG5cblx0XHRcdGxldCBldGFfY291bnQgPSAwO1xuXHRcdFx0bGV0IGRpcmVjdGlvbnMgPSBbIF07XG5cdFx0XHRsZXQgZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb24gPSB7IH07XG5cblx0XHRcdC8vIE9yZ2FuaXphIGFzIHBhcnRpZGFzIHBvciBkZXN0aW5vXG5cdFx0XHRkZXBhcnR1cmVzW1wibGluZXNcIl0uZm9yRWFjaCgobGluZSkgPT4ge1xuXHRcdFx0XHRsaW5lW1wiZGlyZWN0aW9uc1wiXS5mb3JFYWNoKChkaXJlY3Rpb24pID0+IHtcblx0XHRcdFx0XHRsZXQgZGlyZWN0aW9uX3RpdGxlID0gZGlyZWN0aW9uW1wibmFtZVwiXTtcblx0XHRcdFx0XHRldGFfY291bnQgKz0gZGlyZWN0aW9uW1wiZXRhc1wiXS5sZW5ndGg7XG5cblx0XHRcdFx0XHRpZiAoZGlyZWN0aW9uW1wiZXRhc1wiXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWRpcmVjdGlvbnMuaW5jbHVkZXMoZGlyZWN0aW9uX3RpdGxlKSkge1xuXHRcdFx0XHRcdFx0XHRkaXJlY3Rpb25zLnB1c2goZGlyZWN0aW9uX3RpdGxlKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKCFkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbltkaXJlY3Rpb25fdGl0bGVdKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0gPSBbIF07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGRpcmVjdGlvbltcImV0YXNcIl0uZm9yRWFjaCgodHJhaW4pID0+IHtcblx0XHRcdFx0XHRcdFx0dHJhaW5bXCJsaW5lXCJdID0gbGluZVtcIm5hbWVcIl07XG5cdFx0XHRcdFx0XHRcdGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0ucHVzaCh0cmFpbik7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIFNlIG7Dum1lcm8gZGUgcHLDs3hpbWFzIHBhcnRpZGFzIGZvciB6ZXJvLFxuXHRcdFx0Ly8gY29uZmVyZSBzZSBhaW5kYSBlc3TDoSBkZW50cm8gZG8gaG9yw6FyaW8gZGUgZnVuY2lvbmFtZW50b1xuXHRcdFx0aWYgKGV0YV9jb3VudCA9PT0gMCAmJiBlbnYgPT09IFwicHJvZHVjdGlvblwiKSB7XG5cdFx0XHRcdGxldCBub3cgPSBtb21lbnQoKTtcblx0XHRcdFx0bGV0IG9wZXJhdGlvbl9zdGFydF90aW1lID0gbW9tZW50KFwiMDY6MDBcIiwgXCJISDptbVwiKTtcblx0XHRcdFx0bGV0IG9wZXJhdGlvbl9lbmRfdGltZSA9IG1vbWVudChcIjAwOjAwXCIsIFwiSEg6bW1cIik7XG5cblx0XHRcdFx0aWYgKG5vdy5pc0FmdGVyKG9wZXJhdGlvbl9lbmRfdGltZSkgJiYgbm93LmlzQmVmb3JlKG9wZXJhdGlvbl9zdGFydF90aW1lKSkge1xuXHRcdFx0XHRcdCRwYW5lbFtcImhlYWRlclwiXVtcInRpdGxlXCJdLnRleHQoTDEwbltsYW5ndWFnZV1bXCJvdXQtb2Ytb3BlcmF0aW9uXCJdKTtcblxuXHRcdFx0XHRcdCRwYW5lbFtcImNvbnRlbnRcIl1bXCJjbG9zZWRcIl0uZW1wdHkoKTtcblx0XHRcdFx0XHQkKFwiPGgxIC8+XCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJvdXQtb2Ytb3BlcmF0aW9uXCJdKS5hcHBlbmRUbygkcGFuZWxbXCJjb250ZW50XCJdW1wiY2xvc2VkXCJdKTtcblx0XHRcdFx0XHQkKFwiPHAgLz5cIikuaHRtbChMMTBuW2xhbmd1YWdlXVtcIm9wZXJhdGlvbi1ob3Vyc1wiXSkuYXBwZW5kVG8oJHBhbmVsW1wiY29udGVudFwiXVtcImNsb3NlZFwiXSk7XG5cdFx0XHRcdFx0JChcIjxpIC8+XCIpLmFkZENsYXNzKFwibWF0ZXJpYWwtaWNvbnNcIikudGV4dChcImFjY2Vzc190aW1lXCIpLmFwcGVuZFRvKCRwYW5lbFtcImNvbnRlbnRcIl1bXCJjbG9zZWRcIl0pO1xuXHRcdFx0XHRcdCRwYW5lbC5yZW1vdmVDbGFzcyhzdGF0ZV9jbGFzc2VzKS5hZGRDbGFzcyhcIi1zdGF0ZS0tY2xvc2VkXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkcGFuZWxbXCJoZWFkZXJcIl1bXCJ0aXRsZVwiXS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wibmV4dC1kZXBhcnR1cmVzXCJdKTtcblxuXHRcdFx0XHQvLyBNb250YSBhcyBwYXJ0aWRhc1xuXHRcdFx0XHRsZXQgJGRlcGFydHVyZXMgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImRlcGFydHVyZXNcIik7XG5cblx0XHRcdFx0ZGlyZWN0aW9ucy5mb3JFYWNoKChkaXJlY3Rpb24pID0+IHtcblx0XHRcdFx0XHRsZXQgJGRpcmVjdGlvbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGlyZWN0aW9uXCIpLmFwcGVuZFRvKCRkZXBhcnR1cmVzKTtcblx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImRpcmVjdGlvbi1jYXB0aW9uXCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJkaXJlY3Rpb25cIl0pLmFwcGVuZFRvKCRkaXJlY3Rpb24pO1xuXG5cdFx0XHRcdFx0bGV0IGV0YXMgPSBkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbltkaXJlY3Rpb25dO1xuXHRcdFx0XHRcdGV0YXMuc29ydCgoYSwgYikgPT4geyByZXR1cm4gYVtcInNlY29uZHNcIl0gLSBiW1wic2Vjb25kc1wiXSB9KTtcblxuXHRcdFx0XHRcdGV0YXMuZm9yRWFjaCgodHJhaW4pID0+IHtcblx0XHRcdFx0XHRcdGxldCAkdHJhaW4gPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInRyYWluXCIpLmFwcGVuZFRvKCRkaXJlY3Rpb24pO1xuXHRcdFx0XHRcdFx0bGV0ICRsaW5lID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpbi1saW5lXCIpLmFwcGVuZFRvKCR0cmFpbik7XG5cdFx0XHRcdFx0XHRsZXQgaXNfYXBwcm9hY2hpbmcgPSB0cmFpbltcInNlY29uZHNcIl0gPCAzMDtcblxuXHRcdFx0XHRcdFx0bGV0IGxpbmUgPSBsaW5lX2luZGV4W3RyYWluW1wibGluZVwiXV07XG5cdFx0XHRcdFx0XHRsZXQgZGVwYXJ0dXJlX2NvdW50ZG93biA9IChpc19hcHByb2FjaGluZz8gTDEwbltsYW5ndWFnZV1bXCJub3dcIl0gOiBNYXRoLnJvdW5kKHRyYWluW1wic2Vjb25kc1wiXSAvIDYwKSArIFwiPHNwYW4+bWluPC9zcGFuPlwiKTtcblx0XHRcdFx0XHRcdGxldCBkZXBhcnR1cmVfdGltZSA9IG1vbWVudCh0cmFpbltcImFycml2YWxUaW1lXCJdKS5mb3JtYXQoXCJISDptbVwiKTtcblxuXHRcdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJsaW5lLXNoaWVsZFwiKS5jc3MoXCJjb2xvclwiLCBsaW5lW1wiY29sb3JcIl0pLmF0dHIoXCJ0aXRsZVwiLCBMMTBuW2xhbmd1YWdlXVtcImxpbmVcIl0gKyBcIiBcIiArIGxpbmVbXCJpZFwiXSkuYXR0cihcImRpc2FibGVkXCIsIHRydWUpLnRleHQobGluZVtcImlkXCJdKS5hcHBlbmRUbygkbGluZSk7XG5cdFx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInRyYWluLWRpcmVjdGlvblwiKS5hdHRyKFwidGl0bGVcIiwgTDEwbltsYW5ndWFnZV1bXCJ0cmFpblwiXSArIFwiIFwiICsgdHJhaW5bXCJ0cmFpblwiXSkudGV4dChkaXJlY3Rpb24pLmFwcGVuZFRvKCR0cmFpbik7XG5cdFx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInRyYWluLWV0YVwiKS5hdHRyKFwidGl0bGVcIiwgZGVwYXJ0dXJlX3RpbWUpLmh0bWwoZGVwYXJ0dXJlX2NvdW50ZG93bikuYXBwZW5kVG8oJHRyYWluKTtcblxuXHRcdFx0XHRcdFx0aWYgKGlzX2FwcHJvYWNoaW5nKSB7XG5cdFx0XHRcdFx0XHRcdCR0cmFpbi5hZGRDbGFzcyhcIi1zdGF0ZS0tYXBwcm9hY2hpbmdcIik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGxhc3RVcGRhdGVkKCk7XG5cblx0XHRcdFx0Ly8gTGltcGEgbyBwYWluZWwgZSBpbnNlcmUgb3Mgbm92b3MgZGFkb3Ncblx0XHRcdFx0JHBhbmVsLnJlbW92ZUNsYXNzKHN0YXRlX2NsYXNzZXMpLmFkZENsYXNzKFwiLXN0YXRlLS1zdGF0aW9uXCIpO1xuXHRcdFx0XHQkcGFuZWxbXCJjb250ZW50XCJdW1wic3RhdGlvblwiXS5lbXB0eSgpLmFwcGVuZCgkZGVwYXJ0dXJlcyk7XG5cblx0XHRcdFx0Ly8gQXMgcGFyYWRhcyBTZXRlIGRlIFNldGVtYnJvIGUgQ29sb21ibyBzw6NvIG11aXRvIHByw7N4aW1hcywgZW50w6NvIMOpIGNvbXVtIHF1ZSBhIGxvY2FsaXphw6fDo29cblx0XHRcdFx0Ly8gZG8gR1BTIGRvIHVzdcOhcmlvIGxldmUgw6AgZXN0YcOnw6NvIGVycmFkYS4gUG9yIGlzc28sIG5lc3NhcyBwYXJhZGFzLCDDqSBtb3N0cmFkbyB1bSBib3TDo28gcGFyYVxuXHRcdFx0XHQvLyBmYWNpbGl0YXIgYSB0cm9jYSBkZSBwYXJhZGEuIE8gYm90w6NvIHPDsyDDqSBleGliaWRvIHF1YW5kbyBvIHVzdcOhcmlvIHZlbSBkYSBsb2NhbGl6YcOnw6NvXG5cdFx0XHRcdC8vIGF1dG9tw6F0aWNhIChuw6NvIG1vc3RyYSBzZSBwYXJhZGEgZm9pIGVzY29saGlkYSBubyBtZW51KVxuXHRcdFx0XHRpZiAoZnJvbV9ncHMgPT09IHRydWUgJiYgW1wic2V0ZS1kZS1zZXRlbWJyb1wiLCBcImNvbG9tYm9cIl0uaW5jbHVkZXMoc3RhdGlvbltcImlkXCJdKSkge1xuXHRcdFx0XHRcdGxldCBvcmlnaW5fYW5kX2Rlc3RpbmF0aW9uID0ge1xuXHRcdFx0XHRcdFx0XCJzZXRlLWRlLXNldGVtYnJvXCI6IHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiQ29sb21ib1wiLFxuXHRcdFx0XHRcdFx0XHRcImlkXCI6IFwiY29sb21ib1wiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XCJjb2xvbWJvXCI6IHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiU2V0ZSBkZSBTZXRlbWJyb1wiLFxuXHRcdFx0XHRcdFx0XHRcImlkXCI6IFwic2V0ZS1kZS1zZXRlbWJyb1wiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdGxldCBkZXN0aW5hdGlvbiA9IG9yaWdpbl9hbmRfZGVzdGluYXRpb25bc3RhdGlvbltcImlkXCJdXTtcblxuXHRcdFx0XHRcdGxldCAkc3VnZ2VzdGlvbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3VnZ2VzdGlvblwiKTtcblx0XHRcdFx0XHRsZXQgJGJ1dHRvbiA9ICQoXCI8YSAvPlwiKS5hZGRDbGFzcyhcImJ1dHRvblwiKS5hdHRyKFwiaHJlZlwiLCBcIiNcIikuYXBwZW5kVG8oJHN1Z2dlc3Rpb24pO1xuXHRcdFx0XHRcdCQoXCI8aSAvPlwiKS5hZGRDbGFzcyhcIm1hdGVyaWFsLWljb25zXCIpLnRleHQoXCJuZWFyX21lXCIpLmFwcGVuZFRvKCRidXR0b24pO1xuXHRcdFx0XHRcdCQoXCI8c3BhbiAvPlwiKS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wiYXJlLXlvdS1hdFwiXSkuYXBwZW5kVG8oJGJ1dHRvbik7XG5cdFx0XHRcdFx0JChcIjxzdHJvbmcgLz5cIikudGV4dChkZXN0aW5hdGlvbltcIm5hbWVcIl0gKyBcIj9cIikuYXBwZW5kVG8oJGJ1dHRvbik7XG5cblx0XHRcdFx0XHQkYnV0dG9uLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0bmV4dERlcGFydHVyZXMoZGVzdGluYXRpb24pO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0JHBhbmVsW1wiY29udGVudFwiXVtcInN0YXRpb25cIl0uYXBwZW5kKCRzdWdnZXN0aW9uKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjdWVbXCJsb2FkLWRlcGFydHVyZXNcIl0ucmVzb2x2ZSgpO1xuXHRcdH0pO1xuXHR9O1xuXG5cblx0Ly8gQXR1YWxpemHDp8Ojb1xuXHRjb25zdCB1cGRhdGVXaW5kb3cgPSAoKSA9PiB7XG5cdFx0aWYgKGRvY3VtZW50LmhpZGRlbiA9PT0gZmFsc2UgJiYgbmF2aWdhdG9yLm9uTGluZSA9PT0gdHJ1ZSkge1xuXHRcdFx0bGFzdFVwZGF0ZWQoKTtcblx0XHRcdGdldERhdGEoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gQ3JpYSBub3ZvcyBpbnRlcnZhbG9zIGUgZXZlbnRvc1xuXHQkKHdpbmRvdykub24oXCJvbmxpbmUuZGVwYXJ0dXJlcyB2aXNpYmlsaXR5Y2hhbmdlLmRlcGFydHVyZXNcIiwgdXBkYXRlV2luZG93KTtcblx0Y3VlW1wiaW50ZXJ2YWwtZGVwYXJ0dXJlc1wiXSA9IHNldEludGVydmFsKGdldERhdGEsIDE1MDAwKTtcblx0Y3VlW1wiaW50ZXJ2YWwtbGFzdC11cGRhdGVkXCJdID0gc2V0SW50ZXJ2YWwobGFzdFVwZGF0ZWQsIDUwMDApO1xuXG5cdGdldERhdGEoKTtcbn07XG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIHN5c3RlbSBzdGF0dXMgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gUGVnYSBvIGVzdGFkbyBkbyBzaXN0ZW1hXHJcbmNvbnN0IHN5c3RlbVN0YXR1cyA9ICgoKSA9PiB7XHJcbiAgICBjdWVbXCJsb2FkLWRvY3VtZW50XCJdLmRvbmUoKCkgPT4ge1xyXG4gICAgICAgIGN1ZVtcImludGVydmFsLXN5c3RlbS1zdGF0dXNcIl0gPSBzZXRJbnRlcnZhbChnZXRTdGF0dXMsIDYwICogMTAwMCk7XHJcbiAgICAgICAgZ2V0U3RhdHVzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgbGFzdF9zdGF0dXM7XHJcblxyXG4gICAgY29uc3Qgc3RhdGVfY2xhc3NlcyA9IFtcclxuICAgICAgICBcIi1zdGF0ZS0tb2tcIixcclxuICAgICAgICBcIi1zdGF0ZS0td2FybmluZ1wiXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICAvLyBTw7MgY2FycmVnYSBzZSBlc3RpdmVyIGVtIGZvY28gZSBvbmxpbmVcclxuICAgICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuID09PSB0cnVlIHx8IG5hdmlnYXRvci5vbkxpbmUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG5cdFx0JC5nZXRKU09OKGVuZHBvaW50c1tcInN0YXR1c1wiXSwge1xyXG4gICAgICAgICAgICBcImVudlwiOiBlbnZcclxuICAgICAgICB9KS5kb25lKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjdWVbXCJsb2FkLWRlcGFydHVyZXNcIl0uZG9uZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0ucmVtb3ZlQ2xhc3Moc3RhdGVfY2xhc3Nlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW1wic3RhdHVzXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW1wic3RhdHVzXCJdID09PSBcIk5vcm1hbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5hZGRDbGFzcyhcIi1zdGF0ZS0tb2tcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdF9zdGF0dXMgIT09IFwiTm9ybWFsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXVtcImljb25cIl0udGV4dChcImNoZWNrX2NpcmNsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXVtcInRleHRcIl0udGV4dChMMTBuW2xhbmd1YWdlXVtcInN0YXR1cy1va1wiXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VfaGVpZ2h0ID0gJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1widGV4dFwiXS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdLmhlaWdodChtZXNzYWdlX2hlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWNvbGxhcHNlZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0uY3NzKFwiaGVpZ2h0XCIsIFwiXCIpLmFkZENsYXNzKFwiLW1vZGUtLWNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5hZGRDbGFzcyhcIi1zdGF0ZS0td2FybmluZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1wiaWNvblwiXS50ZXh0KFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXVtcInRleHRcIl0udGV4dChyZXNwb25zZVtcIm1lc3NhZ2VcIl0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VfaGVpZ2h0ID0gJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1widGV4dFwiXS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0uaGVpZ2h0KG1lc3NhZ2VfaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1jb2xsYXBzZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsYXN0X3N0YXR1cyA9IHJlc3BvbnNlW1wic3RhdHVzXCJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKFwidmlzaWJpbGl0eWNoYW5nZS5zeXN0ZW1TdGF0dXNcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxhc3Rfc3RhdHVzID0gbnVsbDtcclxuICAgICAgICBnZXRTdGF0dXMoKTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBzdGF0aW9uIGxpc3QgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmNvbnN0IHN0YXRpb25MaXN0ID0gKCkgPT4ge1xuXHQkbmF2aWdhdGlvbltcImhlYWRlclwiXVtcInN0YXRpb24tbmFtZVwiXS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wic3RhdGlvbnNcIl0pO1xuXHQkbmF2aWdhdGlvbltcImhlYWRlclwiXVtcInBsYWNlaG9sZGVyXCJdLnRleHQoTDEwbltsYW5ndWFnZV1bXCJzdGF0aW9uc1wiXSk7XG5cblx0Ly8gQm90w6NvIHBhcmEgbG9jYWxpemFyIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXG5cdGxldCAkbmVhcmVzdCA9ICQoXCI8YSAvPlwiKVxuXHRcdC5hdHRyKFwiaHJlZlwiLCBcIiNcIilcblx0XHQub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHQkKFwiLnN0YXRpb25zIGgxIC5zdGF0aW9uLW5hbWVcIikudGV4dChcIlwiKTtcblx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdFx0XHRnZXRMb2NhdGlvbigpO1xuXHRcdH0pXG5cdFx0LmFwcGVuZFRvKCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXVtcInN0YXRpb25zXCJdKTtcblx0JChcIjxpIC8+XCIpLmFkZENsYXNzKFwibWF0ZXJpYWwtaWNvbnNcIikudGV4dChcIm5lYXJfbWVcIikuYXBwZW5kVG8oJG5lYXJlc3QpO1xuXHQkKFwiPHNwYW4gLz5cIikudGV4dChMMTBuW2xhbmd1YWdlXVtcImZpbmQtbmVhcmVzdC1zdGF0aW9uXCJdKS5hcHBlbmRUbygkbmVhcmVzdCk7XG5cblx0JChcIjxsaSAvPlwiKS5hZGRDbGFzcyhcIm5lYXJlc3Qtc3RhdGlvblwiKS5hcHBlbmQoJG5lYXJlc3QpLmFwcGVuZFRvKCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXVtcInN0YXRpb25zXCJdKTtcblxuXHQvLyBNb250YSBsaXN0YSBkZSBlc3Rhw6fDtWVzXG5cdHN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcblx0XHRsZXQgJHN0YXRpb24gPSAkKFwiPGEgLz5cIikuYXR0cihcImhyZWZcIiwgXCIjXCIgKyBzdGF0aW9uW1wiaWRcIl0pLmF0dHIoXCJkYXRhLXN0YXRpb25cIiwgc3RhdGlvbltcIm5hbWVcIl0pO1xuXG5cdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJzdGF0aW9uLW5hbWVcIikudGV4dChzdGF0aW9uW1wibmFtZVwiXSkuYXBwZW5kVG8oJHN0YXRpb24pO1xuXG5cdFx0bGV0ICRsaW5lcyA9ICQoXCI8dWwgLz5cIikuYWRkQ2xhc3MoXCJzdGF0aW9uLWxpbmVzXCIpLmFwcGVuZFRvKCRzdGF0aW9uKTtcblx0XHRsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdFx0XHRsZXQgJGxpbmUgPSAkKFwiPGxpIC8+XCIpLmFwcGVuZFRvKCRsaW5lcyk7XG5cdFx0XHRpZiAoc3RhdGlvbltcImxpbmVzXCJdLmluY2x1ZGVzKGxpbmVbXCJpZFwiXSkpIHtcblx0XHRcdFx0bGV0ICRzaGllbGQgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImxpbmUtc2hpZWxkXCIpLmNzcyhcImNvbG9yXCIsIGxpbmVbXCJjb2xvclwiXSkudGV4dChsaW5lW1wiaWRcIl0pLmFwcGVuZFRvKCRsaW5lKTtcblxuXHRcdFx0XHRpZiAobGluZVtcImRpc2FibGVkXCJdKSB7XG5cdFx0XHRcdFx0JHNoaWVsZC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSkuYWRkQ2xhc3MoXCItc3RhdGUtLWRpc2FibGVkXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoIXN0YXRpb25bXCJkaXNhYmxlZFwiXSkge1xuXHRcdFx0JHN0YXRpb24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0bmV4dERlcGFydHVyZXMoc3RhdGlvbik7XG5cdFx0XHRcdCRib2R5LnJlbW92ZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHN0YXRpb24uYWRkQ2xhc3MoXCItc3RhdGUtLWRpc2FibGVkXCIpO1xuXHRcdFx0JHN0YXRpb24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdCQoXCI8bGkgLz5cIikuYXBwZW5kKCRzdGF0aW9uKS5hcHBlbmRUbygkbmF2aWdhdGlvbltcImNvbnRlbnRcIl1bXCJzdGF0aW9uc1wiXSk7XG5cdH0pO1xuXG5cdC8vIEFzc29jaWEgbyBldmVudG8gZGUgY2xpY2sgcGFyYSBhYnJpciBvdSBmZWNoYXIgYSBsaXN0YVxuXHQkbmF2aWdhdGlvbltcImhlYWRlclwiXS5vbihcImNsaWNrXCIsICgpID0+IHtcblx0XHQkYm9keS50b2dnbGVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHR9KTtcblxuXHQkcGFuZWxbXCJoZWFkZXJcIl0ub24oXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0aWYgKCRib2R5Lmhhc0NsYXNzKFwiLW1vZGUtLWxpc3RcIikpIHtcblx0XHRcdCRib2R5LnJlbW92ZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBTY3JvbGwgZGVudHJvIGRhIGxpc3RhXG5cdCQod2luZG93KS5vbihcInNjcm9sbFwiLCAoZXZlbnQpID0+IHtcblx0XHRsZXQgc2Nyb2xsX3RvcF9wb3NpdGlvbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuXHRcdGlmIChzY3JvbGxfdG9wX3Bvc2l0aW9uID49IDEyKSB7XG5cdFx0XHQkYm9keS5hZGRDbGFzcyhcIi1tb2RlLS1zY3JvbGxcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRib2R5LnJlbW92ZUNsYXNzKFwiLW1vZGUtLXNjcm9sbFwiKTtcblx0XHR9XG5cdH0pO1xufTtcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gdGhlbWUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5jb25zdCB0aGVtZSA9ICgoKSA9PiB7XHJcbiAgICBsZXQgdGhlbWVfb3JkZXIgPSBbXHJcbiAgICAgICAgXCJhdXRvXCIsXHJcbiAgICAgICAgXCJsaWdodFwiLFxyXG4gICAgICAgIFwiZGFya1wiXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCB0aGVtZV9zZXR0aW5ncyA9IHtcclxuICAgICAgICBcImF1dG9cIjoge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IEwxMG5bbGFuZ3VhZ2VdW1wiYXV0by10aGVtZVwiXSxcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiYnJpZ2h0bmVzc19hdXRvXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibGlnaHRcIjoge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IEwxMG5bbGFuZ3VhZ2VdW1wibGlnaHQtdGhlbWVcIl0sXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImJyaWdodG5lc3NfNVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRhcmtcIjoge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IEwxMG5bbGFuZ3VhZ2VdW1wiZGFyay10aGVtZVwiXSxcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiYnJpZ2h0bmVzc180XCJcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgc2V0ID0gKG5ld190aGVtZSwgb2xkX3RoZW1lID0gXCJcIikgPT4ge1xyXG4gICAgICAgIGN1cnJlbnRfdGhlbWUgPSBuZXdfdGhlbWU7XHJcblxyXG4gICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lIHNwYW5cIikudGV4dCh0aGVtZV9zZXR0aW5nc1tuZXdfdGhlbWVdW1widGl0bGVcIl0pO1xyXG4gICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lIGlcIikudGV4dCh0aGVtZV9zZXR0aW5nc1tuZXdfdGhlbWVdW1wiaWNvblwiXSk7XHJcblxyXG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLXRoZW1lLS1cIiArIG9sZF90aGVtZSkuYWRkQ2xhc3MoXCItdGhlbWUtLVwiICsgbmV3X3RoZW1lKTtcclxuXHJcbiAgICAgICAgLy8gU2FsdmEgY29uZmlndXJhw6fDo28gbm8gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgaWYgKG5ld190aGVtZSA9PT0gXCJhdXRvXCIpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0aGVtZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIG5ld190aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBDb25mZXJlIHNlIGrDoSBow6EgdGVtYSBzYWx2byBubyBsb2NhbFN0b3JhZ2UuXHJcbiAgICAvLyBTZSBuw6NvIGhvdXZlciwgcGVnYSBvIHBhZHLDo28gZG8gc2lzdGVtYVxyXG4gICAgLy8gbGV0IGN1cnJlbnRfdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIHx8IGdldENvbXB1dGVkU3R5bGUoJChcIi5zZXR0aW5ncyAuY3VycmVudC10aGVtZVwiKVswXSkuZ2V0UHJvcGVydHlWYWx1ZShcImNvbnRlbnRcIikucmVwbGFjZSgvXCIvZywgXCJcIik7XHJcbiAgICBsZXQgY3VycmVudF90aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgfHwgXCJhdXRvXCI7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRfdGhlbWUpIHtcclxuICAgICAgICBzZXQoY3VycmVudF90aGVtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoIWN1cnJlbnRfdGhlbWUpIHtcclxuICAgICAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWUgc3BhblwiKS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wiYXV0by10aGVtZVwiXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKFwiLnNldHRpbmdzIC50aGVtZVwiKS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGVzY29icmUgYSBwb3Npw6fDo28gZG8gdGVtYSBuYSBvcmRlbVxyXG4gICAgICAgICAgICBsZXQgdGhlbWVfcG9zaXRpb24gPSB0aGVtZV9vcmRlci5pbmRleE9mKGN1cnJlbnRfdGhlbWUpO1xyXG4gICAgICAgICAgICBsZXQgbmV3X3RoZW1lID0gdGhlbWVfb3JkZXJbdGhlbWVfcG9zaXRpb24gKyAxXSB8fCB0aGVtZV9vcmRlclswXTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldGEgbyBub3ZvIHRlbWFcclxuICAgICAgICAgICAgc2V0KG5ld190aGVtZSwgY3VycmVudF90aGVtZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59KSgpO1xyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBzdGFydCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiQoZnVuY3Rpb24oKSB7XG5cdCRib2R5ID0gJChcImJvZHlcIik7XG5cblx0JG5hdmlnYXRpb24gPSAkKFwiLm5hdmlnYXRpb25cIik7XG5cdCRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdID0gJChcIi5uYXZpZ2F0aW9uLWhlYWRlclwiLCAkbmF2aWdhdGlvbik7XG5cdCRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdW1wic3RhdGlvbi1uYW1lXCJdID0gJChcIi5zdGF0aW9uLW5hbWVcIiwgJG5hdmlnYXRpb25bXCJoZWFkZXJcIl0pO1xuXHQkbmF2aWdhdGlvbltcImhlYWRlclwiXVtcInBsYWNlaG9sZGVyXCJdID0gJChcIi5wbGFjZWhvbGRlclwiLCAkbmF2aWdhdGlvbltcImhlYWRlclwiXSk7XG5cdCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXSA9ICQoXCIubmF2aWdhdGlvbi1jb250ZW50XCIsICRuYXZpZ2F0aW9uKTtcblx0JG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0gPSAkKFwiLnN0YXRpb25zXCIsICRuYXZpZ2F0aW9uW1wiY29udGVudFwiXSk7XG5cblx0JHBhbmVsID0gJChcIi5wYW5lbFwiKTtcblx0JHBhbmVsW1wiaGVhZGVyXCJdID0gJChcIi5wYW5lbC1oZWFkZXJcIiwgJHBhbmVsKTtcblx0JHBhbmVsW1wiaGVhZGVyXCJdW1widGl0bGVcIl0gPSAkKFwiLnRpdGxlXCIsICRwYW5lbFtcImhlYWRlclwiXSk7XG5cdCRwYW5lbFtcImhlYWRlclwiXVtcImJhZGdlXCJdID0gJChcIi5iYWRnZVwiLCAkcGFuZWxbXCJoZWFkZXJcIl0pO1xuXHQkcGFuZWxbXCJjb250ZW50XCJdID0gJChcIi5wYW5lbC1jb250ZW50XCIsICRwYW5lbCk7XG5cdCRwYW5lbFtcImNvbnRlbnRcIl1bXCJzdGF0aW9uXCJdID0gJChcIi5zdGF0aW9uXCIsICRwYW5lbFtcImNvbnRlbnRcIl0pO1xuXHQkcGFuZWxbXCJjb250ZW50XCJdW1wiY2xvc2VkXCJdID0gJChcIi5jbG9zZWRcIiwgJHBhbmVsW1wiY29udGVudFwiXSk7XG5cdCRwYW5lbFtcImNvbnRlbnRcIl1bXCJwZXJtaXNzaW9uXCJdID0gJChcIi5wZXJtaXNzaW9uXCIsICRwYW5lbFtcImNvbnRlbnRcIl0pO1xuXHQkcGFuZWxbXCJjb250ZW50XCJdW1wibG9hZGluZ1wiXSA9ICQoXCIubG9hZGluZ1wiLCAkcGFuZWxbXCJjb250ZW50XCJdKTtcblx0JHBhbmVsW1wiZm9vdGVyXCJdID0gJChcIi5wYW5lbC1mb290ZXJcIiwgJHBhbmVsKTtcblx0JHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdID0gJChcIi5zdGF0dXNcIiwgJHBhbmVsW1wiZm9vdGVyXCJdKTtcblx0JHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1wiaWNvblwiXSA9ICQoXCIuaWNvblwiLCAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0pO1xuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJ0ZXh0XCJdID0gJChcIi50ZXh0XCIsICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXSk7XG5cdCRwYW5lbFtcImZvb3RlclwiXVtcIm5ldHdvcmtcIl0gPSAkKFwiLm5ldHdvcmtcIiwgJHBhbmVsW1wiZm9vdGVyXCJdKTtcblx0JHBhbmVsW1wiZm9vdGVyXCJdW1wibmV0d29ya1wiXVtcImljb25cIl0gPSAkKFwiLmljb25cIiwgJHBhbmVsW1wiZm9vdGVyXCJdW1wibmV0d29ya1wiXSk7XG5cdCRwYW5lbFtcImZvb3RlclwiXVtcIm5ldHdvcmtcIl1bXCJ0ZXh0XCJdID0gJChcIi50ZXh0XCIsICRwYW5lbFtcImZvb3RlclwiXVtcIm5ldHdvcmtcIl0pO1xuXG5cdGN1ZVtcImxvYWQtZG9jdW1lbnRcIl0ucmVzb2x2ZSgpO1xuXG5cdC8vIFR1ZG8gY29tZcOnYSBhcXVpIVxuXHRzdGF0aW9uTGlzdCgpO1xuXG5cdC8vIENvbmZlcmUgc2UgdXN1w6FyaW8gasOhIGhhdmlhIGhhYmlsaXRhZG8gZ2VvbG9jYWxpemHDp8OjbyBhbnRlc1xuXHRpZiAoXCJnZW9sb2NhdGlvblwiIGluIG5hdmlnYXRvcikge1xuXHRcdCRwYW5lbFtcImNvbnRlbnRcIl1bXCJwZXJtaXNzaW9uXCJdLmZpbmQoXCJzcGFuXCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJmaW5kLW5lYXJlc3Qtc3RhdGlvblwiXSk7XG5cblx0XHRpZiAoXCJwZXJtaXNzaW9uc1wiIGluIG5hdmlnYXRvcikge1xuXHRcdFx0bmF2aWdhdG9yLnBlcm1pc3Npb25zLnF1ZXJ5KHsgXCJuYW1lXCI6IFwiZ2VvbG9jYXRpb25cIiB9KS50aGVuKChwZXJtaXNzaW9uKSA9PiB7XG5cdFx0XHRcdGlmIChwZXJtaXNzaW9uW1wic3RhdGVcIl0gPT09IFwiZ3JhbnRlZFwiKSB7XG5cdFx0XHRcdFx0Ly8gU2UgasOhIHRpdmVyLCBwZWdhIGEgbG9jYWxpemHDp8OjbyBhdHVhbCBlIHByb2N1cmEgZXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcblx0XHRcdFx0XHRnZXRMb2NhdGlvbigpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHBlcm1pc3Npb25bXCJzdGF0ZVwiXSA9PT0gXCJkZW5pZWRcIikge1xuXHRcdFx0XHRcdC8vIFNlIG7Do28gZm9pIGRhdGEgcGVybWlzc8OjbywgYWJyZSBhIGxpc3RhIGRlIGVzdGHDp8O1ZXNcblx0XHRcdFx0XHRuZXh0RGVwYXJ0dXJlcygpO1xuXHRcdFx0XHRcdCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXVtcInN0YXRpb25zXCJdLmZpbmQoXCIubmVhcmVzdC1zdGF0aW9uXCIpLmhpZGUoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBTZSBuw6NvIHRpdmVyLCBtb3N0cmEgYm90w6NvIHBhcmEgc29saWNpdGFyIGF1dG9yaXphw6fDo29cblx0XHRcdFx0XHQkKFwiYm9keVwiKS5hZGRDbGFzcyhcIi1tb2RlLS1pbml0aWFsXCIpO1xuXHRcdFx0XHRcdCRwYW5lbC5hZGRDbGFzcyhcIi1zdGF0ZS0tcGVybWlzc2lvblwiKTtcblxuXHRcdFx0XHRcdCQoXCIuYnV0dG9uXCIsICRwYW5lbFtcImNvbnRlbnRcIl1bXCJwZXJtaXNzaW9uXCJdKS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdGdldExvY2F0aW9uKHRydWUpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Z2V0TG9jYXRpb24oKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gU2UgbsOjbyBob3V2ZXIgZ2VvbG9jYWxpemHDp8OjbywgYWJyZSBhIGxpc3RhIGRlIGVzdGHDp8O1ZXNcblx0XHRuZXh0RGVwYXJ0dXJlcygpO1xuXHRcdCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXVtcInN0YXRpb25zXCJdLmZpbmQoXCIubmVhcmVzdC1zdGF0aW9uXCIpLmhpZGUoKTtcblx0fVxufSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFNlcnZpY2UgV29ya2VyXG5pZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG5cdFx0Y3VlW1wic2VydmljZS13b3JrZXJcIl0gPSBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihcIi9zZXJ2aWNlLXdvcmtlci5qc1wiKTtcblxuXHRcdGN1ZVtcInNlcnZpY2Utd29ya2VyXCJdLnRoZW4oKHJlZ2lzdHJhdGlvbikgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCFcIiwgcmVnaXN0cmF0aW9uKTtcblx0XHR9LCAoZXJyb3IpID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwiU2VydmljZSBXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogXCIsIGVycm9yKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEVzdGFkbyBkYSBjb25leMOjb1xuJChmdW5jdGlvbigpIHtcblx0JHBhbmVsW1wiZm9vdGVyXCJdW1wibmV0d29ya1wiXVtcImljb25cIl0udGV4dChcImNsb3VkX29mZlwiKTtcblx0JHBhbmVsW1wiZm9vdGVyXCJdW1wibmV0d29ya1wiXVtcInRleHRcIl0udGV4dChMMTBuW2xhbmd1YWdlXVtcIm9mZmxpbmVcIl0pO1xufSk7XG5cbmNvbnN0IHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMgPSAoKSA9PiB7XG5cdGxldCBjb25uZWN0ZWQgPSBuYXZpZ2F0b3Iub25MaW5lO1xuXG5cdGlmIChjb25uZWN0ZWQgPT09IHRydWUpIHtcblx0XHQkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdLnJlbW92ZUNsYXNzKFwiLXN0YXRlLS1vZmZsaW5lXCIpO1xuXHR9IGVsc2Uge1xuXHRcdCRwYW5lbFtcImZvb3RlclwiXVtcIm5ldHdvcmtcIl0uYWRkQ2xhc3MoXCItc3RhdGUtLW9mZmxpbmVcIik7XG5cdH1cbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib25saW5lXCIsIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMpO1xuIl19