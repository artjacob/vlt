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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiLCJMMTBuLmpzIiwic3RhdGlvbi1pbmZvLmpzIiwibGluZS1pbmZvLmpzIiwiZ2V0LWxvY2F0aW9uLmpzIiwibmVhcmVzdC1zdGF0aW9uLmpzIiwibmV4dC1kZXBhcnR1cmVzLmpzIiwic3lzdGVtLXN0YXR1cy5qcyIsInN0YXRpb24tbGlzdC5qcyIsInRoZW1lLmpzIiwic3RhcnQuanMiXSwibmFtZXMiOlsiY3VlIiwiJGJvZHkiLCIkbmF2aWdhdGlvbiIsIiRwYW5lbCIsIiQiLCJEZWZlcnJlZCIsImxhbmd1YWdlIiwibW9tZW50IiwibG9jYWxlIiwiTDEwbiIsInN0YXRpb25zIiwic3RhdGlvbl9pbmRleCIsImZvckVhY2giLCJzdGF0aW9uIiwic3RhdGlvbl9uYW1lIiwibGluZXMiLCJsaW5lX2luZGV4IiwibGluZSIsImxpbmVfbmFtZSIsImdldExvY2F0aW9uIiwiaXNfaW5pdGlhbCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJyZW1vdmVDbGFzcyIsIm5lYXJlc3Rfc3RhdGlvbiIsIm5lYXJlc3RTdGF0aW9uIiwibmV4dERlcGFydHVyZXMiLCJkZWcycmFkIiwiZGVnIiwiTWF0aCIsIlBJIiwidXNlcl9jb29yZGluYXRlcyIsInVzZXJfbGF0aXR1ZGUiLCJ1c2VyX2xvbmdpdHVkZSIsIlIiLCJzaG9ydGVzdF9kaXN0YW5jZSIsInN0YXRpb25fbGF0aXR1ZGUiLCJzdGF0aW9uX2xvbmdpdHVkZSIsIngiLCJjb3MiLCJ5IiwiZGlzdGFuY2UiLCJzcXJ0IiwiZnJvbV9ncHMiLCJkZXBhcnR1cmVzIiwiYWRkQ2xhc3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInN0YXRlX2NsYXNzZXMiLCJjbGVhckludGVydmFsIiwid2luZG93Iiwib2ZmIiwidGV4dCIsImVtcHR5IiwiZmluZCIsImxhc3RVcGRhdGVkIiwiJGJhZGdlIiwic2Vjb25kc19zaW5jZV91cGRhdGUiLCJkaWZmIiwibGFzdF91cGRhdGVkIiwiZnJvbU5vdyIsImFwcGVuZCIsImdldERhdGEiLCJkb2N1bWVudCIsImhpZGRlbiIsIm9uTGluZSIsImdldEpTT04iLCJlbnYiLCJkb25lIiwicmVzcG9uc2UiLCJldGFfY291bnQiLCJkaXJlY3Rpb25zIiwiZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb24iLCJkaXJlY3Rpb24iLCJkaXJlY3Rpb25fdGl0bGUiLCJsZW5ndGgiLCJpbmNsdWRlcyIsInB1c2giLCJ0cmFpbiIsIm5vdyIsIm9wZXJhdGlvbl9zdGFydF90aW1lIiwib3BlcmF0aW9uX2VuZF90aW1lIiwiaXNBZnRlciIsImlzQmVmb3JlIiwiYXBwZW5kVG8iLCJodG1sIiwiJGRlcGFydHVyZXMiLCIkZGlyZWN0aW9uIiwiZXRhcyIsInNvcnQiLCJhIiwiYiIsIiR0cmFpbiIsIiRsaW5lIiwiaXNfYXBwcm9hY2hpbmciLCJkZXBhcnR1cmVfY291bnRkb3duIiwicm91bmQiLCJkZXBhcnR1cmVfdGltZSIsImZvcm1hdCIsImNzcyIsImF0dHIiLCJvcmlnaW5fYW5kX2Rlc3RpbmF0aW9uIiwiZGVzdGluYXRpb24iLCIkc3VnZ2VzdGlvbiIsIiRidXR0b24iLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNvbHZlIiwidXBkYXRlV2luZG93Iiwic2V0SW50ZXJ2YWwiLCJzeXN0ZW1TdGF0dXMiLCJnZXRTdGF0dXMiLCJsYXN0X3N0YXR1cyIsIm1lc3NhZ2VfaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJoZWlnaHQiLCJzZXRUaW1lb3V0Iiwic3RhdGlvbkxpc3QiLCIkbmVhcmVzdCIsIiRzdGF0aW9uIiwiJGxpbmVzIiwiJHNoaWVsZCIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJzY3JvbGxfdG9wX3Bvc2l0aW9uIiwic2Nyb2xsVG9wIiwidGhlbWUiLCJ0aGVtZV9vcmRlciIsInRoZW1lX3NldHRpbmdzIiwic2V0IiwibmV3X3RoZW1lIiwib2xkX3RoZW1lIiwiY3VycmVudF90aGVtZSIsInJlbW92ZUl0ZW0iLCJ0aGVtZV9wb3NpdGlvbiIsImluZGV4T2YiLCJwZXJtaXNzaW9ucyIsInF1ZXJ5IiwidGhlbiIsInBlcm1pc3Npb24iLCJoaWRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInJlZ2lzdHJhdGlvbiIsImVycm9yIiwidXBkYXRlQ29ubmVjdGlvblN0YXR1cyIsImNvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFBQSxHQUFBLEdBQUEsRUFBQSxDLENBQ0E7O0FBQ0EsSUFBQUMsS0FBQSxFQUFBQyxXQUFBLEVBQUFDLE1BQUE7QUFFQUgsR0FBQSxDQUFBLGVBQUEsQ0FBQSxHQUFBSSxDQUFBLENBQUFDLFFBQUEsRUFBQTtBQUNBTCxHQUFBLENBQUEsaUJBQUEsQ0FBQSxHQUFBSSxDQUFBLENBQUFDLFFBQUEsRUFBQSxDLENDVEE7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsSUFBQUMsUUFBQSxHQUFBLElBQUEsQyxDQUVBOztBQUNBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQSxPQUFBLEUsQ0FDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBQUMsSUFBQSxHQUFBO0FBQ0EsUUFBQTtBQUNBLHVCQUFBLGdCQURBO0FBRUEsaUJBQUEsWUFGQTtBQUdBLGtCQUFBLFNBSEE7QUFJQSxpQkFBQSxTQUpBO0FBS0EsV0FBQSxPQUxBO0FBTUEsYUFBQSxNQU5BO0FBT0EsWUFBQSxPQVBBO0FBUUEsZUFBQSxZQVJBO0FBU0Esd0JBQUEsa0JBVEE7QUFVQSx1QkFBQSxxREFWQTtBQVdBLFdBQUEsT0FYQTtBQVlBLGdCQUFBLFVBWkE7QUFhQSw0QkFBQSxnQ0FiQTtBQWNBLGtCQUFBLGlCQWRBO0FBZUEsbUJBQUEsWUFmQTtBQWdCQSxrQkFBQSxhQWhCQTtBQWlCQSxlQUFBLGFBakJBO0FBa0JBLGlCQUFBLGlCQWxCQSxDQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUExQ0E7QUFEQSxDQUFBO0FDYkEsSUFBQUMsUUFBQSxHQUFBLENBQ0E7QUFDQSxVQUFBLGdCQURBO0FBRUEsUUFBQSxnQkFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQURBLEVBU0E7QUFDQTtBQUNBLFVBQUEsVUFGQTtBQUdBLFFBQUEsVUFIQTtBQUlBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUxBO0FBTUE7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQVBBLENBVEEsRUFrQkE7QUFDQSxVQUFBLFlBREE7QUFFQSxRQUFBLFlBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FsQkEsRUEwQkE7QUFDQSxVQUFBLFNBREE7QUFFQSxRQUFBLFNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0ExQkEsRUFrQ0E7QUFDQSxVQUFBLFNBREE7QUFFQSxRQUFBLFNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FsQ0EsRUEwQ0E7QUFDQSxVQUFBLGlCQURBO0FBRUEsUUFBQSxpQkFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBMUNBLEVBa0RBO0FBQ0EsVUFBQSxZQURBO0FBRUEsUUFBQSxZQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbERBLEVBMERBO0FBQ0EsVUFBQSxTQURBO0FBRUEsUUFBQSxTQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0ExREEsRUFrRUE7QUFDQSxVQUFBLG1CQURBO0FBRUEsUUFBQSxtQkFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQWxFQSxFQTBFQTtBQUNBO0FBQ0EsVUFBQSxrQkFGQTtBQUdBLFFBQUEsa0JBSEE7QUFJQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FMQTtBQU1BO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBUEEsQ0ExRUEsRUFtRkE7QUFDQSxVQUFBLFNBREE7QUFFQSxRQUFBLFNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FuRkEsRUEyRkE7QUFDQSxVQUFBLFFBREE7QUFFQSxRQUFBLFFBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0EzRkEsRUFtR0E7QUFDQSxVQUFBLFVBREE7QUFFQSxRQUFBLFVBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFB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QUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxPQUFBLElBQUFDLENBQUEsQ0FBQSxRQUFBLEVBQUFELE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLEdBQUFDLENBQUEsQ0FBQSxnQkFBQSxFQUFBRCxNQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFNBQUEsSUFBQUMsQ0FBQSxDQUFBLFVBQUEsRUFBQUQsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxRQUFBLElBQUFDLENBQUEsQ0FBQSxTQUFBLEVBQUFELE1BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsWUFBQSxJQUFBQyxDQUFBLENBQUEsYUFBQSxFQUFBRCxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUE7QUFDQUEsRUFBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLFNBQUEsSUFBQUMsQ0FBQSxDQUFBLFVBQUEsRUFBQUQsTUFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsR0FBQUMsQ0FBQSxDQUFBLGVBQUEsRUFBQUQsTUFBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLElBQUFDLENBQUEsQ0FBQSxTQUFBLEVBQUFELE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTtBQUNBQSxFQUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsUUFBQSxFQUFBLE1BQUEsSUFBQUMsQ0FBQSxDQUFBLE9BQUEsRUFBQUQsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ0FBLEVBQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxRQUFBLEVBQUEsTUFBQSxJQUFBQyxDQUFBLENBQUEsT0FBQSxFQUFBRCxNQUFBLENB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TUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFNBQUEsRUFBQXNCLFdBQUEsQ0FBQSxpQkFBQTtBQUNBLEdBRkEsTUFFQTtBQUNBdEIsSUFBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLFNBQUEsRUFBQTRDLFFBQUEsQ0FBQSxpQkFBQTtBQUNBO0FBQ0EsQ0FSQTs7QUFVQU0sTUFBQSxDQUFBNEYsZ0JBQUEsQ0FBQSxRQUFBLEVBQUFLLHNCQUFBO0FBQ0FqRyxNQUFBLENBQUE0RixnQkFBQSxDQUFBLFNBQUEsRUFBQUssc0JBQUEiLCJmaWxlIjoidmx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBiYXNlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmxldCBjdWUgPSBbIF07XHJcbi8vIGxldCAkcGFuZWwsICRzdGF0aW9uLCAkcGVybWlzc2lvbiwgJG5ldHdvcmssICRzdGF0dXM7XHJcbmxldCAkYm9keSwgJG5hdmlnYXRpb24sICRwYW5lbDtcclxuXHJcbmN1ZVtcImxvYWQtZG9jdW1lbnRcIl0gPSAkLkRlZmVycmVkKCk7XHJcbmN1ZVtcImxvYWQtZGVwYXJ0dXJlc1wiXSA9ICQuRGVmZXJyZWQoKTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBsb2NhbGl6YXRpb24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIGNvbnN0IGxhbmd1YWdlID0gKG5hdmlnYXRvci5sYW5ndWFnZSA/IG5hdmlnYXRvci5sYW5ndWFnZS5zdWJzdHIoMCwgMikgOiBcInB0XCIpO1xyXG5jb25zdCBsYW5ndWFnZSA9IFwicHRcIjtcclxuXHJcbi8vIGlmIChsYW5ndWFnZSA9PT0gXCJwdFwiKSB7XHJcbiAgICBtb21lbnQubG9jYWxlKFwicHQtYnJcIik7XHJcbi8vIH0gZWxzZSB7XHJcbi8vICAgICBtb21lbnQubG9jYWxlKGxhbmd1YWdlKTtcclxuLy8gfVxyXG5cclxuY29uc3QgTDEwbiA9IHtcclxuICAgIFwicHRcIjoge1xyXG4gICAgICAgIFwibmV4dC1kZXBhcnR1cmVzXCI6IFwiUHLDs3hpbW9zIHRyZW5zXCIsXHJcbiAgICAgICAgXCJyZWFsLXRpbWVcIjogXCJUZW1wbyByZWFsXCIsXHJcbiAgICAgICAgXCJhcmUteW91LWF0XCI6IFwiRXN0w6EgZW1cIixcclxuICAgICAgICBcImRpcmVjdGlvblwiOiBcIlNlbnRpZG9cIixcclxuICAgICAgICBcIm5vd1wiOiBcIkFnb3JhXCIsXHJcbiAgICAgICAgXCJ0cmFpblwiOiBcIlRyZW1cIixcclxuICAgICAgICBcImxpbmVcIjogXCJMaW5oYVwiLFxyXG4gICAgICAgIFwidXBkYXRlZFwiOiBcIkF0dWFsaXphZG9cIixcclxuICAgICAgICBcIm91dC1vZi1vcGVyYXRpb25cIjogXCJGb3JhIGRlIG9wZXJhw6fDo29cIixcclxuICAgICAgICBcIm9wZXJhdGlvbi1ob3Vyc1wiOiBcIk8gVkxUIENhcmlvY2EgY2lyY3VsYTxicj4gdG9kb3Mgb3MgZGlhcyBkYXMgNmggw6AgMGhcIixcclxuICAgICAgICBcImFnb1wiOiBcImF0csOhc1wiLFxyXG4gICAgICAgIFwic3RhdGlvbnNcIjogXCJFc3Rhw6fDtWVzXCIsXHJcbiAgICAgICAgXCJmaW5kLW5lYXJlc3Qtc3RhdGlvblwiOiBcIkxvY2FsaXphciBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYVwiLFxyXG4gICAgICAgIFwiYXV0by10aGVtZVwiOiBcIlRlbWEgYXV0b23DoXRpY29cIixcclxuICAgICAgICBcImxpZ2h0LXRoZW1lXCI6IFwiVGVtYSBjbGFyb1wiLFxyXG4gICAgICAgIFwiZGFyay10aGVtZVwiOiBcIlRlbWEgZXNjdXJvXCIsXHJcbiAgICAgICAgXCJvZmZsaW5lXCI6IFwiU2VtIGNvbmV4w6NvXCIsXHJcbiAgICAgICAgXCJzdGF0dXMtb2tcIjogXCJPcGVyYcOnw6NvIG5vcm1hbFwiXHJcbiAgICB9XHJcbiAgICAvLyBcImVuXCI6IHtcclxuICAgIC8vICAgICBcIm5leHQtZGVwYXJ0dXJlc1wiOiBcIk5leHQgdHJhaW5zXCIsXHJcbiAgICAvLyAgICAgXCJyZWFsLXRpbWVcIjogXCJSZWFsIFRpbWVcIixcclxuICAgIC8vICAgICBcImFyZS15b3UtYXRcIjogXCJBcmUgeW91IGF0XCIsXHJcbiAgICAvLyAgICAgXCJkaXJlY3Rpb25cIjogXCJEaXJlY3Rpb25cIixcclxuICAgIC8vICAgICBcIm5vd1wiOiBcIk5vd1wiLFxyXG4gICAgLy8gICAgIFwidHJhaW5cIjogXCJUcmFpblwiLFxyXG4gICAgLy8gICAgIFwibGluZVwiOiBcIkxpbmVcIixcclxuICAgIC8vICAgICBcInVwZGF0ZWRcIjogXCJVcGRhdGVkXCIsXHJcbiAgICAvLyAgICAgXCJvdXQtb2Ytb3BlcmF0aW9uXCI6IFwiU2VydmljZSBjbG9zZWRcIixcclxuICAgIC8vICAgICBcIm9wZXJhdGlvbi1ob3Vyc1wiOiBcIlZMVCBDYXJpb2NhIHJ1bnM8YnI+IGRhaWx5IGZyb20gNmFtIHRvIDEyYW1cIixcclxuICAgIC8vICAgICBcImFnb1wiOiBcImFnb1wiLFxyXG4gICAgLy8gICAgIFwic3RhdGlvbnNcIjogXCJTdGF0aW9uc1wiLFxyXG4gICAgLy8gICAgIFwiZmluZC1uZWFyZXN0LXN0YXRpb25cIjogXCJGaW5kIHlvdXIgbmVhcmVzdCBzdGF0aW9uXCIsXHJcbiAgICAvLyAgICAgXCJhdXRvLXRoZW1lXCI6IFwiQXV0byB0aGVtZVwiLFxyXG4gICAgLy8gICAgIFwibGlnaHQtdGhlbWVcIjogXCJMaWdodCB0aGVtZVwiLFxyXG4gICAgLy8gICAgIFwiZGFyay10aGVtZVwiOiBcIkRhcmsgdGhlbWVcIixcclxuICAgIC8vICAgICBcIm9mZmxpbmVcIjogXCJPZmZsaW5lXCIsXHJcbiAgICAvLyAgICAgXCJzdGF0dXMtb2tcIjogXCJHb29kIHNlcnZpY2VcIlxyXG4gICAgLy8gfSxcclxuICAgIC8vIFwiZXNcIjoge1xyXG5cclxuICAgIC8vIH1cclxufTtcclxuIiwibGV0IHN0YXRpb25zID0gW1xuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQW50b25pbyBDYXJsb3NcIixcblx0XHRcImlkXCI6IFwiYW50b25pby1jYXJsb3NcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMiwgMzogMiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MTEzMTUzNDQzOTEzMTksIC00My4xNzIwNTA5OTc1OTgyNDFdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcIm5hbWVcIjogXCJDYW1lcmlub1wiLFxuXHRcdFwiaWRcIjogXCJjYW1lcmlub1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAzOiA4IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMTY5ODA0NjAyMjM4MiwgLTQzLjE4Mzk4MzYxNDkzMzQ4OV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFszXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ2FuZGVsw6FyaWFcIixcblx0XHRcImlkXCI6IFwiY2FuZGVsYXJpYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA2LCAzOiA2IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMTcyNTAyOTM4NDI1OSwgLTQzLjE3ODgwODY2NTQxODY3MV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ2FyaW9jYVwiLFxuXHRcdFwiaWRcIjogXCJjYXJpb2NhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDQsIDM6IDQgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTA3NDg0NTA3MjUyODExLCAtNDMuMTc2NjQ1NTE4MDM4OTE3XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDZW50cmFsXCIsXG5cdFx0XCJpZFwiOiBcImNlbnRyYWxcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogNSwgMzogMTAgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAyNzA0OTYwNzQ0OTUyLCAtNDMuMTkyNjI1MzE0Mzc3MzM4XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzIsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDaWRhZGUgZG8gU2FtYmFcIixcblx0XHRcImlkXCI6IFwiY2lkYWRlLWRvLXNhbWJhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDExIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NDE3OTk1NzEyODA2NywgLTQzLjE5Njg4NDA4MjA3ODQ3Nl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ2luZWzDom5kaWFcIixcblx0XHRcImlkXCI6IFwiY2luZWxhbmRpYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAzLCAzOiAzIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkxMDczNDAwMTg0MjI0MywgLTQzLjE3NTQyNTM4NzM2NDkzMl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ29sb21ib1wiLFxuXHRcdFwiaWRcIjogXCJjb2xvbWJvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDIgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTA1MTc1MjE5MDA5NDE1LCAtNDMuMTc4MDE2OTY4MjI4ODE4XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDb3JkZWlybyBkYSBHcmHDp2FcIixcblx0XHRcImlkXCI6IFwiY29yZGVpcm8tZGEtZ3JhY2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTMsIDI6IDggfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3MTA0NjI5OTIzMTE3LCAtNDMuMjA0MTc4NDAzNTMzNzAzXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHQvLyBcImRpc2FibGVkXCI6IHRydWUsXG5cdFx0XCJuYW1lXCI6IFwiQ3Jpc3RpYW5vIE90dG9uaVwiLFxuXHRcdFwiaWRcIjogXCJjcmlzdGlhbm8tb3R0b25pXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDM6IDkgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAzMDYxMjc4NDgwNjQ4LCAtNDMuMTkwNzQ5MTA5NDIxNDg5XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzIsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJFcXVhZG9yXCIsXG5cdFx0XCJpZFwiOiBcImVxdWFkb3JcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTgsIDI6IDExIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5Nzg5NDU2NDY4Nzc4MiwgLTQzLjIwNDgwNTAxNDQ0MDgxNV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiR2FtYm9hXCIsXG5cdFx0XCJpZFwiOiBcImdhbWJvYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNiwgMjogNiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTc5NTk0MDgzNzI4NDUsIC00My4xOTkzMzY2ODMyNDYzMDFdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkhhcm1vbmlhXCIsXG5cdFx0XCJpZFwiOiBcImhhcm1vbmlhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE0IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NTc1NDQzNzI3MzM4NiwgLTQzLjE5MTQyNzYzOTU4NDQ5Nl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUGFyYWRhIGRvcyBNdXNldXNcIixcblx0XHRcImlkXCI6IFwicGFyYWRhLWRvcy1tdXNldXNcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogOCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTU5NDY1ODY4MDIyNjQsIC00My4xODE5NTU5ODA1ODEyNzJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlBhcmFkYSBkb3MgTmF2aW9zXCIsXG5cdFx0XCJpZFwiOiBcInBhcmFkYS1kb3MtbmF2aW9zXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDkgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk0MTM5NjI1MzAzODc1LCAtNDMuMTg3MTgxODMwNjE3NDRdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlBlcmVpcmEgUmVpc1wiLFxuXHRcdFwiaWRcIjogXCJwZXJlaXJhLXJlaXNcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTcsIDI6IDEwIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NjY0NzA2NDk2MDQzLCAtNDMuMjAxNzczMTExNTIzNTkzXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQcmHDp2EgWFZcIixcblx0XHRcImlkXCI6IFwicHJhY2EteHZcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogMSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDIwNzAxMjg5NDU4NDgsIC00My4xNzMxMTczOTU3ODM4NzZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlByYWlhIEZvcm1vc2FcIixcblx0XHRcImlkXCI6IFwicHJhaWEtZm9ybW9zYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMCwgMjogMTMgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAzMTc3MTUyMzg4MDU3LCAtNDMuMjA4MTYxOTY0OTAyMzAzXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQcm92aWTDqm5jaWFcIixcblx0XHRcImlkXCI6IFwicHJvdmlkZW5jaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTUgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3NDg5OTIyMDE0MzgzLCAtNDMuMTk2NzAxNDAwODkwMDM1XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJSb2RvdmnDoXJpYVwiLFxuXHRcdFwiaWRcIjogXCJyb2RvdmlhcmlhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE5LCAyOiAxMiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTg4MDU1NzQyNTE3OTksIC00My4yMDczNDI5NDE0NzU5ODZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlNhYXJhXCIsXG5cdFx0XCJpZFwiOiBcInNhYXJhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDQgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTA1OTEyMTA4NDYwMjUzLCAtNDMuMTg3MzIwNzgyMjI4MjA1XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzJdXG5cdH0sXG5cdHtcblx0XHQvLyBcImRpc2FibGVkXCI6IHRydWUsXG5cdFx0XCJuYW1lXCI6IFwiU2FudGEgUml0YVwiLFxuXHRcdFwiaWRcIjogXCJzYW50YS1yaXRhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDM6IDcgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAwNTk0MTY3NDEwNjQ5LCAtNDMuMTgxNTA5MDQ5ODU0MjA2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTYW50byBDcmlzdG9cIixcblx0XHRcImlkXCI6IFwic2FudG8tY3Jpc3RvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEyLCAyOiA3IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NTMyNzI4MjAwMjE0NiwgLTQzLjIwMDI1OTE4MTc1NTc0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTYW50b3MgRHVtb250XCIsXG5cdFx0XCJpZFwiOiBcInNhbnRvcy1kdW1vbnRcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMSwgMzogMSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MTIyODY4NzQ5NjI0MDEsIC00My4xNjc2MzIyNTk1NDU4NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU8OjbyBCZW50b1wiLFxuXHRcdFwiaWRcIjogXCJzYW8tYmVudG9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTg2NDgwOTYwNTEwMTIsIC00My4xNzk5NjQzMTE3NjQ4ODRdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlNldGUgZGUgU2V0ZW1icm9cIixcblx0XHRcImlkXCI6IFwic2V0ZS1kZS1zZXRlbWJyb1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA1LCAzOiA1IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNTMwNTkwMDk3Nzg5NywgLTQzLjE3NzQ2MzgxNjM0NjkyMl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiVGlyYWRlbnRlc1wiLFxuXHRcdFwiaWRcIjogXCJ0aXJhZGVudGVzXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDMgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTA2NTc4MjIyMDI2MTE2LCAtNDMuMTgyODU0MjM2NTU3ODAyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJVdG9waWEgQXF1YVJpb1wiLFxuXHRcdFwiaWRcIjogXCJ1dG9waWEtYXF1YXJpb1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTMwOTU0NzE5OTk2MTIsIC00My4xOTAyMzY5MDcyMTMyMTldLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlZpbGEgT2zDrW1waWNhXCIsXG5cdFx0XCJpZFwiOiBcInZpbGEtb2xpbXBpY2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogOSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTkwNTY1NzI2NDY1MzMsIC00My4xOTk2NDM1Mjk0OTUyOTddLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fVxuXTtcblxubGV0IHN0YXRpb25faW5kZXggPSB7IH07XG5zdGF0aW9ucy5mb3JFYWNoKChzdGF0aW9uKSA9PiB7XG5cdGxldCBzdGF0aW9uX25hbWUgPSBzdGF0aW9uW1wibmFtZVwiXTtcblx0c3RhdGlvbl9pbmRleFtzdGF0aW9uX25hbWVdID0gc3RhdGlvbjtcbn0pO1xuIiwibGV0IGxpbmVzID0gW1xuXHR7XG5cdFx0XCJpZFwiOiAxLFxuXHRcdFwibmFtZVwiOiBcIkxpbmhhIDFcIixcblx0XHRcImNvbG9yXCI6IFwiIzY4YjlmYlwiLFxuXHRcdC8vIFwiZGlyZWN0aW9uc1wiOiBbXG5cdFx0Ly8gXHRcIlNhbnRvcyBEdW1vbnRcIixcblx0XHQvLyBcdFwiUHJhaWEgRm9ybW9zYVwiXG5cdFx0Ly8gXVxuXHR9LFxuXHR7XG5cdFx0XCJpZFwiOiAyLFxuXHRcdFwibmFtZVwiOiBcIkxpbmhhIDJcIixcblx0XHRcImNvbG9yXCI6IFwiIzczY2EzZlwiLFxuXHRcdC8vIFwiZGlyZWN0aW9uc1wiOiBbXG5cdFx0Ly8gXHRcIlByYcOnYSBYVlwiLFxuXHRcdC8vIFx0XCJQcmFpYSBGb3Jtb3NhXCJcblx0XHQvLyBdXG5cdH0sXG5cdHtcblx0XHQvLyBcImRpc2FibGVkXCI6IHRydWUsXG5cdFx0XCJpZFwiOiAzLFxuXHRcdFwibmFtZVwiOiBcIkxpbmhhIDNcIixcblx0XHRcImNvbG9yXCI6IFwiI2YzYTIzMFwiLFxuXHRcdC8vIFwiZGlyZWN0aW9uc1wiOiBbXG5cdFx0Ly8gXHRcIlNhbnRvcyBEdW1vbnRcIixcblx0XHQvLyBcdFwiQ2VudHJhbFwiXG5cdFx0Ly8gXVxuXHR9XG5dO1xuXG5sZXQgbGluZV9pbmRleCA9IHsgfTtcbmxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcblx0bGV0IGxpbmVfbmFtZSA9IGxpbmVbXCJuYW1lXCJdO1xuXHRsaW5lX2luZGV4W2xpbmVfbmFtZV0gPSBsaW5lO1xufSk7XG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBnZXQgbG9jYXRpb24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIFBlZ2EgYSBsb2NhbGl6YcOnw6NvIGRvIHVzdcOhcmlvXG5jb25zdCBnZXRMb2NhdGlvbiA9IChpc19pbml0aWFsID0gZmFsc2UpID0+IHtcblx0bmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcblxuXHRcdC8vIFNlIHZpZXIgZG8gbW9kbyBpbmljaWFsLCBlbmNlcnJhIGVsZVxuXHRcdGlmIChpc19pbml0aWFsKSB7XG5cdFx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1pbml0aWFsXCIpO1xuXHRcdFx0JHBhbmVsLnJlbW92ZUNsYXNzKFwiLXN0YXRlLS1wZXJtaXNzaW9uXCIpO1xuXHRcdH1cblxuXHRcdC8vIERlc2NvYnJlIGEgZXN0YcOnw6NvIG1haXMgcHLDs3hpbWEgZSBwcm9jdXJhIGFzIHByw7N4aW1hcyBwYXJ0aWRhc1xuXHRcdGxldCBuZWFyZXN0X3N0YXRpb24gPSBuZWFyZXN0U3RhdGlvbihbcG9zaXRpb25bXCJjb29yZHNcIl1bXCJsYXRpdHVkZVwiXSwgcG9zaXRpb25bXCJjb29yZHNcIl1bXCJsb25naXR1ZGVcIl1dKTtcblx0XHRuZXh0RGVwYXJ0dXJlcyhuZWFyZXN0X3N0YXRpb24sIHRydWUpO1xuXHR9KTtcbn07XG4iLCIvLyBFc3Rhw6fDo28gbWFpcyBwcsOzeGltYVxuY29uc3QgZGVnMnJhZCA9IChkZWcpID0+IHtcblx0cmV0dXJuIGRlZyAqIChNYXRoLlBJIC8gMTgwKTtcbn07XG5cbmNvbnN0IG5lYXJlc3RTdGF0aW9uID0gKHVzZXJfY29vcmRpbmF0ZXMpID0+IHtcblx0Y29uc3QgdXNlcl9sYXRpdHVkZSA9IGRlZzJyYWQodXNlcl9jb29yZGluYXRlc1swXSk7XG5cdGNvbnN0IHVzZXJfbG9uZ2l0dWRlID0gZGVnMnJhZCh1c2VyX2Nvb3JkaW5hdGVzWzFdKTtcblxuXHRjb25zdCBSID0gNjM3MTtcblxuXHRsZXQgc2hvcnRlc3RfZGlzdGFuY2UgPSBudWxsO1xuXHRsZXQgbmVhcmVzdF9zdGF0aW9uID0gbnVsbDtcblxuXHRzdGF0aW9ucy5mb3JFYWNoKChzdGF0aW9uKSA9PiB7XG5cdFx0aWYgKCFzdGF0aW9uW1wiZGlzYWJsZWRcIl0pIHtcblx0XHRcdGNvbnN0IHN0YXRpb25fbGF0aXR1ZGUgPSBkZWcycmFkKHN0YXRpb25bXCJjb29yZGluYXRlc1wiXVswXSk7XG5cdFx0XHRjb25zdCBzdGF0aW9uX2xvbmdpdHVkZSA9IGRlZzJyYWQoc3RhdGlvbltcImNvb3JkaW5hdGVzXCJdWzFdKTtcblxuXHRcdFx0Y29uc3QgeCA9IChzdGF0aW9uX2xvbmdpdHVkZSAtIHVzZXJfbG9uZ2l0dWRlKSAqIE1hdGguY29zKCh1c2VyX2xhdGl0dWRlICsgc3RhdGlvbl9sYXRpdHVkZSkgLyAyKTtcblx0XHRcdGNvbnN0IHkgPSAoc3RhdGlvbl9sYXRpdHVkZSAtIHVzZXJfbGF0aXR1ZGUpO1xuXHRcdFx0Y29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSkgKiBSO1xuXG5cdFx0XHRpZiAoIXNob3J0ZXN0X2Rpc3RhbmNlIHx8IGRpc3RhbmNlIDwgc2hvcnRlc3RfZGlzdGFuY2UpIHtcblx0XHRcdFx0c2hvcnRlc3RfZGlzdGFuY2UgPSBkaXN0YW5jZTtcblx0XHRcdFx0bmVhcmVzdF9zdGF0aW9uID0gc3RhdGlvbjtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBuZWFyZXN0X3N0YXRpb247XG59O1xuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gbmV4dCBkZXBhcnR1cmVzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBQcsOzeGltYXMgcGFydGlkYXNcbmNvbnN0IG5leHREZXBhcnR1cmVzID0gKHN0YXRpb24sIGZyb21fZ3BzID0gZmFsc2UpID0+IHtcblx0bGV0IGRlcGFydHVyZXM7XG5cblx0Ly8gU2UgbsOjbyBmb3IgcGFzc2FkYSBhIGVzdGHDp8OjbywgYWJyZSBsaXN0YSBkZSBlc3Rhw6fDtWVzXG5cdGlmICghc3RhdGlvbikge1xuXHRcdCRib2R5LmFkZENsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdFx0c3RhdGlvbiA9IHN0YXRpb25faW5kZXhbbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXN0LXN0YXRpb25cIikgfHwgXCJDZW50cmFsXCJdO1xuXHR9XG5cblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXN0LXN0YXRpb25cIiwgc3RhdGlvbltcIm5hbWVcIl0pO1xuXG5cdGNvbnN0IHN0YXRlX2NsYXNzZXMgPSBbXG5cdFx0XCItc3RhdGUtLXN0YXRpb25cIixcblx0XHRcIi1zdGF0ZS0tbG9hZGluZ1wiLFxuXHRcdFwiLXN0YXRlLS1jbG9zZWRcIixcblx0XHRcIi1zdGF0ZS0tcGVybWlzc2lvblwiXG5cdF07XG5cblx0Ly8gRGVzbGlnYSBpbnRlcnZhbG9zIGUgZXZlbnRvcyBleGlzdGVudGVzXG5cdGNsZWFySW50ZXJ2YWwoY3VlW1wiaW50ZXJ2YWwtZGVwYXJ0dXJlc1wiXSk7XG5cdGNsZWFySW50ZXJ2YWwoY3VlW1wiaW50ZXJ2YWwtbGFzdC11cGRhdGVkXCJdKTtcblx0JCh3aW5kb3cpLm9mZihcInZpc2liaWxpdHljaGFuZ2UuZGVwYXJ0dXJlcyBvbmxpbmUuZGVwYXJ0dXJlc1wiKTtcblxuXHQvLyBNb3N0cmEgYW5pbWHDp8OjbyBkZSBsb2FkXG5cdCRwYW5lbC5yZW1vdmVDbGFzcyhzdGF0ZV9jbGFzc2VzKS5hZGRDbGFzcyhcIi1zdGF0ZS0tbG9hZGluZ1wiKTtcblxuXHQvLyBDb2xvY2EgbyBub21lIGRhIGVzdGHDp8OjbyBubyBhcHBiYXJcblx0JG5hdmlnYXRpb25bXCJoZWFkZXJcIl1bXCJzdGF0aW9uLW5hbWVcIl0udGV4dChzdGF0aW9uW1wibmFtZVwiXSk7XG5cdCRwYW5lbFtcImhlYWRlclwiXVtcInRpdGxlXCJdLmVtcHR5KCk7XG5cblx0Ly8gRGVpeGEgYSBlc3Rhw6fDo28gc2VsZWNpb25hZGEgbmEgbGlzdGFcblx0JG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0uZmluZChcImFcIikucmVtb3ZlQ2xhc3MoXCItc3RhdGUtLXNlbGVjdGVkXCIpO1xuXHQkbmF2aWdhdGlvbltcImNvbnRlbnRcIl1bXCJzdGF0aW9uc1wiXS5maW5kKFwiYVtkYXRhLXN0YXRpb249J1wiICsgc3RhdGlvbltcIm5hbWVcIl0gKyBcIiddXCIpLmFkZENsYXNzKFwiLXN0YXRlLS1zZWxlY3RlZFwiKTtcblxuXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXHQvLyBBdHVhbGl6YcOnw6NvXG5cdGNvbnN0IGxhc3RVcGRhdGVkID0gKCkgPT4ge1xuXHRcdGxldCAkYmFkZ2UgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInN0YXR1cy1iYWRnZVwiKTtcblxuXHRcdC8vIFRlbXBvIGVtIHNlZ3VuZG9zIGRlc2RlIGEgw7psdGltYSBhdHVhbGl6YcOnw6NvXG5cdFx0bGV0IHNlY29uZHNfc2luY2VfdXBkYXRlID0gbW9tZW50KCkuZGlmZihkZXBhcnR1cmVzW1wibGFzdFVwZGF0ZWRcIl0sIFwic2Vjb25kc1wiKTtcblxuXHRcdC8vIFNlIHRpdmVyIHNpZG8gYXR1YWxpemFkbyBow6EgbWVub3MgZGUgNjAgc2VndW5kb3MsIG1vc3RyYSBUZW1wbyBSZWFsXG5cdFx0aWYgKHNlY29uZHNfc2luY2VfdXBkYXRlIDw9IDYwKSB7XG5cdFx0XHQkYmFkZ2UuYWRkQ2xhc3MoXCItc3RhdGUtLXJlYWwtdGltZVwiKS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wicmVhbC10aW1lXCJdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGxhc3RfdXBkYXRlZCA9IEwxMG5bbGFuZ3VhZ2VdW1widXBkYXRlZFwiXSArIFwiIFwiICsgbW9tZW50KGRlcGFydHVyZXNbXCJsYXN0VXBkYXRlZFwiXSkuZnJvbU5vdyh0cnVlKSArIFwiIFwiICsgTDEwbltsYW5ndWFnZV1bXCJhZ29cIl07XG5cdFx0XHQkYmFkZ2UudGV4dChsYXN0X3VwZGF0ZWQpO1xuXHRcdH1cblxuXHRcdCRwYW5lbFtcImhlYWRlclwiXVtcImJhZGdlXCJdLmVtcHR5KCkuYXBwZW5kKCRiYWRnZSk7XG5cdH07XG5cblxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0Ly8gQ29uc3VsdGEgZG9zIGRhZG9zXG5cdGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG5cdFx0Ly8gU8OzIGNhcnJlZ2Egc2UgZXN0aXZlciBlbSBmb2NvIGUgb25saW5lXG5cdFx0aWYgKGRvY3VtZW50LmhpZGRlbiA9PT0gdHJ1ZSB8fCBuYXZpZ2F0b3Iub25MaW5lID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIENhcnJlZ2Egb3MgZGFkb3Ncblx0XHQkLmdldEpTT04oXCJodHRwczovL3VzLWNlbnRyYWwxLXZsdGNhcmlvY2EuY2xvdWRmdW5jdGlvbnMubmV0L2RlcGFydHVyZXM/Y2FsbGJhY2s9P1wiLCB7XG5cdFx0XHRcInN0YXRpb25cIjogc3RhdGlvbltcImlkXCJdLFxuXHRcdFx0XCJlbnZcIjogZW52XG5cdFx0fSkuZG9uZSgocmVzcG9uc2UpID0+IHtcblx0XHRcdGRlcGFydHVyZXMgPSByZXNwb25zZTtcblxuXHRcdFx0bGV0IGV0YV9jb3VudCA9IDA7XG5cdFx0XHRsZXQgZGlyZWN0aW9ucyA9IFsgXTtcblx0XHRcdGxldCBkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbiA9IHsgfTtcblxuXHRcdFx0Ly8gT3JnYW5pemEgYXMgcGFydGlkYXMgcG9yIGRlc3Rpbm9cblx0XHRcdGRlcGFydHVyZXNbXCJsaW5lc1wiXS5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdFx0XHRcdGxpbmVbXCJkaXJlY3Rpb25zXCJdLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuXHRcdFx0XHRcdGxldCBkaXJlY3Rpb25fdGl0bGUgPSBkaXJlY3Rpb25bXCJuYW1lXCJdO1xuXHRcdFx0XHRcdGV0YV9jb3VudCArPSBkaXJlY3Rpb25bXCJldGFzXCJdLmxlbmd0aDtcblxuXHRcdFx0XHRcdGlmIChkaXJlY3Rpb25bXCJldGFzXCJdLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdGlmICghZGlyZWN0aW9ucy5pbmNsdWRlcyhkaXJlY3Rpb25fdGl0bGUpKSB7XG5cdFx0XHRcdFx0XHRcdGRpcmVjdGlvbnMucHVzaChkaXJlY3Rpb25fdGl0bGUpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoIWRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0pIHtcblx0XHRcdFx0XHRcdFx0ZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb25bZGlyZWN0aW9uX3RpdGxlXSA9IFsgXTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uW1wiZXRhc1wiXS5mb3JFYWNoKCh0cmFpbikgPT4ge1xuXHRcdFx0XHRcdFx0XHR0cmFpbltcImxpbmVcIl0gPSBsaW5lW1wibmFtZVwiXTtcblx0XHRcdFx0XHRcdFx0ZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb25bZGlyZWN0aW9uX3RpdGxlXS5wdXNoKHRyYWluKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gU2UgbsO6bWVybyBkZSBwcsOzeGltYXMgcGFydGlkYXMgZm9yIHplcm8sXG5cdFx0XHQvLyBjb25mZXJlIHNlIGFpbmRhIGVzdMOhIGRlbnRybyBkbyBob3LDoXJpbyBkZSBmdW5jaW9uYW1lbnRvXG5cdFx0XHRpZiAoZXRhX2NvdW50ID09PSAwICYmIGVudiA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcblx0XHRcdFx0bGV0IG5vdyA9IG1vbWVudCgpO1xuXHRcdFx0XHRsZXQgb3BlcmF0aW9uX3N0YXJ0X3RpbWUgPSBtb21lbnQoXCIwNjowMFwiLCBcIkhIOm1tXCIpO1xuXHRcdFx0XHRsZXQgb3BlcmF0aW9uX2VuZF90aW1lID0gbW9tZW50KFwiMDA6MDBcIiwgXCJISDptbVwiKTtcblxuXHRcdFx0XHRpZiAobm93LmlzQWZ0ZXIob3BlcmF0aW9uX2VuZF90aW1lKSAmJiBub3cuaXNCZWZvcmUob3BlcmF0aW9uX3N0YXJ0X3RpbWUpKSB7XG5cdFx0XHRcdFx0JHBhbmVsW1wiaGVhZGVyXCJdW1widGl0bGVcIl0udGV4dChMMTBuW2xhbmd1YWdlXVtcIm91dC1vZi1vcGVyYXRpb25cIl0pO1xuXG5cdFx0XHRcdFx0JHBhbmVsW1wiY29udGVudFwiXVtcImNsb3NlZFwiXS5lbXB0eSgpO1xuXHRcdFx0XHRcdCQoXCI8aDEgLz5cIikudGV4dChMMTBuW2xhbmd1YWdlXVtcIm91dC1vZi1vcGVyYXRpb25cIl0pLmFwcGVuZFRvKCRwYW5lbFtcImNvbnRlbnRcIl1bXCJjbG9zZWRcIl0pO1xuXHRcdFx0XHRcdCQoXCI8cCAvPlwiKS5odG1sKEwxMG5bbGFuZ3VhZ2VdW1wib3BlcmF0aW9uLWhvdXJzXCJdKS5hcHBlbmRUbygkcGFuZWxbXCJjb250ZW50XCJdW1wiY2xvc2VkXCJdKTtcblx0XHRcdFx0XHQkKFwiPGkgLz5cIikuYWRkQ2xhc3MoXCJtYXRlcmlhbC1pY29uc1wiKS50ZXh0KFwiYWNjZXNzX3RpbWVcIikuYXBwZW5kVG8oJHBhbmVsW1wiY29udGVudFwiXVtcImNsb3NlZFwiXSk7XG5cdFx0XHRcdFx0JHBhbmVsLnJlbW92ZUNsYXNzKHN0YXRlX2NsYXNzZXMpLmFkZENsYXNzKFwiLXN0YXRlLS1jbG9zZWRcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRwYW5lbFtcImhlYWRlclwiXVtcInRpdGxlXCJdLnRleHQoTDEwbltsYW5ndWFnZV1bXCJuZXh0LWRlcGFydHVyZXNcIl0pO1xuXG5cdFx0XHRcdC8vIE1vbnRhIGFzIHBhcnRpZGFzXG5cdFx0XHRcdGxldCAkZGVwYXJ0dXJlcyA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGVwYXJ0dXJlc1wiKTtcblxuXHRcdFx0XHRkaXJlY3Rpb25zLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuXHRcdFx0XHRcdGxldCAkZGlyZWN0aW9uID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJkaXJlY3Rpb25cIikuYXBwZW5kVG8oJGRlcGFydHVyZXMpO1xuXHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGlyZWN0aW9uLWNhcHRpb25cIikudGV4dChMMTBuW2xhbmd1YWdlXVtcImRpcmVjdGlvblwiXSkuYXBwZW5kVG8oJGRpcmVjdGlvbik7XG5cblx0XHRcdFx0XHRsZXQgZXRhcyA9IGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl07XG5cdFx0XHRcdFx0ZXRhcy5zb3J0KChhLCBiKSA9PiB7IHJldHVybiBhW1wic2Vjb25kc1wiXSAtIGJbXCJzZWNvbmRzXCJdIH0pO1xuXG5cdFx0XHRcdFx0ZXRhcy5mb3JFYWNoKCh0cmFpbikgPT4ge1xuXHRcdFx0XHRcdFx0bGV0ICR0cmFpbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW5cIikuYXBwZW5kVG8oJGRpcmVjdGlvbik7XG5cdFx0XHRcdFx0XHRsZXQgJGxpbmUgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInRyYWluLWxpbmVcIikuYXBwZW5kVG8oJHRyYWluKTtcblx0XHRcdFx0XHRcdGxldCBpc19hcHByb2FjaGluZyA9IHRyYWluW1wic2Vjb25kc1wiXSA8IDMwO1xuXG5cdFx0XHRcdFx0XHRsZXQgbGluZSA9IGxpbmVfaW5kZXhbdHJhaW5bXCJsaW5lXCJdXTtcblx0XHRcdFx0XHRcdGxldCBkZXBhcnR1cmVfY291bnRkb3duID0gKGlzX2FwcHJvYWNoaW5nPyBMMTBuW2xhbmd1YWdlXVtcIm5vd1wiXSA6IE1hdGgucm91bmQodHJhaW5bXCJzZWNvbmRzXCJdIC8gNjApICsgXCI8c3Bhbj5taW48L3NwYW4+XCIpO1xuXHRcdFx0XHRcdFx0bGV0IGRlcGFydHVyZV90aW1lID0gbW9tZW50KHRyYWluW1wiYXJyaXZhbFRpbWVcIl0pLmZvcm1hdChcIkhIOm1tXCIpO1xuXG5cdFx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImxpbmUtc2hpZWxkXCIpLmNzcyhcImNvbG9yXCIsIGxpbmVbXCJjb2xvclwiXSkuYXR0cihcInRpdGxlXCIsIEwxMG5bbGFuZ3VhZ2VdW1wibGluZVwiXSArIFwiIFwiICsgbGluZVtcImlkXCJdKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSkudGV4dChsaW5lW1wiaWRcIl0pLmFwcGVuZFRvKCRsaW5lKTtcblx0XHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW4tZGlyZWN0aW9uXCIpLmF0dHIoXCJ0aXRsZVwiLCBMMTBuW2xhbmd1YWdlXVtcInRyYWluXCJdICsgXCIgXCIgKyB0cmFpbltcInRyYWluXCJdKS50ZXh0KGRpcmVjdGlvbikuYXBwZW5kVG8oJHRyYWluKTtcblx0XHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW4tZXRhXCIpLmF0dHIoXCJ0aXRsZVwiLCBkZXBhcnR1cmVfdGltZSkuaHRtbChkZXBhcnR1cmVfY291bnRkb3duKS5hcHBlbmRUbygkdHJhaW4pO1xuXG5cdFx0XHRcdFx0XHRpZiAoaXNfYXBwcm9hY2hpbmcpIHtcblx0XHRcdFx0XHRcdFx0JHRyYWluLmFkZENsYXNzKFwiLXN0YXRlLS1hcHByb2FjaGluZ1wiKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bGFzdFVwZGF0ZWQoKTtcblxuXHRcdFx0XHQvLyBMaW1wYSBvIHBhaW5lbCBlIGluc2VyZSBvcyBub3ZvcyBkYWRvc1xuXHRcdFx0XHQkcGFuZWwucmVtb3ZlQ2xhc3Moc3RhdGVfY2xhc3NlcykuYWRkQ2xhc3MoXCItc3RhdGUtLXN0YXRpb25cIik7XG5cdFx0XHRcdCRwYW5lbFtcImNvbnRlbnRcIl1bXCJzdGF0aW9uXCJdLmVtcHR5KCkuYXBwZW5kKCRkZXBhcnR1cmVzKTtcblxuXHRcdFx0XHQvLyBBcyBwYXJhZGFzIFNldGUgZGUgU2V0ZW1icm8gZSBDb2xvbWJvIHPDo28gbXVpdG8gcHLDs3hpbWFzLCBlbnTDo28gw6kgY29tdW0gcXVlIGEgbG9jYWxpemHDp8Ojb1xuXHRcdFx0XHQvLyBkbyBHUFMgZG8gdXN1w6FyaW8gbGV2ZSDDoCBlc3Rhw6fDo28gZXJyYWRhLiBQb3IgaXNzbywgbmVzc2FzIHBhcmFkYXMsIMOpIG1vc3RyYWRvIHVtIGJvdMOjbyBwYXJhXG5cdFx0XHRcdC8vIGZhY2lsaXRhciBhIHRyb2NhIGRlIHBhcmFkYS4gTyBib3TDo28gc8OzIMOpIGV4aWJpZG8gcXVhbmRvIG8gdXN1w6FyaW8gdmVtIGRhIGxvY2FsaXphw6fDo29cblx0XHRcdFx0Ly8gYXV0b23DoXRpY2EgKG7Do28gbW9zdHJhIHNlIHBhcmFkYSBmb2kgZXNjb2xoaWRhIG5vIG1lbnUpXG5cdFx0XHRcdGlmIChmcm9tX2dwcyA9PT0gdHJ1ZSAmJiBbXCJzZXRlLWRlLXNldGVtYnJvXCIsIFwiY29sb21ib1wiXS5pbmNsdWRlcyhzdGF0aW9uW1wiaWRcIl0pKSB7XG5cdFx0XHRcdFx0bGV0IG9yaWdpbl9hbmRfZGVzdGluYXRpb24gPSB7XG5cdFx0XHRcdFx0XHRcInNldGUtZGUtc2V0ZW1icm9cIjoge1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJDb2xvbWJvXCIsXG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogXCJjb2xvbWJvXCJcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcImNvbG9tYm9cIjoge1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJTZXRlIGRlIFNldGVtYnJvXCIsXG5cdFx0XHRcdFx0XHRcdFwiaWRcIjogXCJzZXRlLWRlLXNldGVtYnJvXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0bGV0IGRlc3RpbmF0aW9uID0gb3JpZ2luX2FuZF9kZXN0aW5hdGlvbltzdGF0aW9uW1wiaWRcIl1dO1xuXG5cdFx0XHRcdFx0bGV0ICRzdWdnZXN0aW9uID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJzdWdnZXN0aW9uXCIpO1xuXHRcdFx0XHRcdGxldCAkYnV0dG9uID0gJChcIjxhIC8+XCIpLmFkZENsYXNzKFwiYnV0dG9uXCIpLmF0dHIoXCJocmVmXCIsIFwiI1wiKS5hcHBlbmRUbygkc3VnZ2VzdGlvbik7XG5cdFx0XHRcdFx0JChcIjxpIC8+XCIpLmFkZENsYXNzKFwibWF0ZXJpYWwtaWNvbnNcIikudGV4dChcIm5lYXJfbWVcIikuYXBwZW5kVG8oJGJ1dHRvbik7XG5cdFx0XHRcdFx0JChcIjxzcGFuIC8+XCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJhcmUteW91LWF0XCJdKS5hcHBlbmRUbygkYnV0dG9uKTtcblx0XHRcdFx0XHQkKFwiPHN0cm9uZyAvPlwiKS50ZXh0KGRlc3RpbmF0aW9uW1wibmFtZVwiXSArIFwiP1wiKS5hcHBlbmRUbygkYnV0dG9uKTtcblxuXHRcdFx0XHRcdCRidXR0b24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRuZXh0RGVwYXJ0dXJlcyhkZXN0aW5hdGlvbik7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQkcGFuZWxbXCJjb250ZW50XCJdW1wic3RhdGlvblwiXS5hcHBlbmQoJHN1Z2dlc3Rpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGN1ZVtcImxvYWQtZGVwYXJ0dXJlc1wiXS5yZXNvbHZlKCk7XG5cdFx0fSk7XG5cdH07XG5cblxuXHQvLyBBdHVhbGl6YcOnw6NvXG5cdGNvbnN0IHVwZGF0ZVdpbmRvdyA9ICgpID0+IHtcblx0XHRpZiAoZG9jdW1lbnQuaGlkZGVuID09PSBmYWxzZSAmJiBuYXZpZ2F0b3Iub25MaW5lID09PSB0cnVlKSB7XG5cdFx0XHRsYXN0VXBkYXRlZCgpO1xuXHRcdFx0Z2V0RGF0YSgpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBDcmlhIG5vdm9zIGludGVydmFsb3MgZSBldmVudG9zXG5cdCQod2luZG93KS5vbihcIm9ubGluZS5kZXBhcnR1cmVzIHZpc2liaWxpdHljaGFuZ2UuZGVwYXJ0dXJlc1wiLCB1cGRhdGVXaW5kb3cpO1xuXHRjdWVbXCJpbnRlcnZhbC1kZXBhcnR1cmVzXCJdID0gc2V0SW50ZXJ2YWwoZ2V0RGF0YSwgMTUwMDApO1xuXHRjdWVbXCJpbnRlcnZhbC1sYXN0LXVwZGF0ZWRcIl0gPSBzZXRJbnRlcnZhbChsYXN0VXBkYXRlZCwgNTAwMCk7XG5cblx0Z2V0RGF0YSgpO1xufTtcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gc3lzdGVtIHN0YXR1cyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBQZWdhIG8gZXN0YWRvIGRvIHNpc3RlbWFcclxuY29uc3Qgc3lzdGVtU3RhdHVzID0gKCgpID0+IHtcclxuICAgIGN1ZVtcImxvYWQtZG9jdW1lbnRcIl0uZG9uZSgoKSA9PiB7XHJcbiAgICAgICAgY3VlW1wiaW50ZXJ2YWwtc3lzdGVtLXN0YXR1c1wiXSA9IHNldEludGVydmFsKGdldFN0YXR1cywgNjAgKiAxMDAwKTtcclxuICAgICAgICBnZXRTdGF0dXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBsYXN0X3N0YXR1cztcclxuXHJcbiAgICBjb25zdCBzdGF0ZV9jbGFzc2VzID0gW1xyXG4gICAgICAgIFwiLXN0YXRlLS1va1wiLFxyXG4gICAgICAgIFwiLXN0YXRlLS13YXJuaW5nXCJcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIFPDsyBjYXJyZWdhIHNlIGVzdGl2ZXIgZW0gZm9jbyBlIG9ubGluZVxyXG4gICAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4gPT09IHRydWUgfHwgbmF2aWdhdG9yLm9uTGluZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJC5nZXRKU09OKFwiaHR0cHM6Ly91cy1jZW50cmFsMS12bHRjYXJpb2NhLmNsb3VkZnVuY3Rpb25zLm5ldC9zdGF0dXM/Y2FsbGJhY2s9P1wiLCB7XHJcbiAgICAgICAgICAgIFwiZW52XCI6IGVudlxyXG4gICAgICAgIH0pLmRvbmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGN1ZVtcImxvYWQtZGVwYXJ0dXJlc1wiXS5kb25lKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5yZW1vdmVDbGFzcyhzdGF0ZV9jbGFzc2VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJzdGF0dXNcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VbXCJzdGF0dXNcIl0gPT09IFwiTm9ybWFsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdLmFkZENsYXNzKFwiLXN0YXRlLS1va1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0X3N0YXR1cyAhPT0gXCJOb3JtYWxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1wiaWNvblwiXS50ZXh0KFwiY2hlY2tfY2lyY2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1widGV4dFwiXS50ZXh0KEwxMG5bbGFuZ3VhZ2VdW1wic3RhdHVzLW9rXCJdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZV9oZWlnaHQgPSAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJ0ZXh0XCJdLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0uaGVpZ2h0KG1lc3NhZ2VfaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0ucmVtb3ZlQ2xhc3MoXCItbW9kZS0tY29sbGFwc2VkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5jc3MoXCJoZWlnaHRcIiwgXCJcIikuYWRkQ2xhc3MoXCItbW9kZS0tY29sbGFwc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdLmFkZENsYXNzKFwiLXN0YXRlLS13YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJpY29uXCJdLnRleHQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1widGV4dFwiXS50ZXh0KHJlc3BvbnNlW1wibWVzc2FnZVwiXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZV9oZWlnaHQgPSAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl1bXCJ0ZXh0XCJdLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXS5oZWlnaHQobWVzc2FnZV9oZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3Rfc3RhdHVzID0gcmVzcG9uc2VbXCJzdGF0dXNcIl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkKHdpbmRvdykub24oXCJ2aXNpYmlsaXR5Y2hhbmdlLnN5c3RlbVN0YXR1c1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbGFzdF9zdGF0dXMgPSBudWxsO1xyXG4gICAgICAgIGdldFN0YXR1cygpO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIHN0YXRpb24gbGlzdCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3Qgc3RhdGlvbkxpc3QgPSAoKSA9PiB7XG5cdCRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdW1wicGxhY2Vob2xkZXJcIl0udGV4dChMMTBuW2xhbmd1YWdlXVtcInN0YXRpb25zXCJdKTtcblxuXHQvLyBCb3TDo28gcGFyYSBsb2NhbGl6YXIgZXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcblx0bGV0ICRuZWFyZXN0ID0gJChcIjxhIC8+XCIpLmF0dHIoXCJocmVmXCIsIFwiI1wiKS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0JChcIi5zdGF0aW9ucyBoMSAuc3RhdGlvbi1uYW1lXCIpLnRleHQoXCJcIik7XG5cdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRnZXRMb2NhdGlvbigpO1xuXHR9KS5hcHBlbmRUbygkbmF2aWdhdGlvbltcImNvbnRlbnRcIl1bXCJzdGF0aW9uc1wiXSk7XG5cdCQoXCI8aSAvPlwiKS5hZGRDbGFzcyhcIm1hdGVyaWFsLWljb25zXCIpLnRleHQoXCJuZWFyX21lXCIpLmFwcGVuZFRvKCRuZWFyZXN0KTtcblx0JChcIjxzcGFuIC8+XCIpLnRleHQoTDEwbltsYW5ndWFnZV1bXCJmaW5kLW5lYXJlc3Qtc3RhdGlvblwiXSkuYXBwZW5kVG8oJG5lYXJlc3QpO1xuXG5cdCQoXCI8bGkgLz5cIikuYWRkQ2xhc3MoXCJuZWFyZXN0LXN0YXRpb25cIikuYXBwZW5kKCRuZWFyZXN0KS5hcHBlbmRUbygkbmF2aWdhdGlvbltcImNvbnRlbnRcIl1bXCJzdGF0aW9uc1wiXSk7XG5cblx0Ly8gTW9udGEgbGlzdGEgZGUgZXN0YcOnw7Vlc1xuXHRzdGF0aW9ucy5mb3JFYWNoKChzdGF0aW9uKSA9PiB7XG5cdFx0bGV0ICRzdGF0aW9uID0gJChcIjxhIC8+XCIpLmF0dHIoXCJocmVmXCIsIFwiI1wiICsgc3RhdGlvbltcImlkXCJdKS5hdHRyKFwiZGF0YS1zdGF0aW9uXCIsIHN0YXRpb25bXCJuYW1lXCJdKTtcblxuXHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdGlvbi1uYW1lXCIpLnRleHQoc3RhdGlvbltcIm5hbWVcIl0pLmFwcGVuZFRvKCRzdGF0aW9uKTtcblxuXHRcdGxldCAkbGluZXMgPSAkKFwiPHVsIC8+XCIpLmFkZENsYXNzKFwic3RhdGlvbi1saW5lc1wiKS5hcHBlbmRUbygkc3RhdGlvbik7XG5cdFx0bGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuXHRcdFx0bGV0ICRsaW5lID0gJChcIjxsaSAvPlwiKS5hcHBlbmRUbygkbGluZXMpO1xuXHRcdFx0aWYgKHN0YXRpb25bXCJsaW5lc1wiXS5pbmNsdWRlcyhsaW5lW1wiaWRcIl0pKSB7XG5cdFx0XHRcdGxldCAkc2hpZWxkID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJsaW5lLXNoaWVsZFwiKS5jc3MoXCJjb2xvclwiLCBsaW5lW1wiY29sb3JcIl0pLnRleHQobGluZVtcImlkXCJdKS5hcHBlbmRUbygkbGluZSk7XG5cblx0XHRcdFx0aWYgKGxpbmVbXCJkaXNhYmxlZFwiXSkge1xuXHRcdFx0XHRcdCRzaGllbGQuYXR0cihcImRpc2FibGVkXCIsIHRydWUpLmFkZENsYXNzKFwiLXN0YXRlLS1kaXNhYmxlZFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKCFzdGF0aW9uW1wiZGlzYWJsZWRcIl0pIHtcblx0XHRcdCRzdGF0aW9uLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdG5leHREZXBhcnR1cmVzKHN0YXRpb24pO1xuXHRcdFx0XHQkYm9keS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRzdGF0aW9uLmFkZENsYXNzKFwiLXN0YXRlLS1kaXNhYmxlZFwiKTtcblx0XHRcdCRzdGF0aW9uLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQkKFwiPGxpIC8+XCIpLmFwcGVuZCgkc3RhdGlvbikuYXBwZW5kVG8oJG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0pO1xuXHR9KTtcblxuXHQvLyBBc3NvY2lhIG8gZXZlbnRvIGRlIGNsaWNrIHBhcmEgYWJyaXIgb3UgZmVjaGFyIGEgbGlzdGFcblx0JG5hdmlnYXRpb25bXCJoZWFkZXJcIl0ub24oXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0JGJvZHkudG9nZ2xlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0fSk7XG5cblx0JHBhbmVsW1wiaGVhZGVyXCJdLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGlmICgkYm9keS5oYXNDbGFzcyhcIi1tb2RlLS1saXN0XCIpKSB7XG5cdFx0XHQkYm9keS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gU2Nyb2xsIGRlbnRybyBkYSBsaXN0YVxuXHQkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgKGV2ZW50KSA9PiB7XG5cdFx0bGV0IHNjcm9sbF90b3BfcG9zaXRpb24gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cblx0XHRpZiAoc2Nyb2xsX3RvcF9wb3NpdGlvbiA+PSAxMikge1xuXHRcdFx0JGJvZHkuYWRkQ2xhc3MoXCItbW9kZS0tc2Nyb2xsXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkYm9keS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1zY3JvbGxcIik7XG5cdFx0fVxuXHR9KTtcbn07XG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIHRoZW1lIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuY29uc3QgdGhlbWUgPSAoKCkgPT4ge1xyXG4gICAgbGV0IHRoZW1lX29yZGVyID0gW1xyXG4gICAgICAgIFwiYXV0b1wiLFxyXG4gICAgICAgIFwibGlnaHRcIixcclxuICAgICAgICBcImRhcmtcIlxyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgdGhlbWVfc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgXCJhdXRvXCI6IHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBMMTBuW2xhbmd1YWdlXVtcImF1dG8tdGhlbWVcIl0sXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImJyaWdodG5lc3NfYXV0b1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImxpZ2h0XCI6IHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBMMTBuW2xhbmd1YWdlXVtcImxpZ2h0LXRoZW1lXCJdLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJicmlnaHRuZXNzXzVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkYXJrXCI6IHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBMMTBuW2xhbmd1YWdlXVtcImRhcmstdGhlbWVcIl0sXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImJyaWdodG5lc3NfNFwiXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHNldCA9IChuZXdfdGhlbWUsIG9sZF90aGVtZSA9IFwiXCIpID0+IHtcclxuICAgICAgICBjdXJyZW50X3RoZW1lID0gbmV3X3RoZW1lO1xyXG5cclxuICAgICAgICAkKFwiLnNldHRpbmdzIC50aGVtZSBzcGFuXCIpLnRleHQodGhlbWVfc2V0dGluZ3NbbmV3X3RoZW1lXVtcInRpdGxlXCJdKTtcclxuICAgICAgICAkKFwiLnNldHRpbmdzIC50aGVtZSBpXCIpLnRleHQodGhlbWVfc2V0dGluZ3NbbmV3X3RoZW1lXVtcImljb25cIl0pO1xyXG5cclxuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi10aGVtZS0tXCIgKyBvbGRfdGhlbWUpLmFkZENsYXNzKFwiLXRoZW1lLS1cIiArIG5ld190aGVtZSk7XHJcblxyXG4gICAgICAgIC8vIFNhbHZhIGNvbmZpZ3VyYcOnw6NvIG5vIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIGlmIChuZXdfdGhlbWUgPT09IFwiYXV0b1wiKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidGhlbWVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBuZXdfdGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gQ29uZmVyZSBzZSBqw6EgaMOhIHRlbWEgc2Fsdm8gbm8gbG9jYWxTdG9yYWdlLlxyXG4gICAgLy8gU2UgbsOjbyBob3V2ZXIsIHBlZ2EgbyBwYWRyw6NvIGRvIHNpc3RlbWFcclxuICAgIC8vIGxldCBjdXJyZW50X3RoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSB8fCBnZXRDb21wdXRlZFN0eWxlKCQoXCIuc2V0dGluZ3MgLmN1cnJlbnQtdGhlbWVcIilbMF0pLmdldFByb3BlcnR5VmFsdWUoXCJjb250ZW50XCIpLnJlcGxhY2UoL1wiL2csIFwiXCIpO1xyXG4gICAgbGV0IGN1cnJlbnRfdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIHx8IFwiYXV0b1wiO1xyXG5cclxuICAgIGlmIChjdXJyZW50X3RoZW1lKSB7XHJcbiAgICAgICAgc2V0KGN1cnJlbnRfdGhlbWUpO1xyXG4gICAgfVxyXG5cclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50X3RoZW1lKSB7XHJcbiAgICAgICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lIHNwYW5cIikudGV4dChMMTBuW2xhbmd1YWdlXVtcImF1dG8tdGhlbWVcIl0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWVcIikub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlc2NvYnJlIGEgcG9zacOnw6NvIGRvIHRlbWEgbmEgb3JkZW1cclxuICAgICAgICAgICAgbGV0IHRoZW1lX3Bvc2l0aW9uID0gdGhlbWVfb3JkZXIuaW5kZXhPZihjdXJyZW50X3RoZW1lKTtcclxuICAgICAgICAgICAgbGV0IG5ld190aGVtZSA9IHRoZW1lX29yZGVyW3RoZW1lX3Bvc2l0aW9uICsgMV0gfHwgdGhlbWVfb3JkZXJbMF07XHJcblxyXG4gICAgICAgICAgICAvLyBTZXRhIG8gbm92byB0ZW1hXHJcbiAgICAgICAgICAgIHNldChuZXdfdGhlbWUsIGN1cnJlbnRfdGhlbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufSkoKTtcclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gc3RhcnQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4kKGZ1bmN0aW9uKCkge1xuXHQkYm9keSA9ICQoXCJib2R5XCIpO1xuXG5cdCRuYXZpZ2F0aW9uID0gJChcIi5uYXZpZ2F0aW9uXCIpO1xuXHQkbmF2aWdhdGlvbltcImhlYWRlclwiXSA9ICQoXCIubmF2aWdhdGlvbi1oZWFkZXJcIiwgJG5hdmlnYXRpb24pO1xuXHQkbmF2aWdhdGlvbltcImhlYWRlclwiXVtcInN0YXRpb24tbmFtZVwiXSA9ICQoXCIuc3RhdGlvbi1uYW1lXCIsICRuYXZpZ2F0aW9uW1wiaGVhZGVyXCJdKTtcblx0JG5hdmlnYXRpb25bXCJoZWFkZXJcIl1bXCJwbGFjZWhvbGRlclwiXSA9ICQoXCIucGxhY2Vob2xkZXJcIiwgJG5hdmlnYXRpb25bXCJoZWFkZXJcIl0pO1xuXHQkbmF2aWdhdGlvbltcImNvbnRlbnRcIl0gPSAkKFwiLm5hdmlnYXRpb24tY29udGVudFwiLCAkbmF2aWdhdGlvbik7XG5cdCRuYXZpZ2F0aW9uW1wiY29udGVudFwiXVtcInN0YXRpb25zXCJdID0gJChcIi5zdGF0aW9uc1wiLCAkbmF2aWdhdGlvbltcImNvbnRlbnRcIl0pO1xuXG5cdCRwYW5lbCA9ICQoXCIucGFuZWxcIik7XG5cdCRwYW5lbFtcImhlYWRlclwiXSA9ICQoXCIucGFuZWwtaGVhZGVyXCIsICRwYW5lbCk7XG5cdCRwYW5lbFtcImhlYWRlclwiXVtcInRpdGxlXCJdID0gJChcIi50aXRsZVwiLCAkcGFuZWxbXCJoZWFkZXJcIl0pO1xuXHQkcGFuZWxbXCJoZWFkZXJcIl1bXCJiYWRnZVwiXSA9ICQoXCIuYmFkZ2VcIiwgJHBhbmVsW1wiaGVhZGVyXCJdKTtcblx0JHBhbmVsW1wiY29udGVudFwiXSA9ICQoXCIucGFuZWwtY29udGVudFwiLCAkcGFuZWwpO1xuXHQkcGFuZWxbXCJjb250ZW50XCJdW1wic3RhdGlvblwiXSA9ICQoXCIuc3RhdGlvblwiLCAkcGFuZWxbXCJjb250ZW50XCJdKTtcblx0JHBhbmVsW1wiY29udGVudFwiXVtcImNsb3NlZFwiXSA9ICQoXCIuY2xvc2VkXCIsICRwYW5lbFtcImNvbnRlbnRcIl0pO1xuXHQkcGFuZWxbXCJjb250ZW50XCJdW1wicGVybWlzc2lvblwiXSA9ICQoXCIucGVybWlzc2lvblwiLCAkcGFuZWxbXCJjb250ZW50XCJdKTtcblx0JHBhbmVsW1wiY29udGVudFwiXVtcImxvYWRpbmdcIl0gPSAkKFwiLmxvYWRpbmdcIiwgJHBhbmVsW1wiY29udGVudFwiXSk7XG5cdCRwYW5lbFtcImZvb3RlclwiXSA9ICQoXCIucGFuZWwtZm9vdGVyXCIsICRwYW5lbCk7XG5cdCRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXSA9ICQoXCIuc3RhdHVzXCIsICRwYW5lbFtcImZvb3RlclwiXSk7XG5cdCRwYW5lbFtcImZvb3RlclwiXVtcInN0YXR1c1wiXVtcImljb25cIl0gPSAkKFwiLmljb25cIiwgJHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdKTtcblx0JHBhbmVsW1wiZm9vdGVyXCJdW1wic3RhdHVzXCJdW1widGV4dFwiXSA9ICQoXCIudGV4dFwiLCAkcGFuZWxbXCJmb290ZXJcIl1bXCJzdGF0dXNcIl0pO1xuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdID0gJChcIi5uZXR3b3JrXCIsICRwYW5lbFtcImZvb3RlclwiXSk7XG5cblx0Y3VlW1wibG9hZC1kb2N1bWVudFwiXS5yZXNvbHZlKCk7XG5cblx0Ly8gVHVkbyBjb21lw6dhIGFxdWkhXG5cdHN0YXRpb25MaXN0KCk7XG5cblx0Ly8gQ29uZmVyZSBzZSB1c3XDoXJpbyBqw6EgaGF2aWEgaGFiaWxpdGFkbyBnZW9sb2NhbGl6YcOnw6NvIGFudGVzXG5cdGlmIChcImdlb2xvY2F0aW9uXCIgaW4gbmF2aWdhdG9yKSB7XG5cdFx0JHBhbmVsW1wiY29udGVudFwiXVtcInBlcm1pc3Npb25cIl0uZmluZChcInNwYW5cIikudGV4dChMMTBuW2xhbmd1YWdlXVtcImZpbmQtbmVhcmVzdC1zdGF0aW9uXCJdKTtcblxuXHRcdGlmIChcInBlcm1pc3Npb25zXCIgaW4gbmF2aWdhdG9yKSB7XG5cdFx0XHRuYXZpZ2F0b3IucGVybWlzc2lvbnMucXVlcnkoeyBcIm5hbWVcIjogXCJnZW9sb2NhdGlvblwiIH0pLnRoZW4oKHBlcm1pc3Npb24pID0+IHtcblx0XHRcdFx0aWYgKHBlcm1pc3Npb25bXCJzdGF0ZVwiXSA9PT0gXCJncmFudGVkXCIpIHtcblx0XHRcdFx0XHQvLyBTZSBqw6EgdGl2ZXIsIHBlZ2EgYSBsb2NhbGl6YcOnw6NvIGF0dWFsIGUgcHJvY3VyYSBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYVxuXHRcdFx0XHRcdGdldExvY2F0aW9uKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAocGVybWlzc2lvbltcInN0YXRlXCJdID09PSBcImRlbmllZFwiKSB7XG5cdFx0XHRcdFx0Ly8gU2UgbsOjbyBmb2kgZGF0YSBwZXJtaXNzw6NvLCBhYnJlIGEgbGlzdGEgZGUgZXN0YcOnw7Vlc1xuXHRcdFx0XHRcdG5leHREZXBhcnR1cmVzKCk7XG5cdFx0XHRcdFx0JG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0uZmluZChcIi5uZWFyZXN0LXN0YXRpb25cIikuaGlkZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIFNlIG7Do28gdGl2ZXIsIG1vc3RyYSBib3TDo28gcGFyYSBzb2xpY2l0YXIgYXV0b3JpemHDp8Ojb1xuXHRcdFx0XHRcdCQoXCJib2R5XCIpLmFkZENsYXNzKFwiLW1vZGUtLWluaXRpYWxcIik7XG5cdFx0XHRcdFx0JHBhbmVsLmFkZENsYXNzKFwiLXN0YXRlLS1wZXJtaXNzaW9uXCIpO1xuXG5cdFx0XHRcdFx0JChcIi5idXR0b25cIiwgJHBhbmVsW1wiY29udGVudFwiXVtcInBlcm1pc3Npb25cIl0pLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0Z2V0TG9jYXRpb24odHJ1ZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRnZXRMb2NhdGlvbigpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBTZSBuw6NvIGhvdXZlciBnZW9sb2NhbGl6YcOnw6NvLCBhYnJlIGEgbGlzdGEgZGUgZXN0YcOnw7Vlc1xuXHRcdG5leHREZXBhcnR1cmVzKCk7XG5cdFx0JG5hdmlnYXRpb25bXCJjb250ZW50XCJdW1wic3RhdGlvbnNcIl0uZmluZChcIi5uZWFyZXN0LXN0YXRpb25cIikuaGlkZSgpO1xuXHR9XG59KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gU2VydmljZSBXb3JrZXJcbmlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcblx0XHRjdWVbXCJzZXJ2aWNlLXdvcmtlclwiXSA9IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFwiL3NlcnZpY2Utd29ya2VyLmpzXCIpO1xuXG5cdFx0Y3VlW1wic2VydmljZS13b3JrZXJcIl0udGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIVwiLCByZWdpc3RyYXRpb24pO1xuXHRcdH0sIChlcnJvcikgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiBcIiwgZXJyb3IpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRXN0YWRvIGRhIGNvbmV4w6NvXG4kKGZ1bmN0aW9uKCkge1xuXHQkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdLnRleHQoTDEwbltsYW5ndWFnZV1bXCJvZmZsaW5lXCJdKTtcbn0pO1xuXG5jb25zdCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzID0gKCkgPT4ge1xuXHRsZXQgY29ubmVjdGVkID0gbmF2aWdhdG9yLm9uTGluZTtcblxuXHRpZiAoY29ubmVjdGVkID09PSB0cnVlKSB7XG5cdFx0JHBhbmVsW1wiZm9vdGVyXCJdW1wibmV0d29ya1wiXS5yZW1vdmVDbGFzcyhcIi1zdGF0ZS0tb2ZmbGluZVwiKTtcblx0fSBlbHNlIHtcblx0XHQkcGFuZWxbXCJmb290ZXJcIl1bXCJuZXR3b3JrXCJdLmFkZENsYXNzKFwiLXN0YXRlLS1vZmZsaW5lXCIpO1xuXHR9XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzKTtcbiJdfQ==