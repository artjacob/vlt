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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiLCJzdGF0aW9uLWluZm8uanMiLCJsaW5lLWluZm8uanMiLCJnZXQtbG9jYXRpb24uanMiLCJuZWFyZXN0LXN0YXRpb24uanMiLCJuZXh0LWRlcGFydHVyZXMuanMiLCJzdGF0aW9uLWxpc3QuanMiLCJ0aGVtZS5qcyIsInN0YXJ0LmpzIl0sIm5hbWVzIjpbImN1ZSIsIiRwYW5lbCIsIiRzdGF0aW9uIiwiJHBlcm1pc3Npb24iLCJzdGF0aW9ucyIsInN0YXRpb25faW5kZXgiLCJmb3JFYWNoIiwic3RhdGlvbiIsInN0YXRpb25fbmFtZSIsImxpbmVzIiwibGluZV9pbmRleCIsImxpbmUiLCJsaW5lX25hbWUiLCJnZXRMb2NhdGlvbiIsImlzX2luaXRpYWwiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwiJCIsInJlbW92ZUNsYXNzIiwibmVhcmVzdF9zdGF0aW9uIiwibmVhcmVzdFN0YXRpb24iLCJuZXh0RGVwYXJ0dXJlcyIsImRlZzJyYWQiLCJkZWciLCJNYXRoIiwiUEkiLCJ1c2VyX2Nvb3JkaW5hdGVzIiwidXNlcl9sYXRpdHVkZSIsInVzZXJfbG9uZ2l0dWRlIiwiUiIsInNob3J0ZXN0X2Rpc3RhbmNlIiwic3RhdGlvbl9sYXRpdHVkZSIsInN0YXRpb25fbG9uZ2l0dWRlIiwieCIsImNvcyIsInkiLCJkaXN0YW5jZSIsInNxcnQiLCJmcm9tX2dwcyIsImRlcGFydHVyZXMiLCJjbGVhckludGVydmFsIiwid2luZG93Iiwib2ZmIiwidGV4dCIsImFkZENsYXNzIiwibGFzdFVwZGF0ZWQiLCIkYmFkZ2UiLCJjb25uZWN0ZWQiLCJvbkxpbmUiLCJzZWNvbmRzX3NpbmNlX3VwZGF0ZSIsIm1vbWVudCIsImRpZmYiLCJsYXN0X3VwZGF0ZWQiLCJmcm9tTm93IiwiJHN0YXR1cyIsImVtcHR5IiwiYXBwZW5kIiwiZ2V0RGF0YSIsImRvY3VtZW50IiwiaGlkZGVuIiwiZ2V0SlNPTiIsImRvbmUiLCJyZXNwb25zZSIsImV0YV9jb3VudCIsImRpcmVjdGlvbnMiLCJkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbiIsImRpcmVjdGlvbiIsImRpcmVjdGlvbl90aXRsZSIsImxlbmd0aCIsImluY2x1ZGVzIiwicHVzaCIsInRyYWluIiwiZW52Iiwibm93Iiwib3BlcmF0aW9uX3N0YXJ0X3RpbWUiLCJvcGVyYXRpb25fZW5kX3RpbWUiLCJpc0FmdGVyIiwiaXNCZWZvcmUiLCIkZGVwYXJ0dXJlcyIsIiR0aXRsZSIsIm9uIiwiYXBwZW5kVG8iLCJzaGFyZV90ZXh0IiwiJGRpcmVjdGlvbiIsImV0YXMiLCJzb3J0IiwiYSIsImIiLCIkdHJhaW4iLCIkbGluZSIsImlzX2FwcHJvYWNoaW5nIiwiZGVwYXJ0dXJlX2NvdW50ZG93biIsInJvdW5kIiwiZGVwYXJ0dXJlX3RpbWUiLCJmb3JtYXQiLCJjc3MiLCJhdHRyIiwiaHRtbCIsIm9yaWdpbl9hbmRfZGVzdGluYXRpb24iLCJkZXN0aW5hdGlvbiIsIiRjaGFuZ2UiLCIkYnV0dG9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZVdpbmRvdyIsInNldEludGVydmFsIiwiJHN0YXRpb25zIiwiJG5lYXJlc3QiLCIkbGluZXMiLCIkc2hpZWxkIiwidG9nZ2xlQ2xhc3MiLCJzY3JvbGxfdG9wX3Bvc2l0aW9uIiwic2Nyb2xsVG9wIiwiVGhlbWUiLCJ0aGVtZV9vcmRlciIsInRoZW1lX3NldHRpbmdzIiwic2V0IiwibmV3X3RoZW1lIiwib2xkX3RoZW1lIiwiY3VycmVudF90aGVtZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwiZ2V0SXRlbSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicmVwbGFjZSIsInRoZW1lX3Bvc2l0aW9uIiwiaW5kZXhPZiIsInBlcm1pc3Npb25zIiwicXVlcnkiLCJ0aGVuIiwicGVybWlzc2lvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJyZWdpc3RyYXRpb24iLCJlcnJvciIsIiRjb25uZWN0aW9uX3N0YXR1cyIsInVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUFBLEdBQUEsR0FBQSxFQUFBO0FBQ0EsSUFBQUMsTUFBQSxFQUFBQyxRQUFBLEVBQUFDLFdBQUE7QUNEQSxJQUFBQyxRQUFBLEdBQUEsQ0FDQTtBQUNBLFVBQUEsZ0JBREE7QUFFQSxRQUFBLGdCQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBREEsRUFTQTtBQUNBO0FBQ0EsVUFBQSxVQUZBO0FBR0EsUUFBQSxVQUhBO0FBSUE7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBTEE7QUFNQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBUEEsQ0FUQSxFQWtCQTtBQUNBLFVBQUEsWUFEQTtBQUVBLFFBQUEsWUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQWxCQSxFQTBCQTtBQUNBLFVBQUEsU0FEQTtBQUVBLFFBQUEsU0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQTFCQSxFQWtDQTtBQUNBLFVBQUEsU0FEQTtBQUVBLFFBQUEsU0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQWxDQSxFQTBDQTtBQUNBLFVBQUEsaUJBREE7QUFFQSxRQUFBLGlCQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0ExQ0EsRUFrREE7QUFDQSxVQUFBLFlBREE7QUFFQSxRQUFBLFlBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FsREEsRUEwREE7QUFDQSxVQUFBLFNBREE7QUFFQSxRQUFBLFNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQTFEQSxFQWtFQTtBQUNBLFVBQUEsbUJBREE7QUFFQSxRQUFBLG1CQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbEVBLEVBMEVBO0FBQ0E7QUFDQSxVQUFBLGtCQUZBO0FBR0EsUUFBQSxrQkFIQTtBQUlBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUxBO0FBTUE7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFQQSxDQTFFQSxFQW1GQTtBQUNBLFVBQUEsU0FEQTtBQUVBLFFBQUEsU0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQW5GQSxFQTJGQTtBQUNBLFVBQUEsUUFEQTtBQUVBLFFBQUEsUUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQTNGQSxFQW1HQTtBQUNB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QUEsQ0FBQSxDQUFBdUMsRUFBQSxDQUFBLGdCQUFBLEVBQUEyRCxzQkFBQSxFLENBRUE7QUFDQSIsImZpbGUiOiJ2bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY3VlID0gWyBdO1xyXG5sZXQgJHBhbmVsLCAkc3RhdGlvbiwgJHBlcm1pc3Npb247XHJcbiIsImxldCBzdGF0aW9ucyA9IFtcblx0e1xuXHRcdFwibmFtZVwiOiBcIkFudG9uaW8gQ2FybG9zXCIsXG5cdFx0XCJpZFwiOiBcImFudG9uaW8tY2FybG9zXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDIsIDM6IDIgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTExMzE1MzQ0MzkxMzE5LCAtNDMuMTcyMDUwOTk3NTk4MjQxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHQvLyBcImRpc2FibGVkXCI6IHRydWUsXG5cdFx0XCJuYW1lXCI6IFwiQ2FtZXJpbm9cIixcblx0XHRcImlkXCI6IFwiY2FtZXJpbm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogOCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDE2OTgwNDYwMjIzODIsIC00My4xODM5ODM2MTQ5MzM0ODldLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNhbmRlbMOhcmlhXCIsXG5cdFx0XCJpZFwiOiBcImNhbmRlbGFyaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNiwgMzogNiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDE3MjUwMjkzODQyNTksIC00My4xNzg4MDg2NjU0MTg2NzFdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNhcmlvY2FcIixcblx0XHRcImlkXCI6IFwiY2FyaW9jYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA0LCAzOiA0IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNzQ4NDUwNzI1MjgxMSwgLTQzLjE3NjY0NTUxODAzODkxN10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ2VudHJhbFwiLFxuXHRcdFwiaWRcIjogXCJjZW50cmFsXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDUsIDM6IDEwIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMjcwNDk2MDc0NDk1MiwgLTQzLjE5MjYyNTMxNDM3NzMzOF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ2lkYWRlIGRvIFNhbWJhXCIsXG5cdFx0XCJpZFwiOiBcImNpZGFkZS1kby1zYW1iYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTQxNzk5NTcxMjgwNjcsIC00My4xOTY4ODQwODIwNzg0NzZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNpbmVsw6JuZGlhXCIsXG5cdFx0XCJpZFwiOiBcImNpbmVsYW5kaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMywgMzogMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MTA3MzQwMDE4NDIyNDMsIC00My4xNzU0MjUzODczNjQ5MzJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNvbG9tYm9cIixcblx0XHRcImlkXCI6IFwiY29sb21ib1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNTE3NTIxOTAwOTQxNSwgLTQzLjE3ODAxNjk2ODIyODgxOF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ29yZGVpcm8gZGEgR3Jhw6dhXCIsXG5cdFx0XCJpZFwiOiBcImNvcmRlaXJvLWRhLWdyYWNhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEzLCAyOiA4IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NzEwNDYyOTkyMzExNywgLTQzLjIwNDE3ODQwMzUzMzcwM10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIkNyaXN0aWFubyBPdHRvbmlcIixcblx0XHRcImlkXCI6IFwiY3Jpc3RpYW5vLW90dG9uaVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAzOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMzA2MTI3ODQ4MDY0OCwgLTQzLjE5MDc0OTEwOTQyMTQ4OV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiRXF1YWRvclwiLFxuXHRcdFwiaWRcIjogXCJlcXVhZG9yXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE4LCAyOiAxMSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTc4OTQ1NjQ2ODc3ODIsIC00My4yMDQ4MDUwMTQ0NDA4MTVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkdhbWJvYVwiLFxuXHRcdFwiaWRcIjogXCJnYW1ib2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTYsIDI6IDYgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3OTU5NDA4MzcyODQ1LCAtNDMuMTk5MzM2NjgzMjQ2MzAxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJIYXJtb25pYVwiLFxuXHRcdFwiaWRcIjogXCJoYXJtb25pYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTU3NTQ0MzcyNzMzODYsIC00My4xOTE0Mjc2Mzk1ODQ0OTZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlBhcmFkYSBkb3MgTXVzZXVzXCIsXG5cdFx0XCJpZFwiOiBcInBhcmFkYS1kb3MtbXVzZXVzXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDggfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1OTQ2NTg2ODAyMjY0LCAtNDMuMTgxOTU1OTgwNTgxMjcyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQYXJhZGEgZG9zIE5hdmlvc1wiLFxuXHRcdFwiaWRcIjogXCJwYXJhZGEtZG9zLW5hdmlvc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NDEzOTYyNTMwMzg3NSwgLTQzLjE4NzE4MTgzMDYxNzQ0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQZXJlaXJhIFJlaXNcIixcblx0XHRcImlkXCI6IFwicGVyZWlyYS1yZWlzXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE3LCAyOiAxMCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTY2NDcwNjQ5NjA0MywgLTQzLjIwMTc3MzExMTUyMzU5M10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJhw6dhIFhWXCIsXG5cdFx0XCJpZFwiOiBcInByYWNhLXh2XCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAyMDcwMTI4OTQ1ODQ4LCAtNDMuMTczMTE3Mzk1NzgzODc2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQcmFpYSBGb3Jtb3NhXCIsXG5cdFx0XCJpZFwiOiBcInByYWlhLWZvcm1vc2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTAsIDI6IDEzIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMzE3NzE1MjM4ODA1NywgLTQzLjIwODE2MTk2NDkwMjMwM10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJvdmlkw6puY2lhXCIsXG5cdFx0XCJpZFwiOiBcInByb3ZpZGVuY2lhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE1IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NzQ4OTkyMjAxNDM4MywgLTQzLjE5NjcwMTQwMDg5MDAzNV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUm9kb3Zpw6FyaWFcIixcblx0XHRcImlkXCI6IFwicm9kb3ZpYXJpYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxOSwgMjogMTIgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk4ODA1NTc0MjUxNzk5LCAtNDMuMjA3MzQyOTQxNDc1OTg2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTYWFyYVwiLFxuXHRcdFwiaWRcIjogXCJzYWFyYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA0IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNTkxMjEwODQ2MDI1MywgLTQzLjE4NzMyMDc4MjIyODIwNV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIlNhbnRhIFJpdGFcIixcblx0XHRcImlkXCI6IFwic2FudGEtcml0YVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAzOiA3IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMDU5NDE2NzQxMDY0OSwgLTQzLjE4MTUwOTA0OTg1NDIwNl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFszXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FudG8gQ3Jpc3RvXCIsXG5cdFx0XCJpZFwiOiBcInNhbnRvLWNyaXN0b1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMiwgMjogNyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTUzMjcyODIwMDIxNDYsIC00My4yMDAyNTkxODE3NTU3NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FudG9zIER1bW9udFwiLFxuXHRcdFwiaWRcIjogXCJzYW50b3MtZHVtb250XCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEsIDM6IDEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTEyMjg2ODc0OTYyNDAxLCAtNDMuMTY3NjMyMjU5NTQ1ODRdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlPDo28gQmVudG9cIixcblx0XHRcImlkXCI6IFwic2FvLWJlbnRvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDcgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk4NjQ4MDk2MDUxMDEyLCAtNDMuMTc5OTY0MzExNzY0ODg0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTZXRlIGRlIFNldGVtYnJvXCIsXG5cdFx0XCJpZFwiOiBcInNldGUtZGUtc2V0ZW1icm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNSwgMzogNSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDUzMDU5MDA5Nzc4OTcsIC00My4xNzc0NjM4MTYzNDY5MjJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlRpcmFkZW50ZXNcIixcblx0XHRcImlkXCI6IFwidGlyYWRlbnRlc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAzIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNjU3ODIyMjAyNjExNiwgLTQzLjE4Mjg1NDIzNjU1NzgwMl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiVXRvcGlhIEFxdWFSaW9cIixcblx0XHRcImlkXCI6IFwidXRvcGlhLWFxdWFyaW9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTAgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODkzMDk1NDcxOTk5NjEyLCAtNDMuMTkwMjM2OTA3MjEzMjE5XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJWaWxhIE9sw61tcGljYVwiLFxuXHRcdFwiaWRcIjogXCJ2aWxhLW9saW1waWNhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDkgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk5MDU2NTcyNjQ2NTMzLCAtNDMuMTk5NjQzNTI5NDk1Mjk3XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzJdXG5cdH1cbl07XG5cbmxldCBzdGF0aW9uX2luZGV4ID0ge307XG5zdGF0aW9ucy5mb3JFYWNoKChzdGF0aW9uKSA9PiB7XG5cdGxldCBzdGF0aW9uX25hbWUgPSBzdGF0aW9uW1wibmFtZVwiXTtcblx0c3RhdGlvbl9pbmRleFtzdGF0aW9uX25hbWVdID0gc3RhdGlvbjtcbn0pO1xuIiwibGV0IGxpbmVzID0gW1xuXHR7XG5cdFx0XCJpZFwiOiAxLFxuXHRcdFwibmFtZVwiOiBcIkxpbmhhIDFcIixcblx0XHRcImNvbG9yXCI6IFwiIzY4YjlmYlwiLFxuXHRcdC8vIFwiZGlyZWN0aW9uc1wiOiBbXG5cdFx0Ly8gXHRcIlNhbnRvcyBEdW1vbnRcIixcblx0XHQvLyBcdFwiUHJhaWEgRm9ybW9zYVwiXG5cdFx0Ly8gXVxuXHR9LFxuXHR7XG5cdFx0XCJpZFwiOiAyLFxuXHRcdFwibmFtZVwiOiBcIkxpbmhhIDJcIixcblx0XHRcImNvbG9yXCI6IFwiIzczY2EzZlwiLFxuXHRcdC8vIFwiZGlyZWN0aW9uc1wiOiBbXG5cdFx0Ly8gXHRcIlByYcOnYSBYVlwiLFxuXHRcdC8vIFx0XCJQcmFpYSBGb3Jtb3NhXCJcblx0XHQvLyBdXG5cdH0sXG5cdHtcblx0XHQvLyBcImRpc2FibGVkXCI6IHRydWUsXG5cdFx0XCJpZFwiOiAzLFxuXHRcdFwibmFtZVwiOiBcIkxpbmhhIDNcIixcblx0XHRcImNvbG9yXCI6IFwiI2YzYTIzMFwiLFxuXHRcdC8vIFwiZGlyZWN0aW9uc1wiOiBbXG5cdFx0Ly8gXHRcIlNhbnRvcyBEdW1vbnRcIixcblx0XHQvLyBcdFwiQ2VudHJhbFwiXG5cdFx0Ly8gXVxuXHR9XG5dO1xuXG5sZXQgbGluZV9pbmRleCA9IHsgfTtcbmxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcblx0bGV0IGxpbmVfbmFtZSA9IGxpbmVbXCJuYW1lXCJdO1xuXHRsaW5lX2luZGV4W2xpbmVfbmFtZV0gPSBsaW5lO1xufSk7XG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBnZXQgbG9jYXRpb24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIFBlZ2EgYSBsb2NhbGl6YcOnw6NvIGRvIHVzdcOhcmlvXG5jb25zdCBnZXRMb2NhdGlvbiA9IChpc19pbml0aWFsID0gZmFsc2UpID0+IHtcblx0bmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcblx0XHQvLyBTZSB2aWVyIGRvIG1vZG8gaW5pY2lhbCwgZW5jZXJyYSBlbGVcblx0XHRpZiAoaXNfaW5pdGlhbCkge1xuXHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0taW5pdGlhbFwiKTtcblx0XHRcdCRwYW5lbC5yZW1vdmVDbGFzcyhcIi1zdGF0ZS0tcGVybWlzc2lvblwiKTtcblx0XHR9XG5cblx0XHQvLyBEZXNjb2JyZSBhIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hIGUgcHJvY3VyYSBhcyBwcsOzeGltYXMgcGFydGlkYXNcblx0XHRsZXQgbmVhcmVzdF9zdGF0aW9uID0gbmVhcmVzdFN0YXRpb24oW3Bvc2l0aW9uW1wiY29vcmRzXCJdW1wibGF0aXR1ZGVcIl0sIHBvc2l0aW9uW1wiY29vcmRzXCJdW1wibG9uZ2l0dWRlXCJdXSk7XG5cdFx0bmV4dERlcGFydHVyZXMobmVhcmVzdF9zdGF0aW9uLCB0cnVlKTtcblx0fSk7XG59O1xuIiwiLy8gRXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcbmNvbnN0IGRlZzJyYWQgPSAoZGVnKSA9PiB7XG5cdHJldHVybiBkZWcgKiAoTWF0aC5QSSAvIDE4MCk7XG59O1xuXG5jb25zdCBuZWFyZXN0U3RhdGlvbiA9ICh1c2VyX2Nvb3JkaW5hdGVzKSA9PiB7XG5cdGxldCB1c2VyX2xhdGl0dWRlID0gZGVnMnJhZCh1c2VyX2Nvb3JkaW5hdGVzWzBdKTtcblx0bGV0IHVzZXJfbG9uZ2l0dWRlID0gZGVnMnJhZCh1c2VyX2Nvb3JkaW5hdGVzWzFdKTtcblxuXHRsZXQgUiA9IDYzNzE7XG5cblx0bGV0IHNob3J0ZXN0X2Rpc3RhbmNlID0gbnVsbDtcblx0bGV0IG5lYXJlc3Rfc3RhdGlvbiA9IG51bGw7XG5cblx0c3RhdGlvbnMuZm9yRWFjaCgoc3RhdGlvbikgPT4ge1xuXHRcdGlmICghc3RhdGlvbltcImRpc2FibGVkXCJdKSB7XG5cdFx0XHRsZXQgc3RhdGlvbl9sYXRpdHVkZSA9IGRlZzJyYWQoc3RhdGlvbltcImNvb3JkaW5hdGVzXCJdWzBdKTtcblx0XHRcdGxldCBzdGF0aW9uX2xvbmdpdHVkZSA9IGRlZzJyYWQoc3RhdGlvbltcImNvb3JkaW5hdGVzXCJdWzFdKTtcblxuXHRcdFx0bGV0IHggPSAoc3RhdGlvbl9sb25naXR1ZGUgLSB1c2VyX2xvbmdpdHVkZSkgKiBNYXRoLmNvcygodXNlcl9sYXRpdHVkZSArIHN0YXRpb25fbGF0aXR1ZGUpIC8gMik7XG5cdFx0XHRsZXQgeSA9IChzdGF0aW9uX2xhdGl0dWRlIC0gdXNlcl9sYXRpdHVkZSk7XG5cdFx0XHRsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSkgKiBSO1xuXG5cdFx0XHRpZiAoIXNob3J0ZXN0X2Rpc3RhbmNlIHx8IGRpc3RhbmNlIDwgc2hvcnRlc3RfZGlzdGFuY2UpIHtcblx0XHRcdFx0c2hvcnRlc3RfZGlzdGFuY2UgPSBkaXN0YW5jZTtcblx0XHRcdFx0bmVhcmVzdF9zdGF0aW9uID0gc3RhdGlvbjtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBuZWFyZXN0X3N0YXRpb247XG59O1xuIiwiLy8gUHLDs3hpbWFzIHBhcnRpZGFzXG5jb25zdCBuZXh0RGVwYXJ0dXJlcyA9IChzdGF0aW9uLCBmcm9tX2dwcyA9IGZhbHNlKSA9PiB7XG5cdGxldCBkZXBhcnR1cmVzO1xuXG5cdC8vIERlc2xpZ2EgaW50ZXJ2YWxvcyBlIGV2ZW50b3MgZXhpc3RlbnRlc1xuXHRjbGVhckludGVydmFsKGN1ZVtcImludGVydmFsLWRlcGFydHVyZXNcIl0pO1xuXHRjbGVhckludGVydmFsKGN1ZVtcImludGVydmFsLWxhc3QtdXBkYXRlZFwiXSk7XG5cdCQod2luZG93KS5vZmYoXCJ2aXNpYmlsaXR5Y2hhbmdlIG9ubGluZVwiKTtcblxuXHQvLyBDb2xvY2EgbyBub21lIGRhIGVzdGHDp8OjbyBubyBhcHBiYXJcblx0JChcIi5zdGF0aW9ucyBoMSAuc3RhdGlvbi1uYW1lXCIpLnRleHQoc3RhdGlvbltcIm5hbWVcIl0pO1xuXG5cdC8vIE1vc3RyYSBhbmltYcOnw6NvIGRlIGxvYWRcblx0JHBhbmVsLmFkZENsYXNzKFwiLXN0YXRlLS1sb2FkaW5nXCIpO1xuXG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdC8vIEF0dWFsaXphw6fDo29cblx0Y29uc3QgbGFzdFVwZGF0ZWQgPSAoKSA9PiB7XG5cdFx0bGV0ICRiYWRnZSA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdHVzLWJhZGdlXCIpO1xuXHRcdGxldCBjb25uZWN0ZWQgPSBuYXZpZ2F0b3Iub25MaW5lO1xuXG5cdFx0Ly8gVGVtcG8gZW0gc2VndW5kb3MgZGVzZGUgYSDDumx0aW1hIGF0dWFsaXphw6fDo29cblx0XHRsZXQgc2Vjb25kc19zaW5jZV91cGRhdGUgPSBtb21lbnQoKS5kaWZmKGRlcGFydHVyZXNbXCJsYXN0VXBkYXRlZFwiXSwgXCJzZWNvbmRzXCIpO1xuXG5cdFx0Ly8gU2UgdGl2ZXIgc2lkbyBhdHVhbGl6YWRvIGjDoSBtZW5vcyBkZSA2MCBzZWd1bmRvcywgbW9zdHJhIFRlbXBvIFJlYWxcblx0XHRpZiAoc2Vjb25kc19zaW5jZV91cGRhdGUgPD0gNjApIHtcblx0XHRcdCRiYWRnZS5hZGRDbGFzcyhcIi1zdGF0ZS0tcmVhbC10aW1lXCIpLnRleHQoXCJUZW1wbyByZWFsXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgbGFzdF91cGRhdGVkID0gXCJBdHVhbGl6YWRvIFwiICsgbW9tZW50KGRlcGFydHVyZXNbXCJsYXN0VXBkYXRlZFwiXSkuZnJvbU5vdyh0cnVlKSArIFwiIGF0csOhc1wiO1xuXHRcdFx0JGJhZGdlLnRleHQobGFzdF91cGRhdGVkKTtcblx0XHR9XG5cblx0XHQkc3RhdHVzLmVtcHR5KCkuYXBwZW5kKCRiYWRnZSk7XG5cdH07XG5cblxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0Ly8gQ29uc3VsdGEgZG9zIGRhZG9zXG5cdGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG5cdFx0Ly8gU8OzIGNhcnJlZ2Egc2UgZXN0aXZlciBjb20gZm9jb1xuXHRcdGlmIChkb2N1bWVudC5oaWRkZW4gPT09IHRydWUgfHwgbmF2aWdhdG9yLm9uTGluZSA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBDYXJyZWdhIG9zIGRhZG9zXG5cdFx0JC5nZXRKU09OKFwiaHR0cHM6Ly9lbWl0cmVtbXVzLmNvbS8tL3ZsdC9kZXBhcnR1cmVzP2NhbGxiYWNrPT9cIiwge1xuXHRcdFx0XCJzdGF0aW9uXCI6IHN0YXRpb25bXCJpZFwiXSxcblx0XHRcdC8vIFwiZW52XCI6IFwiZGV2XCJcblx0XHR9KS5kb25lKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0ZGVwYXJ0dXJlcyA9IHJlc3BvbnNlO1xuXG5cdFx0XHRsZXQgZXRhX2NvdW50ID0gMDtcblx0XHRcdGxldCBkaXJlY3Rpb25zID0gWyBdO1xuXHRcdFx0bGV0IGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uID0geyB9O1xuXG5cdFx0XHQvLyBPcmdhbml6YSBhcyBwYXJ0aWRhcyBwb3IgZGVzdGlub1xuXHRcdFx0ZGVwYXJ0dXJlc1tcImxpbmVzXCJdLmZvckVhY2goKGxpbmUpID0+IHtcblx0XHRcdFx0bGluZVtcImRpcmVjdGlvbnNcIl0uZm9yRWFjaCgoZGlyZWN0aW9uKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGRpcmVjdGlvbl90aXRsZSA9IGRpcmVjdGlvbltcIm5hbWVcIl07XG5cdFx0XHRcdFx0ZXRhX2NvdW50ICs9IGRpcmVjdGlvbltcImV0YXNcIl0ubGVuZ3RoO1xuXG5cdFx0XHRcdFx0aWYgKGRpcmVjdGlvbltcImV0YXNcIl0ubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0aWYgKCFkaXJlY3Rpb25zLmluY2x1ZGVzKGRpcmVjdGlvbl90aXRsZSkpIHtcblx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9ucy5wdXNoKGRpcmVjdGlvbl90aXRsZSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICghZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb25bZGlyZWN0aW9uX3RpdGxlXSkge1xuXHRcdFx0XHRcdFx0XHRkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbltkaXJlY3Rpb25fdGl0bGVdID0gWyBdO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRkaXJlY3Rpb25bXCJldGFzXCJdLmZvckVhY2goKHRyYWluKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRyYWluW1wibGluZVwiXSA9IGxpbmVbXCJuYW1lXCJdO1xuXHRcdFx0XHRcdFx0XHRkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbltkaXJlY3Rpb25fdGl0bGVdLnB1c2godHJhaW4pO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBTZSBuw7ptZXJvIGRlIHByw7N4aW1hcyBwYXJ0aWRhcyBmb3IgemVybyxcblx0XHRcdC8vIGNvbmZlcmUgc2UgYWluZGEgZXN0w6EgZGVudHJvIGRvIGhvcsOhcmlvIGRlIGZ1bmNpb25hbWVudG9cblx0XHRcdGlmIChldGFfY291bnQgPT09IDAgJiYgZW52ID09PSBcInByb2R1Y3Rpb25cIikge1xuXHRcdFx0XHRsZXQgbm93ID0gbW9tZW50KCk7XG5cdFx0XHRcdGxldCBvcGVyYXRpb25fc3RhcnRfdGltZSA9IG1vbWVudChcIjA2OjAwXCIsIFwiSEg6bW1cIik7XG5cdFx0XHRcdGxldCBvcGVyYXRpb25fZW5kX3RpbWUgPSBtb21lbnQoXCIwMDowMFwiLCBcIkhIOm1tXCIpO1xuXG5cdFx0XHRcdGlmIChub3cuaXNBZnRlcihvcGVyYXRpb25fZW5kX3RpbWUpICYmIG5vdy5pc0JlZm9yZShvcGVyYXRpb25fc3RhcnRfdGltZSkpIHtcblx0XHRcdFx0XHQkcGFuZWwuYWRkQ2xhc3MoXCItc3RhdGUtLWNsb3NlZFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gTW9udGEgYXMgcGFydGlkYXNcblx0XHRcdFx0bGV0ICRkZXBhcnR1cmVzID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJkZXBhcnR1cmVzXCIpO1xuXHRcdFx0XHRsZXQgJHRpdGxlID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJkZXBhcnR1cmVzLXRpdGxlXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdFx0XHRcdH0pLmFwcGVuZFRvKCRkZXBhcnR1cmVzKTtcblx0XHRcdFx0JChcIjxzcGFuIC8+XCIpLnRleHQoXCJQcsOzeGltb3MgdHJlbnNcIikuYXBwZW5kVG8oJHRpdGxlKTtcblxuXHRcdFx0XHQvLyBUZXh0byBwYXJhIGNvbXBhcnRpbGhhbWVudG9cblx0XHRcdFx0bGV0IHNoYXJlX3RleHQgPSBbXCJQcsOzeGltb3MgdHJlbnNcIiwgXCLwn5qJICpcIiArIHN0YXRpb25bXCJuYW1lXCJdICsgXCIqXCIsIFwiXCJdO1xuXG5cdFx0XHRcdC8vIGRpcmVjdGlvbnMuc29ydCgpO1xuXHRcdFx0XHRkaXJlY3Rpb25zLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuXHRcdFx0XHRcdGxldCAkZGlyZWN0aW9uID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJkaXJlY3Rpb25cIikuYXBwZW5kVG8oJGRlcGFydHVyZXMpO1xuXHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGlyZWN0aW9uLWNhcHRpb25cIikudGV4dChcIkRlc3Rpbm9cIikuYXBwZW5kVG8oJGRpcmVjdGlvbik7XG5cblx0XHRcdFx0XHRsZXQgZXRhcyA9IGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl07XG5cdFx0XHRcdFx0ZXRhcy5zb3J0KChhLCBiKSA9PiB7IHJldHVybiBhW1wic2Vjb25kc1wiXSAtIGJbXCJzZWNvbmRzXCJdIH0pO1xuXG5cdFx0XHRcdFx0ZXRhcy5mb3JFYWNoKCh0cmFpbikgPT4ge1xuXHRcdFx0XHRcdFx0bGV0ICR0cmFpbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW5cIikuYXBwZW5kVG8oJGRpcmVjdGlvbik7XG5cdFx0XHRcdFx0XHRsZXQgJGxpbmUgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInRyYWluLWxpbmVcIikuYXBwZW5kVG8oJHRyYWluKTtcblx0XHRcdFx0XHRcdGxldCBpc19hcHByb2FjaGluZyA9IHRyYWluW1wic2Vjb25kc1wiXSA8IDMwO1xuXG5cdFx0XHRcdFx0XHRsZXQgbGluZSA9IGxpbmVfaW5kZXhbdHJhaW5bXCJsaW5lXCJdXTtcblx0XHRcdFx0XHRcdGxldCBkZXBhcnR1cmVfY291bnRkb3duID0gKGlzX2FwcHJvYWNoaW5nPyBcIkFnb3JhXCIgOiBNYXRoLnJvdW5kKHRyYWluW1wic2Vjb25kc1wiXSAvIDYwKSArIFwiPHNwYW4+bWluPC9zcGFuPlwiKTtcblx0XHRcdFx0XHRcdGxldCBkZXBhcnR1cmVfdGltZSA9IG1vbWVudCh0cmFpbltcImFycml2YWxUaW1lXCJdKS5mb3JtYXQoXCJISDptbVwiKTtcblxuXHRcdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJsaW5lLXNoaWVsZFwiKS5jc3MoXCJjb2xvclwiLCBsaW5lW1wiY29sb3JcIl0pLmF0dHIoXCJ0aXRsZVwiLCBcIkxpbmhhIFwiICsgbGluZVtcImlkXCJdKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSkudGV4dChsaW5lW1wiaWRcIl0pLmFwcGVuZFRvKCRsaW5lKTtcblx0XHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW4tZGlyZWN0aW9uXCIpLmF0dHIoXCJ0aXRsZVwiLCBcIlRyZW0gXCIgKyB0cmFpbltcInRyYWluXCJdKS50ZXh0KGRpcmVjdGlvbikuYXBwZW5kVG8oJHRyYWluKTtcblx0XHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW4tZXRhXCIpLmF0dHIoXCJ0aXRsZVwiLCBkZXBhcnR1cmVfdGltZSkuaHRtbChkZXBhcnR1cmVfY291bnRkb3duKS5hcHBlbmRUbygkdHJhaW4pO1xuXG5cdFx0XHRcdFx0XHRpZiAoaXNfYXBwcm9hY2hpbmcpIHtcblx0XHRcdFx0XHRcdFx0JHRyYWluLmFkZENsYXNzKFwiLXN0YXRlLS1hcHByb2FjaGluZ1wiKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gVGV4dG8gcGFyYSBjb21wYXJ0aWxoYW1lbnRvXG5cdFx0XHRcdFx0XHRzaGFyZV90ZXh0LnB1c2goXCJMXCIgKyBsaW5lW1wiaWRcIl0gKyBcIiBcIiArIGRpcmVjdGlvbiArIFwiIFwiICsgZGVwYXJ0dXJlX3RpbWUpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBFc3RhZG8gZGEgY29uZXjDo28gZSBob3JhIGRhIMO6bHRpbWEgYXR1YWxpemHDp8Ojb1xuXHRcdFx0XHQkc3RhdHVzID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJzdGF0dXNcIikuYXBwZW5kVG8oJHRpdGxlKTtcblx0XHRcdFx0Ly8gJGNvbm5lY3Rpb25fc3RhdHVzID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJjb25uZWN0aW9uLXN0YXR1c1wiKS5hcHBlbmRUbygkc3RhdHVzKTtcblx0XHRcdFx0Ly8gJGxhc3RfdXBkYXRlZCA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwibGFzdC11cGRhdGVkXCIpLmFwcGVuZFRvKCRzdGF0dXMpO1xuXHRcdFx0XHRsYXN0VXBkYXRlZCgpO1xuXG5cdFx0XHRcdC8vIExpbXBhIG8gcGFpbmVsIGUgaW5zZXJlIG9zIG5vdm9zIGRhZG9zXG5cdFx0XHRcdCRwYW5lbC5yZW1vdmVDbGFzcyhcIi1zdGF0ZS0tY2xvc2VkXCIpO1xuXHRcdFx0XHQkc3RhdGlvbi5lbXB0eSgpLmFwcGVuZCgkZGVwYXJ0dXJlcyk7XG5cblx0XHRcdFx0Ly8gQ29tcGFydGlsaGFyXG5cdFx0XHRcdC8vIGlmIChuYXZpZ2F0b3Iuc2hhcmUpIHtcblx0XHRcdFx0Ly8gXHRsZXQgbG9uZ3ByZXNzO1xuXHRcdFx0XHQvLyBcdGxldCBsb25ncHJlc3NfZGVsYXkgPSAxMzAwO1xuXG5cdFx0XHRcdC8vIFx0JGRpcmVjdGlvbi5vbihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdFx0Ly8gXHRcdGxvbmdwcmVzcyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHQvLyBcdFx0XHRuYXZpZ2F0b3Iuc2hhcmUoe1xuXHRcdFx0XHQvLyBcdFx0XHRcdHRleHQ6IHNoYXJlX3RleHQuam9pbihcIlxcblwiKVxuXHRcdFx0XHQvLyBcdFx0XHR9KTtcblx0XHRcdFx0Ly8gXHRcdH0sIGxvbmdwcmVzc19kZWxheSk7XG5cdFx0XHRcdC8vIFx0fSkub24oXCJtb3VzZXVwIG1vdXNlb3V0XCIsICgpID0+IHtcblx0XHRcdFx0Ly8gXHRcdC8vIGNsZWFySW50ZXJ2YWwobG9uZ3ByZXNzKTtcblx0XHRcdFx0Ly8gXHR9KTtcblx0XHRcdFx0Ly8gfVxuXHRcdFx0fVxuXG5cdFx0XHQkcGFuZWwucmVtb3ZlQ2xhc3MoXCItc3RhdGUtLWxvYWRpbmdcIik7XG5cblx0XHRcdC8vIEFzIHBhcmFkYXMgU2V0ZSBkZSBTZXRlbWJybyBlIENvbG9tYm8gc8OjbyBtdWl0byBwcsOzeGltYXMsIGVudMOjbyDDqSBjb211bSBxdWUgYSBsb2NhbGl6YcOnw6NvXG5cdFx0XHQvLyBkbyBHUFMgZG8gdXN1w6FyaW8gbGV2ZSDDoCBlc3Rhw6fDo28gZXJyYWRhLiBQb3IgaXNzbywgbmVzc2FzIHBhcmFkYXMsIMOpIG1vc3RyYWRvIHVtIGJvdMOjbyBwYXJhXG5cdFx0XHQvLyBmYWNpbGl0YXIgYSB0cm9jYSBkZSBwYXJhZGEuIE8gYm90w6NvIHPDsyDDqSBleGliaWRvIHF1YW5kbyBvIHVzdcOhcmlvIHZlbSBkYSBsb2NhbGl6YcOnw6NvXG5cdFx0XHQvLyBhdXRvbcOhdGljYSAobsOjbyBtb3N0cmEgc2UgcGFyYWRhIGZvaSBlc2NvbGhpZGEgbm8gbWVudSlcblx0XHRcdGlmIChmcm9tX2dwcyA9PT0gdHJ1ZSAmJiBbXCJzZXRlLWRlLXNldGVtYnJvXCIsIFwiY29sb21ib1wiXS5pbmNsdWRlcyhzdGF0aW9uW1wiaWRcIl0pKSB7XG5cdFx0XHRcdGxldCBvcmlnaW5fYW5kX2Rlc3RpbmF0aW9uID0ge1xuXHRcdFx0XHRcdFwic2V0ZS1kZS1zZXRlbWJyb1wiOiB7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJDb2xvbWJvXCIsXG5cdFx0XHRcdFx0XHRcImlkXCI6IFwiY29sb21ib1wiXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcImNvbG9tYm9cIjoge1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiU2V0ZSBkZSBTZXRlbWJyb1wiLFxuXHRcdFx0XHRcdFx0XCJpZFwiOiBcInNldGUtZGUtc2V0ZW1icm9cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0XHRsZXQgZGVzdGluYXRpb24gPSBvcmlnaW5fYW5kX2Rlc3RpbmF0aW9uW3N0YXRpb25bXCJpZFwiXV07XG5cblx0XHRcdFx0bGV0ICRjaGFuZ2UgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImNoYW5nZS1zdGF0aW9uXCIpLmFwcGVuZFRvKCRzdGF0aW9uKTtcblx0XHRcdFx0bGV0ICRidXR0b24gPSAkKFwiPGEgLz5cIikuYWRkQ2xhc3MoXCJidXR0b25cIikuYXR0cihcImhyZWZcIiwgXCIjXCIpLmFwcGVuZFRvKCRjaGFuZ2UpO1xuXHRcdFx0XHQkKFwiPGkgLz5cIikuYWRkQ2xhc3MoXCJtYXRlcmlhbC1pY29uc1wiKS50ZXh0KFwibmVhcl9tZVwiKS5hcHBlbmRUbygkYnV0dG9uKTtcblx0XHRcdFx0JChcIjxzcGFuIC8+XCIpLnRleHQoXCJFc3TDoSBlbVwiKS5hcHBlbmRUbygkYnV0dG9uKTtcblx0XHRcdFx0JChcIjxzdHJvbmcgLz5cIikudGV4dChkZXN0aW5hdGlvbltcIm5hbWVcIl0gKyBcIj9cIikuYXBwZW5kVG8oJGJ1dHRvbik7XG5cblx0XHRcdFx0JGJ1dHRvbi5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0bmV4dERlcGFydHVyZXMoZGVzdGluYXRpb24pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXHQvLyBBdHVhbGl6YcOnw6NvXG5cdGNvbnN0IHVwZGF0ZVdpbmRvdyA9ICgpID0+IHtcblx0XHRpZiAoZG9jdW1lbnQuaGlkZGVuID09PSBmYWxzZSAmJiBuYXZpZ2F0b3Iub25MaW5lID09PSB0cnVlKSB7XG5cdFx0XHRsYXN0VXBkYXRlZCgpO1xuXHRcdFx0Z2V0RGF0YSgpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBDcmlhIG5vdm9zIGludGVydmFsb3MgZSBldmVudG9zXG5cdCQod2luZG93KS5vbihcIm9ubGluZSB2aXNpYmlsaXR5Y2hhbmdlXCIsIHVwZGF0ZVdpbmRvdyk7XG5cdGlmIChlbnYgPT09IFwicHJvZHVjdGlvblwiKSB7XG5cdFx0Y3VlW1wiaW50ZXJ2YWwtZGVwYXJ0dXJlc1wiXSA9IHNldEludGVydmFsKGdldERhdGEsIDE1MDAwKTtcblx0XHRjdWVbXCJpbnRlcnZhbC1sYXN0LXVwZGF0ZWRcIl0gPSBzZXRJbnRlcnZhbChsYXN0VXBkYXRlZCwgNTAwMCk7XG5cdH1cblxuXHRnZXREYXRhKCk7XG59O1xuIiwiJChmdW5jdGlvbigpIHtcblx0Ly8gTW9udGEgbGlzdGEgZGUgcGFyYWRhcyBlIGVzdGHDp8O1ZXNcblx0bGV0ICRzdGF0aW9ucyA9ICQoXCIuc3RhdGlvbnMgdWxcIik7XG5cblx0bGV0ICRuZWFyZXN0ID0gJChcIjxhIC8+XCIpLmF0dHIoXCJocmVmXCIsIFwiI1wiKS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0JChcIi5zdGF0aW9ucyBoMSAuc3RhdGlvbi1uYW1lXCIpLnRleHQoXCJcIik7XG5cdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRnZXRMb2NhdGlvbigpO1xuXHR9KS5hcHBlbmRUbygkc3RhdGlvbnMpO1xuXHQkKFwiPGkgLz5cIikuYWRkQ2xhc3MoXCJtYXRlcmlhbC1pY29uc1wiKS50ZXh0KFwibmVhcl9tZVwiKS5hcHBlbmRUbygkbmVhcmVzdCk7XG5cdCQoXCI8c3BhbiAvPlwiKS50ZXh0KFwiTG9jYWxpemFyIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXCIpLmFwcGVuZFRvKCRuZWFyZXN0KTtcblxuXHQkKFwiPGxpIC8+XCIpLmFkZENsYXNzKFwibmVhcmVzdC1zdGF0aW9uXCIpLmFwcGVuZCgkbmVhcmVzdCkuYXBwZW5kVG8oJHN0YXRpb25zKTtcblxuXHRzdGF0aW9ucy5mb3JFYWNoKChzdGF0aW9uKSA9PiB7XG5cdFx0bGV0ICRzdGF0aW9uID0gJChcIjxhIC8+XCIpLmF0dHIoXCJocmVmXCIsIFwiI1wiICsgc3RhdGlvbltcImlkXCJdKTtcblxuXHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdGlvbi1uYW1lXCIpLnRleHQoc3RhdGlvbltcIm5hbWVcIl0pLmFwcGVuZFRvKCRzdGF0aW9uKTtcblxuXHRcdGxldCAkbGluZXMgPSAkKFwiPHVsIC8+XCIpLmFkZENsYXNzKFwic3RhdGlvbi1saW5lc1wiKS5hcHBlbmRUbygkc3RhdGlvbik7XG5cdFx0bGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuXHRcdFx0bGV0ICRsaW5lID0gJChcIjxsaSAvPlwiKS5hcHBlbmRUbygkbGluZXMpO1xuXHRcdFx0aWYgKHN0YXRpb25bXCJsaW5lc1wiXS5pbmNsdWRlcyhsaW5lW1wiaWRcIl0pKSB7XG5cdFx0XHRcdGxldCAkc2hpZWxkID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJsaW5lLXNoaWVsZFwiKS5jc3MoXCJjb2xvclwiLCBsaW5lW1wiY29sb3JcIl0pLnRleHQobGluZVtcImlkXCJdKS5hcHBlbmRUbygkbGluZSk7XG5cblx0XHRcdFx0aWYgKGxpbmVbXCJkaXNhYmxlZFwiXSkge1xuXHRcdFx0XHRcdCRzaGllbGQuYXR0cihcImRpc2FibGVkXCIsIHRydWUpLmFkZENsYXNzKFwiLXN0YXRlLS1kaXNhYmxlZFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKCFzdGF0aW9uW1wiZGlzYWJsZWRcIl0pIHtcblx0XHRcdCRzdGF0aW9uLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdG5leHREZXBhcnR1cmVzKHN0YXRpb24pO1xuXHRcdFx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRzdGF0aW9uLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdC8vICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdFx0XHR9KTtcblx0XHRcdCRzdGF0aW9uLmFkZENsYXNzKFwiLXN0YXRlLS1kaXNhYmxlZFwiKTtcblx0XHR9XG5cblx0XHQkKFwiPGxpIC8+XCIpLmFwcGVuZCgkc3RhdGlvbikuYXBwZW5kVG8oJHN0YXRpb25zKTtcblx0fSk7XG5cblx0Ly8gTmF2ZWdhw6fDo29cblx0JChcIi5hcHBiYXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0JChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0fSk7XG5cblx0JCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIChldmVudCkgPT4ge1xuXHRcdGxldCBzY3JvbGxfdG9wX3Bvc2l0aW9uID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0aWYgKHNjcm9sbF90b3BfcG9zaXRpb24gPj0gMTIpIHtcblx0XHRcdCQoXCJib2R5XCIpLmFkZENsYXNzKFwiLW1vZGUtLXNjcm9sbFwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tc2Nyb2xsXCIpO1xuXHRcdH1cblx0fSk7XG59KTtcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gdGhlbWUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5sZXQgVGhlbWUgPSAoKCkgPT4ge1xyXG4gICAgbGV0IHRoZW1lX29yZGVyID0gW1xyXG4gICAgICAgIFwiYXV0b1wiLFxyXG4gICAgICAgIFwibGlnaHRcIixcclxuICAgICAgICBcImRhcmtcIlxyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgdGhlbWVfc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgXCJhdXRvXCI6IHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRlbWEgYXV0b23DoXRpY29cIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiYnJpZ2h0bmVzc19hdXRvXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibGlnaHRcIjoge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGVtYSBjbGFyb1wiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJicmlnaHRuZXNzXzVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkYXJrXCI6IHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRlbWEgZXNjdXJvXCIsXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImJyaWdodG5lc3NfNFwiXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHNldCA9IChuZXdfdGhlbWUsIG9sZF90aGVtZSkgPT4ge1xyXG4gICAgICAgIGN1cnJlbnRfdGhlbWUgPSBuZXdfdGhlbWU7XHJcblxyXG4gICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lIHNwYW5cIikudGV4dCh0aGVtZV9zZXR0aW5nc1tuZXdfdGhlbWVdW1widGl0bGVcIl0pO1xyXG4gICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lIGlcIikudGV4dCh0aGVtZV9zZXR0aW5nc1tuZXdfdGhlbWVdW1wiaWNvblwiXSk7XHJcblxyXG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLXRoZW1lLS1cIiArIG9sZF90aGVtZSkuYWRkQ2xhc3MoXCItdGhlbWUtLVwiICsgbmV3X3RoZW1lKTtcclxuXHJcbiAgICAgICAgLy8gU2FsdmEgY29uZmlndXJhw6fDo28gbm8gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgaWYgKG5ld190aGVtZSA9PT0gXCJhdXRvXCIpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0aGVtZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIG5ld190aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBDb25mZXJlIHNlIGrDoSBow6EgdGVtYSBzYWx2byBubyBsb2NhbFN0b3JhZ2UuXHJcbiAgICAvLyBTZSBuw6NvIGhvdXZlciwgcGVnYSBvIHBhZHLDo28gZG8gc2lzdGVtYVxyXG4gICAgbGV0IGN1cnJlbnRfdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIHx8IGdldENvbXB1dGVkU3R5bGUoJChcIi5zZXR0aW5ncyAuY3VycmVudC10aGVtZVwiKVswXSkuZ2V0UHJvcGVydHlWYWx1ZShcImNvbnRlbnRcIikucmVwbGFjZSgvXCIvZywgXCJcIik7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRfdGhlbWUpIHtcclxuICAgICAgICBzZXQoY3VycmVudF90aGVtZSwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKFwiLnNldHRpbmdzIC50aGVtZVwiKS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGVzY29icmUgYSBwb3Npw6fDo28gZG8gdGVtYSBuYSBvcmRlbVxyXG4gICAgICAgICAgICBsZXQgdGhlbWVfcG9zaXRpb24gPSB0aGVtZV9vcmRlci5pbmRleE9mKGN1cnJlbnRfdGhlbWUpO1xyXG4gICAgICAgICAgICBsZXQgbmV3X3RoZW1lID0gdGhlbWVfb3JkZXJbdGhlbWVfcG9zaXRpb24gKyAxXSB8fCB0aGVtZV9vcmRlclswXTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldGEgbyBub3ZvIHRlbWFcclxuICAgICAgICAgICAgc2V0KG5ld190aGVtZSwgY3VycmVudF90aGVtZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59KSgpO1xyXG4iLCIkKGZ1bmN0aW9uICgpIHtcblx0JHBhbmVsID0gJChcIi5wYW5lbFwiKTtcblx0JHN0YXRpb24gPSAkKFwiLnN0YXRpb25cIiwgJHBhbmVsKTtcblx0JHBlcm1pc3Npb24gPSAkKFwiLnBlcm1pc3Npb25cIiwgJHBhbmVsKTtcblxuXHQvLyBDb25mZXJlIHNlIHVzdcOhcmlvIGrDoSBoYXZpYSBoYWJpbGl0YWRvIGdlb2xvY2FsaXphw6fDo28gYW50ZXNcblx0aWYgKFwiZ2VvbG9jYXRpb25cIiBpbiBuYXZpZ2F0b3IpIHtcblx0XHRpZiAoXCJwZXJtaXNzaW9uc1wiIGluIG5hdmlnYXRvcikge1xuXHRcdFx0bmF2aWdhdG9yLnBlcm1pc3Npb25zLnF1ZXJ5KHsgXCJuYW1lXCI6IFwiZ2VvbG9jYXRpb25cIiB9KS50aGVuKChwZXJtaXNzaW9uKSA9PiB7XG5cdFx0XHRcdGlmIChwZXJtaXNzaW9uW1wic3RhdGVcIl0gPT09IFwiZ3JhbnRlZFwiKSB7XG5cdFx0XHRcdFx0Ly8gU2UgasOhIHRpdmVyLCBwZWdhIGEgbG9jYWxpemHDp8OjbyBhdHVhbCBlIHByb2N1cmEgZXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcblx0XHRcdFx0XHRnZXRMb2NhdGlvbigpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIFNlIG7Do28gdGl2ZXIsIG1vc3RyYSBib3TDo28gcGFyYSBzb2xpY2l0YXIgYXV0b3JpemHDp8Ojb1xuXHRcdFx0XHRcdCQoXCJib2R5XCIpLmFkZENsYXNzKFwiLW1vZGUtLWluaXRpYWxcIik7XG5cdFx0XHRcdFx0JHBhbmVsLmFkZENsYXNzKFwiLXN0YXRlLS1wZXJtaXNzaW9uXCIpO1xuXG5cdFx0XHRcdFx0JChcIi5idXR0b25cIiwgJHBlcm1pc3Npb24pLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0Z2V0TG9jYXRpb24odHJ1ZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRnZXRMb2NhdGlvbigpO1xuXHRcdH1cblx0fVxufSk7XG5cbi8vIFNlcnZpY2UgV29ya2VyXG5pZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG5cdFx0Y3VlW1wic2VydmljZS13b3JrZXJcIl0gPSBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihcIi9zZXJ2aWNlLXdvcmtlci5qc1wiKTtcblxuXHRcdGN1ZVtcInNlcnZpY2Utd29ya2VyXCJdLnRoZW4oKHJlZ2lzdHJhdGlvbikgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCFcIiwgcmVnaXN0cmF0aW9uKTtcblx0XHR9LCAoZXJyb3IpID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwiU2VydmljZSBXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogXCIsIGVycm9yKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbi8vIEVzdGFkbyBkYSBjb25leMOjb1xubGV0ICRzdGF0dXM7XG5sZXQgJGNvbm5lY3Rpb25fc3RhdHVzO1xuXG5jb25zdCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzID0gKCkgPT4ge1xuXHRyZXR1cm4gZmFsc2U7XG5cdGxldCBjb25uZWN0ZWQgPSBuYXZpZ2F0b3Iub25MaW5lO1xuXG5cdGlmIChjb25uZWN0ZWQgPT09IHRydWUpIHtcblx0XHQvLyAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcIi1zdGF0ZS0tc3VjY2Vzc1wiKS50ZXh0KFwiQ29uZXjDo28gcmVlc3RhYmVsZWNpZGEhXCIpLmFwcGVuZFRvKCRjb25uZWN0aW9uX3N0YXR1cyk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdCRjb25uZWN0aW9uX3N0YXR1cy5lbXB0eSgpO1xuXHRcdH0sIDQwMDApO1xuXHR9IGVsc2Uge1xuXHRcdCRjb25uZWN0aW9uX3N0YXR1cy5lbXB0eSgpO1xuXHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiLXN0YXRlLS1lcnJvclwiKS50ZXh0KFwiU2VtIGNvbmV4w6NvXCIpLmFwcGVuZFRvKCRjb25uZWN0aW9uX3N0YXR1cyk7XG5cdH1cbn07XG5cbiQod2luZG93KS5vbihcIm9ubGluZSBvZmZsaW5lXCIsIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMpO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzKTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzKTtcbiJdfQ==
