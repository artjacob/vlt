"use strict";

var cue = [];
var $panel, $station, $permission, $network, $status;
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
}; // Próximas partidas


var nextDepartures = function nextDepartures(station) {
  var from_gps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var departures; // Desliga intervalos e eventos existentes

  clearInterval(cue["interval-departures"]);
  clearInterval(cue["interval-last-updated"]);
  $(window).off("visibilitychange online"); // Coloca o nome da estação no appbar

  $(".stations h1 .station-name").text(station["name"]); // Mostra animação de load

  $panel.addClass("-state--loading"); ////////////////////////////////////////////////////////////////////////////////////////////////
  // Atualização

  var lastUpdated = function lastUpdated() {
    var $badge = $("<div />").addClass("status-badge");
    var connected = navigator.onLine; // Tempo em segundos desde a última atualização

    var seconds_since_update = moment().diff(departures["lastUpdated"], "seconds"); // Se tiver sido atualizado há menos de 60 segundos, mostra Tempo Real

    if (seconds_since_update <= 60) {
      $badge.addClass("-state--real-time").text("Tempo real");
    } else {
      var last_updated = "Atualizado " + moment(departures["lastUpdated"]).fromNow(true) + " atrás";
      $badge.text(last_updated);
    }

    $status.empty().append($badge);
  }; ////////////////////////////////////////////////////////////////////////////////////////////////
  // Consulta dos dados


  var getData = function getData() {
    // Só carrega se estiver com foco
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
          $panel.addClass("-state--closed");
        }
      } else {
        // Monta as partidas
        var $departures = $("<div />").addClass("departures");
        var $title = $("<div />").addClass("departures-title").on("click", function () {
          $("body").removeClass("-mode--list");
        }).appendTo($departures);
        $("<span />").text("Próximos trens").appendTo($title); // Texto para compartilhamento

        var share_text = ["Próximos trens", "🚉 *" + station["name"] + "*", ""]; // directions.sort();

        directions.forEach(function (direction) {
          var $direction = $("<div />").addClass("direction").appendTo($departures);
          $("<div />").addClass("direction-caption").text("Destino").appendTo($direction);
          var etas = departures_by_direction[direction];
          etas.sort(function (a, b) {
            return a["seconds"] - b["seconds"];
          });
          etas.forEach(function (train) {
            var $train = $("<div />").addClass("train").appendTo($direction);
            var $line = $("<div />").addClass("train-line").appendTo($train);
            var is_approaching = train["seconds"] < 30;
            var line = line_index[train["line"]];
            var departure_countdown = is_approaching ? "Agora" : Math.round(train["seconds"] / 60) + "<span>min</span>";
            var departure_time = moment(train["arrivalTime"]).format("HH:mm");
            $("<div />").addClass("line-shield").css("color", line["color"]).attr("title", "Linha " + line["id"]).attr("disabled", true).text(line["id"]).appendTo($line);
            $("<div />").addClass("train-direction").attr("title", "Trem " + train["train"]).text(direction).appendTo($train);
            $("<div />").addClass("train-eta").attr("title", departure_time).html(departure_countdown).appendTo($train);

            if (is_approaching) {
              $train.addClass("-state--approaching");
            } // Texto para compartilhamento


            share_text.push("L" + line["id"] + " " + direction + " " + departure_time);
          });
        }); // Estado da conexão e hora da última atualização

        $status = $("<div />").addClass("status").appendTo($title); // $connection_status = $("<div />").addClass("connection-status").appendTo($status);
        // $last_updated = $("<div />").addClass("last-updated").appendTo($status);

        lastUpdated(); // Limpa o painel e insere os novos dados

        $panel.removeClass("-state--closed");
        $station.empty().append($departures); // Compartilhar
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

      $panel.removeClass("-state--loading"); // As paradas Sete de Setembro e Colombo são muito próximas, então é comum que a localização
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
        var $change = $("<div />").addClass("change-station").appendTo($station);
        var $button = $("<a />").addClass("button").attr("href", "#").appendTo($change);
        $("<i />").addClass("material-icons").text("near_me").appendTo($button);
        $("<span />").text("Está em").appendTo($button);
        $("<strong />").text(destination["name"] + "?").appendTo($button);
        $button.on("click", function (event) {
          event.preventDefault();
          nextDepartures(destination);
        });
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


  $(window).on("online visibilitychange", updateWindow);

  if (env === "production") {
    cue["interval-departures"] = setInterval(getData, 15000);
    cue["interval-last-updated"] = setInterval(lastUpdated, 5000);
  }

  getData();
};

$(function () {
  // Monta lista de paradas e estações
  var $stations = $(".stations ul");
  var $nearest = $("<a />").attr("href", "#").on("click", function (event) {
    event.preventDefault();
    $(".stations h1 .station-name").text("");
    $("body").removeClass("-mode--list");
    getLocation();
  }).appendTo($stations);
  $("<i />").addClass("material-icons").text("near_me").appendTo($nearest);
  $("<span />").text("Localizar estação mais próxima").appendTo($nearest);
  $("<li />").addClass("nearest-station").append($nearest).appendTo($stations);
  stations.forEach(function (station) {
    var $station = $("<a />").attr("href", "#" + station["id"]);
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
        $("body").removeClass("-mode--list");
      });
    } else {
      $station.on("click", function (event) {
        event.preventDefault(); // $("body").removeClass("-mode--list");
      });
      $station.addClass("-state--disabled");
    }

    $("<li />").append($station).appendTo($stations);
  }); // Navegação

  $(".appbar").on("click", function () {
    $("body").toggleClass("-mode--list");
  });
  $(window).on("scroll", function (event) {
    var scroll_top_position = $(window).scrollTop();

    if (scroll_top_position >= 12) {
      $("body").addClass("-mode--scroll");
    } else {
      $("body").removeClass("-mode--scroll");
    }
  });
}); ////////////////////////////////////////////////////////////////////////////////////////////////////
// theme ///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

var Theme = function () {
  var theme_order = ["auto", "light", "dark"];
  var theme_settings = {
    "auto": {
      "title": "Tema automático",
      "icon": "brightness_auto"
    },
    "light": {
      "title": "Tema claro",
      "icon": "brightness_5"
    },
    "dark": {
      "title": "Tema escuro",
      "icon": "brightness_4"
    }
  };

  var set = function set(new_theme, old_theme) {
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


  var current_theme = localStorage.getItem("theme") || getComputedStyle($(".settings .current-theme")[0]).getPropertyValue("content").replace(/"/g, "");

  if (current_theme) {
    set(current_theme, "");
  }

  $(function () {
    $(".settings .theme").on("click", function (event) {
      event.preventDefault(); // Descobre a posição do tema na ordem

      var theme_position = theme_order.indexOf(current_theme);
      var new_theme = theme_order[theme_position + 1] || theme_order[0]; // Seta o novo tema

      set(new_theme, current_theme);
    });
  });
}();

$(function () {
  $panel = $(".panel");
  $station = $(".station", $panel);
  $permission = $(".permission", $panel);
  $network = $(".network", $panel); // Confere se usuário já havia habilitado geolocalização antes

  if ("geolocation" in navigator) {
    if ("permissions" in navigator) {
      navigator.permissions.query({
        "name": "geolocation"
      }).then(function (permission) {
        if (permission["state"] === "granted") {
          // Se já tiver, pega a localização atual e procura estação mais próxima
          getLocation();
        } else {
          // Se não tiver, mostra botão para solicitar autorização
          $("body").addClass("-mode--initial");
          $panel.addClass("-state--permission");
          $(".button", $permission).on("click", function (event) {
            event.preventDefault();
            getLocation(true);
          });
        }
      });
    } else {
      getLocation();
    }
  }
}); // Service Worker

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    cue["service-worker"] = navigator.serviceWorker.register("/service-worker.js");
    cue["service-worker"].then(function (registration) {// console.log("Service Worker registration successful!", registration);
    }, function (error) {// console.log("Service Worker registration failed: ", error);
    });
  });
} // Estado da conexão


var updateConnectionStatus = function updateConnectionStatus() {
  var connected = navigator.onLine;

  if (connected === true) {
    $network.removeClass("-state--offline");
  } else {
    $network.addClass("-state--offline");
  }
}; // $(window).on("online offline", updateConnectionStatus);


window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiLCJzdGF0aW9uLWluZm8uanMiLCJsaW5lLWluZm8uanMiLCJnZXQtbG9jYXRpb24uanMiLCJuZWFyZXN0LXN0YXRpb24uanMiLCJuZXh0LWRlcGFydHVyZXMuanMiLCJzdGF0aW9uLWxpc3QuanMiLCJ0aGVtZS5qcyIsInN0YXJ0LmpzIl0sIm5hbWVzIjpbImN1ZSIsIiRwYW5lbCIsIiRzdGF0aW9uIiwiJHBlcm1pc3Npb24iLCIkbmV0d29yayIsIiRzdGF0dXMiLCJzdGF0aW9ucyIsInN0YXRpb25faW5kZXgiLCJmb3JFYWNoIiwic3RhdGlvbiIsInN0YXRpb25fbmFtZSIsImxpbmVzIiwibGluZV9pbmRleCIsImxpbmUiLCJsaW5lX25hbWUiLCJnZXRMb2NhdGlvbiIsImlzX2luaXRpYWwiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwiJCIsInJlbW92ZUNsYXNzIiwibmVhcmVzdF9zdGF0aW9uIiwibmVhcmVzdFN0YXRpb24iLCJuZXh0RGVwYXJ0dXJlcyIsImRlZzJyYWQiLCJkZWciLCJNYXRoIiwiUEkiLCJ1c2VyX2Nvb3JkaW5hdGVzIiwidXNlcl9sYXRpdHVkZSIsInVzZXJfbG9uZ2l0dWRlIiwiUiIsInNob3J0ZXN0X2Rpc3RhbmNlIiwic3RhdGlvbl9sYXRpdHVkZSIsInN0YXRpb25fbG9uZ2l0dWRlIiwieCIsImNvcyIsInkiLCJkaXN0YW5jZSIsInNxcnQiLCJmcm9tX2dwcyIsImRlcGFydHVyZXMiLCJjbGVhckludGVydmFsIiwid2luZG93Iiwib2ZmIiwidGV4dCIsImFkZENsYXNzIiwibGFzdFVwZGF0ZWQiLCIkYmFkZ2UiLCJjb25uZWN0ZWQiLCJvbkxpbmUiLCJzZWNvbmRzX3NpbmNlX3VwZGF0ZSIsIm1vbWVudCIsImRpZmYiLCJsYXN0X3VwZGF0ZWQiLCJmcm9tTm93IiwiZW1wdHkiLCJhcHBlbmQiLCJnZXREYXRhIiwiZG9jdW1lbnQiLCJoaWRkZW4iLCJnZXRKU09OIiwiZG9uZSIsInJlc3BvbnNlIiwiZXRhX2NvdW50IiwiZGlyZWN0aW9ucyIsImRlcGFydHVyZXNfYnlfZGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwiZGlyZWN0aW9uX3RpdGxlIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJwdXNoIiwidHJhaW4iLCJlbnYiLCJub3ciLCJvcGVyYXRpb25fc3RhcnRfdGltZSIsIm9wZXJhdGlvbl9lbmRfdGltZSIsImlzQWZ0ZXIiLCJpc0JlZm9yZSIsIiRkZXBhcnR1cmVzIiwiJHRpdGxlIiwib24iLCJhcHBlbmRUbyIsInNoYXJlX3RleHQiLCIkZGlyZWN0aW9uIiwiZXRhcyIsInNvcnQiLCJhIiwiYiIsIiR0cmFpbiIsIiRsaW5lIiwiaXNfYXBwcm9hY2hpbmciLCJkZXBhcnR1cmVfY291bnRkb3duIiwicm91bmQiLCJkZXBhcnR1cmVfdGltZSIsImZvcm1hdCIsImNzcyIsImF0dHIiLCJodG1sIiwib3JpZ2luX2FuZF9kZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uIiwiJGNoYW5nZSIsIiRidXR0b24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlV2luZG93Iiwic2V0SW50ZXJ2YWwiLCIkc3RhdGlvbnMiLCIkbmVhcmVzdCIsIiRsaW5lcyIsIiRzaGllbGQiLCJ0b2dnbGVDbGFzcyIsInNjcm9sbF90b3BfcG9zaXRpb24iLCJzY3JvbGxUb3AiLCJUaGVtZSIsInRoZW1lX29yZGVyIiwidGhlbWVfc2V0dGluZ3MiLCJzZXQiLCJuZXdfdGhlbWUiLCJvbGRfdGhlbWUiLCJjdXJyZW50X3RoZW1lIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJnZXRJdGVtIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJyZXBsYWNlIiwidGhlbWVfcG9zaXRpb24iLCJpbmRleE9mIiwicGVybWlzc2lvbnMiLCJxdWVyeSIsInRoZW4iLCJwZXJtaXNzaW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInJlZ2lzdHJhdGlvbiIsImVycm9yIiwidXBkYXRlQ29ubmVjdGlvblN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFBQSxHQUFBLEdBQUEsRUFBQTtBQUNBLElBQUFDLE1BQUEsRUFBQUMsUUFBQSxFQUFBQyxXQUFBLEVBQUFDLFFBQUEsRUFBQUMsT0FBQTtBQ0RBLElBQUFDLFFBQUEsR0FBQSxDQUNBO0FBQ0EsVUFBQSxnQkFEQTtBQUVBLFFBQUEsZ0JBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FEQSxFQVNBO0FBQ0E7QUFDQSxVQUFBLFVBRkE7QUFHQSxRQUFBLFVBSEE7QUFJQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FMQTtBQU1BO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFQQSxDQVRBLEVBa0JBO0FBQ0EsVUFBQSxZQURBO0FBRUEsUUFBQSxZQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbEJBLEVBMEJBO0FBQ0EsVUFBQSxTQURBO0FBRUEsUUFBQSxTQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBMUJBLEVBa0NBO0FBQ0EsVUFBQSxTQURBO0FBRUEsUUFBQSxTQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbENBLEVBMENBO0FBQ0EsVUFBQSxpQkFEQTtBQUVBLFFBQUEsaUJBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQTFDQSxFQWtEQTtBQUNBLFVBQUEsWUFEQTtBQUVBLFFBQUEsWUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQWxEQSxFQTBEQTtBQUNBLFVBQUEsU0FEQTtBQUVBLFFBQUEsU0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBMURBLEVBa0VBO0FBQ0EsVUFBQSxtQkFEQTtBQUVBLFFBQUEsbUJBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FsRUEsRUEwRUE7QUFDQTtBQUNBLFVBQUEsa0JBRkE7QUFHQSxRQUFBLGtCQUhBO0FBSUE7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBTEE7QUFNQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQVBBLENBMUVBLEVBbUZBO0FBQ0EsVUFBQSxTQURBO0FBRUEsUUFBQSxTQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbkZBLEVBMkZBO0FBQ0EsVUFBQSxRQURBO0FBRUEsUUFBQSxRQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBM0ZBLEVBbUdBO0FBQ0EsVUFBQSxVQURBO0FBRUEsUUFBQSxVQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0FuR0EsRUEyR0E7QUFDQSxVQUFBLG1CQURBO0FBRUEsUUFBQSxtQkFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBM0dBLEVBbUhBO0FBQ0EsVUFBQSxtQkFEQTtBQUVBLFFBQUEsbUJBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsaUJBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQW5IQSxFQTJIQTtBQUNBLFVBQUEsY0FEQTtBQUVBLFFBQUEsY0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGlCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQTNIQSxFQW1JQTtBQUNBLFVBQUEsVUFEQTtBQUVBLFFBQUEsVUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBbklBLEVBMklBO0FBQ0EsVUFBQSxlQURBO0FBRUEsUUFBQSxlQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBM0lBLEVBbUpBO0FBQ0EsVUFBQSxhQURBO0FBRUEsUUFBQSxhQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0FuSkEsRUEySkE7QUFDQSxVQUFBLFlBREE7QUFFQSxRQUFBLFlBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0EzSkEsRUFtS0E7QUFDQSxVQUFBLE9BREE7QUFFQSxRQUFBLE9BRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQW5LQSxFQTJLQTtBQUNBO0FBQ0EsVUFBQSxZQUZBO0FBR0EsUUFBQSxZQUhBO0FBSUE7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBTEE7QUFNQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBUEEsQ0EzS0EsRUFvTEE7QUFDQSxVQUFBLGNBREE7QUFFQSxRQUFBLGNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsaUJBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FwTEEsRUE0TEE7QUFDQSxVQUFBLGVBREE7QUFFQSxRQUFBLGVBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsaUJBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0E1TEEsRUFvTUE7QUFDQSxVQUFBLFdBREE7QUFFQSxRQUFBLFdBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQXBNQSxFQTRNQTtBQUNBLFVBQUEsa0JBREE7QUFFQSxRQUFBLGtCQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtB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WyBdO1xyXG5sZXQgJHBhbmVsLCAkc3RhdGlvbiwgJHBlcm1pc3Npb24sICRuZXR3b3JrLCAkc3RhdHVzO1xyXG4iLCJsZXQgc3RhdGlvbnMgPSBbXG5cdHtcblx0XHRcIm5hbWVcIjogXCJBbnRvbmlvIENhcmxvc1wiLFxuXHRcdFwiaWRcIjogXCJhbnRvbmlvLWNhcmxvc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAyLCAzOiAyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkxMTMxNTM0NDM5MTMxOSwgLTQzLjE3MjA1MDk5NzU5ODI0MV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIkNhbWVyaW5vXCIsXG5cdFx0XCJpZFwiOiBcImNhbWVyaW5vXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDM6IDggfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAxNjk4MDQ2MDIyMzgyLCAtNDMuMTgzOTgzNjE0OTMzNDg5XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDYW5kZWzDoXJpYVwiLFxuXHRcdFwiaWRcIjogXCJjYW5kZWxhcmlhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDYsIDM6IDYgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAxNzI1MDI5Mzg0MjU5LCAtNDMuMTc4ODA4NjY1NDE4NjcxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDYXJpb2NhXCIsXG5cdFx0XCJpZFwiOiBcImNhcmlvY2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNCwgMzogNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDc0ODQ1MDcyNTI4MTEsIC00My4xNzY2NDU1MTgwMzg5MTddLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNlbnRyYWxcIixcblx0XHRcImlkXCI6IFwiY2VudHJhbFwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA1LCAzOiAxMCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDI3MDQ5NjA3NDQ5NTIsIC00My4xOTI2MjUzMTQzNzczMzhdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMiwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNpZGFkZSBkbyBTYW1iYVwiLFxuXHRcdFwiaWRcIjogXCJjaWRhZGUtZG8tc2FtYmFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk0MTc5OTU3MTI4MDY3LCAtNDMuMTk2ODg0MDgyMDc4NDc2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDaW5lbMOibmRpYVwiLFxuXHRcdFwiaWRcIjogXCJjaW5lbGFuZGlhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDMsIDM6IDMgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTEwNzM0MDAxODQyMjQzLCAtNDMuMTc1NDI1Mzg3MzY0OTMyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDb2xvbWJvXCIsXG5cdFx0XCJpZFwiOiBcImNvbG9tYm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogMiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDUxNzUyMTkwMDk0MTUsIC00My4xNzgwMTY5NjgyMjg4MThdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNvcmRlaXJvIGRhIEdyYcOnYVwiLFxuXHRcdFwiaWRcIjogXCJjb3JkZWlyby1kYS1ncmFjYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMywgMjogOCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTcxMDQ2Mjk5MjMxMTcsIC00My4yMDQxNzg0MDM1MzM3MDNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcIm5hbWVcIjogXCJDcmlzdGlhbm8gT3R0b25pXCIsXG5cdFx0XCJpZFwiOiBcImNyaXN0aWFuby1vdHRvbmlcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogOSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDMwNjEyNzg0ODA2NDgsIC00My4xOTA3NDkxMDk0MjE0ODldLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMiwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkVxdWFkb3JcIixcblx0XHRcImlkXCI6IFwiZXF1YWRvclwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxOCwgMjogMTEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3ODk0NTY0Njg3NzgyLCAtNDMuMjA0ODA1MDE0NDQwODE1XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJHYW1ib2FcIixcblx0XHRcImlkXCI6IFwiZ2FtYm9hXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE2LCAyOiA2IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5Nzk1OTQwODM3Mjg0NSwgLTQzLjE5OTMzNjY4MzI0NjMwMV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiSGFybW9uaWFcIixcblx0XHRcImlkXCI6IFwiaGFybW9uaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTQgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1NzU0NDM3MjczMzg2LCAtNDMuMTkxNDI3NjM5NTg0NDk2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQYXJhZGEgZG9zIE11c2V1c1wiLFxuXHRcdFwiaWRcIjogXCJwYXJhZGEtZG9zLW11c2V1c1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA4IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NTk0NjU4NjgwMjI2NCwgLTQzLjE4MTk1NTk4MDU4MTI3Ml0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUGFyYWRhIGRvcyBOYXZpb3NcIixcblx0XHRcImlkXCI6IFwicGFyYWRhLWRvcy1uYXZpb3NcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogOSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTQxMzk2MjUzMDM4NzUsIC00My4xODcxODE4MzA2MTc0NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUGVyZWlyYSBSZWlzXCIsXG5cdFx0XCJpZFwiOiBcInBlcmVpcmEtcmVpc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNywgMjogMTAgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk2NjQ3MDY0OTYwNDMsIC00My4yMDE3NzMxMTE1MjM1OTNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlByYcOnYSBYVlwiLFxuXHRcdFwiaWRcIjogXCJwcmFjYS14dlwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAxIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMjA3MDEyODk0NTg0OCwgLTQzLjE3MzExNzM5NTc4Mzg3Nl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJhaWEgRm9ybW9zYVwiLFxuXHRcdFwiaWRcIjogXCJwcmFpYS1mb3Jtb3NhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEwLCAyOiAxMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDMxNzcxNTIzODgwNTcsIC00My4yMDgxNjE5NjQ5MDIzMDNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlByb3ZpZMOqbmNpYVwiLFxuXHRcdFwiaWRcIjogXCJwcm92aWRlbmNpYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTc0ODk5MjIwMTQzODMsIC00My4xOTY3MDE0MDA4OTAwMzVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlJvZG92acOhcmlhXCIsXG5cdFx0XCJpZFwiOiBcInJvZG92aWFyaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTksIDI6IDEyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5ODgwNTU3NDI1MTc5OSwgLTQzLjIwNzM0Mjk0MTQ3NTk4Nl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FhcmFcIixcblx0XHRcImlkXCI6IFwic2FhcmFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDU5MTIxMDg0NjAyNTMsIC00My4xODczMjA3ODIyMjgyMDVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcIm5hbWVcIjogXCJTYW50YSBSaXRhXCIsXG5cdFx0XCJpZFwiOiBcInNhbnRhLXJpdGFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogNyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDA1OTQxNjc0MTA2NDksIC00My4xODE1MDkwNDk4NTQyMDZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlNhbnRvIENyaXN0b1wiLFxuXHRcdFwiaWRcIjogXCJzYW50by1jcmlzdG9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTIsIDI6IDcgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1MzI3MjgyMDAyMTQ2LCAtNDMuMjAwMjU5MTgxNzU1NzRdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlNhbnRvcyBEdW1vbnRcIixcblx0XHRcImlkXCI6IFwic2FudG9zLWR1bW9udFwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxLCAzOiAxIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkxMjI4Njg3NDk2MjQwMSwgLTQzLjE2NzYzMjI1OTU0NTg0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTw6NvIEJlbnRvXCIsXG5cdFx0XCJpZFwiOiBcInNhby1iZW50b1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA3IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5ODY0ODA5NjA1MTAxMiwgLTQzLjE3OTk2NDMxMTc2NDg4NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2V0ZSBkZSBTZXRlbWJyb1wiLFxuXHRcdFwiaWRcIjogXCJzZXRlLWRlLXNldGVtYnJvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDUsIDM6IDUgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTA1MzA1OTAwOTc3ODk3LCAtNDMuMTc3NDYzODE2MzQ2OTIyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJUaXJhZGVudGVzXCIsXG5cdFx0XCJpZFwiOiBcInRpcmFkZW50ZXNcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDY1NzgyMjIwMjYxMTYsIC00My4xODI4NTQyMzY1NTc4MDJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlV0b3BpYSBBcXVhUmlvXCIsXG5cdFx0XCJpZFwiOiBcInV0b3BpYS1hcXVhcmlvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEwIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5MzA5NTQ3MTk5OTYxMiwgLTQzLjE5MDIzNjkwNzIxMzIxOV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiVmlsYSBPbMOtbXBpY2FcIixcblx0XHRcImlkXCI6IFwidmlsYS1vbGltcGljYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5OTA1NjU3MjY0NjUzMywgLTQzLjE5OTY0MzUyOTQ5NTI5N10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9XG5dO1xuXG5sZXQgc3RhdGlvbl9pbmRleCA9IHt9O1xuc3RhdGlvbnMuZm9yRWFjaCgoc3RhdGlvbikgPT4ge1xuXHRsZXQgc3RhdGlvbl9uYW1lID0gc3RhdGlvbltcIm5hbWVcIl07XG5cdHN0YXRpb25faW5kZXhbc3RhdGlvbl9uYW1lXSA9IHN0YXRpb247XG59KTtcbiIsImxldCBsaW5lcyA9IFtcblx0e1xuXHRcdFwiaWRcIjogMSxcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAxXCIsXG5cdFx0XCJjb2xvclwiOiBcIiM2OGI5ZmJcIixcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xuXHRcdC8vIFx0XCJTYW50b3MgRHVtb250XCIsXG5cdFx0Ly8gXHRcIlByYWlhIEZvcm1vc2FcIlxuXHRcdC8vIF1cblx0fSxcblx0e1xuXHRcdFwiaWRcIjogMixcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAyXCIsXG5cdFx0XCJjb2xvclwiOiBcIiM3M2NhM2ZcIixcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xuXHRcdC8vIFx0XCJQcmHDp2EgWFZcIixcblx0XHQvLyBcdFwiUHJhaWEgRm9ybW9zYVwiXG5cdFx0Ly8gXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwiaWRcIjogMyxcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAzXCIsXG5cdFx0XCJjb2xvclwiOiBcIiNmM2EyMzBcIixcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xuXHRcdC8vIFx0XCJTYW50b3MgRHVtb250XCIsXG5cdFx0Ly8gXHRcIkNlbnRyYWxcIlxuXHRcdC8vIF1cblx0fVxuXTtcblxubGV0IGxpbmVfaW5kZXggPSB7IH07XG5saW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdGxldCBsaW5lX25hbWUgPSBsaW5lW1wibmFtZVwiXTtcblx0bGluZV9pbmRleFtsaW5lX25hbWVdID0gbGluZTtcbn0pO1xuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gZ2V0IGxvY2F0aW9uIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBQZWdhIGEgbG9jYWxpemHDp8OjbyBkbyB1c3XDoXJpb1xuY29uc3QgZ2V0TG9jYXRpb24gPSAoaXNfaW5pdGlhbCA9IGZhbHNlKSA9PiB7XG5cdG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XG5cdFx0Ly8gU2UgdmllciBkbyBtb2RvIGluaWNpYWwsIGVuY2VycmEgZWxlXG5cdFx0aWYgKGlzX2luaXRpYWwpIHtcblx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWluaXRpYWxcIik7XG5cdFx0XHQkcGFuZWwucmVtb3ZlQ2xhc3MoXCItc3RhdGUtLXBlcm1pc3Npb25cIik7XG5cdFx0fVxuXG5cdFx0Ly8gRGVzY29icmUgYSBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYSBlIHByb2N1cmEgYXMgcHLDs3hpbWFzIHBhcnRpZGFzXG5cdFx0bGV0IG5lYXJlc3Rfc3RhdGlvbiA9IG5lYXJlc3RTdGF0aW9uKFtwb3NpdGlvbltcImNvb3Jkc1wiXVtcImxhdGl0dWRlXCJdLCBwb3NpdGlvbltcImNvb3Jkc1wiXVtcImxvbmdpdHVkZVwiXV0pO1xuXHRcdG5leHREZXBhcnR1cmVzKG5lYXJlc3Rfc3RhdGlvbiwgdHJ1ZSk7XG5cdH0pO1xufTtcbiIsIi8vIEVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXG5jb25zdCBkZWcycmFkID0gKGRlZykgPT4ge1xuXHRyZXR1cm4gZGVnICogKE1hdGguUEkgLyAxODApO1xufTtcblxuY29uc3QgbmVhcmVzdFN0YXRpb24gPSAodXNlcl9jb29yZGluYXRlcykgPT4ge1xuXHRsZXQgdXNlcl9sYXRpdHVkZSA9IGRlZzJyYWQodXNlcl9jb29yZGluYXRlc1swXSk7XG5cdGxldCB1c2VyX2xvbmdpdHVkZSA9IGRlZzJyYWQodXNlcl9jb29yZGluYXRlc1sxXSk7XG5cblx0bGV0IFIgPSA2MzcxO1xuXG5cdGxldCBzaG9ydGVzdF9kaXN0YW5jZSA9IG51bGw7XG5cdGxldCBuZWFyZXN0X3N0YXRpb24gPSBudWxsO1xuXG5cdHN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcblx0XHRpZiAoIXN0YXRpb25bXCJkaXNhYmxlZFwiXSkge1xuXHRcdFx0bGV0IHN0YXRpb25fbGF0aXR1ZGUgPSBkZWcycmFkKHN0YXRpb25bXCJjb29yZGluYXRlc1wiXVswXSk7XG5cdFx0XHRsZXQgc3RhdGlvbl9sb25naXR1ZGUgPSBkZWcycmFkKHN0YXRpb25bXCJjb29yZGluYXRlc1wiXVsxXSk7XG5cblx0XHRcdGxldCB4ID0gKHN0YXRpb25fbG9uZ2l0dWRlIC0gdXNlcl9sb25naXR1ZGUpICogTWF0aC5jb3MoKHVzZXJfbGF0aXR1ZGUgKyBzdGF0aW9uX2xhdGl0dWRlKSAvIDIpO1xuXHRcdFx0bGV0IHkgPSAoc3RhdGlvbl9sYXRpdHVkZSAtIHVzZXJfbGF0aXR1ZGUpO1xuXHRcdFx0bGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpICogUjtcblxuXHRcdFx0aWYgKCFzaG9ydGVzdF9kaXN0YW5jZSB8fCBkaXN0YW5jZSA8IHNob3J0ZXN0X2Rpc3RhbmNlKSB7XG5cdFx0XHRcdHNob3J0ZXN0X2Rpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRcdG5lYXJlc3Rfc3RhdGlvbiA9IHN0YXRpb247XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gbmVhcmVzdF9zdGF0aW9uO1xufTtcbiIsIi8vIFByw7N4aW1hcyBwYXJ0aWRhc1xuY29uc3QgbmV4dERlcGFydHVyZXMgPSAoc3RhdGlvbiwgZnJvbV9ncHMgPSBmYWxzZSkgPT4ge1xuXHRsZXQgZGVwYXJ0dXJlcztcblxuXHQvLyBEZXNsaWdhIGludGVydmFsb3MgZSBldmVudG9zIGV4aXN0ZW50ZXNcblx0Y2xlYXJJbnRlcnZhbChjdWVbXCJpbnRlcnZhbC1kZXBhcnR1cmVzXCJdKTtcblx0Y2xlYXJJbnRlcnZhbChjdWVbXCJpbnRlcnZhbC1sYXN0LXVwZGF0ZWRcIl0pO1xuXHQkKHdpbmRvdykub2ZmKFwidmlzaWJpbGl0eWNoYW5nZSBvbmxpbmVcIik7XG5cblx0Ly8gQ29sb2NhIG8gbm9tZSBkYSBlc3Rhw6fDo28gbm8gYXBwYmFyXG5cdCQoXCIuc3RhdGlvbnMgaDEgLnN0YXRpb24tbmFtZVwiKS50ZXh0KHN0YXRpb25bXCJuYW1lXCJdKTtcblxuXHQvLyBNb3N0cmEgYW5pbWHDp8OjbyBkZSBsb2FkXG5cdCRwYW5lbC5hZGRDbGFzcyhcIi1zdGF0ZS0tbG9hZGluZ1wiKTtcblxuXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXHQvLyBBdHVhbGl6YcOnw6NvXG5cdGNvbnN0IGxhc3RVcGRhdGVkID0gKCkgPT4ge1xuXHRcdGxldCAkYmFkZ2UgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInN0YXR1cy1iYWRnZVwiKTtcblx0XHRsZXQgY29ubmVjdGVkID0gbmF2aWdhdG9yLm9uTGluZTtcblxuXHRcdC8vIFRlbXBvIGVtIHNlZ3VuZG9zIGRlc2RlIGEgw7psdGltYSBhdHVhbGl6YcOnw6NvXG5cdFx0bGV0IHNlY29uZHNfc2luY2VfdXBkYXRlID0gbW9tZW50KCkuZGlmZihkZXBhcnR1cmVzW1wibGFzdFVwZGF0ZWRcIl0sIFwic2Vjb25kc1wiKTtcblxuXHRcdC8vIFNlIHRpdmVyIHNpZG8gYXR1YWxpemFkbyBow6EgbWVub3MgZGUgNjAgc2VndW5kb3MsIG1vc3RyYSBUZW1wbyBSZWFsXG5cdFx0aWYgKHNlY29uZHNfc2luY2VfdXBkYXRlIDw9IDYwKSB7XG5cdFx0XHQkYmFkZ2UuYWRkQ2xhc3MoXCItc3RhdGUtLXJlYWwtdGltZVwiKS50ZXh0KFwiVGVtcG8gcmVhbFwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGxhc3RfdXBkYXRlZCA9IFwiQXR1YWxpemFkbyBcIiArIG1vbWVudChkZXBhcnR1cmVzW1wibGFzdFVwZGF0ZWRcIl0pLmZyb21Ob3codHJ1ZSkgKyBcIiBhdHLDoXNcIjtcblx0XHRcdCRiYWRnZS50ZXh0KGxhc3RfdXBkYXRlZCk7XG5cdFx0fVxuXG5cdFx0JHN0YXR1cy5lbXB0eSgpLmFwcGVuZCgkYmFkZ2UpO1xuXHR9O1xuXG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdC8vIENvbnN1bHRhIGRvcyBkYWRvc1xuXHRjb25zdCBnZXREYXRhID0gKCkgPT4ge1xuXHRcdC8vIFPDsyBjYXJyZWdhIHNlIGVzdGl2ZXIgY29tIGZvY29cblx0XHRpZiAoZG9jdW1lbnQuaGlkZGVuID09PSB0cnVlIHx8IG5hdmlnYXRvci5vbkxpbmUgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gQ2FycmVnYSBvcyBkYWRvc1xuXHRcdC8vICQuZ2V0SlNPTihcImh0dHBzOi8vZW1pdHJlbW11cy5jb20vLS92bHQvZGVwYXJ0dXJlcz9jYWxsYmFjaz0/XCIsIHtcblx0XHQkLmdldEpTT04oXCJodHRwczovL3VzLWNlbnRyYWwxLXZsdGNhcmlvY2EuY2xvdWRmdW5jdGlvbnMubmV0L2RlcGFydHVyZXM/Y2FsbGJhY2s9P1wiLCB7XG5cdFx0XHRcInN0YXRpb25cIjogc3RhdGlvbltcImlkXCJdLFxuXHRcdFx0Ly8gXCJlbnZcIjogXCJkZXZcIlxuXHRcdH0pLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRkZXBhcnR1cmVzID0gcmVzcG9uc2U7XG5cblx0XHRcdGxldCBldGFfY291bnQgPSAwO1xuXHRcdFx0bGV0IGRpcmVjdGlvbnMgPSBbIF07XG5cdFx0XHRsZXQgZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb24gPSB7IH07XG5cblx0XHRcdC8vIE9yZ2FuaXphIGFzIHBhcnRpZGFzIHBvciBkZXN0aW5vXG5cdFx0XHRkZXBhcnR1cmVzW1wibGluZXNcIl0uZm9yRWFjaCgobGluZSkgPT4ge1xuXHRcdFx0XHRsaW5lW1wiZGlyZWN0aW9uc1wiXS5mb3JFYWNoKChkaXJlY3Rpb24pID0+IHtcblx0XHRcdFx0XHRsZXQgZGlyZWN0aW9uX3RpdGxlID0gZGlyZWN0aW9uW1wibmFtZVwiXTtcblx0XHRcdFx0XHRldGFfY291bnQgKz0gZGlyZWN0aW9uW1wiZXRhc1wiXS5sZW5ndGg7XG5cblx0XHRcdFx0XHRpZiAoZGlyZWN0aW9uW1wiZXRhc1wiXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWRpcmVjdGlvbnMuaW5jbHVkZXMoZGlyZWN0aW9uX3RpdGxlKSkge1xuXHRcdFx0XHRcdFx0XHRkaXJlY3Rpb25zLnB1c2goZGlyZWN0aW9uX3RpdGxlKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKCFkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbltkaXJlY3Rpb25fdGl0bGVdKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0gPSBbIF07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGRpcmVjdGlvbltcImV0YXNcIl0uZm9yRWFjaCgodHJhaW4pID0+IHtcblx0XHRcdFx0XHRcdFx0dHJhaW5bXCJsaW5lXCJdID0gbGluZVtcIm5hbWVcIl07XG5cdFx0XHRcdFx0XHRcdGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0ucHVzaCh0cmFpbik7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIFNlIG7Dum1lcm8gZGUgcHLDs3hpbWFzIHBhcnRpZGFzIGZvciB6ZXJvLFxuXHRcdFx0Ly8gY29uZmVyZSBzZSBhaW5kYSBlc3TDoSBkZW50cm8gZG8gaG9yw6FyaW8gZGUgZnVuY2lvbmFtZW50b1xuXHRcdFx0aWYgKGV0YV9jb3VudCA9PT0gMCAmJiBlbnYgPT09IFwicHJvZHVjdGlvblwiKSB7XG5cdFx0XHRcdGxldCBub3cgPSBtb21lbnQoKTtcblx0XHRcdFx0bGV0IG9wZXJhdGlvbl9zdGFydF90aW1lID0gbW9tZW50KFwiMDY6MDBcIiwgXCJISDptbVwiKTtcblx0XHRcdFx0bGV0IG9wZXJhdGlvbl9lbmRfdGltZSA9IG1vbWVudChcIjAwOjAwXCIsIFwiSEg6bW1cIik7XG5cblx0XHRcdFx0aWYgKG5vdy5pc0FmdGVyKG9wZXJhdGlvbl9lbmRfdGltZSkgJiYgbm93LmlzQmVmb3JlKG9wZXJhdGlvbl9zdGFydF90aW1lKSkge1xuXHRcdFx0XHRcdCRwYW5lbC5hZGRDbGFzcyhcIi1zdGF0ZS0tY2xvc2VkXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBNb250YSBhcyBwYXJ0aWRhc1xuXHRcdFx0XHRsZXQgJGRlcGFydHVyZXMgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImRlcGFydHVyZXNcIik7XG5cdFx0XHRcdGxldCAkdGl0bGUgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImRlcGFydHVyZXMtdGl0bGVcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRcdFx0fSkuYXBwZW5kVG8oJGRlcGFydHVyZXMpO1xuXHRcdFx0XHQkKFwiPHNwYW4gLz5cIikudGV4dChcIlByw7N4aW1vcyB0cmVuc1wiKS5hcHBlbmRUbygkdGl0bGUpO1xuXG5cdFx0XHRcdC8vIFRleHRvIHBhcmEgY29tcGFydGlsaGFtZW50b1xuXHRcdFx0XHRsZXQgc2hhcmVfdGV4dCA9IFtcIlByw7N4aW1vcyB0cmVuc1wiLCBcIvCfmokgKlwiICsgc3RhdGlvbltcIm5hbWVcIl0gKyBcIipcIiwgXCJcIl07XG5cblx0XHRcdFx0Ly8gZGlyZWN0aW9ucy5zb3J0KCk7XG5cdFx0XHRcdGRpcmVjdGlvbnMuZm9yRWFjaCgoZGlyZWN0aW9uKSA9PiB7XG5cdFx0XHRcdFx0bGV0ICRkaXJlY3Rpb24gPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImRpcmVjdGlvblwiKS5hcHBlbmRUbygkZGVwYXJ0dXJlcyk7XG5cdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJkaXJlY3Rpb24tY2FwdGlvblwiKS50ZXh0KFwiRGVzdGlub1wiKS5hcHBlbmRUbygkZGlyZWN0aW9uKTtcblxuXHRcdFx0XHRcdGxldCBldGFzID0gZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb25bZGlyZWN0aW9uXTtcblx0XHRcdFx0XHRldGFzLnNvcnQoKGEsIGIpID0+IHsgcmV0dXJuIGFbXCJzZWNvbmRzXCJdIC0gYltcInNlY29uZHNcIl0gfSk7XG5cblx0XHRcdFx0XHRldGFzLmZvckVhY2goKHRyYWluKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgJHRyYWluID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpblwiKS5hcHBlbmRUbygkZGlyZWN0aW9uKTtcblx0XHRcdFx0XHRcdGxldCAkbGluZSA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW4tbGluZVwiKS5hcHBlbmRUbygkdHJhaW4pO1xuXHRcdFx0XHRcdFx0bGV0IGlzX2FwcHJvYWNoaW5nID0gdHJhaW5bXCJzZWNvbmRzXCJdIDwgMzA7XG5cblx0XHRcdFx0XHRcdGxldCBsaW5lID0gbGluZV9pbmRleFt0cmFpbltcImxpbmVcIl1dO1xuXHRcdFx0XHRcdFx0bGV0IGRlcGFydHVyZV9jb3VudGRvd24gPSAoaXNfYXBwcm9hY2hpbmc/IFwiQWdvcmFcIiA6IE1hdGgucm91bmQodHJhaW5bXCJzZWNvbmRzXCJdIC8gNjApICsgXCI8c3Bhbj5taW48L3NwYW4+XCIpO1xuXHRcdFx0XHRcdFx0bGV0IGRlcGFydHVyZV90aW1lID0gbW9tZW50KHRyYWluW1wiYXJyaXZhbFRpbWVcIl0pLmZvcm1hdChcIkhIOm1tXCIpO1xuXG5cdFx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImxpbmUtc2hpZWxkXCIpLmNzcyhcImNvbG9yXCIsIGxpbmVbXCJjb2xvclwiXSkuYXR0cihcInRpdGxlXCIsIFwiTGluaGEgXCIgKyBsaW5lW1wiaWRcIl0pLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKS50ZXh0KGxpbmVbXCJpZFwiXSkuYXBwZW5kVG8oJGxpbmUpO1xuXHRcdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpbi1kaXJlY3Rpb25cIikuYXR0cihcInRpdGxlXCIsIFwiVHJlbSBcIiArIHRyYWluW1widHJhaW5cIl0pLnRleHQoZGlyZWN0aW9uKS5hcHBlbmRUbygkdHJhaW4pO1xuXHRcdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpbi1ldGFcIikuYXR0cihcInRpdGxlXCIsIGRlcGFydHVyZV90aW1lKS5odG1sKGRlcGFydHVyZV9jb3VudGRvd24pLmFwcGVuZFRvKCR0cmFpbik7XG5cblx0XHRcdFx0XHRcdGlmIChpc19hcHByb2FjaGluZykge1xuXHRcdFx0XHRcdFx0XHQkdHJhaW4uYWRkQ2xhc3MoXCItc3RhdGUtLWFwcHJvYWNoaW5nXCIpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBUZXh0byBwYXJhIGNvbXBhcnRpbGhhbWVudG9cblx0XHRcdFx0XHRcdHNoYXJlX3RleHQucHVzaChcIkxcIiArIGxpbmVbXCJpZFwiXSArIFwiIFwiICsgZGlyZWN0aW9uICsgXCIgXCIgKyBkZXBhcnR1cmVfdGltZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIEVzdGFkbyBkYSBjb25leMOjbyBlIGhvcmEgZGEgw7psdGltYSBhdHVhbGl6YcOnw6NvXG5cdFx0XHRcdCRzdGF0dXMgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInN0YXR1c1wiKS5hcHBlbmRUbygkdGl0bGUpO1xuXHRcdFx0XHQvLyAkY29ubmVjdGlvbl9zdGF0dXMgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImNvbm5lY3Rpb24tc3RhdHVzXCIpLmFwcGVuZFRvKCRzdGF0dXMpO1xuXHRcdFx0XHQvLyAkbGFzdF91cGRhdGVkID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJsYXN0LXVwZGF0ZWRcIikuYXBwZW5kVG8oJHN0YXR1cyk7XG5cdFx0XHRcdGxhc3RVcGRhdGVkKCk7XG5cblx0XHRcdFx0Ly8gTGltcGEgbyBwYWluZWwgZSBpbnNlcmUgb3Mgbm92b3MgZGFkb3Ncblx0XHRcdFx0JHBhbmVsLnJlbW92ZUNsYXNzKFwiLXN0YXRlLS1jbG9zZWRcIik7XG5cdFx0XHRcdCRzdGF0aW9uLmVtcHR5KCkuYXBwZW5kKCRkZXBhcnR1cmVzKTtcblxuXHRcdFx0XHQvLyBDb21wYXJ0aWxoYXJcblx0XHRcdFx0Ly8gaWYgKG5hdmlnYXRvci5zaGFyZSkge1xuXHRcdFx0XHQvLyBcdGxldCBsb25ncHJlc3M7XG5cdFx0XHRcdC8vIFx0bGV0IGxvbmdwcmVzc19kZWxheSA9IDEzMDA7XG5cblx0XHRcdFx0Ly8gXHQkZGlyZWN0aW9uLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0XHQvLyBcdFx0bG9uZ3ByZXNzID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdC8vIFx0XHRcdG5hdmlnYXRvci5zaGFyZSh7XG5cdFx0XHRcdC8vIFx0XHRcdFx0dGV4dDogc2hhcmVfdGV4dC5qb2luKFwiXFxuXCIpXG5cdFx0XHRcdC8vIFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBcdFx0fSwgbG9uZ3ByZXNzX2RlbGF5KTtcblx0XHRcdFx0Ly8gXHR9KS5vbihcIm1vdXNldXAgbW91c2VvdXRcIiwgKCkgPT4ge1xuXHRcdFx0XHQvLyBcdFx0Ly8gY2xlYXJJbnRlcnZhbChsb25ncHJlc3MpO1xuXHRcdFx0XHQvLyBcdH0pO1xuXHRcdFx0XHQvLyB9XG5cdFx0XHR9XG5cblx0XHRcdCRwYW5lbC5yZW1vdmVDbGFzcyhcIi1zdGF0ZS0tbG9hZGluZ1wiKTtcblxuXHRcdFx0Ly8gQXMgcGFyYWRhcyBTZXRlIGRlIFNldGVtYnJvIGUgQ29sb21ibyBzw6NvIG11aXRvIHByw7N4aW1hcywgZW50w6NvIMOpIGNvbXVtIHF1ZSBhIGxvY2FsaXphw6fDo29cblx0XHRcdC8vIGRvIEdQUyBkbyB1c3XDoXJpbyBsZXZlIMOgIGVzdGHDp8OjbyBlcnJhZGEuIFBvciBpc3NvLCBuZXNzYXMgcGFyYWRhcywgw6kgbW9zdHJhZG8gdW0gYm90w6NvIHBhcmFcblx0XHRcdC8vIGZhY2lsaXRhciBhIHRyb2NhIGRlIHBhcmFkYS4gTyBib3TDo28gc8OzIMOpIGV4aWJpZG8gcXVhbmRvIG8gdXN1w6FyaW8gdmVtIGRhIGxvY2FsaXphw6fDo29cblx0XHRcdC8vIGF1dG9tw6F0aWNhIChuw6NvIG1vc3RyYSBzZSBwYXJhZGEgZm9pIGVzY29saGlkYSBubyBtZW51KVxuXHRcdFx0aWYgKGZyb21fZ3BzID09PSB0cnVlICYmIFtcInNldGUtZGUtc2V0ZW1icm9cIiwgXCJjb2xvbWJvXCJdLmluY2x1ZGVzKHN0YXRpb25bXCJpZFwiXSkpIHtcblx0XHRcdFx0bGV0IG9yaWdpbl9hbmRfZGVzdGluYXRpb24gPSB7XG5cdFx0XHRcdFx0XCJzZXRlLWRlLXNldGVtYnJvXCI6IHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkNvbG9tYm9cIixcblx0XHRcdFx0XHRcdFwiaWRcIjogXCJjb2xvbWJvXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFwiY29sb21ib1wiOiB7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJTZXRlIGRlIFNldGVtYnJvXCIsXG5cdFx0XHRcdFx0XHRcImlkXCI6IFwic2V0ZS1kZS1zZXRlbWJyb1wiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGxldCBkZXN0aW5hdGlvbiA9IG9yaWdpbl9hbmRfZGVzdGluYXRpb25bc3RhdGlvbltcImlkXCJdXTtcblxuXHRcdFx0XHRsZXQgJGNoYW5nZSA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiY2hhbmdlLXN0YXRpb25cIikuYXBwZW5kVG8oJHN0YXRpb24pO1xuXHRcdFx0XHRsZXQgJGJ1dHRvbiA9ICQoXCI8YSAvPlwiKS5hZGRDbGFzcyhcImJ1dHRvblwiKS5hdHRyKFwiaHJlZlwiLCBcIiNcIikuYXBwZW5kVG8oJGNoYW5nZSk7XG5cdFx0XHRcdCQoXCI8aSAvPlwiKS5hZGRDbGFzcyhcIm1hdGVyaWFsLWljb25zXCIpLnRleHQoXCJuZWFyX21lXCIpLmFwcGVuZFRvKCRidXR0b24pO1xuXHRcdFx0XHQkKFwiPHNwYW4gLz5cIikudGV4dChcIkVzdMOhIGVtXCIpLmFwcGVuZFRvKCRidXR0b24pO1xuXHRcdFx0XHQkKFwiPHN0cm9uZyAvPlwiKS50ZXh0KGRlc3RpbmF0aW9uW1wibmFtZVwiXSArIFwiP1wiKS5hcHBlbmRUbygkYnV0dG9uKTtcblxuXHRcdFx0XHQkYnV0dG9uLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRuZXh0RGVwYXJ0dXJlcyhkZXN0aW5hdGlvbik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdC8vIEF0dWFsaXphw6fDo29cblx0Y29uc3QgdXBkYXRlV2luZG93ID0gKCkgPT4ge1xuXHRcdGlmIChkb2N1bWVudC5oaWRkZW4gPT09IGZhbHNlICYmIG5hdmlnYXRvci5vbkxpbmUgPT09IHRydWUpIHtcblx0XHRcdGxhc3RVcGRhdGVkKCk7XG5cdFx0XHRnZXREYXRhKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIENyaWEgbm92b3MgaW50ZXJ2YWxvcyBlIGV2ZW50b3Ncblx0JCh3aW5kb3cpLm9uKFwib25saW5lIHZpc2liaWxpdHljaGFuZ2VcIiwgdXBkYXRlV2luZG93KTtcblx0aWYgKGVudiA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcblx0XHRjdWVbXCJpbnRlcnZhbC1kZXBhcnR1cmVzXCJdID0gc2V0SW50ZXJ2YWwoZ2V0RGF0YSwgMTUwMDApO1xuXHRcdGN1ZVtcImludGVydmFsLWxhc3QtdXBkYXRlZFwiXSA9IHNldEludGVydmFsKGxhc3RVcGRhdGVkLCA1MDAwKTtcblx0fVxuXG5cdGdldERhdGEoKTtcbn07XG4iLCIkKGZ1bmN0aW9uKCkge1xuXHQvLyBNb250YSBsaXN0YSBkZSBwYXJhZGFzIGUgZXN0YcOnw7Vlc1xuXHRsZXQgJHN0YXRpb25zID0gJChcIi5zdGF0aW9ucyB1bFwiKTtcblxuXHRsZXQgJG5lYXJlc3QgPSAkKFwiPGEgLz5cIikuYXR0cihcImhyZWZcIiwgXCIjXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQkKFwiLnN0YXRpb25zIGgxIC5zdGF0aW9uLW5hbWVcIikudGV4dChcIlwiKTtcblx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHRcdGdldExvY2F0aW9uKCk7XG5cdH0pLmFwcGVuZFRvKCRzdGF0aW9ucyk7XG5cdCQoXCI8aSAvPlwiKS5hZGRDbGFzcyhcIm1hdGVyaWFsLWljb25zXCIpLnRleHQoXCJuZWFyX21lXCIpLmFwcGVuZFRvKCRuZWFyZXN0KTtcblx0JChcIjxzcGFuIC8+XCIpLnRleHQoXCJMb2NhbGl6YXIgZXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcIikuYXBwZW5kVG8oJG5lYXJlc3QpO1xuXG5cdCQoXCI8bGkgLz5cIikuYWRkQ2xhc3MoXCJuZWFyZXN0LXN0YXRpb25cIikuYXBwZW5kKCRuZWFyZXN0KS5hcHBlbmRUbygkc3RhdGlvbnMpO1xuXG5cdHN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcblx0XHRsZXQgJHN0YXRpb24gPSAkKFwiPGEgLz5cIikuYXR0cihcImhyZWZcIiwgXCIjXCIgKyBzdGF0aW9uW1wiaWRcIl0pO1xuXG5cdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJzdGF0aW9uLW5hbWVcIikudGV4dChzdGF0aW9uW1wibmFtZVwiXSkuYXBwZW5kVG8oJHN0YXRpb24pO1xuXG5cdFx0bGV0ICRsaW5lcyA9ICQoXCI8dWwgLz5cIikuYWRkQ2xhc3MoXCJzdGF0aW9uLWxpbmVzXCIpLmFwcGVuZFRvKCRzdGF0aW9uKTtcblx0XHRsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdFx0XHRsZXQgJGxpbmUgPSAkKFwiPGxpIC8+XCIpLmFwcGVuZFRvKCRsaW5lcyk7XG5cdFx0XHRpZiAoc3RhdGlvbltcImxpbmVzXCJdLmluY2x1ZGVzKGxpbmVbXCJpZFwiXSkpIHtcblx0XHRcdFx0bGV0ICRzaGllbGQgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImxpbmUtc2hpZWxkXCIpLmNzcyhcImNvbG9yXCIsIGxpbmVbXCJjb2xvclwiXSkudGV4dChsaW5lW1wiaWRcIl0pLmFwcGVuZFRvKCRsaW5lKTtcblxuXHRcdFx0XHRpZiAobGluZVtcImRpc2FibGVkXCJdKSB7XG5cdFx0XHRcdFx0JHNoaWVsZC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSkuYWRkQ2xhc3MoXCItc3RhdGUtLWRpc2FibGVkXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoIXN0YXRpb25bXCJkaXNhYmxlZFwiXSkge1xuXHRcdFx0JHN0YXRpb24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0bmV4dERlcGFydHVyZXMoc3RhdGlvbik7XG5cdFx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHN0YXRpb24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Ly8gJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRcdH0pO1xuXHRcdFx0JHN0YXRpb24uYWRkQ2xhc3MoXCItc3RhdGUtLWRpc2FibGVkXCIpO1xuXHRcdH1cblxuXHRcdCQoXCI8bGkgLz5cIikuYXBwZW5kKCRzdGF0aW9uKS5hcHBlbmRUbygkc3RhdGlvbnMpO1xuXHR9KTtcblxuXHQvLyBOYXZlZ2HDp8Ojb1xuXHQkKFwiLmFwcGJhclwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcblx0XHQkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHR9KTtcblxuXHQkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgKGV2ZW50KSA9PiB7XG5cdFx0bGV0IHNjcm9sbF90b3BfcG9zaXRpb24gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cblx0XHRpZiAoc2Nyb2xsX3RvcF9wb3NpdGlvbiA+PSAxMikge1xuXHRcdFx0JChcImJvZHlcIikuYWRkQ2xhc3MoXCItbW9kZS0tc2Nyb2xsXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1zY3JvbGxcIik7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyB0aGVtZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmxldCBUaGVtZSA9ICgoKSA9PiB7XHJcbiAgICBsZXQgdGhlbWVfb3JkZXIgPSBbXHJcbiAgICAgICAgXCJhdXRvXCIsXHJcbiAgICAgICAgXCJsaWdodFwiLFxyXG4gICAgICAgIFwiZGFya1wiXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCB0aGVtZV9zZXR0aW5ncyA9IHtcclxuICAgICAgICBcImF1dG9cIjoge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGVtYSBhdXRvbcOhdGljb1wiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJicmlnaHRuZXNzX2F1dG9cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsaWdodFwiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUZW1hIGNsYXJvXCIsXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImJyaWdodG5lc3NfNVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRhcmtcIjoge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGVtYSBlc2N1cm9cIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiYnJpZ2h0bmVzc180XCJcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgc2V0ID0gKG5ld190aGVtZSwgb2xkX3RoZW1lKSA9PiB7XHJcbiAgICAgICAgY3VycmVudF90aGVtZSA9IG5ld190aGVtZTtcclxuXHJcbiAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWUgc3BhblwiKS50ZXh0KHRoZW1lX3NldHRpbmdzW25ld190aGVtZV1bXCJ0aXRsZVwiXSk7XHJcbiAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWUgaVwiKS50ZXh0KHRoZW1lX3NldHRpbmdzW25ld190aGVtZV1bXCJpY29uXCJdKTtcclxuXHJcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItdGhlbWUtLVwiICsgb2xkX3RoZW1lKS5hZGRDbGFzcyhcIi10aGVtZS0tXCIgKyBuZXdfdGhlbWUpO1xyXG5cclxuICAgICAgICAvLyBTYWx2YSBjb25maWd1cmHDp8OjbyBubyBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBpZiAobmV3X3RoZW1lID09PSBcImF1dG9cIikge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRoZW1lXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgbmV3X3RoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENvbmZlcmUgc2UgasOhIGjDoSB0ZW1hIHNhbHZvIG5vIGxvY2FsU3RvcmFnZS5cclxuICAgIC8vIFNlIG7Do28gaG91dmVyLCBwZWdhIG8gcGFkcsOjbyBkbyBzaXN0ZW1hXHJcbiAgICBsZXQgY3VycmVudF90aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgfHwgZ2V0Q29tcHV0ZWRTdHlsZSgkKFwiLnNldHRpbmdzIC5jdXJyZW50LXRoZW1lXCIpWzBdKS5nZXRQcm9wZXJ0eVZhbHVlKFwiY29udGVudFwiKS5yZXBsYWNlKC9cIi9nLCBcIlwiKTtcclxuXHJcbiAgICBpZiAoY3VycmVudF90aGVtZSkge1xyXG4gICAgICAgIHNldChjdXJyZW50X3RoZW1lLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBEZXNjb2JyZSBhIHBvc2nDp8OjbyBkbyB0ZW1hIG5hIG9yZGVtXHJcbiAgICAgICAgICAgIGxldCB0aGVtZV9wb3NpdGlvbiA9IHRoZW1lX29yZGVyLmluZGV4T2YoY3VycmVudF90aGVtZSk7XHJcbiAgICAgICAgICAgIGxldCBuZXdfdGhlbWUgPSB0aGVtZV9vcmRlclt0aGVtZV9wb3NpdGlvbiArIDFdIHx8IHRoZW1lX29yZGVyWzBdO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0YSBvIG5vdm8gdGVtYVxyXG4gICAgICAgICAgICBzZXQobmV3X3RoZW1lLCBjdXJyZW50X3RoZW1lKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIiQoZnVuY3Rpb24gKCkge1xuXHQkcGFuZWwgPSAkKFwiLnBhbmVsXCIpO1xuXHQkc3RhdGlvbiA9ICQoXCIuc3RhdGlvblwiLCAkcGFuZWwpO1xuXHQkcGVybWlzc2lvbiA9ICQoXCIucGVybWlzc2lvblwiLCAkcGFuZWwpO1xuXHQkbmV0d29yayA9ICQoXCIubmV0d29ya1wiLCAkcGFuZWwpO1xuXG5cdC8vIENvbmZlcmUgc2UgdXN1w6FyaW8gasOhIGhhdmlhIGhhYmlsaXRhZG8gZ2VvbG9jYWxpemHDp8OjbyBhbnRlc1xuXHRpZiAoXCJnZW9sb2NhdGlvblwiIGluIG5hdmlnYXRvcikge1xuXHRcdGlmIChcInBlcm1pc3Npb25zXCIgaW4gbmF2aWdhdG9yKSB7XG5cdFx0XHRuYXZpZ2F0b3IucGVybWlzc2lvbnMucXVlcnkoeyBcIm5hbWVcIjogXCJnZW9sb2NhdGlvblwiIH0pLnRoZW4oKHBlcm1pc3Npb24pID0+IHtcblx0XHRcdFx0aWYgKHBlcm1pc3Npb25bXCJzdGF0ZVwiXSA9PT0gXCJncmFudGVkXCIpIHtcblx0XHRcdFx0XHQvLyBTZSBqw6EgdGl2ZXIsIHBlZ2EgYSBsb2NhbGl6YcOnw6NvIGF0dWFsIGUgcHJvY3VyYSBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYVxuXHRcdFx0XHRcdGdldExvY2F0aW9uKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gU2UgbsOjbyB0aXZlciwgbW9zdHJhIGJvdMOjbyBwYXJhIHNvbGljaXRhciBhdXRvcml6YcOnw6NvXG5cdFx0XHRcdFx0JChcImJvZHlcIikuYWRkQ2xhc3MoXCItbW9kZS0taW5pdGlhbFwiKTtcblx0XHRcdFx0XHQkcGFuZWwuYWRkQ2xhc3MoXCItc3RhdGUtLXBlcm1pc3Npb25cIik7XG5cblx0XHRcdFx0XHQkKFwiLmJ1dHRvblwiLCAkcGVybWlzc2lvbikub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRnZXRMb2NhdGlvbih0cnVlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGdldExvY2F0aW9uKCk7XG5cdFx0fVxuXHR9XG59KTtcblxuLy8gU2VydmljZSBXb3JrZXJcbmlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcblx0XHRjdWVbXCJzZXJ2aWNlLXdvcmtlclwiXSA9IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFwiL3NlcnZpY2Utd29ya2VyLmpzXCIpO1xuXG5cdFx0Y3VlW1wic2VydmljZS13b3JrZXJcIl0udGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIVwiLCByZWdpc3RyYXRpb24pO1xuXHRcdH0sIChlcnJvcikgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiBcIiwgZXJyb3IpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuLy8gRXN0YWRvIGRhIGNvbmV4w6NvXG5jb25zdCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzID0gKCkgPT4ge1xuXHRsZXQgY29ubmVjdGVkID0gbmF2aWdhdG9yLm9uTGluZTtcblxuXHRpZiAoY29ubmVjdGVkID09PSB0cnVlKSB7XG5cdFx0JG5ldHdvcmsucmVtb3ZlQ2xhc3MoXCItc3RhdGUtLW9mZmxpbmVcIik7XG5cdH0gZWxzZSB7XG5cdFx0JG5ldHdvcmsuYWRkQ2xhc3MoXCItc3RhdGUtLW9mZmxpbmVcIik7XG5cdH1cbn07XG5cbi8vICQod2luZG93KS5vbihcIm9ubGluZSBvZmZsaW5lXCIsIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzKTtcbiJdfQ==
