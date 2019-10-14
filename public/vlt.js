"use strict";

////////////////////////////////////////////////////////////////////////////////////////////////////
// base ////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
var cue = []; // let $panel, $station, $permission, $network, $status;

var $body, $navigation, $panel;
cue["load-document"] = $.Deferred(); ////////////////////////////////////////////////////////////////////////////////////////////////////
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
    if (env !== "development") {
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
            }, 4000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiLCJMMTBuLmpzIiwic3RhdGlvbi1pbmZvLmpzIiwibGluZS1pbmZvLmpzIiwiZ2V0LWxvY2F0aW9uLmpzIiwibmVhcmVzdC1zdGF0aW9uLmpzIiwibmV4dC1kZXBhcnR1cmVzLmpzIiwic3lzdGVtLXN0YXR1cy5qcyIsInN0YXRpb24tbGlzdC5qcyIsInRoZW1lLmpzIiwic3RhcnQuanMiXSwibmFtZXMiOlsiY3VlIiwiJGJvZHkiLCIkbmF2aWdhdGlvbiIsIiRwYW5lbCIsIiQiLCJEZWZlcnJlZCIsImxhbmd1YWdlIiwibW9tZW50IiwibG9jYWxlIiwiTDEwbiIsInN0YXRpb25zIiwic3RhdGlvbl9pbmRleCIsImZvckVhY2giLCJzdGF0aW9uIiwic3RhdGlvbl9uYW1lIiwibGluZXMiLCJsaW5lX2luZGV4IiwibGluZSIsImxpbmVfbmFtZSIsImdldExvY2F0aW9uIiwiaXNfaW5pdGlhbCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJyZW1vdmVDbGFzcyIsIm5lYXJlc3Rfc3RhdGlvbiIsIm5lYXJlc3RTdGF0aW9uIiwibmV4dERlcGFydHVyZXMiLCJkZWcycmFkIiwiZGVnIiwiTWF0aCIsIlBJIiwidXNlcl9jb29yZGluYXRlcyIsInVzZXJfbGF0aXR1ZGUiLCJ1c2VyX2xvbmdpdHVkZSIsIlIiLCJzaG9ydGVzdF9kaXN0YW5jZSIsInN0YXRpb25fbGF0aXR1ZGUiLCJzdGF0aW9uX2xvbmdpdHVkZSIsIngiLCJjb3MiLCJ5IiwiZGlzdGFuY2UiLCJzcXJ0IiwiZnJvbV9ncHMiLCJkZXBhcnR1cmVzIiwiYWRkQ2xhc3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInN0YXRlX2NsYXNzZXMiLCJjbGVhckludGVydmFsIiwid2luZG93Iiwib2ZmIiwidGV4dCIsImVtcHR5IiwiZmluZCIsImxhc3RVcGRhdGVkIiwiJGJhZGdlIiwic2Vjb25kc19zaW5jZV91cGRhdGUiLCJkaWZmIiwibGFzdF91cGRhdGVkIiwiZnJvbU5vdyIsImFwcGVuZCIsImdldERhdGEiLCJkb2N1bWVudCIsImhpZGRlbiIsIm9uTGluZSIsImdldEpTT04iLCJkb25lIiwicmVzcG9uc2UiLCJldGFfY291bnQiLCJkaXJlY3Rpb25zIiwiZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb24iLCJkaXJlY3Rpb24iLCJkaXJlY3Rpb25fdGl0bGUiLCJsZW5ndGgiLCJpbmNsdWRlcyIsInB1c2giLCJ0cmFpbiIsImVudiIsIm5vdyIsIm9wZXJhdGlvbl9zdGFydF90aW1lIiwib3BlcmF0aW9uX2VuZF90aW1lIiwiaXNBZnRlciIsImlzQmVmb3JlIiwiYXBwZW5kVG8iLCJodG1sIiwiJGRlcGFydHVyZXMiLCIkZGlyZWN0aW9uIiwiZXRhcyIsInNvcnQiLCJhIiwiYiIsIiR0cmFpbiIsIiRsaW5lIiwiaXNfYXBwcm9hY2hpbmciLCJkZXBhcnR1cmVfY291bnRkb3duIiwicm91bmQiLCJkZXBhcnR1cmVfdGltZSIsImZvcm1hdCIsImNzcyIsImF0dHIiLCJvcmlnaW5fYW5kX2Rlc3RpbmF0aW9uIiwiZGVzdGluYXRpb24iLCIkc3VnZ2VzdGlvbiIsIiRidXR0b24iLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVXaW5kb3ciLCJzZXRJbnRlcnZhbCIsInN5c3RlbVN0YXR1cyIsImdldFN0YXR1cyIsImxhc3Rfc3RhdHVzIiwibWVzc2FnZV9oZWlnaHQiLCJvdXRlckhlaWdodCIsImhlaWdodCIsInNldFRpbWVvdXQiLCJzdGF0aW9uTGlzdCIsIiRuZWFyZXN0IiwiJHN0YXRpb24iLCIkbGluZXMiLCIkc2hpZWxkIiwidG9nZ2xlQ2xhc3MiLCJoYXNDbGFzcyIsInNjcm9sbF90b3BfcG9zaXRpb24iLCJzY3JvbGxUb3AiLCJ0aGVtZSIsInRoZW1lX29yZGVyIiwidGhlbWVfc2V0dGluZ3MiLCJzZXQiLCJuZXdfdGhlbWUiLCJvbGRfdGhlbWUiLCJjdXJyZW50X3RoZW1lIiwicmVtb3ZlSXRlbSIsInRoZW1lX3Bvc2l0aW9uIiwiaW5kZXhPZiIsInJlc29sdmUiLCJwZXJtaXNzaW9ucyIsInF1ZXJ5IiwidGhlbiIsInBlcm1pc3Npb24iLCJoaWRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInJlZ2lzdHJhdGlvbiIsImVycm9yIiwidXBkYXRlQ29ubmVjdGlvblN0YXR1cyIsImNvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFBQSxHQUFBLEdBQUEsRUFBQSxDLENBQ0E7O0FBQ0EsSUFBQUMsS0FBQSxFQUFBQyxXQUFBLEVBQUFDLE1BQUE7QUFFQUgsR0FBQSxDQUFBLGVBQUEsQ0FBQSxHQUFBSSxDQUFBLENBQUFDLFFBQUEsRUFBQSxDLENDUkE7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsSUFBQUMsUUFBQSxHQUFBLElBQUEsQyxDQUVBOztBQUNBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQSxPQUFBLEUsQ0FDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBQUMsSUFBQSxHQUFBO0FBQ0EsUUFBQTtBQUNBLHVCQUFBLGdCQURBO0FBRUEsaUJBQUEsWUFGQTtBQUdBLGtCQUFBLFNBSEE7QUFJQSxpQkFBQSxTQUpBO0FBS0EsV0FBQSxPQUxBO0FBTUEsYUFBQSxNQU5BO0FBT0EsWUFBQSxPQVBBO0FBUUEsZUFBQSxZQVJBO0FBU0Esd0JBQUEsa0JBVEE7QUFVQSx1QkFBQSxxREFWQTtBQVdBLFdBQUEsT0FYQTtBQVlBLGdCQUFBLFVBWkE7QUFhQSw0QkFBQSxnQ0FiQTtBQWNBLGtCQUFBLGlCQWRBO0FBZUEsbUJBQUEsWUFmQTtBQWdCQSxrQkFBQSxhQWhCQTtBQWlCQSxlQUFBLGFBakJBO0FBa0JBLGlCQUFBLGlCQWxCQSxDQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUExQ0E7QUFEQSxDQUFBO0FDYkEsSUFBQUMsUUFBQSxHQUFBLENBQ0E7QUFDQSxVQUFBLGdCQURBO0FBRUEsUUFBQSxnQkFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQURBLEVBU0E7QUFDQTtBQUNBLFVBQUEsVUFGQTtBQUdBLFFBQUEsVUFIQTtBQUlBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUxBO0FBTUE7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQVBBLENBVEEsRUFrQkE7QUFDQSxVQUFBLFlBREE7QUFFQSxRQUFBLFlBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FsQkEsRUEwQkE7QUFDQSxVQUFBLFNBREE7QUFFQSxRQUFBLFNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0ExQkEsRUFrQ0E7QUFDQSxVQUFBLFNBREE7QUFFQSxRQUFBLFNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FsQ0EsRUEwQ0E7QUFDQSxVQUFBLGlCQURBO0FBRUEsUUFBQSxpQkFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBMUNBLEVBa0RBO0FBQ0EsVUFBQSxZQURBO0FBRUEsUUFBQSxZQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbERBLEVBMERBO0FBQ0EsVUFBQSxTQURBO0FBRUEsUUFBQSxTQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0ExREEsRUFrRUE7QUFDQSxVQUFBLG1CQURBO0FBRUEsUUFBQSxtQkFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQWxFQSxFQTBFQTtBQUNBO0FBQ0EsVUFBQSxrQkFGQTtBQUdBLFFBQUEsa0JBSEE7QUFJQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FMQTtBQU1BO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBUEEsQ0ExRUEsRUFtRkE7QUFDQSxVQUFBLFNBREE7QUFFQSxRQUFBLFNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FuRkEsRUEyRkE7QUFDQSxVQUFBLFFBREE7QUFFQSxRQUFBLFFBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0EzRkEsRUFtR0E7QUFDQSxVQUFBLFVBREE7QUFFQSxRQUFBLFVBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQW5HQSxFQTJHQTtBQUNBLFVBQUEsbUJBREE7QUFFQSxRQUFBLG1CQUZB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LEdBQUFDLENBQUEsQ0FBQSxnQkFBQSxFQUFBRCxNQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFNBQUEsSUFBQUMsQ0FBQSxDQUFBLFVBQUEsRUFBQUQsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxRQUFBLElBQUFDLENBQUEsQ0FBQSxTQUFBLEVBQUFELE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsWUFBQSxJQUFBQyxDQUFBLENBQUEsYUFBQSxFQUFBRCxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFNBQUEsSUFBQUMsQ0FBQSxDQUFBLFVBQUEsRUFBQUQsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsR0FBQUMsQ0FBQSxDQUFBLGVBQUEsRUFBQUQsTUFBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLElBQUFDLENBQUEsQ0FBQSxTQUFBLEVBQUFELE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBLE1BQUEsSUFBQUMsQ0FBQSxDQUFBLE9BQUEsRUFBQUQsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUEsTUFBQSxJQUFBQyxDQUFBLENBQUEsT0FBQSxFQUFBRCxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxDQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFNBQUEsSUFBQUMsQ0FBQSxDQUFBLFVBQUEsRUFBQUQsTUFBQSxDQUFBLFFBQUEs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QyxRQUFBLENBQUEsaUJBQUE7QUFDQTtBQUNBLENBUkE7O0FBVUFNLE1BQUEsQ0FBQTRGLGdCQUFBLENBQUEsUUFBQSxFQUFBSyxzQkFBQTtBQUNBakcsTUFBQSxDQUFBNEYsZ0JBQUEsQ0FBQSxTQUFBLEVBQUFLLHNCQUFBIiwiZmlsZSI6InZsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gYmFzZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5sZXQgY3VlID0gWyBdO1xyXG4vLyBsZXQgJHBhbmVsLCAkc3RhdGlvbiwgJHBlcm1pc3Npb24sICRuZXR3b3JrLCAkc3RhdHVzO1xyXG5sZXQgJGJvZHksICRuYXZpZ2F0aW9uLCAkcGFuZWw7XHJcblxyXG5jdWVbXCJsb2FkLWRvY3VtZW50XCJdID0gJC5EZWZlcnJlZCgpO1xyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIGxvY2FsaXphdGlvbiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gY29uc3QgbGFuZ3VhZ2UgPSAobmF2aWdhdG9yLmxhbmd1YWdlID8gbmF2aWdhdG9yLmxhbmd1YWdlLnN1YnN0cigwLCAyKSA6IFwicHRcIik7XHJcbmNvbnN0IGxhbmd1YWdlID0gXCJwdFwiO1xyXG5cclxuLy8gaWYgKGxhbmd1YWdlID09PSBcInB0XCIpIHtcclxuICAgIG1vbWVudC5sb2NhbGUoXCJwdC1iclwiKTtcclxuLy8gfSBlbHNlIHtcclxuLy8gICAgIG1vbWVudC5sb2NhbGUobGFuZ3VhZ2UpO1xyXG4vLyB9XHJcblxyXG5jb25zdCBMMTBuID0ge1xyXG4gICAgXCJwdFwiOiB7XHJcbiAgICAgICAgXCJuZXh0LWRlcGFydHVyZXNcIjogXCJQcsOzeGltb3MgdHJlbnNcIixcclxuICAgICAgICBcInJlYWwtdGltZVwiOiBcIlRlbXBvIHJlYWxcIixcclxuICAgICAgICBcImFyZS15b3UtYXRcIjogXCJFc3TDoSBlbVwiLFxyXG4gICAgICAgIFwiZGlyZWN0aW9uXCI6IFwiU2VudGlkb1wiLFxyXG4gICAgICAgIFwibm93XCI6IFwiQWdvcmFcIixcclxuICAgICAgICBcInRyYWluXCI6IFwiVHJlbVwiLFxyXG4gICAgICAgIFwibGluZVwiOiBcIkxpbmhhXCIsXHJcbiAgICAgICAgXCJ1cGRhdGVkXCI6IFwiQXR1YWxpemFkb1wiLFxyXG4gICAgICAgIFwib3V0LW9mLW9wZXJhdGlvblwiOiBcIkZvcmEgZGUgb3BlcmHDp8Ojb1wiLFxyXG4gICAgICAgIFwib3BlcmF0aW9uLWhvdXJzXCI6IFwiTyBWTFQgQ2FyaW9jYSBjaXJjdWxhPGJyPiB0b2RvcyBvcyBkaWFzIGRhcyA2aCDDoCAwaFwiLFxyXG4gICAgICAgIFwiYWdvXCI6IFwiYXRyw6FzXCIsXHJcbiAgICAgICAgXCJzdGF0aW9uc1wiOiBcIkVzdGHDp8O1ZXNcIixcclxuICAgICAgICBcImZpbmQtbmVhcmVzdC1zdGF0aW9uXCI6IFwiTG9jYWxpemFyIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXCIsXHJcbiAgICAgICAgXCJhdXRvLXRoZW1lXCI6IFwiVGVtYSBhdXRvbcOhdGljb1wiLFxyXG4gICAgICAgIFwibGlnaHQtdGhlbWVcIjogXCJUZW1hIGNsYXJvXCIsXHJcbiAgICAgICAgXCJkYXJrLXRoZW1lXCI6IFwiVGVtYSBlc2N1cm9cIixcclxuICAgICAgICBcIm9mZmxpbmVcIjogXCJTZW0gY29uZXjDo29cIixcclxuICAgICAgICBcInN0YXR1cy1va1wiOiBcIk9wZXJhw6fDo28gbm9ybWFsXCJcclxuICAgIH1cclxuICAgIC8vIFwiZW5cIjoge1xyXG4gICAgLy8gICAgIFwibmV4dC1kZXBhcnR1cmVzXCI6IFwiTmV4dCB0cmFpbnNcIixcclxuICAgIC8vICAgICBcInJlYWwtdGltZVwiOiBcIlJlYWwgVGltZVwiLFxyXG4gICAgLy8gICAgIFwiYXJlLXlvdS1hdFwiOiBcIkFyZSB5b3UgYXRcIixcclxuICAgIC8vICAgICBcImRpcmVjdGlvblwiOiBcIkRpcmVjdGlvblwiLFxyXG4gICAgLy8gICAgIFwibm93XCI6IFwiTm93XCIsXHJcbiAgICAvLyAgICAgXCJ0cmFpblwiOiBcIlRyYWluXCIsXHJcbiAgICAvLyAgICAgXCJsaW5lXCI6IFwiTGluZVwiLFxyXG4gICAgLy8gICAgIFwidXBkYXRlZFwiOiBcIlVwZGF0ZWRcIixcclxuICAgIC8vICAgICBcIm91dC1vZi1vcGVyYXRpb25cIjogXCJTZXJ2aWNlIGNsb3NlZFwiLFxyXG4gICAgLy8gICAgIFwib3BlcmF0aW9uLWhvdXJzXCI6IFwiVkxUIENhcmlvY2EgcnVuczxicj4gZGFpbHkgZnJvbSA2YW0gdG8gMTJhbVwiLFxyXG4gICAgLy8gICAgIFwiYWdvXCI6IFwiYWdvXCIsXHJcbiAgICAvLyAgICAgXCJzdGF0aW9uc1wiOiBcIlN0YXRpb25zXCIsXHJcbiAgICAvLyAgICAgXCJmaW5kLW5lYXJlc3Qtc3RhdGlvblwiOiBcIkZpbmQgeW91ciBuZWFyZXN0IHN0YXRpb25cIixcclxuICAgIC8vICAgICBcImF1dG8tdGhlbWVcIjogXCJBdXRvIHRoZW1lXCIsXHJcbiAgICAvLyAgICAgXCJsaWdodC10aGVtZVwiOiBcIkxpZ2h0IHRoZW1lXCIsXHJcbiAgICAvLyAgICAgXCJkYXJrLXRoZW1lXCI6IFwiRGFyayB0aGVtZVwiLFxyXG4gICAgLy8gICAgIFwib2ZmbGluZVwiOiBcIk9mZmxpbmVcIixcclxuICAgIC8vICAgICBcInN0YXR1cy1va1wiOiBcIkdvb2Qgc2VydmljZVwiXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gXCJlc1wiOiB7XHJcblxyXG4gICAgLy8gfVxyXG59O1xyXG4iLCJsZXQgc3RhdGlvbnMgPSBbXG5cdHtcblx0XHRcIm5hbWVcIjogXCJBbnRvbmlvIENhcmxvc1wiLFxuXHRcdFwiaWRcIjogXCJhbnRvbmlvLWNhcmxvc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAyLCAzOiAyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkxMTMxNTM0NDM5MTMxOSwgLTQzLjE3MjA1MDk5NzU5ODI0MV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIkNhbWVyaW5vXCIsXG5cdFx0XCJpZFwiOiBcImNhbWVyaW5vXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDM6IDggfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAxNjk4MDQ2MDIyMzgyLCAtNDMuMTgzOTgzNjE0OTMzNDg5XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDYW5kZWzDoXJpYVwiLFxuXHRcdFwiaWRcIjogXCJjYW5kZWxhcmlhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDYsIDM6IDYgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAxNzI1MDI5Mzg0MjU5LCAtNDMuMTc4ODA4NjY1NDE4NjcxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDYXJpb2NhXCIsXG5cdFx0XCJpZFwiOiBcImNhcmlvY2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNCwgMzogNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDc0ODQ1MDcyNTI4MTEsIC00My4xNzY2NDU1MTgwMzg5MTddLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNlbnRyYWxcIixcblx0XHRcImlkXCI6IFwiY2VudHJhbFwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA1LCAzOiAxMCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDI3MDQ5NjA3NDQ5NTIsIC00My4xOTI2MjUzMTQzNzczMzhdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMiwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNpZGFkZSBkbyBTYW1iYVwiLFxuXHRcdFwiaWRcIjogXCJjaWRhZGUtZG8tc2FtYmFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk0MTc5OTU3MTI4MDY3LCAtNDMuMTk2ODg0MDgyMDc4NDc2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDaW5lbMOibmRpYVwiLFxuXHRcdFwiaWRcIjogXCJjaW5lbGFuZGlhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDMsIDM6IDMgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTEwNzM0MDAxODQyMjQzLCAtNDMuMTc1NDI1Mzg3MzY0OTMyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDb2xvbWJvXCIsXG5cdFx0XCJpZFwiOiBcImNvbG9tYm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogMiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDUxNzUyMTkwMDk0MTUsIC00My4xNzgwMTY5NjgyMjg4MThdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNvcmRlaXJvIGRhIEdyYcOnYVwiLFxuXHRcdFwiaWRcIjogXCJjb3JkZWlyby1kYS1ncmFjYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMywgMjogOCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTcxMDQ2Mjk5MjMxMTcsIC00My4yMDQxNzg0MDM1MzM3MDNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcIm5hbWVcIjogXCJDcmlzdGlhbm8gT3R0b25pXCIsXG5cdFx0XCJpZFwiOiBcImNyaXN0aWFuby1vdHRvbmlcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogOSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDMwNjEyNzg0ODA2NDgsIC00My4xOTA3NDkxMDk0MjE0ODldLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMiwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkVxdWFkb3JcIixcblx0XHRcImlkXCI6IFwiZXF1YWRvclwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxOCwgMjogMTEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3ODk0NTY0Njg3NzgyLCAtNDMuMjA0ODA1MDE0NDQwODE1XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJHYW1ib2FcIixcblx0XHRcImlkXCI6IFwiZ2FtYm9hXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE2LCAyOiA2IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5Nzk1OTQwODM3Mjg0NSwgLTQzLjE5OTMzNjY4MzI0NjMwMV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiSGFybW9uaWFcIixcblx0XHRcImlkXCI6IFwiaGFybW9uaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTQgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1NzU0NDM3MjczMzg2LCAtNDMuMTkxNDI3NjM5NTg0NDk2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQYXJhZGEgZG9zIE11c2V1c1wiLFxuXHRcdFwiaWRcIjogXCJwYXJhZGEtZG9zLW11c2V1c1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA4IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NTk0NjU4NjgwMjI2NCwgLTQzLjE4MTk1NTk4MDU4MTI3Ml0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUGFyYWRhIGRvcyBOYXZpb3NcIixcblx0XHRcImlkXCI6IFwicGFyYWRhLWRvcy1uYXZpb3NcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogOSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTQxMzk2MjUzMDM4NzUsIC00My4xODcxODE4MzA2MTc0NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUGVyZWlyYSBSZWlzXCIsXG5cdFx0XCJpZFwiOiBcInBlcmVpcmEtcmVpc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNywgMjogMTAgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk2NjQ3MDY0OTYwNDMsIC00My4yMDE3NzMxMTE1MjM1OTNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlByYcOnYSBYVlwiLFxuXHRcdFwiaWRcIjogXCJwcmFjYS14dlwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAxIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMjA3MDEyODk0NTg0OCwgLTQzLjE3MzExNzM5NTc4Mzg3Nl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJhaWEgRm9ybW9zYVwiLFxuXHRcdFwiaWRcIjogXCJwcmFpYS1mb3Jtb3NhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEwLCAyOiAxMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDMxNzcxNTIzODgwNTcsIC00My4yMDgxNjE5NjQ5MDIzMDNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlByb3ZpZMOqbmNpYVwiLFxuXHRcdFwiaWRcIjogXCJwcm92aWRlbmNpYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTc0ODk5MjIwMTQzODMsIC00My4xOTY3MDE0MDA4OTAwMzVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlJvZG92acOhcmlhXCIsXG5cdFx0XCJpZFwiOiBcInJvZG92aWFyaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTksIDI6IDEyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5ODgwNTU3NDI1MTc5OSwgLTQzLjIwNzM0Mjk0MTQ3NTk4Nl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FhcmFcIixcblx0XHRcImlkXCI6IFwic2FhcmFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDU5MTIxMDg0NjAyNTMsIC00My4xODczMjA3ODIyMjgyMDVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcIm5hbWVcIjogXCJTYW50YSBSaXRhXCIsXG5cdFx0XCJpZFwiOiBcInNhbnRhLXJpdGFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogNyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDA1OTQxNjc0MTA2NDksIC00My4xODE1MDkwNDk4NTQyMDZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlNhbnRvIENyaXN0b1wiLFxuXHRcdFwiaWRcIjogXCJzYW50by1jcmlzdG9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTIsIDI6IDcgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1MzI3MjgyMDAyMTQ2LCAtNDMuMjAwMjU5MTgxNzU1NzRdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlNhbnRvcyBEdW1vbnRcIixcblx0XHRcImlkXCI6IFwic2FudG9zLWR1bW9udFwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxLCAzOiAxIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkxMjI4Njg3NDk2MjQwMSwgLTQzLjE2NzYzMjI1OTU0NTg0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTw6NvIEJlbnRvXCIsXG5cdFx0XCJpZFwiOiBcInNhby1iZW50b1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA3IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5ODY0ODA5NjA1MTAxMiwgLTQzLjE3OTk2NDMxMTc2NDg4NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2V0ZSBkZSBTZXRlbWJyb1wiLFxuXHRcdFwiaWRcIjogXCJzZXRlLWRlLXNldGVtYnJvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDUsIDM6IDUgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTA1MzA1OTAwOTc3ODk3LCAtNDMuMTc3NDYzODE2MzQ2OTIyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJUaXJhZGVudGVzXCIsXG5cdFx0XCJpZFwiOiBcInRpcmFkZW50ZXNcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDY1NzgyMjIwMjYxMTYsIC00My4xODI4NTQyMzY1NTc4MDJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlV0b3BpYSBBcXVhUmlvXCIsXG5cdFx0XCJpZFwiOiBcInV0b3BpYS1hcXVhcmlvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEwIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5MzA5NTQ3MTk5OTYxMiwgLTQzLjE5MDIzNjkwNzIxMzIxOV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiVmlsYSBPbMOtbXBpY2FcIixcblx0XHRcImlkXCI6IFwidmlsYS1vbGltcGljYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5OTA1NjU3MjY0NjUzMywgLTQzLjE5OTY0MzUyOTQ5NTI5N10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9XG5dO1xuXG5sZXQgc3RhdGlvbl9pbmRleCA9IHsgfTtcbnN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcblx0bGV0IHN0YXRpb25fbmFtZSA9IHN0YXRpb25bXCJuYW1lXCJdO1xuXHRzdGF0aW9uX2luZGV4W3N0YXRpb25fbmFtZV0gPSBzdGF0aW9uO1xufSk7XG4iLCJsZXQgbGluZXMgPSBbXG5cdHtcblx0XHRcImlkXCI6IDEsXG5cdFx0XCJuYW1lXCI6IFwiTGluaGEgMVwiLFxuXHRcdFwiY29sb3JcIjogXCIjNjhiOWZiXCIsXG5cdFx0Ly8gXCJkaXJlY3Rpb25zXCI6IFtcblx0XHQvLyBcdFwiU2FudG9zIER1bW9udFwiLFxuXHRcdC8vIFx0XCJQcmFpYSBGb3Jtb3NhXCJcblx0XHQvLyBdXG5cdH0sXG5cdHtcblx0XHRcImlkXCI6IDIsXG5cdFx0XCJuYW1lXCI6IFwiTGluaGEgMlwiLFxuXHRcdFwiY29sb3JcIjogXCIjNzNjYTNmXCIsXG5cdFx0Ly8gXCJkaXJlY3Rpb25zXCI6IFtcblx0XHQvLyBcdFwiUHJhw6dhIFhWXCIsXG5cdFx0Ly8gXHRcIlByYWlhIEZvcm1vc2FcIlxuXHRcdC8vIF1cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcImlkXCI6IDMsXG5cdFx0XCJuYW1lXCI6IFwiTGluaGEgM1wiLFxuXHRcdFwiY29sb3JcIjogXCIjZjNhMjMwXCIsXG5cdFx0Ly8gXCJkaXJlY3Rpb25zXCI6IFtcblx0XHQvLyBcdFwiU2FudG9zIER1bW9udFwiLFxuXHRcdC8vIFx0XCJDZW50cmFsXCJcblx0XHQvLyBdXG5cdH1cbl07XG5cbmxldCBsaW5lX2luZGV4ID0geyB9O1xubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuXHRsZXQgbGluZV9uYW1lID0gbGluZVtcIm5hbWVcIl07XG5cdGxpbmVfaW5kZXhbbGluZV9uYW1lXSA9IGxpbmU7XG59KTtcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIGdldCBsb2NhdGlvbiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gUGVnYSBhIGxvY2FsaXphw6fDo28gZG8gdXN1w6FyaW9cbmNvbnN0IGdldExvY2F0aW9uID0gKGlzX2luaXRpYWwgPSBmYWxzZSkgPT4ge1xuXHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuXG5cdFx0Ly8gU2UgdmllciBkbyBtb2RvIGluaWNpYWwsIGVuY2VycmEgZWxlXG5cdFx0aWYgKGlzX2luaXRpYWwpIHtcblx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWluaXRpYWxcIik7XG5cdFx0XHQkcGFuZWwucmVtb3ZlQ2xhc3MoXCItc3RhdGUtLXBlcm1pc3Npb25cIik7XG5cdFx0fVxuXG5cdFx0Ly8gRGVzY29icmUgYSBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYSBlIHByb2N1cmEgYXMgcHLDs3hpbWFzIHBhcnRpZGFzXG5cdFx0bGV0IG5lYXJlc3Rfc3RhdGlvbiA9IG5lYXJlc3RTdGF0aW9uKFtwb3NpdGlvbltcImNvb3Jkc1wiXVtcImxhdGl0dWRlXCJdLCBwb3NpdGlvbltcImNvb3Jkc1wiXVtcImxvbmdpdHVkZVwiXV0pO1xuXHRcdG5leHREZXBhcnR1cmVzKG5lYXJlc3Rfc3RhdGlvbiwgdHJ1ZSk7XG5cdH0pO1xufTtcbiIsIi8vIEVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXG5jb25zdCBkZWcycmFkID0gKGRlZykgPT4ge1xuXHRyZXR1cm4gZGVnICogKE1hdGguUEkgLyAxODApO1xufTtcblxuY29uc3QgbmVhcmVzdFN0YXRpb24gPSAodXNlcl9jb29yZGluYXRlcykgPT4ge1xuXHRjb25zdCB1c2VyX2xhdGl0dWRlID0gZGVnMnJhZCh1c2VyX2Nvb3JkaW5hdGVzWzBdKTtcblx0Y29uc3QgdXNlcl9sb25naXR1ZGUgPSBkZWcycmFkKHVzZXJfY29vcmRpbmF0ZXNbMV0pO1xuXG5cdGNvbnN0IFIgPSA2MzcxO1xuXG5cdGxldCBzaG9ydGVzdF9kaXN0YW5jZSA9IG51bGw7XG5cdGxldCBuZWFyZXN0X3N0YXRpb24gPSBudWxsO1xuXG5cdHN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcblx0XHRpZiAoIXN0YXRpb25bXCJkaXNhYmxlZFwiXSkge1xuXHRcdFx0Y29uc3Qgc3RhdGlvbl9sYXRpdHVkZSA9IGRlZzJyYWQoc3RhdGlvbltcImNvb3JkaW5hdGVzXCJdWzBdKTtcblx0XHRcdGNvbnN0IHN0YXRpb25fbG9uZ2l0dWRlID0gZGVnMnJhZChzdGF0aW9uW1wiY29vcmRpbmF0ZXNcIl1bMV0pO1xuXG5cdFx0XHRjb25zdCB4ID0gKHN0YXRpb25fbG9uZ2l0dWRlIC0gdXNlcl9sb25naXR1ZGUpICogTWF0aC5jb3MoKHVzZXJfbGF0aXR1ZGUgKyBzdGF0aW9uX2xhdGl0dWRlKSAvIDIpO1xuXHRcdFx0Y29uc3QgeSA9IChzdGF0aW9uX2xhdGl0dWRlIC0gdXNlcl9sYXRpdHVkZSk7XG5cdFx0XHRjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KSAqIFI7XG5cblx0XHRcdGlmICghc2hvcnRlc3RfZGlzdGFuY2UgfHwgZGlzdGFuY2UgPCBzaG9ydGVzdF9kaXN0YW5jZSkge1xuXHRcdFx0XHRzaG9ydGVzdF9kaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRuZWFyZXN0X3N0YXRpb24gPSBzdGF0aW9uO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIG5lYXJlc3Rfc3RhdGlvbjtcbn07XG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBuZXh0IGRlcGFydHVyZXMgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIFByw7N4aW1hcyBwYXJ0aWRhc1xuY29uc3QgbmV4dERlcGFydHVyZXMgPSAoc3RhdGlvbiwgZnJvbV9ncHMgPSBmYWxzZSkgPT4ge1xuXHRsZXQgZGVwYXJ0dXJlcztcblxuXHQvLyBTZSBuw6NvIGZvciBwYXNzYWRhIGEgZXN0YcOnw6NvLCBhYnJlIGxpc3RhIGRlIGVzdGHDp8O1ZXNcblx0aWYgKCFzdGF0aW9uKSB7XG5cdFx0JGJvZHkuYWRkQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRzdGF0aW9uID0gc3RhdGlvbl9pbmRleFtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhc3Qtc3RhdGlvblwiKSB8fCBcIkNlbnRyYWxcIl07XG5cdH1cblxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxhc3Qtc3RhdGlvblwiLCBzdGF0aW9uW1wibmFtZVwiXSk7XG5cblx0Y29uc3Qgc3RhdGVfY2xhc3NlcyA9IFtcblx0XHRcIi1zdGF0ZS0tc3RhdGlvblwiLFxuXHRcdFwiLXN0YXRlLS1sb2FkaW5nXCIsXG5cdFx0XCItc3RhdGUtLWNsb3NlZFwiLFxuXHRcdFwiLXN0YXRlLS1wZXJtaXNzaW9uXCJcblx0XTtcblxuXHQvLyBEZXNsaWdhIGludGVydmFsb3MgZSBldmVudG9zIGV4aXN0ZW50ZXNcblx0Y2xlYXJJbnRlcnZhbChjdWVbXCJpbnRlcnZhbC1kZXBhcnR1cmVzXCJdKTtcblx0Y2xlYXJJbnRlcnZhbChjdWVbXCJpbnRlcnZhbC1sYXN0LXVwZGF0ZWRcIl0pO1xuXHQkKHdpbmRvdykub2ZmKFwidmlzaWJpbGl0eWNoYW5nZS5kZXBhcnR1cmVzIG9ubGluZS5kZXBhcnR1cmVzXCIpO1xuXG5cdC8vIE1vc3RyYSBhbmltYcOnw6NvIGRlIGxvYWRcblx0JHBhbmVsLnJlbW92ZUNsYXNzKHN0YXRlX2NsYXNzZXMpLmFkZENsYXNzKFwiLXN0YXRlLS1sb2FkaW5nXCIpO1xuXG5cdC8vIENvbG9jYSBvIG5vbWUgZGEgZXN0YcOnw6NvIG5vIGFwcGJhclxuXHQkbmF2aWdhdGlvbltcImhlYWRlclwiXVtcInN0YXRpb24tbmFtZVwiXS50ZXh0KHN0YXRpb25bXCJuYW1lXCJdKTtcblx0JHBhbmVsW1wiaGVhZGVyXCJdW1widGl0bGVcIl0uZW1wdHkoKTtcblxuXHQvLyBEZWl4YSBhIGVzdGHDp8OjbyBzZWxlY2lvbmFkYSBuYSBsaXN0YVxuXHQkbmF2aWdhdGlvbltcImNvbnRlbnRcIl1bXCJzdGF0aW9uc1wiXS5maW5kKFwiYVwiKS5yZW1vdmVDbGFzcyhcIi1zdGF0ZS0tc2VsZWN0ZWRcIik7XG5cdCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXVtcInN0YXRpb25zXCJdLmZpbmQoXCJhW2RhdGEtc3RhdGlvbj0nXCIgKyBzdGF0aW9uW1wibmFtZVwiXSArIFwiJ11cIikuYWRkQ2xhc3MoXCItc3RhdGUtLXNlbGVjdGVkXCIpO1xuXG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdC8vIEF0dWFsaXphw6fDo29cblx0Y29uc3QgbGFzdFVwZGF0ZWQgPSAoKSA9PiB7XG5cdFx0bGV0ICRiYWRnZSA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdHVzLWJhZGdlXCIpO1xuXG5cdFx0Ly8gVGVtcG8gZW0gc2VndW5kb3MgZGVzZGUgYSDDumx0aW1hIGF0dWFsaXphw6fDo29cblx0XHRsZXQgc2Vjb25kc19zaW5jZV91cGRhdGUgPSBtb21lbnQoKS5kaWZmKGRlcGFydHVyZXNbXCJsYXN0VXBkYXRlZFwiXSwgXCJzZWNvbmRzXCIpO1xuXG5cdFx0Ly8gU2UgdGl2ZXIgc2lkbyBhdHVhbGl6YWRvIGjDoSBtZW5vcyBkZSA2MCBzZWd1bmRvcywgbW9zdHJhIFRlbXBvIFJlYWxcblx0XHRpZiAoc2Vjb25kc19zaW5jZV91cGRhdGUgPD0gNjApIHtcblx0XHRcdCRiYWRnZS5hZGRDbGFzcyhcIi1zdGF0ZS0tcmVhbC10aW1lXCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJyZWFsLXRpbWVcIl0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgbGFzdF91cGRhdGVkID0gTDEwbltsYW5ndWFnZV1bXCJ1cGRhdGVkXCJdICsgXCIgXCIgKyBtb21lbnQoZGVwYXJ0dXJlc1tcImxhc3RVcGRhdGVkXCJdKS5mcm9tTm93KHRydWUpICsgXCIgXCIgKyBMMTBuW2xhbmd1YWdlXVtcImFnb1wiXTtcblx0XHRcdCRiYWRnZS50ZXh0KGxhc3RfdXBkYXRlZCk7XG5cdFx0fVxuXG5cdFx0JHBhbmVsW1wiaGVhZGVyXCJdW1wiYmFkZ2VcIl0uZW1wdHkoKS5hcHBlbmQoJGJhZGdlKTtcblx0fTtcblxuXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXHQvLyBDb25zdWx0YSBkb3MgZGFkb3Ncblx0Y29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcblx0XHQvLyBTw7MgY2FycmVnYSBzZSBlc3RpdmVyIGVtIGZvY28gZSBvbmxpbmVcblx0XHRpZiAoZG9jdW1lbnQuaGlkZGVuID09PSB0cnVlIHx8IG5hdmlnYXRvci5vbkxpbmUgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gQ2FycmVnYSBvcyBkYWRvc1xuXHRcdC8vICQuZ2V0SlNPTihcImh0dHBzOi8vZW1pdHJlbW11cy5jb20vLS92bHQvZGVwYXJ0dXJlcz9jYWxsYmFjaz0/XCIsIHtcblx0XHQkLmdldEpTT04oXCJodHRwczovL3VzLWNlbnRyYWwxLXZsdGNhcmlvY2EuY2xvdWRmdW5jdGlvbnMubmV0L2RlcGFydHVyZXM/Y2FsbGJhY2s9P1wiLCB7XG5cdFx0XHRcInN0YXRpb25cIjogc3RhdGlvbltcImlkXCJdLFxuXHRcdFx0Ly8gXCJlbnZcIjogXCJkZXZcIlxuXHRcdH0pLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRkZXBhcnR1cmVzID0gcmVzcG9uc2U7XG5cblx0XHRcdGxldCBldGFfY291bnQgPSAwO1xuXHRcdFx0bGV0IGRpcmVjdGlvbnMgPSBbIF07XG5cdFx0XHRsZXQgZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb24gPSB7IH07XG5cblx0XHRcdC8vIE9yZ2FuaXphIGFzIHBhcnRpZGFzIHBvciBkZXN0aW5vXG5cdFx0XHRkZXBhcnR1cmVzW1wibGluZXNcIl0uZm9yRWFjaCgobGluZSkgPT4ge1xuXHRcdFx0XHRsaW5lW1wiZGlyZWN0aW9uc1wiXS5mb3JFYWNoKChkaXJlY3Rpb24pID0+IHtcblx0XHRcdFx0XHRsZXQgZGlyZWN0aW9uX3RpdGxlID0gZGlyZWN0aW9uW1wibmFtZVwiXTtcblx0XHRcdFx0XHRldGFfY291bnQgKz0gZGlyZWN0aW9uW1wiZXRhc1wiXS5sZW5ndGg7XG5cblx0XHRcdFx0XHRpZiAoZGlyZWN0aW9uW1wiZXRhc1wiXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWRpcmVjdGlvbnMuaW5jbHVkZXMoZGlyZWN0aW9uX3RpdGxlKSkge1xuXHRcdFx0XHRcdFx0XHRkaXJlY3Rpb25zLnB1c2goZGlyZWN0aW9uX3RpdGxlKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKCFkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbltkaXJlY3Rpb25fdGl0bGVdKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0gPSBbIF07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGRpcmVjdGlvbltcImV0YXNcIl0uZm9yRWFjaCgodHJhaW4pID0+IHtcblx0XHRcdFx0XHRcdFx0dHJhaW5bXCJsaW5lXCJdID0gbGluZVtcIm5hbWVcIl07XG5cdFx0XHRcdFx0XHRcdGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0ucHVzaCh0cmFpbik7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIFNlIG7Dum1lcm8gZGUgcHLDs3hpbWFzIHBhcnRpZGFzIGZvciB6ZXJvLFxuXHRcdFx0Ly8gY29uZmVyZSBzZSBhaW5kYSBlc3TDoSBkZW50cm8gZG8gaG9yw6FyaW8gZGUgZnVuY2lvbmFtZW50b1xuXHRcdFx0aWYgKGV0YV9jb3VudCA9PT0gMCAmJiBlbnYgPT09IFwicHJvZHVjdGlvblwiKSB7XG5cdFx0XHRcdGxldCBub3cgPSBtb21lbnQoKTtcblx0XHRcdFx0bGV0IG9wZXJhdGlvbl9zdGFydF90aW1lID0gbW9tZW50KFwiMDY6MDBcIiwgXCJISDptbVwiKTtcblx0XHRcdFx0bGV0IG9wZXJhdGlvbl9lbmRfdGltZSA9IG1vbWVudChcIjAwOjAwXCIsIFwiSEg6bW1cIik7XG5cblx0XHRcdFx0aWYgKG5vdy5pc0FmdGVyKG9wZXJhdGlvbl9lbmRfdGltZSkgJiYgbm93LmlzQmVmb3JlKG9wZXJhdGlvbl9zdGFydF90aW1lKSkge1xuXHRcdFx0XHRcdCRwYW5lbFtcImhlYWRlclwiXVtcInRpdGxlXCJdLnRleHQoTDEwbltsYW5ndWFnZV1bXCJvdXQtb2Ytb3BlcmF0aW9uXCJdKTtcblxuXHRcdFx0XHRcdCRwYW5lbFtcImNvbnRlbnRcIl1bXCJjbG9zZWRcIl0uZW1wdHkoKTtcblx0XHRcdFx0XHQkKFwiPGgxIC8+XCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJvdXQtb2Ytb3BlcmF0aW9uXCJdKS5hcHBlbmRUbygkcGFuZWxbXCJjb250ZW50XCJdW1wiY2xvc2VkXCJdKTtcblx0XHRcdFx0XHQkKFwiPHAgLz5cIikuaHRtbChMMTBuW2xhbmd1YWdlXVtcIm9wZXJhdGlvbi1ob3Vyc1wiXSkuYXBwZW5kVG8oJHBhbmVsW1wiY29udGVudFwiXVtcImNsb3NlZFwiXSk7XG5cdFx0XHRcdFx0JChcIjxpIC8+XCIpLmFkZENsYXNzKFwibWF0ZXJpYWwtaWNvbnNcIikudGV4dChcImFjY2Vzc190aW1lXCIpLmFwcGVuZFRvKCRwYW5lbFtcImNvbnRlbnRcIl1bXCJjbG9zZWRcIl0pO1xuXHRcdFx0XHRcdCRwYW5lbC5yZW1vdmVDbGFzcyhzdGF0ZV9jbGFzc2VzKS5hZGRDbGFzcyhcIi1zdGF0ZS0tY2xvc2VkXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkcGFuZWxbXCJoZWFkZXJcIl1bXCJ0aXRsZVwiXS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wibmV4dC1kZXBhcnR1cmVzXCJdKTtcblxuXHRcdFx0XHQvLyBNb250YSBhcyBwYXJ0aWRhc1xuXHRcdFx0XHRsZXQgJGRlcGFydHVyZXMgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImRlcGFydHVyZXNcIik7XG5cblx0XHRcdFx0ZGlyZWN0aW9ucy5mb3JFYWNoKChkaXJlY3Rpb24pID0+IHtcblx0XHRcdFx0XHRsZXQgJGRpcmVjdGlvbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGlyZWN0aW9uXCIpLmFwcGVuZFRvKCRkZXBhcnR1cmVzKTtcblx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImRpcmVjdGlvbi1jYXB0aW9uXCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJkaXJlY3Rpb25cIl0pLmFwcGVuZFRvKCRkaXJlY3Rpb24pO1xuXG5cdFx0XHRcdFx0bGV0IGV0YXMgPSBkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbltkaXJlY3Rpb25dO1xuXHRcdFx0XHRcdGV0YXMuc29ydCgoYSwgYikgPT4geyByZXR1cm4gYVtcInNlY29uZHNcIl0gLSBiW1wic2Vjb25kc1wiXSB9KTtcblxuXHRcdFx0XHRcdGV0YXMuZm9yRWFjaCgodHJhaW4pID0+IHtcblx0XHRcdFx0XHRcdGxldCAkdHJhaW4gPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInRyYWluXCIpLmFwcGVuZFRvKCRkaXJlY3Rpb24pO1xuXHRcdFx0XHRcdFx0bGV0ICRsaW5lID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpbi1saW5lXCIpLmFwcGVuZFRvKCR0cmFpbik7XG5cdFx0XHRcdFx0XHRsZXQgaXNfYXBwcm9hY2hpbmcgPSB0cmFpbltcInNlY29uZHNcIl0gPCAzMDtcblxuXHRcdFx0XHRcdFx0bGV0IGxpbmUgPSBsaW5lX2luZGV4W3RyYWluW1wibGluZVwiXV07XG5cdFx0XHRcdFx0XHRsZXQgZGVwYXJ0dXJlX2NvdW50ZG93biA9IChpc19hcHByb2FjaGluZz8gTDEwbltsYW5ndWFnZV1bXCJub3dcIl0gOiBNYXRoLnJvdW5kKHRyYWluW1wic2Vjb25kc1wiXSAvIDYwKSArIFwiPHNwYW4+bWluPC9zcGFuPlwiKTtcblx0XHRcdFx0XHRcdGxldCBkZXBhcnR1cmVfdGltZSA9IG1vbWVudCh0cmFpbltcImFycml2YWxUaW1lXCJdKS5mb3JtYXQoXCJISDptbVwiKTtcblxuXHRcdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJsaW5lLXNoaWVsZFwiKS5jc3MoXCJjb2xvclwiLCBsaW5lW1wiY29sb3JcIl0pLmF0dHIoXCJ0aXRsZVwiLCBMMTBuW2xhbmd1YWdlXVtcImxpbmVcIl0gKyBcIiBcIiArIGxpbmVbXCJpZFwiXSkuYXR0cihcImRpc2FibGVkXCIsIHRydWUpLnRleHQobGluZVtcImlkXCJdKS5hcHBlbmRUbygkbGluZSk7XG5cdFx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInRyYWluLWRpcmVjdGlvblwiKS5hdHRyKFwidGl0bGVcIiwgTDEwbltsYW5ndWFnZV1bXCJ0cmFpblwiXSArIFwiIFwiICsgdHJhaW5bXCJ0cmFpblwiXSkudGV4dChkaXJlY3Rpb24pLmFwcGVuZFRvKCR0cmFpbik7XG5cdFx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInRyYWluLWV0YVwiKS5hdHRyKFwidGl0bGVcIiwgZGVwYXJ0dXJlX3RpbWUpLmh0bWwoZGVwYXJ0dXJlX2NvdW50ZG93bikuYXBwZW5kVG8oJHRyYWluKTtcblxuXHRcdFx0XHRcdFx0aWYgKGlzX2FwcHJvYWNoaW5nKSB7XG5cdFx0XHRcdFx0XHRcdCR0cmFpbi5hZGRDbGFzcyhcIi1zdGF0ZS0tYXBwcm9hY2hpbmdcIik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGxhc3RVcGRhdGVkKCk7XG5cblx0XHRcdFx0Ly8gTGltcGEgbyBwYWluZWwgZSBpbnNlcmUgb3Mgbm92b3MgZGFkb3Ncblx0XHRcdFx0JHBhbmVsLnJlbW92ZUNsYXNzKHN0YXRlX2NsYXNzZXMpLmFkZENsYXNzKFwiLXN0YXRlLS1zdGF0aW9uXCIpO1xuXHRcdFx0XHQkcGFuZWxbXCJjb250ZW50XCJdW1wic3RhdGlvblwiXS5lbXB0eSgpLmFwcGVuZCgkZGVwYXJ0dXJlcyk7XG5cblx0XHRcdFx0Ly8gQXMgcGFyYWRhcyBTZXRlIGRlIFNldGVtYnJvIGUgQ29sb21ibyBzw6NvIG11aXRvIHByw7N4aW1hcywgZW50w6NvIMOpIGNvbXVtIHF1ZSBhIGxvY2FsaXphw6fDo29cblx0XHRcdFx0Ly8gZG8gR1BTIGRvIHVzdcOhcmlvIGxldmUgw6AgZXN0YcOnw6NvIGVycmFkYS4gUG9yIGlzc28sIG5lc3NhcyBwYXJhZGFzLCDDqSBtb3N0cmFkbyB1bSBib3TDo28gcGFyYVxuXHRcdFx0XHQvLyBmYWNpbGl0YXIgYSB0cm9jYSBkZSBwYXJhZGEuIE8gYm90w6NvIHPDsyDDqSBleGliaWRvIHF1YW5kbyBvIHVzdcOhcmlvIHZlbSBkYSBsb2NhbGl6YcOnw6NvXG5cdFx0XHRcdC8vIGF1dG9tw6F0aWNhIChuw6NvIG1vc3RyYSBzZSBwYXJhZGEgZm9pIGVzY29saGlkYSBubyBtZW51KVxuXHRcdFx0XHRpZiAoZnJvbV9ncHMgPT09IHRydWUgJiYgW1wic2V0ZS1kZS1zZXRlbWJyb1wiLCBcImNvbG9tYm9cIl0uaW5jbHVkZXMoc3RhdGlvbltcImlkXCJdKSkge1xuXHRcdFx0XHRcdGxldCBvcmlnaW5fYW5kX2Rlc3RpbmF0aW9uID0ge1xuXHRcdFx0XHRcdFx0XCJzZXRlLWRlLXNldGVtYnJvXCI6IHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiQ29sb21ib1wiLFxuXHRcdFx0XHRcdFx0XHRcImlkXCI6IFwiY29sb21ib1wiXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XCJjb2xvbWJvXCI6IHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiU2V0ZSBkZSBTZXRlbWJyb1wiLFxuXHRcdFx0XHRcdFx0XHRcImlkXCI6IFwic2V0ZS1kZS1zZXRlbWJyb1wiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdGxldCBkZXN0aW5hdGlvbiA9IG9yaWdpbl9hbmRfZGVzdGluYXRpb25bc3RhdGlvbltcImlkXCJdXTtcblxuXHRcdFx0XHRcdGxldCAkc3VnZ2VzdGlvbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3VnZ2VzdGlvblwiKTtcblx0XHRcdFx0XHRsZXQgJGJ1dHRvbiA9ICQoXCI8YSAvPlwiKS5hZGRDbGFzcyhcImJ1dHRvblwiKS5hdHRyKFwiaHJlZlwiLCBcIiNcIikuYXBwZW5kVG8oJHN1Z2dlc3Rpb24pO1xuXHRcdFx0XHRcdCQoXCI8aSAvPlwiKS5hZGRDbGFzcyhcIm1hdGVyaWFsLWljb25zXCIpLnRleHQoXCJuZWFyX21lXCIpLmFwcGVuZFRvKCRidXR0b24pO1xuXHRcdFx0XHRcdCQoXCI8c3BhbiAvPlwiKS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wiYXJlLXlvdS1hdFwiXSkuYXBwZW5kVG8oJGJ1dHRvbik7XG5cdFx0XHRcdFx0JChcIjxzdHJvbmcgLz5cIikudGV4dChkZXN0aW5hdGlvbltcIm5hbWVcIl0gKyBcIj9cIikuYXBwZW5kVG8oJGJ1dHRvbik7XG5cblx0XHRcdFx0XHQkYnV0dG9uLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0bmV4dERlcGFydHVyZXMoZGVzdGluYXRpb24pO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0JHBhbmVsW1wiY29udGVudFwiXVtcInN0YXRpb25cIl0uYXBwZW5kKCRzdWdnZXN0aW9uKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdC8vIEF0dWFsaXphw6fDo29cblx0Y29uc3QgdXBkYXRlV2luZG93ID0gKCkgPT4ge1xuXHRcdGlmIChkb2N1bWVudC5oaWRkZW4gPT09IGZhbHNlICYmIG5hdmlnYXRvci5vbkxpbmUgPT09IHRydWUpIHtcblx0XHRcdGxhc3RVcGRhdGVkKCk7XG5cdFx0XHRnZXREYXRhKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIENyaWEgbm92b3MgaW50ZXJ2YWxvcyBlIGV2ZW50b3Ncblx0JCh3aW5kb3cpLm9uKFwib25saW5lLmRlcGFydHVyZXMgdmlzaWJpbGl0eWNoYW5nZS5kZXBhcnR1cmVzXCIsIHVwZGF0ZVdpbmRvdyk7XG5cblx0aWYgKGVudiA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcblx0XHRjdWVbXCJpbnRlcnZhbC1kZXBhcnR1cmVzXCJdID0gc2V0SW50ZXJ2YWwoZ2V0RGF0YSwgMTUwMDApO1xuXHRcdGN1ZVtcImludGVydmFsLWxhc3QtdXBkYXRlZFwiXSA9IHNldEludGVydmFsKGxhc3RVcGRhdGVkLCA1MDAwKTtcblx0fVxuXG5cdGdldERhdGEoKTtcbn07XG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIHN5c3RlbSBzdGF0dXMgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gUGVnYSBvIGVzdGFkbyBkbyBzaXN0ZW1hXHJcbmNvbnN0IHN5c3RlbVN0YXR1cyA9ICgoKSA9PiB7XHJcbiAgICBjdWVbXCJsb2FkLWRvY3VtZW50XCJdLmRvbmUoKCkgPT4ge1xyXG4gICAgICAgIGlmIChlbnYgIT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gICAgICAgICAgICBjdWVbXCJpbnRlcnZhbC1zeXN0ZW0tc3RhdHVzXCJdID0gc2V0SW50ZXJ2YWwoZ2V0U3RhdHVzLCA2MCAqIDEwMDApO1xyXG4gICAgICAgICAgICBnZXRTdGF0dXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgbGFzdF9zdGF0dXM7XHJcblxyXG4gICAgY29uc3Qgc3RhdGVfY2xhc3NlcyA9IFtcclxuICAgICAgICBcIi1zdGF0ZS0tb2tcIixcclxuICAgICAgICBcIi1zdGF0ZS0td2FybmluZ1wiXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGdldFN0YXR1cyA9ICgpID0+IHtcclxuICAgICAgICAvLyBTw7MgY2FycmVnYSBzZSBlc3RpdmVyIGVtIGZvY28gZSBvbmxpbmVcclxuICAgICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuID09PSB0cnVlIHx8IG5hdmlnYXRvci5vbkxpbmUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQuZ2V0SlNPTihcImh0dHBzOi8vdXMtY2VudHJhbDEtdmx0Y2FyaW9jYS5jbG91ZGZ1bmN0aW9ucy5uZXQvc3RhdHVzP2NhbGxiYWNrPT9cIikuZG9uZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdLnJlbW92ZUNsYXNzKHN0YXRlX2NsYXNzZXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlW1wic3RhdHVzXCJdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJzdGF0dXNcIl0gPT09IFwiTm9ybWFsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0uYWRkQ2xhc3MoXCItc3RhdGUtLW9rXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdF9zdGF0dXMgIT09IFwiTm9ybWFsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1wiaWNvblwiXS50ZXh0KFwiY2hlY2tfY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJ0ZXh0XCJdLnRleHQoTDEwbltsYW5ndWFnZV1bXCJzdGF0dXMtb2tcIl0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VfaGVpZ2h0ID0gJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1widGV4dFwiXS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0uaGVpZ2h0KG1lc3NhZ2VfaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1jb2xsYXBzZWRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5jc3MoXCJoZWlnaHRcIiwgXCJcIikuYWRkQ2xhc3MoXCItbW9kZS0tY29sbGFwc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA0MDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5hZGRDbGFzcyhcIi1zdGF0ZS0td2FybmluZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJpY29uXCJdLnRleHQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJ0ZXh0XCJdLnRleHQocmVzcG9uc2VbXCJtZXNzYWdlXCJdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VfaGVpZ2h0ID0gJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1widGV4dFwiXS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5oZWlnaHQobWVzc2FnZV9oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0ucmVtb3ZlQ2xhc3MoXCItbW9kZS0tY29sbGFwc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxhc3Rfc3RhdHVzID0gcmVzcG9uc2VbXCJzdGF0dXNcIl07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICQod2luZG93KS5vbihcInZpc2liaWxpdHljaGFuZ2Uuc3lzdGVtU3RhdHVzXCIsICgpID0+IHtcclxuICAgICAgICBsYXN0X3N0YXR1cyA9IG51bGw7XHJcbiAgICAgICAgZ2V0U3RhdHVzKCk7XHJcbiAgICB9KTtcclxufSkoKTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gc3RhdGlvbiBsaXN0IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5jb25zdCBzdGF0aW9uTGlzdCA9ICgpID0+IHtcblx0JG5hdmlnYXRpb25bXCJoZWFkZXJcIl1bXCJwbGFjZWhvbGRlclwiXS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wic3RhdGlvbnNcIl0pO1xuXG5cdC8vIEJvdMOjbyBwYXJhIGxvY2FsaXphciBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYVxuXHRsZXQgJG5lYXJlc3QgPSAkKFwiPGEgLz5cIikuYXR0cihcImhyZWZcIiwgXCIjXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQkKFwiLnN0YXRpb25zIGgxIC5zdGF0aW9uLW5hbWVcIikudGV4dChcIlwiKTtcblx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHRcdGdldExvY2F0aW9uKCk7XG5cdH0pLmFwcGVuZFRvKCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXVtcInN0YXRpb25zXCJdKTtcblx0JChcIjxpIC8+XCIpLmFkZENsYXNzKFwibWF0ZXJpYWwtaWNvbnNcIikudGV4dChcIm5lYXJfbWVcIikuYXBwZW5kVG8oJG5lYXJlc3QpO1xuXHQkKFwiPHNwYW4gLz5cIikudGV4dChMMTBuW2xhbmd1YWdlXVtcImZpbmQtbmVhcmVzdC1zdGF0aW9uXCJdKS5hcHBlbmRUbygkbmVhcmVzdCk7XG5cblx0JChcIjxsaSAvPlwiKS5hZGRDbGFzcyhcIm5lYXJlc3Qtc3RhdGlvblwiKS5hcHBlbmQoJG5lYXJlc3QpLmFwcGVuZFRvKCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXVtcInN0YXRpb25zXCJdKTtcblxuXHQvLyBNb250YSBsaXN0YSBkZSBlc3Rhw6fDtWVzXG5cdHN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcblx0XHRsZXQgJHN0YXRpb24gPSAkKFwiPGEgLz5cIikuYXR0cihcImhyZWZcIiwgXCIjXCIgKyBzdGF0aW9uW1wiaWRcIl0pLmF0dHIoXCJkYXRhLXN0YXRpb25cIiwgc3RhdGlvbltcIm5hbWVcIl0pO1xuXG5cdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJzdGF0aW9uLW5hbWVcIikudGV4dChzdGF0aW9uW1wibmFtZVwiXSkuYXBwZW5kVG8oJHN0YXRpb24pO1xuXG5cdFx0bGV0ICRsaW5lcyA9ICQoXCI8dWwgLz5cIikuYWRkQ2xhc3MoXCJzdGF0aW9uLWxpbmVzXCIpLmFwcGVuZFRvKCRzdGF0aW9uKTtcblx0XHRsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdFx0XHRsZXQgJGxpbmUgPSAkKFwiPGxpIC8+XCIpLmFwcGVuZFRvKCRsaW5lcyk7XG5cdFx0XHRpZiAoc3RhdGlvbltcImxpbmVzXCJdLmluY2x1ZGVzKGxpbmVbXCJpZFwiXSkpIHtcblx0XHRcdFx0bGV0ICRzaGllbGQgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImxpbmUtc2hpZWxkXCIpLmNzcyhcImNvbG9yXCIsIGxpbmVbXCJjb2xvclwiXSkudGV4dChsaW5lW1wiaWRcIl0pLmFwcGVuZFRvKCRsaW5lKTtcblxuXHRcdFx0XHRpZiAobGluZVtcImRpc2FibGVkXCJdKSB7XG5cdFx0XHRcdFx0JHNoaWVsZC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSkuYWRkQ2xhc3MoXCItc3RhdGUtLWRpc2FibGVkXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoIXN0YXRpb25bXCJkaXNhYmxlZFwiXSkge1xuXHRcdFx0JHN0YXRpb24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0bmV4dERlcGFydHVyZXMoc3RhdGlvbik7XG5cdFx0XHRcdCRib2R5LnJlbW92ZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHN0YXRpb24uYWRkQ2xhc3MoXCItc3RhdGUtLWRpc2FibGVkXCIpO1xuXHRcdFx0JHN0YXRpb24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdCQoXCI8bGkgLz5cIikuYXBwZW5kKCRzdGF0aW9uKS5hcHBlbmRUbygkbmF2aWdhdGlvbltcImNvbnRlbnRcIl1bXCJzdGF0aW9uc1wiXSk7XG5cdH0pO1xuXG5cdC8vIEFzc29jaWEgbyBldmVudG8gZGUgY2xpY2sgcGFyYSBhYnJpciBvdSBmZWNoYXIgYSBsaXN0YVxuXHQkbmF2aWdhdGlvbltcImhlYWRlclwiXS5vbihcImNsaWNrXCIsICgpID0+IHtcblx0XHQkYm9keS50b2dnbGVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHR9KTtcblxuXHQkcGFuZWxbXCJoZWFkZXJcIl0ub24oXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0aWYgKCRib2R5Lmhhc0NsYXNzKFwiLW1vZGUtLWxpc3RcIikpIHtcblx0XHRcdCRib2R5LnJlbW92ZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBTY3JvbGwgZGVudHJvIGRhIGxpc3RhXG5cdCQod2luZG93KS5vbihcInNjcm9sbFwiLCAoZXZlbnQpID0+IHtcblx0XHRsZXQgc2Nyb2xsX3RvcF9wb3NpdGlvbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuXHRcdGlmIChzY3JvbGxfdG9wX3Bvc2l0aW9uID49IDEyKSB7XG5cdFx0XHQkYm9keS5hZGRDbGFzcyhcIi1tb2RlLS1zY3JvbGxcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRib2R5LnJlbW92ZUNsYXNzKFwiLW1vZGUtLXNjcm9sbFwiKTtcblx0XHR9XG5cdH0pO1xufTtcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gdGhlbWUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5jb25zdCB0aGVtZSA9ICgoKSA9PiB7XHJcbiAgICBsZXQgdGhlbWVfb3JkZXIgPSBbXHJcbiAgICAgICAgXCJhdXRvXCIsXHJcbiAgICAgICAgXCJsaWdodFwiLFxyXG4gICAgICAgIFwiZGFya1wiXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCB0aGVtZV9zZXR0aW5ncyA9IHtcclxuICAgICAgICBcImF1dG9cIjoge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IEwxMG5bbGFuZ3VhZ2VdW1wiYXV0by10aGVtZVwiXSxcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiYnJpZ2h0bmVzc19hdXRvXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibGlnaHRcIjoge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IEwxMG5bbGFuZ3VhZ2VdW1wibGlnaHQtdGhlbWVcIl0sXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImJyaWdodG5lc3NfNVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRhcmtcIjoge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IEwxMG5bbGFuZ3VhZ2VdW1wiZGFyay10aGVtZVwiXSxcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiYnJpZ2h0bmVzc180XCJcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgc2V0ID0gKG5ld190aGVtZSwgb2xkX3RoZW1lID0gXCJcIikgPT4ge1xyXG4gICAgICAgIGN1cnJlbnRfdGhlbWUgPSBuZXdfdGhlbWU7XHJcblxyXG4gICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lIHNwYW5cIikudGV4dCh0aGVtZV9zZXR0aW5nc1tuZXdfdGhlbWVdW1widGl0bGVcIl0pO1xyXG4gICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lIGlcIikudGV4dCh0aGVtZV9zZXR0aW5nc1tuZXdfdGhlbWVdW1wiaWNvblwiXSk7XHJcblxyXG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLXRoZW1lLS1cIiArIG9sZF90aGVtZSkuYWRkQ2xhc3MoXCItdGhlbWUtLVwiICsgbmV3X3RoZW1lKTtcclxuXHJcbiAgICAgICAgLy8gU2FsdmEgY29uZmlndXJhw6fDo28gbm8gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgaWYgKG5ld190aGVtZSA9PT0gXCJhdXRvXCIpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0aGVtZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIG5ld190aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBDb25mZXJlIHNlIGrDoSBow6EgdGVtYSBzYWx2byBubyBsb2NhbFN0b3JhZ2UuXHJcbiAgICAvLyBTZSBuw6NvIGhvdXZlciwgcGVnYSBvIHBhZHLDo28gZG8gc2lzdGVtYVxyXG4gICAgLy8gbGV0IGN1cnJlbnRfdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIHx8IGdldENvbXB1dGVkU3R5bGUoJChcIi5zZXR0aW5ncyAuY3VycmVudC10aGVtZVwiKVswXSkuZ2V0UHJvcGVydHlWYWx1ZShcImNvbnRlbnRcIikucmVwbGFjZSgvXCIvZywgXCJcIik7XHJcbiAgICBsZXQgY3VycmVudF90aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgfHwgXCJhdXRvXCI7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRfdGhlbWUpIHtcclxuICAgICAgICBzZXQoY3VycmVudF90aGVtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoIWN1cnJlbnRfdGhlbWUpIHtcclxuICAgICAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWUgc3BhblwiKS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wiYXV0by10aGVtZVwiXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKFwiLnNldHRpbmdzIC50aGVtZVwiKS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGVzY29icmUgYSBwb3Npw6fDo28gZG8gdGVtYSBuYSBvcmRlbVxyXG4gICAgICAgICAgICBsZXQgdGhlbWVfcG9zaXRpb24gPSB0aGVtZV9vcmRlci5pbmRleE9mKGN1cnJlbnRfdGhlbWUpO1xyXG4gICAgICAgICAgICBsZXQgbmV3X3RoZW1lID0gdGhlbWVfb3JkZXJbdGhlbWVfcG9zaXRpb24gKyAxXSB8fCB0aGVtZV9vcmRlclswXTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldGEgbyBub3ZvIHRlbWFcclxuICAgICAgICAgICAgc2V0KG5ld190aGVtZSwgY3VycmVudF90aGVtZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59KSgpO1xyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBzdGFydCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiQoZnVuY3Rpb24oKSB7XG5cdCRib2R5ID0gJChcImJvZHlcIik7XG5cblx0JG5hdmlnYXRpb24gPSAkKFwiLm5hdmlnYXRpb25cIik7XG5cdCRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdID0gJChcIi5uYXZpZ2F0aW9uLWhlYWRlclwiLCAkbmF2aWdhdGlvbik7XG5cdCRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdW1wic3RhdGlvbi1uYW1lXCJdID0gJChcIi5zdGF0aW9uLW5hbWVcIiwgJG5hdmlnYXRpb25bXCJoZWFkZXJcIl0pO1xuXHQkbmF2aWdhdGlvbltcImhlYWRlclwiXVtcInBsYWNlaG9sZGVyXCJdID0gJChcIi5wbGFjZWhvbGRlclwiLCAkbmF2aWdhdGlvbltcImhlYWRlclwiXSk7XG5cdCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXSA9ICQoXCIubmF2aWdhdGlvbi1jb250ZW50XCIsICRuYXZpZ2F0aW9uKTtcblx0JG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0gPSAkKFwiLnN0YXRpb25zXCIsICRuYXZpZ2F0aW9uW1wiY29udGVudFwiXSk7XG5cblx0JHBhbmVsID0gJChcIi5wYW5lbFwiKTtcblx0JHBhbmVsW1wiaGVhZGVyXCJdID0gJChcIi5wYW5lbC1oZWFkZXJcIiwgJHBhbmVsKTtcblx0JHBhbmVsW1wiaGVhZGVyXCJdW1widGl0bGVcIl0gPSAkKFwiLnRpdGxlXCIsICRwYW5lbFtcImhlYWRlclwiXSk7XG5cdCRwYW5lbFtcImhlYWRlclwiXVtcImJhZGdlXCJdID0gJChcIi5iYWRnZVwiLCAkcGFuZWxbXCJoZWFkZXJcIl0pO1xuXHQkcGFuZWxbXCJjb250ZW50XCJdID0gJChcIi5wYW5lbC1jb250ZW50XCIsICRwYW5lbCk7XG5cdCRwYW5lbFtcImNvbnRlbnRcIl1bXCJzdGF0aW9uXCJdID0gJChcIi5zdGF0aW9uXCIsICRwYW5lbFtcImNvbnRlbnRcIl0pO1xuXHQkcGFuZWxbXCJjb250ZW50XCJdW1wiY2xvc2VkXCJdID0gJChcIi5jbG9zZWRcIiwgJHBhbmVsW1wiY29udGVudFwiXSk7XG5cdCRwYW5lbFtcImNvbnRlbnRcIl1bXCJwZXJtaXNzaW9uXCJdID0gJChcIi5wZXJtaXNzaW9uXCIsICRwYW5lbFtcImNvbnRlbnRcIl0pO1xuXHQkcGFuZWxbXCJjb250ZW50XCJdW1wibG9hZGluZ1wiXSA9ICQoXCIubG9hZGluZ1wiLCAkcGFuZWxbXCJjb250ZW50XCJdKTtcblx0JHBhbmVsW1wiZm9vdGVyXCJdID0gJChcIi5wYW5lbC1mb290ZXJcIiwgJHBhbmVsKTtcblx0JHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdID0gJChcIi5zdGF0dXNcIiwgJHBhbmVsW1wiZm9vdGVyXCJdKTtcblx0JHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1wiaWNvblwiXSA9ICQoXCIuaWNvblwiLCAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0pO1xuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJ0ZXh0XCJdID0gJChcIi50ZXh0XCIsICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXSk7XG5cdCRwYW5lbFtcImZvb3RlclwiXVtcIm5ldHdvcmtcIl0gPSAkKFwiLm5ldHdvcmtcIiwgJHBhbmVsW1wiZm9vdGVyXCJdKTtcblxuXHRjdWVbXCJsb2FkLWRvY3VtZW50XCJdLnJlc29sdmUoKTtcblxuXHQvLyBUdWRvIGNvbWXDp2EgYXF1aSFcblx0c3RhdGlvbkxpc3QoKTtcblxuXHQvLyBDb25mZXJlIHNlIHVzdcOhcmlvIGrDoSBoYXZpYSBoYWJpbGl0YWRvIGdlb2xvY2FsaXphw6fDo28gYW50ZXNcblx0aWYgKFwiZ2VvbG9jYXRpb25cIiBpbiBuYXZpZ2F0b3IpIHtcblx0XHQkcGFuZWxbXCJjb250ZW50XCJdW1wicGVybWlzc2lvblwiXS5maW5kKFwic3BhblwiKS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wiZmluZC1uZWFyZXN0LXN0YXRpb25cIl0pO1xuXG5cdFx0aWYgKFwicGVybWlzc2lvbnNcIiBpbiBuYXZpZ2F0b3IpIHtcblx0XHRcdG5hdmlnYXRvci5wZXJtaXNzaW9ucy5xdWVyeSh7IFwibmFtZVwiOiBcImdlb2xvY2F0aW9uXCIgfSkudGhlbigocGVybWlzc2lvbikgPT4ge1xuXHRcdFx0XHRpZiAocGVybWlzc2lvbltcInN0YXRlXCJdID09PSBcImdyYW50ZWRcIikge1xuXHRcdFx0XHRcdC8vIFNlIGrDoSB0aXZlciwgcGVnYSBhIGxvY2FsaXphw6fDo28gYXR1YWwgZSBwcm9jdXJhIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXG5cdFx0XHRcdFx0Z2V0TG9jYXRpb24oKTtcblx0XHRcdFx0fSBlbHNlIGlmIChwZXJtaXNzaW9uW1wic3RhdGVcIl0gPT09IFwiZGVuaWVkXCIpIHtcblx0XHRcdFx0XHQvLyBTZSBuw6NvIGZvaSBkYXRhIHBlcm1pc3PDo28sIGFicmUgYSBsaXN0YSBkZSBlc3Rhw6fDtWVzXG5cdFx0XHRcdFx0bmV4dERlcGFydHVyZXMoKTtcblx0XHRcdFx0XHQkbmF2aWdhdGlvbltcImNvbnRlbnRcIl1bXCJzdGF0aW9uc1wiXS5maW5kKFwiLm5lYXJlc3Qtc3RhdGlvblwiKS5oaWRlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gU2UgbsOjbyB0aXZlciwgbW9zdHJhIGJvdMOjbyBwYXJhIHNvbGljaXRhciBhdXRvcml6YcOnw6NvXG5cdFx0XHRcdFx0JChcImJvZHlcIikuYWRkQ2xhc3MoXCItbW9kZS0taW5pdGlhbFwiKTtcblx0XHRcdFx0XHQkcGFuZWwuYWRkQ2xhc3MoXCItc3RhdGUtLXBlcm1pc3Npb25cIik7XG5cblx0XHRcdFx0XHQkKFwiLmJ1dHRvblwiLCAkcGFuZWxbXCJjb250ZW50XCJdW1wicGVybWlzc2lvblwiXSkub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRnZXRMb2NhdGlvbih0cnVlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGdldExvY2F0aW9uKCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIFNlIG7Do28gaG91dmVyIGdlb2xvY2FsaXphw6fDo28sIGFicmUgYSBsaXN0YSBkZSBlc3Rhw6fDtWVzXG5cdFx0bmV4dERlcGFydHVyZXMoKTtcblx0XHQkbmF2aWdhdGlvbltcImNvbnRlbnRcIl1bXCJzdGF0aW9uc1wiXS5maW5kKFwiLm5lYXJlc3Qtc3RhdGlvblwiKS5oaWRlKCk7XG5cdH1cbn0pO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBTZXJ2aWNlIFdvcmtlclxuaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuXHRcdGN1ZVtcInNlcnZpY2Utd29ya2VyXCJdID0gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXCIvc2VydmljZS13b3JrZXIuanNcIik7XG5cblx0XHRjdWVbXCJzZXJ2aWNlLXdvcmtlclwiXS50aGVuKChyZWdpc3RyYXRpb24pID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwiU2VydmljZSBXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwhXCIsIHJlZ2lzdHJhdGlvbik7XG5cdFx0fSwgKGVycm9yKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6IFwiLCBlcnJvcik7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBFc3RhZG8gZGEgY29uZXjDo29cbiQoZnVuY3Rpb24oKSB7XG5cdCRwYW5lbFtcImZvb3RlclwiXVtcIm5ldHdvcmtcIl0udGV4dChMMTBuW2xhbmd1YWdlXVtcIm9mZmxpbmVcIl0pO1xufSk7XG5cbmNvbnN0IHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMgPSAoKSA9PiB7XG5cdGxldCBjb25uZWN0ZWQgPSBuYXZpZ2F0b3Iub25MaW5lO1xuXG5cdGlmIChjb25uZWN0ZWQgPT09IHRydWUpIHtcblx0XHQkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdLnJlbW92ZUNsYXNzKFwiLXN0YXRlLS1vZmZsaW5lXCIpO1xuXHR9IGVsc2Uge1xuXHRcdCRwYW5lbFtcImZvb3RlclwiXVtcIm5ldHdvcmtcIl0uYWRkQ2xhc3MoXCItc3RhdGUtLW9mZmxpbmVcIik7XG5cdH1cbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib25saW5lXCIsIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMpO1xuIl19