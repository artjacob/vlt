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
// const language = (navigator.language ? navigator.language.substr(0, 2) : "pt");

var language = "pt"; // if (language === "pt") {

moment.locale("pt-br"); // } else {
//     moment.locale(language);
// }

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
    "ago": "atrás",
    "stations": "Estações",
    "find-nearest-station": "Localizar estação mais próxima",
    "auto-theme": "Tema automático",
    "light-theme": "Tema claro",
    "dark-theme": "Tema escuro",
    "offline": "Sem conexão",
    "status-ok": "Operação normal" // "en": {
    //     "next-departures": "Next trains",
    //     "real-time": "Real Time",
    //     "are-you-at": "Are you at",
    //     "direction": "Direction",
    //     "now": "Now",
    //     "train": "Train",
    //     "line": "Line",
    //     "updated": "Updated",
    //     "out-of-operation": "Service closed",
    //     "operation-hours": "VLT Carioca runs<br> daily from 6am to 12am",
    //     "ago": "ago",
    //     "stations": "Stations",
    //     "find-nearest-station": "Find your nearest station",
    //     "auto-theme": "Auto theme",
    //     "light-theme": "Light theme",
    //     "dark-theme": "Dark theme",
    //     "offline": "Offline",
    //     "status-ok": "Good service"
    // },
    // "es": {
    // }

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
      var last_updated = L10n[language]["updated"] + " " + moment(departures["lastUpdated"]).fromNow(true) + " " + L10n[language]["ago"];
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
    // $.getJSON("https://emitremmus.com/-/vlt/departures?callback=?", {


    $.getJSON("https://us-central1-vltcarioca.cloudfunctions.net/departures?callback=?", {
      "station": station["id"] // "env": "dev"

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
  }; ////////////////////////////////////////////////////////////////////////////////////////////////
  // Atualização


  var updateWindow = function updateWindow() {
    if (document.hidden === false && navigator.onLine === true) {
      lastUpdated();
      getData();
    }
  }; // Cria novos intervalos e eventos


  $(window).on("online.departures visibilitychange.departures", updateWindow);

  if (env === "production") {
    cue["interval-departures"] = setInterval(getData, 15000);
    cue["interval-last-updated"] = setInterval(lastUpdated, 5000);
  }

  getData();
}; ////////////////////////////////////////////////////////////////////////////////////////////////////
// system status ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// Pega o estado do sistema


var systemStatus = function () {
  cue["load-document"].done(function () {
    if (env === "production") {
      cue["interval-system-status"] = setInterval(getStatus, 60 * 1000);
      getStatus();
    }
  });
  var last_status;
  var state_classes = ["-state--ok", "-state--warning"];

  var getStatus = function getStatus() {
    // Só carrega se estiver em foco e online
    if (document.hidden === true || navigator.onLine === false) {
      return false;
    }

    $.getJSON("https://us-central1-vltcarioca.cloudfunctions.net/status?callback=?").done(function (response) {
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
  $panel["footer"]["network"].text(L10n[language]["offline"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiLCJMMTBuLmpzIiwic3RhdGlvbi1pbmZvLmpzIiwibGluZS1pbmZvLmpzIiwiZ2V0LWxvY2F0aW9uLmpzIiwibmVhcmVzdC1zdGF0aW9uLmpzIiwibmV4dC1kZXBhcnR1cmVzLmpzIiwic3lzdGVtLXN0YXR1cy5qcyIsInN0YXRpb24tbGlzdC5qcyIsInRoZW1lLmpzIiwic3RhcnQuanMiXSwibmFtZXMiOlsiY3VlIiwiJGJvZHkiLCIkbmF2aWdhdGlvbiIsIiRwYW5lbCIsIiQiLCJEZWZlcnJlZCIsImxhbmd1YWdlIiwibW9tZW50IiwibG9jYWxlIiwiTDEwbiIsInN0YXRpb25zIiwic3RhdGlvbl9pbmRleCIsImZvckVhY2giLCJzdGF0aW9uIiwic3RhdGlvbl9uYW1lIiwibGluZXMiLCJsaW5lX2luZGV4IiwibGluZSIsImxpbmVfbmFtZSIsImdldExvY2F0aW9uIiwiaXNfaW5pdGlhbCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJyZW1vdmVDbGFzcyIsIm5lYXJlc3Rfc3RhdGlvbiIsIm5lYXJlc3RTdGF0aW9uIiwibmV4dERlcGFydHVyZXMiLCJkZWcycmFkIiwiZGVnIiwiTWF0aCIsIlBJIiwidXNlcl9jb29yZGluYXRlcyIsInVzZXJfbGF0aXR1ZGUiLCJ1c2VyX2xvbmdpdHVkZSIsIlIiLCJzaG9ydGVzdF9kaXN0YW5jZSIsInN0YXRpb25fbGF0aXR1ZGUiLCJzdGF0aW9uX2xvbmdpdHVkZSIsIngiLCJjb3MiLCJ5IiwiZGlzdGFuY2UiLCJzcXJ0IiwiZnJvbV9ncHMiLCJkZXBhcnR1cmVzIiwiYWRkQ2xhc3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInN0YXRlX2NsYXNzZXMiLCJjbGVhckludGVydmFsIiwid2luZG93Iiwib2ZmIiwidGV4dCIsImVtcHR5IiwiZmluZCIsImxhc3RVcGRhdGVkIiwiJGJhZGdlIiwic2Vjb25kc19zaW5jZV91cGRhdGUiLCJkaWZmIiwibGFzdF91cGRhdGVkIiwiZnJvbU5vdyIsImFwcGVuZCIsImdldERhdGEiLCJkb2N1bWVudCIsImhpZGRlbiIsIm9uTGluZSIsImdldEpTT04iLCJkb25lIiwicmVzcG9uc2UiLCJldGFfY291bnQiLCJkaXJlY3Rpb25zIiwiZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb24iLCJkaXJlY3Rpb24iLCJkaXJlY3Rpb25fdGl0bGUiLCJsZW5ndGgiLCJpbmNsdWRlcyIsInB1c2giLCJ0cmFpbiIsImVudiIsIm5vdyIsIm9wZXJhdGlvbl9zdGFydF90aW1lIiwib3BlcmF0aW9uX2VuZF90aW1lIiwiaXNBZnRlciIsImlzQmVmb3JlIiwiYXBwZW5kVG8iLCJodG1sIiwiJGRlcGFydHVyZXMiLCIkZGlyZWN0aW9uIiwiZXRhcyIsInNvcnQiLCJhIiwiYiIsIiR0cmFpbiIsIiRsaW5lIiwiaXNfYXBwcm9hY2hpbmciLCJkZXBhcnR1cmVfY291bnRkb3duIiwicm91bmQiLCJkZXBhcnR1cmVfdGltZSIsImZvcm1hdCIsImNzcyIsImF0dHIiLCJvcmlnaW5fYW5kX2Rlc3RpbmF0aW9uIiwiZGVzdGluYXRpb24iLCIkc3VnZ2VzdGlvbiIsIiRidXR0b24iLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNvbHZlIiwidXBkYXRlV2luZG93Iiwic2V0SW50ZXJ2YWwiLCJzeXN0ZW1TdGF0dXMiLCJnZXRTdGF0dXMiLCJsYXN0X3N0YXR1cyIsIm1lc3NhZ2VfaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJoZWlnaHQiLCJzZXRUaW1lb3V0Iiwic3RhdGlvbkxpc3QiLCIkbmVhcmVzdCIsIiRzdGF0aW9uIiwiJGxpbmVzIiwiJHNoaWVsZCIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJzY3JvbGxfdG9wX3Bvc2l0aW9uIiwic2Nyb2xsVG9wIiwidGhlbWUiLCJ0aGVtZV9vcmRlciIsInRoZW1lX3NldHRpbmdzIiwic2V0IiwibmV3X3RoZW1lIiwib2xkX3RoZW1lIiwiY3VycmVudF90aGVtZSIsInJlbW92ZUl0ZW0iLCJ0aGVtZV9wb3NpdGlvbiIsImluZGV4T2YiLCJwZXJtaXNzaW9ucyIsInF1ZXJ5IiwidGhlbiIsInBlcm1pc3Npb24iLCJoaWRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInJlZ2lzdHJhdGlvbiIsImVycm9yIiwidXBkYXRlQ29ubmVjdGlvblN0YXR1cyIsImNvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFBQSxHQUFBLEdBQUEsRUFBQSxDLENBQ0E7O0FBQ0EsSUFBQUMsS0FBQSxFQUFBQyxXQUFBLEVBQUFDLE1BQUE7QUFFQUgsR0FBQSxDQUFBLGVBQUEsQ0FBQSxHQUFBSSxDQUFBLENBQUFDLFFBQUEsRUFBQTtBQUNBTCxHQUFBLENBQUEsaUJBQUEsQ0FBQSxHQUFBSSxDQUFBLENBQUFDLFFBQUEsRUFBQSxDLENDVEE7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsSUFBQUMsUUFBQSxHQUFBLElBQUEsQyxDQUVBOztBQUNBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQSxPQUFBLEUsQ0FDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBQUMsSUFBQSxHQUFBO0FBQ0EsUUFBQTtBQUNBLHVCQUFBLGdCQURBO0FBRUEsaUJBQUEsWUFGQTtBQUdBLGtCQUFBLFNBSEE7QUFJQSxpQkFBQSxTQUpBO0FBS0EsV0FBQSxPQUxBO0FBTUEsYUFBQSxNQU5BO0FBT0EsWUFBQSxPQVBBO0FBUUEsZUFBQSxZQVJBO0FBU0Esd0JBQUEsa0JBVEE7QUFVQSx1QkFBQSxxREFWQTtBQVdBLFdBQUEsT0FYQTtBQVlBLGdCQUFBLFVBWkE7QUFhQSw0QkFBQSxnQ0FiQTtBQWNBLGtCQUFBLGlCQWRBO0FBZUEsbUJBQUEsWUFmQTtBQWdCQSxrQkFBQSxhQWhCQTtBQWlCQSxlQUFBLGFBakJBO0FBa0JBLGlCQUFBLGlCQWxCQSxDQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUExQ0E7QUFEQSxDQUFBO0FDYkEsSUFBQUMsUUFBQSxHQUFBLENBQ0E7QUFDQSxVQUFBLGdCQURBO0FBRUEsUUFBQSxnQkFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQURBLEVBU0E7QUFDQTtBQUNBLFVBQUEsVUFGQTtBQUdBLFFBQUEsVUFIQTtBQUlBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUxBO0FBTUE7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQVBBLENBVEEsRUFrQkE7QUFDQSxVQUFBLFlBREE7QUFFQSxRQUFBLFlBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FsQkEsRUEwQkE7QUFDQSxVQUFBLFNBREE7QUFFQSxRQUFBLFNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0ExQkEsRUFrQ0E7QUFDQSxVQUFBLFNBREE7QUFFQSxRQUFBLFNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FsQ0EsRUEwQ0E7QUFDQSxVQUFBLGlCQURBO0FBRUEsUUFBQSxpQkFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBMUNBLEVBa0RBO0FBQ0EsVUFBQSxZQURBO0FBRUEsUUFBQSxZQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbERBLEVBMERBO0FBQ0EsVUFBQSxTQURBO0FBRUEsUUFBQSxTQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0ExREEsRUFrRUE7QUFDQSxVQUFBLG1CQURBO0FBRUEsUUFBQSxtQkFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQWxFQSxFQTBFQTtBQUNBO0FBQ0EsVUFBQSxrQkFGQTtBQUdBLFFBQUEsa0JBSEE7QUFJQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FMQTtBQU1BO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBUEEsQ0ExRUEsRUFtRkE7QUFDQSxVQUFBLFNBREE7QUFFQSxRQUFBLFNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FuRkEsRUEyRkE7QUFDQSxVQUFBLFFBREE7QUFFQSxRQUFBLFFBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0EzRkEsRUFtR0E7QUFDQSxVQUFBLFVBREE7QUFFQSxRQUFBLFVBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQW5HQSxFQTJHQTtBQUNBLFVBQUEsbUJBREE7QUFFQSxRQUFBLG1CQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0EzR0EsRUFtSEE7QUFDQSxVQUFBLG1CQURBO0FBRUEsUUFBQSxtQkFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxpQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBbkhBLEVBMkhBO0FBQ0EsVUFBQSxjQURBO0FBRUEsUUFBQSxjQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsaUJBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBM0hBLEVBbUlBO0FBQ0EsVUFBQSxVQURBO0FBRUEsUUFBQSxVQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0FuSUEsRUEySUE7QUFDQSxVQUFBLGVBREE7QUFFQSxRQUFBLGVBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0EzSUEsRUFtSkE7QUFDQSxVQUFBLGFBREE7QUFFQSxRQUFBLGFBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQW5KQSxFQTJKQTtBQUNBLFVBQUEsWUFEQTtBQUVBLFFBQUEsWUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQTNKQSxFQW1LQTtBQUNBLFVBQUEsT0FEQTtBQUVBLFFBQUEsT0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBbktBLEVBMktBO0FBQ0E7QUFDQSxVQUFBLFlBRkE7QUFHQSxRQUFBLFlBSEE7QUFJQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FMQTtBQU1BO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFQQSxDQTNLQSxFQW9MQTtBQUNBLFVBQUEsY0FEQTtBQUVBLFFBQUEsY0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxpQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQXBMQSxFQTRMQTtBQUNBLFVBQUEsZUFEQTtBQUVBLFFBQUEsZUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxpQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQTVMQSxFQW9NQTtBQUNBLFVBQUEsV0FEQTtBQUVBLFFBQUEsV0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBcE1BLEVBNE1BO0FBQ0EsVUFBQSxrQkFEQTtBQUVBLFFBQUEsa0JBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0E1TUEsRUFvTkE7QUFDQSxVQUFBLFlBREE7QUFFQSxRQUFBLFlBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQXBOQSxFQTROQTtBQUNBLFVBQUEsZ0JBREE7QUFFQSxRQUFBLGdCQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0E1TkEsRUFvT0E7QUFDQSxVQUFBLGVBREE7QUFFQSxRQUFBLGVBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQXBPQSxDQUFBO0FBOE9BLElBQUFDLGFBQUEsR0FBQSxFQUFBO0FBQ0FELFFBQUEsQ0FBQUUsT0FBQSxDQUFBLFVBQUFDLE9BQUEsRUFBQTtBQUNBLE1BQUFDLFlBQUEsR0FBQUQsT0FBQSxDQUFBLE1BQUEsQ0FBQTtBQUNBRixFQUFBQSxhQUFBLENBQUFHLFlBQUEsQ0FBQSxHQUFBRCxPQUFBO0FBQ0EsQ0FIQTtBQy9PQSxJQUFBRSxLQUFBLEdBQUEsQ0FDQTtBQUNBLFFBQUEsQ0FEQTtBQUVBLFVBQUEsU0FGQTtBQUdBLFdBQUEsU0FIQSxDQUlBO0FBQ0E7QUFDQTtBQUNBOztBQVBBLENBREEsRUFVQTtBQUNBLFFBQUEsQ0FEQTtBQUVBLFVBQUEsU0FGQTtBQUdBLFdBQUEsU0FIQSxDQUlBO0FBQ0E7QUFDQTtBQUNBOztBQVBBLENBVkEsRUFtQkE7QUFDQTtBQUNBLFFBQUEsQ0FGQTtBQUdBLFVBQUEsU0FIQTtBQUlBLFdBQUEsU0FKQSxDQUtBO0FBQ0E7QUFDQTtBQUNBOztBQVJBLENBbkJBLENBQUE7QUErQkEsSUFBQUMsVUFBQSxHQUFBLEVBQUE7QUFDQUQsS0FBQSxDQUFBSCxPQUFBLENBQUEsVUFBQUssSUFBQSxFQUFBO0FBQ0EsTUFBQUMsU0FBQSxHQUFBRCxJQUFBLENBQUEsTUFBQSxDQUFBO0FBQ0FELEVBQUFBLFVBQUEsQ0FBQUUsU0FBQSxDQUFBLEdBQUFELElBQUE7QUFDQSxDQUhBLEUsQ0NoQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsSUFBQUUsV0FBQSxHQUFBLFNBQUFBLFdBQUEsR0FBQTtBQUFBLE1BQUFDLFVBQUEsdUVBQUEsS0FBQTtBQUNBQyxFQUFBQSxTQUFBLENBQUFDLFdBQUEsQ0FBQUMsa0JBQUEsQ0FBQSxVQUFBQyxRQUFBLEVBQUE7QUFFQTtBQUNBLFFBQUFKLFVBQUEsRUFBQTtBQUNBaEIsTUFBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBcUIsV0FBQSxDQUFBLGdCQUFBO0FBQ0F0QixNQUFBQSxNQUFBLENBQUFzQixXQUFBLENBQUEsb0JBQUE7QUFDQSxLQU5BLENBUUE7OztBQUNBLFFBQUFDLGVBQUEsR0FBQUMsY0FBQSxDQUFBLENBQUFILFFBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsRUFBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQUksSUFBQUEsY0FBQSxDQUFBRixlQUFBLEVBQUEsSUFBQSxDQUFBO0FBQ0EsR0FYQTtBQVlBLENBYkEsQyxDQ0xBOzs7QUFDQSxJQUFBRyxPQUFBLEdBQUEsU0FBQUEsT0FBQSxDQUFBQyxHQUFBLEVBQUE7QUFDQSxTQUFBQSxHQUFBLElBQUFDLElBQUEsQ0FBQUMsRUFBQSxHQUFBLEdBQUEsQ0FBQTtBQUNBLENBRkE7O0FBSUEsSUFBQUwsY0FBQSxHQUFBLFNBQUFBLGNBQUEsQ0FBQU0sZ0JBQUEsRUFBQTtBQUNBLE1BQUFDLGFBQUEsR0FBQUwsT0FBQSxDQUFBSSxnQkFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsTUFBQUUsY0FBQSxHQUFBTixPQUFBLENBQUFJLGdCQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFFQSxNQUFBRyxDQUFBLEdBQUEsSUFBQTtBQUVBLE1BQUFDLGlCQUFBLEdBQUEsSUFBQTtBQUNBLE1BQUFYLGVBQUEsR0FBQSxJQUFBO0FBRUFoQixFQUFBQSxRQUFBLENBQUFFLE9BQUEsQ0FBQSxVQUFBQyxPQUFBLEVBQUE7QUFDQSxRQUFBLENBQUFBLE9BQUEsQ0FBQSxVQUFBLENBQUEsRUFBQTtBQUNBLFVBQUF5QixnQkFBQSxHQUFBVCxPQUFBLENBQUFoQixPQUFBLENBQUEsYUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxVQUFBMEIsaUJBQUEsR0FBQVYsT0FBQSxDQUFBaEIsT0FBQSxDQUFBLGFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBRUEsVUFBQTJCLENBQUEsR0FBQSxDQUFBRCxpQkFBQSxHQUFBSixjQUFBLElBQUFKLElBQUEsQ0FBQVUsR0FBQSxDQUFBLENBQUFQLGFBQUEsR0FBQUksZ0JBQUEsSUFBQSxDQUFBLENBQUE7QUFDQSxVQUFBSSxDQUFBLEdBQUFKLGdCQUFBLEdBQUFKLGFBQUE7QUFDQSxVQUFBUyxRQUFBLEdBQUFaLElBQUEsQ0FBQWEsSUFBQSxDQUFBSixDQUFBLEdBQUFBLENBQUEsR0FBQUUsQ0FBQSxHQUFBQSxDQUFBLElBQUFOLENBQUE7O0FBRUEsVUFBQSxDQUFBQyxpQkFBQSxJQUFBTSxRQUFBLEdBQUFOLGlCQUFBLEVBQUE7QUFDQUEsUUFBQUEsaUJBQUEsR0FBQU0sUUFBQTtBQUNBakIsUUFBQUEsZUFBQSxHQUFBYixPQUFBO0FBQ0E7QUFDQTtBQUNBLEdBZEE7QUFnQkEsU0FBQWEsZUFBQTtBQUNBLENBMUJBLEMsQ0NMQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0EsSUFBQUUsY0FBQSxHQUFBLFNBQUFBLGNBQUEsQ0FBQWYsT0FBQSxFQUFBO0FBQUEsTUFBQWdDLFFBQUEsdUVBQUEsS0FBQTtBQUNBLE1BQUFDLFVBQUEsQ0FEQSxDQUdBOztBQUNBLE1BQUEsQ0FBQWpDLE9BQUEsRUFBQTtBQUNBWixJQUFBQSxLQUFBLENBQUE4QyxRQUFBLENBQUEsYUFBQTtBQUNBbEMsSUFBQUEsT0FBQSxHQUFBRixhQUFBLENBQUFxQyxZQUFBLENBQUFDLE9BQUEsQ0FBQSxjQUFBLEtBQUEsU0FBQSxDQUFBO0FBQ0E7O0FBRUFELEVBQUFBLFlBQUEsQ0FBQUUsT0FBQSxDQUFBLGNBQUEsRUFBQXJDLE9BQUEsQ0FBQSxNQUFBLENBQUE7QUFFQSxNQUFBc0MsYUFBQSxHQUFBLENBQ0EsaUJBREEsRUFFQSxpQkFGQSxFQUdBLGdCQUhBLEVBSUEsb0JBSkEsQ0FBQSxDQVhBLENBa0JBOztBQUNBQyxFQUFBQSxhQUFBLENBQUFwRCxHQUFBLENBQUEscUJBQUEsQ0FBQSxDQUFBO0FBQ0FvRCxFQUFBQSxhQUFBLENBQUFwRCxHQUFBLENBQUEsdUJBQUEsQ0FBQSxDQUFBO0FBQ0FJLEVBQUFBLENBQUEsQ0FBQWlELE1BQUEsQ0FBQSxDQUFBQyxHQUFBLENBQUEsK0NBQUEsRUFyQkEsQ0F1QkE7O0FBQ0FuRCxFQUFBQSxNQUFBLENBQUFzQixXQUFBLENBQUEwQixhQUFBLEVBQUFKLFFBQUEsQ0FBQSxpQkFBQSxFQXhCQSxDQTBCQTs7QUFDQTdDLEVBQUFBLFdBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxjQUFBLEVBQUFxRCxJQUFBLENBQUExQyxPQUFBLENBQUEsTUFBQSxDQUFBO0FBQ0FWLEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUFxRCxLQUFBLEdBNUJBLENBOEJBOztBQUNBdEQsRUFBQUEsV0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQXVELElBQUEsQ0FBQSxHQUFBLEVBQUFoQyxXQUFBLENBQUEsa0JBQUE7QUFDQXZCLEVBQUFBLFdBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxVQUFBLEVBQUF1RCxJQUFBLENBQUEscUJBQUE1QyxPQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsSUFBQSxFQUFBa0MsUUFBQSxDQUFBLGtCQUFBLEVBaENBLENBbUNBO0FBQ0E7O0FBQ0EsTUFBQVcsV0FBQSxHQUFBLFNBQUFBLFdBQUEsR0FBQTtBQUNBLFFBQUFDLE1BQUEsR0FBQXZELENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTJDLFFBQUEsQ0FBQSxjQUFBLENBQUEsQ0FEQSxDQUdBOztBQUNBLFFBQUFhLG9CQUFBLEdBQUFyRCxNQUFBLEdBQUFzRCxJQUFBLENBQUFmLFVBQUEsQ0FBQSxhQUFBLENBQUEsRUFBQSxTQUFBLENBQUEsQ0FKQSxDQU1BOztBQUNBLFFBQUFjLG9CQUFBLElBQUEsRUFBQSxFQUFBO0FBQ0FELE1BQUFBLE1BQUEsQ0FBQVosUUFBQSxDQUFBLG1CQUFBLEVBQUFRLElBQUEsQ0FBQTlDLElBQUEsQ0FBQUgsUUFBQSxDQUFBLENBQUEsV0FBQSxDQUFBO0FBQ0EsS0FGQSxNQUVBO0FBQ0EsVUFBQXdELFlBQUEsR0FBQXJELElBQUEsQ0FBQUgsUUFBQSxDQUFBLENBQUEsU0FBQSxJQUFBLEdBQUEsR0FBQUMsTUFBQSxDQUFBdUMsVUFBQSxDQUFBLGFBQUEsQ0FBQSxDQUFBLENBQUFpQixPQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBdEQsSUFBQSxDQUFBSCxRQUFBLENBQUEsQ0FBQSxLQUFBLENBQUE7QUFDQXFELE1BQUFBLE1BQUEsQ0FBQUosSUFBQSxDQUFBTyxZQUFBO0FBQ0E7O0FBRUEzRCxJQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQSxFQUFBcUQsS0FBQSxHQUFBUSxNQUFBLENBQUFMLE1BQUE7QUFDQSxHQWZBLENBckNBLENBdURBO0FBQ0E7OztBQUNBLE1BQUFNLE9BQUEsR0FBQSxTQUFBQSxPQUFBLEdBQUE7QUFDQTtBQUNBLFFBQUFDLFFBQUEsQ0FBQUMsTUFBQSxLQUFBLElBQUEsSUFBQTlDLFNBQUEsQ0FBQStDLE1BQUEsS0FBQSxLQUFBLEVBQUE7QUFDQSxhQUFBLEtBQUE7QUFDQSxLQUpBLENBTUE7QUFDQTs7O0FBQ0FoRSxJQUFBQSxDQUFBLENBQUFpRSxPQUFBLENBQUEseUVBQUEsRUFBQTtBQUNBLGlCQUFBeEQsT0FBQSxDQUFBLElBQUEsQ0FEQSxDQUVBOztBQUZBLEtBQUEsRUFHQXlELElBSEEsQ0FHQSxVQUFBQyxRQUFBLEVBQUE7QUFDQXpCLE1BQUFBLFVBQUEsR0FBQXlCLFFBQUE7QUFFQSxVQUFBQyxTQUFBLEdBQUEsQ0FBQTtBQUNBLFVBQUFDLFVBQUEsR0FBQSxFQUFBO0FBQ0EsVUFBQUMsdUJBQUEsR0FBQSxFQUFBLENBTEEsQ0FPQTs7QUFDQTVCLE1BQUFBLFVBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQWxDLE9BQUEsQ0FBQSxVQUFBSyxJQUFBLEVBQUE7QUFDQUEsUUFBQUEsSUFBQSxDQUFBLFlBQUEsQ0FBQSxDQUFBTCxPQUFBLENBQUEsVUFBQStELFNBQUEsRUFBQTtBQUNBLGNBQUFDLGVBQUEsR0FBQUQsU0FBQSxDQUFBLE1BQUEsQ0FBQTtBQUNBSCxVQUFBQSxTQUFBLElBQUFHLFNBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQUUsTUFBQTs7QUFFQSxjQUFBRixTQUFBLENBQUEsTUFBQSxDQUFBLENBQUFFLE1BQUEsR0FBQSxDQUFBLEVBQUE7QUFDQSxnQkFBQSxDQUFBSixVQUFBLENBQUFLLFFBQUEsQ0FBQUYsZUFBQSxDQUFBLEVBQUE7QUFDQUgsY0FBQUEsVUFBQSxDQUFBTSxJQUFBLENBQUFILGVBQUE7QUFDQTs7QUFFQSxnQkFBQSxDQUFBRix1QkFBQSxDQUFBRSxlQUFBLENBQUEsRUFBQTtBQUNBRixjQUFBQSx1QkFBQSxDQUFBRSxlQUFBLENBQUEsR0FBQSxFQUFBO0FBQ0E7O0FBRUFELFlBQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQS9ELE9BQUEsQ0FBQSxVQUFBb0UsS0FBQSxFQUFBO0FBQ0FBLGNBQUFBLEtBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQS9ELElBQUEsQ0FBQSxNQUFBLENBQUE7QUFDQXlELGNBQUFBLHVCQUFBLENBQUFFLGVBQUEsQ0FBQSxDQUFBRyxJQUFBLENBQUFDLEtBQUE7QUFDQSxhQUhBO0FBSUE7QUFDQSxTQWxCQTtBQW1CQSxPQXBCQSxFQVJBLENBOEJBO0FBQ0E7O0FBQ0EsVUFBQVIsU0FBQSxLQUFBLENBQUEsSUFBQVMsR0FBQSxLQUFBLFlBQUEsRUFBQTtBQUNBLFlBQUFDLEdBQUEsR0FBQTNFLE1BQUEsRUFBQTtBQUNBLFlBQUE0RSxvQkFBQSxHQUFBNUUsTUFBQSxDQUFBLE9BQUEsRUFBQSxPQUFBLENBQUE7QUFDQSxZQUFBNkUsa0JBQUEsR0FBQTdFLE1BQUEsQ0FBQSxPQUFBLEVBQUEsT0FBQSxDQUFBOztBQUVBLFlBQUEyRSxHQUFBLENBQUFHLE9BQUEsQ0FBQUQsa0JBQUEsS0FBQUYsR0FBQSxDQUFBSSxRQUFBLENBQUFILG9CQUFBLENBQUEsRUFBQTtBQUNBaEYsVUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQW9ELElBQUEsQ0FBQTlDLElBQUEsQ0FBQUgsUUFBQSxDQUFBLENBQUEsa0JBQUEsQ0FBQTtBQUVBSCxVQUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsUUFBQSxFQUFBcUQsS0FBQTtBQUNBcEQsVUFBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBbUQsSUFBQSxDQUFBOUMsSUFBQSxDQUFBSCxRQUFBLENBQUEsQ0FBQSxrQkFBQSxDQUFBLEVBQUFpRixRQUFBLENBQUFwRixNQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsUUFBQSxDQUFBO0FBQ0FDLFVBQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQW9GLElBQUEsQ0FBQS9FLElBQUEsQ0FBQUgsUUFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBaUYsUUFBQSxDQUFBcEYsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQTtBQUNBQyxVQUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEyQyxRQUFBLENBQUEsZ0JBQUEsRUFBQVEsSUFBQSxDQUFBLGFBQUEsRUFBQWdDLFFBQUEsQ0FBQXBGLE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxRQUFBLENBQUE7QUFDQUEsVUFBQUEsTUFBQSxDQUFBc0IsV0FBQSxDQUFBMEIsYUFBQSxFQUFBSixRQUFBLENBQUEsZ0JBQUE7QUFDQTtBQUNBLE9BZEEsTUFjQTtBQUNBNUMsUUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQW9ELElBQUEsQ0FBQTlDLElBQUEsQ0FBQUgsUUFBQSxDQUFBLENBQUEsaUJBQUEsQ0FBQSxFQURBLENBR0E7O0FBQ0EsWUFBQW1GLFdBQUEsR0FBQXJGLENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTJDLFFBQUEsQ0FBQSxZQUFBLENBQUE7QUFFQTBCLFFBQUFBLFVBQUEsQ0FBQTdELE9BQUEsQ0FBQSxVQUFBK0QsU0FBQSxFQUFBO0FBQ0EsY0FBQWUsVUFBQSxHQUFBdEYsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBMkMsUUFBQSxDQUFBLFdBQUEsRUFBQXdDLFFBQUEsQ0FBQUUsV0FBQSxDQUFBO0FBQ0FyRixVQUFBQSxDQUFBLENBQUEsU0FBQSxDQUFBLENBQUEyQyxRQUFBLENBQUEsbUJBQUEsRUFBQVEsSUFBQSxDQUFBOUMsSUFBQSxDQUFBSCxRQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEsRUFBQWlGLFFBQUEsQ0FBQUcsVUFBQTtBQUVBLGNBQUFDLElBQUEsR0FBQWpCLHVCQUFBLENBQUFDLFNBQUEsQ0FBQTtBQUNBZ0IsVUFBQUEsSUFBQSxDQUFBQyxJQUFBLENBQUEsVUFBQUMsQ0FBQSxFQUFBQyxDQUFBLEVBQUE7QUFBQSxtQkFBQUQsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxHQUFBQyxDQUFBLENBQUEsU0FBQSxDQUFBO0FBQUEsV0FBQTtBQUVBSCxVQUFBQSxJQUFBLENBQUEvRSxPQUFBLENBQUEsVUFBQW9FLEtBQUEsRUFBQTtBQUNBLGdCQUFBZSxNQUFBLEdBQUEzRixDQUFBLENBQUEsU0FBQSxDQUFBLENBQUEyQyxRQUFBLENBQUEsT0FBQSxFQUFBd0MsUUFBQSxDQUFBRyxVQUFBLENBQUE7QUFDQSxnQkFBQU0sS0FBQSxHQUFBNUYsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBMkMsUUFBQSxDQUFBLFlBQUEsRUFBQXdDLFFBQUEsQ0FBQVEsTUFBQSxDQUFBO0FBQ0EsZ0JBQUFFLGNBQUEsR0FBQWpCLEtBQUEsQ0FBQSxTQUFBLENBQUEsR0FBQSxFQUFBO0FBRUEsZ0JBQUEvRCxJQUFBLEdBQUFELFVBQUEsQ0FBQWdFLEtBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQTtBQUNBLGdCQUFBa0IsbUJBQUEsR0FBQUQsY0FBQSxHQUFBeEYsSUFBQSxDQUFBSCxRQUFBLENBQUEsQ0FBQSxLQUFBLENBQUEsR0FBQXlCLElBQUEsQ0FBQW9FLEtBQUEsQ0FBQW5CLEtBQUEsQ0FBQSxTQUFBLENBQUEsR0FBQSxFQUFBLElBQUEsa0JBQUE7QUFDQSxnQkFBQW9CLGNBQUEsR0FBQTdGLE1BQUEsQ0FBQXlFLEtBQUEsQ0FBQSxhQUFBLENBQUEsQ0FBQSxDQUFBcUIsTUFBQSxDQUFBLE9BQUEsQ0FBQTtBQUVBakcsWUFBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBMkMsUUFBQSxDQUFBLGFBQUEsRUFBQXVELEdBQUEsQ0FBQSxPQUFBLEVBQUFyRixJQUFBLENBQUEsT0FBQSxDQUFBLEVBQUFzRixJQUFBLENBQUEsT0FBQSxFQUFBOUYsSUFBQSxDQUFBSCxRQUFBLENBQUEsQ0FBQSxNQUFBLElBQUEsR0FBQSxHQUFBVyxJQUFBLENBQUEsSUFBQSxDQUFBLEVBQUFzRixJQUFBLENBQUEsVUFBQSxFQUFBLElBQUEsRUFBQWhELElBQUEsQ0FBQXRDLElBQUEsQ0FBQSxJQUFBLENBQUEsRUFBQXNFLFFBQUEsQ0FBQVMsS0FBQTtBQUNBNUYsWUFBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBMkMsUUFBQSxDQUFBLGlCQUFBLEVBQUF3RCxJQUFBLENBQUEsT0FBQSxFQUFBOUYsSUFBQSxDQUFBSCxRQUFBLENBQUEsQ0FBQSxPQUFBLElBQUEsR0FBQSxHQUFBMEUsS0FBQSxDQUFBLE9BQUEsQ0FBQSxFQUFBekIsSUFBQSxDQUFBb0IsU0FBQSxFQUFBWSxRQUFBLENBQUFRLE1BQUE7QUFDQTNGLFlBQUFBLENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTJDLFFBQUEsQ0FBQSxXQUFBLEVBQUF3RCxJQUFBLENBQUEsT0FBQSxFQUFBSCxjQUFBLEVBQUFaLElBQUEsQ0FBQVUsbUJBQUEsRUFBQVgsUUFBQSxDQUFBUSxNQUFBOztBQUVBLGdCQUFBRSxjQUFBLEVBQUE7QUFDQUYsY0FBQUEsTUFBQSxDQUFBaEQsUUFBQSxDQUFBLHFCQUFBO0FBQ0E7QUFDQSxXQWhCQTtBQWlCQSxTQXhCQTtBQTBCQVcsUUFBQUEsV0FBQSxHQWhDQSxDQWtDQTs7QUFDQXZELFFBQUFBLE1BQUEsQ0FBQXNCLFdBQUEsQ0FBQTBCLGFBQUEsRUFBQUosUUFBQSxDQUFBLGlCQUFBO0FBQ0E1QyxRQUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsU0FBQSxFQUFBcUQsS0FBQSxHQUFBUSxNQUFBLENBQUF5QixXQUFBLEVBcENBLENBc0NBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFlBQUE1QyxRQUFBLEtBQUEsSUFBQSxJQUFBLENBQUEsa0JBQUEsRUFBQSxTQUFBLEVBQUFpQyxRQUFBLENBQUFqRSxPQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQTtBQUNBLGNBQUEyRixzQkFBQSxHQUFBO0FBQ0EsZ0NBQUE7QUFDQSxzQkFBQSxTQURBO0FBRUEsb0JBQUE7QUFGQSxhQURBO0FBS0EsdUJBQUE7QUFDQSxzQkFBQSxrQkFEQTtBQUVBLG9CQUFBO0FBRkE7QUFMQSxXQUFBO0FBV0EsY0FBQUMsV0FBQSxHQUFBRCxzQkFBQSxDQUFBM0YsT0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBO0FBRUEsY0FBQTZGLFdBQUEsR0FBQXRHLENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTJDLFFBQUEsQ0FBQSxZQUFBLENBQUE7QUFDQSxjQUFBNEQsT0FBQSxHQUFBdkcsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBMkMsUUFBQSxDQUFBLFFBQUEsRUFBQXdELElBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSxFQUFBaEIsUUFBQSxDQUFBbUIsV0FBQSxDQUFBO0FBQ0F0RyxVQUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUEyQyxRQUFBLENBQUEsZ0JBQUEsRUFBQVEsSUFBQSxDQUFBLFNBQUEsRUFBQWdDLFFBQUEsQ0FBQW9CLE9BQUE7QUFDQXZHLFVBQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQW1ELElBQUEsQ0FBQTlDLElBQUEsQ0FBQUgsUUFBQSxDQUFBLENBQUEsWUFBQSxDQUFBLEVBQUFpRixRQUFBLENBQUFvQixPQUFBO0FBQ0F2RyxVQUFBQSxDQUFBLENBQUEsWUFBQSxDQUFBLENBQUFtRCxJQUFBLENBQUFrRCxXQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsR0FBQSxFQUFBbEIsUUFBQSxDQUFBb0IsT0FBQTtBQUVBQSxVQUFBQSxPQUFBLENBQUFDLEVBQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQUMsS0FBQSxFQUFBO0FBQ0FBLFlBQUFBLEtBQUEsQ0FBQUMsY0FBQTtBQUNBbEYsWUFBQUEsY0FBQSxDQUFBNkUsV0FBQSxDQUFBO0FBQ0EsV0FIQTtBQUtBdEcsVUFBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFNBQUEsRUFBQTZELE1BQUEsQ0FBQTBDLFdBQUE7QUFDQTtBQUNBOztBQUVBMUcsTUFBQUEsR0FBQSxDQUFBLGlCQUFBLENBQUEsQ0FBQStHLE9BQUE7QUFDQSxLQXpIQTtBQTBIQSxHQWxJQSxDQXpEQSxDQThMQTtBQUNBOzs7QUFDQSxNQUFBQyxZQUFBLEdBQUEsU0FBQUEsWUFBQSxHQUFBO0FBQ0EsUUFBQTlDLFFBQUEsQ0FBQUMsTUFBQSxLQUFBLEtBQUEsSUFBQTlDLFNBQUEsQ0FBQStDLE1BQUEsS0FBQSxJQUFBLEVBQUE7QUFDQVYsTUFBQUEsV0FBQTtBQUNBTyxNQUFBQSxPQUFBO0FBQ0E7QUFDQSxHQUxBLENBaE1BLENBdU1BOzs7QUFDQTdELEVBQUFBLENBQUEsQ0FBQWlELE1BQUEsQ0FBQSxDQUFBdUQsRUFBQSxDQUFBLCtDQUFBLEVBQUFJLFlBQUE7O0FBRUEsTUFBQS9CLEdBQUEsS0FBQSxZQUFBLEVBQUE7QUFDQWpGLElBQUFBLEdBQUEsQ0FBQSxxQkFBQSxDQUFBLEdBQUFpSCxXQUFBLENBQUFoRCxPQUFBLEVBQUEsS0FBQSxDQUFBO0FBQ0FqRSxJQUFBQSxHQUFBLENBQUEsdUJBQUEsQ0FBQSxHQUFBaUgsV0FBQSxDQUFBdkQsV0FBQSxFQUFBLElBQUEsQ0FBQTtBQUNBOztBQUVBTyxFQUFBQSxPQUFBO0FBQ0EsQ0FoTkEsQyxDQ0xBO0FBQ0E7QUFDQTtBQUVBOzs7QUFDQSxJQUFBaUQsWUFBQSxHQUFBLFlBQUE7QUFDQWxILEVBQUFBLEdBQUEsQ0FBQSxlQUFBLENBQUEsQ0FBQXNFLElBQUEsQ0FBQSxZQUFBO0FBQ0EsUUFBQVcsR0FBQSxLQUFBLFlBQUEsRUFBQTtBQUNBakYsTUFBQUEsR0FBQSxDQUFBLHdCQUFBLENBQUEsR0FBQWlILFdBQUEsQ0FBQUUsU0FBQSxFQUFBLEtBQUEsSUFBQSxDQUFBO0FBQ0FBLE1BQUFBLFNBQUE7QUFDQTtBQUNBLEdBTEE7QUFPQSxNQUFBQyxXQUFBO0FBRUEsTUFBQWpFLGFBQUEsR0FBQSxDQUNBLFlBREEsRUFFQSxpQkFGQSxDQUFBOztBQUtBLE1BQUFnRSxTQUFBLEdBQUEsU0FBQUEsU0FBQSxHQUFBO0FBQ0E7QUFDQSxRQUFBakQsUUFBQSxDQUFBQyxNQUFBLEtBQUEsSUFBQSxJQUFBOUMsU0FBQSxDQUFBK0MsTUFBQSxLQUFBLEtBQUEsRUFBQTtBQUNBLGFBQUEsS0FBQTtBQUNBOztBQUVBaEUsSUFBQUEsQ0FBQSxDQUFBaUUsT0FBQSxDQUFBLHFFQUFBLEVBQUFDLElBQUEsQ0FBQSxVQUFBQyxRQUFBLEVBQUE7QUFDQXZFLE1BQUFBLEdBQUEsQ0FBQSxpQkFBQSxDQUFBLENBQUFzRSxJQUFBLENBQUEsWUFBQTtBQUNBbkUsUUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFFBQUEsRUFBQXNCLFdBQUEsQ0FBQTBCLGFBQUE7O0FBRUEsWUFBQW9CLFFBQUEsQ0FBQSxRQUFBLENBQUEsRUFBQTtBQUNBLGNBQUFBLFFBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQSxRQUFBLEVBQUE7QUFDQXBFLFlBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUE0QyxRQUFBLENBQUEsWUFBQTs7QUFFQSxnQkFBQXFFLFdBQUEsS0FBQSxRQUFBLEVBQUE7QUFDQWpILGNBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUEsTUFBQSxFQUFBb0QsSUFBQSxDQUFBLGNBQUE7QUFDQXBELGNBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUEsTUFBQSxFQUFBb0QsSUFBQSxDQUFBOUMsSUFBQSxDQUFBSCxRQUFBLENBQUEsQ0FBQSxXQUFBLENBQUE7QUFFQSxrQkFBQStHLGNBQUEsR0FBQWxILE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUEsTUFBQSxFQUFBbUgsV0FBQSxFQUFBO0FBQ0FuSCxjQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBb0gsTUFBQSxDQUFBRixjQUFBO0FBRUFsSCxjQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBc0IsV0FBQSxDQUFBLGtCQUFBO0FBRUErRixjQUFBQSxVQUFBLENBQUEsWUFBQTtBQUNBckgsZ0JBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUFtRyxHQUFBLENBQUEsUUFBQSxFQUFBLEVBQUEsRUFBQXZELFFBQUEsQ0FBQSxrQkFBQTtBQUNBLGVBRkEsRUFFQSxLQUZBLENBQUE7QUFHQTtBQUNBLFdBaEJBLE1BZ0JBO0FBQ0E1QyxZQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBNEMsUUFBQSxDQUFBLGlCQUFBO0FBQ0E1QyxZQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBLE1BQUEsRUFBQW9ELElBQUEsQ0FBQSxPQUFBO0FBQ0FwRCxZQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBLE1BQUEsRUFBQW9ELElBQUEsQ0FBQWdCLFFBQUEsQ0FBQSxTQUFBLENBQUE7O0FBRUEsZ0JBQUE4QyxlQUFBLEdBQUFsSCxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBLE1BQUEsRUFBQW1ILFdBQUEsRUFBQTs7QUFDQW5ILFlBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUFvSCxNQUFBLENBQUFGLGVBQUE7QUFFQWxILFlBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUFzQixXQUFBLENBQUEsa0JBQUE7QUFDQTs7QUFFQTJGLFVBQUFBLFdBQUEsR0FBQTdDLFFBQUEsQ0FBQSxRQUFBLENBQUE7QUFDQTtBQUNBLE9BakNBO0FBa0NBLEtBbkNBO0FBb0NBLEdBMUNBOztBQTRDQW5FLEVBQUFBLENBQUEsQ0FBQWlELE1BQUEsQ0FBQSxDQUFBdUQsRUFBQSxDQUFBLCtCQUFBLEVBQUEsWUFBQTtBQUNBUSxJQUFBQSxXQUFBLEdBQUEsSUFBQTtBQUNBRCxJQUFBQSxTQUFBO0FBQ0EsR0FIQTtBQUlBLENBL0RBLEVBQUEsQyxDQ0xBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBQU0sV0FBQSxHQUFBLFNBQUFBLFdBQUEsR0FBQTtBQUNBdkgsRUFBQUEsV0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLGFBQUEsRUFBQXFELElBQUEsQ0FBQTlDLElBQUEsQ0FBQUgsUUFBQSxDQUFBLENBQUEsVUFBQSxDQUFBLEVBREEsQ0FHQTs7QUFDQSxNQUFBb0gsUUFBQSxHQUFBdEgsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBbUcsSUFBQSxDQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUFLLEVBQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQUMsS0FBQSxFQUFBO0FBQ0FBLElBQUFBLEtBQUEsQ0FBQUMsY0FBQTtBQUNBMUcsSUFBQUEsQ0FBQSxDQUFBLDRCQUFBLENBQUEsQ0FBQW1ELElBQUEsQ0FBQSxFQUFBO0FBQ0FuRCxJQUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLENBQUFxQixXQUFBLENBQUEsYUFBQTtBQUNBTixJQUFBQSxXQUFBO0FBQ0EsR0FMQSxFQUtBb0UsUUFMQSxDQUtBckYsV0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FMQSxDQUFBO0FBTUFFLEVBQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQTJDLFFBQUEsQ0FBQSxnQkFBQSxFQUFBUSxJQUFBLENBQUEsU0FBQSxFQUFBZ0MsUUFBQSxDQUFBbUMsUUFBQTtBQUNBdEgsRUFBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBbUQsSUFBQSxDQUFBOUMsSUFBQSxDQUFBSCxRQUFBLENBQUEsQ0FBQSxzQkFBQSxDQUFBLEVBQUFpRixRQUFBLENBQUFtQyxRQUFBO0FBRUF0SCxFQUFBQSxDQUFBLENBQUEsUUFBQSxDQUFBLENBQUEyQyxRQUFBLENBQUEsaUJBQUEsRUFBQWlCLE1BQUEsQ0FBQTBELFFBQUEsRUFBQW5DLFFBQUEsQ0FBQXJGLFdBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsRUFiQSxDQWVBOztBQUNBUSxFQUFBQSxRQUFBLENBQUFFLE9BQUEsQ0FBQSxVQUFBQyxPQUFBLEVBQUE7QUFDQSxRQUFBOEcsUUFBQSxHQUFBdkgsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBbUcsSUFBQSxDQUFBLE1BQUEsRUFBQSxNQUFBMUYsT0FBQSxDQUFBLElBQUEsQ0FBQSxFQUFBMEYsSUFBQSxDQUFBLGNBQUEsRUFBQTFGLE9BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQTtBQUVBVCxJQUFBQSxDQUFBLENBQUEsU0FBQSxDQUFBLENBQUEyQyxRQUFBLENBQUEsY0FBQSxFQUFBUSxJQUFBLENBQUExQyxPQUFBLENBQUEsTUFBQSxDQUFBLEVBQUEwRSxRQUFBLENBQUFvQyxRQUFBO0FBRUEsUUFBQUMsTUFBQSxHQUFBeEgsQ0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBMkMsUUFBQSxDQUFBLGVBQUEsRUFBQXdDLFFBQUEsQ0FBQW9DLFFBQUEsQ0FBQTtBQUNBNUcsSUFBQUEsS0FBQSxDQUFBSCxPQUFBLENBQUEsVUFBQUssSUFBQSxFQUFBO0FBQ0EsVUFBQStFLEtBQUEsR0FBQTVGLENBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQW1GLFFBQUEsQ0FBQXFDLE1BQUEsQ0FBQTs7QUFDQSxVQUFBL0csT0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBaUUsUUFBQSxDQUFBN0QsSUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUE7QUFDQSxZQUFBNEcsT0FBQSxHQUFBekgsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBMkMsUUFBQSxDQUFBLGFBQUEsRUFBQXVELEdBQUEsQ0FBQSxPQUFBLEVBQUFyRixJQUFBLENBQUEsT0FBQSxDQUFBLEVBQUFzQyxJQUFBLENBQUF0QyxJQUFBLENBQUEsSUFBQSxDQUFBLEVBQUFzRSxRQUFBLENBQUFTLEtBQUEsQ0FBQTs7QUFFQSxZQUFBL0UsSUFBQSxDQUFBLFVBQUEsQ0FBQSxFQUFBO0FBQ0E0RyxVQUFBQSxPQUFBLENBQUF0QixJQUFBLENBQUEsVUFBQSxFQUFBLElBQUEsRUFBQXhELFFBQUEsQ0FBQSxrQkFBQTtBQUNBO0FBQ0E7QUFDQSxLQVRBOztBQVdBLFFBQUEsQ0FBQWxDLE9BQUEsQ0FBQSxVQUFBLENBQUEsRUFBQTtBQUNBOEcsTUFBQUEsUUFBQSxDQUFBZixFQUFBLENBQUEsT0FBQSxFQUFBLFVBQUFDLEtBQUEsRUFBQTtBQUNBQSxRQUFBQSxLQUFBLENBQUFDLGNBQUE7QUFDQWxGLFFBQUFBLGNBQUEsQ0FBQWYsT0FBQSxDQUFBO0FBQ0FaLFFBQUFBLEtBQUEsQ0FBQXdCLFdBQUEsQ0FBQSxhQUFBO0FBQ0EsT0FKQTtBQUtBLEtBTkEsTUFNQTtBQUNBa0csTUFBQUEsUUFBQSxDQUFBNUUsUUFBQSxDQUFBLGtCQUFBO0FBQ0E0RSxNQUFBQSxRQUFBLENBQUFmLEVBQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQUMsS0FBQSxFQUFBO0FBQ0FBLFFBQUFBLEtBQUEsQ0FBQUMsY0FBQTtBQUNBLE9BRkE7QUFHQTs7QUFFQTFHLElBQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTRELE1BQUEsQ0FBQTJELFFBQUEsRUFBQXBDLFFBQUEsQ0FBQXJGLFdBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxVQUFBLENBQUE7QUFDQSxHQS9CQSxFQWhCQSxDQWlEQTs7QUFDQUEsRUFBQUEsV0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBMEcsRUFBQSxDQUFBLE9BQUEsRUFBQSxZQUFBO0FBQ0EzRyxJQUFBQSxLQUFBLENBQUE2SCxXQUFBLENBQUEsYUFBQTtBQUNBLEdBRkE7QUFJQTNILEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQXlHLEVBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQTtBQUNBLFFBQUEzRyxLQUFBLENBQUE4SCxRQUFBLENBQUEsYUFBQSxDQUFBLEVBQUE7QUFDQTlILE1BQUFBLEtBQUEsQ0FBQXdCLFdBQUEsQ0FBQSxhQUFBO0FBQ0E7QUFDQSxHQUpBLEVBdERBLENBNERBOztBQUNBckIsRUFBQUEsQ0FBQSxDQUFBaUQsTUFBQSxDQUFBLENBQUF1RCxFQUFBLENBQUEsUUFBQSxFQUFBLFVBQUFDLEtBQUEsRUFBQTtBQUNBLFFBQUFtQixtQkFBQSxHQUFBNUgsQ0FBQSxDQUFBaUQsTUFBQSxDQUFBLENBQUE0RSxTQUFBLEVBQUE7O0FBRUEsUUFBQUQsbUJBQUEsSUFBQSxFQUFBLEVBQUE7QUFDQS9ILE1BQUFBLEtBQUEsQ0FBQThDLFFBQUEsQ0FBQSxlQUFBO0FBQ0EsS0FGQSxNQUVBO0FBQ0E5QyxNQUFBQSxLQUFBLENBQUF3QixXQUFBLENBQUEsZUFBQTtBQUNBO0FBQ0EsR0FSQTtBQVNBLENBdEVBLEMsQ0NKQTtBQUNBO0FBQ0E7OztBQUVBLElBQUF5RyxLQUFBLEdBQUEsWUFBQTtBQUNBLE1BQUFDLFdBQUEsR0FBQSxDQUNBLE1BREEsRUFFQSxPQUZBLEVBR0EsTUFIQSxDQUFBO0FBTUEsTUFBQUMsY0FBQSxHQUFBO0FBQ0EsWUFBQTtBQUNBLGVBQUEzSCxJQUFBLENBQUFILFFBQUEsQ0FBQSxDQUFBLFlBQUEsQ0FEQTtBQUVBLGNBQUE7QUFGQSxLQURBO0FBS0EsYUFBQTtBQUNBLGVBQUFHLElBQUEsQ0FBQUgsUUFBQSxDQUFBLENBQUEsYUFBQSxDQURBO0FBRUEsY0FBQTtBQUZBLEtBTEE7QUFTQSxZQUFBO0FBQ0EsZUFBQUcsSUFBQSxDQUFBSCxRQUFBLENBQUEsQ0FBQSxZQUFBLENBREE7QUFFQSxjQUFBO0FBRkE7QUFUQSxHQUFBOztBQWVBLE1BQUErSCxHQUFBLEdBQUEsU0FBQUEsR0FBQSxDQUFBQyxTQUFBLEVBQUE7QUFBQSxRQUFBQyxTQUFBLHVFQUFBLEVBQUE7QUFDQUMsSUFBQUEsYUFBQSxHQUFBRixTQUFBO0FBRUFsSSxJQUFBQSxDQUFBLENBQUEsdUJBQUEsQ0FBQSxDQUFBbUQsSUFBQSxDQUFBNkUsY0FBQSxDQUFBRSxTQUFBLENBQUEsQ0FBQSxPQUFBLENBQUE7QUFDQWxJLElBQUFBLENBQUEsQ0FBQSxvQkFBQSxDQUFBLENBQUFtRCxJQUFBLENBQUE2RSxjQUFBLENBQUFFLFNBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQTtBQUVBbEksSUFBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBcUIsV0FBQSxDQUFBLGFBQUE4RyxTQUFBLEVBQUF4RixRQUFBLENBQUEsYUFBQXVGLFNBQUEsRUFOQSxDQVFBOztBQUNBLFFBQUFBLFNBQUEsS0FBQSxNQUFBLEVBQUE7QUFDQXRGLE1BQUFBLFlBQUEsQ0FBQXlGLFVBQUEsQ0FBQSxPQUFBO0FBQ0EsS0FGQSxNQUVBO0FBQ0F6RixNQUFBQSxZQUFBLENBQUFFLE9BQUEsQ0FBQSxPQUFBLEVBQUFvRixTQUFBO0FBQ0E7QUFDQSxHQWRBLENBdEJBLENBc0NBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBQUUsYUFBQSxHQUFBeEYsWUFBQSxDQUFBQyxPQUFBLENBQUEsT0FBQSxLQUFBLE1BQUE7O0FBRUEsTUFBQXVGLGFBQUEsRUFBQTtBQUNBSCxJQUFBQSxHQUFBLENBQUFHLGFBQUEsQ0FBQTtBQUNBOztBQUVBcEksRUFBQUEsQ0FBQSxDQUFBLFlBQUE7QUFDQSxRQUFBLENBQUFvSSxhQUFBLEVBQUE7QUFDQXBJLE1BQUFBLENBQUEsQ0FBQSx1QkFBQSxDQUFBLENBQUFtRCxJQUFBLENBQUE5QyxJQUFBLENBQUFILFFBQUEsQ0FBQSxDQUFBLFlBQUEsQ0FBQTtBQUNBOztBQUVBRixJQUFBQSxDQUFBLENBQUEsa0JBQUEsQ0FBQSxDQUFBd0csRUFBQSxDQUFBLE9BQUEsRUFBQSxVQUFBQyxLQUFBLEVBQUE7QUFDQUEsTUFBQUEsS0FBQSxDQUFBQyxjQUFBLEdBREEsQ0FHQTs7QUFDQSxVQUFBNEIsY0FBQSxHQUFBUCxXQUFBLENBQUFRLE9BQUEsQ0FBQUgsYUFBQSxDQUFBO0FBQ0EsVUFBQUYsU0FBQSxHQUFBSCxXQUFBLENBQUFPLGNBQUEsR0FBQSxDQUFBLENBQUEsSUFBQVAsV0FBQSxDQUFBLENBQUEsQ0FBQSxDQUxBLENBT0E7O0FBQ0FFLE1BQUFBLEdBQUEsQ0FBQUMsU0FBQSxFQUFBRSxhQUFBLENBQUE7QUFDQSxLQVRBO0FBVUEsR0FmQSxDQUFBO0FBZ0JBLENBL0RBLEVBQUEsQyxDQ0pBO0FBQ0E7QUFDQTs7O0FBRUFwSSxDQUFBLENBQUEsWUFBQTtBQUNBSCxFQUFBQSxLQUFBLEdBQUFHLENBQUEsQ0FBQSxNQUFBLENBQUE7QUFFQUYsRUFBQUEsV0FBQSxHQUFBRSxDQUFBLENBQUEsYUFBQSxDQUFBO0FBQ0FGLEVBQUFBLFdBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQUUsQ0FBQSxDQUFBLG9CQUFBLEVBQUFGLFdBQUEsQ0FBQTtBQUNBQSxFQUFBQSxXQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsY0FBQSxJQUFBRSxDQUFBLENBQUEsZUFBQSxFQUFBRixXQUFBLENBQUEsUUFBQSxDQUFBLENBQUE7QUFDQUEsRUFBQUEsV0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLGFBQUEsSUFBQUUsQ0FBQSxDQUFBLGNBQUEsRUFBQUYsV0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLFdBQUEsQ0FBQSxTQUFBLENBQUEsR0FBQUUsQ0FBQSxDQUFBLHFCQUFBLEVBQUFGLFdBQUEsQ0FBQTtBQUNBQSxFQUFBQSxXQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsVUFBQSxJQUFBRSxDQUFBLENBQUEsV0FBQSxFQUFBRixXQUFBLENBQUEsU0FBQSxDQUFBLENBQUE7QUFFQUMsRUFBQUEsTUFBQSxHQUFBQyxDQUFBLENBQUEsUUFBQSxDQUFBO0FBQ0FELEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsR0FBQUMsQ0FBQSxDQUFBLGVBQUEsRUFBQUQsTUFBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLElBQUFDLENBQUEsQ0FBQSxRQUFBLEVBQUFELE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsT0FBQSxJQUFBQyxDQUFBLENBQUEsUUFBQSxFQUFBRCxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxHQUFBQyxDQUFBLENBQUEsZ0JBQUEsRUFBQUQsTUFBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxTQUFBLElBQUFDLENBQUEsQ0FBQSxVQUFBLEVBQUFELE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsUUFBQSxJQUFBQyxDQUFBLENBQUEsU0FBQSxFQUFBRCxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFlBQUEsSUFBQUMsQ0FBQSxDQUFBLGFBQUEsRUFBQUQsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxTQUFBLElBQUFDLENBQUEsQ0FBQSxVQUFBLEVBQUFELE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLEdBQUFDLENBQUEsQ0FBQSxlQUFBLEVBQUFELE1BQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxJQUFBQyxDQUFBLENBQUEsU0FBQSxFQUFBRCxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFFBQUEsRUFBQSxNQUFBLElBQUFDLENBQUEsQ0FBQSxPQUFBLEVBQUFELE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBLE1BQUEsSUFBQUMsQ0FBQSxDQUFBLE9BQUEsRUFBQUQsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxTQUFBLElBQUFDLENBQUEsQ0FBQSxVQUFBLEVBQUFELE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTtBQUVBSCxFQUFBQSxHQUFBLENBQUEsZUFBQSxDQUFBLENBQUErRyxPQUFBLEdBekJBLENBMkJBOztBQUNBVSxFQUFBQSxXQUFBLEdBNUJBLENBOEJBOztBQUNBLE1BQUEsaUJBQUFwRyxTQUFBLEVBQUE7QUFDQWxCLElBQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxZQUFBLEVBQUFzRCxJQUFBLENBQUEsTUFBQSxFQUFBRixJQUFBLENBQUE5QyxJQUFBLENBQUFILFFBQUEsQ0FBQSxDQUFBLHNCQUFBLENBQUE7O0FBRUEsUUFBQSxpQkFBQWUsU0FBQSxFQUFBO0FBQ0FBLE1BQUFBLFNBQUEsQ0FBQXVILFdBQUEsQ0FBQUMsS0FBQSxDQUFBO0FBQUEsZ0JBQUE7QUFBQSxPQUFBLEVBQUFDLElBQUEsQ0FBQSxVQUFBQyxVQUFBLEVBQUE7QUFDQSxZQUFBQSxVQUFBLENBQUEsT0FBQSxDQUFBLEtBQUEsU0FBQSxFQUFBO0FBQ0E7QUFDQTVILFVBQUFBLFdBQUE7QUFDQSxTQUhBLE1BR0EsSUFBQTRILFVBQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxRQUFBLEVBQUE7QUFDQTtBQUNBbkgsVUFBQUEsY0FBQTtBQUNBMUIsVUFBQUEsV0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQXVELElBQUEsQ0FBQSxrQkFBQSxFQUFBdUYsSUFBQTtBQUNBLFNBSkEsTUFJQTtBQUNBO0FBQ0E1SSxVQUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLENBQUEyQyxRQUFBLENBQUEsZ0JBQUE7QUFDQTVDLFVBQUFBLE1BQUEsQ0FBQTRDLFFBQUEsQ0FBQSxvQkFBQTtBQUVBM0MsVUFBQUEsQ0FBQSxDQUFBLFNBQUEsRUFBQUQsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFlBQUEsQ0FBQSxDQUFBLENBQUF5RyxFQUFBLENBQUEsT0FBQSxFQUFBLFVBQUFDLEtBQUEsRUFBQTtBQUNBQSxZQUFBQSxLQUFBLENBQUFDLGNBQUE7QUFDQTNGLFlBQUFBLFdBQUEsQ0FBQSxJQUFBLENBQUE7QUFDQSxXQUhBO0FBSUE7QUFDQSxPQWxCQTtBQW1CQSxLQXBCQSxNQW9CQTtBQUNBQSxNQUFBQSxXQUFBO0FBQ0E7QUFDQSxHQTFCQSxNQTBCQTtBQUNBO0FBQ0FTLElBQUFBLGNBQUE7QUFDQTFCLElBQUFBLFdBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxVQUFBLEVBQUF1RCxJQUFBLENBQUEsa0JBQUEsRUFBQXVGLElBQUE7QUFDQTtBQUNBLENBOURBLENBQUEsQyxDQWdFQTtBQUNBOztBQUNBLElBQUEsbUJBQUEzSCxTQUFBLEVBQUE7QUFDQWdDLEVBQUFBLE1BQUEsQ0FBQTRGLGdCQUFBLENBQUEsTUFBQSxFQUFBLFlBQUE7QUFDQWpKLElBQUFBLEdBQUEsQ0FBQSxnQkFBQSxDQUFBLEdBQUFxQixTQUFBLENBQUE2SCxhQUFBLENBQUFDLFFBQUEsQ0FBQSxvQkFBQSxDQUFBO0FBRUFuSixJQUFBQSxHQUFBLENBQUEsZ0JBQUEsQ0FBQSxDQUFBOEksSUFBQSxDQUFBLFVBQUFNLFlBQUEsRUFBQSxDQUNBO0FBQ0EsS0FGQSxFQUVBLFVBQUFDLEtBQUEsRUFBQSxDQUNBO0FBQ0EsS0FKQTtBQUtBLEdBUkE7QUFTQSxDLENBRUE7QUFDQTs7O0FBQ0FqSixDQUFBLENBQUEsWUFBQTtBQUNBRCxFQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsU0FBQSxFQUFBb0QsSUFBQSxDQUFBOUMsSUFBQSxDQUFBSCxRQUFBLENBQUEsQ0FBQSxTQUFBLENBQUE7QUFDQSxDQUZBLENBQUE7O0FBSUEsSUFBQWdKLHNCQUFBLEdBQUEsU0FBQUEsc0JBQUEsR0FBQTtBQUNBLE1BQUFDLFNBQUEsR0FBQWxJLFNBQUEsQ0FBQStDLE1BQUE7O0FBRUEsTUFBQW1GLFNBQUEsS0FBQSxJQUFBLEVBQUE7QUFDQXBKLElBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxTQUFBLEVBQUFzQixXQUFBLENBQUEsaUJBQUE7QUFDQSxHQUZBLE1BRUE7QUFDQXRCLElBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxTQUFBLEVBQUE0QyxRQUFBLENBQUEsaUJBQUE7QUFDQTtBQUNBLENBUkE7O0FBVUFNLE1BQUEsQ0FBQTRGLGdCQUFBLENBQUEsUUFBQSxFQUFBSyxzQkFBQTtBQUNBakcsTUFBQSxDQUFBNEYsZ0JBQUEsQ0FBQSxTQUFBLEVBQUFLLHNCQUFBIiwiZmlsZSI6InZsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gYmFzZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5sZXQgY3VlID0gWyBdO1xyXG4vLyBsZXQgJHBhbmVsLCAkc3RhdGlvbiwgJHBlcm1pc3Npb24sICRuZXR3b3JrLCAkc3RhdHVzO1xyXG5sZXQgJGJvZHksICRuYXZpZ2F0aW9uLCAkcGFuZWw7XHJcblxyXG5jdWVbXCJsb2FkLWRvY3VtZW50XCJdID0gJC5EZWZlcnJlZCgpO1xyXG5jdWVbXCJsb2FkLWRlcGFydHVyZXNcIl0gPSAkLkRlZmVycmVkKCk7XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gbG9jYWxpemF0aW9uIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBjb25zdCBsYW5ndWFnZSA9IChuYXZpZ2F0b3IubGFuZ3VhZ2UgPyBuYXZpZ2F0b3IubGFuZ3VhZ2Uuc3Vic3RyKDAsIDIpIDogXCJwdFwiKTtcclxuY29uc3QgbGFuZ3VhZ2UgPSBcInB0XCI7XHJcblxyXG4vLyBpZiAobGFuZ3VhZ2UgPT09IFwicHRcIikge1xyXG4gICAgbW9tZW50LmxvY2FsZShcInB0LWJyXCIpO1xyXG4vLyB9IGVsc2Uge1xyXG4vLyAgICAgbW9tZW50LmxvY2FsZShsYW5ndWFnZSk7XHJcbi8vIH1cclxuXHJcbmNvbnN0IEwxMG4gPSB7XHJcbiAgICBcInB0XCI6IHtcclxuICAgICAgICBcIm5leHQtZGVwYXJ0dXJlc1wiOiBcIlByw7N4aW1vcyB0cmVuc1wiLFxyXG4gICAgICAgIFwicmVhbC10aW1lXCI6IFwiVGVtcG8gcmVhbFwiLFxyXG4gICAgICAgIFwiYXJlLXlvdS1hdFwiOiBcIkVzdMOhIGVtXCIsXHJcbiAgICAgICAgXCJkaXJlY3Rpb25cIjogXCJTZW50aWRvXCIsXHJcbiAgICAgICAgXCJub3dcIjogXCJBZ29yYVwiLFxyXG4gICAgICAgIFwidHJhaW5cIjogXCJUcmVtXCIsXHJcbiAgICAgICAgXCJsaW5lXCI6IFwiTGluaGFcIixcclxuICAgICAgICBcInVwZGF0ZWRcIjogXCJBdHVhbGl6YWRvXCIsXHJcbiAgICAgICAgXCJvdXQtb2Ytb3BlcmF0aW9uXCI6IFwiRm9yYSBkZSBvcGVyYcOnw6NvXCIsXHJcbiAgICAgICAgXCJvcGVyYXRpb24taG91cnNcIjogXCJPIFZMVCBDYXJpb2NhIGNpcmN1bGE8YnI+IHRvZG9zIG9zIGRpYXMgZGFzIDZoIMOgIDBoXCIsXHJcbiAgICAgICAgXCJhZ29cIjogXCJhdHLDoXNcIixcclxuICAgICAgICBcInN0YXRpb25zXCI6IFwiRXN0YcOnw7Vlc1wiLFxyXG4gICAgICAgIFwiZmluZC1uZWFyZXN0LXN0YXRpb25cIjogXCJMb2NhbGl6YXIgZXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcIixcclxuICAgICAgICBcImF1dG8tdGhlbWVcIjogXCJUZW1hIGF1dG9tw6F0aWNvXCIsXHJcbiAgICAgICAgXCJsaWdodC10aGVtZVwiOiBcIlRlbWEgY2xhcm9cIixcclxuICAgICAgICBcImRhcmstdGhlbWVcIjogXCJUZW1hIGVzY3Vyb1wiLFxyXG4gICAgICAgIFwib2ZmbGluZVwiOiBcIlNlbSBjb25leMOjb1wiLFxyXG4gICAgICAgIFwic3RhdHVzLW9rXCI6IFwiT3BlcmHDp8OjbyBub3JtYWxcIlxyXG4gICAgfVxyXG4gICAgLy8gXCJlblwiOiB7XHJcbiAgICAvLyAgICAgXCJuZXh0LWRlcGFydHVyZXNcIjogXCJOZXh0IHRyYWluc1wiLFxyXG4gICAgLy8gICAgIFwicmVhbC10aW1lXCI6IFwiUmVhbCBUaW1lXCIsXHJcbiAgICAvLyAgICAgXCJhcmUteW91LWF0XCI6IFwiQXJlIHlvdSBhdFwiLFxyXG4gICAgLy8gICAgIFwiZGlyZWN0aW9uXCI6IFwiRGlyZWN0aW9uXCIsXHJcbiAgICAvLyAgICAgXCJub3dcIjogXCJOb3dcIixcclxuICAgIC8vICAgICBcInRyYWluXCI6IFwiVHJhaW5cIixcclxuICAgIC8vICAgICBcImxpbmVcIjogXCJMaW5lXCIsXHJcbiAgICAvLyAgICAgXCJ1cGRhdGVkXCI6IFwiVXBkYXRlZFwiLFxyXG4gICAgLy8gICAgIFwib3V0LW9mLW9wZXJhdGlvblwiOiBcIlNlcnZpY2UgY2xvc2VkXCIsXHJcbiAgICAvLyAgICAgXCJvcGVyYXRpb24taG91cnNcIjogXCJWTFQgQ2FyaW9jYSBydW5zPGJyPiBkYWlseSBmcm9tIDZhbSB0byAxMmFtXCIsXHJcbiAgICAvLyAgICAgXCJhZ29cIjogXCJhZ29cIixcclxuICAgIC8vICAgICBcInN0YXRpb25zXCI6IFwiU3RhdGlvbnNcIixcclxuICAgIC8vICAgICBcImZpbmQtbmVhcmVzdC1zdGF0aW9uXCI6IFwiRmluZCB5b3VyIG5lYXJlc3Qgc3RhdGlvblwiLFxyXG4gICAgLy8gICAgIFwiYXV0by10aGVtZVwiOiBcIkF1dG8gdGhlbWVcIixcclxuICAgIC8vICAgICBcImxpZ2h0LXRoZW1lXCI6IFwiTGlnaHQgdGhlbWVcIixcclxuICAgIC8vICAgICBcImRhcmstdGhlbWVcIjogXCJEYXJrIHRoZW1lXCIsXHJcbiAgICAvLyAgICAgXCJvZmZsaW5lXCI6IFwiT2ZmbGluZVwiLFxyXG4gICAgLy8gICAgIFwic3RhdHVzLW9rXCI6IFwiR29vZCBzZXJ2aWNlXCJcclxuICAgIC8vIH0sXHJcbiAgICAvLyBcImVzXCI6IHtcclxuXHJcbiAgICAvLyB9XHJcbn07XHJcbiIsImxldCBzdGF0aW9ucyA9IFtcblx0e1xuXHRcdFwibmFtZVwiOiBcIkFudG9uaW8gQ2FybG9zXCIsXG5cdFx0XCJpZFwiOiBcImFudG9uaW8tY2FybG9zXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDIsIDM6IDIgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTExMzE1MzQ0MzkxMzE5LCAtNDMuMTcyMDUwOTk3NTk4MjQxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHQvLyBcImRpc2FibGVkXCI6IHRydWUsXG5cdFx0XCJuYW1lXCI6IFwiQ2FtZXJpbm9cIixcblx0XHRcImlkXCI6IFwiY2FtZXJpbm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogOCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDE2OTgwNDYwMjIzODIsIC00My4xODM5ODM2MTQ5MzM0ODldLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNhbmRlbMOhcmlhXCIsXG5cdFx0XCJpZFwiOiBcImNhbmRlbGFyaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNiwgMzogNiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDE3MjUwMjkzODQyNTksIC00My4xNzg4MDg2NjU0MTg2NzFdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNhcmlvY2FcIixcblx0XHRcImlkXCI6IFwiY2FyaW9jYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA0LCAzOiA0IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNzQ4NDUwNzI1MjgxMSwgLTQzLjE3NjY0NTUxODAzODkxN10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ2VudHJhbFwiLFxuXHRcdFwiaWRcIjogXCJjZW50cmFsXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDUsIDM6IDEwIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMjcwNDk2MDc0NDk1MiwgLTQzLjE5MjYyNTMxNDM3NzMzOF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ2lkYWRlIGRvIFNhbWJhXCIsXG5cdFx0XCJpZFwiOiBcImNpZGFkZS1kby1zYW1iYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTQxNzk5NTcxMjgwNjcsIC00My4xOTY4ODQwODIwNzg0NzZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNpbmVsw6JuZGlhXCIsXG5cdFx0XCJpZFwiOiBcImNpbmVsYW5kaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMywgMzogMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MTA3MzQwMDE4NDIyNDMsIC00My4xNzU0MjUzODczNjQ5MzJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNvbG9tYm9cIixcblx0XHRcImlkXCI6IFwiY29sb21ib1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNTE3NTIxOTAwOTQxNSwgLTQzLjE3ODAxNjk2ODIyODgxOF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ29yZGVpcm8gZGEgR3Jhw6dhXCIsXG5cdFx0XCJpZFwiOiBcImNvcmRlaXJvLWRhLWdyYWNhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEzLCAyOiA4IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NzEwNDYyOTkyMzExNywgLTQzLjIwNDE3ODQwMzUzMzcwM10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIkNyaXN0aWFubyBPdHRvbmlcIixcblx0XHRcImlkXCI6IFwiY3Jpc3RpYW5vLW90dG9uaVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAzOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMzA2MTI3ODQ4MDY0OCwgLTQzLjE5MDc0OTEwOTQyMTQ4OV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiRXF1YWRvclwiLFxuXHRcdFwiaWRcIjogXCJlcXVhZG9yXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE4LCAyOiAxMSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTc4OTQ1NjQ2ODc3ODIsIC00My4yMDQ4MDUwMTQ0NDA4MTVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkdhbWJvYVwiLFxuXHRcdFwiaWRcIjogXCJnYW1ib2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTYsIDI6IDYgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3OTU5NDA4MzcyODQ1LCAtNDMuMTk5MzM2NjgzMjQ2MzAxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJIYXJtb25pYVwiLFxuXHRcdFwiaWRcIjogXCJoYXJtb25pYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTU3NTQ0MzcyNzMzODYsIC00My4xOTE0Mjc2Mzk1ODQ0OTZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlBhcmFkYSBkb3MgTXVzZXVzXCIsXG5cdFx0XCJpZFwiOiBcInBhcmFkYS1kb3MtbXVzZXVzXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDggfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1OTQ2NTg2ODAyMjY0LCAtNDMuMTgxOTU1OTgwNTgxMjcyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQYXJhZGEgZG9zIE5hdmlvc1wiLFxuXHRcdFwiaWRcIjogXCJwYXJhZGEtZG9zLW5hdmlvc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NDEzOTYyNTMwMzg3NSwgLTQzLjE4NzE4MTgzMDYxNzQ0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQZXJlaXJhIFJlaXNcIixcblx0XHRcImlkXCI6IFwicGVyZWlyYS1yZWlzXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE3LCAyOiAxMCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTY2NDcwNjQ5NjA0MywgLTQzLjIwMTc3MzExMTUyMzU5M10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJhw6dhIFhWXCIsXG5cdFx0XCJpZFwiOiBcInByYWNhLXh2XCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAyMDcwMTI4OTQ1ODQ4LCAtNDMuMTczMTE3Mzk1NzgzODc2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQcmFpYSBGb3Jtb3NhXCIsXG5cdFx0XCJpZFwiOiBcInByYWlhLWZvcm1vc2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTAsIDI6IDEzIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMzE3NzE1MjM4ODA1NywgLTQzLjIwODE2MTk2NDkwMjMwM10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJvdmlkw6puY2lhXCIsXG5cdFx0XCJpZFwiOiBcInByb3ZpZGVuY2lhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE1IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NzQ4OTkyMjAxNDM4MywgLTQzLjE5NjcwMTQwMDg5MDAzNV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUm9kb3Zpw6FyaWFcIixcblx0XHRcImlkXCI6IFwicm9kb3ZpYXJpYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxOSwgMjogMTIgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk4ODA1NTc0MjUxNzk5LCAtNDMuMjA3MzQyOTQxNDc1OTg2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTYWFyYVwiLFxuXHRcdFwiaWRcIjogXCJzYWFyYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA0IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNTkxMjEwODQ2MDI1MywgLTQzLjE4NzMyMDc4MjIyODIwNV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIlNhbnRhIFJpdGFcIixcblx0XHRcImlkXCI6IFwic2FudGEtcml0YVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAzOiA3IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMDU5NDE2NzQxMDY0OSwgLTQzLjE4MTUwOTA0OTg1NDIwNl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFszXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FudG8gQ3Jpc3RvXCIsXG5cdFx0XCJpZFwiOiBcInNhbnRvLWNyaXN0b1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMiwgMjogNyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTUzMjcyODIwMDIxNDYsIC00My4yMDAyNTkxODE3NTU3NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FudG9zIER1bW9udFwiLFxuXHRcdFwiaWRcIjogXCJzYW50b3MtZHVtb250XCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEsIDM6IDEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTEyMjg2ODc0OTYyNDAxLCAtNDMuMTY3NjMyMjU5NTQ1ODRdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlPDo28gQmVudG9cIixcblx0XHRcImlkXCI6IFwic2FvLWJlbnRvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDcgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk4NjQ4MDk2MDUxMDEyLCAtNDMuMTc5OTY0MzExNzY0ODg0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTZXRlIGRlIFNldGVtYnJvXCIsXG5cdFx0XCJpZFwiOiBcInNldGUtZGUtc2V0ZW1icm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNSwgMzogNSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDUzMDU5MDA5Nzc4OTcsIC00My4xNzc0NjM4MTYzNDY5MjJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlRpcmFkZW50ZXNcIixcblx0XHRcImlkXCI6IFwidGlyYWRlbnRlc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAzIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNjU3ODIyMjAyNjExNiwgLTQzLjE4Mjg1NDIzNjU1NzgwMl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiVXRvcGlhIEFxdWFSaW9cIixcblx0XHRcImlkXCI6IFwidXRvcGlhLWFxdWFyaW9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTAgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODkzMDk1NDcxOTk5NjEyLCAtNDMuMTkwMjM2OTA3MjEzMjE5XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJWaWxhIE9sw61tcGljYVwiLFxuXHRcdFwiaWRcIjogXCJ2aWxhLW9saW1waWNhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDkgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk5MDU2NTcyNjQ2NTMzLCAtNDMuMTk5NjQzNTI5NDk1Mjk3XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzJdXG5cdH1cbl07XG5cbmxldCBzdGF0aW9uX2luZGV4ID0geyB9O1xuc3RhdGlvbnMuZm9yRWFjaCgoc3RhdGlvbikgPT4ge1xuXHRsZXQgc3RhdGlvbl9uYW1lID0gc3RhdGlvbltcIm5hbWVcIl07XG5cdHN0YXRpb25faW5kZXhbc3RhdGlvbl9uYW1lXSA9IHN0YXRpb247XG59KTtcbiIsImxldCBsaW5lcyA9IFtcblx0e1xuXHRcdFwiaWRcIjogMSxcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAxXCIsXG5cdFx0XCJjb2xvclwiOiBcIiM2OGI5ZmJcIixcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xuXHRcdC8vIFx0XCJTYW50b3MgRHVtb250XCIsXG5cdFx0Ly8gXHRcIlByYWlhIEZvcm1vc2FcIlxuXHRcdC8vIF1cblx0fSxcblx0e1xuXHRcdFwiaWRcIjogMixcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAyXCIsXG5cdFx0XCJjb2xvclwiOiBcIiM3M2NhM2ZcIixcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xuXHRcdC8vIFx0XCJQcmHDp2EgWFZcIixcblx0XHQvLyBcdFwiUHJhaWEgRm9ybW9zYVwiXG5cdFx0Ly8gXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwiaWRcIjogMyxcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAzXCIsXG5cdFx0XCJjb2xvclwiOiBcIiNmM2EyMzBcIixcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xuXHRcdC8vIFx0XCJTYW50b3MgRHVtb250XCIsXG5cdFx0Ly8gXHRcIkNlbnRyYWxcIlxuXHRcdC8vIF1cblx0fVxuXTtcblxubGV0IGxpbmVfaW5kZXggPSB7IH07XG5saW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdGxldCBsaW5lX25hbWUgPSBsaW5lW1wibmFtZVwiXTtcblx0bGluZV9pbmRleFtsaW5lX25hbWVdID0gbGluZTtcbn0pO1xuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gZ2V0IGxvY2F0aW9uIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBQZWdhIGEgbG9jYWxpemHDp8OjbyBkbyB1c3XDoXJpb1xuY29uc3QgZ2V0TG9jYXRpb24gPSAoaXNfaW5pdGlhbCA9IGZhbHNlKSA9PiB7XG5cdG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XG5cblx0XHQvLyBTZSB2aWVyIGRvIG1vZG8gaW5pY2lhbCwgZW5jZXJyYSBlbGVcblx0XHRpZiAoaXNfaW5pdGlhbCkge1xuXHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0taW5pdGlhbFwiKTtcblx0XHRcdCRwYW5lbC5yZW1vdmVDbGFzcyhcIi1zdGF0ZS0tcGVybWlzc2lvblwiKTtcblx0XHR9XG5cblx0XHQvLyBEZXNjb2JyZSBhIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hIGUgcHJvY3VyYSBhcyBwcsOzeGltYXMgcGFydGlkYXNcblx0XHRsZXQgbmVhcmVzdF9zdGF0aW9uID0gbmVhcmVzdFN0YXRpb24oW3Bvc2l0aW9uW1wiY29vcmRzXCJdW1wibGF0aXR1ZGVcIl0sIHBvc2l0aW9uW1wiY29vcmRzXCJdW1wibG9uZ2l0dWRlXCJdXSk7XG5cdFx0bmV4dERlcGFydHVyZXMobmVhcmVzdF9zdGF0aW9uLCB0cnVlKTtcblx0fSk7XG59O1xuIiwiLy8gRXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcbmNvbnN0IGRlZzJyYWQgPSAoZGVnKSA9PiB7XG5cdHJldHVybiBkZWcgKiAoTWF0aC5QSSAvIDE4MCk7XG59O1xuXG5jb25zdCBuZWFyZXN0U3RhdGlvbiA9ICh1c2VyX2Nvb3JkaW5hdGVzKSA9PiB7XG5cdGNvbnN0IHVzZXJfbGF0aXR1ZGUgPSBkZWcycmFkKHVzZXJfY29vcmRpbmF0ZXNbMF0pO1xuXHRjb25zdCB1c2VyX2xvbmdpdHVkZSA9IGRlZzJyYWQodXNlcl9jb29yZGluYXRlc1sxXSk7XG5cblx0Y29uc3QgUiA9IDYzNzE7XG5cblx0bGV0IHNob3J0ZXN0X2Rpc3RhbmNlID0gbnVsbDtcblx0bGV0IG5lYXJlc3Rfc3RhdGlvbiA9IG51bGw7XG5cblx0c3RhdGlvbnMuZm9yRWFjaCgoc3RhdGlvbikgPT4ge1xuXHRcdGlmICghc3RhdGlvbltcImRpc2FibGVkXCJdKSB7XG5cdFx0XHRjb25zdCBzdGF0aW9uX2xhdGl0dWRlID0gZGVnMnJhZChzdGF0aW9uW1wiY29vcmRpbmF0ZXNcIl1bMF0pO1xuXHRcdFx0Y29uc3Qgc3RhdGlvbl9sb25naXR1ZGUgPSBkZWcycmFkKHN0YXRpb25bXCJjb29yZGluYXRlc1wiXVsxXSk7XG5cblx0XHRcdGNvbnN0IHggPSAoc3RhdGlvbl9sb25naXR1ZGUgLSB1c2VyX2xvbmdpdHVkZSkgKiBNYXRoLmNvcygodXNlcl9sYXRpdHVkZSArIHN0YXRpb25fbGF0aXR1ZGUpIC8gMik7XG5cdFx0XHRjb25zdCB5ID0gKHN0YXRpb25fbGF0aXR1ZGUgLSB1c2VyX2xhdGl0dWRlKTtcblx0XHRcdGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpICogUjtcblxuXHRcdFx0aWYgKCFzaG9ydGVzdF9kaXN0YW5jZSB8fCBkaXN0YW5jZSA8IHNob3J0ZXN0X2Rpc3RhbmNlKSB7XG5cdFx0XHRcdHNob3J0ZXN0X2Rpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRcdG5lYXJlc3Rfc3RhdGlvbiA9IHN0YXRpb247XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gbmVhcmVzdF9zdGF0aW9uO1xufTtcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIG5leHQgZGVwYXJ0dXJlcyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gUHLDs3hpbWFzIHBhcnRpZGFzXG5jb25zdCBuZXh0RGVwYXJ0dXJlcyA9IChzdGF0aW9uLCBmcm9tX2dwcyA9IGZhbHNlKSA9PiB7XG5cdGxldCBkZXBhcnR1cmVzO1xuXG5cdC8vIFNlIG7Do28gZm9yIHBhc3NhZGEgYSBlc3Rhw6fDo28sIGFicmUgbGlzdGEgZGUgZXN0YcOnw7Vlc1xuXHRpZiAoIXN0YXRpb24pIHtcblx0XHQkYm9keS5hZGRDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHRcdHN0YXRpb24gPSBzdGF0aW9uX2luZGV4W2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFzdC1zdGF0aW9uXCIpIHx8IFwiQ2VudHJhbFwiXTtcblx0fVxuXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFzdC1zdGF0aW9uXCIsIHN0YXRpb25bXCJuYW1lXCJdKTtcblxuXHRjb25zdCBzdGF0ZV9jbGFzc2VzID0gW1xuXHRcdFwiLXN0YXRlLS1zdGF0aW9uXCIsXG5cdFx0XCItc3RhdGUtLWxvYWRpbmdcIixcblx0XHRcIi1zdGF0ZS0tY2xvc2VkXCIsXG5cdFx0XCItc3RhdGUtLXBlcm1pc3Npb25cIlxuXHRdO1xuXG5cdC8vIERlc2xpZ2EgaW50ZXJ2YWxvcyBlIGV2ZW50b3MgZXhpc3RlbnRlc1xuXHRjbGVhckludGVydmFsKGN1ZVtcImludGVydmFsLWRlcGFydHVyZXNcIl0pO1xuXHRjbGVhckludGVydmFsKGN1ZVtcImludGVydmFsLWxhc3QtdXBkYXRlZFwiXSk7XG5cdCQod2luZG93KS5vZmYoXCJ2aXNpYmlsaXR5Y2hhbmdlLmRlcGFydHVyZXMgb25saW5lLmRlcGFydHVyZXNcIik7XG5cblx0Ly8gTW9zdHJhIGFuaW1hw6fDo28gZGUgbG9hZFxuXHQkcGFuZWwucmVtb3ZlQ2xhc3Moc3RhdGVfY2xhc3NlcykuYWRkQ2xhc3MoXCItc3RhdGUtLWxvYWRpbmdcIik7XG5cblx0Ly8gQ29sb2NhIG8gbm9tZSBkYSBlc3Rhw6fDo28gbm8gYXBwYmFyXG5cdCRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdW1wic3RhdGlvbi1uYW1lXCJdLnRleHQoc3RhdGlvbltcIm5hbWVcIl0pO1xuXHQkcGFuZWxbXCJoZWFkZXJcIl1bXCJ0aXRsZVwiXS5lbXB0eSgpO1xuXG5cdC8vIERlaXhhIGEgZXN0YcOnw6NvIHNlbGVjaW9uYWRhIG5hIGxpc3RhXG5cdCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXVtcInN0YXRpb25zXCJdLmZpbmQoXCJhXCIpLnJlbW92ZUNsYXNzKFwiLXN0YXRlLS1zZWxlY3RlZFwiKTtcblx0JG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0uZmluZChcImFbZGF0YS1zdGF0aW9uPSdcIiArIHN0YXRpb25bXCJuYW1lXCJdICsgXCInXVwiKS5hZGRDbGFzcyhcIi1zdGF0ZS0tc2VsZWN0ZWRcIik7XG5cblxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0Ly8gQXR1YWxpemHDp8Ojb1xuXHRjb25zdCBsYXN0VXBkYXRlZCA9ICgpID0+IHtcblx0XHRsZXQgJGJhZGdlID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJzdGF0dXMtYmFkZ2VcIik7XG5cblx0XHQvLyBUZW1wbyBlbSBzZWd1bmRvcyBkZXNkZSBhIMO6bHRpbWEgYXR1YWxpemHDp8Ojb1xuXHRcdGxldCBzZWNvbmRzX3NpbmNlX3VwZGF0ZSA9IG1vbWVudCgpLmRpZmYoZGVwYXJ0dXJlc1tcImxhc3RVcGRhdGVkXCJdLCBcInNlY29uZHNcIik7XG5cblx0XHQvLyBTZSB0aXZlciBzaWRvIGF0dWFsaXphZG8gaMOhIG1lbm9zIGRlIDYwIHNlZ3VuZG9zLCBtb3N0cmEgVGVtcG8gUmVhbFxuXHRcdGlmIChzZWNvbmRzX3NpbmNlX3VwZGF0ZSA8PSA2MCkge1xuXHRcdFx0JGJhZGdlLmFkZENsYXNzKFwiLXN0YXRlLS1yZWFsLXRpbWVcIikudGV4dChMMTBuW2xhbmd1YWdlXVtcInJlYWwtdGltZVwiXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBsYXN0X3VwZGF0ZWQgPSBMMTBuW2xhbmd1YWdlXVtcInVwZGF0ZWRcIl0gKyBcIiBcIiArIG1vbWVudChkZXBhcnR1cmVzW1wibGFzdFVwZGF0ZWRcIl0pLmZyb21Ob3codHJ1ZSkgKyBcIiBcIiArIEwxMG5bbGFuZ3VhZ2VdW1wiYWdvXCJdO1xuXHRcdFx0JGJhZGdlLnRleHQobGFzdF91cGRhdGVkKTtcblx0XHR9XG5cblx0XHQkcGFuZWxbXCJoZWFkZXJcIl1bXCJiYWRnZVwiXS5lbXB0eSgpLmFwcGVuZCgkYmFkZ2UpO1xuXHR9O1xuXG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdC8vIENvbnN1bHRhIGRvcyBkYWRvc1xuXHRjb25zdCBnZXREYXRhID0gKCkgPT4ge1xuXHRcdC8vIFPDsyBjYXJyZWdhIHNlIGVzdGl2ZXIgZW0gZm9jbyBlIG9ubGluZVxuXHRcdGlmIChkb2N1bWVudC5oaWRkZW4gPT09IHRydWUgfHwgbmF2aWdhdG9yLm9uTGluZSA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBDYXJyZWdhIG9zIGRhZG9zXG5cdFx0Ly8gJC5nZXRKU09OKFwiaHR0cHM6Ly9lbWl0cmVtbXVzLmNvbS8tL3ZsdC9kZXBhcnR1cmVzP2NhbGxiYWNrPT9cIiwge1xuXHRcdCQuZ2V0SlNPTihcImh0dHBzOi8vdXMtY2VudHJhbDEtdmx0Y2FyaW9jYS5jbG91ZGZ1bmN0aW9ucy5uZXQvZGVwYXJ0dXJlcz9jYWxsYmFjaz0/XCIsIHtcblx0XHRcdFwic3RhdGlvblwiOiBzdGF0aW9uW1wiaWRcIl0sXG5cdFx0XHQvLyBcImVudlwiOiBcImRldlwiXG5cdFx0fSkuZG9uZSgocmVzcG9uc2UpID0+IHtcblx0XHRcdGRlcGFydHVyZXMgPSByZXNwb25zZTtcblxuXHRcdFx0bGV0IGV0YV9jb3VudCA9IDA7XG5cdFx0XHRsZXQgZGlyZWN0aW9ucyA9IFsgXTtcblx0XHRcdGxldCBkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbiA9IHsgfTtcblxuXHRcdFx0Ly8gT3JnYW5pemEgYXMgcGFydGlkYXMgcG9yIGRlc3Rpbm9cblx0XHRcdGRlcGFydHVyZXNbXCJsaW5lc1wiXS5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdFx0XHRcdGxpbmVbXCJkaXJlY3Rpb25zXCJdLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuXHRcdFx0XHRcdGxldCBkaXJlY3Rpb25fdGl0bGUgPSBkaXJlY3Rpb25bXCJuYW1lXCJdO1xuXHRcdFx0XHRcdGV0YV9jb3VudCArPSBkaXJlY3Rpb25bXCJldGFzXCJdLmxlbmd0aDtcblxuXHRcdFx0XHRcdGlmIChkaXJlY3Rpb25bXCJldGFzXCJdLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdGlmICghZGlyZWN0aW9ucy5pbmNsdWRlcyhkaXJlY3Rpb25fdGl0bGUpKSB7XG5cdFx0XHRcdFx0XHRcdGRpcmVjdGlvbnMucHVzaChkaXJlY3Rpb25fdGl0bGUpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoIWRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0pIHtcblx0XHRcdFx0XHRcdFx0ZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb25bZGlyZWN0aW9uX3RpdGxlXSA9IFsgXTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uW1wiZXRhc1wiXS5mb3JFYWNoKCh0cmFpbikgPT4ge1xuXHRcdFx0XHRcdFx0XHR0cmFpbltcImxpbmVcIl0gPSBsaW5lW1wibmFtZVwiXTtcblx0XHRcdFx0XHRcdFx0ZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb25bZGlyZWN0aW9uX3RpdGxlXS5wdXNoKHRyYWluKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gU2UgbsO6bWVybyBkZSBwcsOzeGltYXMgcGFydGlkYXMgZm9yIHplcm8sXG5cdFx0XHQvLyBjb25mZXJlIHNlIGFpbmRhIGVzdMOhIGRlbnRybyBkbyBob3LDoXJpbyBkZSBmdW5jaW9uYW1lbnRvXG5cdFx0XHRpZiAoZXRhX2NvdW50ID09PSAwICYmIGVudiA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcblx0XHRcdFx0bGV0IG5vdyA9IG1vbWVudCgpO1xuXHRcdFx0XHRsZXQgb3BlcmF0aW9uX3N0YXJ0X3RpbWUgPSBtb21lbnQoXCIwNjowMFwiLCBcIkhIOm1tXCIpO1xuXHRcdFx0XHRsZXQgb3BlcmF0aW9uX2VuZF90aW1lID0gbW9tZW50KFwiMDA6MDBcIiwgXCJISDptbVwiKTtcblxuXHRcdFx0XHRpZiAobm93LmlzQWZ0ZXIob3BlcmF0aW9uX2VuZF90aW1lKSAmJiBub3cuaXNCZWZvcmUob3BlcmF0aW9uX3N0YXJ0X3RpbWUpKSB7XG5cdFx0XHRcdFx0JHBhbmVsW1wiaGVhZGVyXCJdW1widGl0bGVcIl0udGV4dChMMTBuW2xhbmd1YWdlXVtcIm91dC1vZi1vcGVyYXRpb25cIl0pO1xuXG5cdFx0XHRcdFx0JHBhbmVsW1wiY29udGVudFwiXVtcImNsb3NlZFwiXS5lbXB0eSgpO1xuXHRcdFx0XHRcdCQoXCI8aDEgLz5cIikudGV4dChMMTBuW2xhbmd1YWdlXVtcIm91dC1vZi1vcGVyYXRpb25cIl0pLmFwcGVuZFRvKCRwYW5lbFtcImNvbnRlbnRcIl1bXCJjbG9zZWRcIl0pO1xuXHRcdFx0XHRcdCQoXCI8cCAvPlwiKS5odG1sKEwxMG5bbGFuZ3VhZ2VdW1wib3BlcmF0aW9uLWhvdXJzXCJdKS5hcHBlbmRUbygkcGFuZWxbXCJjb250ZW50XCJdW1wiY2xvc2VkXCJdKTtcblx0XHRcdFx0XHQkKFwiPGkgLz5cIikuYWRkQ2xhc3MoXCJtYXRlcmlhbC1pY29uc1wiKS50ZXh0KFwiYWNjZXNzX3RpbWVcIikuYXBwZW5kVG8oJHBhbmVsW1wiY29udGVudFwiXVtcImNsb3NlZFwiXSk7XG5cdFx0XHRcdFx0JHBhbmVsLnJlbW92ZUNsYXNzKHN0YXRlX2NsYXNzZXMpLmFkZENsYXNzKFwiLXN0YXRlLS1jbG9zZWRcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRwYW5lbFtcImhlYWRlclwiXVtcInRpdGxlXCJdLnRleHQoTDEwbltsYW5ndWFnZV1bXCJuZXh0LWRlcGFydHVyZXNcIl0pO1xuXG5cdFx0XHRcdC8vIE1vbnRhIGFzIHBhcnRpZGFzXG5cdFx0XHRcdGxldCAkZGVwYXJ0dXJlcyA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGVwYXJ0dXJlc1wiKTtcblxuXHRcdFx0XHRkaXJlY3Rpb25zLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuXHRcdFx0XHRcdGxldCAkZGlyZWN0aW9uID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJkaXJlY3Rpb25cIikuYXBwZW5kVG8oJGRlcGFydHVyZXMpO1xuXHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGlyZWN0aW9uLWNhcHRpb25cIikudGV4dChMMTBuW2xhbmd1YWdlXVtcImRpcmVjdGlvblwiXSkuYXBwZW5kVG8oJGRpcmVjdGlvbik7XG5cblx0XHRcdFx0XHRsZXQgZXRhcyA9IGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl07XG5cdFx0XHRcdFx0ZXRhcy5zb3J0KChhLCBiKSA9PiB7IHJldHVybiBhW1wic2Vjb25kc1wiXSAtIGJbXCJzZWNvbmRzXCJdIH0pO1xuXG5cdFx0XHRcdFx0ZXRhcy5mb3JFYWNoKCh0cmFpbikgPT4ge1xuXHRcdFx0XHRcdFx0bGV0ICR0cmFpbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW5cIikuYXBwZW5kVG8oJGRpcmVjdGlvbik7XG5cdFx0XHRcdFx0XHRsZXQgJGxpbmUgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInRyYWluLWxpbmVcIikuYXBwZW5kVG8oJHRyYWluKTtcblx0XHRcdFx0XHRcdGxldCBpc19hcHByb2FjaGluZyA9IHRyYWluW1wic2Vjb25kc1wiXSA8IDMwO1xuXG5cdFx0XHRcdFx0XHRsZXQgbGluZSA9IGxpbmVfaW5kZXhbdHJhaW5bXCJsaW5lXCJdXTtcblx0XHRcdFx0XHRcdGxldCBkZXBhcnR1cmVfY291bnRkb3duID0gKGlzX2FwcHJvYWNoaW5nPyBMMTBuW2xhbmd1YWdlXVtcIm5vd1wiXSA6IE1hdGgucm91bmQodHJhaW5bXCJzZWNvbmRzXCJdIC8gNjApICsgXCI8c3Bhbj5taW48L3NwYW4+XCIpO1xuXHRcdFx0XHRcdFx0bGV0IGRlcGFydHVyZV90aW1lID0gbW9tZW50KHRyYWluW1wiYXJyaXZhbFRpbWVcIl0pLmZvcm1hdChcIkhIOm1tXCIpO1xuXG5cdFx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImxpbmUtc2hpZWxkXCIpLmNzcyhcImNvbG9yXCIsIGxpbmVbXCJjb2xvclwiXSkuYXR0cihcInRpdGxlXCIsIEwxMG5bbGFuZ3VhZ2VdW1wibGluZVwiXSArIFwiIFwiICsgbGluZVtcImlkXCJdKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSkudGV4dChsaW5lW1wiaWRcIl0pLmFwcGVuZFRvKCRsaW5lKTtcblx0XHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW4tZGlyZWN0aW9uXCIpLmF0dHIoXCJ0aXRsZVwiLCBMMTBuW2xhbmd1YWdlXVtcInRyYWluXCJdICsgXCIgXCIgKyB0cmFpbltcInRyYWluXCJdKS50ZXh0KGRpcmVjdGlvbikuYXBwZW5kVG8oJHRyYWluKTtcblx0XHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW4tZXRhXCIpLmF0dHIoXCJ0aXRsZVwiLCBkZXBhcnR1cmVfdGltZSkuaHRtbChkZXBhcnR1cmVfY291bnRkb3duKS5hcHBlbmRUbygkdHJhaW4pO1xuXG5cdFx0XHRcdFx0XHRpZiAoaXNfYXBwcm9hY2hpbmcpIHtcblx0XHRcdFx0XHRcdFx0JHRyYWluLmFkZENsYXNzKFwiLXN0YXRlLS1hcHByb2FjaGluZ1wiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bGFzdFVwZGF0ZWQoKTtcblxuXHRcdFx0XHQvLyBMaW1wYSBvIHBhaW5lbCBlIGluc2VyZSBvcyBub3ZvcyBkYWRvc1xuXHRcdFx0XHQkcGFuZWwucmVtb3ZlQ2xhc3Moc3RhdGVfY2xhc3NlcykuYWRkQ2xhc3MoXCItc3RhdGUtLXN0YXRpb25cIik7XG5cdFx0XHRcdCRwYW5lbFtcImNvbnRlbnRcIl1bXCJzdGF0aW9uXCJdLmVtcHR5KCkuYXBwZW5kKCRkZXBhcnR1cmVzKTtcblxuXHRcdFx0XHQvLyBBcyBwYXJhZGFzIFNldGUgZGUgU2V0ZW1icm8gZSBDb2xvbWJvIHPDo28gbXVpdG8gcHLDs3hpbWFzLCBlbnTDo28gw6kgY29tdW0gcXVlIGEgbG9jYWxpemHDp8Ojb1xuXHRcdFx0XHQvLyBkbyBHUFMgZG8gdXN1w6FyaW8gbGV2ZSDDoCBlc3Rhw6fDo28gZXJyYWRhLiBQb3IgaXNzbywgbmVzc2FzIHBhcmFkYXMsIMOpIG1vc3RyYWRvIHVtIGJvdMOjbyBwYXJhXG5cdFx0XHRcdC8vIGZhY2lsaXRhciBhIHRyb2NhIGRlIHBhcmFkYS4gTyBib3TDo28gc8OzIMOpIGV4aWJpZG8gcXVhbmRvIG8gdXN1w6FyaW8gdmVtIGRhIGxvY2FsaXphw6fDo29cblx0XHRcdFx0Ly8gYXV0b23DoXRpY2EgKG7Do28gbW9zdHJhIHNlIHBhcmFkYSBmb2kgZXNjb2xoaWRhIG5vIG1lbnUpXG5cdFx0XHRcdGlmIChmcm9tX2dwcyA9PT0gdHJ1ZSAmJiBbXCJzZXRlLWRlLXNldGVtYnJvXCIsIFwiY29sb21ib1wiXS5pbmNsdWRlcyhzdGF0aW9uW1wiaWRcIl0pKSB7XG5cdFx0XHRcdFx0bGV0IG9yaWdpbl9hbmRfZGVzdGluYXRpb24gPSB7XG5cdFx0XHRcdFx0XHRcInNldGUtZGUtc2V0ZW1icm9cIjoge1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJDb2xvbWJvXCIsXG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogXCJjb2xvbWJvXCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcImNvbG9tYm9cIjoge1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJTZXRlIGRlIFNldGVtYnJvXCIsXG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogXCJzZXRlLWRlLXNldGVtYnJvXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0bGV0IGRlc3RpbmF0aW9uID0gb3JpZ2luX2FuZF9kZXN0aW5hdGlvbltzdGF0aW9uW1wiaWRcIl1dO1xuXG5cdFx0XHRcdFx0bGV0ICRzdWdnZXN0aW9uID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJzdWdnZXN0aW9uXCIpO1xuXHRcdFx0XHRcdGxldCAkYnV0dG9uID0gJChcIjxhIC8+XCIpLmFkZENsYXNzKFwiYnV0dG9uXCIpLmF0dHIoXCJocmVmXCIsIFwiI1wiKS5hcHBlbmRUbygkc3VnZ2VzdGlvbik7XG5cdFx0XHRcdFx0JChcIjxpIC8+XCIpLmFkZENsYXNzKFwibWF0ZXJpYWwtaWNvbnNcIikudGV4dChcIm5lYXJfbWVcIikuYXBwZW5kVG8oJGJ1dHRvbik7XG5cdFx0XHRcdFx0JChcIjxzcGFuIC8+XCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJhcmUteW91LWF0XCJdKS5hcHBlbmRUbygkYnV0dG9uKTtcblx0XHRcdFx0XHQkKFwiPHN0cm9uZyAvPlwiKS50ZXh0KGRlc3RpbmF0aW9uW1wibmFtZVwiXSArIFwiP1wiKS5hcHBlbmRUbygkYnV0dG9uKTtcblxuXHRcdFx0XHRcdCRidXR0b24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRuZXh0RGVwYXJ0dXJlcyhkZXN0aW5hdGlvbik7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQkcGFuZWxbXCJjb250ZW50XCJdW1wic3RhdGlvblwiXS5hcHBlbmQoJHN1Z2dlc3Rpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGN1ZVtcImxvYWQtZGVwYXJ0dXJlc1wiXS5yZXNvbHZlKCk7XG5cdFx0fSk7XG5cdH07XG5cblxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0Ly8gQXR1YWxpemHDp8Ojb1xuXHRjb25zdCB1cGRhdGVXaW5kb3cgPSAoKSA9PiB7XG5cdFx0aWYgKGRvY3VtZW50LmhpZGRlbiA9PT0gZmFsc2UgJiYgbmF2aWdhdG9yLm9uTGluZSA9PT0gdHJ1ZSkge1xuXHRcdFx0bGFzdFVwZGF0ZWQoKTtcblx0XHRcdGdldERhdGEoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gQ3JpYSBub3ZvcyBpbnRlcnZhbG9zIGUgZXZlbnRvc1xuXHQkKHdpbmRvdykub24oXCJvbmxpbmUuZGVwYXJ0dXJlcyB2aXNpYmlsaXR5Y2hhbmdlLmRlcGFydHVyZXNcIiwgdXBkYXRlV2luZG93KTtcblxuXHRpZiAoZW52ID09PSBcInByb2R1Y3Rpb25cIikge1xuXHRcdGN1ZVtcImludGVydmFsLWRlcGFydHVyZXNcIl0gPSBzZXRJbnRlcnZhbChnZXREYXRhLCAxNTAwMCk7XG5cdFx0Y3VlW1wiaW50ZXJ2YWwtbGFzdC11cGRhdGVkXCJdID0gc2V0SW50ZXJ2YWwobGFzdFVwZGF0ZWQsIDUwMDApO1xuXHR9XG5cblx0Z2V0RGF0YSgpO1xufTtcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gc3lzdGVtIHN0YXR1cyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBQZWdhIG8gZXN0YWRvIGRvIHNpc3RlbWFcclxuY29uc3Qgc3lzdGVtU3RhdHVzID0gKCgpID0+IHtcclxuICAgIGN1ZVtcImxvYWQtZG9jdW1lbnRcIl0uZG9uZSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGVudiA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgY3VlW1wiaW50ZXJ2YWwtc3lzdGVtLXN0YXR1c1wiXSA9IHNldEludGVydmFsKGdldFN0YXR1cywgNjAgKiAxMDAwKTtcclxuICAgICAgICAgICAgZ2V0U3RhdHVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGxhc3Rfc3RhdHVzO1xyXG5cclxuICAgIGNvbnN0IHN0YXRlX2NsYXNzZXMgPSBbXHJcbiAgICAgICAgXCItc3RhdGUtLW9rXCIsXHJcbiAgICAgICAgXCItc3RhdGUtLXdhcm5pbmdcIlxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gU8OzIGNhcnJlZ2Egc2UgZXN0aXZlciBlbSBmb2NvIGUgb25saW5lXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmhpZGRlbiA9PT0gdHJ1ZSB8fCBuYXZpZ2F0b3Iub25MaW5lID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkLmdldEpTT04oXCJodHRwczovL3VzLWNlbnRyYWwxLXZsdGNhcmlvY2EuY2xvdWRmdW5jdGlvbnMubmV0L3N0YXR1cz9jYWxsYmFjaz0/XCIpLmRvbmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGN1ZVtcImxvYWQtZGVwYXJ0dXJlc1wiXS5kb25lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5yZW1vdmVDbGFzcyhzdGF0ZV9jbGFzc2VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJzdGF0dXNcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJzdGF0dXNcIl0gPT09IFwiTm9ybWFsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdLmFkZENsYXNzKFwiLXN0YXRlLS1va1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0X3N0YXR1cyAhPT0gXCJOb3JtYWxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1wiaWNvblwiXS50ZXh0KFwiY2hlY2tfY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1widGV4dFwiXS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wic3RhdHVzLW9rXCJdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZV9oZWlnaHQgPSAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJ0ZXh0XCJdLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0uaGVpZ2h0KG1lc3NhZ2VfaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0ucmVtb3ZlQ2xhc3MoXCItbW9kZS0tY29sbGFwc2VkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5jc3MoXCJoZWlnaHRcIiwgXCJcIikuYWRkQ2xhc3MoXCItbW9kZS0tY29sbGFwc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdLmFkZENsYXNzKFwiLXN0YXRlLS13YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJpY29uXCJdLnRleHQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1widGV4dFwiXS50ZXh0KHJlc3BvbnNlW1wibWVzc2FnZVwiXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZV9oZWlnaHQgPSAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJ0ZXh0XCJdLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5oZWlnaHQobWVzc2FnZV9oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3Rfc3RhdHVzID0gcmVzcG9uc2VbXCJzdGF0dXNcIl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkKHdpbmRvdykub24oXCJ2aXNpYmlsaXR5Y2hhbmdlLnN5c3RlbVN0YXR1c1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbGFzdF9zdGF0dXMgPSBudWxsO1xyXG4gICAgICAgIGdldFN0YXR1cygpO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIHN0YXRpb24gbGlzdCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3Qgc3RhdGlvbkxpc3QgPSAoKSA9PiB7XG5cdCRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdW1wicGxhY2Vob2xkZXJcIl0udGV4dChMMTBuW2xhbmd1YWdlXVtcInN0YXRpb25zXCJdKTtcblxuXHQvLyBCb3TDo28gcGFyYSBsb2NhbGl6YXIgZXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcblx0bGV0ICRuZWFyZXN0ID0gJChcIjxhIC8+XCIpLmF0dHIoXCJocmVmXCIsIFwiI1wiKS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0JChcIi5zdGF0aW9ucyBoMSAuc3RhdGlvbi1uYW1lXCIpLnRleHQoXCJcIik7XG5cdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRnZXRMb2NhdGlvbigpO1xuXHR9KS5hcHBlbmRUbygkbmF2aWdhdGlvbltcImNvbnRlbnRcIl1bXCJzdGF0aW9uc1wiXSk7XG5cdCQoXCI8aSAvPlwiKS5hZGRDbGFzcyhcIm1hdGVyaWFsLWljb25zXCIpLnRleHQoXCJuZWFyX21lXCIpLmFwcGVuZFRvKCRuZWFyZXN0KTtcblx0JChcIjxzcGFuIC8+XCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJmaW5kLW5lYXJlc3Qtc3RhdGlvblwiXSkuYXBwZW5kVG8oJG5lYXJlc3QpO1xuXG5cdCQoXCI8bGkgLz5cIikuYWRkQ2xhc3MoXCJuZWFyZXN0LXN0YXRpb25cIikuYXBwZW5kKCRuZWFyZXN0KS5hcHBlbmRUbygkbmF2aWdhdGlvbltcImNvbnRlbnRcIl1bXCJzdGF0aW9uc1wiXSk7XG5cblx0Ly8gTW9udGEgbGlzdGEgZGUgZXN0YcOnw7Vlc1xuXHRzdGF0aW9ucy5mb3JFYWNoKChzdGF0aW9uKSA9PiB7XG5cdFx0bGV0ICRzdGF0aW9uID0gJChcIjxhIC8+XCIpLmF0dHIoXCJocmVmXCIsIFwiI1wiICsgc3RhdGlvbltcImlkXCJdKS5hdHRyKFwiZGF0YS1zdGF0aW9uXCIsIHN0YXRpb25bXCJuYW1lXCJdKTtcblxuXHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdGlvbi1uYW1lXCIpLnRleHQoc3RhdGlvbltcIm5hbWVcIl0pLmFwcGVuZFRvKCRzdGF0aW9uKTtcblxuXHRcdGxldCAkbGluZXMgPSAkKFwiPHVsIC8+XCIpLmFkZENsYXNzKFwic3RhdGlvbi1saW5lc1wiKS5hcHBlbmRUbygkc3RhdGlvbik7XG5cdFx0bGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuXHRcdFx0bGV0ICRsaW5lID0gJChcIjxsaSAvPlwiKS5hcHBlbmRUbygkbGluZXMpO1xuXHRcdFx0aWYgKHN0YXRpb25bXCJsaW5lc1wiXS5pbmNsdWRlcyhsaW5lW1wiaWRcIl0pKSB7XG5cdFx0XHRcdGxldCAkc2hpZWxkID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJsaW5lLXNoaWVsZFwiKS5jc3MoXCJjb2xvclwiLCBsaW5lW1wiY29sb3JcIl0pLnRleHQobGluZVtcImlkXCJdKS5hcHBlbmRUbygkbGluZSk7XG5cblx0XHRcdFx0aWYgKGxpbmVbXCJkaXNhYmxlZFwiXSkge1xuXHRcdFx0XHRcdCRzaGllbGQuYXR0cihcImRpc2FibGVkXCIsIHRydWUpLmFkZENsYXNzKFwiLXN0YXRlLS1kaXNhYmxlZFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKCFzdGF0aW9uW1wiZGlzYWJsZWRcIl0pIHtcblx0XHRcdCRzdGF0aW9uLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdG5leHREZXBhcnR1cmVzKHN0YXRpb24pO1xuXHRcdFx0XHQkYm9keS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRzdGF0aW9uLmFkZENsYXNzKFwiLXN0YXRlLS1kaXNhYmxlZFwiKTtcblx0XHRcdCRzdGF0aW9uLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQkKFwiPGxpIC8+XCIpLmFwcGVuZCgkc3RhdGlvbikuYXBwZW5kVG8oJG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0pO1xuXHR9KTtcblxuXHQvLyBBc3NvY2lhIG8gZXZlbnRvIGRlIGNsaWNrIHBhcmEgYWJyaXIgb3UgZmVjaGFyIGEgbGlzdGFcblx0JG5hdmlnYXRpb25bXCJoZWFkZXJcIl0ub24oXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0JGJvZHkudG9nZ2xlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0fSk7XG5cblx0JHBhbmVsW1wiaGVhZGVyXCJdLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGlmICgkYm9keS5oYXNDbGFzcyhcIi1tb2RlLS1saXN0XCIpKSB7XG5cdFx0XHQkYm9keS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gU2Nyb2xsIGRlbnRybyBkYSBsaXN0YVxuXHQkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgKGV2ZW50KSA9PiB7XG5cdFx0bGV0IHNjcm9sbF90b3BfcG9zaXRpb24gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cblx0XHRpZiAoc2Nyb2xsX3RvcF9wb3NpdGlvbiA+PSAxMikge1xuXHRcdFx0JGJvZHkuYWRkQ2xhc3MoXCItbW9kZS0tc2Nyb2xsXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkYm9keS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1zY3JvbGxcIik7XG5cdFx0fVxuXHR9KTtcbn07XG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIHRoZW1lIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuY29uc3QgdGhlbWUgPSAoKCkgPT4ge1xyXG4gICAgbGV0IHRoZW1lX29yZGVyID0gW1xyXG4gICAgICAgIFwiYXV0b1wiLFxyXG4gICAgICAgIFwibGlnaHRcIixcclxuICAgICAgICBcImRhcmtcIlxyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgdGhlbWVfc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgXCJhdXRvXCI6IHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBMMTBuW2xhbmd1YWdlXVtcImF1dG8tdGhlbWVcIl0sXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImJyaWdodG5lc3NfYXV0b1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImxpZ2h0XCI6IHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBMMTBuW2xhbmd1YWdlXVtcImxpZ2h0LXRoZW1lXCJdLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJicmlnaHRuZXNzXzVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkYXJrXCI6IHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBMMTBuW2xhbmd1YWdlXVtcImRhcmstdGhlbWVcIl0sXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImJyaWdodG5lc3NfNFwiXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHNldCA9IChuZXdfdGhlbWUsIG9sZF90aGVtZSA9IFwiXCIpID0+IHtcclxuICAgICAgICBjdXJyZW50X3RoZW1lID0gbmV3X3RoZW1lO1xyXG5cclxuICAgICAgICAkKFwiLnNldHRpbmdzIC50aGVtZSBzcGFuXCIpLnRleHQodGhlbWVfc2V0dGluZ3NbbmV3X3RoZW1lXVtcInRpdGxlXCJdKTtcclxuICAgICAgICAkKFwiLnNldHRpbmdzIC50aGVtZSBpXCIpLnRleHQodGhlbWVfc2V0dGluZ3NbbmV3X3RoZW1lXVtcImljb25cIl0pO1xyXG5cclxuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi10aGVtZS0tXCIgKyBvbGRfdGhlbWUpLmFkZENsYXNzKFwiLXRoZW1lLS1cIiArIG5ld190aGVtZSk7XHJcblxyXG4gICAgICAgIC8vIFNhbHZhIGNvbmZpZ3VyYcOnw6NvIG5vIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIGlmIChuZXdfdGhlbWUgPT09IFwiYXV0b1wiKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidGhlbWVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBuZXdfdGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gQ29uZmVyZSBzZSBqw6EgaMOhIHRlbWEgc2Fsdm8gbm8gbG9jYWxTdG9yYWdlLlxyXG4gICAgLy8gU2UgbsOjbyBob3V2ZXIsIHBlZ2EgbyBwYWRyw6NvIGRvIHNpc3RlbWFcclxuICAgIC8vIGxldCBjdXJyZW50X3RoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSB8fCBnZXRDb21wdXRlZFN0eWxlKCQoXCIuc2V0dGluZ3MgLmN1cnJlbnQtdGhlbWVcIilbMF0pLmdldFByb3BlcnR5VmFsdWUoXCJjb250ZW50XCIpLnJlcGxhY2UoL1wiL2csIFwiXCIpO1xyXG4gICAgbGV0IGN1cnJlbnRfdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIHx8IFwiYXV0b1wiO1xyXG5cclxuICAgIGlmIChjdXJyZW50X3RoZW1lKSB7XHJcbiAgICAgICAgc2V0KGN1cnJlbnRfdGhlbWUpO1xyXG4gICAgfVxyXG5cclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50X3RoZW1lKSB7XHJcbiAgICAgICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lIHNwYW5cIikudGV4dChMMTBuW2xhbmd1YWdlXVtcImF1dG8tdGhlbWVcIl0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWVcIikub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlc2NvYnJlIGEgcG9zacOnw6NvIGRvIHRlbWEgbmEgb3JkZW1cclxuICAgICAgICAgICAgbGV0IHRoZW1lX3Bvc2l0aW9uID0gdGhlbWVfb3JkZXIuaW5kZXhPZihjdXJyZW50X3RoZW1lKTtcclxuICAgICAgICAgICAgbGV0IG5ld190aGVtZSA9IHRoZW1lX29yZGVyW3RoZW1lX3Bvc2l0aW9uICsgMV0gfHwgdGhlbWVfb3JkZXJbMF07XHJcblxyXG4gICAgICAgICAgICAvLyBTZXRhIG8gbm92byB0ZW1hXHJcbiAgICAgICAgICAgIHNldChuZXdfdGhlbWUsIGN1cnJlbnRfdGhlbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufSkoKTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gc3RhcnQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4kKGZ1bmN0aW9uKCkge1xuXHQkYm9keSA9ICQoXCJib2R5XCIpO1xuXG5cdCRuYXZpZ2F0aW9uID0gJChcIi5uYXZpZ2F0aW9uXCIpO1xuXHQkbmF2aWdhdGlvbltcImhlYWRlclwiXSA9ICQoXCIubmF2aWdhdGlvbi1oZWFkZXJcIiwgJG5hdmlnYXRpb24pO1xuXHQkbmF2aWdhdGlvbltcImhlYWRlclwiXVtcInN0YXRpb24tbmFtZVwiXSA9ICQoXCIuc3RhdGlvbi1uYW1lXCIsICRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdKTtcblx0JG5hdmlnYXRpb25bXCJoZWFkZXJcIl1bXCJwbGFjZWhvbGRlclwiXSA9ICQoXCIucGxhY2Vob2xkZXJcIiwgJG5hdmlnYXRpb25bXCJoZWFkZXJcIl0pO1xuXHQkbmF2aWdhdGlvbltcImNvbnRlbnRcIl0gPSAkKFwiLm5hdmlnYXRpb24tY29udGVudFwiLCAkbmF2aWdhdGlvbik7XG5cdCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXVtcInN0YXRpb25zXCJdID0gJChcIi5zdGF0aW9uc1wiLCAkbmF2aWdhdGlvbltcImNvbnRlbnRcIl0pO1xuXG5cdCRwYW5lbCA9ICQoXCIucGFuZWxcIik7XG5cdCRwYW5lbFtcImhlYWRlclwiXSA9ICQoXCIucGFuZWwtaGVhZGVyXCIsICRwYW5lbCk7XG5cdCRwYW5lbFtcImhlYWRlclwiXVtcInRpdGxlXCJdID0gJChcIi50aXRsZVwiLCAkcGFuZWxbXCJoZWFkZXJcIl0pO1xuXHQkcGFuZWxbXCJoZWFkZXJcIl1bXCJiYWRnZVwiXSA9ICQoXCIuYmFkZ2VcIiwgJHBhbmVsW1wiaGVhZGVyXCJdKTtcblx0JHBhbmVsW1wiY29udGVudFwiXSA9ICQoXCIucGFuZWwtY29udGVudFwiLCAkcGFuZWwpO1xuXHQkcGFuZWxbXCJjb250ZW50XCJdW1wic3RhdGlvblwiXSA9ICQoXCIuc3RhdGlvblwiLCAkcGFuZWxbXCJjb250ZW50XCJdKTtcblx0JHBhbmVsW1wiY29udGVudFwiXVtcImNsb3NlZFwiXSA9ICQoXCIuY2xvc2VkXCIsICRwYW5lbFtcImNvbnRlbnRcIl0pO1xuXHQkcGFuZWxbXCJjb250ZW50XCJdW1wicGVybWlzc2lvblwiXSA9ICQoXCIucGVybWlzc2lvblwiLCAkcGFuZWxbXCJjb250ZW50XCJdKTtcblx0JHBhbmVsW1wiY29udGVudFwiXVtcImxvYWRpbmdcIl0gPSAkKFwiLmxvYWRpbmdcIiwgJHBhbmVsW1wiY29udGVudFwiXSk7XG5cdCRwYW5lbFtcImZvb3RlclwiXSA9ICQoXCIucGFuZWwtZm9vdGVyXCIsICRwYW5lbCk7XG5cdCRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXSA9ICQoXCIuc3RhdHVzXCIsICRwYW5lbFtcImZvb3RlclwiXSk7XG5cdCRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXVtcImljb25cIl0gPSAkKFwiLmljb25cIiwgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdKTtcblx0JHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1widGV4dFwiXSA9ICQoXCIudGV4dFwiLCAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0pO1xuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdID0gJChcIi5uZXR3b3JrXCIsICRwYW5lbFtcImZvb3RlclwiXSk7XG5cblx0Y3VlW1wibG9hZC1kb2N1bWVudFwiXS5yZXNvbHZlKCk7XG5cblx0Ly8gVHVkbyBjb21lw6dhIGFxdWkhXG5cdHN0YXRpb25MaXN0KCk7XG5cblx0Ly8gQ29uZmVyZSBzZSB1c3XDoXJpbyBqw6EgaGF2aWEgaGFiaWxpdGFkbyBnZW9sb2NhbGl6YcOnw6NvIGFudGVzXG5cdGlmIChcImdlb2xvY2F0aW9uXCIgaW4gbmF2aWdhdG9yKSB7XG5cdFx0JHBhbmVsW1wiY29udGVudFwiXVtcInBlcm1pc3Npb25cIl0uZmluZChcInNwYW5cIikudGV4dChMMTBuW2xhbmd1YWdlXVtcImZpbmQtbmVhcmVzdC1zdGF0aW9uXCJdKTtcblxuXHRcdGlmIChcInBlcm1pc3Npb25zXCIgaW4gbmF2aWdhdG9yKSB7XG5cdFx0XHRuYXZpZ2F0b3IucGVybWlzc2lvbnMucXVlcnkoeyBcIm5hbWVcIjogXCJnZW9sb2NhdGlvblwiIH0pLnRoZW4oKHBlcm1pc3Npb24pID0+IHtcblx0XHRcdFx0aWYgKHBlcm1pc3Npb25bXCJzdGF0ZVwiXSA9PT0gXCJncmFudGVkXCIpIHtcblx0XHRcdFx0XHQvLyBTZSBqw6EgdGl2ZXIsIHBlZ2EgYSBsb2NhbGl6YcOnw6NvIGF0dWFsIGUgcHJvY3VyYSBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYVxuXHRcdFx0XHRcdGdldExvY2F0aW9uKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAocGVybWlzc2lvbltcInN0YXRlXCJdID09PSBcImRlbmllZFwiKSB7XG5cdFx0XHRcdFx0Ly8gU2UgbsOjbyBmb2kgZGF0YSBwZXJtaXNzw6NvLCBhYnJlIGEgbGlzdGEgZGUgZXN0YcOnw7Vlc1xuXHRcdFx0XHRcdG5leHREZXBhcnR1cmVzKCk7XG5cdFx0XHRcdFx0JG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0uZmluZChcIi5uZWFyZXN0LXN0YXRpb25cIikuaGlkZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIFNlIG7Do28gdGl2ZXIsIG1vc3RyYSBib3TDo28gcGFyYSBzb2xpY2l0YXIgYXV0b3JpemHDp8Ojb1xuXHRcdFx0XHRcdCQoXCJib2R5XCIpLmFkZENsYXNzKFwiLW1vZGUtLWluaXRpYWxcIik7XG5cdFx0XHRcdFx0JHBhbmVsLmFkZENsYXNzKFwiLXN0YXRlLS1wZXJtaXNzaW9uXCIpO1xuXG5cdFx0XHRcdFx0JChcIi5idXR0b25cIiwgJHBhbmVsW1wiY29udGVudFwiXVtcInBlcm1pc3Npb25cIl0pLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0Z2V0TG9jYXRpb24odHJ1ZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRnZXRMb2NhdGlvbigpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBTZSBuw6NvIGhvdXZlciBnZW9sb2NhbGl6YcOnw6NvLCBhYnJlIGEgbGlzdGEgZGUgZXN0YcOnw7Vlc1xuXHRcdG5leHREZXBhcnR1cmVzKCk7XG5cdFx0JG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0uZmluZChcIi5uZWFyZXN0LXN0YXRpb25cIikuaGlkZSgpO1xuXHR9XG59KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gU2VydmljZSBXb3JrZXJcbmlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcblx0XHRjdWVbXCJzZXJ2aWNlLXdvcmtlclwiXSA9IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFwiL3NlcnZpY2Utd29ya2VyLmpzXCIpO1xuXG5cdFx0Y3VlW1wic2VydmljZS13b3JrZXJcIl0udGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIVwiLCByZWdpc3RyYXRpb24pO1xuXHRcdH0sIChlcnJvcikgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiBcIiwgZXJyb3IpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRXN0YWRvIGRhIGNvbmV4w6NvXG4kKGZ1bmN0aW9uKCkge1xuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdLnRleHQoTDEwbltsYW5ndWFnZV1bXCJvZmZsaW5lXCJdKTtcbn0pO1xuXG5jb25zdCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzID0gKCkgPT4ge1xuXHRsZXQgY29ubmVjdGVkID0gbmF2aWdhdG9yLm9uTGluZTtcblxuXHRpZiAoY29ubmVjdGVkID09PSB0cnVlKSB7XG5cdFx0JHBhbmVsW1wiZm9vdGVyXCJdW1wibmV0d29ya1wiXS5yZW1vdmVDbGFzcyhcIi1zdGF0ZS0tb2ZmbGluZVwiKTtcblx0fSBlbHNlIHtcblx0XHQkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdLmFkZENsYXNzKFwiLXN0YXRlLS1vZmZsaW5lXCIpO1xuXHR9XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzKTtcbiJdfQ==