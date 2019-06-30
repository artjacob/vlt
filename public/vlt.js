"use strict";

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
    nextDepartures(nearest_station);
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
  var departures;
  var line_emoji = {
    1: "1️⃣",
    2: "2️⃣",
    3: "3️⃣"
  }; // Desliga intervalos e eventos existentes

  clearInterval(cue["interval-departures"]);
  clearInterval(cue["interval-last-updated"]);
  $(window).off("visibilitychange online"); // $(window).off("online");
  // Coloca o nome da estação no appbar

  $(".stations h1 .station-name").text(station["name"]); // Mostra animação de load

  $panel.addClass("-state--loading"); // Atualização

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
  };

  var getData = function getData() {
    // Só carrega se estiver com foco
    if (document.hidden === true || navigator.onLine === false) {
      return false;
    } // Carrega os dados


    $.getJSON("https://emitremmus.com/-/vlt/departures?callback=?", {
      "station": station["id"] // "env": "dev"

    }).done(function (response) {
      departures = response;
      var directions = [];
      var departures_by_direction = {};
      var eta_count = 0; // Organiza as partidas por destino

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

      if (eta_count === 0) {
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
        $("<span />").text("Próximos trens").appendTo($title);
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
            var is_approaching = train["seconds"] < 25;
            var line = line_index[train["line"]];
            var departure_countdown = is_approaching ? "Agora" : Math.round(train["seconds"] / 60) + "<span>min</span>";
            var departure_time = moment(train["arrivalTime"]).format("HH:mm");
            $("<div />").addClass("line-shield").css("color", line["color"]).attr("title", "Linha " + line["id"]).attr("disabled", true).text(line["id"]).appendTo($line);
            $("<div />").addClass("train-direction").attr("title", "Trem " + train["train"]).text(direction).appendTo($train);
            $("<div />").addClass("train-eta").attr("title", departure_time).html(departure_countdown).appendTo($train);

            if (is_approaching) {
              $train.addClass("-state--approaching");
            } // Texto para compartilhamento


            share_text.push(line_emoji[line["id"]] + " " + direction + " " + departure_time);
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

      $panel.removeClass("-state--loading");
    });
  };

  var updateWindow = function updateWindow() {
    if (document.hidden === false && navigator.onLine === true) {
      lastUpdated();
      getData();
    }
  };

  getData(); // Cria novos intervalos e eventos

  if (env === "production") {
    cue["interval-departures"] = setInterval(getData, 15000); // TEMP
  }

  $(window).on("online visibilitychange", updateWindow);
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

var cue = [];
var $panel, $station, $permission;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpb24taW5mby5qcyIsImxpbmUtaW5mby5qcyIsImdldC1sb2NhdGlvbi5qcyIsIm5lYXJlc3Qtc3RhdGlvbi5qcyIsIm5leHQtZGVwYXJ0dXJlcy5qcyIsInN0YXRpb24tbGlzdC5qcyIsInRoZW1lLmpzIiwic3RhcnQuanMiXSwibmFtZXMiOlsic3RhdGlvbnMiLCJzdGF0aW9uX2luZGV4IiwiZm9yRWFjaCIsInN0YXRpb24iLCJzdGF0aW9uX25hbWUiLCJsaW5lcyIsImxpbmVfaW5kZXgiLCJsaW5lIiwibGluZV9uYW1lIiwiZ2V0TG9jYXRpb24iLCJpc19pbml0aWFsIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsIiQiLCJyZW1vdmVDbGFzcyIsIiRwYW5lbCIsIm5lYXJlc3Rfc3RhdGlvbiIsIm5lYXJlc3RTdGF0aW9uIiwibmV4dERlcGFydHVyZXMiLCJkZWcycmFkIiwiZGVnIiwiTWF0aCIsIlBJIiwidXNlcl9jb29yZGluYXRlcyIsInVzZXJfbGF0aXR1ZGUiLCJ1c2VyX2xvbmdpdHVkZSIsIlIiLCJzaG9ydGVzdF9kaXN0YW5jZSIsInN0YXRpb25fbGF0aXR1ZGUiLCJzdGF0aW9uX2xvbmdpdHVkZSIsIngiLCJjb3MiLCJ5IiwiZGlzdGFuY2UiLCJzcXJ0IiwiZGVwYXJ0dXJlcyIsImxpbmVfZW1vamkiLCJjbGVhckludGVydmFsIiwiY3VlIiwid2luZG93Iiwib2ZmIiwidGV4dCIsImFkZENsYXNzIiwibGFzdFVwZGF0ZWQiLCIkYmFkZ2UiLCJjb25uZWN0ZWQiLCJvbkxpbmUiLCJzZWNvbmRzX3NpbmNlX3VwZGF0ZSIsIm1vbWVudCIsImRpZmYiLCJsYXN0X3VwZGF0ZWQiLCJmcm9tTm93IiwiJHN0YXR1cyIsImVtcHR5IiwiYXBwZW5kIiwiZ2V0RGF0YSIsImRvY3VtZW50IiwiaGlkZGVuIiwiZ2V0SlNPTiIsImRvbmUiLCJyZXNwb25zZSIsImRpcmVjdGlvbnMiLCJkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbiIsImV0YV9jb3VudCIsImRpcmVjdGlvbiIsImRpcmVjdGlvbl90aXRsZSIsImxlbmd0aCIsImluY2x1ZGVzIiwicHVzaCIsInRyYWluIiwibm93Iiwib3BlcmF0aW9uX3N0YXJ0X3RpbWUiLCJvcGVyYXRpb25fZW5kX3RpbWUiLCJpc0FmdGVyIiwiaXNCZWZvcmUiLCIkZGVwYXJ0dXJlcyIsIiR0aXRsZSIsIm9uIiwiYXBwZW5kVG8iLCJzaGFyZV90ZXh0IiwiJGRpcmVjdGlvbiIsImV0YXMiLCJzb3J0IiwiYSIsImIiLCIkdHJhaW4iLCIkbGluZSIsImlzX2FwcHJvYWNoaW5nIiwiZGVwYXJ0dXJlX2NvdW50ZG93biIsInJvdW5kIiwiZGVwYXJ0dXJlX3RpbWUiLCJmb3JtYXQiLCJjc3MiLCJhdHRyIiwiaHRtbCIsIiRzdGF0aW9uIiwiZW52Iiwic2V0SW50ZXJ2YWwiLCJ1cGRhdGVXaW5kb3ciLCIkc3RhdGlvbnMiLCIkbmVhcmVzdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkbGluZXMiLCIkc2hpZWxkIiwidG9nZ2xlQ2xhc3MiLCJzY3JvbGxfdG9wX3Bvc2l0aW9uIiwic2Nyb2xsVG9wIiwiVGhlbWUiLCJ0aGVtZV9vcmRlciIsInRoZW1lX3NldHRpbmdzIiwic2V0IiwibmV3X3RoZW1lIiwib2xkX3RoZW1lIiwiY3VycmVudF90aGVtZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwiZ2V0SXRlbSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicmVwbGFjZSIsInRoZW1lX3Bvc2l0aW9uIiwiaW5kZXhPZiIsIiRwZXJtaXNzaW9uIiwicGVybWlzc2lvbnMiLCJxdWVyeSIsInRoZW4iLCJwZXJtaXNzaW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInJlZ2lzdHJhdGlvbiIsImVycm9yIiwiJGNvbm5lY3Rpb25fc3RhdHVzIiwidXBkYXRlQ29ubmVjdGlvblN0YXR1cyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBQUEsUUFBQSxHQUFBLENBQ0E7QUFDQSxVQUFBLGdCQURBO0FBRUEsUUFBQSxnQkFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQURBLEVBU0E7QUFDQTtBQUNBLFVBQUEsVUFGQTtBQUdBLFFBQUEsVUFIQTtBQUlBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUxBO0FBTUE7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQVBBLENBVEEsRUFrQkE7QUFDQSxVQUFBLFlBREE7QUFFQSxRQUFBLFlBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FsQkEsRUEwQkE7QUFDQSxVQUFBLFNBREE7QUFFQSxRQUFBLFNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0ExQkEsRUFrQ0E7QUFDQSxVQUFBLFNBREE7QUFFQSxRQUFBLFNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FsQ0EsRUEwQ0E7QUFDQSxVQUFBLGlCQURBO0FBRUEsUUFBQSxpQkFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBMUNBLEVBa0RBO0FBQ0EsVUFBQSxZQURBO0FBRUEsUUFBQSxZQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbERBLEVBMERBO0FBQ0EsVUFBQSxTQURBO0FBRUEsUUFBQSxTQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0ExREEsRUFrRUE7QUFDQSxVQUFBLG1CQURBO0FBRUEsUUFBQSxtQkFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQWxFQSxFQTBFQTtBQUNBO0FBQ0EsVUFBQSxrQkFGQTtBQUdBLFFBQUEsa0JBSEE7QUFJQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FMQTtBQU1BO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBUEEsQ0ExRUEsRUFtRkE7QUFDQSxVQUFBLFNBREE7QUFFQSxRQUFBLFNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FuRkEsRUEyRkE7QUFDQSxVQUFBLFFBREE7QUFFQSxRQUFBLFFBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0EzRkEsRUFtR0E7QUFDQSxVQUFBLFVBREE7QUFFQSxRQUFBLFVBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQW5HQSxFQTJHQTtBQUNBLFVBQUEs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aW9ucyA9IFtcblx0e1xuXHRcdFwibmFtZVwiOiBcIkFudG9uaW8gQ2FybG9zXCIsXG5cdFx0XCJpZFwiOiBcImFudG9uaW8tY2FybG9zXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDIsIDM6IDIgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTExMzE1MzQ0MzkxMzE5LCAtNDMuMTcyMDUwOTk3NTk4MjQxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHQvLyBcImRpc2FibGVkXCI6IHRydWUsXG5cdFx0XCJuYW1lXCI6IFwiQ2FtZXJpbm9cIixcblx0XHRcImlkXCI6IFwiY2FtZXJpbm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogOCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDE2OTgwNDYwMjIzODIsIC00My4xODM5ODM2MTQ5MzM0ODldLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNhbmRlbMOhcmlhXCIsXG5cdFx0XCJpZFwiOiBcImNhbmRlbGFyaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNiwgMzogNiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDE3MjUwMjkzODQyNTksIC00My4xNzg4MDg2NjU0MTg2NzFdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNhcmlvY2FcIixcblx0XHRcImlkXCI6IFwiY2FyaW9jYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA0LCAzOiA0IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNzQ4NDUwNzI1MjgxMSwgLTQzLjE3NjY0NTUxODAzODkxN10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ2VudHJhbFwiLFxuXHRcdFwiaWRcIjogXCJjZW50cmFsXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDUsIDM6IDEwIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMjcwNDk2MDc0NDk1MiwgLTQzLjE5MjYyNTMxNDM3NzMzOF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ2lkYWRlIGRvIFNhbWJhXCIsXG5cdFx0XCJpZFwiOiBcImNpZGFkZS1kby1zYW1iYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTQxNzk5NTcxMjgwNjcsIC00My4xOTY4ODQwODIwNzg0NzZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNpbmVsw6JuZGlhXCIsXG5cdFx0XCJpZFwiOiBcImNpbmVsYW5kaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMywgMzogMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MTA3MzQwMDE4NDIyNDMsIC00My4xNzU0MjUzODczNjQ5MzJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNvbG9tYm9cIixcblx0XHRcImlkXCI6IFwiY29sb21ib1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNTE3NTIxOTAwOTQxNSwgLTQzLjE3ODAxNjk2ODIyODgxOF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ29yZGVpcm8gZGEgR3Jhw6dhXCIsXG5cdFx0XCJpZFwiOiBcImNvcmRlaXJvLWRhLWdyYWNhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEzLCAyOiA4IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NzEwNDYyOTkyMzExNywgLTQzLjIwNDE3ODQwMzUzMzcwM10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIkNyaXN0aWFubyBPdHRvbmlcIixcblx0XHRcImlkXCI6IFwiY3Jpc3RpYW5vLW90dG9uaVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAzOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMzA2MTI3ODQ4MDY0OCwgLTQzLjE5MDc0OTEwOTQyMTQ4OV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiRXF1YWRvclwiLFxuXHRcdFwiaWRcIjogXCJlcXVhZG9yXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE4LCAyOiAxMSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTc4OTQ1NjQ2ODc3ODIsIC00My4yMDQ4MDUwMTQ0NDA4MTVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkdhbWJvYVwiLFxuXHRcdFwiaWRcIjogXCJnYW1ib2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTYsIDI6IDYgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3OTU5NDA4MzcyODQ1LCAtNDMuMTk5MzM2NjgzMjQ2MzAxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJIYXJtb25pYVwiLFxuXHRcdFwiaWRcIjogXCJoYXJtb25pYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTU3NTQ0MzcyNzMzODYsIC00My4xOTE0Mjc2Mzk1ODQ0OTZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlBhcmFkYSBkb3MgTXVzZXVzXCIsXG5cdFx0XCJpZFwiOiBcInBhcmFkYS1kb3MtbXVzZXVzXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDggfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1OTQ2NTg2ODAyMjY0LCAtNDMuMTgxOTU1OTgwNTgxMjcyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQYXJhZGEgZG9zIE5hdmlvc1wiLFxuXHRcdFwiaWRcIjogXCJwYXJhZGEtZG9zLW5hdmlvc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NDEzOTYyNTMwMzg3NSwgLTQzLjE4NzE4MTgzMDYxNzQ0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQZXJlaXJhIFJlaXNcIixcblx0XHRcImlkXCI6IFwicGVyZWlyYS1yZWlzXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE3LCAyOiAxMCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTY2NDcwNjQ5NjA0MywgLTQzLjIwMTc3MzExMTUyMzU5M10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJhw6dhIFhWXCIsXG5cdFx0XCJpZFwiOiBcInByYWNhLXh2XCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAyMDcwMTI4OTQ1ODQ4LCAtNDMuMTczMTE3Mzk1NzgzODc2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQcmFpYSBGb3Jtb3NhXCIsXG5cdFx0XCJpZFwiOiBcInByYWlhLWZvcm1vc2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTAsIDI6IDEzIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMzE3NzE1MjM4ODA1NywgLTQzLjIwODE2MTk2NDkwMjMwM10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJvdmlkw6puY2lhXCIsXG5cdFx0XCJpZFwiOiBcInByb3ZpZGVuY2lhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE1IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NzQ4OTkyMjAxNDM4MywgLTQzLjE5NjcwMTQwMDg5MDAzNV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUm9kb3Zpw6FyaWFcIixcblx0XHRcImlkXCI6IFwicm9kb3ZpYXJpYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxOSwgMjogMTIgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk4ODA1NTc0MjUxNzk5LCAtNDMuMjA3MzQyOTQxNDc1OTg2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTYWFyYVwiLFxuXHRcdFwiaWRcIjogXCJzYWFyYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA0IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNTkxMjEwODQ2MDI1MywgLTQzLjE4NzMyMDc4MjIyODIwNV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIlNhbnRhIFJpdGFcIixcblx0XHRcImlkXCI6IFwic2FudGEtcml0YVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAzOiA3IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMDU5NDE2NzQxMDY0OSwgLTQzLjE4MTUwOTA0OTg1NDIwNl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFszXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FudG8gQ3Jpc3RvXCIsXG5cdFx0XCJpZFwiOiBcInNhbnRvLWNyaXN0b1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMiwgMjogNyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTUzMjcyODIwMDIxNDYsIC00My4yMDAyNTkxODE3NTU3NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FudG9zIER1bW9udFwiLFxuXHRcdFwiaWRcIjogXCJzYW50b3MtZHVtb250XCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEsIDM6IDEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTEyMjg2ODc0OTYyNDAxLCAtNDMuMTY3NjMyMjU5NTQ1ODRdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlPDo28gQmVudG9cIixcblx0XHRcImlkXCI6IFwic2FvLWJlbnRvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDcgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk4NjQ4MDk2MDUxMDEyLCAtNDMuMTc5OTY0MzExNzY0ODg0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTZXRlIGRlIFNldGVtYnJvXCIsXG5cdFx0XCJpZFwiOiBcInNldGUtZGUtc2V0ZW1icm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNSwgMzogNSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDUzMDU5MDA5Nzc4OTcsIC00My4xNzc0NjM4MTYzNDY5MjJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlRpcmFkZW50ZXNcIixcblx0XHRcImlkXCI6IFwidGlyYWRlbnRlc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAzIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNjU3ODIyMjAyNjExNiwgLTQzLjE4Mjg1NDIzNjU1NzgwMl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiVXRvcGlhIEFxdWFSaW9cIixcblx0XHRcImlkXCI6IFwidXRvcGlhLWFxdWFyaW9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTAgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODkzMDk1NDcxOTk5NjEyLCAtNDMuMTkwMjM2OTA3MjEzMjE5XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJWaWxhIE9sw61tcGljYVwiLFxuXHRcdFwiaWRcIjogXCJ2aWxhLW9saW1waWNhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDkgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk5MDU2NTcyNjQ2NTMzLCAtNDMuMTk5NjQzNTI5NDk1Mjk3XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzJdXG5cdH1cbl07XG5cbmxldCBzdGF0aW9uX2luZGV4ID0ge307XG5zdGF0aW9ucy5mb3JFYWNoKChzdGF0aW9uKSA9PiB7XG5cdGxldCBzdGF0aW9uX25hbWUgPSBzdGF0aW9uW1wibmFtZVwiXTtcblx0c3RhdGlvbl9pbmRleFtzdGF0aW9uX25hbWVdID0gc3RhdGlvbjtcbn0pO1xuIiwibGV0IGxpbmVzID0gW1xuXHR7XG5cdFx0XCJpZFwiOiAxLFxuXHRcdFwibmFtZVwiOiBcIkxpbmhhIDFcIixcblx0XHRcImNvbG9yXCI6IFwiIzY4YjlmYlwiLFxuXHRcdC8vIFwiZGlyZWN0aW9uc1wiOiBbXG5cdFx0Ly8gXHRcIlNhbnRvcyBEdW1vbnRcIixcblx0XHQvLyBcdFwiUHJhaWEgRm9ybW9zYVwiXG5cdFx0Ly8gXVxuXHR9LFxuXHR7XG5cdFx0XCJpZFwiOiAyLFxuXHRcdFwibmFtZVwiOiBcIkxpbmhhIDJcIixcblx0XHRcImNvbG9yXCI6IFwiIzczY2EzZlwiLFxuXHRcdC8vIFwiZGlyZWN0aW9uc1wiOiBbXG5cdFx0Ly8gXHRcIlByYcOnYSBYVlwiLFxuXHRcdC8vIFx0XCJQcmFpYSBGb3Jtb3NhXCJcblx0XHQvLyBdXG5cdH0sXG5cdHtcblx0XHQvLyBcImRpc2FibGVkXCI6IHRydWUsXG5cdFx0XCJpZFwiOiAzLFxuXHRcdFwibmFtZVwiOiBcIkxpbmhhIDNcIixcblx0XHRcImNvbG9yXCI6IFwiI2YzYTIzMFwiLFxuXHRcdC8vIFwiZGlyZWN0aW9uc1wiOiBbXG5cdFx0Ly8gXHRcIlNhbnRvcyBEdW1vbnRcIixcblx0XHQvLyBcdFwiQ2VudHJhbFwiXG5cdFx0Ly8gXVxuXHR9XG5dO1xuXG5sZXQgbGluZV9pbmRleCA9IHsgfTtcbmxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcblx0bGV0IGxpbmVfbmFtZSA9IGxpbmVbXCJuYW1lXCJdO1xuXHRsaW5lX2luZGV4W2xpbmVfbmFtZV0gPSBsaW5lO1xufSk7XG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBnZXQgbG9jYXRpb24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIFBlZ2EgYSBsb2NhbGl6YcOnw6NvIGRvIHVzdcOhcmlvXG5jb25zdCBnZXRMb2NhdGlvbiA9IChpc19pbml0aWFsID0gZmFsc2UpID0+IHtcblx0bmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcblx0XHQvLyBTZSB2aWVyIGRvIG1vZG8gaW5pY2lhbCwgZW5jZXJyYSBlbGVcblx0XHRpZiAoaXNfaW5pdGlhbCkge1xuXHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0taW5pdGlhbFwiKTtcblx0XHRcdCRwYW5lbC5yZW1vdmVDbGFzcyhcIi1zdGF0ZS0tcGVybWlzc2lvblwiKTtcblx0XHR9XG5cblx0XHQvLyBEZXNjb2JyZSBhIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hIGUgcHJvY3VyYSBhcyBwcsOzeGltYXMgcGFydGlkYXNcblx0XHRsZXQgbmVhcmVzdF9zdGF0aW9uID0gbmVhcmVzdFN0YXRpb24oW3Bvc2l0aW9uW1wiY29vcmRzXCJdW1wibGF0aXR1ZGVcIl0sIHBvc2l0aW9uW1wiY29vcmRzXCJdW1wibG9uZ2l0dWRlXCJdXSk7XG5cdFx0bmV4dERlcGFydHVyZXMobmVhcmVzdF9zdGF0aW9uKTtcblx0fSk7XG59O1xuIiwiLy8gRXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcbmNvbnN0IGRlZzJyYWQgPSAoZGVnKSA9PiB7XG5cdHJldHVybiBkZWcgKiAoTWF0aC5QSSAvIDE4MCk7XG59O1xuXG5jb25zdCBuZWFyZXN0U3RhdGlvbiA9ICh1c2VyX2Nvb3JkaW5hdGVzKSA9PiB7XG5cdGxldCB1c2VyX2xhdGl0dWRlID0gZGVnMnJhZCh1c2VyX2Nvb3JkaW5hdGVzWzBdKTtcblx0bGV0IHVzZXJfbG9uZ2l0dWRlID0gZGVnMnJhZCh1c2VyX2Nvb3JkaW5hdGVzWzFdKTtcblxuXHRsZXQgUiA9IDYzNzE7XG5cblx0bGV0IHNob3J0ZXN0X2Rpc3RhbmNlID0gbnVsbDtcblx0bGV0IG5lYXJlc3Rfc3RhdGlvbiA9IG51bGw7XG5cblx0c3RhdGlvbnMuZm9yRWFjaCgoc3RhdGlvbikgPT4ge1xuXHRcdGlmICghc3RhdGlvbltcImRpc2FibGVkXCJdKSB7XG5cdFx0XHRsZXQgc3RhdGlvbl9sYXRpdHVkZSA9IGRlZzJyYWQoc3RhdGlvbltcImNvb3JkaW5hdGVzXCJdWzBdKTtcblx0XHRcdGxldCBzdGF0aW9uX2xvbmdpdHVkZSA9IGRlZzJyYWQoc3RhdGlvbltcImNvb3JkaW5hdGVzXCJdWzFdKTtcblxuXHRcdFx0bGV0IHggPSAoc3RhdGlvbl9sb25naXR1ZGUgLSB1c2VyX2xvbmdpdHVkZSkgKiBNYXRoLmNvcygodXNlcl9sYXRpdHVkZSArIHN0YXRpb25fbGF0aXR1ZGUpIC8gMik7XG5cdFx0XHRsZXQgeSA9IChzdGF0aW9uX2xhdGl0dWRlIC0gdXNlcl9sYXRpdHVkZSk7XG5cdFx0XHRsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSkgKiBSO1xuXG5cdFx0XHRpZiAoIXNob3J0ZXN0X2Rpc3RhbmNlIHx8IGRpc3RhbmNlIDwgc2hvcnRlc3RfZGlzdGFuY2UpIHtcblx0XHRcdFx0c2hvcnRlc3RfZGlzdGFuY2UgPSBkaXN0YW5jZTtcblx0XHRcdFx0bmVhcmVzdF9zdGF0aW9uID0gc3RhdGlvbjtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBuZWFyZXN0X3N0YXRpb247XG59O1xuIiwiLy8gUHLDs3hpbWFzIHBhcnRpZGFzXG5jb25zdCBuZXh0RGVwYXJ0dXJlcyA9IChzdGF0aW9uKSA9PiB7XG5cdGxldCBkZXBhcnR1cmVzO1xuXG5cdGxldCBsaW5lX2Vtb2ppID0ge1xuXHRcdDE6IFwiMe+4j+KDo1wiLFxuXHRcdDI6IFwiMu+4j+KDo1wiLFxuXHRcdDM6IFwiM++4j+KDo1wiXG5cdH07XG5cblx0Ly8gRGVzbGlnYSBpbnRlcnZhbG9zIGUgZXZlbnRvcyBleGlzdGVudGVzXG5cdGNsZWFySW50ZXJ2YWwoY3VlW1wiaW50ZXJ2YWwtZGVwYXJ0dXJlc1wiXSk7XG5cdGNsZWFySW50ZXJ2YWwoY3VlW1wiaW50ZXJ2YWwtbGFzdC11cGRhdGVkXCJdKTtcblxuXHQkKHdpbmRvdykub2ZmKFwidmlzaWJpbGl0eWNoYW5nZSBvbmxpbmVcIik7XG5cdC8vICQod2luZG93KS5vZmYoXCJvbmxpbmVcIik7XG5cblx0Ly8gQ29sb2NhIG8gbm9tZSBkYSBlc3Rhw6fDo28gbm8gYXBwYmFyXG5cdCQoXCIuc3RhdGlvbnMgaDEgLnN0YXRpb24tbmFtZVwiKS50ZXh0KHN0YXRpb25bXCJuYW1lXCJdKTtcblxuXHQvLyBNb3N0cmEgYW5pbWHDp8OjbyBkZSBsb2FkXG5cdCRwYW5lbC5hZGRDbGFzcyhcIi1zdGF0ZS0tbG9hZGluZ1wiKTtcblxuXHQvLyBBdHVhbGl6YcOnw6NvXG5cdGNvbnN0IGxhc3RVcGRhdGVkID0gKCkgPT4ge1xuXHRcdGxldCAkYmFkZ2UgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInN0YXR1cy1iYWRnZVwiKTtcblx0XHRsZXQgY29ubmVjdGVkID0gbmF2aWdhdG9yLm9uTGluZTtcblxuXHRcdC8vIFRlbXBvIGVtIHNlZ3VuZG9zIGRlc2RlIGEgw7psdGltYSBhdHVhbGl6YcOnw6NvXG5cdFx0bGV0IHNlY29uZHNfc2luY2VfdXBkYXRlID0gbW9tZW50KCkuZGlmZihkZXBhcnR1cmVzW1wibGFzdFVwZGF0ZWRcIl0sIFwic2Vjb25kc1wiKTtcblxuXHRcdC8vIFNlIHRpdmVyIHNpZG8gYXR1YWxpemFkbyBow6EgbWVub3MgZGUgNjAgc2VndW5kb3MsIG1vc3RyYSBUZW1wbyBSZWFsXG5cdFx0aWYgKHNlY29uZHNfc2luY2VfdXBkYXRlIDw9IDYwKSB7XG5cdFx0XHQkYmFkZ2UuYWRkQ2xhc3MoXCItc3RhdGUtLXJlYWwtdGltZVwiKS50ZXh0KFwiVGVtcG8gcmVhbFwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGxhc3RfdXBkYXRlZCA9IFwiQXR1YWxpemFkbyBcIiArIG1vbWVudChkZXBhcnR1cmVzW1wibGFzdFVwZGF0ZWRcIl0pLmZyb21Ob3codHJ1ZSkgKyBcIiBhdHLDoXNcIjtcblx0XHRcdCRiYWRnZS50ZXh0KGxhc3RfdXBkYXRlZCk7XG5cdFx0fVxuXG5cdFx0JHN0YXR1cy5lbXB0eSgpLmFwcGVuZCgkYmFkZ2UpO1xuXHR9O1xuXG5cdGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG5cdFx0Ly8gU8OzIGNhcnJlZ2Egc2UgZXN0aXZlciBjb20gZm9jb1xuXHRcdGlmIChkb2N1bWVudC5oaWRkZW4gPT09IHRydWUgfHwgbmF2aWdhdG9yLm9uTGluZSA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBDYXJyZWdhIG9zIGRhZG9zXG5cdFx0JC5nZXRKU09OKFwiaHR0cHM6Ly9lbWl0cmVtbXVzLmNvbS8tL3ZsdC9kZXBhcnR1cmVzP2NhbGxiYWNrPT9cIiwge1xuXHRcdFx0XCJzdGF0aW9uXCI6IHN0YXRpb25bXCJpZFwiXSxcblx0XHRcdC8vIFwiZW52XCI6IFwiZGV2XCJcblx0XHR9KS5kb25lKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0ZGVwYXJ0dXJlcyA9IHJlc3BvbnNlO1xuXG5cdFx0XHRsZXQgZGlyZWN0aW9ucyA9IFsgXTtcblx0XHRcdGxldCBkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbiA9IHsgfTtcblxuXHRcdFx0bGV0IGV0YV9jb3VudCA9IDA7XG5cblx0XHRcdC8vIE9yZ2FuaXphIGFzIHBhcnRpZGFzIHBvciBkZXN0aW5vXG5cdFx0XHRkZXBhcnR1cmVzW1wibGluZXNcIl0uZm9yRWFjaCgobGluZSkgPT4ge1xuXHRcdFx0XHRsaW5lW1wiZGlyZWN0aW9uc1wiXS5mb3JFYWNoKChkaXJlY3Rpb24pID0+IHtcblx0XHRcdFx0XHRsZXQgZGlyZWN0aW9uX3RpdGxlID0gZGlyZWN0aW9uW1wibmFtZVwiXTtcblx0XHRcdFx0XHRldGFfY291bnQgKz0gZGlyZWN0aW9uW1wiZXRhc1wiXS5sZW5ndGg7XG5cblx0XHRcdFx0XHRpZiAoZGlyZWN0aW9uW1wiZXRhc1wiXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWRpcmVjdGlvbnMuaW5jbHVkZXMoZGlyZWN0aW9uX3RpdGxlKSkge1xuXHRcdFx0XHRcdFx0XHRkaXJlY3Rpb25zLnB1c2goZGlyZWN0aW9uX3RpdGxlKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKCFkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbltkaXJlY3Rpb25fdGl0bGVdKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0gPSBbIF07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGRpcmVjdGlvbltcImV0YXNcIl0uZm9yRWFjaCgodHJhaW4pID0+IHtcblx0XHRcdFx0XHRcdFx0dHJhaW5bXCJsaW5lXCJdID0gbGluZVtcIm5hbWVcIl07XG5cdFx0XHRcdFx0XHRcdGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0ucHVzaCh0cmFpbik7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIFNlIG7Dum1lcm8gZGUgcHLDs3hpbWFzIHBhcnRpZGFzIGZvciB6ZXJvLFxuXHRcdFx0Ly8gY29uZmVyZSBzZSBhaW5kYSBlc3TDoSBkZW50cm8gZG8gaG9yw6FyaW8gZGUgZnVuY2lvbmFtZW50b1xuXHRcdFx0aWYgKGV0YV9jb3VudCA9PT0gMCkge1xuXHRcdFx0XHRsZXQgbm93ID0gbW9tZW50KCk7XG5cdFx0XHRcdGxldCBvcGVyYXRpb25fc3RhcnRfdGltZSA9IG1vbWVudChcIjA2OjAwXCIsIFwiSEg6bW1cIik7XG5cdFx0XHRcdGxldCBvcGVyYXRpb25fZW5kX3RpbWUgPSBtb21lbnQoXCIwMDowMFwiLCBcIkhIOm1tXCIpO1xuXG5cdFx0XHRcdGlmIChub3cuaXNBZnRlcihvcGVyYXRpb25fZW5kX3RpbWUpICYmIG5vdy5pc0JlZm9yZShvcGVyYXRpb25fc3RhcnRfdGltZSkpIHtcblx0XHRcdFx0XHQkcGFuZWwuYWRkQ2xhc3MoXCItc3RhdGUtLWNsb3NlZFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gTW9udGEgYXMgcGFydGlkYXNcblx0XHRcdFx0bGV0ICRkZXBhcnR1cmVzID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJkZXBhcnR1cmVzXCIpO1xuXHRcdFx0XHRsZXQgJHRpdGxlID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJkZXBhcnR1cmVzLXRpdGxlXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdFx0XHRcdH0pLmFwcGVuZFRvKCRkZXBhcnR1cmVzKTtcblx0XHRcdFx0JChcIjxzcGFuIC8+XCIpLnRleHQoXCJQcsOzeGltb3MgdHJlbnNcIikuYXBwZW5kVG8oJHRpdGxlKTtcblxuXHRcdFx0XHRsZXQgc2hhcmVfdGV4dCA9IFtcIlByw7N4aW1vcyB0cmVuc1wiLCBcIvCfmokgKlwiICsgc3RhdGlvbltcIm5hbWVcIl0gKyBcIipcIiwgXCJcIl07XG5cblx0XHRcdFx0Ly8gZGlyZWN0aW9ucy5zb3J0KCk7XG5cdFx0XHRcdGRpcmVjdGlvbnMuZm9yRWFjaCgoZGlyZWN0aW9uKSA9PiB7XG5cdFx0XHRcdFx0bGV0ICRkaXJlY3Rpb24gPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImRpcmVjdGlvblwiKS5hcHBlbmRUbygkZGVwYXJ0dXJlcyk7XG5cdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJkaXJlY3Rpb24tY2FwdGlvblwiKS50ZXh0KFwiRGVzdGlub1wiKS5hcHBlbmRUbygkZGlyZWN0aW9uKTtcblxuXHRcdFx0XHRcdGxldCBldGFzID0gZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb25bZGlyZWN0aW9uXTtcblx0XHRcdFx0XHRldGFzLnNvcnQoKGEsIGIpID0+IHsgcmV0dXJuIGFbXCJzZWNvbmRzXCJdIC0gYltcInNlY29uZHNcIl0gfSk7XG5cblx0XHRcdFx0XHRldGFzLmZvckVhY2goKHRyYWluKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgJHRyYWluID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpblwiKS5hcHBlbmRUbygkZGlyZWN0aW9uKTtcblx0XHRcdFx0XHRcdGxldCAkbGluZSA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW4tbGluZVwiKS5hcHBlbmRUbygkdHJhaW4pO1xuXHRcdFx0XHRcdFx0bGV0IGlzX2FwcHJvYWNoaW5nID0gdHJhaW5bXCJzZWNvbmRzXCJdIDwgMjU7XG5cblx0XHRcdFx0XHRcdGxldCBsaW5lID0gbGluZV9pbmRleFt0cmFpbltcImxpbmVcIl1dO1xuXHRcdFx0XHRcdFx0bGV0IGRlcGFydHVyZV9jb3VudGRvd24gPSAoaXNfYXBwcm9hY2hpbmc/IFwiQWdvcmFcIiA6IE1hdGgucm91bmQodHJhaW5bXCJzZWNvbmRzXCJdIC8gNjApICsgXCI8c3Bhbj5taW48L3NwYW4+XCIpO1xuXHRcdFx0XHRcdFx0bGV0IGRlcGFydHVyZV90aW1lID0gbW9tZW50KHRyYWluW1wiYXJyaXZhbFRpbWVcIl0pLmZvcm1hdChcIkhIOm1tXCIpO1xuXG5cdFx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImxpbmUtc2hpZWxkXCIpLmNzcyhcImNvbG9yXCIsIGxpbmVbXCJjb2xvclwiXSkuYXR0cihcInRpdGxlXCIsIFwiTGluaGEgXCIgKyBsaW5lW1wiaWRcIl0pLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKS50ZXh0KGxpbmVbXCJpZFwiXSkuYXBwZW5kVG8oJGxpbmUpO1xuXHRcdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpbi1kaXJlY3Rpb25cIikuYXR0cihcInRpdGxlXCIsIFwiVHJlbSBcIiArIHRyYWluW1widHJhaW5cIl0pLnRleHQoZGlyZWN0aW9uKS5hcHBlbmRUbygkdHJhaW4pO1xuXHRcdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpbi1ldGFcIikuYXR0cihcInRpdGxlXCIsIGRlcGFydHVyZV90aW1lKS5odG1sKGRlcGFydHVyZV9jb3VudGRvd24pLmFwcGVuZFRvKCR0cmFpbik7XG5cblx0XHRcdFx0XHRcdGlmIChpc19hcHByb2FjaGluZykge1xuXHRcdFx0XHRcdFx0XHQkdHJhaW4uYWRkQ2xhc3MoXCItc3RhdGUtLWFwcHJvYWNoaW5nXCIpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBUZXh0byBwYXJhIGNvbXBhcnRpbGhhbWVudG9cblx0XHRcdFx0XHRcdHNoYXJlX3RleHQucHVzaChsaW5lX2Vtb2ppW2xpbmVbXCJpZFwiXV0gKyBcIiBcIiArIGRpcmVjdGlvbiArIFwiIFwiICsgZGVwYXJ0dXJlX3RpbWUpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBFc3RhZG8gZGEgY29uZXjDo28gZSBob3JhIGRhIMO6bHRpbWEgYXR1YWxpemHDp8Ojb1xuXHRcdFx0XHQkc3RhdHVzID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJzdGF0dXNcIikuYXBwZW5kVG8oJHRpdGxlKTtcblx0XHRcdFx0Ly8gJGNvbm5lY3Rpb25fc3RhdHVzID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJjb25uZWN0aW9uLXN0YXR1c1wiKS5hcHBlbmRUbygkc3RhdHVzKTtcblx0XHRcdFx0Ly8gJGxhc3RfdXBkYXRlZCA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwibGFzdC11cGRhdGVkXCIpLmFwcGVuZFRvKCRzdGF0dXMpO1xuXHRcdFx0XHRsYXN0VXBkYXRlZCgpO1xuXG5cdFx0XHRcdC8vIExpbXBhIG8gcGFpbmVsIGUgaW5zZXJlIG9zIG5vdm9zIGRhZG9zXG5cdFx0XHRcdCRwYW5lbC5yZW1vdmVDbGFzcyhcIi1zdGF0ZS0tY2xvc2VkXCIpO1xuXHRcdFx0XHQkc3RhdGlvbi5lbXB0eSgpLmFwcGVuZCgkZGVwYXJ0dXJlcyk7XG5cblx0XHRcdFx0Ly8gQ29tcGFydGlsaGFyXG5cdFx0XHRcdC8vIGlmIChuYXZpZ2F0b3Iuc2hhcmUpIHtcblx0XHRcdFx0Ly8gXHRsZXQgbG9uZ3ByZXNzO1xuXHRcdFx0XHQvLyBcdGxldCBsb25ncHJlc3NfZGVsYXkgPSAxMzAwO1xuXG5cdFx0XHRcdC8vIFx0JGRpcmVjdGlvbi5vbihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdFx0Ly8gXHRcdGxvbmdwcmVzcyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHQvLyBcdFx0XHRuYXZpZ2F0b3Iuc2hhcmUoe1xuXHRcdFx0XHQvLyBcdFx0XHRcdHRleHQ6IHNoYXJlX3RleHQuam9pbihcIlxcblwiKVxuXHRcdFx0XHQvLyBcdFx0XHR9KTtcblx0XHRcdFx0Ly8gXHRcdH0sIGxvbmdwcmVzc19kZWxheSk7XG5cdFx0XHRcdC8vIFx0fSkub24oXCJtb3VzZXVwIG1vdXNlb3V0XCIsICgpID0+IHtcblx0XHRcdFx0Ly8gXHRcdC8vIGNsZWFySW50ZXJ2YWwobG9uZ3ByZXNzKTtcblx0XHRcdFx0Ly8gXHR9KTtcblx0XHRcdFx0Ly8gfVxuXG5cdFx0XHRcdGlmIChlbnYgPT09IFwicHJvZHVjdGlvblwiKSB7XG5cdFx0XHRcdFx0Y3VlW1wiaW50ZXJ2YWwtbGFzdC11cGRhdGVkXCJdID0gc2V0SW50ZXJ2YWwobGFzdFVwZGF0ZWQsIDUwMDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdCRwYW5lbC5yZW1vdmVDbGFzcyhcIi1zdGF0ZS0tbG9hZGluZ1wiKTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCB1cGRhdGVXaW5kb3cgPSAoKSA9PiB7XG5cdFx0aWYgKGRvY3VtZW50LmhpZGRlbiA9PT0gZmFsc2UgJiYgbmF2aWdhdG9yLm9uTGluZSA9PT0gdHJ1ZSkge1xuXHRcdFx0bGFzdFVwZGF0ZWQoKTtcblx0XHRcdGdldERhdGEoKTtcblx0XHR9XG5cdH07XG5cblx0Z2V0RGF0YSgpO1xuXG5cdC8vIENyaWEgbm92b3MgaW50ZXJ2YWxvcyBlIGV2ZW50b3Ncblx0aWYgKGVudiA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcblx0XHRjdWVbXCJpbnRlcnZhbC1kZXBhcnR1cmVzXCJdID0gc2V0SW50ZXJ2YWwoZ2V0RGF0YSwgMTUwMDApOyAvLyBURU1QXG5cdH1cblxuXHQkKHdpbmRvdykub24oXCJvbmxpbmUgdmlzaWJpbGl0eWNoYW5nZVwiLCB1cGRhdGVXaW5kb3cpO1xufTtcbiIsIiQoZnVuY3Rpb24oKSB7XG5cdC8vIE1vbnRhIGxpc3RhIGRlIHBhcmFkYXMgZSBlc3Rhw6fDtWVzXG5cdGxldCAkc3RhdGlvbnMgPSAkKFwiLnN0YXRpb25zIHVsXCIpO1xuXG5cdGxldCAkbmVhcmVzdCA9ICQoXCI8YSAvPlwiKS5hdHRyKFwiaHJlZlwiLCBcIiNcIikub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdCQoXCIuc3RhdGlvbnMgaDEgLnN0YXRpb24tbmFtZVwiKS50ZXh0KFwiXCIpO1xuXHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdFx0Z2V0TG9jYXRpb24oKTtcblx0fSkuYXBwZW5kVG8oJHN0YXRpb25zKTtcblx0JChcIjxpIC8+XCIpLmFkZENsYXNzKFwibWF0ZXJpYWwtaWNvbnNcIikudGV4dChcIm5lYXJfbWVcIikuYXBwZW5kVG8oJG5lYXJlc3QpO1xuXHQkKFwiPHNwYW4gLz5cIikudGV4dChcIkxvY2FsaXphciBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYVwiKS5hcHBlbmRUbygkbmVhcmVzdCk7XG5cblx0JChcIjxsaSAvPlwiKS5hZGRDbGFzcyhcIm5lYXJlc3Qtc3RhdGlvblwiKS5hcHBlbmQoJG5lYXJlc3QpLmFwcGVuZFRvKCRzdGF0aW9ucyk7XG5cblx0c3RhdGlvbnMuZm9yRWFjaCgoc3RhdGlvbikgPT4ge1xuXHRcdGxldCAkc3RhdGlvbiA9ICQoXCI8YSAvPlwiKS5hdHRyKFwiaHJlZlwiLCBcIiNcIiArIHN0YXRpb25bXCJpZFwiXSk7XG5cblx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInN0YXRpb24tbmFtZVwiKS50ZXh0KHN0YXRpb25bXCJuYW1lXCJdKS5hcHBlbmRUbygkc3RhdGlvbik7XG5cblx0XHRsZXQgJGxpbmVzID0gJChcIjx1bCAvPlwiKS5hZGRDbGFzcyhcInN0YXRpb24tbGluZXNcIikuYXBwZW5kVG8oJHN0YXRpb24pO1xuXHRcdGxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcblx0XHRcdGxldCAkbGluZSA9ICQoXCI8bGkgLz5cIikuYXBwZW5kVG8oJGxpbmVzKTtcblx0XHRcdGlmIChzdGF0aW9uW1wibGluZXNcIl0uaW5jbHVkZXMobGluZVtcImlkXCJdKSkge1xuXHRcdFx0XHRsZXQgJHNoaWVsZCA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwibGluZS1zaGllbGRcIikuY3NzKFwiY29sb3JcIiwgbGluZVtcImNvbG9yXCJdKS50ZXh0KGxpbmVbXCJpZFwiXSkuYXBwZW5kVG8oJGxpbmUpO1xuXG5cdFx0XHRcdGlmIChsaW5lW1wiZGlzYWJsZWRcIl0pIHtcblx0XHRcdFx0XHQkc2hpZWxkLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKS5hZGRDbGFzcyhcIi1zdGF0ZS0tZGlzYWJsZWRcIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmICghc3RhdGlvbltcImRpc2FibGVkXCJdKSB7XG5cdFx0XHQkc3RhdGlvbi5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRuZXh0RGVwYXJ0dXJlcyhzdGF0aW9uKTtcblx0XHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkc3RhdGlvbi5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHQvLyAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHRcdFx0fSk7XG5cdFx0XHQkc3RhdGlvbi5hZGRDbGFzcyhcIi1zdGF0ZS0tZGlzYWJsZWRcIik7XG5cdFx0fVxuXG5cdFx0JChcIjxsaSAvPlwiKS5hcHBlbmQoJHN0YXRpb24pLmFwcGVuZFRvKCRzdGF0aW9ucyk7XG5cdH0pO1xuXG5cdC8vIE5hdmVnYcOnw6NvXG5cdCQoXCIuYXBwYmFyXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdCQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdH0pO1xuXG5cdCQod2luZG93KS5vbihcInNjcm9sbFwiLCAoZXZlbnQpID0+IHtcblx0XHRsZXQgc2Nyb2xsX3RvcF9wb3NpdGlvbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuXHRcdGlmIChzY3JvbGxfdG9wX3Bvc2l0aW9uID49IDEyKSB7XG5cdFx0XHQkKFwiYm9keVwiKS5hZGRDbGFzcyhcIi1tb2RlLS1zY3JvbGxcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLXNjcm9sbFwiKTtcblx0XHR9XG5cdH0pO1xufSk7XG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIHRoZW1lIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxubGV0IFRoZW1lID0gKCgpID0+IHtcclxuICAgIGxldCB0aGVtZV9vcmRlciA9IFtcclxuICAgICAgICBcImF1dG9cIixcclxuICAgICAgICBcImxpZ2h0XCIsXHJcbiAgICAgICAgXCJkYXJrXCJcclxuICAgIF07XHJcblxyXG4gICAgbGV0IHRoZW1lX3NldHRpbmdzID0ge1xyXG4gICAgICAgIFwiYXV0b1wiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUZW1hIGF1dG9tw6F0aWNvXCIsXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImJyaWdodG5lc3NfYXV0b1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImxpZ2h0XCI6IHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRlbWEgY2xhcm9cIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiYnJpZ2h0bmVzc181XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGFya1wiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUZW1hIGVzY3Vyb1wiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJicmlnaHRuZXNzXzRcIlxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBzZXQgPSAobmV3X3RoZW1lLCBvbGRfdGhlbWUpID0+IHtcclxuICAgICAgICBjdXJyZW50X3RoZW1lID0gbmV3X3RoZW1lO1xyXG5cclxuICAgICAgICAkKFwiLnNldHRpbmdzIC50aGVtZSBzcGFuXCIpLnRleHQodGhlbWVfc2V0dGluZ3NbbmV3X3RoZW1lXVtcInRpdGxlXCJdKTtcclxuICAgICAgICAkKFwiLnNldHRpbmdzIC50aGVtZSBpXCIpLnRleHQodGhlbWVfc2V0dGluZ3NbbmV3X3RoZW1lXVtcImljb25cIl0pO1xyXG5cclxuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi10aGVtZS0tXCIgKyBvbGRfdGhlbWUpLmFkZENsYXNzKFwiLXRoZW1lLS1cIiArIG5ld190aGVtZSk7XHJcblxyXG4gICAgICAgIC8vIFNhbHZhIGNvbmZpZ3VyYcOnw6NvIG5vIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIGlmIChuZXdfdGhlbWUgPT09IFwiYXV0b1wiKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidGhlbWVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBuZXdfdGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gQ29uZmVyZSBzZSBqw6EgaMOhIHRlbWEgc2Fsdm8gbm8gbG9jYWxTdG9yYWdlLlxyXG4gICAgLy8gU2UgbsOjbyBob3V2ZXIsIHBlZ2EgbyBwYWRyw6NvIGRvIHNpc3RlbWFcclxuICAgIGxldCBjdXJyZW50X3RoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSB8fCBnZXRDb21wdXRlZFN0eWxlKCQoXCIuc2V0dGluZ3MgLmN1cnJlbnQtdGhlbWVcIilbMF0pLmdldFByb3BlcnR5VmFsdWUoXCJjb250ZW50XCIpLnJlcGxhY2UoL1wiL2csIFwiXCIpO1xyXG5cclxuICAgIGlmIChjdXJyZW50X3RoZW1lKSB7XHJcbiAgICAgICAgc2V0KGN1cnJlbnRfdGhlbWUsIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWVcIikub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlc2NvYnJlIGEgcG9zacOnw6NvIGRvIHRlbWEgbmEgb3JkZW1cclxuICAgICAgICAgICAgbGV0IHRoZW1lX3Bvc2l0aW9uID0gdGhlbWVfb3JkZXIuaW5kZXhPZihjdXJyZW50X3RoZW1lKTtcclxuICAgICAgICAgICAgbGV0IG5ld190aGVtZSA9IHRoZW1lX29yZGVyW3RoZW1lX3Bvc2l0aW9uICsgMV0gfHwgdGhlbWVfb3JkZXJbMF07XHJcblxyXG4gICAgICAgICAgICAvLyBTZXRhIG8gbm92byB0ZW1hXHJcbiAgICAgICAgICAgIHNldChuZXdfdGhlbWUsIGN1cnJlbnRfdGhlbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufSkoKTtcclxuIiwibGV0IGN1ZSA9IFsgXTtcbmxldCAkcGFuZWwsICRzdGF0aW9uLCAkcGVybWlzc2lvbjtcblxuJChmdW5jdGlvbiAoKSB7XG5cdCRwYW5lbCA9ICQoXCIucGFuZWxcIik7XG5cdCRzdGF0aW9uID0gJChcIi5zdGF0aW9uXCIsICRwYW5lbCk7XG5cdCRwZXJtaXNzaW9uID0gJChcIi5wZXJtaXNzaW9uXCIsICRwYW5lbCk7XG5cblx0Ly8gQ29uZmVyZSBzZSB1c3XDoXJpbyBqw6EgaGF2aWEgaGFiaWxpdGFkbyBnZW9sb2NhbGl6YcOnw6NvIGFudGVzXG5cdGlmIChcImdlb2xvY2F0aW9uXCIgaW4gbmF2aWdhdG9yKSB7XG5cdFx0aWYgKFwicGVybWlzc2lvbnNcIiBpbiBuYXZpZ2F0b3IpIHtcblx0XHRcdG5hdmlnYXRvci5wZXJtaXNzaW9ucy5xdWVyeSh7IFwibmFtZVwiOiBcImdlb2xvY2F0aW9uXCIgfSkudGhlbigocGVybWlzc2lvbikgPT4ge1xuXHRcdFx0XHRpZiAocGVybWlzc2lvbltcInN0YXRlXCJdID09PSBcImdyYW50ZWRcIikge1xuXHRcdFx0XHRcdC8vIFNlIGrDoSB0aXZlciwgcGVnYSBhIGxvY2FsaXphw6fDo28gYXR1YWwgZSBwcm9jdXJhIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXG5cdFx0XHRcdFx0Z2V0TG9jYXRpb24oKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBTZSBuw6NvIHRpdmVyLCBtb3N0cmEgYm90w6NvIHBhcmEgc29saWNpdGFyIGF1dG9yaXphw6fDo29cblx0XHRcdFx0XHQkKFwiYm9keVwiKS5hZGRDbGFzcyhcIi1tb2RlLS1pbml0aWFsXCIpO1xuXHRcdFx0XHRcdCRwYW5lbC5hZGRDbGFzcyhcIi1zdGF0ZS0tcGVybWlzc2lvblwiKTtcblxuXHRcdFx0XHRcdCQoXCIuYnV0dG9uXCIsICRwZXJtaXNzaW9uKS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdGdldExvY2F0aW9uKHRydWUpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Z2V0TG9jYXRpb24oKTtcblx0XHR9XG5cdH1cbn0pO1xuXG4vLyBTZXJ2aWNlIFdvcmtlclxuaWYgKFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvcikge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuXHRcdGN1ZVtcInNlcnZpY2Utd29ya2VyXCJdID0gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXCIvc2VydmljZS13b3JrZXIuanNcIik7XG5cblx0XHRjdWVbXCJzZXJ2aWNlLXdvcmtlclwiXS50aGVuKChyZWdpc3RyYXRpb24pID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwiU2VydmljZSBXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwhXCIsIHJlZ2lzdHJhdGlvbik7XG5cdFx0fSwgKGVycm9yKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6IFwiLCBlcnJvcik7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG4vLyBFc3RhZG8gZGEgY29uZXjDo29cbmxldCAkc3RhdHVzO1xubGV0ICRjb25uZWN0aW9uX3N0YXR1cztcblxuY29uc3QgdXBkYXRlQ29ubmVjdGlvblN0YXR1cyA9ICgpID0+IHtcblx0cmV0dXJuIGZhbHNlO1xuXHRsZXQgY29ubmVjdGVkID0gbmF2aWdhdG9yLm9uTGluZTtcblxuXHRpZiAoY29ubmVjdGVkID09PSB0cnVlKSB7XG5cdFx0Ly8gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCItc3RhdGUtLXN1Y2Nlc3NcIikudGV4dChcIkNvbmV4w6NvIHJlZXN0YWJlbGVjaWRhIVwiKS5hcHBlbmRUbygkY29ubmVjdGlvbl9zdGF0dXMpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHQkY29ubmVjdGlvbl9zdGF0dXMuZW1wdHkoKTtcblx0XHR9LCA0MDAwKTtcblx0fSBlbHNlIHtcblx0XHQkY29ubmVjdGlvbl9zdGF0dXMuZW1wdHkoKTtcblx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcIi1zdGF0ZS0tZXJyb3JcIikudGV4dChcIlNlbSBjb25leMOjb1wiKS5hcHBlbmRUbygkY29ubmVjdGlvbl9zdGF0dXMpO1xuXHR9XG59O1xuXG4kKHdpbmRvdykub24oXCJvbmxpbmUgb2ZmbGluZVwiLCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzKTtcblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIiwgdXBkYXRlQ29ubmVjdGlvblN0YXR1cyk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9mZmxpbmVcIiwgdXBkYXRlQ29ubmVjdGlvblN0YXR1cyk7XG4iXX0=
