"use strict";

var cue = [];
var $panel, $station, $permission;
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

        if (env === "production") {
          cue["interval-last-updated"] = setInterval(lastUpdated, 5000);
        }
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
  $permission = $(".permission", $panel); // Confere se usuário já havia habilitado geolocalização antes

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


var $status;
var $connection_status;

var updateConnectionStatus = function updateConnectionStatus() {
  return false;
  var connected = navigator.onLine;

  if (connected === true) {
    // $("<div />").addClass("-state--success").text("Conexão reestabelecida!").appendTo($connection_status);
    setTimeout(function () {
      $connection_status.empty();
    }, 4000);
  } else {
    $connection_status.empty();
    $("<div />").addClass("-state--error").text("Sem conexão").appendTo($connection_status);
  }
};

$(window).on("online offline", updateConnectionStatus); // window.addEventListener("online", updateConnectionStatus);
// window.addEventListener("offline", updateConnectionStatus);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiLCJzdGF0aW9uLWluZm8uanMiLCJsaW5lLWluZm8uanMiLCJnZXQtbG9jYXRpb24uanMiLCJuZWFyZXN0LXN0YXRpb24uanMiLCJuZXh0LWRlcGFydHVyZXMuanMiLCJzdGF0aW9uLWxpc3QuanMiLCJ0aGVtZS5qcyIsInN0YXJ0LmpzIl0sIm5hbWVzIjpbImN1ZSIsIiRwYW5lbCIsIiRzdGF0aW9uIiwiJHBlcm1pc3Npb24iLCJzdGF0aW9ucyIsInN0YXRpb25faW5kZXgiLCJmb3JFYWNoIiwic3RhdGlvbiIsInN0YXRpb25fbmFtZSIsImxpbmVzIiwibGluZV9pbmRleCIsImxpbmUiLCJsaW5lX25hbWUiLCJnZXRMb2NhdGlvbiIsImlzX2luaXRpYWwiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwiJCIsInJlbW92ZUNsYXNzIiwibmVhcmVzdF9zdGF0aW9uIiwibmVhcmVzdFN0YXRpb24iLCJuZXh0RGVwYXJ0dXJlcyIsImRlZzJyYWQiLCJkZWciLCJNYXRoIiwiUEkiLCJ1c2VyX2Nvb3JkaW5hdGVzIiwidXNlcl9sYXRpdHVkZSIsInVzZXJfbG9uZ2l0dWRlIiwiUiIsInNob3J0ZXN0X2Rpc3RhbmNlIiwic3RhdGlvbl9sYXRpdHVkZSIsInN0YXRpb25fbG9uZ2l0dWRlIiwieCIsImNvcyIsInkiLCJkaXN0YW5jZSIsInNxcnQiLCJmcm9tX2dwcyIsImRlcGFydHVyZXMiLCJjbGVhckludGVydmFsIiwid2luZG93Iiwib2ZmIiwidGV4dCIsImFkZENsYXNzIiwibGFzdFVwZGF0ZWQiLCIkYmFkZ2UiLCJjb25uZWN0ZWQiLCJvbkxpbmUiLCJzZWNvbmRzX3NpbmNlX3VwZGF0ZSIsIm1vbWVudCIsImRpZmYiLCJsYXN0X3VwZGF0ZWQiLCJmcm9tTm93IiwiJHN0YXR1cyIsImVtcHR5IiwiYXBwZW5kIiwiZ2V0RGF0YSIsImRvY3VtZW50IiwiaGlkZGVuIiwiZ2V0SlNPTiIsImRvbmUiLCJyZXNwb25zZSIsImV0YV9jb3VudCIsImRpcmVjdGlvbnMiLCJkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbiIsImRpcmVjdGlvbiIsImRpcmVjdGlvbl90aXRsZSIsImxlbmd0aCIsImluY2x1ZGVzIiwicHVzaCIsInRyYWluIiwiZW52Iiwibm93Iiwib3BlcmF0aW9uX3N0YXJ0X3RpbWUiLCJvcGVyYXRpb25fZW5kX3RpbWUiLCJpc0FmdGVyIiwiaXNCZWZvcmUiLCIkZGVwYXJ0dXJlcyIsIiR0aXRsZSIsIm9uIiwiYXBwZW5kVG8iLCJzaGFyZV90ZXh0IiwiJGRpcmVjdGlvbiIsImV0YXMiLCJzb3J0IiwiYSIsImIiLCIkdHJhaW4iLCIkbGluZSIsImlzX2FwcHJvYWNoaW5nIiwiZGVwYXJ0dXJlX2NvdW50ZG93biIsInJvdW5kIiwiZGVwYXJ0dXJlX3RpbWUiLCJmb3JtYXQiLCJjc3MiLCJhdHRyIiwiaHRtbCIsInNldEludGVydmFsIiwib3JpZ2luX2FuZF9kZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uIiwiJGNoYW5nZSIsIiRidXR0b24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlV2luZG93IiwiJHN0YXRpb25zIiwiJG5lYXJlc3QiLCIkbGluZXMiLCIkc2hpZWxkIiwidG9nZ2xlQ2xhc3MiLCJzY3JvbGxfdG9wX3Bvc2l0aW9uIiwic2Nyb2xsVG9wIiwiVGhlbWUiLCJ0aGVtZV9vcmRlciIsInRoZW1lX3NldHRpbmdzIiwic2V0IiwibmV3X3RoZW1lIiwib2xkX3RoZW1lIiwiY3VycmVudF90aGVtZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwiZ2V0SXRlbSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicmVwbGFjZSIsInRoZW1lX3Bvc2l0aW9uIiwiaW5kZXhPZiIsInBlcm1pc3Npb25zIiwicXVlcnkiLCJ0aGVuIiwicGVybWlzc2lvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJyZWdpc3RyYXRpb24iLCJlcnJvciIsIiRjb25uZWN0aW9uX3N0YXR1cyIsInVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUFBLEdBQUEsR0FBQSxFQUFBO0FBQ0EsSUFBQUMsTUFBQSxFQUFBQyxRQUFBLEVBQUFDLFdBQUE7QUNEQSxJQUFBQyxRQUFBLEdBQUEsQ0FDQTtBQUNBLFVBQUEsZ0JBREE7QUFFQSxRQUFBLGdCQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBREEsRUFTQTtBQUNBO0FBQ0EsVUFBQSxVQUZBO0FBR0EsUUFBQSxVQUhBO0FBSUE7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBTEE7QUFNQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBUEEsQ0FUQSxFQWtCQTtBQUNBLFVBQUEsWUFEQTtBQUVBLFFBQUEsWUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQWxCQSxFQTBCQTtBQUNBLFVBQUEsU0FEQTtBQUVBLFFBQUEsU0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQTFCQSxFQWtDQTtBQUNBLFVBQUEsU0FEQTtBQUVBLFFBQUEsU0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQWxDQSxFQTBDQTtBQUNBLFVBQUEsaUJBREE7QUFFQSxRQUFBLGlCQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0ExQ0EsRUFrREE7QUFDQSxVQUFBLFlBREE7QUFFQSxRQUFBLFlBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FsREEsRUEwREE7QUFDQSxVQUFBLFNBREE7QUFFQSxRQUFBLFNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQTFEQSxFQWtFQTtBQUNBLFVBQUEsbUJBREE7QUFFQSxRQUFBLG1CQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbEVBLEVBMEVBO0FBQ0E7QUFDQSxVQUFBLGtCQUZBO0FBR0EsUUFBQSxrQkFIQTtBQUlBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUxBO0FBTUE7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFQQSxDQTFFQSxFQW1GQTtBQUNBLFVBQUEsU0FEQTtBQUVBLFFBQUEsU0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQW5GQSxFQTJGQTtBQUNBLFVBQUEsUUFEQTtBQUVBLFFBQUEsUUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQTNGQSxFQW1HQTtBQUNB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QUNBO0FBQ0EsQ0FkQTs7QUFnQkF6SCxDQUFBLENBQUF3QixNQUFBLENBQUEsQ0FBQXVDLEVBQUEsQ0FBQSxnQkFBQSxFQUFBMkQsc0JBQUEsRSxDQUVBO0FBQ0EiLCJmaWxlIjoidmx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGN1ZSA9IFsgXTtcclxubGV0ICRwYW5lbCwgJHN0YXRpb24sICRwZXJtaXNzaW9uO1xyXG4iLCJsZXQgc3RhdGlvbnMgPSBbXG5cdHtcblx0XHRcIm5hbWVcIjogXCJBbnRvbmlvIENhcmxvc1wiLFxuXHRcdFwiaWRcIjogXCJhbnRvbmlvLWNhcmxvc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAyLCAzOiAyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkxMTMxNTM0NDM5MTMxOSwgLTQzLjE3MjA1MDk5NzU5ODI0MV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIkNhbWVyaW5vXCIsXG5cdFx0XCJpZFwiOiBcImNhbWVyaW5vXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDM6IDggfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAxNjk4MDQ2MDIyMzgyLCAtNDMuMTgzOTgzNjE0OTMzNDg5XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDYW5kZWzDoXJpYVwiLFxuXHRcdFwiaWRcIjogXCJjYW5kZWxhcmlhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDYsIDM6IDYgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAxNzI1MDI5Mzg0MjU5LCAtNDMuMTc4ODA4NjY1NDE4NjcxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDYXJpb2NhXCIsXG5cdFx0XCJpZFwiOiBcImNhcmlvY2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNCwgMzogNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDc0ODQ1MDcyNTI4MTEsIC00My4xNzY2NDU1MTgwMzg5MTddLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNlbnRyYWxcIixcblx0XHRcImlkXCI6IFwiY2VudHJhbFwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA1LCAzOiAxMCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDI3MDQ5NjA3NDQ5NTIsIC00My4xOTI2MjUzMTQzNzczMzhdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMiwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNpZGFkZSBkbyBTYW1iYVwiLFxuXHRcdFwiaWRcIjogXCJjaWRhZGUtZG8tc2FtYmFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk0MTc5OTU3MTI4MDY3LCAtNDMuMTk2ODg0MDgyMDc4NDc2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDaW5lbMOibmRpYVwiLFxuXHRcdFwiaWRcIjogXCJjaW5lbGFuZGlhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDMsIDM6IDMgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTEwNzM0MDAxODQyMjQzLCAtNDMuMTc1NDI1Mzg3MzY0OTMyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDb2xvbWJvXCIsXG5cdFx0XCJpZFwiOiBcImNvbG9tYm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogMiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDUxNzUyMTkwMDk0MTUsIC00My4xNzgwMTY5NjgyMjg4MThdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNvcmRlaXJvIGRhIEdyYcOnYVwiLFxuXHRcdFwiaWRcIjogXCJjb3JkZWlyby1kYS1ncmFjYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMywgMjogOCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTcxMDQ2Mjk5MjMxMTcsIC00My4yMDQxNzg0MDM1MzM3MDNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcIm5hbWVcIjogXCJDcmlzdGlhbm8gT3R0b25pXCIsXG5cdFx0XCJpZFwiOiBcImNyaXN0aWFuby1vdHRvbmlcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogOSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDMwNjEyNzg0ODA2NDgsIC00My4xOTA3NDkxMDk0MjE0ODldLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMiwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkVxdWFkb3JcIixcblx0XHRcImlkXCI6IFwiZXF1YWRvclwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxOCwgMjogMTEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3ODk0NTY0Njg3NzgyLCAtNDMuMjA0ODA1MDE0NDQwODE1XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJHYW1ib2FcIixcblx0XHRcImlkXCI6IFwiZ2FtYm9hXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE2LCAyOiA2IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5Nzk1OTQwODM3Mjg0NSwgLTQzLjE5OTMzNjY4MzI0NjMwMV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiSGFybW9uaWFcIixcblx0XHRcImlkXCI6IFwiaGFybW9uaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTQgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1NzU0NDM3MjczMzg2LCAtNDMuMTkxNDI3NjM5NTg0NDk2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQYXJhZGEgZG9zIE11c2V1c1wiLFxuXHRcdFwiaWRcIjogXCJwYXJhZGEtZG9zLW11c2V1c1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA4IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NTk0NjU4NjgwMjI2NCwgLTQzLjE4MTk1NTk4MDU4MTI3Ml0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUGFyYWRhIGRvcyBOYXZpb3NcIixcblx0XHRcImlkXCI6IFwicGFyYWRhLWRvcy1uYXZpb3NcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogOSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTQxMzk2MjUzMDM4NzUsIC00My4xODcxODE4MzA2MTc0NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUGVyZWlyYSBSZWlzXCIsXG5cdFx0XCJpZFwiOiBcInBlcmVpcmEtcmVpc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNywgMjogMTAgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk2NjQ3MDY0OTYwNDMsIC00My4yMDE3NzMxMTE1MjM1OTNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlByYcOnYSBYVlwiLFxuXHRcdFwiaWRcIjogXCJwcmFjYS14dlwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAxIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMjA3MDEyODk0NTg0OCwgLTQzLjE3MzExNzM5NTc4Mzg3Nl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJhaWEgRm9ybW9zYVwiLFxuXHRcdFwiaWRcIjogXCJwcmFpYS1mb3Jtb3NhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEwLCAyOiAxMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDMxNzcxNTIzODgwNTcsIC00My4yMDgxNjE5NjQ5MDIzMDNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlByb3ZpZMOqbmNpYVwiLFxuXHRcdFwiaWRcIjogXCJwcm92aWRlbmNpYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTc0ODk5MjIwMTQzODMsIC00My4xOTY3MDE0MDA4OTAwMzVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlJvZG92acOhcmlhXCIsXG5cdFx0XCJpZFwiOiBcInJvZG92aWFyaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTksIDI6IDEyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5ODgwNTU3NDI1MTc5OSwgLTQzLjIwNzM0Mjk0MTQ3NTk4Nl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FhcmFcIixcblx0XHRcImlkXCI6IFwic2FhcmFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDU5MTIxMDg0NjAyNTMsIC00My4xODczMjA3ODIyMjgyMDVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcIm5hbWVcIjogXCJTYW50YSBSaXRhXCIsXG5cdFx0XCJpZFwiOiBcInNhbnRhLXJpdGFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogNyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDA1OTQxNjc0MTA2NDksIC00My4xODE1MDkwNDk4NTQyMDZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlNhbnRvIENyaXN0b1wiLFxuXHRcdFwiaWRcIjogXCJzYW50by1jcmlzdG9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTIsIDI6IDcgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1MzI3MjgyMDAyMTQ2LCAtNDMuMjAwMjU5MTgxNzU1NzRdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlNhbnRvcyBEdW1vbnRcIixcblx0XHRcImlkXCI6IFwic2FudG9zLWR1bW9udFwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxLCAzOiAxIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkxMjI4Njg3NDk2MjQwMSwgLTQzLjE2NzYzMjI1OTU0NTg0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTw6NvIEJlbnRvXCIsXG5cdFx0XCJpZFwiOiBcInNhby1iZW50b1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA3IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5ODY0ODA5NjA1MTAxMiwgLTQzLjE3OTk2NDMxMTc2NDg4NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2V0ZSBkZSBTZXRlbWJyb1wiLFxuXHRcdFwiaWRcIjogXCJzZXRlLWRlLXNldGVtYnJvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDUsIDM6IDUgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTA1MzA1OTAwOTc3ODk3LCAtNDMuMTc3NDYzODE2MzQ2OTIyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJUaXJhZGVudGVzXCIsXG5cdFx0XCJpZFwiOiBcInRpcmFkZW50ZXNcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDY1NzgyMjIwMjYxMTYsIC00My4xODI4NTQyMzY1NTc4MDJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlV0b3BpYSBBcXVhUmlvXCIsXG5cdFx0XCJpZFwiOiBcInV0b3BpYS1hcXVhcmlvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEwIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5MzA5NTQ3MTk5OTYxMiwgLTQzLjE5MDIzNjkwNzIxMzIxOV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiVmlsYSBPbMOtbXBpY2FcIixcblx0XHRcImlkXCI6IFwidmlsYS1vbGltcGljYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5OTA1NjU3MjY0NjUzMywgLTQzLjE5OTY0MzUyOTQ5NTI5N10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9XG5dO1xuXG5sZXQgc3RhdGlvbl9pbmRleCA9IHt9O1xuc3RhdGlvbnMuZm9yRWFjaCgoc3RhdGlvbikgPT4ge1xuXHRsZXQgc3RhdGlvbl9uYW1lID0gc3RhdGlvbltcIm5hbWVcIl07XG5cdHN0YXRpb25faW5kZXhbc3RhdGlvbl9uYW1lXSA9IHN0YXRpb247XG59KTtcbiIsImxldCBsaW5lcyA9IFtcblx0e1xuXHRcdFwiaWRcIjogMSxcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAxXCIsXG5cdFx0XCJjb2xvclwiOiBcIiM2OGI5ZmJcIixcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xuXHRcdC8vIFx0XCJTYW50b3MgRHVtb250XCIsXG5cdFx0Ly8gXHRcIlByYWlhIEZvcm1vc2FcIlxuXHRcdC8vIF1cblx0fSxcblx0e1xuXHRcdFwiaWRcIjogMixcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAyXCIsXG5cdFx0XCJjb2xvclwiOiBcIiM3M2NhM2ZcIixcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xuXHRcdC8vIFx0XCJQcmHDp2EgWFZcIixcblx0XHQvLyBcdFwiUHJhaWEgRm9ybW9zYVwiXG5cdFx0Ly8gXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwiaWRcIjogMyxcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAzXCIsXG5cdFx0XCJjb2xvclwiOiBcIiNmM2EyMzBcIixcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xuXHRcdC8vIFx0XCJTYW50b3MgRHVtb250XCIsXG5cdFx0Ly8gXHRcIkNlbnRyYWxcIlxuXHRcdC8vIF1cblx0fVxuXTtcblxubGV0IGxpbmVfaW5kZXggPSB7IH07XG5saW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdGxldCBsaW5lX25hbWUgPSBsaW5lW1wibmFtZVwiXTtcblx0bGluZV9pbmRleFtsaW5lX25hbWVdID0gbGluZTtcbn0pO1xuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gZ2V0IGxvY2F0aW9uIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBQZWdhIGEgbG9jYWxpemHDp8OjbyBkbyB1c3XDoXJpb1xuY29uc3QgZ2V0TG9jYXRpb24gPSAoaXNfaW5pdGlhbCA9IGZhbHNlKSA9PiB7XG5cdG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XG5cdFx0Ly8gU2UgdmllciBkbyBtb2RvIGluaWNpYWwsIGVuY2VycmEgZWxlXG5cdFx0aWYgKGlzX2luaXRpYWwpIHtcblx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWluaXRpYWxcIik7XG5cdFx0XHQkcGFuZWwucmVtb3ZlQ2xhc3MoXCItc3RhdGUtLXBlcm1pc3Npb25cIik7XG5cdFx0fVxuXG5cdFx0Ly8gRGVzY29icmUgYSBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYSBlIHByb2N1cmEgYXMgcHLDs3hpbWFzIHBhcnRpZGFzXG5cdFx0bGV0IG5lYXJlc3Rfc3RhdGlvbiA9IG5lYXJlc3RTdGF0aW9uKFtwb3NpdGlvbltcImNvb3Jkc1wiXVtcImxhdGl0dWRlXCJdLCBwb3NpdGlvbltcImNvb3Jkc1wiXVtcImxvbmdpdHVkZVwiXV0pO1xuXHRcdG5leHREZXBhcnR1cmVzKG5lYXJlc3Rfc3RhdGlvbiwgdHJ1ZSk7XG5cdH0pO1xufTtcbiIsIi8vIEVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXG5jb25zdCBkZWcycmFkID0gKGRlZykgPT4ge1xuXHRyZXR1cm4gZGVnICogKE1hdGguUEkgLyAxODApO1xufTtcblxuY29uc3QgbmVhcmVzdFN0YXRpb24gPSAodXNlcl9jb29yZGluYXRlcykgPT4ge1xuXHRsZXQgdXNlcl9sYXRpdHVkZSA9IGRlZzJyYWQodXNlcl9jb29yZGluYXRlc1swXSk7XG5cdGxldCB1c2VyX2xvbmdpdHVkZSA9IGRlZzJyYWQodXNlcl9jb29yZGluYXRlc1sxXSk7XG5cblx0bGV0IFIgPSA2MzcxO1xuXG5cdGxldCBzaG9ydGVzdF9kaXN0YW5jZSA9IG51bGw7XG5cdGxldCBuZWFyZXN0X3N0YXRpb24gPSBudWxsO1xuXG5cdHN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcblx0XHRpZiAoIXN0YXRpb25bXCJkaXNhYmxlZFwiXSkge1xuXHRcdFx0bGV0IHN0YXRpb25fbGF0aXR1ZGUgPSBkZWcycmFkKHN0YXRpb25bXCJjb29yZGluYXRlc1wiXVswXSk7XG5cdFx0XHRsZXQgc3RhdGlvbl9sb25naXR1ZGUgPSBkZWcycmFkKHN0YXRpb25bXCJjb29yZGluYXRlc1wiXVsxXSk7XG5cblx0XHRcdGxldCB4ID0gKHN0YXRpb25fbG9uZ2l0dWRlIC0gdXNlcl9sb25naXR1ZGUpICogTWF0aC5jb3MoKHVzZXJfbGF0aXR1ZGUgKyBzdGF0aW9uX2xhdGl0dWRlKSAvIDIpO1xuXHRcdFx0bGV0IHkgPSAoc3RhdGlvbl9sYXRpdHVkZSAtIHVzZXJfbGF0aXR1ZGUpO1xuXHRcdFx0bGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpICogUjtcblxuXHRcdFx0aWYgKCFzaG9ydGVzdF9kaXN0YW5jZSB8fCBkaXN0YW5jZSA8IHNob3J0ZXN0X2Rpc3RhbmNlKSB7XG5cdFx0XHRcdHNob3J0ZXN0X2Rpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRcdG5lYXJlc3Rfc3RhdGlvbiA9IHN0YXRpb247XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gbmVhcmVzdF9zdGF0aW9uO1xufTtcbiIsIi8vIFByw7N4aW1hcyBwYXJ0aWRhc1xuY29uc3QgbmV4dERlcGFydHVyZXMgPSAoc3RhdGlvbiwgZnJvbV9ncHMgPSBmYWxzZSkgPT4ge1xuXHRsZXQgZGVwYXJ0dXJlcztcblxuXHQvLyBEZXNsaWdhIGludGVydmFsb3MgZSBldmVudG9zIGV4aXN0ZW50ZXNcblx0Y2xlYXJJbnRlcnZhbChjdWVbXCJpbnRlcnZhbC1kZXBhcnR1cmVzXCJdKTtcblx0Y2xlYXJJbnRlcnZhbChjdWVbXCJpbnRlcnZhbC1sYXN0LXVwZGF0ZWRcIl0pO1xuXHQkKHdpbmRvdykub2ZmKFwidmlzaWJpbGl0eWNoYW5nZSBvbmxpbmVcIik7XG5cblx0Ly8gQ29sb2NhIG8gbm9tZSBkYSBlc3Rhw6fDo28gbm8gYXBwYmFyXG5cdCQoXCIuc3RhdGlvbnMgaDEgLnN0YXRpb24tbmFtZVwiKS50ZXh0KHN0YXRpb25bXCJuYW1lXCJdKTtcblxuXHQvLyBNb3N0cmEgYW5pbWHDp8OjbyBkZSBsb2FkXG5cdCRwYW5lbC5hZGRDbGFzcyhcIi1zdGF0ZS0tbG9hZGluZ1wiKTtcblxuXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXHQvLyBBdHVhbGl6YcOnw6NvXG5cdGNvbnN0IGxhc3RVcGRhdGVkID0gKCkgPT4ge1xuXHRcdGxldCAkYmFkZ2UgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInN0YXR1cy1iYWRnZVwiKTtcblx0XHRsZXQgY29ubmVjdGVkID0gbmF2aWdhdG9yLm9uTGluZTtcblxuXHRcdC8vIFRlbXBvIGVtIHNlZ3VuZG9zIGRlc2RlIGEgw7psdGltYSBhdHVhbGl6YcOnw6NvXG5cdFx0bGV0IHNlY29uZHNfc2luY2VfdXBkYXRlID0gbW9tZW50KCkuZGlmZihkZXBhcnR1cmVzW1wibGFzdFVwZGF0ZWRcIl0sIFwic2Vjb25kc1wiKTtcblxuXHRcdC8vIFNlIHRpdmVyIHNpZG8gYXR1YWxpemFkbyBow6EgbWVub3MgZGUgNjAgc2VndW5kb3MsIG1vc3RyYSBUZW1wbyBSZWFsXG5cdFx0aWYgKHNlY29uZHNfc2luY2VfdXBkYXRlIDw9IDYwKSB7XG5cdFx0XHQkYmFkZ2UuYWRkQ2xhc3MoXCItc3RhdGUtLXJlYWwtdGltZVwiKS50ZXh0KFwiVGVtcG8gcmVhbFwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGxhc3RfdXBkYXRlZCA9IFwiQXR1YWxpemFkbyBcIiArIG1vbWVudChkZXBhcnR1cmVzW1wibGFzdFVwZGF0ZWRcIl0pLmZyb21Ob3codHJ1ZSkgKyBcIiBhdHLDoXNcIjtcblx0XHRcdCRiYWRnZS50ZXh0KGxhc3RfdXBkYXRlZCk7XG5cdFx0fVxuXG5cdFx0JHN0YXR1cy5lbXB0eSgpLmFwcGVuZCgkYmFkZ2UpO1xuXHR9O1xuXG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdC8vIENvbnN1bHRhIGRvcyBkYWRvc1xuXHRjb25zdCBnZXREYXRhID0gKCkgPT4ge1xuXHRcdC8vIFPDsyBjYXJyZWdhIHNlIGVzdGl2ZXIgY29tIGZvY29cblx0XHRpZiAoZG9jdW1lbnQuaGlkZGVuID09PSB0cnVlIHx8IG5hdmlnYXRvci5vbkxpbmUgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gQ2FycmVnYSBvcyBkYWRvc1xuXHRcdCQuZ2V0SlNPTihcImh0dHBzOi8vZW1pdHJlbW11cy5jb20vLS92bHQvZGVwYXJ0dXJlcz9jYWxsYmFjaz0/XCIsIHtcblx0XHRcdFwic3RhdGlvblwiOiBzdGF0aW9uW1wiaWRcIl0sXG5cdFx0XHQvLyBcImVudlwiOiBcImRldlwiXG5cdFx0fSkuZG9uZSgocmVzcG9uc2UpID0+IHtcblx0XHRcdGRlcGFydHVyZXMgPSByZXNwb25zZTtcblxuXHRcdFx0bGV0IGV0YV9jb3VudCA9IDA7XG5cdFx0XHRsZXQgZGlyZWN0aW9ucyA9IFsgXTtcblx0XHRcdGxldCBkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbiA9IHsgfTtcblxuXHRcdFx0Ly8gT3JnYW5pemEgYXMgcGFydGlkYXMgcG9yIGRlc3Rpbm9cblx0XHRcdGRlcGFydHVyZXNbXCJsaW5lc1wiXS5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdFx0XHRcdGxpbmVbXCJkaXJlY3Rpb25zXCJdLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuXHRcdFx0XHRcdGxldCBkaXJlY3Rpb25fdGl0bGUgPSBkaXJlY3Rpb25bXCJuYW1lXCJdO1xuXHRcdFx0XHRcdGV0YV9jb3VudCArPSBkaXJlY3Rpb25bXCJldGFzXCJdLmxlbmd0aDtcblxuXHRcdFx0XHRcdGlmIChkaXJlY3Rpb25bXCJldGFzXCJdLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdGlmICghZGlyZWN0aW9ucy5pbmNsdWRlcyhkaXJlY3Rpb25fdGl0bGUpKSB7XG5cdFx0XHRcdFx0XHRcdGRpcmVjdGlvbnMucHVzaChkaXJlY3Rpb25fdGl0bGUpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoIWRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0pIHtcblx0XHRcdFx0XHRcdFx0ZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb25bZGlyZWN0aW9uX3RpdGxlXSA9IFsgXTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uW1wiZXRhc1wiXS5mb3JFYWNoKCh0cmFpbikgPT4ge1xuXHRcdFx0XHRcdFx0XHR0cmFpbltcImxpbmVcIl0gPSBsaW5lW1wibmFtZVwiXTtcblx0XHRcdFx0XHRcdFx0ZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb25bZGlyZWN0aW9uX3RpdGxlXS5wdXNoKHRyYWluKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gU2UgbsO6bWVybyBkZSBwcsOzeGltYXMgcGFydGlkYXMgZm9yIHplcm8sXG5cdFx0XHQvLyBjb25mZXJlIHNlIGFpbmRhIGVzdMOhIGRlbnRybyBkbyBob3LDoXJpbyBkZSBmdW5jaW9uYW1lbnRvXG5cdFx0XHRpZiAoZXRhX2NvdW50ID09PSAwICYmIGVudiA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcblx0XHRcdFx0bGV0IG5vdyA9IG1vbWVudCgpO1xuXHRcdFx0XHRsZXQgb3BlcmF0aW9uX3N0YXJ0X3RpbWUgPSBtb21lbnQoXCIwNjowMFwiLCBcIkhIOm1tXCIpO1xuXHRcdFx0XHRsZXQgb3BlcmF0aW9uX2VuZF90aW1lID0gbW9tZW50KFwiMDA6MDBcIiwgXCJISDptbVwiKTtcblxuXHRcdFx0XHRpZiAobm93LmlzQWZ0ZXIob3BlcmF0aW9uX2VuZF90aW1lKSAmJiBub3cuaXNCZWZvcmUob3BlcmF0aW9uX3N0YXJ0X3RpbWUpKSB7XG5cdFx0XHRcdFx0JHBhbmVsLmFkZENsYXNzKFwiLXN0YXRlLS1jbG9zZWRcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIE1vbnRhIGFzIHBhcnRpZGFzXG5cdFx0XHRcdGxldCAkZGVwYXJ0dXJlcyA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGVwYXJ0dXJlc1wiKTtcblx0XHRcdFx0bGV0ICR0aXRsZSA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGVwYXJ0dXJlcy10aXRsZVwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdFx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHRcdFx0XHR9KS5hcHBlbmRUbygkZGVwYXJ0dXJlcyk7XG5cdFx0XHRcdCQoXCI8c3BhbiAvPlwiKS50ZXh0KFwiUHLDs3hpbW9zIHRyZW5zXCIpLmFwcGVuZFRvKCR0aXRsZSk7XG5cblx0XHRcdFx0Ly8gVGV4dG8gcGFyYSBjb21wYXJ0aWxoYW1lbnRvXG5cdFx0XHRcdGxldCBzaGFyZV90ZXh0ID0gW1wiUHLDs3hpbW9zIHRyZW5zXCIsIFwi8J+aiSAqXCIgKyBzdGF0aW9uW1wibmFtZVwiXSArIFwiKlwiLCBcIlwiXTtcblxuXHRcdFx0XHQvLyBkaXJlY3Rpb25zLnNvcnQoKTtcblx0XHRcdFx0ZGlyZWN0aW9ucy5mb3JFYWNoKChkaXJlY3Rpb24pID0+IHtcblx0XHRcdFx0XHRsZXQgJGRpcmVjdGlvbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGlyZWN0aW9uXCIpLmFwcGVuZFRvKCRkZXBhcnR1cmVzKTtcblx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImRpcmVjdGlvbi1jYXB0aW9uXCIpLnRleHQoXCJEZXN0aW5vXCIpLmFwcGVuZFRvKCRkaXJlY3Rpb24pO1xuXG5cdFx0XHRcdFx0bGV0IGV0YXMgPSBkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbltkaXJlY3Rpb25dO1xuXHRcdFx0XHRcdGV0YXMuc29ydCgoYSwgYikgPT4geyByZXR1cm4gYVtcInNlY29uZHNcIl0gLSBiW1wic2Vjb25kc1wiXSB9KTtcblxuXHRcdFx0XHRcdGV0YXMuZm9yRWFjaCgodHJhaW4pID0+IHtcblx0XHRcdFx0XHRcdGxldCAkdHJhaW4gPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInRyYWluXCIpLmFwcGVuZFRvKCRkaXJlY3Rpb24pO1xuXHRcdFx0XHRcdFx0bGV0ICRsaW5lID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpbi1saW5lXCIpLmFwcGVuZFRvKCR0cmFpbik7XG5cdFx0XHRcdFx0XHRsZXQgaXNfYXBwcm9hY2hpbmcgPSB0cmFpbltcInNlY29uZHNcIl0gPCAzMDtcblxuXHRcdFx0XHRcdFx0bGV0IGxpbmUgPSBsaW5lX2luZGV4W3RyYWluW1wibGluZVwiXV07XG5cdFx0XHRcdFx0XHRsZXQgZGVwYXJ0dXJlX2NvdW50ZG93biA9IChpc19hcHByb2FjaGluZz8gXCJBZ29yYVwiIDogTWF0aC5yb3VuZCh0cmFpbltcInNlY29uZHNcIl0gLyA2MCkgKyBcIjxzcGFuPm1pbjwvc3Bhbj5cIik7XG5cdFx0XHRcdFx0XHRsZXQgZGVwYXJ0dXJlX3RpbWUgPSBtb21lbnQodHJhaW5bXCJhcnJpdmFsVGltZVwiXSkuZm9ybWF0KFwiSEg6bW1cIik7XG5cblx0XHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwibGluZS1zaGllbGRcIikuY3NzKFwiY29sb3JcIiwgbGluZVtcImNvbG9yXCJdKS5hdHRyKFwidGl0bGVcIiwgXCJMaW5oYSBcIiArIGxpbmVbXCJpZFwiXSkuYXR0cihcImRpc2FibGVkXCIsIHRydWUpLnRleHQobGluZVtcImlkXCJdKS5hcHBlbmRUbygkbGluZSk7XG5cdFx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInRyYWluLWRpcmVjdGlvblwiKS5hdHRyKFwidGl0bGVcIiwgXCJUcmVtIFwiICsgdHJhaW5bXCJ0cmFpblwiXSkudGV4dChkaXJlY3Rpb24pLmFwcGVuZFRvKCR0cmFpbik7XG5cdFx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInRyYWluLWV0YVwiKS5hdHRyKFwidGl0bGVcIiwgZGVwYXJ0dXJlX3RpbWUpLmh0bWwoZGVwYXJ0dXJlX2NvdW50ZG93bikuYXBwZW5kVG8oJHRyYWluKTtcblxuXHRcdFx0XHRcdFx0aWYgKGlzX2FwcHJvYWNoaW5nKSB7XG5cdFx0XHRcdFx0XHRcdCR0cmFpbi5hZGRDbGFzcyhcIi1zdGF0ZS0tYXBwcm9hY2hpbmdcIik7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIFRleHRvIHBhcmEgY29tcGFydGlsaGFtZW50b1xuXHRcdFx0XHRcdFx0c2hhcmVfdGV4dC5wdXNoKFwiTFwiICsgbGluZVtcImlkXCJdICsgXCIgXCIgKyBkaXJlY3Rpb24gKyBcIiBcIiArIGRlcGFydHVyZV90aW1lKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gRXN0YWRvIGRhIGNvbmV4w6NvIGUgaG9yYSBkYSDDumx0aW1hIGF0dWFsaXphw6fDo29cblx0XHRcdFx0JHN0YXR1cyA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdHVzXCIpLmFwcGVuZFRvKCR0aXRsZSk7XG5cdFx0XHRcdC8vICRjb25uZWN0aW9uX3N0YXR1cyA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiY29ubmVjdGlvbi1zdGF0dXNcIikuYXBwZW5kVG8oJHN0YXR1cyk7XG5cdFx0XHRcdC8vICRsYXN0X3VwZGF0ZWQgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImxhc3QtdXBkYXRlZFwiKS5hcHBlbmRUbygkc3RhdHVzKTtcblx0XHRcdFx0bGFzdFVwZGF0ZWQoKTtcblxuXHRcdFx0XHQvLyBMaW1wYSBvIHBhaW5lbCBlIGluc2VyZSBvcyBub3ZvcyBkYWRvc1xuXHRcdFx0XHQkcGFuZWwucmVtb3ZlQ2xhc3MoXCItc3RhdGUtLWNsb3NlZFwiKTtcblx0XHRcdFx0JHN0YXRpb24uZW1wdHkoKS5hcHBlbmQoJGRlcGFydHVyZXMpO1xuXG5cdFx0XHRcdC8vIENvbXBhcnRpbGhhclxuXHRcdFx0XHQvLyBpZiAobmF2aWdhdG9yLnNoYXJlKSB7XG5cdFx0XHRcdC8vIFx0bGV0IGxvbmdwcmVzcztcblx0XHRcdFx0Ly8gXHRsZXQgbG9uZ3ByZXNzX2RlbGF5ID0gMTMwMDtcblxuXHRcdFx0XHQvLyBcdCRkaXJlY3Rpb24ub24oXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdC8vIFx0XHRsb25ncHJlc3MgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0Ly8gXHRcdFx0bmF2aWdhdG9yLnNoYXJlKHtcblx0XHRcdFx0Ly8gXHRcdFx0XHR0ZXh0OiBzaGFyZV90ZXh0LmpvaW4oXCJcXG5cIilcblx0XHRcdFx0Ly8gXHRcdFx0fSk7XG5cdFx0XHRcdC8vIFx0XHR9LCBsb25ncHJlc3NfZGVsYXkpO1xuXHRcdFx0XHQvLyBcdH0pLm9uKFwibW91c2V1cCBtb3VzZW91dFwiLCAoKSA9PiB7XG5cdFx0XHRcdC8vIFx0XHQvLyBjbGVhckludGVydmFsKGxvbmdwcmVzcyk7XG5cdFx0XHRcdC8vIFx0fSk7XG5cdFx0XHRcdC8vIH1cblxuXHRcdFx0XHRpZiAoZW52ID09PSBcInByb2R1Y3Rpb25cIikge1xuXHRcdFx0XHRcdGN1ZVtcImludGVydmFsLWxhc3QtdXBkYXRlZFwiXSA9IHNldEludGVydmFsKGxhc3RVcGRhdGVkLCA1MDAwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQkcGFuZWwucmVtb3ZlQ2xhc3MoXCItc3RhdGUtLWxvYWRpbmdcIik7XG5cblx0XHRcdC8vIEFzIHBhcmFkYXMgU2V0ZSBkZSBTZXRlbWJybyBlIENvbG9tYm8gc8OjbyBtdWl0byBwcsOzeGltYXMsIGVudMOjbyDDqSBjb211bSBxdWUgYSBsb2NhbGl6YcOnw6NvXG5cdFx0XHQvLyBkbyBHUFMgZG8gdXN1w6FyaW8gbGV2ZSDDoCBlc3Rhw6fDo28gZXJyYWRhLiBQb3IgaXNzbywgbmVzc2FzIHBhcmFkYXMsIMOpIG1vc3RyYWRvIHVtIGJvdMOjbyBwYXJhXG5cdFx0XHQvLyBmYWNpbGl0YXIgYSB0cm9jYSBkZSBwYXJhZGEuIE8gYm90w6NvIHPDsyDDqSBleGliaWRvIHF1YW5kbyBvIHVzdcOhcmlvIHZlbSBkYSBsb2NhbGl6YcOnw6NvXG5cdFx0XHQvLyBhdXRvbcOhdGljYSAobsOjbyBtb3N0cmEgc2UgcGFyYWRhIGZvaSBlc2NvbGhpZGEgbm8gbWVudSlcblx0XHRcdGlmIChmcm9tX2dwcyA9PT0gdHJ1ZSAmJiBbXCJzZXRlLWRlLXNldGVtYnJvXCIsIFwiY29sb21ib1wiXS5pbmNsdWRlcyhzdGF0aW9uW1wiaWRcIl0pKSB7XG5cdFx0XHRcdGxldCBvcmlnaW5fYW5kX2Rlc3RpbmF0aW9uID0ge1xuXHRcdFx0XHRcdFwic2V0ZS1kZS1zZXRlbWJyb1wiOiB7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJDb2xvbWJvXCIsXG5cdFx0XHRcdFx0XHRcImlkXCI6IFwiY29sb21ib1wiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcImNvbG9tYm9cIjoge1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiU2V0ZSBkZSBTZXRlbWJyb1wiLFxuXHRcdFx0XHRcdFx0XCJpZFwiOiBcInNldGUtZGUtc2V0ZW1icm9cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0XHRsZXQgZGVzdGluYXRpb24gPSBvcmlnaW5fYW5kX2Rlc3RpbmF0aW9uW3N0YXRpb25bXCJpZFwiXV07XG5cblx0XHRcdFx0bGV0ICRjaGFuZ2UgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImNoYW5nZS1zdGF0aW9uXCIpLmFwcGVuZFRvKCRzdGF0aW9uKTtcblx0XHRcdFx0bGV0ICRidXR0b24gPSAkKFwiPGEgLz5cIikuYWRkQ2xhc3MoXCJidXR0b25cIikuYXR0cihcImhyZWZcIiwgXCIjXCIpLmFwcGVuZFRvKCRjaGFuZ2UpO1xuXHRcdFx0XHQkKFwiPGkgLz5cIikuYWRkQ2xhc3MoXCJtYXRlcmlhbC1pY29uc1wiKS50ZXh0KFwibmVhcl9tZVwiKS5hcHBlbmRUbygkYnV0dG9uKTtcblx0XHRcdFx0JChcIjxzcGFuIC8+XCIpLnRleHQoXCJFc3TDoSBlbVwiKS5hcHBlbmRUbygkYnV0dG9uKTtcblx0XHRcdFx0JChcIjxzdHJvbmcgLz5cIikudGV4dChkZXN0aW5hdGlvbltcIm5hbWVcIl0gKyBcIj9cIikuYXBwZW5kVG8oJGJ1dHRvbik7XG5cblx0XHRcdFx0JGJ1dHRvbi5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0bmV4dERlcGFydHVyZXMoZGVzdGluYXRpb24pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXHQvLyBBdHVhbGl6YcOnw6NvXG5cdGNvbnN0IHVwZGF0ZVdpbmRvdyA9ICgpID0+IHtcblx0XHRpZiAoZG9jdW1lbnQuaGlkZGVuID09PSBmYWxzZSAmJiBuYXZpZ2F0b3Iub25MaW5lID09PSB0cnVlKSB7XG5cdFx0XHRsYXN0VXBkYXRlZCgpO1xuXHRcdFx0Z2V0RGF0YSgpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBDcmlhIG5vdm9zIGludGVydmFsb3MgZSBldmVudG9zXG5cdCQod2luZG93KS5vbihcIm9ubGluZSB2aXNpYmlsaXR5Y2hhbmdlXCIsIHVwZGF0ZVdpbmRvdyk7XG5cdGlmIChlbnYgPT09IFwicHJvZHVjdGlvblwiKSB7XG5cdFx0Y3VlW1wiaW50ZXJ2YWwtZGVwYXJ0dXJlc1wiXSA9IHNldEludGVydmFsKGdldERhdGEsIDE1MDAwKTtcblx0fVxuXG5cdGdldERhdGEoKTtcbn07XG4iLCIkKGZ1bmN0aW9uKCkge1xuXHQvLyBNb250YSBsaXN0YSBkZSBwYXJhZGFzIGUgZXN0YcOnw7Vlc1xuXHRsZXQgJHN0YXRpb25zID0gJChcIi5zdGF0aW9ucyB1bFwiKTtcblxuXHRsZXQgJG5lYXJlc3QgPSAkKFwiPGEgLz5cIikuYXR0cihcImhyZWZcIiwgXCIjXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQkKFwiLnN0YXRpb25zIGgxIC5zdGF0aW9uLW5hbWVcIikudGV4dChcIlwiKTtcblx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHRcdGdldExvY2F0aW9uKCk7XG5cdH0pLmFwcGVuZFRvKCRzdGF0aW9ucyk7XG5cdCQoXCI8aSAvPlwiKS5hZGRDbGFzcyhcIm1hdGVyaWFsLWljb25zXCIpLnRleHQoXCJuZWFyX21lXCIpLmFwcGVuZFRvKCRuZWFyZXN0KTtcblx0JChcIjxzcGFuIC8+XCIpLnRleHQoXCJMb2NhbGl6YXIgZXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcIikuYXBwZW5kVG8oJG5lYXJlc3QpO1xuXG5cdCQoXCI8bGkgLz5cIikuYWRkQ2xhc3MoXCJuZWFyZXN0LXN0YXRpb25cIikuYXBwZW5kKCRuZWFyZXN0KS5hcHBlbmRUbygkc3RhdGlvbnMpO1xuXG5cdHN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcblx0XHRsZXQgJHN0YXRpb24gPSAkKFwiPGEgLz5cIikuYXR0cihcImhyZWZcIiwgXCIjXCIgKyBzdGF0aW9uW1wiaWRcIl0pO1xuXG5cdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJzdGF0aW9uLW5hbWVcIikudGV4dChzdGF0aW9uW1wibmFtZVwiXSkuYXBwZW5kVG8oJHN0YXRpb24pO1xuXG5cdFx0bGV0ICRsaW5lcyA9ICQoXCI8dWwgLz5cIikuYWRkQ2xhc3MoXCJzdGF0aW9uLWxpbmVzXCIpLmFwcGVuZFRvKCRzdGF0aW9uKTtcblx0XHRsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdFx0XHRsZXQgJGxpbmUgPSAkKFwiPGxpIC8+XCIpLmFwcGVuZFRvKCRsaW5lcyk7XG5cdFx0XHRpZiAoc3RhdGlvbltcImxpbmVzXCJdLmluY2x1ZGVzKGxpbmVbXCJpZFwiXSkpIHtcblx0XHRcdFx0bGV0ICRzaGllbGQgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImxpbmUtc2hpZWxkXCIpLmNzcyhcImNvbG9yXCIsIGxpbmVbXCJjb2xvclwiXSkudGV4dChsaW5lW1wiaWRcIl0pLmFwcGVuZFRvKCRsaW5lKTtcblxuXHRcdFx0XHRpZiAobGluZVtcImRpc2FibGVkXCJdKSB7XG5cdFx0XHRcdFx0JHNoaWVsZC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSkuYWRkQ2xhc3MoXCItc3RhdGUtLWRpc2FibGVkXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoIXN0YXRpb25bXCJkaXNhYmxlZFwiXSkge1xuXHRcdFx0JHN0YXRpb24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0bmV4dERlcGFydHVyZXMoc3RhdGlvbik7XG5cdFx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHN0YXRpb24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Ly8gJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRcdH0pO1xuXHRcdFx0JHN0YXRpb24uYWRkQ2xhc3MoXCItc3RhdGUtLWRpc2FibGVkXCIpO1xuXHRcdH1cblxuXHRcdCQoXCI8bGkgLz5cIikuYXBwZW5kKCRzdGF0aW9uKS5hcHBlbmRUbygkc3RhdGlvbnMpO1xuXHR9KTtcblxuXHQvLyBOYXZlZ2HDp8Ojb1xuXHQkKFwiLmFwcGJhclwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcblx0XHQkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHR9KTtcblxuXHQkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgKGV2ZW50KSA9PiB7XG5cdFx0bGV0IHNjcm9sbF90b3BfcG9zaXRpb24gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cblx0XHRpZiAoc2Nyb2xsX3RvcF9wb3NpdGlvbiA+PSAxMikge1xuXHRcdFx0JChcImJvZHlcIikuYWRkQ2xhc3MoXCItbW9kZS0tc2Nyb2xsXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1zY3JvbGxcIik7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyB0aGVtZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmxldCBUaGVtZSA9ICgoKSA9PiB7XHJcbiAgICBsZXQgdGhlbWVfb3JkZXIgPSBbXHJcbiAgICAgICAgXCJhdXRvXCIsXHJcbiAgICAgICAgXCJsaWdodFwiLFxyXG4gICAgICAgIFwiZGFya1wiXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCB0aGVtZV9zZXR0aW5ncyA9IHtcclxuICAgICAgICBcImF1dG9cIjoge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGVtYSBhdXRvbcOhdGljb1wiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJicmlnaHRuZXNzX2F1dG9cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsaWdodFwiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUZW1hIGNsYXJvXCIsXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImJyaWdodG5lc3NfNVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRhcmtcIjoge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGVtYSBlc2N1cm9cIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiYnJpZ2h0bmVzc180XCJcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgc2V0ID0gKG5ld190aGVtZSwgb2xkX3RoZW1lKSA9PiB7XHJcbiAgICAgICAgY3VycmVudF90aGVtZSA9IG5ld190aGVtZTtcclxuXHJcbiAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWUgc3BhblwiKS50ZXh0KHRoZW1lX3NldHRpbmdzW25ld190aGVtZV1bXCJ0aXRsZVwiXSk7XHJcbiAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWUgaVwiKS50ZXh0KHRoZW1lX3NldHRpbmdzW25ld190aGVtZV1bXCJpY29uXCJdKTtcclxuXHJcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItdGhlbWUtLVwiICsgb2xkX3RoZW1lKS5hZGRDbGFzcyhcIi10aGVtZS0tXCIgKyBuZXdfdGhlbWUpO1xyXG5cclxuICAgICAgICAvLyBTYWx2YSBjb25maWd1cmHDp8OjbyBubyBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBpZiAobmV3X3RoZW1lID09PSBcImF1dG9cIikge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRoZW1lXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgbmV3X3RoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENvbmZlcmUgc2UgasOhIGjDoSB0ZW1hIHNhbHZvIG5vIGxvY2FsU3RvcmFnZS5cclxuICAgIC8vIFNlIG7Do28gaG91dmVyLCBwZWdhIG8gcGFkcsOjbyBkbyBzaXN0ZW1hXHJcbiAgICBsZXQgY3VycmVudF90aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgfHwgZ2V0Q29tcHV0ZWRTdHlsZSgkKFwiLnNldHRpbmdzIC5jdXJyZW50LXRoZW1lXCIpWzBdKS5nZXRQcm9wZXJ0eVZhbHVlKFwiY29udGVudFwiKS5yZXBsYWNlKC9cIi9nLCBcIlwiKTtcclxuXHJcbiAgICBpZiAoY3VycmVudF90aGVtZSkge1xyXG4gICAgICAgIHNldChjdXJyZW50X3RoZW1lLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBEZXNjb2JyZSBhIHBvc2nDp8OjbyBkbyB0ZW1hIG5hIG9yZGVtXHJcbiAgICAgICAgICAgIGxldCB0aGVtZV9wb3NpdGlvbiA9IHRoZW1lX29yZGVyLmluZGV4T2YoY3VycmVudF90aGVtZSk7XHJcbiAgICAgICAgICAgIGxldCBuZXdfdGhlbWUgPSB0aGVtZV9vcmRlclt0aGVtZV9wb3NpdGlvbiArIDFdIHx8IHRoZW1lX29yZGVyWzBdO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0YSBvIG5vdm8gdGVtYVxyXG4gICAgICAgICAgICBzZXQobmV3X3RoZW1lLCBjdXJyZW50X3RoZW1lKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIiQoZnVuY3Rpb24gKCkge1xuXHQkcGFuZWwgPSAkKFwiLnBhbmVsXCIpO1xuXHQkc3RhdGlvbiA9ICQoXCIuc3RhdGlvblwiLCAkcGFuZWwpO1xuXHQkcGVybWlzc2lvbiA9ICQoXCIucGVybWlzc2lvblwiLCAkcGFuZWwpO1xuXG5cdC8vIENvbmZlcmUgc2UgdXN1w6FyaW8gasOhIGhhdmlhIGhhYmlsaXRhZG8gZ2VvbG9jYWxpemHDp8OjbyBhbnRlc1xuXHRpZiAoXCJnZW9sb2NhdGlvblwiIGluIG5hdmlnYXRvcikge1xuXHRcdGlmIChcInBlcm1pc3Npb25zXCIgaW4gbmF2aWdhdG9yKSB7XG5cdFx0XHRuYXZpZ2F0b3IucGVybWlzc2lvbnMucXVlcnkoeyBcIm5hbWVcIjogXCJnZW9sb2NhdGlvblwiIH0pLnRoZW4oKHBlcm1pc3Npb24pID0+IHtcblx0XHRcdFx0aWYgKHBlcm1pc3Npb25bXCJzdGF0ZVwiXSA9PT0gXCJncmFudGVkXCIpIHtcblx0XHRcdFx0XHQvLyBTZSBqw6EgdGl2ZXIsIHBlZ2EgYSBsb2NhbGl6YcOnw6NvIGF0dWFsIGUgcHJvY3VyYSBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYVxuXHRcdFx0XHRcdGdldExvY2F0aW9uKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gU2UgbsOjbyB0aXZlciwgbW9zdHJhIGJvdMOjbyBwYXJhIHNvbGljaXRhciBhdXRvcml6YcOnw6NvXG5cdFx0XHRcdFx0JChcImJvZHlcIikuYWRkQ2xhc3MoXCItbW9kZS0taW5pdGlhbFwiKTtcblx0XHRcdFx0XHQkcGFuZWwuYWRkQ2xhc3MoXCItc3RhdGUtLXBlcm1pc3Npb25cIik7XG5cblx0XHRcdFx0XHQkKFwiLmJ1dHRvblwiLCAkcGVybWlzc2lvbikub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRnZXRMb2NhdGlvbih0cnVlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGdldExvY2F0aW9uKCk7XG5cdFx0fVxuXHR9XG59KTtcblxuLy8gU2VydmljZSBXb3JrZXJcbmlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcblx0XHRjdWVbXCJzZXJ2aWNlLXdvcmtlclwiXSA9IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFwiL3NlcnZpY2Utd29ya2VyLmpzXCIpO1xuXG5cdFx0Y3VlW1wic2VydmljZS13b3JrZXJcIl0udGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIVwiLCByZWdpc3RyYXRpb24pO1xuXHRcdH0sIChlcnJvcikgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiBcIiwgZXJyb3IpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuLy8gRXN0YWRvIGRhIGNvbmV4w6NvXG5sZXQgJHN0YXR1cztcbmxldCAkY29ubmVjdGlvbl9zdGF0dXM7XG5cbmNvbnN0IHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMgPSAoKSA9PiB7XG5cdHJldHVybiBmYWxzZTtcblx0bGV0IGNvbm5lY3RlZCA9IG5hdmlnYXRvci5vbkxpbmU7XG5cblx0aWYgKGNvbm5lY3RlZCA9PT0gdHJ1ZSkge1xuXHRcdC8vICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiLXN0YXRlLS1zdWNjZXNzXCIpLnRleHQoXCJDb25leMOjbyByZWVzdGFiZWxlY2lkYSFcIikuYXBwZW5kVG8oJGNvbm5lY3Rpb25fc3RhdHVzKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0JGNvbm5lY3Rpb25fc3RhdHVzLmVtcHR5KCk7XG5cdFx0fSwgNDAwMCk7XG5cdH0gZWxzZSB7XG5cdFx0JGNvbm5lY3Rpb25fc3RhdHVzLmVtcHR5KCk7XG5cdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCItc3RhdGUtLWVycm9yXCIpLnRleHQoXCJTZW0gY29uZXjDo29cIikuYXBwZW5kVG8oJGNvbm5lY3Rpb25fc3RhdHVzKTtcblx0fVxufTtcblxuJCh3aW5kb3cpLm9uKFwib25saW5lIG9mZmxpbmVcIiwgdXBkYXRlQ29ubmVjdGlvblN0YXR1cyk7XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib25saW5lXCIsIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMpO1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMpO1xuIl19
