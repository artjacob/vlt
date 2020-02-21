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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiLCJMMTBuLmpzIiwic3RhdGlvbi1pbmZvLmpzIiwibGluZS1pbmZvLmpzIiwiZ2V0LWxvY2F0aW9uLmpzIiwibmVhcmVzdC1zdGF0aW9uLmpzIiwibmV4dC1kZXBhcnR1cmVzLmpzIiwic3lzdGVtLXN0YXR1cy5qcyIsInN0YXRpb24tbGlzdC5qcyIsInRoZW1lLmpzIiwic3RhcnQuanMiXSwibmFtZXMiOlsiY3VlIiwiJGJvZHkiLCIkbmF2aWdhdGlvbiIsIiRwYW5lbCIsIiQiLCJEZWZlcnJlZCIsIm1vbWVudCIsInVwZGF0ZUxvY2FsZSIsImRlZmF1bHRfbGFuZ3VhZ2UiLCJhdmFpbGFibGVfbGFuZ3VhZ2VzIiwidXNlcl9sYW5ndWFnZSIsIm5hdmlnYXRvciIsImxhbmd1YWdlIiwic3Vic3RyIiwiaW5jbHVkZXMiLCJsb2NhbGUiLCJMMTBuIiwic3RhdGlvbnMiLCJzdGF0aW9uX2luZGV4IiwiZm9yRWFjaCIsInN0YXRpb24iLCJzdGF0aW9uX25hbWUiLCJsaW5lcyIsImxpbmVfaW5kZXgiLCJsaW5lIiwibGluZV9uYW1lIiwiZ2V0TG9jYXRpb24iLCJpc19pbml0aWFsIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsInJlbW92ZUNsYXNzIiwibmVhcmVzdF9zdGF0aW9uIiwibmVhcmVzdFN0YXRpb24iLCJuZXh0RGVwYXJ0dXJlcyIsImRlZzJyYWQiLCJkZWciLCJNYXRoIiwiUEkiLCJ1c2VyX2Nvb3JkaW5hdGVzIiwidXNlcl9sYXRpdHVkZSIsInVzZXJfbG9uZ2l0dWRlIiwiUiIsInNob3J0ZXN0X2Rpc3RhbmNlIiwic3RhdGlvbl9sYXRpdHVkZSIsInN0YXRpb25fbG9uZ2l0dWRlIiwieCIsImNvcyIsInkiLCJkaXN0YW5jZSIsInNxcnQiLCJmcm9tX2dwcyIsImRlcGFydHVyZXMiLCJhZGRDbGFzcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RhdGVfY2xhc3NlcyIsImNsZWFySW50ZXJ2YWwiLCJ3aW5kb3ciLCJvZmYiLCJ0ZXh0IiwiZW1wdHkiLCJmaW5kIiwibGFzdFVwZGF0ZWQiLCIkYmFkZ2UiLCJzZWNvbmRzX3NpbmNlX3VwZGF0ZSIsImRpZmYiLCJsYXN0X3VwZGF0ZWQiLCJmcm9tTm93IiwiYXBwZW5kIiwiZ2V0RGF0YSIsImRvY3VtZW50IiwiaGlkZGVuIiwib25MaW5lIiwiZ2V0SlNPTiIsImVuZHBvaW50cyIsImVudiIsImRvbmUiLCJyZXNwb25zZSIsImV0YV9jb3VudCIsImRpcmVjdGlvbnMiLCJkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbiIsImRpcmVjdGlvbiIsImRpcmVjdGlvbl90aXRsZSIsImxlbmd0aCIsInB1c2giLCJ0cmFpbiIsIm5vdyIsIm9wZXJhdGlvbl9zdGFydF90aW1lIiwib3BlcmF0aW9uX2VuZF90aW1lIiwiaXNBZnRlciIsImlzQmVmb3JlIiwiYXBwZW5kVG8iLCJodG1sIiwiJGRlcGFydHVyZXMiLCIkZGlyZWN0aW9uIiwiZXRhcyIsInNvcnQiLCJhIiwiYiIsIiR0cmFpbiIsIiRsaW5lIiwiaXNfYXBwcm9hY2hpbmciLCJkZXBhcnR1cmVfY291bnRkb3duIiwicm91bmQiLCJkZXBhcnR1cmVfdGltZSIsImZvcm1hdCIsImNzcyIsImF0dHIiLCJvcmlnaW5fYW5kX2Rlc3RpbmF0aW9uIiwiZGVzdGluYXRpb24iLCIkc3VnZ2VzdGlvbiIsIiRidXR0b24iLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNvbHZlIiwidXBkYXRlV2luZG93Iiwic2V0SW50ZXJ2YWwiLCJzeXN0ZW1TdGF0dXMiLCJnZXRTdGF0dXMiLCJsYXN0X3N0YXR1cyIsIm1lc3NhZ2VfaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJoZWlnaHQiLCJzZXRUaW1lb3V0Iiwic3RhdGlvbkxpc3QiLCIkbmVhcmVzdCIsIiRzdGF0aW9uIiwiJGxpbmVzIiwiJHNoaWVsZCIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJzY3JvbGxfdG9wX3Bvc2l0aW9uIiwic2Nyb2xsVG9wIiwidGhlbWUiLCJ0aGVtZV9vcmRlciIsInRoZW1lX3NldHRpbmdzIiwic2V0IiwibmV3X3RoZW1lIiwib2xkX3RoZW1lIiwiY3VycmVudF90aGVtZSIsInJlbW92ZUl0ZW0iLCJ0aGVtZV9wb3NpdGlvbiIsImluZGV4T2YiLCJwZXJtaXNzaW9ucyIsInF1ZXJ5IiwidGhlbiIsInBlcm1pc3Npb24iLCJoaWRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInJlZ2lzdHJhdGlvbiIsImVycm9yIiwidXBkYXRlQ29ubmVjdGlvblN0YXR1cyIsImNvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFBQSxHQUFBLEdBQUEsRUFBQSxDLENBQ0E7O0FBQ0EsSUFBQUMsS0FBQSxFQUFBQyxXQUFBLEVBQUFDLE1BQUE7QUFFQUgsR0FBQSxDQUFBLGVBQUEsQ0FBQSxHQUFBSSxDQUFBLENBQUFDLFFBQUEsRUFBQTtBQUNBTCxHQUFBLENBQUEsaUJBQUEsQ0FBQSxHQUFBSSxDQUFBLENBQUFDLFFBQUEsRUFBQSxDLENDVEE7QUFDQTtBQUNBO0FBRUE7O0FBQ0FDLE1BQUEsQ0FBQUMsWUFBQSxDQUFBLE9BQUEsRUFBQTtBQUNBLGtCQUFBO0FBQ0EsWUFBQTtBQURBO0FBREEsQ0FBQSxFLENBTUE7O0FBQ0EsSUFBQUMsZ0JBQUEsR0FBQSxJQUFBO0FBQ0EsSUFBQUMsbUJBQUEsR0FBQSxDQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxDQUFBO0FBQ0EsSUFBQUMsYUFBQSxHQUFBQyxTQUFBLENBQUFDLFFBQUEsR0FBQUQsU0FBQSxDQUFBQyxRQUFBLENBQUFDLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLEdBQUFMLGdCQUFBO0FBRUEsSUFBQUksUUFBQSxHQUFBSCxtQkFBQSxDQUFBSyxRQUFBLENBQUFKLGFBQUEsSUFBQUEsYUFBQSxHQUFBRixnQkFBQSxDLENBQ0E7O0FBRUEsSUFBQUksUUFBQSxLQUFBLElB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O0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQTFDQSxFQWtEQTtBQUNBLFVBQUEsWUFEQTtBQUVBLFFBQUEsWUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQWxEQSxFQTBEQTtBQUNBLFVBQUEsU0FEQTtBQUVBLFFBQUEsU0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBMURBLEVBa0VBO0FBQ0EsVUFBQSxtQkFEQTtBQUVBLFFBQUEsbUJBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FsRUEsRUEwRUE7QUFDQTtBQUNBLFVBQUEsa0JBRkE7QUFHQSxRQUFBLGtCQUhBO0FBSUE7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBTEE7QUFNQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQVBBLENBMUVBLEVBbUZBO0FBQ0EsVUFBQSxTQURBO0FBRUEsUUFBQSxTQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbkZBLEVBMkZBO0FBQ0EsVUFBQSxRQURBO0FBRUEsUUFBQSxRQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBM0ZBLEVBbUdBO0FBQ0EsVUFBQSxVQURBO0FBRUEsUUFBQSxVQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENB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RCxNQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUEsSUFBQUMsQ0FBQSxDQUFBLFFBQUEsRUFBQUQsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLElBQUFDLENBQUEsQ0FBQSxRQUFBLEVBQUFELE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLEdBQUFDLENBQUEsQ0FBQSxnQkFBQSxFQUFBRCxNQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFNBQUEsSUFBQUMsQ0FBQSxDQUFBLFVBQUEsRUFBQUQsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxRQUFBLElBQUFDLENBQUEsQ0FBQSxTQUFBLEVBQUFELE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsWUFBQSxJQUFBQyxDQUFBLENBQUEsYUFBQSxFQUFBRCxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFNBQUEsSUFBQUMsQ0FBQSxDQUFBLFVBQUEsRUFBQUQsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsR0FBQUMsQ0FBQSxDQUFBLGVBQUEsRUFBQUQsTUFBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLElBQUFDLENBQUEsQ0FBQSxTQUFBLEVBQUFELE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBLE1BQUEsSUFBQUMsQ0FBQSxDQUFBLE9BQUEsRUFBQUQsTUFBQSxDQUFBLFFB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QUFBLEVBQUEsQ0FDQTtBQUNBLEtBRkEsRUFFQSxVQUFBQyxLQUFBLEVBQUEsQ0FDQTtBQUNBLEtBSkE7QUFLQSxHQVJBO0FBU0EsQyxDQUVBO0FBQ0E7OztBQUNBdkosQ0FBQSxDQUFBLFlBQUE7QUFDQUQsRUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFNBQUEsRUFBQSxNQUFBLEVBQUEwRCxJQUFBLENBQUEsV0FBQTtBQUNBMUQsRUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFNBQUEsRUFBQSxNQUFBLEVBQUEwRCxJQUFBLENBQUE3QyxJQUFBLENBQUFKLFFBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQTtBQUNBLENBSEEsQ0FBQTs7QUFLQSxJQUFBZ0osc0JBQUEsR0FBQSxTQUFBQSxzQkFBQSxHQUFBO0FBQ0EsTUFBQUMsU0FBQSxHQUFBbEosU0FBQSxDQUFBK0QsTUFBQTs7QUFFQSxNQUFBbUYsU0FBQSxLQUFBLElBQUEsRUFBQTtBQUNBMUosSUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFNBQUEsRUFBQTRCLFdBQUEsQ0FBQSxpQkFBQTtBQUNBLEdBRkEsTUFFQTtBQUNBNUIsSUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFNBQUEsRUFBQWtELFFBQUEsQ0FBQSxpQkFBQTtBQUNBO0FBQ0EsQ0FSQTs7QUFVQU0sTUFBQSxDQUFBNEYsZ0JBQUEsQ0FBQSxRQUFBLEVBQUFLLHNCQUFBO0FBQ0FqRyxNQUFBLENBQUE0RixnQkFBQSxDQUFBLFNBQUEsRUFBQUssc0JBQUEiLCJmaWxlIjoidmx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBiYXNlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmxldCBjdWUgPSBbIF07XHJcbi8vIGxldCAkcGFuZWwsICRzdGF0aW9uLCAkcGVybWlzc2lvbiwgJG5ldHdvcmssICRzdGF0dXM7XHJcbmxldCAkYm9keSwgJG5hdmlnYXRpb24sICRwYW5lbDtcclxuXHJcbmN1ZVtcImxvYWQtZG9jdW1lbnRcIl0gPSAkLkRlZmVycmVkKCk7XHJcbmN1ZVtcImxvYWQtZGVwYXJ0dXJlc1wiXSA9ICQuRGVmZXJyZWQoKTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBsb2NhbGl6YXRpb24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIEFqdXN0ZXMgbmFzIHRyYWR1w6fDtWVzIGRvIE1vbWVudFxyXG5tb21lbnQudXBkYXRlTG9jYWxlKFwicHQtYnJcIiwge1xyXG5cdFwicmVsYXRpdmVUaW1lXCI6IHtcclxuXHRcdFwicGFzdFwiOiBcIiVzIGF0csOhc1wiXHJcblx0fVxyXG59KTtcclxuXHJcbi8vIERlZmluZSBvIGlkaW9tYVxyXG5jb25zdCBkZWZhdWx0X2xhbmd1YWdlID0gXCJlblwiO1xyXG5jb25zdCBhdmFpbGFibGVfbGFuZ3VhZ2VzID0gW1wicHRcIiwgXCJlblwiLCBcImVzXCJdO1xyXG5jb25zdCB1c2VyX2xhbmd1YWdlID0gKG5hdmlnYXRvci5sYW5ndWFnZSA/IG5hdmlnYXRvci5sYW5ndWFnZS5zdWJzdHIoMCwgMikgOiBkZWZhdWx0X2xhbmd1YWdlKTtcclxuXHJcbmNvbnN0IGxhbmd1YWdlID0gYXZhaWxhYmxlX2xhbmd1YWdlcy5pbmNsdWRlcyh1c2VyX2xhbmd1YWdlKSA/IHVzZXJfbGFuZ3VhZ2UgOiBkZWZhdWx0X2xhbmd1YWdlO1xyXG4vLyBjb25zdCBsYW5ndWFnZSA9IFwicHRcIjtcclxuXHJcbmlmIChsYW5ndWFnZSA9PT0gXCJwdFwiKSB7XHJcblx0bW9tZW50LmxvY2FsZShcInB0LWJyXCIpO1xyXG59IGVsc2Uge1xyXG5cdG1vbWVudC5sb2NhbGUobGFuZ3VhZ2UpO1xyXG59XHJcblxyXG4vLyBUcmFkdcOnw7Vlc1xyXG5jb25zdCBMMTBuID0ge1xyXG5cdFwicHRcIjoge1xyXG5cdFx0XCJuZXh0LWRlcGFydHVyZXNcIjogXCJQcsOzeGltb3MgdHJlbnNcIixcclxuXHRcdFwicmVhbC10aW1lXCI6IFwiVGVtcG8gcmVhbFwiLFxyXG5cdFx0XCJhcmUteW91LWF0XCI6IFwiRXN0w6EgZW1cIixcclxuXHRcdFwiZGlyZWN0aW9uXCI6IFwiU2VudGlkb1wiLFxyXG5cdFx0XCJub3dcIjogXCJBZ29yYVwiLFxyXG5cdFx0XCJ0cmFpblwiOiBcIlRyZW1cIixcclxuXHRcdFwibGluZVwiOiBcIkxpbmhhXCIsXHJcblx0XHRcInVwZGF0ZWRcIjogXCJBdHVhbGl6YWRvXCIsXHJcblx0XHRcIm91dC1vZi1vcGVyYXRpb25cIjogXCJGb3JhIGRlIG9wZXJhw6fDo29cIixcclxuXHRcdFwib3BlcmF0aW9uLWhvdXJzXCI6IFwiTyBWTFQgQ2FyaW9jYSBjaXJjdWxhPGJyPiB0b2RvcyBvcyBkaWFzIGRhcyA2aCDDoCAwaFwiLFxyXG5cdFx0XCJzdGF0aW9uc1wiOiBcIkVzdGHDp8O1ZXNcIixcclxuXHRcdFwiZmluZC1uZWFyZXN0LXN0YXRpb25cIjogXCJMb2NhbGl6YXIgZXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcIixcclxuXHRcdFwiYXV0by10aGVtZVwiOiBcIlRlbWEgYXV0b23DoXRpY29cIixcclxuXHRcdFwibGlnaHQtdGhlbWVcIjogXCJUZW1hIGNsYXJvXCIsXHJcblx0XHRcImRhcmstdGhlbWVcIjogXCJUZW1hIGVzY3Vyb1wiLFxyXG5cdFx0XCJvZmZsaW5lXCI6IFwiU2VtIGNvbmV4w6NvXCIsXHJcblx0XHRcInN0YXR1cy1va1wiOiBcIk9wZXJhw6fDo28gbm9ybWFsXCIsXHJcblx0fSxcclxuXHRcImVuXCI6IHtcclxuXHRcdFwibmV4dC1kZXBhcnR1cmVzXCI6IFwiTmV4dCB0cmFpbnNcIixcclxuXHRcdFwicmVhbC10aW1lXCI6IFwiUmVhbCB0aW1lXCIsXHJcblx0XHRcImFyZS15b3UtYXRcIjogXCJBcmUgeW91IGF0XCIsXHJcblx0XHRcImRpcmVjdGlvblwiOiBcIkRpcmVjdGlvblwiLFxyXG5cdFx0XCJub3dcIjogXCJOb3dcIixcclxuXHRcdFwidHJhaW5cIjogXCJUcmFpblwiLFxyXG5cdFx0XCJsaW5lXCI6IFwiTGluZVwiLFxyXG5cdFx0XCJ1cGRhdGVkXCI6IFwiVXBkYXRlZFwiLFxyXG5cdFx0XCJvdXQtb2Ytb3BlcmF0aW9uXCI6IFwiU2VydmljZSBjbG9zZWRcIixcclxuXHRcdFwib3BlcmF0aW9uLWhvdXJzXCI6IFwiVkxUIENhcmlvY2EgcnVuczxicj4gZGFpbHkgZnJvbSA2YW0gdG8gMTJhbVwiLFxyXG5cdFx0XCJzdGF0aW9uc1wiOiBcIlN0YXRpb25zXCIsXHJcblx0XHRcImZpbmQtbmVhcmVzdC1zdGF0aW9uXCI6IFwiRmluZCBuZWFyZXN0IHN0YXRpb25cIixcclxuXHRcdFwiYXV0by10aGVtZVwiOiBcIkF1dG8gdGhlbWVcIixcclxuXHRcdFwibGlnaHQtdGhlbWVcIjogXCJMaWdodCB0aGVtZVwiLFxyXG5cdFx0XCJkYXJrLXRoZW1lXCI6IFwiRGFyayB0aGVtZVwiLFxyXG5cdFx0XCJvZmZsaW5lXCI6IFwiT2ZmbGluZVwiLFxyXG5cdFx0XCJzdGF0dXMtb2tcIjogXCJOb3JtYWwgdHJhZmZpY1wiLFxyXG5cdH0sXHJcblx0XCJlc1wiOiB7XHJcblx0XHRcIm5leHQtZGVwYXJ0dXJlc1wiOiBcIlByw7N4aW1vcyB0cmVuZXNcIixcclxuXHRcdFwicmVhbC10aW1lXCI6IFwiVGllbXBvIHJlYWxcIixcclxuXHRcdFwiYXJlLXlvdS1hdFwiOiBcIsK/RXN0w6FzIGVuXCIsXHJcblx0XHRcImRpcmVjdGlvblwiOiBcIkRpcmVjY2nDs25cIixcclxuXHRcdFwibm93XCI6IFwiQWhvcmFcIixcclxuXHRcdFwidHJhaW5cIjogXCJUcmVuXCIsXHJcblx0XHRcImxpbmVcIjogXCJMw61uZWFcIixcclxuXHRcdFwidXBkYXRlZFwiOiBcIkFjdHVhbGl6YWRvXCIsXHJcblx0XHRcIm91dC1vZi1vcGVyYXRpb25cIjogXCJTZXJ2aWNpbyBjZXJyYWRvXCIsXHJcblx0XHRcIm9wZXJhdGlvbi1ob3Vyc1wiOiBcIlZMVCBDYXJpb2NhIGZ1bmNpb25hPGJyPiB0b2RvcyBsb3MgZMOtYXMgZGUgMDY6MDAgYSAwMDowMFwiLFxyXG5cdFx0XCJzdGF0aW9uc1wiOiBcIkVzdGFjaW9uZXNcIixcclxuXHRcdFwiZmluZC1uZWFyZXN0LXN0YXRpb25cIjogXCJFbmNvbnRyYXIgbGEgZXN0YWNpw7NuIG3DoXMgY2VyY2FuYVwiLFxyXG5cdFx0XCJhdXRvLXRoZW1lXCI6IFwiVGVtYSBhdXRvbcOhdGljb1wiLFxyXG5cdFx0XCJsaWdodC10aGVtZVwiOiBcIlRlbWEgY2xhcm9cIixcclxuXHRcdFwiZGFyay10aGVtZVwiOiBcIlRlbWEgb3NjdXJvXCIsXHJcblx0XHRcIm9mZmxpbmVcIjogXCJTaW4gY29uZXhpw7NuXCIsXHJcblx0XHRcInN0YXR1cy1va1wiOiBcIkNpcmN1bGFjacOzbiBub3JtYWxcIixcclxuXHR9XHJcbn07XHJcbiIsImxldCBzdGF0aW9ucyA9IFtcclxuXHR7XHJcblx0XHRcIm5hbWVcIjogXCJBbnRvbmlvIENhcmxvc1wiLFxyXG5cdFx0XCJpZFwiOiBcImFudG9uaW8tY2FybG9zXCIsXHJcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMiwgMzogMiB9LFxyXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkxMTMxNTM0NDM5MTMxOSwgLTQzLjE3MjA1MDk5NzU5ODI0MV0sXHJcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxyXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cclxuXHR9LFxyXG5cdHtcclxuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcclxuXHRcdFwibmFtZVwiOiBcIkNhbWVyaW5vXCIsXHJcblx0XHRcImlkXCI6IFwiY2FtZXJpbm9cIixcclxuXHRcdC8vIFwib3JkZXJcIjogeyAzOiA4IH0sXHJcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAxNjk4MDQ2MDIyMzgyLCAtNDMuMTgzOTgzNjE0OTMzNDg5XSxcclxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXHJcblx0XHRcImxpbmVzXCI6IFszXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJuYW1lXCI6IFwiQ2FuZGVsw6FyaWFcIixcclxuXHRcdFwiaWRcIjogXCJjYW5kZWxhcmlhXCIsXHJcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNiwgMzogNiB9LFxyXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMTcyNTAyOTM4NDI1OSwgLTQzLjE3ODgwODY2NTQxODY3MV0sXHJcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxyXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cclxuXHR9LFxyXG5cdHtcclxuXHRcdFwibmFtZVwiOiBcIkNhcmlvY2FcIixcclxuXHRcdFwiaWRcIjogXCJjYXJpb2NhXCIsXHJcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNCwgMzogNCB9LFxyXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNzQ4NDUwNzI1MjgxMSwgLTQzLjE3NjY0NTUxODAzODkxN10sXHJcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxyXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cclxuXHR9LFxyXG5cdHtcclxuXHRcdFwibmFtZVwiOiBcIkNlbnRyYWxcIixcclxuXHRcdFwiaWRcIjogXCJjZW50cmFsXCIsXHJcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogNSwgMzogMTAgfSxcclxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDI3MDQ5NjA3NDQ5NTIsIC00My4xOTI2MjUzMTQzNzczMzhdLFxyXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcclxuXHRcdFwibGluZXNcIjogWzIsIDNdXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIm5hbWVcIjogXCJDaWRhZGUgZG8gU2FtYmFcIixcclxuXHRcdFwiaWRcIjogXCJjaWRhZGUtZG8tc2FtYmFcIixcclxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMSB9LFxyXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NDE3OTk1NzEyODA2NywgLTQzLjE5Njg4NDA4MjA3ODQ3Nl0sXHJcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxyXG5cdFx0XCJsaW5lc1wiOiBbMV1cclxuXHR9LFxyXG5cdHtcclxuXHRcdFwibmFtZVwiOiBcIkNpbmVsw6JuZGlhXCIsXHJcblx0XHRcImlkXCI6IFwiY2luZWxhbmRpYVwiLFxyXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDMsIDM6IDMgfSxcclxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MTA3MzQwMDE4NDIyNDMsIC00My4xNzU0MjUzODczNjQ5MzJdLFxyXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcclxuXHRcdFwibGluZXNcIjogWzEsIDNdXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIm5hbWVcIjogXCJDb2xvbWJvXCIsXHJcblx0XHRcImlkXCI6IFwiY29sb21ib1wiLFxyXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDIgfSxcclxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDUxNzUyMTkwMDk0MTUsIC00My4xNzgwMTY5NjgyMjg4MThdLFxyXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcclxuXHRcdFwibGluZXNcIjogWzJdXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIm5hbWVcIjogXCJDb3JkZWlybyBkYSBHcmHDp2FcIixcclxuXHRcdFwiaWRcIjogXCJjb3JkZWlyby1kYS1ncmFjYVwiLFxyXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEzLCAyOiA4IH0sXHJcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3MTA0NjI5OTIzMTE3LCAtNDMuMjA0MTc4NDAzNTMzNzAzXSxcclxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXHJcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxyXG5cdFx0XCJuYW1lXCI6IFwiQ3Jpc3RpYW5vIE90dG9uaVwiLFxyXG5cdFx0XCJpZFwiOiBcImNyaXN0aWFuby1vdHRvbmlcIixcclxuXHRcdC8vIFwib3JkZXJcIjogeyAzOiA5IH0sXHJcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAzMDYxMjc4NDgwNjQ4LCAtNDMuMTkwNzQ5MTA5NDIxNDg5XSxcclxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXHJcblx0XHRcImxpbmVzXCI6IFsyLCAzXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJuYW1lXCI6IFwiRXF1YWRvclwiLFxyXG5cdFx0XCJpZFwiOiBcImVxdWFkb3JcIixcclxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxOCwgMjogMTEgfSxcclxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTc4OTQ1NjQ2ODc3ODIsIC00My4yMDQ4MDUwMTQ0NDA4MTVdLFxyXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcclxuXHRcdFwibGluZXNcIjogWzEsIDJdXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIm5hbWVcIjogXCJHYW1ib2FcIixcclxuXHRcdFwiaWRcIjogXCJnYW1ib2FcIixcclxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNiwgMjogNiB9LFxyXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5Nzk1OTQwODM3Mjg0NSwgLTQzLjE5OTMzNjY4MzI0NjMwMV0sXHJcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxyXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cclxuXHR9LFxyXG5cdHtcclxuXHRcdFwibmFtZVwiOiBcIkhhcm1vbmlhXCIsXHJcblx0XHRcImlkXCI6IFwiaGFybW9uaWFcIixcclxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNCB9LFxyXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NTc1NDQzNzI3MzM4NiwgLTQzLjE5MTQyNzYzOTU4NDQ5Nl0sXHJcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxyXG5cdFx0XCJsaW5lc1wiOiBbMV1cclxuXHR9LFxyXG5cdHtcclxuXHRcdFwibmFtZVwiOiBcIlBhcmFkYSBkb3MgTXVzZXVzXCIsXHJcblx0XHRcImlkXCI6IFwicGFyYWRhLWRvcy1tdXNldXNcIixcclxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA4IH0sXHJcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1OTQ2NTg2ODAyMjY0LCAtNDMuMTgxOTU1OTgwNTgxMjcyXSxcclxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXHJcblx0XHRcImxpbmVzXCI6IFsxXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJuYW1lXCI6IFwiUGFyYWRhIGRvcyBOYXZpb3NcIixcclxuXHRcdFwiaWRcIjogXCJwYXJhZGEtZG9zLW5hdmlvc1wiLFxyXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDkgfSxcclxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTQxMzk2MjUzMDM4NzUsIC00My4xODcxODE4MzA2MTc0NF0sXHJcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxyXG5cdFx0XCJsaW5lc1wiOiBbMV1cclxuXHR9LFxyXG5cdHtcclxuXHRcdFwibmFtZVwiOiBcIlBlcmVpcmEgUmVpc1wiLFxyXG5cdFx0XCJpZFwiOiBcInBlcmVpcmEtcmVpc1wiLFxyXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE3LCAyOiAxMCB9LFxyXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NjY0NzA2NDk2MDQzLCAtNDMuMjAxNzczMTExNTIzNTkzXSxcclxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXHJcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJuYW1lXCI6IFwiUHJhw6dhIFhWXCIsXHJcblx0XHRcImlkXCI6IFwicHJhY2EteHZcIixcclxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAxIH0sXHJcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAyMDcwMTI4OTQ1ODQ4LCAtNDMuMTczMTE3Mzk1NzgzODc2XSxcclxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXHJcblx0XHRcImxpbmVzXCI6IFsyXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJuYW1lXCI6IFwiUHJhaWEgRm9ybW9zYVwiLFxyXG5cdFx0XCJpZFwiOiBcInByYWlhLWZvcm1vc2FcIixcclxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMCwgMjogMTMgfSxcclxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDMxNzcxNTIzODgwNTcsIC00My4yMDgxNjE5NjQ5MDIzMDNdLFxyXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcclxuXHRcdFwibGluZXNcIjogWzEsIDJdXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIm5hbWVcIjogXCJQcm92aWTDqm5jaWFcIixcclxuXHRcdFwiaWRcIjogXCJwcm92aWRlbmNpYVwiLFxyXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE1IH0sXHJcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3NDg5OTIyMDE0MzgzLCAtNDMuMTk2NzAxNDAwODkwMDM1XSxcclxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXHJcblx0XHRcImxpbmVzXCI6IFsxXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJuYW1lXCI6IFwiUm9kb3Zpw6FyaWFcIixcclxuXHRcdFwiaWRcIjogXCJyb2RvdmlhcmlhXCIsXHJcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTksIDI6IDEyIH0sXHJcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk4ODA1NTc0MjUxNzk5LCAtNDMuMjA3MzQyOTQxNDc1OTg2XSxcclxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXHJcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJuYW1lXCI6IFwiU2FhcmFcIixcclxuXHRcdFwiaWRcIjogXCJzYWFyYVwiLFxyXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDQgfSxcclxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDU5MTIxMDg0NjAyNTMsIC00My4xODczMjA3ODIyMjgyMDVdLFxyXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcclxuXHRcdFwibGluZXNcIjogWzJdXHJcblx0fSxcclxuXHR7XHJcblx0XHQvLyBcImRpc2FibGVkXCI6IHRydWUsXHJcblx0XHRcIm5hbWVcIjogXCJTYW50YSBSaXRhXCIsXHJcblx0XHRcImlkXCI6IFwic2FudGEtcml0YVwiLFxyXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDM6IDcgfSxcclxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDA1OTQxNjc0MTA2NDksIC00My4xODE1MDkwNDk4NTQyMDZdLFxyXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcclxuXHRcdFwibGluZXNcIjogWzNdXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIm5hbWVcIjogXCJTYW50byBDcmlzdG9cIixcclxuXHRcdFwiaWRcIjogXCJzYW50by1jcmlzdG9cIixcclxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMiwgMjogNyB9LFxyXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NTMyNzI4MjAwMjE0NiwgLTQzLjIwMDI1OTE4MTc1NTc0XSxcclxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXHJcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJuYW1lXCI6IFwiU2FudG9zIER1bW9udFwiLFxyXG5cdFx0XCJpZFwiOiBcInNhbnRvcy1kdW1vbnRcIixcclxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxLCAzOiAxIH0sXHJcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTEyMjg2ODc0OTYyNDAxLCAtNDMuMTY3NjMyMjU5NTQ1ODRdLFxyXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcclxuXHRcdFwibGluZXNcIjogWzEsIDNdXHJcblx0fSxcclxuXHR7XHJcblx0XHRcIm5hbWVcIjogXCJTw6NvIEJlbnRvXCIsXHJcblx0XHRcImlkXCI6IFwic2FvLWJlbnRvXCIsXHJcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNyB9LFxyXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5ODY0ODA5NjA1MTAxMiwgLTQzLjE3OTk2NDMxMTc2NDg4NF0sXHJcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxyXG5cdFx0XCJsaW5lc1wiOiBbMV1cclxuXHR9LFxyXG5cdHtcclxuXHRcdFwibmFtZVwiOiBcIlNldGUgZGUgU2V0ZW1icm9cIixcclxuXHRcdFwiaWRcIjogXCJzZXRlLWRlLXNldGVtYnJvXCIsXHJcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNSwgMzogNSB9LFxyXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNTMwNTkwMDk3Nzg5NywgLTQzLjE3NzQ2MzgxNjM0NjkyMl0sXHJcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxyXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cclxuXHR9LFxyXG5cdHtcclxuXHRcdFwibmFtZVwiOiBcIlRpcmFkZW50ZXNcIixcclxuXHRcdFwiaWRcIjogXCJ0aXJhZGVudGVzXCIsXHJcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogMyB9LFxyXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNjU3ODIyMjAyNjExNiwgLTQzLjE4Mjg1NDIzNjU1NzgwMl0sXHJcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxyXG5cdFx0XCJsaW5lc1wiOiBbMl1cclxuXHR9LFxyXG5cdHtcclxuXHRcdFwibmFtZVwiOiBcIlV0b3BpYSBBcXVhUmlvXCIsXHJcblx0XHRcImlkXCI6IFwidXRvcGlhLWFxdWFyaW9cIixcclxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMCB9LFxyXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5MzA5NTQ3MTk5OTYxMiwgLTQzLjE5MDIzNjkwNzIxMzIxOV0sXHJcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxyXG5cdFx0XCJsaW5lc1wiOiBbMV1cclxuXHR9LFxyXG5cdHtcclxuXHRcdFwibmFtZVwiOiBcIlZpbGEgT2zDrW1waWNhXCIsXHJcblx0XHRcImlkXCI6IFwidmlsYS1vbGltcGljYVwiLFxyXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDkgfSxcclxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTkwNTY1NzI2NDY1MzMsIC00My4xOTk2NDM1Mjk0OTUyOTddLFxyXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcclxuXHRcdFwibGluZXNcIjogWzJdXHJcblx0fVxyXG5dO1xyXG5cclxubGV0IHN0YXRpb25faW5kZXggPSB7IH07XHJcbnN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcclxuXHRsZXQgc3RhdGlvbl9uYW1lID0gc3RhdGlvbltcIm5hbWVcIl07XHJcblx0c3RhdGlvbl9pbmRleFtzdGF0aW9uX25hbWVdID0gc3RhdGlvbjtcclxufSk7XHJcbiIsImxldCBsaW5lcyA9IFtcclxuXHR7XHJcblx0XHRcImlkXCI6IDEsXHJcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAxXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiIzY4YjlmYlwiLFxyXG5cdFx0Ly8gXCJkaXJlY3Rpb25zXCI6IFtcclxuXHRcdC8vIFx0XCJTYW50b3MgRHVtb250XCIsXHJcblx0XHQvLyBcdFwiUHJhaWEgRm9ybW9zYVwiXHJcblx0XHQvLyBdXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImlkXCI6IDIsXHJcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAyXCIsXHJcblx0XHRcImNvbG9yXCI6IFwiIzczY2EzZlwiLFxyXG5cdFx0Ly8gXCJkaXJlY3Rpb25zXCI6IFtcclxuXHRcdC8vIFx0XCJQcmHDp2EgWFZcIixcclxuXHRcdC8vIFx0XCJQcmFpYSBGb3Jtb3NhXCJcclxuXHRcdC8vIF1cclxuXHR9LFxyXG5cdHtcclxuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcclxuXHRcdFwiaWRcIjogMyxcclxuXHRcdFwibmFtZVwiOiBcIkxpbmhhIDNcIixcclxuXHRcdFwiY29sb3JcIjogXCIjZjNhMjMwXCIsXHJcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xyXG5cdFx0Ly8gXHRcIlNhbnRvcyBEdW1vbnRcIixcclxuXHRcdC8vIFx0XCJDZW50cmFsXCJcclxuXHRcdC8vIF1cclxuXHR9XHJcbl07XHJcblxyXG5sZXQgbGluZV9pbmRleCA9IHsgfTtcclxubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xyXG5cdGxldCBsaW5lX25hbWUgPSBsaW5lW1wibmFtZVwiXTtcclxuXHRsaW5lX2luZGV4W2xpbmVfbmFtZV0gPSBsaW5lO1xyXG59KTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBnZXQgbG9jYXRpb24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIFBlZ2EgYSBsb2NhbGl6YcOnw6NvIGRvIHVzdcOhcmlvXHJcbmNvbnN0IGdldExvY2F0aW9uID0gKGlzX2luaXRpYWwgPSBmYWxzZSkgPT4ge1xyXG5cdG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XHJcblxyXG5cdFx0Ly8gU2UgdmllciBkbyBtb2RvIGluaWNpYWwsIGVuY2VycmEgZWxlXHJcblx0XHRpZiAoaXNfaW5pdGlhbCkge1xyXG5cdFx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1pbml0aWFsXCIpO1xyXG5cdFx0XHQkcGFuZWwucmVtb3ZlQ2xhc3MoXCItc3RhdGUtLXBlcm1pc3Npb25cIik7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gRGVzY29icmUgYSBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYSBlIHByb2N1cmEgYXMgcHLDs3hpbWFzIHBhcnRpZGFzXHJcblx0XHRsZXQgbmVhcmVzdF9zdGF0aW9uID0gbmVhcmVzdFN0YXRpb24oW3Bvc2l0aW9uW1wiY29vcmRzXCJdW1wibGF0aXR1ZGVcIl0sIHBvc2l0aW9uW1wiY29vcmRzXCJdW1wibG9uZ2l0dWRlXCJdXSk7XHJcblx0XHRuZXh0RGVwYXJ0dXJlcyhuZWFyZXN0X3N0YXRpb24sIHRydWUpO1xyXG5cdH0pO1xyXG59O1xyXG4iLCIvLyBFc3Rhw6fDo28gbWFpcyBwcsOzeGltYVxyXG5jb25zdCBkZWcycmFkID0gKGRlZykgPT4ge1xyXG5cdHJldHVybiBkZWcgKiAoTWF0aC5QSSAvIDE4MCk7XHJcbn07XHJcblxyXG5jb25zdCBuZWFyZXN0U3RhdGlvbiA9ICh1c2VyX2Nvb3JkaW5hdGVzKSA9PiB7XHJcblx0Y29uc3QgdXNlcl9sYXRpdHVkZSA9IGRlZzJyYWQodXNlcl9jb29yZGluYXRlc1swXSk7XHJcblx0Y29uc3QgdXNlcl9sb25naXR1ZGUgPSBkZWcycmFkKHVzZXJfY29vcmRpbmF0ZXNbMV0pO1xyXG5cclxuXHRjb25zdCBSID0gNjM3MTtcclxuXHJcblx0bGV0IHNob3J0ZXN0X2Rpc3RhbmNlID0gbnVsbDtcclxuXHRsZXQgbmVhcmVzdF9zdGF0aW9uID0gbnVsbDtcclxuXHJcblx0c3RhdGlvbnMuZm9yRWFjaCgoc3RhdGlvbikgPT4ge1xyXG5cdFx0aWYgKCFzdGF0aW9uW1wiZGlzYWJsZWRcIl0pIHtcclxuXHRcdFx0Y29uc3Qgc3RhdGlvbl9sYXRpdHVkZSA9IGRlZzJyYWQoc3RhdGlvbltcImNvb3JkaW5hdGVzXCJdWzBdKTtcclxuXHRcdFx0Y29uc3Qgc3RhdGlvbl9sb25naXR1ZGUgPSBkZWcycmFkKHN0YXRpb25bXCJjb29yZGluYXRlc1wiXVsxXSk7XHJcblxyXG5cdFx0XHRjb25zdCB4ID0gKHN0YXRpb25fbG9uZ2l0dWRlIC0gdXNlcl9sb25naXR1ZGUpICogTWF0aC5jb3MoKHVzZXJfbGF0aXR1ZGUgKyBzdGF0aW9uX2xhdGl0dWRlKSAvIDIpO1xyXG5cdFx0XHRjb25zdCB5ID0gKHN0YXRpb25fbGF0aXR1ZGUgLSB1c2VyX2xhdGl0dWRlKTtcclxuXHRcdFx0Y29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSkgKiBSO1xyXG5cclxuXHRcdFx0aWYgKCFzaG9ydGVzdF9kaXN0YW5jZSB8fCBkaXN0YW5jZSA8IHNob3J0ZXN0X2Rpc3RhbmNlKSB7XHJcblx0XHRcdFx0c2hvcnRlc3RfZGlzdGFuY2UgPSBkaXN0YW5jZTtcclxuXHRcdFx0XHRuZWFyZXN0X3N0YXRpb24gPSBzdGF0aW9uO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiBuZWFyZXN0X3N0YXRpb247XHJcbn07XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gbmV4dCBkZXBhcnR1cmVzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBQcsOzeGltYXMgcGFydGlkYXNcclxuY29uc3QgbmV4dERlcGFydHVyZXMgPSAoc3RhdGlvbiwgZnJvbV9ncHMgPSBmYWxzZSkgPT4ge1xyXG5cdGxldCBkZXBhcnR1cmVzO1xyXG5cclxuXHQvLyBTZSBuw6NvIGZvciBwYXNzYWRhIGEgZXN0YcOnw6NvLCBhYnJlIGxpc3RhIGRlIGVzdGHDp8O1ZXNcclxuXHRpZiAoIXN0YXRpb24pIHtcclxuXHRcdCRib2R5LmFkZENsYXNzKFwiLW1vZGUtLWxpc3RcIik7XHJcblx0XHRzdGF0aW9uID0gc3RhdGlvbl9pbmRleFtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhc3Qtc3RhdGlvblwiKSB8fCBcIkNlbnRyYWxcIl07XHJcblx0fVxyXG5cclxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxhc3Qtc3RhdGlvblwiLCBzdGF0aW9uW1wibmFtZVwiXSk7XHJcblxyXG5cdGNvbnN0IHN0YXRlX2NsYXNzZXMgPSBbXHJcblx0XHRcIi1zdGF0ZS0tc3RhdGlvblwiLFxyXG5cdFx0XCItc3RhdGUtLWxvYWRpbmdcIixcclxuXHRcdFwiLXN0YXRlLS1jbG9zZWRcIixcclxuXHRcdFwiLXN0YXRlLS1wZXJtaXNzaW9uXCJcclxuXHRdO1xyXG5cclxuXHQvLyBEZXNsaWdhIGludGVydmFsb3MgZSBldmVudG9zIGV4aXN0ZW50ZXNcclxuXHRjbGVhckludGVydmFsKGN1ZVtcImludGVydmFsLWRlcGFydHVyZXNcIl0pO1xyXG5cdGNsZWFySW50ZXJ2YWwoY3VlW1wiaW50ZXJ2YWwtbGFzdC11cGRhdGVkXCJdKTtcclxuXHQkKHdpbmRvdykub2ZmKFwidmlzaWJpbGl0eWNoYW5nZS5kZXBhcnR1cmVzIG9ubGluZS5kZXBhcnR1cmVzXCIpO1xyXG5cclxuXHQvLyBNb3N0cmEgYW5pbWHDp8OjbyBkZSBsb2FkXHJcblx0JHBhbmVsLnJlbW92ZUNsYXNzKHN0YXRlX2NsYXNzZXMpLmFkZENsYXNzKFwiLXN0YXRlLS1sb2FkaW5nXCIpO1xyXG5cclxuXHQvLyBDb2xvY2EgbyBub21lIGRhIGVzdGHDp8OjbyBubyBhcHBiYXJcclxuXHQkbmF2aWdhdGlvbltcImhlYWRlclwiXVtcInN0YXRpb24tbmFtZVwiXS50ZXh0KHN0YXRpb25bXCJuYW1lXCJdKTtcclxuXHQkcGFuZWxbXCJoZWFkZXJcIl1bXCJ0aXRsZVwiXS5lbXB0eSgpO1xyXG5cclxuXHQvLyBEZWl4YSBhIGVzdGHDp8OjbyBzZWxlY2lvbmFkYSBuYSBsaXN0YVxyXG5cdCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXVtcInN0YXRpb25zXCJdLmZpbmQoXCJhXCIpLnJlbW92ZUNsYXNzKFwiLXN0YXRlLS1zZWxlY3RlZFwiKTtcclxuXHQkbmF2aWdhdGlvbltcImNvbnRlbnRcIl1bXCJzdGF0aW9uc1wiXS5maW5kKFwiYVtkYXRhLXN0YXRpb249J1wiICsgc3RhdGlvbltcIm5hbWVcIl0gKyBcIiddXCIpLmFkZENsYXNzKFwiLXN0YXRlLS1zZWxlY3RlZFwiKTtcclxuXHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdC8vIEF0dWFsaXphw6fDo29cclxuXHRjb25zdCBsYXN0VXBkYXRlZCA9ICgpID0+IHtcclxuXHRcdGxldCAkYmFkZ2UgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInN0YXR1cy1iYWRnZVwiKTtcclxuXHJcblx0XHQvLyBUZW1wbyBlbSBzZWd1bmRvcyBkZXNkZSBhIMO6bHRpbWEgYXR1YWxpemHDp8Ojb1xyXG5cdFx0bGV0IHNlY29uZHNfc2luY2VfdXBkYXRlID0gbW9tZW50KCkuZGlmZihkZXBhcnR1cmVzW1wibGFzdFVwZGF0ZWRcIl0sIFwic2Vjb25kc1wiKTtcclxuXHJcblx0XHQvLyBTZSB0aXZlciBzaWRvIGF0dWFsaXphZG8gaMOhIG1lbm9zIGRlIDYwIHNlZ3VuZG9zLCBtb3N0cmEgVGVtcG8gUmVhbFxyXG5cdFx0aWYgKHNlY29uZHNfc2luY2VfdXBkYXRlIDw9IDYwKSB7XHJcblx0XHRcdCRiYWRnZS5hZGRDbGFzcyhcIi1zdGF0ZS0tcmVhbC10aW1lXCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJyZWFsLXRpbWVcIl0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0IGxhc3RfdXBkYXRlZCA9IEwxMG5bbGFuZ3VhZ2VdW1widXBkYXRlZFwiXSArIFwiIFwiICsgbW9tZW50KGRlcGFydHVyZXNbXCJsYXN0VXBkYXRlZFwiXSkuZnJvbU5vdygpO1xyXG5cdFx0XHQkYmFkZ2UudGV4dChsYXN0X3VwZGF0ZWQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRwYW5lbFtcImhlYWRlclwiXVtcImJhZGdlXCJdLmVtcHR5KCkuYXBwZW5kKCRiYWRnZSk7XHJcblx0fTtcclxuXHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdC8vIENvbnN1bHRhIGRvcyBkYWRvc1xyXG5cdGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XHJcblx0XHQvLyBTw7MgY2FycmVnYSBzZSBlc3RpdmVyIGVtIGZvY28gZSBvbmxpbmVcclxuXHRcdGlmIChkb2N1bWVudC5oaWRkZW4gPT09IHRydWUgfHwgbmF2aWdhdG9yLm9uTGluZSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENhcnJlZ2Egb3MgZGFkb3NcclxuXHRcdCQuZ2V0SlNPTihlbmRwb2ludHNbXCJkZXBhcnR1cmVzXCJdLCB7XHJcblx0XHRcdFwic3RhdGlvblwiOiBzdGF0aW9uW1wiaWRcIl0sXHJcblx0XHRcdFwiZW52XCI6IGVudlxyXG5cdFx0fSkuZG9uZSgocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0ZGVwYXJ0dXJlcyA9IHJlc3BvbnNlO1xyXG5cclxuXHRcdFx0bGV0IGV0YV9jb3VudCA9IDA7XHJcblx0XHRcdGxldCBkaXJlY3Rpb25zID0gWyBdO1xyXG5cdFx0XHRsZXQgZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb24gPSB7IH07XHJcblxyXG5cdFx0XHQvLyBPcmdhbml6YSBhcyBwYXJ0aWRhcyBwb3IgZGVzdGlub1xyXG5cdFx0XHRkZXBhcnR1cmVzW1wibGluZXNcIl0uZm9yRWFjaCgobGluZSkgPT4ge1xyXG5cdFx0XHRcdGxpbmVbXCJkaXJlY3Rpb25zXCJdLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IGRpcmVjdGlvbl90aXRsZSA9IGRpcmVjdGlvbltcIm5hbWVcIl07XHJcblx0XHRcdFx0XHRldGFfY291bnQgKz0gZGlyZWN0aW9uW1wiZXRhc1wiXS5sZW5ndGg7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGRpcmVjdGlvbltcImV0YXNcIl0ubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIWRpcmVjdGlvbnMuaW5jbHVkZXMoZGlyZWN0aW9uX3RpdGxlKSkge1xyXG5cdFx0XHRcdFx0XHRcdGRpcmVjdGlvbnMucHVzaChkaXJlY3Rpb25fdGl0bGUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIWRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0pIHtcclxuXHRcdFx0XHRcdFx0XHRkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbltkaXJlY3Rpb25fdGl0bGVdID0gWyBdO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRkaXJlY3Rpb25bXCJldGFzXCJdLmZvckVhY2goKHRyYWluKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dHJhaW5bXCJsaW5lXCJdID0gbGluZVtcIm5hbWVcIl07XHJcblx0XHRcdFx0XHRcdFx0ZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb25bZGlyZWN0aW9uX3RpdGxlXS5wdXNoKHRyYWluKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gU2UgbsO6bWVybyBkZSBwcsOzeGltYXMgcGFydGlkYXMgZm9yIHplcm8sXHJcblx0XHRcdC8vIGNvbmZlcmUgc2UgYWluZGEgZXN0w6EgZGVudHJvIGRvIGhvcsOhcmlvIGRlIGZ1bmNpb25hbWVudG9cclxuXHRcdFx0aWYgKGV0YV9jb3VudCA9PT0gMCAmJiBlbnYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcblx0XHRcdFx0bGV0IG5vdyA9IG1vbWVudCgpO1xyXG5cdFx0XHRcdGxldCBvcGVyYXRpb25fc3RhcnRfdGltZSA9IG1vbWVudChcIjA2OjAwXCIsIFwiSEg6bW1cIik7XHJcblx0XHRcdFx0bGV0IG9wZXJhdGlvbl9lbmRfdGltZSA9IG1vbWVudChcIjAwOjAwXCIsIFwiSEg6bW1cIik7XHJcblxyXG5cdFx0XHRcdGlmIChub3cuaXNBZnRlcihvcGVyYXRpb25fZW5kX3RpbWUpICYmIG5vdy5pc0JlZm9yZShvcGVyYXRpb25fc3RhcnRfdGltZSkpIHtcclxuXHRcdFx0XHRcdCRwYW5lbFtcImhlYWRlclwiXVtcInRpdGxlXCJdLnRleHQoTDEwbltsYW5ndWFnZV1bXCJvdXQtb2Ytb3BlcmF0aW9uXCJdKTtcclxuXHJcblx0XHRcdFx0XHQkcGFuZWxbXCJjb250ZW50XCJdW1wiY2xvc2VkXCJdLmVtcHR5KCk7XHJcblx0XHRcdFx0XHQkKFwiPGgxIC8+XCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJvdXQtb2Ytb3BlcmF0aW9uXCJdKS5hcHBlbmRUbygkcGFuZWxbXCJjb250ZW50XCJdW1wiY2xvc2VkXCJdKTtcclxuXHRcdFx0XHRcdCQoXCI8cCAvPlwiKS5odG1sKEwxMG5bbGFuZ3VhZ2VdW1wib3BlcmF0aW9uLWhvdXJzXCJdKS5hcHBlbmRUbygkcGFuZWxbXCJjb250ZW50XCJdW1wiY2xvc2VkXCJdKTtcclxuXHRcdFx0XHRcdCQoXCI8aSAvPlwiKS5hZGRDbGFzcyhcIm1hdGVyaWFsLWljb25zXCIpLnRleHQoXCJhY2Nlc3NfdGltZVwiKS5hcHBlbmRUbygkcGFuZWxbXCJjb250ZW50XCJdW1wiY2xvc2VkXCJdKTtcclxuXHRcdFx0XHRcdCRwYW5lbC5yZW1vdmVDbGFzcyhzdGF0ZV9jbGFzc2VzKS5hZGRDbGFzcyhcIi1zdGF0ZS0tY2xvc2VkXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkcGFuZWxbXCJoZWFkZXJcIl1bXCJ0aXRsZVwiXS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wibmV4dC1kZXBhcnR1cmVzXCJdKTtcclxuXHJcblx0XHRcdFx0Ly8gTW9udGEgYXMgcGFydGlkYXNcclxuXHRcdFx0XHRsZXQgJGRlcGFydHVyZXMgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImRlcGFydHVyZXNcIik7XHJcblxyXG5cdFx0XHRcdGRpcmVjdGlvbnMuZm9yRWFjaCgoZGlyZWN0aW9uKSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgJGRpcmVjdGlvbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGlyZWN0aW9uXCIpLmFwcGVuZFRvKCRkZXBhcnR1cmVzKTtcclxuXHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGlyZWN0aW9uLWNhcHRpb25cIikudGV4dChMMTBuW2xhbmd1YWdlXVtcImRpcmVjdGlvblwiXSkuYXBwZW5kVG8oJGRpcmVjdGlvbik7XHJcblxyXG5cdFx0XHRcdFx0bGV0IGV0YXMgPSBkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbltkaXJlY3Rpb25dO1xyXG5cdFx0XHRcdFx0ZXRhcy5zb3J0KChhLCBiKSA9PiB7IHJldHVybiBhW1wic2Vjb25kc1wiXSAtIGJbXCJzZWNvbmRzXCJdIH0pO1xyXG5cclxuXHRcdFx0XHRcdGV0YXMuZm9yRWFjaCgodHJhaW4pID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0ICR0cmFpbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW5cIikuYXBwZW5kVG8oJGRpcmVjdGlvbik7XHJcblx0XHRcdFx0XHRcdGxldCAkbGluZSA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW4tbGluZVwiKS5hcHBlbmRUbygkdHJhaW4pO1xyXG5cdFx0XHRcdFx0XHRsZXQgaXNfYXBwcm9hY2hpbmcgPSB0cmFpbltcInNlY29uZHNcIl0gPCAzMDtcclxuXHJcblx0XHRcdFx0XHRcdGxldCBsaW5lID0gbGluZV9pbmRleFt0cmFpbltcImxpbmVcIl1dO1xyXG5cdFx0XHRcdFx0XHRsZXQgZGVwYXJ0dXJlX2NvdW50ZG93biA9IChpc19hcHByb2FjaGluZz8gTDEwbltsYW5ndWFnZV1bXCJub3dcIl0gOiBNYXRoLnJvdW5kKHRyYWluW1wic2Vjb25kc1wiXSAvIDYwKSArIFwiPHNwYW4+bWluPC9zcGFuPlwiKTtcclxuXHRcdFx0XHRcdFx0bGV0IGRlcGFydHVyZV90aW1lID0gbW9tZW50KHRyYWluW1wiYXJyaXZhbFRpbWVcIl0pLmZvcm1hdChcIkhIOm1tXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJsaW5lLXNoaWVsZFwiKS5jc3MoXCJjb2xvclwiLCBsaW5lW1wiY29sb3JcIl0pLmF0dHIoXCJ0aXRsZVwiLCBMMTBuW2xhbmd1YWdlXVtcImxpbmVcIl0gKyBcIiBcIiArIGxpbmVbXCJpZFwiXSkuYXR0cihcImRpc2FibGVkXCIsIHRydWUpLnRleHQobGluZVtcImlkXCJdKS5hcHBlbmRUbygkbGluZSk7XHJcblx0XHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW4tZGlyZWN0aW9uXCIpLmF0dHIoXCJ0aXRsZVwiLCBMMTBuW2xhbmd1YWdlXVtcInRyYWluXCJdICsgXCIgXCIgKyB0cmFpbltcInRyYWluXCJdKS50ZXh0KGRpcmVjdGlvbikuYXBwZW5kVG8oJHRyYWluKTtcclxuXHRcdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpbi1ldGFcIikuYXR0cihcInRpdGxlXCIsIGRlcGFydHVyZV90aW1lKS5odG1sKGRlcGFydHVyZV9jb3VudGRvd24pLmFwcGVuZFRvKCR0cmFpbik7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoaXNfYXBwcm9hY2hpbmcpIHtcclxuXHRcdFx0XHRcdFx0XHQkdHJhaW4uYWRkQ2xhc3MoXCItc3RhdGUtLWFwcHJvYWNoaW5nXCIpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0bGFzdFVwZGF0ZWQoKTtcclxuXHJcblx0XHRcdFx0Ly8gTGltcGEgbyBwYWluZWwgZSBpbnNlcmUgb3Mgbm92b3MgZGFkb3NcclxuXHRcdFx0XHQkcGFuZWwucmVtb3ZlQ2xhc3Moc3RhdGVfY2xhc3NlcykuYWRkQ2xhc3MoXCItc3RhdGUtLXN0YXRpb25cIik7XHJcblx0XHRcdFx0JHBhbmVsW1wiY29udGVudFwiXVtcInN0YXRpb25cIl0uZW1wdHkoKS5hcHBlbmQoJGRlcGFydHVyZXMpO1xyXG5cclxuXHRcdFx0XHQvLyBBcyBwYXJhZGFzIFNldGUgZGUgU2V0ZW1icm8gZSBDb2xvbWJvIHPDo28gbXVpdG8gcHLDs3hpbWFzLCBlbnTDo28gw6kgY29tdW0gcXVlIGEgbG9jYWxpemHDp8Ojb1xyXG5cdFx0XHRcdC8vIGRvIEdQUyBkbyB1c3XDoXJpbyBsZXZlIMOgIGVzdGHDp8OjbyBlcnJhZGEuIFBvciBpc3NvLCBuZXNzYXMgcGFyYWRhcywgw6kgbW9zdHJhZG8gdW0gYm90w6NvIHBhcmFcclxuXHRcdFx0XHQvLyBmYWNpbGl0YXIgYSB0cm9jYSBkZSBwYXJhZGEuIE8gYm90w6NvIHPDsyDDqSBleGliaWRvIHF1YW5kbyBvIHVzdcOhcmlvIHZlbSBkYSBsb2NhbGl6YcOnw6NvXHJcblx0XHRcdFx0Ly8gYXV0b23DoXRpY2EgKG7Do28gbW9zdHJhIHNlIHBhcmFkYSBmb2kgZXNjb2xoaWRhIG5vIG1lbnUpXHJcblx0XHRcdFx0aWYgKGZyb21fZ3BzID09PSB0cnVlICYmIFtcInNldGUtZGUtc2V0ZW1icm9cIiwgXCJjb2xvbWJvXCJdLmluY2x1ZGVzKHN0YXRpb25bXCJpZFwiXSkpIHtcclxuXHRcdFx0XHRcdGxldCBvcmlnaW5fYW5kX2Rlc3RpbmF0aW9uID0ge1xyXG5cdFx0XHRcdFx0XHRcInNldGUtZGUtc2V0ZW1icm9cIjoge1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkNvbG9tYm9cIixcclxuXHRcdFx0XHRcdFx0XHRcImlkXCI6IFwiY29sb21ib1wiXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFwiY29sb21ib1wiOiB7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiU2V0ZSBkZSBTZXRlbWJyb1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogXCJzZXRlLWRlLXNldGVtYnJvXCJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHRsZXQgZGVzdGluYXRpb24gPSBvcmlnaW5fYW5kX2Rlc3RpbmF0aW9uW3N0YXRpb25bXCJpZFwiXV07XHJcblxyXG5cdFx0XHRcdFx0bGV0ICRzdWdnZXN0aW9uID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJzdWdnZXN0aW9uXCIpO1xyXG5cdFx0XHRcdFx0bGV0ICRidXR0b24gPSAkKFwiPGEgLz5cIikuYWRkQ2xhc3MoXCJidXR0b25cIikuYXR0cihcImhyZWZcIiwgXCIjXCIpLmFwcGVuZFRvKCRzdWdnZXN0aW9uKTtcclxuXHRcdFx0XHRcdCQoXCI8aSAvPlwiKS5hZGRDbGFzcyhcIm1hdGVyaWFsLWljb25zXCIpLnRleHQoXCJuZWFyX21lXCIpLmFwcGVuZFRvKCRidXR0b24pO1xyXG5cdFx0XHRcdFx0JChcIjxzcGFuIC8+XCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJhcmUteW91LWF0XCJdKS5hcHBlbmRUbygkYnV0dG9uKTtcclxuXHRcdFx0XHRcdCQoXCI8c3Ryb25nIC8+XCIpLnRleHQoZGVzdGluYXRpb25bXCJuYW1lXCJdICsgXCI/XCIpLmFwcGVuZFRvKCRidXR0b24pO1xyXG5cclxuXHRcdFx0XHRcdCRidXR0b24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0bmV4dERlcGFydHVyZXMoZGVzdGluYXRpb24pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0JHBhbmVsW1wiY29udGVudFwiXVtcInN0YXRpb25cIl0uYXBwZW5kKCRzdWdnZXN0aW9uKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGN1ZVtcImxvYWQtZGVwYXJ0dXJlc1wiXS5yZXNvbHZlKCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHJcblx0Ly8gQXR1YWxpemHDp8Ojb1xyXG5cdGNvbnN0IHVwZGF0ZVdpbmRvdyA9ICgpID0+IHtcclxuXHRcdGlmIChkb2N1bWVudC5oaWRkZW4gPT09IGZhbHNlICYmIG5hdmlnYXRvci5vbkxpbmUgPT09IHRydWUpIHtcclxuXHRcdFx0bGFzdFVwZGF0ZWQoKTtcclxuXHRcdFx0Z2V0RGF0YSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIENyaWEgbm92b3MgaW50ZXJ2YWxvcyBlIGV2ZW50b3NcclxuXHQkKHdpbmRvdykub24oXCJvbmxpbmUuZGVwYXJ0dXJlcyB2aXNpYmlsaXR5Y2hhbmdlLmRlcGFydHVyZXNcIiwgdXBkYXRlV2luZG93KTtcclxuXHRjdWVbXCJpbnRlcnZhbC1kZXBhcnR1cmVzXCJdID0gc2V0SW50ZXJ2YWwoZ2V0RGF0YSwgMTUwMDApO1xyXG5cdGN1ZVtcImludGVydmFsLWxhc3QtdXBkYXRlZFwiXSA9IHNldEludGVydmFsKGxhc3RVcGRhdGVkLCA1MDAwKTtcclxuXHJcblx0Z2V0RGF0YSgpO1xyXG59O1xyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIHN5c3RlbSBzdGF0dXMgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gUGVnYSBvIGVzdGFkbyBkbyBzaXN0ZW1hXHJcbmNvbnN0IHN5c3RlbVN0YXR1cyA9ICgoKSA9PiB7XHJcbiAgICBjdWVbXCJsb2FkLWRvY3VtZW50XCJdLmRvbmUoKCkgPT4ge1xyXG4gICAgICAgIGN1ZVtcImludGVydmFsLXN5c3RlbS1zdGF0dXNcIl0gPSBzZXRJbnRlcnZhbChnZXRTdGF0dXMsIDYwICogMTAwMCk7XHJcbiAgICAgICAgZ2V0U3RhdHVzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgbGFzdF9zdGF0dXM7XHJcblxyXG4gICAgY29uc3Qgc3RhdGVfY2xhc3NlcyA9IFtcclxuICAgICAgICBcIi1zdGF0ZS0tb2tcIixcclxuICAgICAgICBcIi1zdGF0ZS0td2FybmluZ1wiXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICAvLyBTw7MgY2FycmVnYSBzZSBlc3RpdmVyIGVtIGZvY28gZSBvbmxpbmVcclxuICAgICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuID09PSB0cnVlIHx8IG5hdmlnYXRvci5vbkxpbmUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG5cdFx0JC5nZXRKU09OKGVuZHBvaW50c1tcInN0YXR1c1wiXSwge1xyXG4gICAgICAgICAgICBcImVudlwiOiBlbnZcclxuICAgICAgICB9KS5kb25lKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjdWVbXCJsb2FkLWRlcGFydHVyZXNcIl0uZG9uZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0ucmVtb3ZlQ2xhc3Moc3RhdGVfY2xhc3Nlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW1wic3RhdHVzXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlW1wic3RhdHVzXCJdID09PSBcIk5vcm1hbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5hZGRDbGFzcyhcIi1zdGF0ZS0tb2tcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdF9zdGF0dXMgIT09IFwiTm9ybWFsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXVtcImljb25cIl0udGV4dChcImNoZWNrX2NpcmNsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXVtcInRleHRcIl0udGV4dChMMTBuW2xhbmd1YWdlXVtcInN0YXR1cy1va1wiXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VfaGVpZ2h0ID0gJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1widGV4dFwiXS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdLmhlaWdodChtZXNzYWdlX2hlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWNvbGxhcHNlZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0uY3NzKFwiaGVpZ2h0XCIsIFwiXCIpLmFkZENsYXNzKFwiLW1vZGUtLWNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5hZGRDbGFzcyhcIi1zdGF0ZS0td2FybmluZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1wiaWNvblwiXS50ZXh0KFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXVtcInRleHRcIl0uaHRtbChyZXNwb25zZVtcIm1lc3NhZ2VcIl0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VfaGVpZ2h0ID0gJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1widGV4dFwiXS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0uaGVpZ2h0KG1lc3NhZ2VfaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1jb2xsYXBzZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsYXN0X3N0YXR1cyA9IHJlc3BvbnNlW1wic3RhdHVzXCJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKFwidmlzaWJpbGl0eWNoYW5nZS5zeXN0ZW1TdGF0dXNcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxhc3Rfc3RhdHVzID0gbnVsbDtcclxuICAgICAgICBnZXRTdGF0dXMoKTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIHN0YXRpb24gbGlzdCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuY29uc3Qgc3RhdGlvbkxpc3QgPSAoKSA9PiB7XHJcblx0JG5hdmlnYXRpb25bXCJoZWFkZXJcIl1bXCJzdGF0aW9uLW5hbWVcIl0udGV4dChMMTBuW2xhbmd1YWdlXVtcInN0YXRpb25zXCJdKTtcclxuXHQkbmF2aWdhdGlvbltcImhlYWRlclwiXVtcInBsYWNlaG9sZGVyXCJdLnRleHQoTDEwbltsYW5ndWFnZV1bXCJzdGF0aW9uc1wiXSk7XHJcblxyXG5cdC8vIEJvdMOjbyBwYXJhIGxvY2FsaXphciBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYVxyXG5cdGxldCAkbmVhcmVzdCA9ICQoXCI8YSAvPlwiKVxyXG5cdFx0LmF0dHIoXCJocmVmXCIsIFwiI1wiKVxyXG5cdFx0Lm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdCQoXCIuc3RhdGlvbnMgaDEgLnN0YXRpb24tbmFtZVwiKS50ZXh0KFwiXCIpO1xyXG5cdFx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xyXG5cdFx0XHRnZXRMb2NhdGlvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5hcHBlbmRUbygkbmF2aWdhdGlvbltcImNvbnRlbnRcIl1bXCJzdGF0aW9uc1wiXSk7XHJcblx0JChcIjxpIC8+XCIpLmFkZENsYXNzKFwibWF0ZXJpYWwtaWNvbnNcIikudGV4dChcIm5lYXJfbWVcIikuYXBwZW5kVG8oJG5lYXJlc3QpO1xyXG5cdCQoXCI8c3BhbiAvPlwiKS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wiZmluZC1uZWFyZXN0LXN0YXRpb25cIl0pLmFwcGVuZFRvKCRuZWFyZXN0KTtcclxuXHJcblx0JChcIjxsaSAvPlwiKS5hZGRDbGFzcyhcIm5lYXJlc3Qtc3RhdGlvblwiKS5hcHBlbmQoJG5lYXJlc3QpLmFwcGVuZFRvKCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXVtcInN0YXRpb25zXCJdKTtcclxuXHJcblx0Ly8gTW9udGEgbGlzdGEgZGUgZXN0YcOnw7Vlc1xyXG5cdHN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcclxuXHRcdGxldCAkc3RhdGlvbiA9ICQoXCI8YSAvPlwiKS5hdHRyKFwiaHJlZlwiLCBcIiNcIiArIHN0YXRpb25bXCJpZFwiXSkuYXR0cihcImRhdGEtc3RhdGlvblwiLCBzdGF0aW9uW1wibmFtZVwiXSk7XHJcblxyXG5cdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJzdGF0aW9uLW5hbWVcIikudGV4dChzdGF0aW9uW1wibmFtZVwiXSkuYXBwZW5kVG8oJHN0YXRpb24pO1xyXG5cclxuXHRcdGxldCAkbGluZXMgPSAkKFwiPHVsIC8+XCIpLmFkZENsYXNzKFwic3RhdGlvbi1saW5lc1wiKS5hcHBlbmRUbygkc3RhdGlvbik7XHJcblx0XHRsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XHJcblx0XHRcdGxldCAkbGluZSA9ICQoXCI8bGkgLz5cIikuYXBwZW5kVG8oJGxpbmVzKTtcclxuXHRcdFx0aWYgKHN0YXRpb25bXCJsaW5lc1wiXS5pbmNsdWRlcyhsaW5lW1wiaWRcIl0pKSB7XHJcblx0XHRcdFx0bGV0ICRzaGllbGQgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImxpbmUtc2hpZWxkXCIpLmNzcyhcImNvbG9yXCIsIGxpbmVbXCJjb2xvclwiXSkudGV4dChsaW5lW1wiaWRcIl0pLmFwcGVuZFRvKCRsaW5lKTtcclxuXHJcblx0XHRcdFx0aWYgKGxpbmVbXCJkaXNhYmxlZFwiXSkge1xyXG5cdFx0XHRcdFx0JHNoaWVsZC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSkuYWRkQ2xhc3MoXCItc3RhdGUtLWRpc2FibGVkXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKCFzdGF0aW9uW1wiZGlzYWJsZWRcIl0pIHtcclxuXHRcdFx0JHN0YXRpb24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdG5leHREZXBhcnR1cmVzKHN0YXRpb24pO1xyXG5cdFx0XHRcdCRib2R5LnJlbW92ZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JHN0YXRpb24uYWRkQ2xhc3MoXCItc3RhdGUtLWRpc2FibGVkXCIpO1xyXG5cdFx0XHQkc3RhdGlvbi5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdCQoXCI8bGkgLz5cIikuYXBwZW5kKCRzdGF0aW9uKS5hcHBlbmRUbygkbmF2aWdhdGlvbltcImNvbnRlbnRcIl1bXCJzdGF0aW9uc1wiXSk7XHJcblx0fSk7XHJcblxyXG5cdC8vIEFzc29jaWEgbyBldmVudG8gZGUgY2xpY2sgcGFyYSBhYnJpciBvdSBmZWNoYXIgYSBsaXN0YVxyXG5cdCRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0JGJvZHkudG9nZ2xlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcclxuXHR9KTtcclxuXHJcblx0JHBhbmVsW1wiaGVhZGVyXCJdLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0aWYgKCRib2R5Lmhhc0NsYXNzKFwiLW1vZGUtLWxpc3RcIikpIHtcclxuXHRcdFx0JGJvZHkucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0Ly8gU2Nyb2xsIGRlbnRybyBkYSBsaXN0YVxyXG5cdCQod2luZG93KS5vbihcInNjcm9sbFwiLCAoZXZlbnQpID0+IHtcclxuXHRcdGxldCBzY3JvbGxfdG9wX3Bvc2l0aW9uID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuXHRcdGlmIChzY3JvbGxfdG9wX3Bvc2l0aW9uID49IDEyKSB7XHJcblx0XHRcdCRib2R5LmFkZENsYXNzKFwiLW1vZGUtLXNjcm9sbFwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRib2R5LnJlbW92ZUNsYXNzKFwiLW1vZGUtLXNjcm9sbFwiKTtcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyB0aGVtZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmNvbnN0IHRoZW1lID0gKCgpID0+IHtcclxuICAgIGxldCB0aGVtZV9vcmRlciA9IFtcclxuICAgICAgICBcImF1dG9cIixcclxuICAgICAgICBcImxpZ2h0XCIsXHJcbiAgICAgICAgXCJkYXJrXCJcclxuICAgIF07XHJcblxyXG4gICAgbGV0IHRoZW1lX3NldHRpbmdzID0ge1xyXG4gICAgICAgIFwiYXV0b1wiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogTDEwbltsYW5ndWFnZV1bXCJhdXRvLXRoZW1lXCJdLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJicmlnaHRuZXNzX2F1dG9cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsaWdodFwiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogTDEwbltsYW5ndWFnZV1bXCJsaWdodC10aGVtZVwiXSxcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiYnJpZ2h0bmVzc181XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGFya1wiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogTDEwbltsYW5ndWFnZV1bXCJkYXJrLXRoZW1lXCJdLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJicmlnaHRuZXNzXzRcIlxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBzZXQgPSAobmV3X3RoZW1lLCBvbGRfdGhlbWUgPSBcIlwiKSA9PiB7XHJcbiAgICAgICAgY3VycmVudF90aGVtZSA9IG5ld190aGVtZTtcclxuXHJcbiAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWUgc3BhblwiKS50ZXh0KHRoZW1lX3NldHRpbmdzW25ld190aGVtZV1bXCJ0aXRsZVwiXSk7XHJcbiAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWUgaVwiKS50ZXh0KHRoZW1lX3NldHRpbmdzW25ld190aGVtZV1bXCJpY29uXCJdKTtcclxuXHJcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItdGhlbWUtLVwiICsgb2xkX3RoZW1lKS5hZGRDbGFzcyhcIi10aGVtZS0tXCIgKyBuZXdfdGhlbWUpO1xyXG5cclxuICAgICAgICAvLyBTYWx2YSBjb25maWd1cmHDp8OjbyBubyBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBpZiAobmV3X3RoZW1lID09PSBcImF1dG9cIikge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRoZW1lXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgbmV3X3RoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENvbmZlcmUgc2UgasOhIGjDoSB0ZW1hIHNhbHZvIG5vIGxvY2FsU3RvcmFnZS5cclxuICAgIC8vIFNlIG7Do28gaG91dmVyLCBwZWdhIG8gcGFkcsOjbyBkbyBzaXN0ZW1hXHJcbiAgICAvLyBsZXQgY3VycmVudF90aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgfHwgZ2V0Q29tcHV0ZWRTdHlsZSgkKFwiLnNldHRpbmdzIC5jdXJyZW50LXRoZW1lXCIpWzBdKS5nZXRQcm9wZXJ0eVZhbHVlKFwiY29udGVudFwiKS5yZXBsYWNlKC9cIi9nLCBcIlwiKTtcclxuICAgIGxldCBjdXJyZW50X3RoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSB8fCBcImF1dG9cIjtcclxuXHJcbiAgICBpZiAoY3VycmVudF90aGVtZSkge1xyXG4gICAgICAgIHNldChjdXJyZW50X3RoZW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghY3VycmVudF90aGVtZSkge1xyXG4gICAgICAgICAgICAkKFwiLnNldHRpbmdzIC50aGVtZSBzcGFuXCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJhdXRvLXRoZW1lXCJdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBEZXNjb2JyZSBhIHBvc2nDp8OjbyBkbyB0ZW1hIG5hIG9yZGVtXHJcbiAgICAgICAgICAgIGxldCB0aGVtZV9wb3NpdGlvbiA9IHRoZW1lX29yZGVyLmluZGV4T2YoY3VycmVudF90aGVtZSk7XHJcbiAgICAgICAgICAgIGxldCBuZXdfdGhlbWUgPSB0aGVtZV9vcmRlclt0aGVtZV9wb3NpdGlvbiArIDFdIHx8IHRoZW1lX29yZGVyWzBdO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0YSBvIG5vdm8gdGVtYVxyXG4gICAgICAgICAgICBzZXQobmV3X3RoZW1lLCBjdXJyZW50X3RoZW1lKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gc3RhcnQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG5cdCRib2R5ID0gJChcImJvZHlcIik7XHJcblxyXG5cdCRuYXZpZ2F0aW9uID0gJChcIi5uYXZpZ2F0aW9uXCIpO1xyXG5cdCRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdID0gJChcIi5uYXZpZ2F0aW9uLWhlYWRlclwiLCAkbmF2aWdhdGlvbik7XHJcblx0JG5hdmlnYXRpb25bXCJoZWFkZXJcIl1bXCJzdGF0aW9uLW5hbWVcIl0gPSAkKFwiLnN0YXRpb24tbmFtZVwiLCAkbmF2aWdhdGlvbltcImhlYWRlclwiXSk7XHJcblx0JG5hdmlnYXRpb25bXCJoZWFkZXJcIl1bXCJwbGFjZWhvbGRlclwiXSA9ICQoXCIucGxhY2Vob2xkZXJcIiwgJG5hdmlnYXRpb25bXCJoZWFkZXJcIl0pO1xyXG5cdCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXSA9ICQoXCIubmF2aWdhdGlvbi1jb250ZW50XCIsICRuYXZpZ2F0aW9uKTtcclxuXHQkbmF2aWdhdGlvbltcImNvbnRlbnRcIl1bXCJzdGF0aW9uc1wiXSA9ICQoXCIuc3RhdGlvbnNcIiwgJG5hdmlnYXRpb25bXCJjb250ZW50XCJdKTtcclxuXHJcblx0JHBhbmVsID0gJChcIi5wYW5lbFwiKTtcclxuXHQkcGFuZWxbXCJoZWFkZXJcIl0gPSAkKFwiLnBhbmVsLWhlYWRlclwiLCAkcGFuZWwpO1xyXG5cdCRwYW5lbFtcImhlYWRlclwiXVtcInRpdGxlXCJdID0gJChcIi50aXRsZVwiLCAkcGFuZWxbXCJoZWFkZXJcIl0pO1xyXG5cdCRwYW5lbFtcImhlYWRlclwiXVtcImJhZGdlXCJdID0gJChcIi5iYWRnZVwiLCAkcGFuZWxbXCJoZWFkZXJcIl0pO1xyXG5cdCRwYW5lbFtcImNvbnRlbnRcIl0gPSAkKFwiLnBhbmVsLWNvbnRlbnRcIiwgJHBhbmVsKTtcclxuXHQkcGFuZWxbXCJjb250ZW50XCJdW1wic3RhdGlvblwiXSA9ICQoXCIuc3RhdGlvblwiLCAkcGFuZWxbXCJjb250ZW50XCJdKTtcclxuXHQkcGFuZWxbXCJjb250ZW50XCJdW1wiY2xvc2VkXCJdID0gJChcIi5jbG9zZWRcIiwgJHBhbmVsW1wiY29udGVudFwiXSk7XHJcblx0JHBhbmVsW1wiY29udGVudFwiXVtcInBlcm1pc3Npb25cIl0gPSAkKFwiLnBlcm1pc3Npb25cIiwgJHBhbmVsW1wiY29udGVudFwiXSk7XHJcblx0JHBhbmVsW1wiY29udGVudFwiXVtcImxvYWRpbmdcIl0gPSAkKFwiLmxvYWRpbmdcIiwgJHBhbmVsW1wiY29udGVudFwiXSk7XHJcblx0JHBhbmVsW1wiZm9vdGVyXCJdID0gJChcIi5wYW5lbC1mb290ZXJcIiwgJHBhbmVsKTtcclxuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0gPSAkKFwiLnN0YXR1c1wiLCAkcGFuZWxbXCJmb290ZXJcIl0pO1xyXG5cdCRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXVtcImljb25cIl0gPSAkKFwiLmljb25cIiwgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdKTtcclxuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJ0ZXh0XCJdID0gJChcIi50ZXh0XCIsICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXSk7XHJcblx0JHBhbmVsW1wiZm9vdGVyXCJdW1wibmV0d29ya1wiXSA9ICQoXCIubmV0d29ya1wiLCAkcGFuZWxbXCJmb290ZXJcIl0pO1xyXG5cdCRwYW5lbFtcImZvb3RlclwiXVtcIm5ldHdvcmtcIl1bXCJpY29uXCJdID0gJChcIi5pY29uXCIsICRwYW5lbFtcImZvb3RlclwiXVtcIm5ldHdvcmtcIl0pO1xyXG5cdCRwYW5lbFtcImZvb3RlclwiXVtcIm5ldHdvcmtcIl1bXCJ0ZXh0XCJdID0gJChcIi50ZXh0XCIsICRwYW5lbFtcImZvb3RlclwiXVtcIm5ldHdvcmtcIl0pO1xyXG5cclxuXHRjdWVbXCJsb2FkLWRvY3VtZW50XCJdLnJlc29sdmUoKTtcclxuXHJcblx0Ly8gVHVkbyBjb21lw6dhIGFxdWkhXHJcblx0c3RhdGlvbkxpc3QoKTtcclxuXHJcblx0Ly8gQ29uZmVyZSBzZSB1c3XDoXJpbyBqw6EgaGF2aWEgaGFiaWxpdGFkbyBnZW9sb2NhbGl6YcOnw6NvIGFudGVzXHJcblx0aWYgKFwiZ2VvbG9jYXRpb25cIiBpbiBuYXZpZ2F0b3IpIHtcclxuXHRcdCRwYW5lbFtcImNvbnRlbnRcIl1bXCJwZXJtaXNzaW9uXCJdLmZpbmQoXCJzcGFuXCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJmaW5kLW5lYXJlc3Qtc3RhdGlvblwiXSk7XHJcblxyXG5cdFx0aWYgKFwicGVybWlzc2lvbnNcIiBpbiBuYXZpZ2F0b3IpIHtcclxuXHRcdFx0bmF2aWdhdG9yLnBlcm1pc3Npb25zLnF1ZXJ5KHsgXCJuYW1lXCI6IFwiZ2VvbG9jYXRpb25cIiB9KS50aGVuKChwZXJtaXNzaW9uKSA9PiB7XHJcblx0XHRcdFx0aWYgKHBlcm1pc3Npb25bXCJzdGF0ZVwiXSA9PT0gXCJncmFudGVkXCIpIHtcclxuXHRcdFx0XHRcdC8vIFNlIGrDoSB0aXZlciwgcGVnYSBhIGxvY2FsaXphw6fDo28gYXR1YWwgZSBwcm9jdXJhIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXHJcblx0XHRcdFx0XHRnZXRMb2NhdGlvbigpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAocGVybWlzc2lvbltcInN0YXRlXCJdID09PSBcImRlbmllZFwiKSB7XHJcblx0XHRcdFx0XHQvLyBTZSBuw6NvIGZvaSBkYXRhIHBlcm1pc3PDo28sIGFicmUgYSBsaXN0YSBkZSBlc3Rhw6fDtWVzXHJcblx0XHRcdFx0XHRuZXh0RGVwYXJ0dXJlcygpO1xyXG5cdFx0XHRcdFx0JG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0uZmluZChcIi5uZWFyZXN0LXN0YXRpb25cIikuaGlkZSgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBTZSBuw6NvIHRpdmVyLCBtb3N0cmEgYm90w6NvIHBhcmEgc29saWNpdGFyIGF1dG9yaXphw6fDo29cclxuXHRcdFx0XHRcdCQoXCJib2R5XCIpLmFkZENsYXNzKFwiLW1vZGUtLWluaXRpYWxcIik7XHJcblx0XHRcdFx0XHQkcGFuZWwuYWRkQ2xhc3MoXCItc3RhdGUtLXBlcm1pc3Npb25cIik7XHJcblxyXG5cdFx0XHRcdFx0JChcIi5idXR0b25cIiwgJHBhbmVsW1wiY29udGVudFwiXVtcInBlcm1pc3Npb25cIl0pLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdGdldExvY2F0aW9uKHRydWUpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGdldExvY2F0aW9uKCk7XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdC8vIFNlIG7Do28gaG91dmVyIGdlb2xvY2FsaXphw6fDo28sIGFicmUgYSBsaXN0YSBkZSBlc3Rhw6fDtWVzXHJcblx0XHRuZXh0RGVwYXJ0dXJlcygpO1xyXG5cdFx0JG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0uZmluZChcIi5uZWFyZXN0LXN0YXRpb25cIikuaGlkZSgpO1xyXG5cdH1cclxufSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFNlcnZpY2UgV29ya2VyXHJcbmlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG5cdFx0Y3VlW1wic2VydmljZS13b3JrZXJcIl0gPSBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihcIi9zZXJ2aWNlLXdvcmtlci5qc1wiKTtcclxuXHJcblx0XHRjdWVbXCJzZXJ2aWNlLXdvcmtlclwiXS50aGVuKChyZWdpc3RyYXRpb24pID0+IHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCFcIiwgcmVnaXN0cmF0aW9uKTtcclxuXHRcdH0sIChlcnJvcikgPT4ge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6IFwiLCBlcnJvcik7XHJcblx0XHR9KTtcclxuXHR9KTtcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBFc3RhZG8gZGEgY29uZXjDo29cclxuJChmdW5jdGlvbigpIHtcclxuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdW1wiaWNvblwiXS50ZXh0KFwiY2xvdWRfb2ZmXCIpO1xyXG5cdCRwYW5lbFtcImZvb3RlclwiXVtcIm5ldHdvcmtcIl1bXCJ0ZXh0XCJdLnRleHQoTDEwbltsYW5ndWFnZV1bXCJvZmZsaW5lXCJdKTtcclxufSk7XHJcblxyXG5jb25zdCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzID0gKCkgPT4ge1xyXG5cdGxldCBjb25uZWN0ZWQgPSBuYXZpZ2F0b3Iub25MaW5lO1xyXG5cclxuXHRpZiAoY29ubmVjdGVkID09PSB0cnVlKSB7XHJcblx0XHQkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdLnJlbW92ZUNsYXNzKFwiLXN0YXRlLS1vZmZsaW5lXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdLmFkZENsYXNzKFwiLXN0YXRlLS1vZmZsaW5lXCIpO1xyXG5cdH1cclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib25saW5lXCIsIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9mZmxpbmVcIiwgdXBkYXRlQ29ubmVjdGlvblN0YXR1cyk7XHJcbiJdfQ==