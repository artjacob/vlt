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
            $panel["footer"]["status"]["text"].html(response["message"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiLCJMMTBuLmpzIiwic3RhdGlvbi1pbmZvLmpzIiwibGluZS1pbmZvLmpzIiwiZ2V0LWxvY2F0aW9uLmpzIiwibmVhcmVzdC1zdGF0aW9uLmpzIiwibmV4dC1kZXBhcnR1cmVzLmpzIiwic3lzdGVtLXN0YXR1cy5qcyIsInN0YXRpb24tbGlzdC5qcyIsInRoZW1lLmpzIiwic3RhcnQuanMiXSwibmFtZXMiOlsiY3VlIiwiJGJvZHkiLCIkbmF2aWdhdGlvbiIsIiRwYW5lbCIsIiQiLCJEZWZlcnJlZCIsIm1vbWVudCIsInVwZGF0ZUxvY2FsZSIsImRlZmF1bHRfbGFuZ3VhZ2UiLCJhdmFpbGFibGVfbGFuZ3VhZ2VzIiwidXNlcl9sYW5ndWFnZSIsIm5hdmlnYXRvciIsImxhbmd1YWdlIiwic3Vic3RyIiwiaW5jbHVkZXMiLCJsb2NhbGUiLCJMMTBuIiwic3RhdGlvbnMiLCJzdGF0aW9uX2luZGV4IiwiZm9yRWFjaCIsInN0YXRpb24iLCJzdGF0aW9uX25hbWUiLCJsaW5lcyIsImxpbmVfaW5kZXgiLCJsaW5lIiwibGluZV9uYW1lIiwiZ2V0TG9jYXRpb24iLCJpc19pbml0aWFsIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsInJlbW92ZUNsYXNzIiwibmVhcmVzdF9zdGF0aW9uIiwibmVhcmVzdFN0YXRpb24iLCJuZXh0RGVwYXJ0dXJlcyIsImRlZzJyYWQiLCJkZWciLCJNYXRoIiwiUEkiLCJ1c2VyX2Nvb3JkaW5hdGVzIiwidXNlcl9sYXRpdHVkZSIsInVzZXJfbG9uZ2l0dWRlIiwiUiIsInNob3J0ZXN0X2Rpc3RhbmNlIiwic3RhdGlvbl9sYXRpdHVkZSIsInN0YXRpb25fbG9uZ2l0dWRlIiwieCIsImNvcyIsInkiLCJkaXN0YW5jZSIsInNxcnQiLCJmcm9tX2dwcyIsImRlcGFydHVyZXMiLCJhZGRDbGFzcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RhdGVfY2xhc3NlcyIsImNsZWFySW50ZXJ2YWwiLCJ3aW5kb3ciLCJvZmYiLCJ0ZXh0IiwiZW1wdHkiLCJmaW5kIiwibGFzdFVwZGF0ZWQiLCIkYmFkZ2UiLCJzZWNvbmRzX3NpbmNlX3VwZGF0ZSIsImRpZmYiLCJsYXN0X3VwZGF0ZWQiLCJmcm9tTm93IiwiYXBwZW5kIiwiZ2V0RGF0YSIsImRvY3VtZW50IiwiaGlkZGVuIiwib25MaW5lIiwiZ2V0SlNPTiIsImVuZHBvaW50cyIsImVudiIsImRvbmUiLCJyZXNwb25zZSIsImV0YV9jb3VudCIsImRpcmVjdGlvbnMiLCJkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbiIsImRpcmVjdGlvbiIsImRpcmVjdGlvbl90aXRsZSIsImxlbmd0aCIsInB1c2giLCJ0cmFpbiIsIm5vdyIsIm9wZXJhdGlvbl9zdGFydF90aW1lIiwib3BlcmF0aW9uX2VuZF90aW1lIiwiaXNBZnRlciIsImlzQmVmb3JlIiwiYXBwZW5kVG8iLCJodG1sIiwiJGRlcGFydHVyZXMiLCIkZGlyZWN0aW9uIiwiZXRhcyIsInNvcnQiLCJhIiwiYiIsIiR0cmFpbiIsIiRsaW5lIiwiaXNfYXBwcm9hY2hpbmciLCJkZXBhcnR1cmVfY291bnRkb3duIiwicm91bmQiLCJkZXBhcnR1cmVfdGltZSIsImZvcm1hdCIsImNzcyIsImF0dHIiLCJvcmlnaW5fYW5kX2Rlc3RpbmF0aW9uIiwiZGVzdGluYXRpb24iLCIkc3VnZ2VzdGlvbiIsIiRidXR0b24iLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNvbHZlIiwidXBkYXRlV2luZG93Iiwic2V0SW50ZXJ2YWwiLCJzeXN0ZW1TdGF0dXMiLCJnZXRTdGF0dXMiLCJsYXN0X3N0YXR1cyIsIm1lc3NhZ2VfaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJoZWlnaHQiLCJzZXRUaW1lb3V0Iiwic3RhdGlvbkxpc3QiLCIkbmVhcmVzdCIsIiRzdGF0aW9uIiwiJGxpbmVzIiwiJHNoaWVsZCIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJzY3JvbGxfdG9wX3Bvc2l0aW9uIiwic2Nyb2xsVG9wIiwidGhlbWUiLCJ0aGVtZV9vcmRlciIsInRoZW1lX3NldHRpbmdzIiwic2V0IiwibmV3X3RoZW1lIiwib2xkX3RoZW1lIiwiY3VycmVudF90aGVtZSIsInJlbW92ZUl0ZW0iLCJ0aGVtZV9wb3NpdGlvbiIsImluZGV4T2YiLCJwZXJtaXNzaW9ucyIsInF1ZXJ5IiwidGhlbiIsInBlcm1pc3Npb24iLCJoaWRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInJlZ2lzdHJhdGlvbiIsImVycm9yIiwidXBkYXRlQ29ubmVjdGlvblN0YXR1cyIsImNvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFBQSxHQUFBLEdBQUEsRUFBQSxDLENBQ0E7O0FBQ0EsSUFBQUMsS0FBQSxFQUFBQyxXQUFBLEVBQUFDLE1BQUE7QUFFQUgsR0FBQSxDQUFBLGVBQUEsQ0FBQSxHQUFBSSxDQUFBLENBQUFDLFFBQUEsRUFBQTtBQUNBTCxHQUFBLENBQUEsaUJBQUEsQ0FBQSxHQUFBSSxDQUFBLENBQUFDLFFBQUEsRUFBQSxDLENDVEE7QUFDQTtBQUNBO0FBRUE7O0FBQ0FDLE1BQUEsQ0FBQUMsWUFBQSxDQUFBLE9BQUEsRUFBQTtBQUNBLGtCQUFBO0FBQ0EsWUFBQTtBQURBO0FBREEsQ0FBQSxFLENBTUE7O0FBQ0EsSUFBQUMsZ0JBQUEsR0FBQSxJQUFBO0FBQ0EsSUFBQUMsbUJBQUEsR0FBQSxDQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxDQUFBO0FBQ0EsSUFBQUMsYUFBQSxHQUFBQyxTQUFBLENBQUFDLFFBQUEsR0FBQUQsU0FBQSxDQUFBQyxRQUFBLENBQUFDLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUFMLGdCQUFBO0FBRUEsSUFBQUksUUFBQSxHQUFBSCxtQkFBQSxDQUFBSyxRQUFBLENBQUFKLGFBQUEsSUFBQUEsYUFBQSxHQUFBRixnQkFBQSxDLENBQ0E7O0FBRUEsSUFBQUksUUFBQSxLQUFBLElB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O0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQTFDQSxFQWtEQTtBQUNBLFVBQUEsWUFEQTtBQUVBLFFBQUEsWUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQWxEQSxFQTBEQTtBQUNBLFVBQUEsU0FEQTtBQUVBLFFBQUEsU0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBMURBLEVBa0VBO0FBQ0EsVUFBQSxtQkFEQTtBQUVBLFFBQUEsbUJBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FsRUEsRUEwRUE7QUFDQTtBQUNBLFVBQUEsa0JBRkE7QUFHQSxRQUFBLGtCQUhBO0FBSUE7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBTEE7QUFNQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQVBBLENBMUVBLEVBbUZBO0FBQ0EsVUFBQSxTQURBO0FBRUEsUUFBQSxTQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbkZBLEVBMkZBO0FBQ0EsVUFBQSxRQURBO0FBRUEsUUFBQSxRQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBM0ZBLEVBbUdBO0FBQ0EsVUFBQSxVQURBO0FBRUEsUUFBQSxVQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENB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RCxNQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUEsSUFBQUMsQ0FBQSxDQUFBLFFBQUEsRUFBQUQsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLElBQUFDLENBQUEsQ0FBQSxRQUFBLEVBQUFELE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLEdBQUFDLENBQUEsQ0FBQSxnQkFBQSxFQUFBRCxNQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFNBQUEsSUFBQUMsQ0FBQSxDQUFBLFVBQUEsRUFBQUQsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxRQUFBLElBQUFDLENBQUEsQ0FBQSxTQUFBLEVBQUFELE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsWUFBQSxJQUFBQyxDQUFBLENBQUEsYUFBQSxFQUFBRCxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFNBQUEsSUFBQUMsQ0FBQSxDQUFBLFVBQUEsRUFBQUQsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsR0FBQUMsQ0FBQSxDQUFBLGVBQUEsRUFBQUQsTUFBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLElBQUFDLENBQUEsQ0FBQSxTQUFBLEVBQUFELE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBLE1BQUEsSUFBQUMsQ0FBQSxDQUFBLE9BQUEsRUFBQUQsTUFBQSxDQUFBLFFB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QUFBLEVBQUEsQ0FDQTtBQUNBLEtBRkEsRUFFQSxVQUFBQyxLQUFBLEVBQUEsQ0FDQTtBQUNBLEtBSkE7QUFLQSxHQVJBO0FBU0EsQyxDQUVBO0FBQ0E7OztBQUNBdkosQ0FBQSxDQUFBLFlBQUE7QUFDQUQsRUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFNBQUEsRUFBQSxNQUFBLEVBQUEwRCxJQUFBLENBQUEsV0FBQTtBQUNBMUQsRUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFNBQUEsRUFBQSxNQUFBLEVBQUEwRCxJQUFBLENBQUE3QyxJQUFBLENBQUFKLFFBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQTtBQUNBLENBSEEsQ0FBQTs7QUFLQSxJQUFBZ0osc0JBQUEsR0FBQSxTQUFBQSxzQkFBQSxHQUFBO0FBQ0EsTUFBQUMsU0FBQSxHQUFBbEosU0FBQSxDQUFBK0QsTUFBQTs7QUFFQSxNQUFBbUYsU0FBQSxLQUFBLElBQUEsRUFBQTtBQUNBMUosSUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFNBQUEsRUFBQTRCLFdBQUEsQ0FBQSxpQkFBQTtBQUNBLEdBRkEsTUFFQTtBQUNBNUIsSUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFNBQUEsRUFBQWtELFFBQUEsQ0FBQSxpQkFBQTtBQUNBO0FBQ0EsQ0FSQTs7QUFVQU0sTUFBQSxDQUFBNEYsZ0JBQUEsQ0FBQSxRQUFBLEVBQUFLLHNCQUFBO0FBQ0FqRyxNQUFBLENBQUE0RixnQkFBQSxDQUFBLFNBQUEsRUFBQUssc0JBQUEiLCJmaWxlIjoidmx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBiYXNlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmxldCBjdWUgPSBbIF07XHJcbi8vIGxldCAkcGFuZWwsICRzdGF0aW9uLCAkcGVybWlzc2lvbiwgJG5ldHdvcmssICRzdGF0dXM7XHJcbmxldCAkYm9keSwgJG5hdmlnYXRpb24sICRwYW5lbDtcclxuXHJcbmN1ZVtcImxvYWQtZG9jdW1lbnRcIl0gPSAkLkRlZmVycmVkKCk7XHJcbmN1ZVtcImxvYWQtZGVwYXJ0dXJlc1wiXSA9ICQuRGVmZXJyZWQoKTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBsb2NhbGl6YXRpb24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIEFqdXN0ZXMgbmFzIHRyYWR1w6fDtWVzIGRvIE1vbWVudFxyXG5tb21lbnQudXBkYXRlTG9jYWxlKFwicHQtYnJcIiwge1xyXG5cdFwicmVsYXRpdmVUaW1lXCI6IHtcclxuXHRcdFwicGFzdFwiOiBcIiVzIGF0csOhc1wiXHJcblx0fVxyXG59KTtcclxuXHJcbi8vIERlZmluZSBvIGlkaW9tYVxyXG5jb25zdCBkZWZhdWx0X2xhbmd1YWdlID0gXCJlblwiO1xyXG5jb25zdCBhdmFpbGFibGVfbGFuZ3VhZ2VzID0gW1wicHRcIiwgXCJlblwiLCBcImVzXCJdO1xyXG5jb25zdCB1c2VyX2xhbmd1YWdlID0gKG5hdmlnYXRvci5sYW5ndWFnZSA/IG5hdmlnYXRvci5sYW5ndWFnZS5zdWJzdHIoMCwgMikgOiBkZWZhdWx0X2xhbmd1YWdlKTtcclxuXHJcbmNvbnN0IGxhbmd1YWdlID0gYXZhaWxhYmxlX2xhbmd1YWdlcy5pbmNsdWRlcyh1c2VyX2xhbmd1YWdlKSA/IHVzZXJfbGFuZ3VhZ2UgOiBkZWZhdWx0X2xhbmd1YWdlO1xyXG4vLyBjb25zdCBsYW5ndWFnZSA9IFwicHRcIjtcclxuXHJcbmlmIChsYW5ndWFnZSA9PT0gXCJwdFwiKSB7XHJcblx0bW9tZW50LmxvY2FsZShcInB0LWJyXCIpO1xyXG59IGVsc2Uge1xyXG5cdG1vbWVudC5sb2NhbGUobGFuZ3VhZ2UpO1xyXG59XHJcblxyXG4vLyBUcmFkdcOnw7Vlc1xyXG5jb25zdCBMMTBuID0ge1xyXG5cdFwicHRcIjoge1xyXG5cdFx0XCJuZXh0LWRlcGFydHVyZXNcIjogXCJQcsOzeGltb3MgdHJlbnNcIixcclxuXHRcdFwicmVhbC10aW1lXCI6IFwiVGVtcG8gcmVhbFwiLFxyXG5cdFx0XCJhcmUteW91LWF0XCI6IFwiRXN0w6EgZW1cIixcclxuXHRcdFwiZGlyZWN0aW9uXCI6IFwiU2VudGlkb1wiLFxyXG5cdFx0XCJub3dcIjogXCJBZ29yYVwiLFxyXG5cdFx0XCJ0cmFpblwiOiBcIlRyZW1cIixcclxuXHRcdFwibGluZVwiOiBcIkxpbmhhXCIsXHJcblx0XHRcInVwZGF0ZWRcIjogXCJBdHVhbGl6YWRvXCIsXHJcblx0XHRcIm91dC1vZi1vcGVyYXRpb25cIjogXCJGb3JhIGRlIG9wZXJhw6fDo29cIixcclxuXHRcdFwib3BlcmF0aW9uLWhvdXJzXCI6IFwiTyBWTFQgQ2FyaW9jYSBjaXJjdWxhPGJyPiB0b2RvcyBvcyBkaWFzIGRhcyA2aCDDoCAwaFwiLFxyXG5cdFx0XCJzdGF0aW9uc1wiOiBcIkVzdGHDp8O1ZXNcIixcclxuXHRcdFwiZmluZC1uZWFyZXN0LXN0YXRpb25cIjogXCJMb2NhbGl6YXIgZXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcIixcclxuXHRcdFwiYXV0by10aGVtZVwiOiBcIlRlbWEgYXV0b23DoXRpY29cIixcclxuXHRcdFwibGlnaHQtdGhlbWVcIjogXCJUZW1hIGNsYXJvXCIsXHJcblx0XHRcImRhcmstdGhlbWVcIjogXCJUZW1hIGVzY3Vyb1wiLFxyXG5cdFx0XCJvZmZsaW5lXCI6IFwiU2VtIGNvbmV4w6NvXCIsXHJcblx0XHRcInN0YXR1cy1va1wiOiBcIk9wZXJhw6fDo28gbm9ybWFsXCIsXHJcblx0fSxcclxuXHRcImVuXCI6IHtcclxuXHRcdFwibmV4dC1kZXBhcnR1cmVzXCI6IFwiTmV4dCB0cmFpbnNcIixcclxuXHRcdFwicmVhbC10aW1lXCI6IFwiUmVhbCB0aW1lXCIsXHJcblx0XHRcImFyZS15b3UtYXRcIjogXCJBcmUgeW91IGF0XCIsXHJcblx0XHRcImRpcmVjdGlvblwiOiBcIkRpcmVjdGlvblwiLFxyXG5cdFx0XCJub3dcIjogXCJOb3dcIixcclxuXHRcdFwidHJhaW5cIjogXCJUcmFpblwiLFxyXG5cdFx0XCJsaW5lXCI6IFwiTGluZVwiLFxyXG5cdFx0XCJ1cGRhdGVkXCI6IFwiVXBkYXRlZFwiLFxyXG5cdFx0XCJvdXQtb2Ytb3BlcmF0aW9uXCI6IFwiU2VydmljZSBjbG9zZWRcIixcclxuXHRcdFwib3BlcmF0aW9uLWhvdXJzXCI6IFwiVkxUIENhcmlvY2EgcnVuczxicj4gZGFpbHkgZnJvbSA2YW0gdG8gMTJhbVwiLFxyXG5cdFx0XCJzdGF0aW9uc1wiOiBcIlN0YXRpb25zXCIsXHJcblx0XHRcImZpbmQtbmVhcmVzdC1zdGF0aW9uXCI6IFwiRmluZCBuZWFyZXN0IHN0YXRpb25cIixcclxuXHRcdFwiYXV0by10aGVtZVwiOiBcIkF1dG8gdGhlbWVcIixcclxuXHRcdFwibGlnaHQtdGhlbWVcIjogXCJMaWdodCB0aGVtZVwiLFxyXG5cdFx0XCJkYXJrLXRoZW1lXCI6IFwiRGFyayB0aGVtZVwiLFxyXG5cdFx0XCJvZmZsaW5lXCI6IFwiT2ZmbGluZVwiLFxyXG5cdFx0XCJzdGF0dXMtb2tcIjogXCJOb3JtYWwgdHJhZmZpY1wiLFxyXG5cdH0sXHJcblx0XCJlc1wiOiB7XHJcblx0XHRcIm5leHQtZGVwYXJ0dXJlc1wiOiBcIlByw7N4aW1vcyB0cmVuZXNcIixcclxuXHRcdFwicmVhbC10aW1lXCI6IFwiVGllbXBvIHJlYWxcIixcclxuXHRcdFwiYXJlLXlvdS1hdFwiOiBcIsK/RXN0w6FzIGVuXCIsXHJcblx0XHRcImRpcmVjdGlvblwiOiBcIkRpcmVjY2nDs25cIixcclxuXHRcdFwibm93XCI6IFwiQWhvcmFcIixcclxuXHRcdFwidHJhaW5cIjogXCJUcmVuXCIsXHJcblx0XHRcImxpbmVcIjogXCJMw61uZWFcIixcclxuXHRcdFwidXBkYXRlZFwiOiBcIkFjdHVhbGl6YWRvXCIsXHJcblx0XHRcIm91dC1vZi1vcGVyYXRpb25cIjogXCJTZXJ2aWNpbyBjZXJyYWRvXCIsXHJcblx0XHRcIm9wZXJhdGlvbi1ob3Vyc1wiOiBcIlZMVCBDYXJpb2NhIGZ1bmNpb25hPGJyPiB0b2RvcyBsb3MgZMOtYXMgZGUgMDY6MDAgYSAwMDowMFwiLFxyXG5cdFx0XCJzdGF0aW9uc1wiOiBcIkVzdGFjaW9uZXNcIixcclxuXHRcdFwiZmluZC1uZWFyZXN0LXN0YXRpb25cIjogXCJFbmNvbnRyYXIgbGEgZXN0YWNpw7NuIG3DoXMgY2VyY2FuYVwiLFxyXG5cdFx0XCJhdXRvLXRoZW1lXCI6IFwiVGVtYSBhdXRvbcOhdGljb1wiLFxyXG5cdFx0XCJsaWdodC10aGVtZVwiOiBcIlRlbWEgY2xhcm9cIixcclxuXHRcdFwiZGFyay10aGVtZVwiOiBcIlRlbWEgb3NjdXJvXCIsXHJcblx0XHRcIm9mZmxpbmVcIjogXCJTaW4gY29uZXhpw7NuXCIsXHJcblx0XHRcInN0YXR1cy1va1wiOiBcIkNpcmN1bGFjacOzbiBub3JtYWxcIixcclxuXHR9XHJcbn07XHJcbiIsImxldCBzdGF0aW9ucyA9IFtcblx0e1xuXHRcdFwibmFtZVwiOiBcIkFudG9uaW8gQ2FybG9zXCIsXG5cdFx0XCJpZFwiOiBcImFudG9uaW8tY2FybG9zXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDIsIDM6IDIgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTExMzE1MzQ0MzkxMzE5LCAtNDMuMTcyMDUwOTk3NTk4MjQxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHQvLyBcImRpc2FibGVkXCI6IHRydWUsXG5cdFx0XCJuYW1lXCI6IFwiQ2FtZXJpbm9cIixcblx0XHRcImlkXCI6IFwiY2FtZXJpbm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogOCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDE2OTgwNDYwMjIzODIsIC00My4xODM5ODM2MTQ5MzM0ODldLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNhbmRlbMOhcmlhXCIsXG5cdFx0XCJpZFwiOiBcImNhbmRlbGFyaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNiwgMzogNiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDE3MjUwMjkzODQyNTksIC00My4xNzg4MDg2NjU0MTg2NzFdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNhcmlvY2FcIixcblx0XHRcImlkXCI6IFwiY2FyaW9jYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA0LCAzOiA0IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNzQ4NDUwNzI1MjgxMSwgLTQzLjE3NjY0NTUxODAzODkxN10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ2VudHJhbFwiLFxuXHRcdFwiaWRcIjogXCJjZW50cmFsXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDUsIDM6IDEwIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMjcwNDk2MDc0NDk1MiwgLTQzLjE5MjYyNTMxNDM3NzMzOF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ2lkYWRlIGRvIFNhbWJhXCIsXG5cdFx0XCJpZFwiOiBcImNpZGFkZS1kby1zYW1iYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTQxNzk5NTcxMjgwNjcsIC00My4xOTY4ODQwODIwNzg0NzZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNpbmVsw6JuZGlhXCIsXG5cdFx0XCJpZFwiOiBcImNpbmVsYW5kaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMywgMzogMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MTA3MzQwMDE4NDIyNDMsIC00My4xNzU0MjUzODczNjQ5MzJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNvbG9tYm9cIixcblx0XHRcImlkXCI6IFwiY29sb21ib1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNTE3NTIxOTAwOTQxNSwgLTQzLjE3ODAxNjk2ODIyODgxOF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ29yZGVpcm8gZGEgR3Jhw6dhXCIsXG5cdFx0XCJpZFwiOiBcImNvcmRlaXJvLWRhLWdyYWNhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEzLCAyOiA4IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NzEwNDYyOTkyMzExNywgLTQzLjIwNDE3ODQwMzUzMzcwM10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIkNyaXN0aWFubyBPdHRvbmlcIixcblx0XHRcImlkXCI6IFwiY3Jpc3RpYW5vLW90dG9uaVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAzOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMzA2MTI3ODQ4MDY0OCwgLTQzLjE5MDc0OTEwOTQyMTQ4OV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiRXF1YWRvclwiLFxuXHRcdFwiaWRcIjogXCJlcXVhZG9yXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE4LCAyOiAxMSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTc4OTQ1NjQ2ODc3ODIsIC00My4yMDQ4MDUwMTQ0NDA4MTVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkdhbWJvYVwiLFxuXHRcdFwiaWRcIjogXCJnYW1ib2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTYsIDI6IDYgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3OTU5NDA4MzcyODQ1LCAtNDMuMTk5MzM2NjgzMjQ2MzAxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJIYXJtb25pYVwiLFxuXHRcdFwiaWRcIjogXCJoYXJtb25pYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTU3NTQ0MzcyNzMzODYsIC00My4xOTE0Mjc2Mzk1ODQ0OTZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlBhcmFkYSBkb3MgTXVzZXVzXCIsXG5cdFx0XCJpZFwiOiBcInBhcmFkYS1kb3MtbXVzZXVzXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDggfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1OTQ2NTg2ODAyMjY0LCAtNDMuMTgxOTU1OTgwNTgxMjcyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQYXJhZGEgZG9zIE5hdmlvc1wiLFxuXHRcdFwiaWRcIjogXCJwYXJhZGEtZG9zLW5hdmlvc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NDEzOTYyNTMwMzg3NSwgLTQzLjE4NzE4MTgzMDYxNzQ0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQZXJlaXJhIFJlaXNcIixcblx0XHRcImlkXCI6IFwicGVyZWlyYS1yZWlzXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE3LCAyOiAxMCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTY2NDcwNjQ5NjA0MywgLTQzLjIwMTc3MzExMTUyMzU5M10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJhw6dhIFhWXCIsXG5cdFx0XCJpZFwiOiBcInByYWNhLXh2XCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAyMDcwMTI4OTQ1ODQ4LCAtNDMuMTczMTE3Mzk1NzgzODc2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQcmFpYSBGb3Jtb3NhXCIsXG5cdFx0XCJpZFwiOiBcInByYWlhLWZvcm1vc2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTAsIDI6IDEzIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMzE3NzE1MjM4ODA1NywgLTQzLjIwODE2MTk2NDkwMjMwM10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJvdmlkw6puY2lhXCIsXG5cdFx0XCJpZFwiOiBcInByb3ZpZGVuY2lhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE1IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NzQ4OTkyMjAxNDM4MywgLTQzLjE5NjcwMTQwMDg5MDAzNV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUm9kb3Zpw6FyaWFcIixcblx0XHRcImlkXCI6IFwicm9kb3ZpYXJpYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxOSwgMjogMTIgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk4ODA1NTc0MjUxNzk5LCAtNDMuMjA3MzQyOTQxNDc1OTg2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTYWFyYVwiLFxuXHRcdFwiaWRcIjogXCJzYWFyYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA0IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNTkxMjEwODQ2MDI1MywgLTQzLjE4NzMyMDc4MjIyODIwNV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIlNhbnRhIFJpdGFcIixcblx0XHRcImlkXCI6IFwic2FudGEtcml0YVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAzOiA3IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMDU5NDE2NzQxMDY0OSwgLTQzLjE4MTUwOTA0OTg1NDIwNl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFszXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FudG8gQ3Jpc3RvXCIsXG5cdFx0XCJpZFwiOiBcInNhbnRvLWNyaXN0b1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMiwgMjogNyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTUzMjcyODIwMDIxNDYsIC00My4yMDAyNTkxODE3NTU3NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FudG9zIER1bW9udFwiLFxuXHRcdFwiaWRcIjogXCJzYW50b3MtZHVtb250XCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEsIDM6IDEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTEyMjg2ODc0OTYyNDAxLCAtNDMuMTY3NjMyMjU5NTQ1ODRdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlPDo28gQmVudG9cIixcblx0XHRcImlkXCI6IFwic2FvLWJlbnRvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDcgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk4NjQ4MDk2MDUxMDEyLCAtNDMuMTc5OTY0MzExNzY0ODg0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTZXRlIGRlIFNldGVtYnJvXCIsXG5cdFx0XCJpZFwiOiBcInNldGUtZGUtc2V0ZW1icm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNSwgMzogNSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDUzMDU5MDA5Nzc4OTcsIC00My4xNzc0NjM4MTYzNDY5MjJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlRpcmFkZW50ZXNcIixcblx0XHRcImlkXCI6IFwidGlyYWRlbnRlc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAzIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNjU3ODIyMjAyNjExNiwgLTQzLjE4Mjg1NDIzNjU1NzgwMl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiVXRvcGlhIEFxdWFSaW9cIixcblx0XHRcImlkXCI6IFwidXRvcGlhLWFxdWFyaW9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTAgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODkzMDk1NDcxOTk5NjEyLCAtNDMuMTkwMjM2OTA3MjEzMjE5XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJWaWxhIE9sw61tcGljYVwiLFxuXHRcdFwiaWRcIjogXCJ2aWxhLW9saW1waWNhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDkgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk5MDU2NTcyNjQ2NTMzLCAtNDMuMTk5NjQzNTI5NDk1Mjk3XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzJdXG5cdH1cbl07XG5cbmxldCBzdGF0aW9uX2luZGV4ID0geyB9O1xuc3RhdGlvbnMuZm9yRWFjaCgoc3RhdGlvbikgPT4ge1xuXHRsZXQgc3RhdGlvbl9uYW1lID0gc3RhdGlvbltcIm5hbWVcIl07XG5cdHN0YXRpb25faW5kZXhbc3RhdGlvbl9uYW1lXSA9IHN0YXRpb247XG59KTtcbiIsImxldCBsaW5lcyA9IFtcblx0e1xuXHRcdFwiaWRcIjogMSxcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAxXCIsXG5cdFx0XCJjb2xvclwiOiBcIiM2OGI5ZmJcIixcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xuXHRcdC8vIFx0XCJTYW50b3MgRHVtb250XCIsXG5cdFx0Ly8gXHRcIlByYWlhIEZvcm1vc2FcIlxuXHRcdC8vIF1cblx0fSxcblx0e1xuXHRcdFwiaWRcIjogMixcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAyXCIsXG5cdFx0XCJjb2xvclwiOiBcIiM3M2NhM2ZcIixcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xuXHRcdC8vIFx0XCJQcmHDp2EgWFZcIixcblx0XHQvLyBcdFwiUHJhaWEgRm9ybW9zYVwiXG5cdFx0Ly8gXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwiaWRcIjogMyxcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAzXCIsXG5cdFx0XCJjb2xvclwiOiBcIiNmM2EyMzBcIixcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xuXHRcdC8vIFx0XCJTYW50b3MgRHVtb250XCIsXG5cdFx0Ly8gXHRcIkNlbnRyYWxcIlxuXHRcdC8vIF1cblx0fVxuXTtcblxubGV0IGxpbmVfaW5kZXggPSB7IH07XG5saW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdGxldCBsaW5lX25hbWUgPSBsaW5lW1wibmFtZVwiXTtcblx0bGluZV9pbmRleFtsaW5lX25hbWVdID0gbGluZTtcbn0pO1xuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gZ2V0IGxvY2F0aW9uIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBQZWdhIGEgbG9jYWxpemHDp8OjbyBkbyB1c3XDoXJpb1xuY29uc3QgZ2V0TG9jYXRpb24gPSAoaXNfaW5pdGlhbCA9IGZhbHNlKSA9PiB7XG5cdG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XG5cblx0XHQvLyBTZSB2aWVyIGRvIG1vZG8gaW5pY2lhbCwgZW5jZXJyYSBlbGVcblx0XHRpZiAoaXNfaW5pdGlhbCkge1xuXHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0taW5pdGlhbFwiKTtcblx0XHRcdCRwYW5lbC5yZW1vdmVDbGFzcyhcIi1zdGF0ZS0tcGVybWlzc2lvblwiKTtcblx0XHR9XG5cblx0XHQvLyBEZXNjb2JyZSBhIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hIGUgcHJvY3VyYSBhcyBwcsOzeGltYXMgcGFydGlkYXNcblx0XHRsZXQgbmVhcmVzdF9zdGF0aW9uID0gbmVhcmVzdFN0YXRpb24oW3Bvc2l0aW9uW1wiY29vcmRzXCJdW1wibGF0aXR1ZGVcIl0sIHBvc2l0aW9uW1wiY29vcmRzXCJdW1wibG9uZ2l0dWRlXCJdXSk7XG5cdFx0bmV4dERlcGFydHVyZXMobmVhcmVzdF9zdGF0aW9uLCB0cnVlKTtcblx0fSk7XG59O1xuIiwiLy8gRXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcbmNvbnN0IGRlZzJyYWQgPSAoZGVnKSA9PiB7XG5cdHJldHVybiBkZWcgKiAoTWF0aC5QSSAvIDE4MCk7XG59O1xuXG5jb25zdCBuZWFyZXN0U3RhdGlvbiA9ICh1c2VyX2Nvb3JkaW5hdGVzKSA9PiB7XG5cdGNvbnN0IHVzZXJfbGF0aXR1ZGUgPSBkZWcycmFkKHVzZXJfY29vcmRpbmF0ZXNbMF0pO1xuXHRjb25zdCB1c2VyX2xvbmdpdHVkZSA9IGRlZzJyYWQodXNlcl9jb29yZGluYXRlc1sxXSk7XG5cblx0Y29uc3QgUiA9IDYzNzE7XG5cblx0bGV0IHNob3J0ZXN0X2Rpc3RhbmNlID0gbnVsbDtcblx0bGV0IG5lYXJlc3Rfc3RhdGlvbiA9IG51bGw7XG5cblx0c3RhdGlvbnMuZm9yRWFjaCgoc3RhdGlvbikgPT4ge1xuXHRcdGlmICghc3RhdGlvbltcImRpc2FibGVkXCJdKSB7XG5cdFx0XHRjb25zdCBzdGF0aW9uX2xhdGl0dWRlID0gZGVnMnJhZChzdGF0aW9uW1wiY29vcmRpbmF0ZXNcIl1bMF0pO1xuXHRcdFx0Y29uc3Qgc3RhdGlvbl9sb25naXR1ZGUgPSBkZWcycmFkKHN0YXRpb25bXCJjb29yZGluYXRlc1wiXVsxXSk7XG5cblx0XHRcdGNvbnN0IHggPSAoc3RhdGlvbl9sb25naXR1ZGUgLSB1c2VyX2xvbmdpdHVkZSkgKiBNYXRoLmNvcygodXNlcl9sYXRpdHVkZSArIHN0YXRpb25fbGF0aXR1ZGUpIC8gMik7XG5cdFx0XHRjb25zdCB5ID0gKHN0YXRpb25fbGF0aXR1ZGUgLSB1c2VyX2xhdGl0dWRlKTtcblx0XHRcdGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpICogUjtcblxuXHRcdFx0aWYgKCFzaG9ydGVzdF9kaXN0YW5jZSB8fCBkaXN0YW5jZSA8IHNob3J0ZXN0X2Rpc3RhbmNlKSB7XG5cdFx0XHRcdHNob3J0ZXN0X2Rpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRcdG5lYXJlc3Rfc3RhdGlvbiA9IHN0YXRpb247XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gbmVhcmVzdF9zdGF0aW9uO1xufTtcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIG5leHQgZGVwYXJ0dXJlcyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gUHLDs3hpbWFzIHBhcnRpZGFzXG5jb25zdCBuZXh0RGVwYXJ0dXJlcyA9IChzdGF0aW9uLCBmcm9tX2dwcyA9IGZhbHNlKSA9PiB7XG5cdGxldCBkZXBhcnR1cmVzO1xuXG5cdC8vIFNlIG7Do28gZm9yIHBhc3NhZGEgYSBlc3Rhw6fDo28sIGFicmUgbGlzdGEgZGUgZXN0YcOnw7Vlc1xuXHRpZiAoIXN0YXRpb24pIHtcblx0XHQkYm9keS5hZGRDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHRcdHN0YXRpb24gPSBzdGF0aW9uX2luZGV4W2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFzdC1zdGF0aW9uXCIpIHx8IFwiQ2VudHJhbFwiXTtcblx0fVxuXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdC1zdGF0aW9uXCIsIHN0YXRpb25bXCJuYW1lXCJdKTtcblxuXHRjb25zdCBzdGF0ZV9jbGFzc2VzID0gW1xuXHRcdFwiLXN0YXRlLS1zdGF0aW9uXCIsXG5cdFx0XCItc3RhdGUtLWxvYWRpbmdcIixcblx0XHRcIi1zdGF0ZS0tY2xvc2VkXCIsXG5cdFx0XCItc3RhdGUtLXBlcm1pc3Npb25cIlxuXHRdO1xuXG5cdC8vIERlc2xpZ2EgaW50ZXJ2YWxvcyBlIGV2ZW50b3MgZXhpc3RlbnRlc1xuXHRjbGVhckludGVydmFsKGN1ZVtcImludGVydmFsLWRlcGFydHVyZXNcIl0pO1xuXHRjbGVhckludGVydmFsKGN1ZVtcImludGVydmFsLWxhc3QtdXBkYXRlZFwiXSk7XG5cdCQod2luZG93KS5vZmYoXCJ2aXNpYmlsaXR5Y2hhbmdlLmRlcGFydHVyZXMgb25saW5lLmRlcGFydHVyZXNcIik7XG5cblx0Ly8gTW9zdHJhIGFuaW1hw6fDo28gZGUgbG9hZFxuXHQkcGFuZWwucmVtb3ZlQ2xhc3Moc3RhdGVfY2xhc3NlcykuYWRkQ2xhc3MoXCItc3RhdGUtLWxvYWRpbmdcIik7XG5cblx0Ly8gQ29sb2NhIG8gbm9tZSBkYSBlc3Rhw6fDo28gbm8gYXBwYmFyXG5cdCRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdW1wic3RhdGlvbi1uYW1lXCJdLnRleHQoc3RhdGlvbltcIm5hbWVcIl0pO1xuXHQkcGFuZWxbXCJoZWFkZXJcIl1bXCJ0aXRsZVwiXS5lbXB0eSgpO1xuXG5cdC8vIERlaXhhIGEgZXN0YcOnw6NvIHNlbGVjaW9uYWRhIG5hIGxpc3RhXG5cdCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXVtcInN0YXRpb25zXCJdLmZpbmQoXCJhXCIpLnJlbW92ZUNsYXNzKFwiLXN0YXRlLS1zZWxlY3RlZFwiKTtcblx0JG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0uZmluZChcImFbZGF0YS1zdGF0aW9uPSdcIiArIHN0YXRpb25bXCJuYW1lXCJdICsgXCInXVwiKS5hZGRDbGFzcyhcIi1zdGF0ZS0tc2VsZWN0ZWRcIik7XG5cblxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0Ly8gQXR1YWxpemHDp8Ojb1xuXHRjb25zdCBsYXN0VXBkYXRlZCA9ICgpID0+IHtcblx0XHRsZXQgJGJhZGdlID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJzdGF0dXMtYmFkZ2VcIik7XG5cblx0XHQvLyBUZW1wbyBlbSBzZWd1bmRvcyBkZXNkZSBhIMO6bHRpbWEgYXR1YWxpemHDp8Ojb1xuXHRcdGxldCBzZWNvbmRzX3NpbmNlX3VwZGF0ZSA9IG1vbWVudCgpLmRpZmYoZGVwYXJ0dXJlc1tcImxhc3RVcGRhdGVkXCJdLCBcInNlY29uZHNcIik7XG5cblx0XHQvLyBTZSB0aXZlciBzaWRvIGF0dWFsaXphZG8gaMOhIG1lbm9zIGRlIDYwIHNlZ3VuZG9zLCBtb3N0cmEgVGVtcG8gUmVhbFxuXHRcdGlmIChzZWNvbmRzX3NpbmNlX3VwZGF0ZSA8PSA2MCkge1xuXHRcdFx0JGJhZGdlLmFkZENsYXNzKFwiLXN0YXRlLS1yZWFsLXRpbWVcIikudGV4dChMMTBuW2xhbmd1YWdlXVtcInJlYWwtdGltZVwiXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBsYXN0X3VwZGF0ZWQgPSBMMTBuW2xhbmd1YWdlXVtcInVwZGF0ZWRcIl0gKyBcIiBcIiArIG1vbWVudChkZXBhcnR1cmVzW1wibGFzdFVwZGF0ZWRcIl0pLmZyb21Ob3coKTtcblx0XHRcdCRiYWRnZS50ZXh0KGxhc3RfdXBkYXRlZCk7XG5cdFx0fVxuXG5cdFx0JHBhbmVsW1wiaGVhZGVyXCJdW1wiYmFkZ2VcIl0uZW1wdHkoKS5hcHBlbmQoJGJhZGdlKTtcblx0fTtcblxuXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXHQvLyBDb25zdWx0YSBkb3MgZGFkb3Ncblx0Y29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcblx0XHQvLyBTw7MgY2FycmVnYSBzZSBlc3RpdmVyIGVtIGZvY28gZSBvbmxpbmVcblx0XHRpZiAoZG9jdW1lbnQuaGlkZGVuID09PSB0cnVlIHx8IG5hdmlnYXRvci5vbkxpbmUgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gQ2FycmVnYSBvcyBkYWRvc1xuXHRcdCQuZ2V0SlNPTihlbmRwb2ludHNbXCJkZXBhcnR1cmVzXCJdLCB7XG5cdFx0XHRcInN0YXRpb25cIjogc3RhdGlvbltcImlkXCJdLFxuXHRcdFx0XCJlbnZcIjogZW52XG5cdFx0fSkuZG9uZSgocmVzcG9uc2UpID0+IHtcblx0XHRcdGRlcGFydHVyZXMgPSByZXNwb25zZTtcblxuXHRcdFx0bGV0IGV0YV9jb3VudCA9IDA7XG5cdFx0XHRsZXQgZGlyZWN0aW9ucyA9IFsgXTtcblx0XHRcdGxldCBkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbiA9IHsgfTtcblxuXHRcdFx0Ly8gT3JnYW5pemEgYXMgcGFydGlkYXMgcG9yIGRlc3Rpbm9cblx0XHRcdGRlcGFydHVyZXNbXCJsaW5lc1wiXS5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdFx0XHRcdGxpbmVbXCJkaXJlY3Rpb25zXCJdLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuXHRcdFx0XHRcdGxldCBkaXJlY3Rpb25fdGl0bGUgPSBkaXJlY3Rpb25bXCJuYW1lXCJdO1xuXHRcdFx0XHRcdGV0YV9jb3VudCArPSBkaXJlY3Rpb25bXCJldGFzXCJdLmxlbmd0aDtcblxuXHRcdFx0XHRcdGlmIChkaXJlY3Rpb25bXCJldGFzXCJdLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdGlmICghZGlyZWN0aW9ucy5pbmNsdWRlcyhkaXJlY3Rpb25fdGl0bGUpKSB7XG5cdFx0XHRcdFx0XHRcdGRpcmVjdGlvbnMucHVzaChkaXJlY3Rpb25fdGl0bGUpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoIWRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0pIHtcblx0XHRcdFx0XHRcdFx0ZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb25bZGlyZWN0aW9uX3RpdGxlXSA9IFsgXTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uW1wiZXRhc1wiXS5mb3JFYWNoKCh0cmFpbikgPT4ge1xuXHRcdFx0XHRcdFx0XHR0cmFpbltcImxpbmVcIl0gPSBsaW5lW1wibmFtZVwiXTtcblx0XHRcdFx0XHRcdFx0ZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb25bZGlyZWN0aW9uX3RpdGxlXS5wdXNoKHRyYWluKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gU2UgbsO6bWVybyBkZSBwcsOzeGltYXMgcGFydGlkYXMgZm9yIHplcm8sXG5cdFx0XHQvLyBjb25mZXJlIHNlIGFpbmRhIGVzdMOhIGRlbnRybyBkbyBob3LDoXJpbyBkZSBmdW5jaW9uYW1lbnRvXG5cdFx0XHRpZiAoZXRhX2NvdW50ID09PSAwICYmIGVudiA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcblx0XHRcdFx0bGV0IG5vdyA9IG1vbWVudCgpO1xuXHRcdFx0XHRsZXQgb3BlcmF0aW9uX3N0YXJ0X3RpbWUgPSBtb21lbnQoXCIwNjowMFwiLCBcIkhIOm1tXCIpO1xuXHRcdFx0XHRsZXQgb3BlcmF0aW9uX2VuZF90aW1lID0gbW9tZW50KFwiMDA6MDBcIiwgXCJISDptbVwiKTtcblxuXHRcdFx0XHRpZiAobm93LmlzQWZ0ZXIob3BlcmF0aW9uX2VuZF90aW1lKSAmJiBub3cuaXNCZWZvcmUob3BlcmF0aW9uX3N0YXJ0X3RpbWUpKSB7XG5cdFx0XHRcdFx0JHBhbmVsW1wiaGVhZGVyXCJdW1widGl0bGVcIl0udGV4dChMMTBuW2xhbmd1YWdlXVtcIm91dC1vZi1vcGVyYXRpb25cIl0pO1xuXG5cdFx0XHRcdFx0JHBhbmVsW1wiY29udGVudFwiXVtcImNsb3NlZFwiXS5lbXB0eSgpO1xuXHRcdFx0XHRcdCQoXCI8aDEgLz5cIikudGV4dChMMTBuW2xhbmd1YWdlXVtcIm91dC1vZi1vcGVyYXRpb25cIl0pLmFwcGVuZFRvKCRwYW5lbFtcImNvbnRlbnRcIl1bXCJjbG9zZWRcIl0pO1xuXHRcdFx0XHRcdCQoXCI8cCAvPlwiKS5odG1sKEwxMG5bbGFuZ3VhZ2VdW1wib3BlcmF0aW9uLWhvdXJzXCJdKS5hcHBlbmRUbygkcGFuZWxbXCJjb250ZW50XCJdW1wiY2xvc2VkXCJdKTtcblx0XHRcdFx0XHQkKFwiPGkgLz5cIikuYWRkQ2xhc3MoXCJtYXRlcmlhbC1pY29uc1wiKS50ZXh0KFwiYWNjZXNzX3RpbWVcIikuYXBwZW5kVG8oJHBhbmVsW1wiY29udGVudFwiXVtcImNsb3NlZFwiXSk7XG5cdFx0XHRcdFx0JHBhbmVsLnJlbW92ZUNsYXNzKHN0YXRlX2NsYXNzZXMpLmFkZENsYXNzKFwiLXN0YXRlLS1jbG9zZWRcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRwYW5lbFtcImhlYWRlclwiXVtcInRpdGxlXCJdLnRleHQoTDEwbltsYW5ndWFnZV1bXCJuZXh0LWRlcGFydHVyZXNcIl0pO1xuXG5cdFx0XHRcdC8vIE1vbnRhIGFzIHBhcnRpZGFzXG5cdFx0XHRcdGxldCAkZGVwYXJ0dXJlcyA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGVwYXJ0dXJlc1wiKTtcblxuXHRcdFx0XHRkaXJlY3Rpb25zLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuXHRcdFx0XHRcdGxldCAkZGlyZWN0aW9uID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJkaXJlY3Rpb25cIikuYXBwZW5kVG8oJGRlcGFydHVyZXMpO1xuXHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGlyZWN0aW9uLWNhcHRpb25cIikudGV4dChMMTBuW2xhbmd1YWdlXVtcImRpcmVjdGlvblwiXSkuYXBwZW5kVG8oJGRpcmVjdGlvbik7XG5cblx0XHRcdFx0XHRsZXQgZXRhcyA9IGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl07XG5cdFx0XHRcdFx0ZXRhcy5zb3J0KChhLCBiKSA9PiB7IHJldHVybiBhW1wic2Vjb25kc1wiXSAtIGJbXCJzZWNvbmRzXCJdIH0pO1xuXG5cdFx0XHRcdFx0ZXRhcy5mb3JFYWNoKCh0cmFpbikgPT4ge1xuXHRcdFx0XHRcdFx0bGV0ICR0cmFpbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW5cIikuYXBwZW5kVG8oJGRpcmVjdGlvbik7XG5cdFx0XHRcdFx0XHRsZXQgJGxpbmUgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInRyYWluLWxpbmVcIikuYXBwZW5kVG8oJHRyYWluKTtcblx0XHRcdFx0XHRcdGxldCBpc19hcHByb2FjaGluZyA9IHRyYWluW1wic2Vjb25kc1wiXSA8IDMwO1xuXG5cdFx0XHRcdFx0XHRsZXQgbGluZSA9IGxpbmVfaW5kZXhbdHJhaW5bXCJsaW5lXCJdXTtcblx0XHRcdFx0XHRcdGxldCBkZXBhcnR1cmVfY291bnRkb3duID0gKGlzX2FwcHJvYWNoaW5nPyBMMTBuW2xhbmd1YWdlXVtcIm5vd1wiXSA6IE1hdGgucm91bmQodHJhaW5bXCJzZWNvbmRzXCJdIC8gNjApICsgXCI8c3Bhbj5taW48L3NwYW4+XCIpO1xuXHRcdFx0XHRcdFx0bGV0IGRlcGFydHVyZV90aW1lID0gbW9tZW50KHRyYWluW1wiYXJyaXZhbFRpbWVcIl0pLmZvcm1hdChcIkhIOm1tXCIpO1xuXG5cdFx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImxpbmUtc2hpZWxkXCIpLmNzcyhcImNvbG9yXCIsIGxpbmVbXCJjb2xvclwiXSkuYXR0cihcInRpdGxlXCIsIEwxMG5bbGFuZ3VhZ2VdW1wibGluZVwiXSArIFwiIFwiICsgbGluZVtcImlkXCJdKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSkudGV4dChsaW5lW1wiaWRcIl0pLmFwcGVuZFRvKCRsaW5lKTtcblx0XHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW4tZGlyZWN0aW9uXCIpLmF0dHIoXCJ0aXRsZVwiLCBMMTBuW2xhbmd1YWdlXVtcInRyYWluXCJdICsgXCIgXCIgKyB0cmFpbltcInRyYWluXCJdKS50ZXh0KGRpcmVjdGlvbikuYXBwZW5kVG8oJHRyYWluKTtcblx0XHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW4tZXRhXCIpLmF0dHIoXCJ0aXRsZVwiLCBkZXBhcnR1cmVfdGltZSkuaHRtbChkZXBhcnR1cmVfY291bnRkb3duKS5hcHBlbmRUbygkdHJhaW4pO1xuXG5cdFx0XHRcdFx0XHRpZiAoaXNfYXBwcm9hY2hpbmcpIHtcblx0XHRcdFx0XHRcdFx0JHRyYWluLmFkZENsYXNzKFwiLXN0YXRlLS1hcHByb2FjaGluZ1wiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bGFzdFVwZGF0ZWQoKTtcblxuXHRcdFx0XHQvLyBMaW1wYSBvIHBhaW5lbCBlIGluc2VyZSBvcyBub3ZvcyBkYWRvc1xuXHRcdFx0XHQkcGFuZWwucmVtb3ZlQ2xhc3Moc3RhdGVfY2xhc3NlcykuYWRkQ2xhc3MoXCItc3RhdGUtLXN0YXRpb25cIik7XG5cdFx0XHRcdCRwYW5lbFtcImNvbnRlbnRcIl1bXCJzdGF0aW9uXCJdLmVtcHR5KCkuYXBwZW5kKCRkZXBhcnR1cmVzKTtcblxuXHRcdFx0XHQvLyBBcyBwYXJhZGFzIFNldGUgZGUgU2V0ZW1icm8gZSBDb2xvbWJvIHPDo28gbXVpdG8gcHLDs3hpbWFzLCBlbnTDo28gw6kgY29tdW0gcXVlIGEgbG9jYWxpemHDp8Ojb1xuXHRcdFx0XHQvLyBkbyBHUFMgZG8gdXN1w6FyaW8gbGV2ZSDDoCBlc3Rhw6fDo28gZXJyYWRhLiBQb3IgaXNzbywgbmVzc2FzIHBhcmFkYXMsIMOpIG1vc3RyYWRvIHVtIGJvdMOjbyBwYXJhXG5cdFx0XHRcdC8vIGZhY2lsaXRhciBhIHRyb2NhIGRlIHBhcmFkYS4gTyBib3TDo28gc8OzIMOpIGV4aWJpZG8gcXVhbmRvIG8gdXN1w6FyaW8gdmVtIGRhIGxvY2FsaXphw6fDo29cblx0XHRcdFx0Ly8gYXV0b23DoXRpY2EgKG7Do28gbW9zdHJhIHNlIHBhcmFkYSBmb2kgZXNjb2xoaWRhIG5vIG1lbnUpXG5cdFx0XHRcdGlmIChmcm9tX2dwcyA9PT0gdHJ1ZSAmJiBbXCJzZXRlLWRlLXNldGVtYnJvXCIsIFwiY29sb21ib1wiXS5pbmNsdWRlcyhzdGF0aW9uW1wiaWRcIl0pKSB7XG5cdFx0XHRcdFx0bGV0IG9yaWdpbl9hbmRfZGVzdGluYXRpb24gPSB7XG5cdFx0XHRcdFx0XHRcInNldGUtZGUtc2V0ZW1icm9cIjoge1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJDb2xvbWJvXCIsXG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogXCJjb2xvbWJvXCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcImNvbG9tYm9cIjoge1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJTZXRlIGRlIFNldGVtYnJvXCIsXG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogXCJzZXRlLWRlLXNldGVtYnJvXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0bGV0IGRlc3RpbmF0aW9uID0gb3JpZ2luX2FuZF9kZXN0aW5hdGlvbltzdGF0aW9uW1wiaWRcIl1dO1xuXG5cdFx0XHRcdFx0bGV0ICRzdWdnZXN0aW9uID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJzdWdnZXN0aW9uXCIpO1xuXHRcdFx0XHRcdGxldCAkYnV0dG9uID0gJChcIjxhIC8+XCIpLmFkZENsYXNzKFwiYnV0dG9uXCIpLmF0dHIoXCJocmVmXCIsIFwiI1wiKS5hcHBlbmRUbygkc3VnZ2VzdGlvbik7XG5cdFx0XHRcdFx0JChcIjxpIC8+XCIpLmFkZENsYXNzKFwibWF0ZXJpYWwtaWNvbnNcIikudGV4dChcIm5lYXJfbWVcIikuYXBwZW5kVG8oJGJ1dHRvbik7XG5cdFx0XHRcdFx0JChcIjxzcGFuIC8+XCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJhcmUteW91LWF0XCJdKS5hcHBlbmRUbygkYnV0dG9uKTtcblx0XHRcdFx0XHQkKFwiPHN0cm9uZyAvPlwiKS50ZXh0KGRlc3RpbmF0aW9uW1wibmFtZVwiXSArIFwiP1wiKS5hcHBlbmRUbygkYnV0dG9uKTtcblxuXHRcdFx0XHRcdCRidXR0b24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRuZXh0RGVwYXJ0dXJlcyhkZXN0aW5hdGlvbik7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQkcGFuZWxbXCJjb250ZW50XCJdW1wic3RhdGlvblwiXS5hcHBlbmQoJHN1Z2dlc3Rpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGN1ZVtcImxvYWQtZGVwYXJ0dXJlc1wiXS5yZXNvbHZlKCk7XG5cdFx0fSk7XG5cdH07XG5cblxuXHQvLyBBdHVhbGl6YcOnw6NvXG5cdGNvbnN0IHVwZGF0ZVdpbmRvdyA9ICgpID0+IHtcblx0XHRpZiAoZG9jdW1lbnQuaGlkZGVuID09PSBmYWxzZSAmJiBuYXZpZ2F0b3Iub25MaW5lID09PSB0cnVlKSB7XG5cdFx0XHRsYXN0VXBkYXRlZCgpO1xuXHRcdFx0Z2V0RGF0YSgpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBDcmlhIG5vdm9zIGludGVydmFsb3MgZSBldmVudG9zXG5cdCQod2luZG93KS5vbihcIm9ubGluZS5kZXBhcnR1cmVzIHZpc2liaWxpdHljaGFuZ2UuZGVwYXJ0dXJlc1wiLCB1cGRhdGVXaW5kb3cpO1xuXHRjdWVbXCJpbnRlcnZhbC1kZXBhcnR1cmVzXCJdID0gc2V0SW50ZXJ2YWwoZ2V0RGF0YSwgMTUwMDApO1xuXHRjdWVbXCJpbnRlcnZhbC1sYXN0LXVwZGF0ZWRcIl0gPSBzZXRJbnRlcnZhbChsYXN0VXBkYXRlZCwgNTAwMCk7XG5cblx0Z2V0RGF0YSgpO1xufTtcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gc3lzdGVtIHN0YXR1cyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBQZWdhIG8gZXN0YWRvIGRvIHNpc3RlbWFcclxuY29uc3Qgc3lzdGVtU3RhdHVzID0gKCgpID0+IHtcclxuICAgIGN1ZVtcImxvYWQtZG9jdW1lbnRcIl0uZG9uZSgoKSA9PiB7XHJcbiAgICAgICAgY3VlW1wiaW50ZXJ2YWwtc3lzdGVtLXN0YXR1c1wiXSA9IHNldEludGVydmFsKGdldFN0YXR1cywgNjAgKiAxMDAwKTtcclxuICAgICAgICBnZXRTdGF0dXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBsYXN0X3N0YXR1cztcclxuXHJcbiAgICBjb25zdCBzdGF0ZV9jbGFzc2VzID0gW1xyXG4gICAgICAgIFwiLXN0YXRlLS1va1wiLFxyXG4gICAgICAgIFwiLXN0YXRlLS13YXJuaW5nXCJcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIFPDsyBjYXJyZWdhIHNlIGVzdGl2ZXIgZW0gZm9jbyBlIG9ubGluZVxyXG4gICAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4gPT09IHRydWUgfHwgbmF2aWdhdG9yLm9uTGluZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcblx0XHQkLmdldEpTT04oZW5kcG9pbnRzW1wic3RhdHVzXCJdLCB7XHJcbiAgICAgICAgICAgIFwiZW52XCI6IGVudlxyXG4gICAgICAgIH0pLmRvbmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGN1ZVtcImxvYWQtZGVwYXJ0dXJlc1wiXS5kb25lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5yZW1vdmVDbGFzcyhzdGF0ZV9jbGFzc2VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJzdGF0dXNcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJzdGF0dXNcIl0gPT09IFwiTm9ybWFsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdLmFkZENsYXNzKFwiLXN0YXRlLS1va1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0X3N0YXR1cyAhPT0gXCJOb3JtYWxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1wiaWNvblwiXS50ZXh0KFwiY2hlY2tfY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1widGV4dFwiXS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wic3RhdHVzLW9rXCJdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZV9oZWlnaHQgPSAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJ0ZXh0XCJdLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0uaGVpZ2h0KG1lc3NhZ2VfaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0ucmVtb3ZlQ2xhc3MoXCItbW9kZS0tY29sbGFwc2VkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5jc3MoXCJoZWlnaHRcIiwgXCJcIikuYWRkQ2xhc3MoXCItbW9kZS0tY29sbGFwc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdLmFkZENsYXNzKFwiLXN0YXRlLS13YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJpY29uXCJdLnRleHQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1widGV4dFwiXS5odG1sKHJlc3BvbnNlW1wibWVzc2FnZVwiXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZV9oZWlnaHQgPSAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJ0ZXh0XCJdLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5oZWlnaHQobWVzc2FnZV9oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3Rfc3RhdHVzID0gcmVzcG9uc2VbXCJzdGF0dXNcIl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkKHdpbmRvdykub24oXCJ2aXNpYmlsaXR5Y2hhbmdlLnN5c3RlbVN0YXR1c1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbGFzdF9zdGF0dXMgPSBudWxsO1xyXG4gICAgICAgIGdldFN0YXR1cygpO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIHN0YXRpb24gbGlzdCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3Qgc3RhdGlvbkxpc3QgPSAoKSA9PiB7XG5cdCRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdW1wic3RhdGlvbi1uYW1lXCJdLnRleHQoTDEwbltsYW5ndWFnZV1bXCJzdGF0aW9uc1wiXSk7XG5cdCRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdW1wicGxhY2Vob2xkZXJcIl0udGV4dChMMTBuW2xhbmd1YWdlXVtcInN0YXRpb25zXCJdKTtcblxuXHQvLyBCb3TDo28gcGFyYSBsb2NhbGl6YXIgZXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcblx0bGV0ICRuZWFyZXN0ID0gJChcIjxhIC8+XCIpXG5cdFx0LmF0dHIoXCJocmVmXCIsIFwiI1wiKVxuXHRcdC5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdCQoXCIuc3RhdGlvbnMgaDEgLnN0YXRpb24tbmFtZVwiKS50ZXh0KFwiXCIpO1xuXHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRcdGdldExvY2F0aW9uKCk7XG5cdFx0fSlcblx0XHQuYXBwZW5kVG8oJG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0pO1xuXHQkKFwiPGkgLz5cIikuYWRkQ2xhc3MoXCJtYXRlcmlhbC1pY29uc1wiKS50ZXh0KFwibmVhcl9tZVwiKS5hcHBlbmRUbygkbmVhcmVzdCk7XG5cdCQoXCI8c3BhbiAvPlwiKS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wiZmluZC1uZWFyZXN0LXN0YXRpb25cIl0pLmFwcGVuZFRvKCRuZWFyZXN0KTtcblxuXHQkKFwiPGxpIC8+XCIpLmFkZENsYXNzKFwibmVhcmVzdC1zdGF0aW9uXCIpLmFwcGVuZCgkbmVhcmVzdCkuYXBwZW5kVG8oJG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0pO1xuXG5cdC8vIE1vbnRhIGxpc3RhIGRlIGVzdGHDp8O1ZXNcblx0c3RhdGlvbnMuZm9yRWFjaCgoc3RhdGlvbikgPT4ge1xuXHRcdGxldCAkc3RhdGlvbiA9ICQoXCI8YSAvPlwiKS5hdHRyKFwiaHJlZlwiLCBcIiNcIiArIHN0YXRpb25bXCJpZFwiXSkuYXR0cihcImRhdGEtc3RhdGlvblwiLCBzdGF0aW9uW1wibmFtZVwiXSk7XG5cblx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInN0YXRpb24tbmFtZVwiKS50ZXh0KHN0YXRpb25bXCJuYW1lXCJdKS5hcHBlbmRUbygkc3RhdGlvbik7XG5cblx0XHRsZXQgJGxpbmVzID0gJChcIjx1bCAvPlwiKS5hZGRDbGFzcyhcInN0YXRpb24tbGluZXNcIikuYXBwZW5kVG8oJHN0YXRpb24pO1xuXHRcdGxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcblx0XHRcdGxldCAkbGluZSA9ICQoXCI8bGkgLz5cIikuYXBwZW5kVG8oJGxpbmVzKTtcblx0XHRcdGlmIChzdGF0aW9uW1wibGluZXNcIl0uaW5jbHVkZXMobGluZVtcImlkXCJdKSkge1xuXHRcdFx0XHRsZXQgJHNoaWVsZCA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwibGluZS1zaGllbGRcIikuY3NzKFwiY29sb3JcIiwgbGluZVtcImNvbG9yXCJdKS50ZXh0KGxpbmVbXCJpZFwiXSkuYXBwZW5kVG8oJGxpbmUpO1xuXG5cdFx0XHRcdGlmIChsaW5lW1wiZGlzYWJsZWRcIl0pIHtcblx0XHRcdFx0XHQkc2hpZWxkLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKS5hZGRDbGFzcyhcIi1zdGF0ZS0tZGlzYWJsZWRcIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmICghc3RhdGlvbltcImRpc2FibGVkXCJdKSB7XG5cdFx0XHQkc3RhdGlvbi5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRuZXh0RGVwYXJ0dXJlcyhzdGF0aW9uKTtcblx0XHRcdFx0JGJvZHkucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkc3RhdGlvbi5hZGRDbGFzcyhcIi1zdGF0ZS0tZGlzYWJsZWRcIik7XG5cdFx0XHQkc3RhdGlvbi5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0JChcIjxsaSAvPlwiKS5hcHBlbmQoJHN0YXRpb24pLmFwcGVuZFRvKCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXVtcInN0YXRpb25zXCJdKTtcblx0fSk7XG5cblx0Ly8gQXNzb2NpYSBvIGV2ZW50byBkZSBjbGljayBwYXJhIGFicmlyIG91IGZlY2hhciBhIGxpc3RhXG5cdCRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdCRib2R5LnRvZ2dsZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdH0pO1xuXG5cdCRwYW5lbFtcImhlYWRlclwiXS5vbihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAoJGJvZHkuaGFzQ2xhc3MoXCItbW9kZS0tbGlzdFwiKSkge1xuXHRcdFx0JGJvZHkucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIFNjcm9sbCBkZW50cm8gZGEgbGlzdGFcblx0JCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIChldmVudCkgPT4ge1xuXHRcdGxldCBzY3JvbGxfdG9wX3Bvc2l0aW9uID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0aWYgKHNjcm9sbF90b3BfcG9zaXRpb24gPj0gMTIpIHtcblx0XHRcdCRib2R5LmFkZENsYXNzKFwiLW1vZGUtLXNjcm9sbFwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGJvZHkucmVtb3ZlQ2xhc3MoXCItbW9kZS0tc2Nyb2xsXCIpO1xuXHRcdH1cblx0fSk7XG59O1xuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyB0aGVtZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmNvbnN0IHRoZW1lID0gKCgpID0+IHtcclxuICAgIGxldCB0aGVtZV9vcmRlciA9IFtcclxuICAgICAgICBcImF1dG9cIixcclxuICAgICAgICBcImxpZ2h0XCIsXHJcbiAgICAgICAgXCJkYXJrXCJcclxuICAgIF07XHJcblxyXG4gICAgbGV0IHRoZW1lX3NldHRpbmdzID0ge1xyXG4gICAgICAgIFwiYXV0b1wiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogTDEwbltsYW5ndWFnZV1bXCJhdXRvLXRoZW1lXCJdLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJicmlnaHRuZXNzX2F1dG9cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsaWdodFwiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogTDEwbltsYW5ndWFnZV1bXCJsaWdodC10aGVtZVwiXSxcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiYnJpZ2h0bmVzc181XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGFya1wiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogTDEwbltsYW5ndWFnZV1bXCJkYXJrLXRoZW1lXCJdLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJicmlnaHRuZXNzXzRcIlxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBzZXQgPSAobmV3X3RoZW1lLCBvbGRfdGhlbWUgPSBcIlwiKSA9PiB7XHJcbiAgICAgICAgY3VycmVudF90aGVtZSA9IG5ld190aGVtZTtcclxuXHJcbiAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWUgc3BhblwiKS50ZXh0KHRoZW1lX3NldHRpbmdzW25ld190aGVtZV1bXCJ0aXRsZVwiXSk7XHJcbiAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWUgaVwiKS50ZXh0KHRoZW1lX3NldHRpbmdzW25ld190aGVtZV1bXCJpY29uXCJdKTtcclxuXHJcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItdGhlbWUtLVwiICsgb2xkX3RoZW1lKS5hZGRDbGFzcyhcIi10aGVtZS0tXCIgKyBuZXdfdGhlbWUpO1xyXG5cclxuICAgICAgICAvLyBTYWx2YSBjb25maWd1cmHDp8OjbyBubyBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBpZiAobmV3X3RoZW1lID09PSBcImF1dG9cIikge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRoZW1lXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgbmV3X3RoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENvbmZlcmUgc2UgasOhIGjDoSB0ZW1hIHNhbHZvIG5vIGxvY2FsU3RvcmFnZS5cclxuICAgIC8vIFNlIG7Do28gaG91dmVyLCBwZWdhIG8gcGFkcsOjbyBkbyBzaXN0ZW1hXHJcbiAgICAvLyBsZXQgY3VycmVudF90aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgfHwgZ2V0Q29tcHV0ZWRTdHlsZSgkKFwiLnNldHRpbmdzIC5jdXJyZW50LXRoZW1lXCIpWzBdKS5nZXRQcm9wZXJ0eVZhbHVlKFwiY29udGVudFwiKS5yZXBsYWNlKC9cIi9nLCBcIlwiKTtcclxuICAgIGxldCBjdXJyZW50X3RoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSB8fCBcImF1dG9cIjtcclxuXHJcbiAgICBpZiAoY3VycmVudF90aGVtZSkge1xyXG4gICAgICAgIHNldChjdXJyZW50X3RoZW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghY3VycmVudF90aGVtZSkge1xyXG4gICAgICAgICAgICAkKFwiLnNldHRpbmdzIC50aGVtZSBzcGFuXCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJhdXRvLXRoZW1lXCJdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBEZXNjb2JyZSBhIHBvc2nDp8OjbyBkbyB0ZW1hIG5hIG9yZGVtXHJcbiAgICAgICAgICAgIGxldCB0aGVtZV9wb3NpdGlvbiA9IHRoZW1lX29yZGVyLmluZGV4T2YoY3VycmVudF90aGVtZSk7XHJcbiAgICAgICAgICAgIGxldCBuZXdfdGhlbWUgPSB0aGVtZV9vcmRlclt0aGVtZV9wb3NpdGlvbiArIDFdIHx8IHRoZW1lX29yZGVyWzBdO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0YSBvIG5vdm8gdGVtYVxyXG4gICAgICAgICAgICBzZXQobmV3X3RoZW1lLCBjdXJyZW50X3RoZW1lKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIHN0YXJ0IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuJChmdW5jdGlvbigpIHtcblx0JGJvZHkgPSAkKFwiYm9keVwiKTtcblxuXHQkbmF2aWdhdGlvbiA9ICQoXCIubmF2aWdhdGlvblwiKTtcblx0JG5hdmlnYXRpb25bXCJoZWFkZXJcIl0gPSAkKFwiLm5hdmlnYXRpb24taGVhZGVyXCIsICRuYXZpZ2F0aW9uKTtcblx0JG5hdmlnYXRpb25bXCJoZWFkZXJcIl1bXCJzdGF0aW9uLW5hbWVcIl0gPSAkKFwiLnN0YXRpb24tbmFtZVwiLCAkbmF2aWdhdGlvbltcImhlYWRlclwiXSk7XG5cdCRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdW1wicGxhY2Vob2xkZXJcIl0gPSAkKFwiLnBsYWNlaG9sZGVyXCIsICRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdKTtcblx0JG5hdmlnYXRpb25bXCJjb250ZW50XCJdID0gJChcIi5uYXZpZ2F0aW9uLWNvbnRlbnRcIiwgJG5hdmlnYXRpb24pO1xuXHQkbmF2aWdhdGlvbltcImNvbnRlbnRcIl1bXCJzdGF0aW9uc1wiXSA9ICQoXCIuc3RhdGlvbnNcIiwgJG5hdmlnYXRpb25bXCJjb250ZW50XCJdKTtcblxuXHQkcGFuZWwgPSAkKFwiLnBhbmVsXCIpO1xuXHQkcGFuZWxbXCJoZWFkZXJcIl0gPSAkKFwiLnBhbmVsLWhlYWRlclwiLCAkcGFuZWwpO1xuXHQkcGFuZWxbXCJoZWFkZXJcIl1bXCJ0aXRsZVwiXSA9ICQoXCIudGl0bGVcIiwgJHBhbmVsW1wiaGVhZGVyXCJdKTtcblx0JHBhbmVsW1wiaGVhZGVyXCJdW1wiYmFkZ2VcIl0gPSAkKFwiLmJhZGdlXCIsICRwYW5lbFtcImhlYWRlclwiXSk7XG5cdCRwYW5lbFtcImNvbnRlbnRcIl0gPSAkKFwiLnBhbmVsLWNvbnRlbnRcIiwgJHBhbmVsKTtcblx0JHBhbmVsW1wiY29udGVudFwiXVtcInN0YXRpb25cIl0gPSAkKFwiLnN0YXRpb25cIiwgJHBhbmVsW1wiY29udGVudFwiXSk7XG5cdCRwYW5lbFtcImNvbnRlbnRcIl1bXCJjbG9zZWRcIl0gPSAkKFwiLmNsb3NlZFwiLCAkcGFuZWxbXCJjb250ZW50XCJdKTtcblx0JHBhbmVsW1wiY29udGVudFwiXVtcInBlcm1pc3Npb25cIl0gPSAkKFwiLnBlcm1pc3Npb25cIiwgJHBhbmVsW1wiY29udGVudFwiXSk7XG5cdCRwYW5lbFtcImNvbnRlbnRcIl1bXCJsb2FkaW5nXCJdID0gJChcIi5sb2FkaW5nXCIsICRwYW5lbFtcImNvbnRlbnRcIl0pO1xuXHQkcGFuZWxbXCJmb290ZXJcIl0gPSAkKFwiLnBhbmVsLWZvb3RlclwiLCAkcGFuZWwpO1xuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0gPSAkKFwiLnN0YXR1c1wiLCAkcGFuZWxbXCJmb290ZXJcIl0pO1xuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJpY29uXCJdID0gJChcIi5pY29uXCIsICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXSk7XG5cdCRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXVtcInRleHRcIl0gPSAkKFwiLnRleHRcIiwgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdKTtcblx0JHBhbmVsW1wiZm9vdGVyXCJdW1wibmV0d29ya1wiXSA9ICQoXCIubmV0d29ya1wiLCAkcGFuZWxbXCJmb290ZXJcIl0pO1xuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdW1wiaWNvblwiXSA9ICQoXCIuaWNvblwiLCAkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdKTtcblx0JHBhbmVsW1wiZm9vdGVyXCJdW1wibmV0d29ya1wiXVtcInRleHRcIl0gPSAkKFwiLnRleHRcIiwgJHBhbmVsW1wiZm9vdGVyXCJdW1wibmV0d29ya1wiXSk7XG5cblx0Y3VlW1wibG9hZC1kb2N1bWVudFwiXS5yZXNvbHZlKCk7XG5cblx0Ly8gVHVkbyBjb21lw6dhIGFxdWkhXG5cdHN0YXRpb25MaXN0KCk7XG5cblx0Ly8gQ29uZmVyZSBzZSB1c3XDoXJpbyBqw6EgaGF2aWEgaGFiaWxpdGFkbyBnZW9sb2NhbGl6YcOnw6NvIGFudGVzXG5cdGlmIChcImdlb2xvY2F0aW9uXCIgaW4gbmF2aWdhdG9yKSB7XG5cdFx0JHBhbmVsW1wiY29udGVudFwiXVtcInBlcm1pc3Npb25cIl0uZmluZChcInNwYW5cIikudGV4dChMMTBuW2xhbmd1YWdlXVtcImZpbmQtbmVhcmVzdC1zdGF0aW9uXCJdKTtcblxuXHRcdGlmIChcInBlcm1pc3Npb25zXCIgaW4gbmF2aWdhdG9yKSB7XG5cdFx0XHRuYXZpZ2F0b3IucGVybWlzc2lvbnMucXVlcnkoeyBcIm5hbWVcIjogXCJnZW9sb2NhdGlvblwiIH0pLnRoZW4oKHBlcm1pc3Npb24pID0+IHtcblx0XHRcdFx0aWYgKHBlcm1pc3Npb25bXCJzdGF0ZVwiXSA9PT0gXCJncmFudGVkXCIpIHtcblx0XHRcdFx0XHQvLyBTZSBqw6EgdGl2ZXIsIHBlZ2EgYSBsb2NhbGl6YcOnw6NvIGF0dWFsIGUgcHJvY3VyYSBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYVxuXHRcdFx0XHRcdGdldExvY2F0aW9uKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAocGVybWlzc2lvbltcInN0YXRlXCJdID09PSBcImRlbmllZFwiKSB7XG5cdFx0XHRcdFx0Ly8gU2UgbsOjbyBmb2kgZGF0YSBwZXJtaXNzw6NvLCBhYnJlIGEgbGlzdGEgZGUgZXN0YcOnw7Vlc1xuXHRcdFx0XHRcdG5leHREZXBhcnR1cmVzKCk7XG5cdFx0XHRcdFx0JG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0uZmluZChcIi5uZWFyZXN0LXN0YXRpb25cIikuaGlkZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIFNlIG7Do28gdGl2ZXIsIG1vc3RyYSBib3TDo28gcGFyYSBzb2xpY2l0YXIgYXV0b3JpemHDp8Ojb1xuXHRcdFx0XHRcdCQoXCJib2R5XCIpLmFkZENsYXNzKFwiLW1vZGUtLWluaXRpYWxcIik7XG5cdFx0XHRcdFx0JHBhbmVsLmFkZENsYXNzKFwiLXN0YXRlLS1wZXJtaXNzaW9uXCIpO1xuXG5cdFx0XHRcdFx0JChcIi5idXR0b25cIiwgJHBhbmVsW1wiY29udGVudFwiXVtcInBlcm1pc3Npb25cIl0pLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0Z2V0TG9jYXRpb24odHJ1ZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRnZXRMb2NhdGlvbigpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBTZSBuw6NvIGhvdXZlciBnZW9sb2NhbGl6YcOnw6NvLCBhYnJlIGEgbGlzdGEgZGUgZXN0YcOnw7Vlc1xuXHRcdG5leHREZXBhcnR1cmVzKCk7XG5cdFx0JG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0uZmluZChcIi5uZWFyZXN0LXN0YXRpb25cIikuaGlkZSgpO1xuXHR9XG59KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gU2VydmljZSBXb3JrZXJcbmlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcblx0XHRjdWVbXCJzZXJ2aWNlLXdvcmtlclwiXSA9IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFwiL3NlcnZpY2Utd29ya2VyLmpzXCIpO1xuXG5cdFx0Y3VlW1wic2VydmljZS13b3JrZXJcIl0udGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIVwiLCByZWdpc3RyYXRpb24pO1xuXHRcdH0sIChlcnJvcikgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiBcIiwgZXJyb3IpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRXN0YWRvIGRhIGNvbmV4w6NvXG4kKGZ1bmN0aW9uKCkge1xuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdW1wiaWNvblwiXS50ZXh0KFwiY2xvdWRfb2ZmXCIpO1xuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdW1widGV4dFwiXS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wib2ZmbGluZVwiXSk7XG59KTtcblxuY29uc3QgdXBkYXRlQ29ubmVjdGlvblN0YXR1cyA9ICgpID0+IHtcblx0bGV0IGNvbm5lY3RlZCA9IG5hdmlnYXRvci5vbkxpbmU7XG5cblx0aWYgKGNvbm5lY3RlZCA9PT0gdHJ1ZSkge1xuXHRcdCRwYW5lbFtcImZvb3RlclwiXVtcIm5ldHdvcmtcIl0ucmVtb3ZlQ2xhc3MoXCItc3RhdGUtLW9mZmxpbmVcIik7XG5cdH0gZWxzZSB7XG5cdFx0JHBhbmVsW1wiZm9vdGVyXCJdW1wibmV0d29ya1wiXS5hZGRDbGFzcyhcIi1zdGF0ZS0tb2ZmbGluZVwiKTtcblx0fVxufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIiwgdXBkYXRlQ29ubmVjdGlvblN0YXR1cyk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9mZmxpbmVcIiwgdXBkYXRlQ29ubmVjdGlvblN0YXR1cyk7XG4iXX0=