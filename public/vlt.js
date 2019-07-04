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


    $.getJSON("https://emitremmus.com/-/vlt/departures?callback=?", {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiLCJzdGF0aW9uLWluZm8uanMiLCJsaW5lLWluZm8uanMiLCJnZXQtbG9jYXRpb24uanMiLCJuZWFyZXN0LXN0YXRpb24uanMiLCJuZXh0LWRlcGFydHVyZXMuanMiLCJzdGF0aW9uLWxpc3QuanMiLCJ0aGVtZS5qcyIsInN0YXJ0LmpzIl0sIm5hbWVzIjpbImN1ZSIsIiRwYW5lbCIsIiRzdGF0aW9uIiwiJHBlcm1pc3Npb24iLCIkbmV0d29yayIsIiRzdGF0dXMiLCJzdGF0aW9ucyIsInN0YXRpb25faW5kZXgiLCJmb3JFYWNoIiwic3RhdGlvbiIsInN0YXRpb25fbmFtZSIsImxpbmVzIiwibGluZV9pbmRleCIsImxpbmUiLCJsaW5lX25hbWUiLCJnZXRMb2NhdGlvbiIsImlzX2luaXRpYWwiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwiJCIsInJlbW92ZUNsYXNzIiwibmVhcmVzdF9zdGF0aW9uIiwibmVhcmVzdFN0YXRpb24iLCJuZXh0RGVwYXJ0dXJlcyIsImRlZzJyYWQiLCJkZWciLCJNYXRoIiwiUEkiLCJ1c2VyX2Nvb3JkaW5hdGVzIiwidXNlcl9sYXRpdHVkZSIsInVzZXJfbG9uZ2l0dWRlIiwiUiIsInNob3J0ZXN0X2Rpc3RhbmNlIiwic3RhdGlvbl9sYXRpdHVkZSIsInN0YXRpb25fbG9uZ2l0dWRlIiwieCIsImNvcyIsInkiLCJkaXN0YW5jZSIsInNxcnQiLCJmcm9tX2dwcyIsImRlcGFydHVyZXMiLCJjbGVhckludGVydmFsIiwid2luZG93Iiwib2ZmIiwidGV4dCIsImFkZENsYXNzIiwibGFzdFVwZGF0ZWQiLCIkYmFkZ2UiLCJjb25uZWN0ZWQiLCJvbkxpbmUiLCJzZWNvbmRzX3NpbmNlX3VwZGF0ZSIsIm1vbWVudCIsImRpZmYiLCJsYXN0X3VwZGF0ZWQiLCJmcm9tTm93IiwiZW1wdHkiLCJhcHBlbmQiLCJnZXREYXRhIiwiZG9jdW1lbnQiLCJoaWRkZW4iLCJnZXRKU09OIiwiZG9uZSIsInJlc3BvbnNlIiwiZXRhX2NvdW50IiwiZGlyZWN0aW9ucyIsImRlcGFydHVyZXNfYnlfZGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwiZGlyZWN0aW9uX3RpdGxlIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJwdXNoIiwidHJhaW4iLCJlbnYiLCJub3ciLCJvcGVyYXRpb25fc3RhcnRfdGltZSIsIm9wZXJhdGlvbl9lbmRfdGltZSIsImlzQWZ0ZXIiLCJpc0JlZm9yZSIsIiRkZXBhcnR1cmVzIiwiJHRpdGxlIiwib24iLCJhcHBlbmRUbyIsInNoYXJlX3RleHQiLCIkZGlyZWN0aW9uIiwiZXRhcyIsInNvcnQiLCJhIiwiYiIsIiR0cmFpbiIsIiRsaW5lIiwiaXNfYXBwcm9hY2hpbmciLCJkZXBhcnR1cmVfY291bnRkb3duIiwicm91bmQiLCJkZXBhcnR1cmVfdGltZSIsImZvcm1hdCIsImNzcyIsImF0dHIiLCJodG1sIiwib3JpZ2luX2FuZF9kZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uIiwiJGNoYW5nZSIsIiRidXR0b24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlV2luZG93Iiwic2V0SW50ZXJ2YWwiLCIkc3RhdGlvbnMiLCIkbmVhcmVzdCIsIiRsaW5lcyIsIiRzaGllbGQiLCJ0b2dnbGVDbGFzcyIsInNjcm9sbF90b3BfcG9zaXRpb24iLCJzY3JvbGxUb3AiLCJUaGVtZSIsInRoZW1lX29yZGVyIiwidGhlbWVfc2V0dGluZ3MiLCJzZXQiLCJuZXdfdGhlbWUiLCJvbGRfdGhlbWUiLCJjdXJyZW50X3RoZW1lIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJnZXRJdGVtIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJyZXBsYWNlIiwidGhlbWVfcG9zaXRpb24iLCJpbmRleE9mIiwicGVybWlzc2lvbnMiLCJxdWVyeSIsInRoZW4iLCJwZXJtaXNzaW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInJlZ2lzdHJhdGlvbiIsImVycm9yIiwidXBkYXRlQ29ubmVjdGlvblN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFBQSxHQUFBLEdBQUEsRUFBQTtBQUNBLElBQUFDLE1BQUEsRUFBQUMsUUFBQSxFQUFBQyxXQUFBLEVBQUFDLFFBQUEsRUFBQUMsT0FBQTtBQ0RBLElBQUFDLFFBQUEsR0FBQSxDQUNBO0FBQ0EsVUFBQSxnQkFEQTtBQUVBLFFBQUEsZ0JBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FEQSxFQVNBO0FBQ0E7QUFDQSxVQUFBLFVBRkE7QUFHQSxRQUFBLFVBSEE7QUFJQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FMQTtBQU1BO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFQQSxDQVRBLEVBa0JBO0FBQ0EsVUFBQSxZQURBO0FBRUEsUUFBQSxZQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbEJBLEVBMEJBO0FBQ0EsVUFBQSxTQURBO0FBRUEsUUFBQSxTQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBMUJBLEVBa0NBO0FBQ0EsVUFBQSxTQURBO0FBRUEsUUFBQSxTQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbENBLEVBMENBO0FBQ0EsVUFBQSxpQkFEQTtBQUVBLFFBQUEsaUJBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQTFDQSxFQWtEQTtBQUNBLFVBQUEsWUFEQTtBQUVBLFFBQUEsWUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQWxEQSxFQTBEQTtBQUNBLFVBQUEsU0FEQTtBQUVBLFFBQUEsU0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBMURBLEVBa0VBO0FBQ0EsVUFBQSxtQkFEQTtBQUVBLFFBQUEsbUJBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FsRUEsRUEwRUE7QUFDQTtBQUNBLFVBQUEsa0JBRkE7QUFHQSxRQUFBLGtCQUhBO0FBSUE7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBTEE7QUFNQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQVBBLENBMUVBLEVBbUZBO0FBQ0EsVUFBQSxTQURBO0FBRUEsUUFBQSxTQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbkZBLEVBMkZBO0FBQ0EsVUFBQSxRQURBO0FBRUEsUUFBQSxRQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBM0ZBLEVBbUdBO0FBQ0EsVUFBQSxVQURBO0FBRUEsUUFBQSxVQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0FuR0EsRUEyR0E7QUFDQSxVQUFBLG1CQURBO0FBRUEsUUFBQSxtQkFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBM0dBLEVBbUhBO0FBQ0EsVUFBQSxtQkFEQTtBQUVBLFFBQUEsbUJBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsaUJBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQW5IQSxFQTJIQTtBQUNBLFVBQUEsY0FEQTtBQUVBLFFBQUEsY0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGlCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQTNIQSxFQW1JQTtBQUNBLFVBQUEsVUFEQTtBQUVBLFFBQUEsVUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBbklBLEVBMklBO0FBQ0EsVUFBQSxlQURBO0FBRUEsUUFBQSxlQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBM0lBLEVBbUpBO0FBQ0EsVUFBQSxhQURBO0FBRUEsUUFBQSxhQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0FuSkEsRUEySkE7QUFDQSxVQUFBLFlBREE7QUFFQSxRQUFBLFlBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0EzSkEsRUFtS0E7QUFDQSxVQUFBLE9BREE7QUFFQSxRQUFBLE9BRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQW5LQSxFQTJLQTtBQUNBO0FBQ0EsVUFBQSxZQUZBO0FBR0EsUUFBQSxZQUhBO0FBSUE7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBTEE7QUFNQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBUEEsQ0EzS0EsRUFvTEE7QUFDQSxVQUFBLGNBREE7QUFFQSxRQUFBLGNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsaUJBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FwTEEsRUE0TEE7QUFDQSxVQUFBLGVBREE7QUFFQSxRQUFBLGVBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsaUJBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0E1TEEsRUFvTUE7QUFDQSxVQUFBLFdBREE7QUFFQSxRQUFBLFdBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQXBNQSxFQTRNQTtBQUNBLFVBQUEsa0JBREE7QUFFQSxRQUFBLGtCQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtB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clxubGV0ICRwYW5lbCwgJHN0YXRpb24sICRwZXJtaXNzaW9uLCAkbmV0d29yaywgJHN0YXR1cztcclxuIiwibGV0IHN0YXRpb25zID0gW1xuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQW50b25pbyBDYXJsb3NcIixcblx0XHRcImlkXCI6IFwiYW50b25pby1jYXJsb3NcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMiwgMzogMiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MTEzMTUzNDQzOTEzMTksIC00My4xNzIwNTA5OTc1OTgyNDFdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcIm5hbWVcIjogXCJDYW1lcmlub1wiLFxuXHRcdFwiaWRcIjogXCJjYW1lcmlub1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAzOiA4IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMTY5ODA0NjAyMjM4MiwgLTQzLjE4Mzk4MzYxNDkzMzQ4OV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFszXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ2FuZGVsw6FyaWFcIixcblx0XHRcImlkXCI6IFwiY2FuZGVsYXJpYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA2LCAzOiA2IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMTcyNTAyOTM4NDI1OSwgLTQzLjE3ODgwODY2NTQxODY3MV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ2FyaW9jYVwiLFxuXHRcdFwiaWRcIjogXCJjYXJpb2NhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDQsIDM6IDQgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTA3NDg0NTA3MjUyODExLCAtNDMuMTc2NjQ1NTE4MDM4OTE3XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDZW50cmFsXCIsXG5cdFx0XCJpZFwiOiBcImNlbnRyYWxcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogNSwgMzogMTAgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAyNzA0OTYwNzQ0OTUyLCAtNDMuMTkyNjI1MzE0Mzc3MzM4XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzIsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDaWRhZGUgZG8gU2FtYmFcIixcblx0XHRcImlkXCI6IFwiY2lkYWRlLWRvLXNhbWJhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDExIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NDE3OTk1NzEyODA2NywgLTQzLjE5Njg4NDA4MjA3ODQ3Nl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ2luZWzDom5kaWFcIixcblx0XHRcImlkXCI6IFwiY2luZWxhbmRpYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAzLCAzOiAzIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkxMDczNDAwMTg0MjI0MywgLTQzLjE3NTQyNTM4NzM2NDkzMl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ29sb21ib1wiLFxuXHRcdFwiaWRcIjogXCJjb2xvbWJvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDIgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTA1MTc1MjE5MDA5NDE1LCAtNDMuMTc4MDE2OTY4MjI4ODE4XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDb3JkZWlybyBkYSBHcmHDp2FcIixcblx0XHRcImlkXCI6IFwiY29yZGVpcm8tZGEtZ3JhY2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTMsIDI6IDggfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3MTA0NjI5OTIzMTE3LCAtNDMuMjA0MTc4NDAzNTMzNzAzXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHQvLyBcImRpc2FibGVkXCI6IHRydWUsXG5cdFx0XCJuYW1lXCI6IFwiQ3Jpc3RpYW5vIE90dG9uaVwiLFxuXHRcdFwiaWRcIjogXCJjcmlzdGlhbm8tb3R0b25pXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDM6IDkgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAzMDYxMjc4NDgwNjQ4LCAtNDMuMTkwNzQ5MTA5NDIxNDg5XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzIsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJFcXVhZG9yXCIsXG5cdFx0XCJpZFwiOiBcImVxdWFkb3JcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTgsIDI6IDExIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5Nzg5NDU2NDY4Nzc4MiwgLTQzLjIwNDgwNTAxNDQ0MDgxNV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiR2FtYm9hXCIsXG5cdFx0XCJpZFwiOiBcImdhbWJvYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNiwgMjogNiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTc5NTk0MDgzNzI4NDUsIC00My4xOTkzMzY2ODMyNDYzMDFdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkhhcm1vbmlhXCIsXG5cdFx0XCJpZFwiOiBcImhhcm1vbmlhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE0IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NTc1NDQzNzI3MzM4NiwgLTQzLjE5MTQyNzYzOTU4NDQ5Nl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUGFyYWRhIGRvcyBNdXNldXNcIixcblx0XHRcImlkXCI6IFwicGFyYWRhLWRvcy1tdXNldXNcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogOCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTU5NDY1ODY4MDIyNjQsIC00My4xODE5NTU5ODA1ODEyNzJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlBhcmFkYSBkb3MgTmF2aW9zXCIsXG5cdFx0XCJpZFwiOiBcInBhcmFkYS1kb3MtbmF2aW9zXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDkgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk0MTM5NjI1MzAzODc1LCAtNDMuMTg3MTgxODMwNjE3NDRdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlBlcmVpcmEgUmVpc1wiLFxuXHRcdFwiaWRcIjogXCJwZXJlaXJhLXJlaXNcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTcsIDI6IDEwIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NjY0NzA2NDk2MDQzLCAtNDMuMjAxNzczMTExNTIzNTkzXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQcmHDp2EgWFZcIixcblx0XHRcImlkXCI6IFwicHJhY2EteHZcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogMSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDIwNzAxMjg5NDU4NDgsIC00My4xNzMxMTczOTU3ODM4NzZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlByYWlhIEZvcm1vc2FcIixcblx0XHRcImlkXCI6IFwicHJhaWEtZm9ybW9zYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMCwgMjogMTMgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAzMTc3MTUyMzg4MDU3LCAtNDMuMjA4MTYxOTY0OTAyMzAzXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQcm92aWTDqm5jaWFcIixcblx0XHRcImlkXCI6IFwicHJvdmlkZW5jaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTUgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3NDg5OTIyMDE0MzgzLCAtNDMuMTk2NzAxNDAwODkwMDM1XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJSb2RvdmnDoXJpYVwiLFxuXHRcdFwiaWRcIjogXCJyb2RvdmlhcmlhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE5LCAyOiAxMiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTg4MDU1NzQyNTE3OTksIC00My4yMDczNDI5NDE0NzU5ODZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlNhYXJhXCIsXG5cdFx0XCJpZFwiOiBcInNhYXJhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDQgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTA1OTEyMTA4NDYwMjUzLCAtNDMuMTg3MzIwNzgyMjI4MjA1XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzJdXG5cdH0sXG5cdHtcblx0XHQvLyBcImRpc2FibGVkXCI6IHRydWUsXG5cdFx0XCJuYW1lXCI6IFwiU2FudGEgUml0YVwiLFxuXHRcdFwiaWRcIjogXCJzYW50YS1yaXRhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDM6IDcgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAwNTk0MTY3NDEwNjQ5LCAtNDMuMTgxNTA5MDQ5ODU0MjA2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTYW50byBDcmlzdG9cIixcblx0XHRcImlkXCI6IFwic2FudG8tY3Jpc3RvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEyLCAyOiA3IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NTMyNzI4MjAwMjE0NiwgLTQzLjIwMDI1OTE4MTc1NTc0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTYW50b3MgRHVtb250XCIsXG5cdFx0XCJpZFwiOiBcInNhbnRvcy1kdW1vbnRcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMSwgMzogMSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MTIyODY4NzQ5NjI0MDEsIC00My4xNjc2MzIyNTk1NDU4NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU8OjbyBCZW50b1wiLFxuXHRcdFwiaWRcIjogXCJzYW8tYmVudG9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTg2NDgwOTYwNTEwMTIsIC00My4xNzk5NjQzMTE3NjQ4ODRdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlNldGUgZGUgU2V0ZW1icm9cIixcblx0XHRcImlkXCI6IFwic2V0ZS1kZS1zZXRlbWJyb1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA1LCAzOiA1IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNTMwNTkwMDk3Nzg5NywgLTQzLjE3NzQ2MzgxNjM0NjkyMl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiVGlyYWRlbnRlc1wiLFxuXHRcdFwiaWRcIjogXCJ0aXJhZGVudGVzXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDMgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTA2NTc4MjIyMDI2MTE2LCAtNDMuMTgyODU0MjM2NTU3ODAyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJVdG9waWEgQXF1YVJpb1wiLFxuXHRcdFwiaWRcIjogXCJ1dG9waWEtYXF1YXJpb1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTMwOTU0NzE5OTk2MTIsIC00My4xOTAyMzY5MDcyMTMyMTldLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlZpbGEgT2zDrW1waWNhXCIsXG5cdFx0XCJpZFwiOiBcInZpbGEtb2xpbXBpY2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogOSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTkwNTY1NzI2NDY1MzMsIC00My4xOTk2NDM1Mjk0OTUyOTddLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fVxuXTtcblxubGV0IHN0YXRpb25faW5kZXggPSB7fTtcbnN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcblx0bGV0IHN0YXRpb25fbmFtZSA9IHN0YXRpb25bXCJuYW1lXCJdO1xuXHRzdGF0aW9uX2luZGV4W3N0YXRpb25fbmFtZV0gPSBzdGF0aW9uO1xufSk7XG4iLCJsZXQgbGluZXMgPSBbXG5cdHtcblx0XHRcImlkXCI6IDEsXG5cdFx0XCJuYW1lXCI6IFwiTGluaGEgMVwiLFxuXHRcdFwiY29sb3JcIjogXCIjNjhiOWZiXCIsXG5cdFx0Ly8gXCJkaXJlY3Rpb25zXCI6IFtcblx0XHQvLyBcdFwiU2FudG9zIER1bW9udFwiLFxuXHRcdC8vIFx0XCJQcmFpYSBGb3Jtb3NhXCJcblx0XHQvLyBdXG5cdH0sXG5cdHtcblx0XHRcImlkXCI6IDIsXG5cdFx0XCJuYW1lXCI6IFwiTGluaGEgMlwiLFxuXHRcdFwiY29sb3JcIjogXCIjNzNjYTNmXCIsXG5cdFx0Ly8gXCJkaXJlY3Rpb25zXCI6IFtcblx0XHQvLyBcdFwiUHJhw6dhIFhWXCIsXG5cdFx0Ly8gXHRcIlByYWlhIEZvcm1vc2FcIlxuXHRcdC8vIF1cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcImlkXCI6IDMsXG5cdFx0XCJuYW1lXCI6IFwiTGluaGEgM1wiLFxuXHRcdFwiY29sb3JcIjogXCIjZjNhMjMwXCIsXG5cdFx0Ly8gXCJkaXJlY3Rpb25zXCI6IFtcblx0XHQvLyBcdFwiU2FudG9zIER1bW9udFwiLFxuXHRcdC8vIFx0XCJDZW50cmFsXCJcblx0XHQvLyBdXG5cdH1cbl07XG5cbmxldCBsaW5lX2luZGV4ID0geyB9O1xubGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuXHRsZXQgbGluZV9uYW1lID0gbGluZVtcIm5hbWVcIl07XG5cdGxpbmVfaW5kZXhbbGluZV9uYW1lXSA9IGxpbmU7XG59KTtcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIGdldCBsb2NhdGlvbiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gUGVnYSBhIGxvY2FsaXphw6fDo28gZG8gdXN1w6FyaW9cbmNvbnN0IGdldExvY2F0aW9uID0gKGlzX2luaXRpYWwgPSBmYWxzZSkgPT4ge1xuXHRuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xuXHRcdC8vIFNlIHZpZXIgZG8gbW9kbyBpbmljaWFsLCBlbmNlcnJhIGVsZVxuXHRcdGlmIChpc19pbml0aWFsKSB7XG5cdFx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1pbml0aWFsXCIpO1xuXHRcdFx0JHBhbmVsLnJlbW92ZUNsYXNzKFwiLXN0YXRlLS1wZXJtaXNzaW9uXCIpO1xuXHRcdH1cblxuXHRcdC8vIERlc2NvYnJlIGEgZXN0YcOnw6NvIG1haXMgcHLDs3hpbWEgZSBwcm9jdXJhIGFzIHByw7N4aW1hcyBwYXJ0aWRhc1xuXHRcdGxldCBuZWFyZXN0X3N0YXRpb24gPSBuZWFyZXN0U3RhdGlvbihbcG9zaXRpb25bXCJjb29yZHNcIl1bXCJsYXRpdHVkZVwiXSwgcG9zaXRpb25bXCJjb29yZHNcIl1bXCJsb25naXR1ZGVcIl1dKTtcblx0XHRuZXh0RGVwYXJ0dXJlcyhuZWFyZXN0X3N0YXRpb24sIHRydWUpO1xuXHR9KTtcbn07XG4iLCIvLyBFc3Rhw6fDo28gbWFpcyBwcsOzeGltYVxuY29uc3QgZGVnMnJhZCA9IChkZWcpID0+IHtcblx0cmV0dXJuIGRlZyAqIChNYXRoLlBJIC8gMTgwKTtcbn07XG5cbmNvbnN0IG5lYXJlc3RTdGF0aW9uID0gKHVzZXJfY29vcmRpbmF0ZXMpID0+IHtcblx0bGV0IHVzZXJfbGF0aXR1ZGUgPSBkZWcycmFkKHVzZXJfY29vcmRpbmF0ZXNbMF0pO1xuXHRsZXQgdXNlcl9sb25naXR1ZGUgPSBkZWcycmFkKHVzZXJfY29vcmRpbmF0ZXNbMV0pO1xuXG5cdGxldCBSID0gNjM3MTtcblxuXHRsZXQgc2hvcnRlc3RfZGlzdGFuY2UgPSBudWxsO1xuXHRsZXQgbmVhcmVzdF9zdGF0aW9uID0gbnVsbDtcblxuXHRzdGF0aW9ucy5mb3JFYWNoKChzdGF0aW9uKSA9PiB7XG5cdFx0aWYgKCFzdGF0aW9uW1wiZGlzYWJsZWRcIl0pIHtcblx0XHRcdGxldCBzdGF0aW9uX2xhdGl0dWRlID0gZGVnMnJhZChzdGF0aW9uW1wiY29vcmRpbmF0ZXNcIl1bMF0pO1xuXHRcdFx0bGV0IHN0YXRpb25fbG9uZ2l0dWRlID0gZGVnMnJhZChzdGF0aW9uW1wiY29vcmRpbmF0ZXNcIl1bMV0pO1xuXG5cdFx0XHRsZXQgeCA9IChzdGF0aW9uX2xvbmdpdHVkZSAtIHVzZXJfbG9uZ2l0dWRlKSAqIE1hdGguY29zKCh1c2VyX2xhdGl0dWRlICsgc3RhdGlvbl9sYXRpdHVkZSkgLyAyKTtcblx0XHRcdGxldCB5ID0gKHN0YXRpb25fbGF0aXR1ZGUgLSB1c2VyX2xhdGl0dWRlKTtcblx0XHRcdGxldCBkaXN0YW5jZSA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KSAqIFI7XG5cblx0XHRcdGlmICghc2hvcnRlc3RfZGlzdGFuY2UgfHwgZGlzdGFuY2UgPCBzaG9ydGVzdF9kaXN0YW5jZSkge1xuXHRcdFx0XHRzaG9ydGVzdF9kaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRuZWFyZXN0X3N0YXRpb24gPSBzdGF0aW9uO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIG5lYXJlc3Rfc3RhdGlvbjtcbn07XG4iLCIvLyBQcsOzeGltYXMgcGFydGlkYXNcbmNvbnN0IG5leHREZXBhcnR1cmVzID0gKHN0YXRpb24sIGZyb21fZ3BzID0gZmFsc2UpID0+IHtcblx0bGV0IGRlcGFydHVyZXM7XG5cblx0Ly8gRGVzbGlnYSBpbnRlcnZhbG9zIGUgZXZlbnRvcyBleGlzdGVudGVzXG5cdGNsZWFySW50ZXJ2YWwoY3VlW1wiaW50ZXJ2YWwtZGVwYXJ0dXJlc1wiXSk7XG5cdGNsZWFySW50ZXJ2YWwoY3VlW1wiaW50ZXJ2YWwtbGFzdC11cGRhdGVkXCJdKTtcblx0JCh3aW5kb3cpLm9mZihcInZpc2liaWxpdHljaGFuZ2Ugb25saW5lXCIpO1xuXG5cdC8vIENvbG9jYSBvIG5vbWUgZGEgZXN0YcOnw6NvIG5vIGFwcGJhclxuXHQkKFwiLnN0YXRpb25zIGgxIC5zdGF0aW9uLW5hbWVcIikudGV4dChzdGF0aW9uW1wibmFtZVwiXSk7XG5cblx0Ly8gTW9zdHJhIGFuaW1hw6fDo28gZGUgbG9hZFxuXHQkcGFuZWwuYWRkQ2xhc3MoXCItc3RhdGUtLWxvYWRpbmdcIik7XG5cblxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0Ly8gQXR1YWxpemHDp8Ojb1xuXHRjb25zdCBsYXN0VXBkYXRlZCA9ICgpID0+IHtcblx0XHRsZXQgJGJhZGdlID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJzdGF0dXMtYmFkZ2VcIik7XG5cdFx0bGV0IGNvbm5lY3RlZCA9IG5hdmlnYXRvci5vbkxpbmU7XG5cblx0XHQvLyBUZW1wbyBlbSBzZWd1bmRvcyBkZXNkZSBhIMO6bHRpbWEgYXR1YWxpemHDp8Ojb1xuXHRcdGxldCBzZWNvbmRzX3NpbmNlX3VwZGF0ZSA9IG1vbWVudCgpLmRpZmYoZGVwYXJ0dXJlc1tcImxhc3RVcGRhdGVkXCJdLCBcInNlY29uZHNcIik7XG5cblx0XHQvLyBTZSB0aXZlciBzaWRvIGF0dWFsaXphZG8gaMOhIG1lbm9zIGRlIDYwIHNlZ3VuZG9zLCBtb3N0cmEgVGVtcG8gUmVhbFxuXHRcdGlmIChzZWNvbmRzX3NpbmNlX3VwZGF0ZSA8PSA2MCkge1xuXHRcdFx0JGJhZGdlLmFkZENsYXNzKFwiLXN0YXRlLS1yZWFsLXRpbWVcIikudGV4dChcIlRlbXBvIHJlYWxcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBsYXN0X3VwZGF0ZWQgPSBcIkF0dWFsaXphZG8gXCIgKyBtb21lbnQoZGVwYXJ0dXJlc1tcImxhc3RVcGRhdGVkXCJdKS5mcm9tTm93KHRydWUpICsgXCIgYXRyw6FzXCI7XG5cdFx0XHQkYmFkZ2UudGV4dChsYXN0X3VwZGF0ZWQpO1xuXHRcdH1cblxuXHRcdCRzdGF0dXMuZW1wdHkoKS5hcHBlbmQoJGJhZGdlKTtcblx0fTtcblxuXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXHQvLyBDb25zdWx0YSBkb3MgZGFkb3Ncblx0Y29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcblx0XHQvLyBTw7MgY2FycmVnYSBzZSBlc3RpdmVyIGNvbSBmb2NvXG5cdFx0aWYgKGRvY3VtZW50LmhpZGRlbiA9PT0gdHJ1ZSB8fCBuYXZpZ2F0b3Iub25MaW5lID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIENhcnJlZ2Egb3MgZGFkb3Ncblx0XHQkLmdldEpTT04oXCJodHRwczovL2VtaXRyZW1tdXMuY29tLy0vdmx0L2RlcGFydHVyZXM/Y2FsbGJhY2s9P1wiLCB7XG5cdFx0XHRcInN0YXRpb25cIjogc3RhdGlvbltcImlkXCJdLFxuXHRcdFx0Ly8gXCJlbnZcIjogXCJkZXZcIlxuXHRcdH0pLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRkZXBhcnR1cmVzID0gcmVzcG9uc2U7XG5cblx0XHRcdGxldCBldGFfY291bnQgPSAwO1xuXHRcdFx0bGV0IGRpcmVjdGlvbnMgPSBbIF07XG5cdFx0XHRsZXQgZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb24gPSB7IH07XG5cblx0XHRcdC8vIE9yZ2FuaXphIGFzIHBhcnRpZGFzIHBvciBkZXN0aW5vXG5cdFx0XHRkZXBhcnR1cmVzW1wibGluZXNcIl0uZm9yRWFjaCgobGluZSkgPT4ge1xuXHRcdFx0XHRsaW5lW1wiZGlyZWN0aW9uc1wiXS5mb3JFYWNoKChkaXJlY3Rpb24pID0+IHtcblx0XHRcdFx0XHRsZXQgZGlyZWN0aW9uX3RpdGxlID0gZGlyZWN0aW9uW1wibmFtZVwiXTtcblx0XHRcdFx0XHRldGFfY291bnQgKz0gZGlyZWN0aW9uW1wiZXRhc1wiXS5sZW5ndGg7XG5cblx0XHRcdFx0XHRpZiAoZGlyZWN0aW9uW1wiZXRhc1wiXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWRpcmVjdGlvbnMuaW5jbHVkZXMoZGlyZWN0aW9uX3RpdGxlKSkge1xuXHRcdFx0XHRcdFx0XHRkaXJlY3Rpb25zLnB1c2goZGlyZWN0aW9uX3RpdGxlKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKCFkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbltkaXJlY3Rpb25fdGl0bGVdKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0gPSBbIF07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGRpcmVjdGlvbltcImV0YXNcIl0uZm9yRWFjaCgodHJhaW4pID0+IHtcblx0XHRcdFx0XHRcdFx0dHJhaW5bXCJsaW5lXCJdID0gbGluZVtcIm5hbWVcIl07XG5cdFx0XHRcdFx0XHRcdGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0ucHVzaCh0cmFpbik7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIFNlIG7Dum1lcm8gZGUgcHLDs3hpbWFzIHBhcnRpZGFzIGZvciB6ZXJvLFxuXHRcdFx0Ly8gY29uZmVyZSBzZSBhaW5kYSBlc3TDoSBkZW50cm8gZG8gaG9yw6FyaW8gZGUgZnVuY2lvbmFtZW50b1xuXHRcdFx0aWYgKGV0YV9jb3VudCA9PT0gMCAmJiBlbnYgPT09IFwicHJvZHVjdGlvblwiKSB7XG5cdFx0XHRcdGxldCBub3cgPSBtb21lbnQoKTtcblx0XHRcdFx0bGV0IG9wZXJhdGlvbl9zdGFydF90aW1lID0gbW9tZW50KFwiMDY6MDBcIiwgXCJISDptbVwiKTtcblx0XHRcdFx0bGV0IG9wZXJhdGlvbl9lbmRfdGltZSA9IG1vbWVudChcIjAwOjAwXCIsIFwiSEg6bW1cIik7XG5cblx0XHRcdFx0aWYgKG5vdy5pc0FmdGVyKG9wZXJhdGlvbl9lbmRfdGltZSkgJiYgbm93LmlzQmVmb3JlKG9wZXJhdGlvbl9zdGFydF90aW1lKSkge1xuXHRcdFx0XHRcdCRwYW5lbC5hZGRDbGFzcyhcIi1zdGF0ZS0tY2xvc2VkXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBNb250YSBhcyBwYXJ0aWRhc1xuXHRcdFx0XHRsZXQgJGRlcGFydHVyZXMgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImRlcGFydHVyZXNcIik7XG5cdFx0XHRcdGxldCAkdGl0bGUgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImRlcGFydHVyZXMtdGl0bGVcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRcdFx0fSkuYXBwZW5kVG8oJGRlcGFydHVyZXMpO1xuXHRcdFx0XHQkKFwiPHNwYW4gLz5cIikudGV4dChcIlByw7N4aW1vcyB0cmVuc1wiKS5hcHBlbmRUbygkdGl0bGUpO1xuXG5cdFx0XHRcdC8vIFRleHRvIHBhcmEgY29tcGFydGlsaGFtZW50b1xuXHRcdFx0XHRsZXQgc2hhcmVfdGV4dCA9IFtcIlByw7N4aW1vcyB0cmVuc1wiLCBcIvCfmokgKlwiICsgc3RhdGlvbltcIm5hbWVcIl0gKyBcIipcIiwgXCJcIl07XG5cblx0XHRcdFx0Ly8gZGlyZWN0aW9ucy5zb3J0KCk7XG5cdFx0XHRcdGRpcmVjdGlvbnMuZm9yRWFjaCgoZGlyZWN0aW9uKSA9PiB7XG5cdFx0XHRcdFx0bGV0ICRkaXJlY3Rpb24gPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImRpcmVjdGlvblwiKS5hcHBlbmRUbygkZGVwYXJ0dXJlcyk7XG5cdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJkaXJlY3Rpb24tY2FwdGlvblwiKS50ZXh0KFwiRGVzdGlub1wiKS5hcHBlbmRUbygkZGlyZWN0aW9uKTtcblxuXHRcdFx0XHRcdGxldCBldGFzID0gZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb25bZGlyZWN0aW9uXTtcblx0XHRcdFx0XHRldGFzLnNvcnQoKGEsIGIpID0+IHsgcmV0dXJuIGFbXCJzZWNvbmRzXCJdIC0gYltcInNlY29uZHNcIl0gfSk7XG5cblx0XHRcdFx0XHRldGFzLmZvckVhY2goKHRyYWluKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgJHRyYWluID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpblwiKS5hcHBlbmRUbygkZGlyZWN0aW9uKTtcblx0XHRcdFx0XHRcdGxldCAkbGluZSA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW4tbGluZVwiKS5hcHBlbmRUbygkdHJhaW4pO1xuXHRcdFx0XHRcdFx0bGV0IGlzX2FwcHJvYWNoaW5nID0gdHJhaW5bXCJzZWNvbmRzXCJdIDwgMzA7XG5cblx0XHRcdFx0XHRcdGxldCBsaW5lID0gbGluZV9pbmRleFt0cmFpbltcImxpbmVcIl1dO1xuXHRcdFx0XHRcdFx0bGV0IGRlcGFydHVyZV9jb3VudGRvd24gPSAoaXNfYXBwcm9hY2hpbmc/IFwiQWdvcmFcIiA6IE1hdGgucm91bmQodHJhaW5bXCJzZWNvbmRzXCJdIC8gNjApICsgXCI8c3Bhbj5taW48L3NwYW4+XCIpO1xuXHRcdFx0XHRcdFx0bGV0IGRlcGFydHVyZV90aW1lID0gbW9tZW50KHRyYWluW1wiYXJyaXZhbFRpbWVcIl0pLmZvcm1hdChcIkhIOm1tXCIpO1xuXG5cdFx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImxpbmUtc2hpZWxkXCIpLmNzcyhcImNvbG9yXCIsIGxpbmVbXCJjb2xvclwiXSkuYXR0cihcInRpdGxlXCIsIFwiTGluaGEgXCIgKyBsaW5lW1wiaWRcIl0pLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKS50ZXh0KGxpbmVbXCJpZFwiXSkuYXBwZW5kVG8oJGxpbmUpO1xuXHRcdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpbi1kaXJlY3Rpb25cIikuYXR0cihcInRpdGxlXCIsIFwiVHJlbSBcIiArIHRyYWluW1widHJhaW5cIl0pLnRleHQoZGlyZWN0aW9uKS5hcHBlbmRUbygkdHJhaW4pO1xuXHRcdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpbi1ldGFcIikuYXR0cihcInRpdGxlXCIsIGRlcGFydHVyZV90aW1lKS5odG1sKGRlcGFydHVyZV9jb3VudGRvd24pLmFwcGVuZFRvKCR0cmFpbik7XG5cblx0XHRcdFx0XHRcdGlmIChpc19hcHByb2FjaGluZykge1xuXHRcdFx0XHRcdFx0XHQkdHJhaW4uYWRkQ2xhc3MoXCItc3RhdGUtLWFwcHJvYWNoaW5nXCIpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBUZXh0byBwYXJhIGNvbXBhcnRpbGhhbWVudG9cblx0XHRcdFx0XHRcdHNoYXJlX3RleHQucHVzaChcIkxcIiArIGxpbmVbXCJpZFwiXSArIFwiIFwiICsgZGlyZWN0aW9uICsgXCIgXCIgKyBkZXBhcnR1cmVfdGltZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIEVzdGFkbyBkYSBjb25leMOjbyBlIGhvcmEgZGEgw7psdGltYSBhdHVhbGl6YcOnw6NvXG5cdFx0XHRcdCRzdGF0dXMgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInN0YXR1c1wiKS5hcHBlbmRUbygkdGl0bGUpO1xuXHRcdFx0XHQvLyAkY29ubmVjdGlvbl9zdGF0dXMgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImNvbm5lY3Rpb24tc3RhdHVzXCIpLmFwcGVuZFRvKCRzdGF0dXMpO1xuXHRcdFx0XHQvLyAkbGFzdF91cGRhdGVkID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJsYXN0LXVwZGF0ZWRcIikuYXBwZW5kVG8oJHN0YXR1cyk7XG5cdFx0XHRcdGxhc3RVcGRhdGVkKCk7XG5cblx0XHRcdFx0Ly8gTGltcGEgbyBwYWluZWwgZSBpbnNlcmUgb3Mgbm92b3MgZGFkb3Ncblx0XHRcdFx0JHBhbmVsLnJlbW92ZUNsYXNzKFwiLXN0YXRlLS1jbG9zZWRcIik7XG5cdFx0XHRcdCRzdGF0aW9uLmVtcHR5KCkuYXBwZW5kKCRkZXBhcnR1cmVzKTtcblxuXHRcdFx0XHQvLyBDb21wYXJ0aWxoYXJcblx0XHRcdFx0Ly8gaWYgKG5hdmlnYXRvci5zaGFyZSkge1xuXHRcdFx0XHQvLyBcdGxldCBsb25ncHJlc3M7XG5cdFx0XHRcdC8vIFx0bGV0IGxvbmdwcmVzc19kZWxheSA9IDEzMDA7XG5cblx0XHRcdFx0Ly8gXHQkZGlyZWN0aW9uLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0XHQvLyBcdFx0bG9uZ3ByZXNzID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdC8vIFx0XHRcdG5hdmlnYXRvci5zaGFyZSh7XG5cdFx0XHRcdC8vIFx0XHRcdFx0dGV4dDogc2hhcmVfdGV4dC5qb2luKFwiXFxuXCIpXG5cdFx0XHRcdC8vIFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBcdFx0fSwgbG9uZ3ByZXNzX2RlbGF5KTtcblx0XHRcdFx0Ly8gXHR9KS5vbihcIm1vdXNldXAgbW91c2VvdXRcIiwgKCkgPT4ge1xuXHRcdFx0XHQvLyBcdFx0Ly8gY2xlYXJJbnRlcnZhbChsb25ncHJlc3MpO1xuXHRcdFx0XHQvLyBcdH0pO1xuXHRcdFx0XHQvLyB9XG5cdFx0XHR9XG5cblx0XHRcdCRwYW5lbC5yZW1vdmVDbGFzcyhcIi1zdGF0ZS0tbG9hZGluZ1wiKTtcblxuXHRcdFx0Ly8gQXMgcGFyYWRhcyBTZXRlIGRlIFNldGVtYnJvIGUgQ29sb21ibyBzw6NvIG11aXRvIHByw7N4aW1hcywgZW50w6NvIMOpIGNvbXVtIHF1ZSBhIGxvY2FsaXphw6fDo29cblx0XHRcdC8vIGRvIEdQUyBkbyB1c3XDoXJpbyBsZXZlIMOgIGVzdGHDp8OjbyBlcnJhZGEuIFBvciBpc3NvLCBuZXNzYXMgcGFyYWRhcywgw6kgbW9zdHJhZG8gdW0gYm90w6NvIHBhcmFcblx0XHRcdC8vIGZhY2lsaXRhciBhIHRyb2NhIGRlIHBhcmFkYS4gTyBib3TDo28gc8OzIMOpIGV4aWJpZG8gcXVhbmRvIG8gdXN1w6FyaW8gdmVtIGRhIGxvY2FsaXphw6fDo29cblx0XHRcdC8vIGF1dG9tw6F0aWNhIChuw6NvIG1vc3RyYSBzZSBwYXJhZGEgZm9pIGVzY29saGlkYSBubyBtZW51KVxuXHRcdFx0aWYgKGZyb21fZ3BzID09PSB0cnVlICYmIFtcInNldGUtZGUtc2V0ZW1icm9cIiwgXCJjb2xvbWJvXCJdLmluY2x1ZGVzKHN0YXRpb25bXCJpZFwiXSkpIHtcblx0XHRcdFx0bGV0IG9yaWdpbl9hbmRfZGVzdGluYXRpb24gPSB7XG5cdFx0XHRcdFx0XCJzZXRlLWRlLXNldGVtYnJvXCI6IHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIkNvbG9tYm9cIixcblx0XHRcdFx0XHRcdFwiaWRcIjogXCJjb2xvbWJvXCJcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFwiY29sb21ib1wiOiB7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJTZXRlIGRlIFNldGVtYnJvXCIsXG5cdFx0XHRcdFx0XHRcImlkXCI6IFwic2V0ZS1kZS1zZXRlbWJyb1wiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGxldCBkZXN0aW5hdGlvbiA9IG9yaWdpbl9hbmRfZGVzdGluYXRpb25bc3RhdGlvbltcImlkXCJdXTtcblxuXHRcdFx0XHRsZXQgJGNoYW5nZSA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiY2hhbmdlLXN0YXRpb25cIikuYXBwZW5kVG8oJHN0YXRpb24pO1xuXHRcdFx0XHRsZXQgJGJ1dHRvbiA9ICQoXCI8YSAvPlwiKS5hZGRDbGFzcyhcImJ1dHRvblwiKS5hdHRyKFwiaHJlZlwiLCBcIiNcIikuYXBwZW5kVG8oJGNoYW5nZSk7XG5cdFx0XHRcdCQoXCI8aSAvPlwiKS5hZGRDbGFzcyhcIm1hdGVyaWFsLWljb25zXCIpLnRleHQoXCJuZWFyX21lXCIpLmFwcGVuZFRvKCRidXR0b24pO1xuXHRcdFx0XHQkKFwiPHNwYW4gLz5cIikudGV4dChcIkVzdMOhIGVtXCIpLmFwcGVuZFRvKCRidXR0b24pO1xuXHRcdFx0XHQkKFwiPHN0cm9uZyAvPlwiKS50ZXh0KGRlc3RpbmF0aW9uW1wibmFtZVwiXSArIFwiP1wiKS5hcHBlbmRUbygkYnV0dG9uKTtcblxuXHRcdFx0XHQkYnV0dG9uLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRuZXh0RGVwYXJ0dXJlcyhkZXN0aW5hdGlvbik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdC8vIEF0dWFsaXphw6fDo29cblx0Y29uc3QgdXBkYXRlV2luZG93ID0gKCkgPT4ge1xuXHRcdGlmIChkb2N1bWVudC5oaWRkZW4gPT09IGZhbHNlICYmIG5hdmlnYXRvci5vbkxpbmUgPT09IHRydWUpIHtcblx0XHRcdGxhc3RVcGRhdGVkKCk7XG5cdFx0XHRnZXREYXRhKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIENyaWEgbm92b3MgaW50ZXJ2YWxvcyBlIGV2ZW50b3Ncblx0JCh3aW5kb3cpLm9uKFwib25saW5lIHZpc2liaWxpdHljaGFuZ2VcIiwgdXBkYXRlV2luZG93KTtcblx0aWYgKGVudiA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcblx0XHRjdWVbXCJpbnRlcnZhbC1kZXBhcnR1cmVzXCJdID0gc2V0SW50ZXJ2YWwoZ2V0RGF0YSwgMTUwMDApO1xuXHRcdGN1ZVtcImludGVydmFsLWxhc3QtdXBkYXRlZFwiXSA9IHNldEludGVydmFsKGxhc3RVcGRhdGVkLCA1MDAwKTtcblx0fVxuXG5cdGdldERhdGEoKTtcbn07XG4iLCIkKGZ1bmN0aW9uKCkge1xuXHQvLyBNb250YSBsaXN0YSBkZSBwYXJhZGFzIGUgZXN0YcOnw7Vlc1xuXHRsZXQgJHN0YXRpb25zID0gJChcIi5zdGF0aW9ucyB1bFwiKTtcblxuXHRsZXQgJG5lYXJlc3QgPSAkKFwiPGEgLz5cIikuYXR0cihcImhyZWZcIiwgXCIjXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQkKFwiLnN0YXRpb25zIGgxIC5zdGF0aW9uLW5hbWVcIikudGV4dChcIlwiKTtcblx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHRcdGdldExvY2F0aW9uKCk7XG5cdH0pLmFwcGVuZFRvKCRzdGF0aW9ucyk7XG5cdCQoXCI8aSAvPlwiKS5hZGRDbGFzcyhcIm1hdGVyaWFsLWljb25zXCIpLnRleHQoXCJuZWFyX21lXCIpLmFwcGVuZFRvKCRuZWFyZXN0KTtcblx0JChcIjxzcGFuIC8+XCIpLnRleHQoXCJMb2NhbGl6YXIgZXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcIikuYXBwZW5kVG8oJG5lYXJlc3QpO1xuXG5cdCQoXCI8bGkgLz5cIikuYWRkQ2xhc3MoXCJuZWFyZXN0LXN0YXRpb25cIikuYXBwZW5kKCRuZWFyZXN0KS5hcHBlbmRUbygkc3RhdGlvbnMpO1xuXG5cdHN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcblx0XHRsZXQgJHN0YXRpb24gPSAkKFwiPGEgLz5cIikuYXR0cihcImhyZWZcIiwgXCIjXCIgKyBzdGF0aW9uW1wiaWRcIl0pO1xuXG5cdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJzdGF0aW9uLW5hbWVcIikudGV4dChzdGF0aW9uW1wibmFtZVwiXSkuYXBwZW5kVG8oJHN0YXRpb24pO1xuXG5cdFx0bGV0ICRsaW5lcyA9ICQoXCI8dWwgLz5cIikuYWRkQ2xhc3MoXCJzdGF0aW9uLWxpbmVzXCIpLmFwcGVuZFRvKCRzdGF0aW9uKTtcblx0XHRsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdFx0XHRsZXQgJGxpbmUgPSAkKFwiPGxpIC8+XCIpLmFwcGVuZFRvKCRsaW5lcyk7XG5cdFx0XHRpZiAoc3RhdGlvbltcImxpbmVzXCJdLmluY2x1ZGVzKGxpbmVbXCJpZFwiXSkpIHtcblx0XHRcdFx0bGV0ICRzaGllbGQgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImxpbmUtc2hpZWxkXCIpLmNzcyhcImNvbG9yXCIsIGxpbmVbXCJjb2xvclwiXSkudGV4dChsaW5lW1wiaWRcIl0pLmFwcGVuZFRvKCRsaW5lKTtcblxuXHRcdFx0XHRpZiAobGluZVtcImRpc2FibGVkXCJdKSB7XG5cdFx0XHRcdFx0JHNoaWVsZC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSkuYWRkQ2xhc3MoXCItc3RhdGUtLWRpc2FibGVkXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoIXN0YXRpb25bXCJkaXNhYmxlZFwiXSkge1xuXHRcdFx0JHN0YXRpb24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0bmV4dERlcGFydHVyZXMoc3RhdGlvbik7XG5cdFx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHN0YXRpb24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Ly8gJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRcdH0pO1xuXHRcdFx0JHN0YXRpb24uYWRkQ2xhc3MoXCItc3RhdGUtLWRpc2FibGVkXCIpO1xuXHRcdH1cblxuXHRcdCQoXCI8bGkgLz5cIikuYXBwZW5kKCRzdGF0aW9uKS5hcHBlbmRUbygkc3RhdGlvbnMpO1xuXHR9KTtcblxuXHQvLyBOYXZlZ2HDp8Ojb1xuXHQkKFwiLmFwcGJhclwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcblx0XHQkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHR9KTtcblxuXHQkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgKGV2ZW50KSA9PiB7XG5cdFx0bGV0IHNjcm9sbF90b3BfcG9zaXRpb24gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cblx0XHRpZiAoc2Nyb2xsX3RvcF9wb3NpdGlvbiA+PSAxMikge1xuXHRcdFx0JChcImJvZHlcIikuYWRkQ2xhc3MoXCItbW9kZS0tc2Nyb2xsXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1zY3JvbGxcIik7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyB0aGVtZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmxldCBUaGVtZSA9ICgoKSA9PiB7XHJcbiAgICBsZXQgdGhlbWVfb3JkZXIgPSBbXHJcbiAgICAgICAgXCJhdXRvXCIsXHJcbiAgICAgICAgXCJsaWdodFwiLFxyXG4gICAgICAgIFwiZGFya1wiXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCB0aGVtZV9zZXR0aW5ncyA9IHtcclxuICAgICAgICBcImF1dG9cIjoge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGVtYSBhdXRvbcOhdGljb1wiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJicmlnaHRuZXNzX2F1dG9cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsaWdodFwiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUZW1hIGNsYXJvXCIsXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImJyaWdodG5lc3NfNVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRhcmtcIjoge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGVtYSBlc2N1cm9cIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiYnJpZ2h0bmVzc180XCJcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgc2V0ID0gKG5ld190aGVtZSwgb2xkX3RoZW1lKSA9PiB7XHJcbiAgICAgICAgY3VycmVudF90aGVtZSA9IG5ld190aGVtZTtcclxuXHJcbiAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWUgc3BhblwiKS50ZXh0KHRoZW1lX3NldHRpbmdzW25ld190aGVtZV1bXCJ0aXRsZVwiXSk7XHJcbiAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWUgaVwiKS50ZXh0KHRoZW1lX3NldHRpbmdzW25ld190aGVtZV1bXCJpY29uXCJdKTtcclxuXHJcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItdGhlbWUtLVwiICsgb2xkX3RoZW1lKS5hZGRDbGFzcyhcIi10aGVtZS0tXCIgKyBuZXdfdGhlbWUpO1xyXG5cclxuICAgICAgICAvLyBTYWx2YSBjb25maWd1cmHDp8OjbyBubyBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBpZiAobmV3X3RoZW1lID09PSBcImF1dG9cIikge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRoZW1lXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgbmV3X3RoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENvbmZlcmUgc2UgasOhIGjDoSB0ZW1hIHNhbHZvIG5vIGxvY2FsU3RvcmFnZS5cclxuICAgIC8vIFNlIG7Do28gaG91dmVyLCBwZWdhIG8gcGFkcsOjbyBkbyBzaXN0ZW1hXHJcbiAgICBsZXQgY3VycmVudF90aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgfHwgZ2V0Q29tcHV0ZWRTdHlsZSgkKFwiLnNldHRpbmdzIC5jdXJyZW50LXRoZW1lXCIpWzBdKS5nZXRQcm9wZXJ0eVZhbHVlKFwiY29udGVudFwiKS5yZXBsYWNlKC9cIi9nLCBcIlwiKTtcclxuXHJcbiAgICBpZiAoY3VycmVudF90aGVtZSkge1xyXG4gICAgICAgIHNldChjdXJyZW50X3RoZW1lLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBEZXNjb2JyZSBhIHBvc2nDp8OjbyBkbyB0ZW1hIG5hIG9yZGVtXHJcbiAgICAgICAgICAgIGxldCB0aGVtZV9wb3NpdGlvbiA9IHRoZW1lX29yZGVyLmluZGV4T2YoY3VycmVudF90aGVtZSk7XHJcbiAgICAgICAgICAgIGxldCBuZXdfdGhlbWUgPSB0aGVtZV9vcmRlclt0aGVtZV9wb3NpdGlvbiArIDFdIHx8IHRoZW1lX29yZGVyWzBdO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0YSBvIG5vdm8gdGVtYVxyXG4gICAgICAgICAgICBzZXQobmV3X3RoZW1lLCBjdXJyZW50X3RoZW1lKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIiQoZnVuY3Rpb24gKCkge1xuXHQkcGFuZWwgPSAkKFwiLnBhbmVsXCIpO1xuXHQkc3RhdGlvbiA9ICQoXCIuc3RhdGlvblwiLCAkcGFuZWwpO1xuXHQkcGVybWlzc2lvbiA9ICQoXCIucGVybWlzc2lvblwiLCAkcGFuZWwpO1xuXHQkbmV0d29yayA9ICQoXCIubmV0d29ya1wiLCAkcGFuZWwpO1xuXG5cdC8vIENvbmZlcmUgc2UgdXN1w6FyaW8gasOhIGhhdmlhIGhhYmlsaXRhZG8gZ2VvbG9jYWxpemHDp8OjbyBhbnRlc1xuXHRpZiAoXCJnZW9sb2NhdGlvblwiIGluIG5hdmlnYXRvcikge1xuXHRcdGlmIChcInBlcm1pc3Npb25zXCIgaW4gbmF2aWdhdG9yKSB7XG5cdFx0XHRuYXZpZ2F0b3IucGVybWlzc2lvbnMucXVlcnkoeyBcIm5hbWVcIjogXCJnZW9sb2NhdGlvblwiIH0pLnRoZW4oKHBlcm1pc3Npb24pID0+IHtcblx0XHRcdFx0aWYgKHBlcm1pc3Npb25bXCJzdGF0ZVwiXSA9PT0gXCJncmFudGVkXCIpIHtcblx0XHRcdFx0XHQvLyBTZSBqw6EgdGl2ZXIsIHBlZ2EgYSBsb2NhbGl6YcOnw6NvIGF0dWFsIGUgcHJvY3VyYSBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYVxuXHRcdFx0XHRcdGdldExvY2F0aW9uKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gU2UgbsOjbyB0aXZlciwgbW9zdHJhIGJvdMOjbyBwYXJhIHNvbGljaXRhciBhdXRvcml6YcOnw6NvXG5cdFx0XHRcdFx0JChcImJvZHlcIikuYWRkQ2xhc3MoXCItbW9kZS0taW5pdGlhbFwiKTtcblx0XHRcdFx0XHQkcGFuZWwuYWRkQ2xhc3MoXCItc3RhdGUtLXBlcm1pc3Npb25cIik7XG5cblx0XHRcdFx0XHQkKFwiLmJ1dHRvblwiLCAkcGVybWlzc2lvbikub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRnZXRMb2NhdGlvbih0cnVlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGdldExvY2F0aW9uKCk7XG5cdFx0fVxuXHR9XG59KTtcblxuLy8gU2VydmljZSBXb3JrZXJcbmlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcblx0XHRjdWVbXCJzZXJ2aWNlLXdvcmtlclwiXSA9IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFwiL3NlcnZpY2Utd29ya2VyLmpzXCIpO1xuXG5cdFx0Y3VlW1wic2VydmljZS13b3JrZXJcIl0udGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIVwiLCByZWdpc3RyYXRpb24pO1xuXHRcdH0sIChlcnJvcikgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiBcIiwgZXJyb3IpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuLy8gRXN0YWRvIGRhIGNvbmV4w6NvXG5jb25zdCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzID0gKCkgPT4ge1xuXHRsZXQgY29ubmVjdGVkID0gbmF2aWdhdG9yLm9uTGluZTtcblxuXHRpZiAoY29ubmVjdGVkID09PSB0cnVlKSB7XG5cdFx0JG5ldHdvcmsucmVtb3ZlQ2xhc3MoXCItc3RhdGUtLW9mZmxpbmVcIik7XG5cdH0gZWxzZSB7XG5cdFx0JG5ldHdvcmsuYWRkQ2xhc3MoXCItc3RhdGUtLW9mZmxpbmVcIik7XG5cdH1cbn07XG5cbi8vICQod2luZG93KS5vbihcIm9ubGluZSBvZmZsaW5lXCIsIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzKTtcbiJdfQ==
