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

  $(".stations h1 .station-name").text(station["name"]); // Insire animação de load

  $panel.addClass("-state--loading"); // let $loading = $("<div />").addClass("loading");
  // $("<div />").addClass("animation").appendTo($loading);
  // $panel.empty().append($loading);
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
  };

  var getData = function getData() {
    // Só carrega se estiver com foco
    if (document.hidden === true || navigator.onLine === false) {
      return false;
    } // Carrega os dados


    $.getJSON("https://emitremmus.com/-/vlt/departures?callback=?", {
      "station": station["id"] // "env": "dev"

    }).done(function (response) {
      departures = response; // let $station = $("<div />").addClass("station");

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
        var operation_end_time = moment("06:00", "HH:mm");

        if (now.isAfter(operation_end_time) && now.isBefore(operation_start_time)) {
          $panel.addClass("-state--closed");
          console.log("Fora do horário de operação!");
        }
      } // Monta as partidas


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
        }); // Compartilhar
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
      }); // Estado da conexão e hora da última atualização

      $status = $("<div />").addClass("status").appendTo($title); // $connection_status = $("<div />").addClass("connection-status").appendTo($status);
      // $last_updated = $("<div />").addClass("last-updated").appendTo($status);

      lastUpdated(); // Limpa o painel e insere os novos dados

      $panel.removeClass("-state--loading -state--closed");
      $station.empty().append($departures);
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

    cue["interval-last-updated"] = setInterval(lastUpdated, 5000);
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
var $panel, $station;
$(function () {
  $panel = $(".panel");
  $station = $(".station", $panel); // Confere se usuário já havia habilitado geolocalização antes

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
          var $permission = $("<div />").addClass("permission").appendTo($panel);
          var $button = $("<a />").addClass("button").attr("href", "#").appendTo($permission);
          $("<i />").addClass("material-icons").text("near_me").appendTo($button);
          $("<span />").text("Localizar estação mais próxima").appendTo($button);
          $button.on("click", function (event) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpb24taW5mby5qcyIsImxpbmUtaW5mby5qcyIsImdldC1sb2NhdGlvbi5qcyIsIm5lYXJlc3Qtc3RhdGlvbi5qcyIsIm5leHQtZGVwYXJ0dXJlcy5qcyIsInN0YXRpb24tbGlzdC5qcyIsInRoZW1lLmpzIiwic3RhcnQuanMiXSwibmFtZXMiOlsic3RhdGlvbnMiLCJzdGF0aW9uX2luZGV4IiwiZm9yRWFjaCIsInN0YXRpb24iLCJzdGF0aW9uX25hbWUiLCJsaW5lcyIsImxpbmVfaW5kZXgiLCJsaW5lIiwibGluZV9uYW1lIiwiZ2V0TG9jYXRpb24iLCJpc19pbml0aWFsIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsIiQiLCJyZW1vdmVDbGFzcyIsIm5lYXJlc3Rfc3RhdGlvbiIsIm5lYXJlc3RTdGF0aW9uIiwibmV4dERlcGFydHVyZXMiLCJkZWcycmFkIiwiZGVnIiwiTWF0aCIsIlBJIiwidXNlcl9jb29yZGluYXRlcyIsInVzZXJfbGF0aXR1ZGUiLCJ1c2VyX2xvbmdpdHVkZSIsIlIiLCJzaG9ydGVzdF9kaXN0YW5jZSIsInN0YXRpb25fbGF0aXR1ZGUiLCJzdGF0aW9uX2xvbmdpdHVkZSIsIngiLCJjb3MiLCJ5IiwiZGlzdGFuY2UiLCJzcXJ0IiwiZGVwYXJ0dXJlcyIsImxpbmVfZW1vamkiLCJjbGVhckludGVydmFsIiwiY3VlIiwid2luZG93Iiwib2ZmIiwidGV4dCIsIiRwYW5lbCIsImFkZENsYXNzIiwibGFzdFVwZGF0ZWQiLCIkYmFkZ2UiLCJjb25uZWN0ZWQiLCJvbkxpbmUiLCJzZWNvbmRzX3NpbmNlX3VwZGF0ZSIsIm1vbWVudCIsImRpZmYiLCJsYXN0X3VwZGF0ZWQiLCJmcm9tTm93IiwiJHN0YXR1cyIsImVtcHR5IiwiYXBwZW5kIiwiZ2V0RGF0YSIsImRvY3VtZW50IiwiaGlkZGVuIiwiZ2V0SlNPTiIsImRvbmUiLCJyZXNwb25zZSIsImRpcmVjdGlvbnMiLCJkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbiIsImV0YV9jb3VudCIsImRpcmVjdGlvbiIsImRpcmVjdGlvbl90aXRsZSIsImxlbmd0aCIsImluY2x1ZGVzIiwicHVzaCIsInRyYWluIiwibm93Iiwib3BlcmF0aW9uX3N0YXJ0X3RpbWUiLCJvcGVyYXRpb25fZW5kX3RpbWUiLCJpc0FmdGVyIiwiaXNCZWZvcmUiLCJjb25zb2xlIiwibG9nIiwiJGRlcGFydHVyZXMiLCIkdGl0bGUiLCJvbiIsImFwcGVuZFRvIiwic2hhcmVfdGV4dCIsIiRkaXJlY3Rpb24iLCJldGFzIiwic29ydCIsImEiLCJiIiwiJHRyYWluIiwiJGxpbmUiLCJpc19hcHByb2FjaGluZyIsImRlcGFydHVyZV9jb3VudGRvd24iLCJyb3VuZCIsImRlcGFydHVyZV90aW1lIiwiZm9ybWF0IiwiY3NzIiwiYXR0ciIsImh0bWwiLCIkc3RhdGlvbiIsInVwZGF0ZVdpbmRvdyIsImVudiIsInNldEludGVydmFsIiwiJHN0YXRpb25zIiwiJG5lYXJlc3QiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJGxpbmVzIiwiJHNoaWVsZCIsInRvZ2dsZUNsYXNzIiwic2Nyb2xsX3RvcF9wb3NpdGlvbiIsInNjcm9sbFRvcCIsIlRoZW1lIiwidGhlbWVfb3JkZXIiLCJ0aGVtZV9zZXR0aW5ncyIsInNldCIsIm5ld190aGVtZSIsIm9sZF90aGVtZSIsImN1cnJlbnRfdGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImdldEl0ZW0iLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInJlcGxhY2UiLCJ0aGVtZV9wb3NpdGlvbiIsImluZGV4T2YiLCJwZXJtaXNzaW9ucyIsInF1ZXJ5IiwidGhlbiIsInBlcm1pc3Npb24iLCIkcGVybWlzc2lvbiIsIiRidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwicmVnaXN0cmF0aW9uIiwiZXJyb3IiLCIkY29ubmVjdGlvbl9zdGF0dXMiLCJ1cGRhdGVDb25uZWN0aW9uU3RhdHVzIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFBQSxRQUFBLEdBQUEsQ0FDQTtBQUNBLFVBQUEsZ0JBREE7QUFFQSxRQUFBLGdCQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBREEsRUFTQTtBQUNBO0FBQ0EsVUFBQSxVQUZBO0FBR0EsUUFBQSxVQUhBO0FBSUE7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBTEE7QUFNQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBUEEsQ0FUQSxFQWtCQTtBQUNBLFVBQUEsWUFEQTtBQUVBLFFBQUEsWUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQWxCQSxFQTBCQTtBQUNBLFVBQUEsU0FEQTtBQUVBLFFBQUEsU0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQTFCQSxFQWtDQTtBQUNBLFVBQUEsU0FEQTtBQUVBLFFBQUEsU0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQWxDQSxFQTBDQTtBQUNBLFVBQUEsaUJBREE7QUFFQSxRQUFBLGlCQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0ExQ0EsRUFrREE7QUFDQSxVQUFBLFlBREE7QUFFQSxRQUFBLFlBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FsREEsRUEwREE7QUFDQSxVQUFBLFNBREE7QUFFQSxRQUFBLFNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQTFEQSxFQWtFQTtBQUNBLFVBQUEsbUJBREE7QUFFQSxRQUFBLG1CQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbEVBLEVBMEVBO0FBQ0E7QUFDQSxVQUFBLGtCQUZBO0FBR0EsUUFBQSxrQkFIQTtBQUlBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUxBO0FBTUE7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFQQSxDQTFFQSxFQW1GQTtBQUNBLFVBQUEsU0FEQTtBQUVBLFFBQUEsU0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQW5GQSxFQTJGQTtBQUNBLFVBQUEsUUFEQTtBQUVBLFFBQUEsUUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQTNGQSxFQW1HQTtBQUNBLFVBQUEsVUFEQTtBQUVBLFFBQUEsVUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtB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SUFBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBNkIsUUFBQSxDQUFBLGVBQUEsRUFBQUYsSUFBQSxDQUFBLGFBQUEsRUFBQXdDLFFBQUEsQ0FBQXlELGtCQUFBO0FBQ0E7QUFDQSxDQWRBOztBQWdCQTVILENBQUEsQ0FBQXlCLE1BQUEsQ0FBQSxDQUFBeUMsRUFBQSxDQUFBLGdCQUFBLEVBQUEyRCxzQkFBQSxFLENBRUE7QUFDQSIsImZpbGUiOiJ2bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc3RhdGlvbnMgPSBbXG5cdHtcblx0XHRcIm5hbWVcIjogXCJBbnRvbmlvIENhcmxvc1wiLFxuXHRcdFwiaWRcIjogXCJhbnRvbmlvLWNhcmxvc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAyLCAzOiAyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkxMTMxNTM0NDM5MTMxOSwgLTQzLjE3MjA1MDk5NzU5ODI0MV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIkNhbWVyaW5vXCIsXG5cdFx0XCJpZFwiOiBcImNhbWVyaW5vXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDM6IDggfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAxNjk4MDQ2MDIyMzgyLCAtNDMuMTgzOTgzNjE0OTMzNDg5XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDYW5kZWzDoXJpYVwiLFxuXHRcdFwiaWRcIjogXCJjYW5kZWxhcmlhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDYsIDM6IDYgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAxNzI1MDI5Mzg0MjU5LCAtNDMuMTc4ODA4NjY1NDE4NjcxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDYXJpb2NhXCIsXG5cdFx0XCJpZFwiOiBcImNhcmlvY2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNCwgMzogNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDc0ODQ1MDcyNTI4MTEsIC00My4xNzY2NDU1MTgwMzg5MTddLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNlbnRyYWxcIixcblx0XHRcImlkXCI6IFwiY2VudHJhbFwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA1LCAzOiAxMCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDI3MDQ5NjA3NDQ5NTIsIC00My4xOTI2MjUzMTQzNzczMzhdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMiwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNpZGFkZSBkbyBTYW1iYVwiLFxuXHRcdFwiaWRcIjogXCJjaWRhZGUtZG8tc2FtYmFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk0MTc5OTU3MTI4MDY3LCAtNDMuMTk2ODg0MDgyMDc4NDc2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDaW5lbMOibmRpYVwiLFxuXHRcdFwiaWRcIjogXCJjaW5lbGFuZGlhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDMsIDM6IDMgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTEwNzM0MDAxODQyMjQzLCAtNDMuMTc1NDI1Mzg3MzY0OTMyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDb2xvbWJvXCIsXG5cdFx0XCJpZFwiOiBcImNvbG9tYm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogMiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDUxNzUyMTkwMDk0MTUsIC00My4xNzgwMTY5NjgyMjg4MThdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNvcmRlaXJvIGRhIEdyYcOnYVwiLFxuXHRcdFwiaWRcIjogXCJjb3JkZWlyby1kYS1ncmFjYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMywgMjogOCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTcxMDQ2Mjk5MjMxMTcsIC00My4yMDQxNzg0MDM1MzM3MDNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcIm5hbWVcIjogXCJDcmlzdGlhbm8gT3R0b25pXCIsXG5cdFx0XCJpZFwiOiBcImNyaXN0aWFuby1vdHRvbmlcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogOSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDMwNjEyNzg0ODA2NDgsIC00My4xOTA3NDkxMDk0MjE0ODldLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMiwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkVxdWFkb3JcIixcblx0XHRcImlkXCI6IFwiZXF1YWRvclwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxOCwgMjogMTEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3ODk0NTY0Njg3NzgyLCAtNDMuMjA0ODA1MDE0NDQwODE1XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJHYW1ib2FcIixcblx0XHRcImlkXCI6IFwiZ2FtYm9hXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE2LCAyOiA2IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5Nzk1OTQwODM3Mjg0NSwgLTQzLjE5OTMzNjY4MzI0NjMwMV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiSGFybW9uaWFcIixcblx0XHRcImlkXCI6IFwiaGFybW9uaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTQgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1NzU0NDM3MjczMzg2LCAtNDMuMTkxNDI3NjM5NTg0NDk2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQYXJhZGEgZG9zIE11c2V1c1wiLFxuXHRcdFwiaWRcIjogXCJwYXJhZGEtZG9zLW11c2V1c1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA4IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NTk0NjU4NjgwMjI2NCwgLTQzLjE4MTk1NTk4MDU4MTI3Ml0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUGFyYWRhIGRvcyBOYXZpb3NcIixcblx0XHRcImlkXCI6IFwicGFyYWRhLWRvcy1uYXZpb3NcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogOSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTQxMzk2MjUzMDM4NzUsIC00My4xODcxODE4MzA2MTc0NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUGVyZWlyYSBSZWlzXCIsXG5cdFx0XCJpZFwiOiBcInBlcmVpcmEtcmVpc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNywgMjogMTAgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk2NjQ3MDY0OTYwNDMsIC00My4yMDE3NzMxMTE1MjM1OTNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlByYcOnYSBYVlwiLFxuXHRcdFwiaWRcIjogXCJwcmFjYS14dlwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAxIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMjA3MDEyODk0NTg0OCwgLTQzLjE3MzExNzM5NTc4Mzg3Nl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJhaWEgRm9ybW9zYVwiLFxuXHRcdFwiaWRcIjogXCJwcmFpYS1mb3Jtb3NhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEwLCAyOiAxMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDMxNzcxNTIzODgwNTcsIC00My4yMDgxNjE5NjQ5MDIzMDNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlByb3ZpZMOqbmNpYVwiLFxuXHRcdFwiaWRcIjogXCJwcm92aWRlbmNpYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTc0ODk5MjIwMTQzODMsIC00My4xOTY3MDE0MDA4OTAwMzVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlJvZG92acOhcmlhXCIsXG5cdFx0XCJpZFwiOiBcInJvZG92aWFyaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTksIDI6IDEyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5ODgwNTU3NDI1MTc5OSwgLTQzLjIwNzM0Mjk0MTQ3NTk4Nl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FhcmFcIixcblx0XHRcImlkXCI6IFwic2FhcmFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDU5MTIxMDg0NjAyNTMsIC00My4xODczMjA3ODIyMjgyMDVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcIm5hbWVcIjogXCJTYW50YSBSaXRhXCIsXG5cdFx0XCJpZFwiOiBcInNhbnRhLXJpdGFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogNyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDA1OTQxNjc0MTA2NDksIC00My4xODE1MDkwNDk4NTQyMDZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlNhbnRvIENyaXN0b1wiLFxuXHRcdFwiaWRcIjogXCJzYW50by1jcmlzdG9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTIsIDI6IDcgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1MzI3MjgyMDAyMTQ2LCAtNDMuMjAwMjU5MTgxNzU1NzRdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlNhbnRvcyBEdW1vbnRcIixcblx0XHRcImlkXCI6IFwic2FudG9zLWR1bW9udFwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxLCAzOiAxIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkxMjI4Njg3NDk2MjQwMSwgLTQzLjE2NzYzMjI1OTU0NTg0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTw6NvIEJlbnRvXCIsXG5cdFx0XCJpZFwiOiBcInNhby1iZW50b1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA3IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5ODY0ODA5NjA1MTAxMiwgLTQzLjE3OTk2NDMxMTc2NDg4NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2V0ZSBkZSBTZXRlbWJyb1wiLFxuXHRcdFwiaWRcIjogXCJzZXRlLWRlLXNldGVtYnJvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDUsIDM6IDUgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTA1MzA1OTAwOTc3ODk3LCAtNDMuMTc3NDYzODE2MzQ2OTIyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJUaXJhZGVudGVzXCIsXG5cdFx0XCJpZFwiOiBcInRpcmFkZW50ZXNcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDY1NzgyMjIwMjYxMTYsIC00My4xODI4NTQyMzY1NTc4MDJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlV0b3BpYSBBcXVhUmlvXCIsXG5cdFx0XCJpZFwiOiBcInV0b3BpYS1hcXVhcmlvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEwIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5MzA5NTQ3MTk5OTYxMiwgLTQzLjE5MDIzNjkwNzIxMzIxOV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiVmlsYSBPbMOtbXBpY2FcIixcblx0XHRcImlkXCI6IFwidmlsYS1vbGltcGljYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5OTA1NjU3MjY0NjUzMywgLTQzLjE5OTY0MzUyOTQ5NTI5N10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9XG5dO1xuXG5sZXQgc3RhdGlvbl9pbmRleCA9IHt9O1xuc3RhdGlvbnMuZm9yRWFjaCgoc3RhdGlvbikgPT4ge1xuXHRsZXQgc3RhdGlvbl9uYW1lID0gc3RhdGlvbltcIm5hbWVcIl07XG5cdHN0YXRpb25faW5kZXhbc3RhdGlvbl9uYW1lXSA9IHN0YXRpb247XG59KTtcbiIsImxldCBsaW5lcyA9IFtcblx0e1xuXHRcdFwiaWRcIjogMSxcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAxXCIsXG5cdFx0XCJjb2xvclwiOiBcIiM2OGI5ZmJcIixcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xuXHRcdC8vIFx0XCJTYW50b3MgRHVtb250XCIsXG5cdFx0Ly8gXHRcIlByYWlhIEZvcm1vc2FcIlxuXHRcdC8vIF1cblx0fSxcblx0e1xuXHRcdFwiaWRcIjogMixcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAyXCIsXG5cdFx0XCJjb2xvclwiOiBcIiM3M2NhM2ZcIixcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xuXHRcdC8vIFx0XCJQcmHDp2EgWFZcIixcblx0XHQvLyBcdFwiUHJhaWEgRm9ybW9zYVwiXG5cdFx0Ly8gXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwiaWRcIjogMyxcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAzXCIsXG5cdFx0XCJjb2xvclwiOiBcIiNmM2EyMzBcIixcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xuXHRcdC8vIFx0XCJTYW50b3MgRHVtb250XCIsXG5cdFx0Ly8gXHRcIkNlbnRyYWxcIlxuXHRcdC8vIF1cblx0fVxuXTtcblxubGV0IGxpbmVfaW5kZXggPSB7IH07XG5saW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdGxldCBsaW5lX25hbWUgPSBsaW5lW1wibmFtZVwiXTtcblx0bGluZV9pbmRleFtsaW5lX25hbWVdID0gbGluZTtcbn0pO1xuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gZ2V0IGxvY2F0aW9uIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBQZWdhIGEgbG9jYWxpemHDp8OjbyBkbyB1c3XDoXJpb1xuY29uc3QgZ2V0TG9jYXRpb24gPSAoaXNfaW5pdGlhbCA9IGZhbHNlKSA9PiB7XG5cdG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XG5cdFx0Ly8gU2UgdmllciBkbyBtb2RvIGluaWNpYWwsIGVuY2VycmEgZWxlXG5cdFx0aWYgKGlzX2luaXRpYWwpIHtcblx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWluaXRpYWxcIik7XG5cdFx0fVxuXG5cdFx0Ly8gRGVzY29icmUgYSBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYSBlIHByb2N1cmEgYXMgcHLDs3hpbWFzIHBhcnRpZGFzXG5cdFx0bGV0IG5lYXJlc3Rfc3RhdGlvbiA9IG5lYXJlc3RTdGF0aW9uKFtwb3NpdGlvbltcImNvb3Jkc1wiXVtcImxhdGl0dWRlXCJdLCBwb3NpdGlvbltcImNvb3Jkc1wiXVtcImxvbmdpdHVkZVwiXV0pO1xuXHRcdG5leHREZXBhcnR1cmVzKG5lYXJlc3Rfc3RhdGlvbik7XG5cdH0pO1xufTtcbiIsIi8vIEVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXG5jb25zdCBkZWcycmFkID0gKGRlZykgPT4ge1xuXHRyZXR1cm4gZGVnICogKE1hdGguUEkgLyAxODApO1xufTtcblxuY29uc3QgbmVhcmVzdFN0YXRpb24gPSAodXNlcl9jb29yZGluYXRlcykgPT4ge1xuXHRsZXQgdXNlcl9sYXRpdHVkZSA9IGRlZzJyYWQodXNlcl9jb29yZGluYXRlc1swXSk7XG5cdGxldCB1c2VyX2xvbmdpdHVkZSA9IGRlZzJyYWQodXNlcl9jb29yZGluYXRlc1sxXSk7XG5cblx0bGV0IFIgPSA2MzcxO1xuXG5cdGxldCBzaG9ydGVzdF9kaXN0YW5jZSA9IG51bGw7XG5cdGxldCBuZWFyZXN0X3N0YXRpb24gPSBudWxsO1xuXG5cdHN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcblx0XHRpZiAoIXN0YXRpb25bXCJkaXNhYmxlZFwiXSkge1xuXHRcdFx0bGV0IHN0YXRpb25fbGF0aXR1ZGUgPSBkZWcycmFkKHN0YXRpb25bXCJjb29yZGluYXRlc1wiXVswXSk7XG5cdFx0XHRsZXQgc3RhdGlvbl9sb25naXR1ZGUgPSBkZWcycmFkKHN0YXRpb25bXCJjb29yZGluYXRlc1wiXVsxXSk7XG5cblx0XHRcdGxldCB4ID0gKHN0YXRpb25fbG9uZ2l0dWRlIC0gdXNlcl9sb25naXR1ZGUpICogTWF0aC5jb3MoKHVzZXJfbGF0aXR1ZGUgKyBzdGF0aW9uX2xhdGl0dWRlKSAvIDIpO1xuXHRcdFx0bGV0IHkgPSAoc3RhdGlvbl9sYXRpdHVkZSAtIHVzZXJfbGF0aXR1ZGUpO1xuXHRcdFx0bGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpICogUjtcblxuXHRcdFx0aWYgKCFzaG9ydGVzdF9kaXN0YW5jZSB8fCBkaXN0YW5jZSA8IHNob3J0ZXN0X2Rpc3RhbmNlKSB7XG5cdFx0XHRcdHNob3J0ZXN0X2Rpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRcdG5lYXJlc3Rfc3RhdGlvbiA9IHN0YXRpb247XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gbmVhcmVzdF9zdGF0aW9uO1xufTtcbiIsIi8vIFByw7N4aW1hcyBwYXJ0aWRhc1xuY29uc3QgbmV4dERlcGFydHVyZXMgPSAoc3RhdGlvbikgPT4ge1xuXHRsZXQgZGVwYXJ0dXJlcztcblxuXHRsZXQgbGluZV9lbW9qaSA9IHtcblx0XHQxOiBcIjHvuI/ig6NcIixcblx0XHQyOiBcIjLvuI/ig6NcIixcblx0XHQzOiBcIjPvuI/ig6NcIlxuXHR9O1xuXG5cdC8vIERlc2xpZ2EgaW50ZXJ2YWxvcyBlIGV2ZW50b3MgZXhpc3RlbnRlc1xuXHRjbGVhckludGVydmFsKGN1ZVtcImludGVydmFsLWRlcGFydHVyZXNcIl0pO1xuXHRjbGVhckludGVydmFsKGN1ZVtcImludGVydmFsLWxhc3QtdXBkYXRlZFwiXSk7XG5cblx0JCh3aW5kb3cpLm9mZihcInZpc2liaWxpdHljaGFuZ2Ugb25saW5lXCIpO1xuXHQvLyAkKHdpbmRvdykub2ZmKFwib25saW5lXCIpO1xuXG5cdC8vIENvbG9jYSBvIG5vbWUgZGEgZXN0YcOnw6NvIG5vIGFwcGJhclxuXHQkKFwiLnN0YXRpb25zIGgxIC5zdGF0aW9uLW5hbWVcIikudGV4dChzdGF0aW9uW1wibmFtZVwiXSk7XG5cblx0Ly8gSW5zaXJlIGFuaW1hw6fDo28gZGUgbG9hZFxuXHQkcGFuZWwuYWRkQ2xhc3MoXCItc3RhdGUtLWxvYWRpbmdcIik7XG5cdC8vIGxldCAkbG9hZGluZyA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwibG9hZGluZ1wiKTtcblx0Ly8gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJhbmltYXRpb25cIikuYXBwZW5kVG8oJGxvYWRpbmcpO1xuXHQvLyAkcGFuZWwuZW1wdHkoKS5hcHBlbmQoJGxvYWRpbmcpO1xuXG5cdC8vIEF0dWFsaXphw6fDo29cblx0Y29uc3QgbGFzdFVwZGF0ZWQgPSAoKSA9PiB7XG5cdFx0bGV0ICRiYWRnZSA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdHVzLWJhZGdlXCIpO1xuXHRcdGxldCBjb25uZWN0ZWQgPSBuYXZpZ2F0b3Iub25MaW5lO1xuXG5cdFx0Ly8gVGVtcG8gZW0gc2VndW5kb3MgZGVzZGUgYSDDumx0aW1hIGF0dWFsaXphw6fDo29cblx0XHRsZXQgc2Vjb25kc19zaW5jZV91cGRhdGUgPSBtb21lbnQoKS5kaWZmKGRlcGFydHVyZXNbXCJsYXN0VXBkYXRlZFwiXSwgXCJzZWNvbmRzXCIpO1xuXG5cdFx0Ly8gU2UgdGl2ZXIgc2lkbyBhdHVhbGl6YWRvIGjDoSBtZW5vcyBkZSA2MCBzZWd1bmRvcywgbW9zdHJhIFRlbXBvIFJlYWxcblx0XHRpZiAoc2Vjb25kc19zaW5jZV91cGRhdGUgPD0gNjApIHtcblx0XHRcdCRiYWRnZS5hZGRDbGFzcyhcIi1zdGF0ZS0tcmVhbC10aW1lXCIpLnRleHQoXCJUZW1wbyByZWFsXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgbGFzdF91cGRhdGVkID0gXCJBdHVhbGl6YWRvIFwiICsgbW9tZW50KGRlcGFydHVyZXNbXCJsYXN0VXBkYXRlZFwiXSkuZnJvbU5vdyh0cnVlKSArIFwiIGF0csOhc1wiO1xuXHRcdFx0JGJhZGdlLnRleHQobGFzdF91cGRhdGVkKTtcblx0XHR9XG5cblx0XHQkc3RhdHVzLmVtcHR5KCkuYXBwZW5kKCRiYWRnZSk7XG5cdH07XG5cblx0Y29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcblx0XHQvLyBTw7MgY2FycmVnYSBzZSBlc3RpdmVyIGNvbSBmb2NvXG5cdFx0aWYgKGRvY3VtZW50LmhpZGRlbiA9PT0gdHJ1ZSB8fCBuYXZpZ2F0b3Iub25MaW5lID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIENhcnJlZ2Egb3MgZGFkb3Ncblx0XHQkLmdldEpTT04oXCJodHRwczovL2VtaXRyZW1tdXMuY29tLy0vdmx0L2RlcGFydHVyZXM/Y2FsbGJhY2s9P1wiLCB7XG5cdFx0XHRcInN0YXRpb25cIjogc3RhdGlvbltcImlkXCJdLFxuXHRcdFx0Ly8gXCJlbnZcIjogXCJkZXZcIlxuXHRcdH0pLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRkZXBhcnR1cmVzID0gcmVzcG9uc2U7XG5cblx0XHRcdC8vIGxldCAkc3RhdGlvbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdGlvblwiKTtcblx0XHRcdGxldCBkaXJlY3Rpb25zID0gWyBdO1xuXHRcdFx0bGV0IGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uID0geyB9O1xuXG5cdFx0XHRsZXQgZXRhX2NvdW50ID0gMDtcblxuXHRcdFx0Ly8gT3JnYW5pemEgYXMgcGFydGlkYXMgcG9yIGRlc3Rpbm9cblx0XHRcdGRlcGFydHVyZXNbXCJsaW5lc1wiXS5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdFx0XHRcdGxpbmVbXCJkaXJlY3Rpb25zXCJdLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuXHRcdFx0XHRcdGxldCBkaXJlY3Rpb25fdGl0bGUgPSBkaXJlY3Rpb25bXCJuYW1lXCJdO1xuXHRcdFx0XHRcdGV0YV9jb3VudCArPSBkaXJlY3Rpb25bXCJldGFzXCJdLmxlbmd0aDtcblxuXHRcdFx0XHRcdGlmIChkaXJlY3Rpb25bXCJldGFzXCJdLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdGlmICghZGlyZWN0aW9ucy5pbmNsdWRlcyhkaXJlY3Rpb25fdGl0bGUpKSB7XG5cdFx0XHRcdFx0XHRcdGRpcmVjdGlvbnMucHVzaChkaXJlY3Rpb25fdGl0bGUpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoIWRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0pIHtcblx0XHRcdFx0XHRcdFx0ZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb25bZGlyZWN0aW9uX3RpdGxlXSA9IFsgXTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0ZGlyZWN0aW9uW1wiZXRhc1wiXS5mb3JFYWNoKCh0cmFpbikgPT4ge1xuXHRcdFx0XHRcdFx0XHR0cmFpbltcImxpbmVcIl0gPSBsaW5lW1wibmFtZVwiXTtcblx0XHRcdFx0XHRcdFx0ZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb25bZGlyZWN0aW9uX3RpdGxlXS5wdXNoKHRyYWluKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gU2UgbsO6bWVybyBkZSBwcsOzeGltYXMgcGFydGlkYXMgZm9yIHplcm8sXG5cdFx0XHQvLyBjb25mZXJlIHNlIGFpbmRhIGVzdMOhIGRlbnRybyBkbyBob3LDoXJpbyBkZSBmdW5jaW9uYW1lbnRvXG5cdFx0XHRpZiAoZXRhX2NvdW50ID09PSAwKSB7XG5cdFx0XHRcdGxldCBub3cgPSBtb21lbnQoKTtcblx0XHRcdFx0bGV0IG9wZXJhdGlvbl9zdGFydF90aW1lID0gbW9tZW50KFwiMDY6MDBcIiwgXCJISDptbVwiKTtcblx0XHRcdFx0bGV0IG9wZXJhdGlvbl9lbmRfdGltZSA9IG1vbWVudChcIjA2OjAwXCIsIFwiSEg6bW1cIik7XG5cblx0XHRcdFx0aWYgKG5vdy5pc0FmdGVyKG9wZXJhdGlvbl9lbmRfdGltZSkgJiYgbm93LmlzQmVmb3JlKG9wZXJhdGlvbl9zdGFydF90aW1lKSkge1xuXHRcdFx0XHRcdCRwYW5lbC5hZGRDbGFzcyhcIi1zdGF0ZS0tY2xvc2VkXCIpO1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiRm9yYSBkbyBob3LDoXJpbyBkZSBvcGVyYcOnw6NvIVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBNb250YSBhcyBwYXJ0aWRhc1xuXHRcdFx0bGV0ICRkZXBhcnR1cmVzID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJkZXBhcnR1cmVzXCIpO1xuXHRcdFx0bGV0ICR0aXRsZSA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGVwYXJ0dXJlcy10aXRsZVwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRcdH0pLmFwcGVuZFRvKCRkZXBhcnR1cmVzKTtcblx0XHRcdCQoXCI8c3BhbiAvPlwiKS50ZXh0KFwiUHLDs3hpbW9zIHRyZW5zXCIpLmFwcGVuZFRvKCR0aXRsZSk7XG5cblx0XHRcdGxldCBzaGFyZV90ZXh0ID0gW1wiUHLDs3hpbW9zIHRyZW5zXCIsIFwi8J+aiSAqXCIgKyBzdGF0aW9uW1wibmFtZVwiXSArIFwiKlwiLCBcIlwiXTtcblxuXHRcdFx0Ly8gZGlyZWN0aW9ucy5zb3J0KCk7XG5cdFx0XHRkaXJlY3Rpb25zLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuXHRcdFx0XHRsZXQgJGRpcmVjdGlvbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGlyZWN0aW9uXCIpLmFwcGVuZFRvKCRkZXBhcnR1cmVzKTtcblx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJkaXJlY3Rpb24tY2FwdGlvblwiKS50ZXh0KFwiRGVzdGlub1wiKS5hcHBlbmRUbygkZGlyZWN0aW9uKTtcblxuXHRcdFx0XHRsZXQgZXRhcyA9IGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl07XG5cdFx0XHRcdGV0YXMuc29ydCgoYSwgYikgPT4geyByZXR1cm4gYVtcInNlY29uZHNcIl0gLSBiW1wic2Vjb25kc1wiXSB9KTtcblxuXHRcdFx0XHRldGFzLmZvckVhY2goKHRyYWluKSA9PiB7XG5cdFx0XHRcdFx0bGV0ICR0cmFpbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW5cIikuYXBwZW5kVG8oJGRpcmVjdGlvbik7XG5cdFx0XHRcdFx0bGV0ICRsaW5lID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpbi1saW5lXCIpLmFwcGVuZFRvKCR0cmFpbik7XG5cdFx0XHRcdFx0bGV0IGlzX2FwcHJvYWNoaW5nID0gdHJhaW5bXCJzZWNvbmRzXCJdIDwgMjU7XG5cblx0XHRcdFx0XHRsZXQgbGluZSA9IGxpbmVfaW5kZXhbdHJhaW5bXCJsaW5lXCJdXTtcblx0XHRcdFx0XHRsZXQgZGVwYXJ0dXJlX2NvdW50ZG93biA9IChpc19hcHByb2FjaGluZz8gXCJBZ29yYVwiIDogTWF0aC5yb3VuZCh0cmFpbltcInNlY29uZHNcIl0gLyA2MCkgKyBcIjxzcGFuPm1pbjwvc3Bhbj5cIik7XG5cdFx0XHRcdFx0bGV0IGRlcGFydHVyZV90aW1lID0gbW9tZW50KHRyYWluW1wiYXJyaXZhbFRpbWVcIl0pLmZvcm1hdChcIkhIOm1tXCIpO1xuXG5cdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJsaW5lLXNoaWVsZFwiKS5jc3MoXCJjb2xvclwiLCBsaW5lW1wiY29sb3JcIl0pLmF0dHIoXCJ0aXRsZVwiLCBcIkxpbmhhIFwiICsgbGluZVtcImlkXCJdKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSkudGV4dChsaW5lW1wiaWRcIl0pLmFwcGVuZFRvKCRsaW5lKTtcblx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInRyYWluLWRpcmVjdGlvblwiKS5hdHRyKFwidGl0bGVcIiwgXCJUcmVtIFwiICsgdHJhaW5bXCJ0cmFpblwiXSkudGV4dChkaXJlY3Rpb24pLmFwcGVuZFRvKCR0cmFpbik7XG5cdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpbi1ldGFcIikuYXR0cihcInRpdGxlXCIsIGRlcGFydHVyZV90aW1lKS5odG1sKGRlcGFydHVyZV9jb3VudGRvd24pLmFwcGVuZFRvKCR0cmFpbik7XG5cblx0XHRcdFx0XHRpZiAoaXNfYXBwcm9hY2hpbmcpIHtcblx0XHRcdFx0XHRcdCR0cmFpbi5hZGRDbGFzcyhcIi1zdGF0ZS0tYXBwcm9hY2hpbmdcIik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gVGV4dG8gcGFyYSBjb21wYXJ0aWxoYW1lbnRvXG5cdFx0XHRcdFx0c2hhcmVfdGV4dC5wdXNoKGxpbmVfZW1vamlbbGluZVtcImlkXCJdXSArIFwiIFwiICsgZGlyZWN0aW9uICsgXCIgXCIgKyBkZXBhcnR1cmVfdGltZSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIENvbXBhcnRpbGhhclxuXHRcdFx0XHQvLyBpZiAobmF2aWdhdG9yLnNoYXJlKSB7XG5cdFx0XHRcdC8vIFx0bGV0IGxvbmdwcmVzcztcblx0XHRcdFx0Ly8gXHRsZXQgbG9uZ3ByZXNzX2RlbGF5ID0gMTMwMDtcblxuXHRcdFx0XHQvLyBcdCRkaXJlY3Rpb24ub24oXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdC8vIFx0XHRsb25ncHJlc3MgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0Ly8gXHRcdFx0bmF2aWdhdG9yLnNoYXJlKHtcblx0XHRcdFx0Ly8gXHRcdFx0XHR0ZXh0OiBzaGFyZV90ZXh0LmpvaW4oXCJcXG5cIilcblx0XHRcdFx0Ly8gXHRcdFx0fSk7XG5cdFx0XHRcdC8vIFx0XHR9LCBsb25ncHJlc3NfZGVsYXkpO1xuXHRcdFx0XHQvLyBcdH0pLm9uKFwibW91c2V1cCBtb3VzZW91dFwiLCAoKSA9PiB7XG5cdFx0XHRcdC8vIFx0XHQvLyBjbGVhckludGVydmFsKGxvbmdwcmVzcyk7XG5cdFx0XHRcdC8vIFx0fSk7XG5cdFx0XHRcdC8vIH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBFc3RhZG8gZGEgY29uZXjDo28gZSBob3JhIGRhIMO6bHRpbWEgYXR1YWxpemHDp8Ojb1xuXHRcdFx0JHN0YXR1cyA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdHVzXCIpLmFwcGVuZFRvKCR0aXRsZSk7XG5cdFx0XHQvLyAkY29ubmVjdGlvbl9zdGF0dXMgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImNvbm5lY3Rpb24tc3RhdHVzXCIpLmFwcGVuZFRvKCRzdGF0dXMpO1xuXHRcdFx0Ly8gJGxhc3RfdXBkYXRlZCA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwibGFzdC11cGRhdGVkXCIpLmFwcGVuZFRvKCRzdGF0dXMpO1xuXHRcdFx0bGFzdFVwZGF0ZWQoKTtcblxuXHRcdFx0Ly8gTGltcGEgbyBwYWluZWwgZSBpbnNlcmUgb3Mgbm92b3MgZGFkb3Ncblx0XHRcdCRwYW5lbC5yZW1vdmVDbGFzcyhcIi1zdGF0ZS0tbG9hZGluZyAtc3RhdGUtLWNsb3NlZFwiKTtcblx0XHRcdCRzdGF0aW9uLmVtcHR5KCkuYXBwZW5kKCRkZXBhcnR1cmVzKTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCB1cGRhdGVXaW5kb3cgPSAoKSA9PiB7XG5cdFx0aWYgKGRvY3VtZW50LmhpZGRlbiA9PT0gZmFsc2UgJiYgbmF2aWdhdG9yLm9uTGluZSA9PT0gdHJ1ZSkge1xuXHRcdFx0bGFzdFVwZGF0ZWQoKTtcblx0XHRcdGdldERhdGEoKTtcblx0XHR9XG5cdH07XG5cblx0Z2V0RGF0YSgpO1xuXG5cdC8vIENyaWEgbm92b3MgaW50ZXJ2YWxvcyBlIGV2ZW50b3Ncblx0aWYgKGVudiA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcblx0XHRjdWVbXCJpbnRlcnZhbC1kZXBhcnR1cmVzXCJdID0gc2V0SW50ZXJ2YWwoZ2V0RGF0YSwgMTUwMDApOyAvLyBURU1QXG5cdFx0Y3VlW1wiaW50ZXJ2YWwtbGFzdC11cGRhdGVkXCJdID0gc2V0SW50ZXJ2YWwobGFzdFVwZGF0ZWQsIDUwMDApO1xuXHR9XG5cblx0JCh3aW5kb3cpLm9uKFwib25saW5lIHZpc2liaWxpdHljaGFuZ2VcIiwgdXBkYXRlV2luZG93KTtcbn07XG4iLCIkKGZ1bmN0aW9uKCkge1xuXHQvLyBNb250YSBsaXN0YSBkZSBwYXJhZGFzIGUgZXN0YcOnw7Vlc1xuXHRsZXQgJHN0YXRpb25zID0gJChcIi5zdGF0aW9ucyB1bFwiKTtcblxuXHRsZXQgJG5lYXJlc3QgPSAkKFwiPGEgLz5cIikuYXR0cihcImhyZWZcIiwgXCIjXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQkKFwiLnN0YXRpb25zIGgxIC5zdGF0aW9uLW5hbWVcIikudGV4dChcIlwiKTtcblx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHRcdGdldExvY2F0aW9uKCk7XG5cdH0pLmFwcGVuZFRvKCRzdGF0aW9ucyk7XG5cdCQoXCI8aSAvPlwiKS5hZGRDbGFzcyhcIm1hdGVyaWFsLWljb25zXCIpLnRleHQoXCJuZWFyX21lXCIpLmFwcGVuZFRvKCRuZWFyZXN0KTtcblx0JChcIjxzcGFuIC8+XCIpLnRleHQoXCJMb2NhbGl6YXIgZXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcIikuYXBwZW5kVG8oJG5lYXJlc3QpO1xuXG5cdCQoXCI8bGkgLz5cIikuYWRkQ2xhc3MoXCJuZWFyZXN0LXN0YXRpb25cIikuYXBwZW5kKCRuZWFyZXN0KS5hcHBlbmRUbygkc3RhdGlvbnMpO1xuXG5cdHN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcblx0XHRsZXQgJHN0YXRpb24gPSAkKFwiPGEgLz5cIikuYXR0cihcImhyZWZcIiwgXCIjXCIgKyBzdGF0aW9uW1wiaWRcIl0pO1xuXG5cdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJzdGF0aW9uLW5hbWVcIikudGV4dChzdGF0aW9uW1wibmFtZVwiXSkuYXBwZW5kVG8oJHN0YXRpb24pO1xuXG5cdFx0bGV0ICRsaW5lcyA9ICQoXCI8dWwgLz5cIikuYWRkQ2xhc3MoXCJzdGF0aW9uLWxpbmVzXCIpLmFwcGVuZFRvKCRzdGF0aW9uKTtcblx0XHRsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdFx0XHRsZXQgJGxpbmUgPSAkKFwiPGxpIC8+XCIpLmFwcGVuZFRvKCRsaW5lcyk7XG5cdFx0XHRpZiAoc3RhdGlvbltcImxpbmVzXCJdLmluY2x1ZGVzKGxpbmVbXCJpZFwiXSkpIHtcblx0XHRcdFx0bGV0ICRzaGllbGQgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImxpbmUtc2hpZWxkXCIpLmNzcyhcImNvbG9yXCIsIGxpbmVbXCJjb2xvclwiXSkudGV4dChsaW5lW1wiaWRcIl0pLmFwcGVuZFRvKCRsaW5lKTtcblxuXHRcdFx0XHRpZiAobGluZVtcImRpc2FibGVkXCJdKSB7XG5cdFx0XHRcdFx0JHNoaWVsZC5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSkuYWRkQ2xhc3MoXCItc3RhdGUtLWRpc2FibGVkXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoIXN0YXRpb25bXCJkaXNhYmxlZFwiXSkge1xuXHRcdFx0JHN0YXRpb24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0bmV4dERlcGFydHVyZXMoc3RhdGlvbik7XG5cdFx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHN0YXRpb24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Ly8gJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRcdH0pO1xuXHRcdFx0JHN0YXRpb24uYWRkQ2xhc3MoXCItc3RhdGUtLWRpc2FibGVkXCIpO1xuXHRcdH1cblxuXHRcdCQoXCI8bGkgLz5cIikuYXBwZW5kKCRzdGF0aW9uKS5hcHBlbmRUbygkc3RhdGlvbnMpO1xuXHR9KTtcblxuXHQvLyBOYXZlZ2HDp8Ojb1xuXHQkKFwiLmFwcGJhclwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcblx0XHQkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHR9KTtcblxuXHQkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgKGV2ZW50KSA9PiB7XG5cdFx0bGV0IHNjcm9sbF90b3BfcG9zaXRpb24gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cblx0XHRpZiAoc2Nyb2xsX3RvcF9wb3NpdGlvbiA+PSAxMikge1xuXHRcdFx0JChcImJvZHlcIikuYWRkQ2xhc3MoXCItbW9kZS0tc2Nyb2xsXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1zY3JvbGxcIik7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyB0aGVtZSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmxldCBUaGVtZSA9ICgoKSA9PiB7XHJcbiAgICBsZXQgdGhlbWVfb3JkZXIgPSBbXHJcbiAgICAgICAgXCJhdXRvXCIsXHJcbiAgICAgICAgXCJsaWdodFwiLFxyXG4gICAgICAgIFwiZGFya1wiXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCB0aGVtZV9zZXR0aW5ncyA9IHtcclxuICAgICAgICBcImF1dG9cIjoge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGVtYSBhdXRvbcOhdGljb1wiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJicmlnaHRuZXNzX2F1dG9cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsaWdodFwiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUZW1hIGNsYXJvXCIsXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImJyaWdodG5lc3NfNVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRhcmtcIjoge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGVtYSBlc2N1cm9cIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiYnJpZ2h0bmVzc180XCJcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgc2V0ID0gKG5ld190aGVtZSwgb2xkX3RoZW1lKSA9PiB7XHJcbiAgICAgICAgY3VycmVudF90aGVtZSA9IG5ld190aGVtZTtcclxuXHJcbiAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWUgc3BhblwiKS50ZXh0KHRoZW1lX3NldHRpbmdzW25ld190aGVtZV1bXCJ0aXRsZVwiXSk7XHJcbiAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWUgaVwiKS50ZXh0KHRoZW1lX3NldHRpbmdzW25ld190aGVtZV1bXCJpY29uXCJdKTtcclxuXHJcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItdGhlbWUtLVwiICsgb2xkX3RoZW1lKS5hZGRDbGFzcyhcIi10aGVtZS0tXCIgKyBuZXdfdGhlbWUpO1xyXG5cclxuICAgICAgICAvLyBTYWx2YSBjb25maWd1cmHDp8OjbyBubyBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBpZiAobmV3X3RoZW1lID09PSBcImF1dG9cIikge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRoZW1lXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgbmV3X3RoZW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENvbmZlcmUgc2UgasOhIGjDoSB0ZW1hIHNhbHZvIG5vIGxvY2FsU3RvcmFnZS5cclxuICAgIC8vIFNlIG7Do28gaG91dmVyLCBwZWdhIG8gcGFkcsOjbyBkbyBzaXN0ZW1hXHJcbiAgICBsZXQgY3VycmVudF90aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgfHwgZ2V0Q29tcHV0ZWRTdHlsZSgkKFwiLnNldHRpbmdzIC5jdXJyZW50LXRoZW1lXCIpWzBdKS5nZXRQcm9wZXJ0eVZhbHVlKFwiY29udGVudFwiKS5yZXBsYWNlKC9cIi9nLCBcIlwiKTtcclxuXHJcbiAgICBpZiAoY3VycmVudF90aGVtZSkge1xyXG4gICAgICAgIHNldChjdXJyZW50X3RoZW1lLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBEZXNjb2JyZSBhIHBvc2nDp8OjbyBkbyB0ZW1hIG5hIG9yZGVtXHJcbiAgICAgICAgICAgIGxldCB0aGVtZV9wb3NpdGlvbiA9IHRoZW1lX29yZGVyLmluZGV4T2YoY3VycmVudF90aGVtZSk7XHJcbiAgICAgICAgICAgIGxldCBuZXdfdGhlbWUgPSB0aGVtZV9vcmRlclt0aGVtZV9wb3NpdGlvbiArIDFdIHx8IHRoZW1lX29yZGVyWzBdO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0YSBvIG5vdm8gdGVtYVxyXG4gICAgICAgICAgICBzZXQobmV3X3RoZW1lLCBjdXJyZW50X3RoZW1lKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsImxldCBjdWUgPSBbIF07XG5sZXQgJHBhbmVsLCAkc3RhdGlvbjtcblxuJChmdW5jdGlvbiAoKSB7XG5cdCRwYW5lbCA9ICQoXCIucGFuZWxcIik7XG5cdCRzdGF0aW9uID0gJChcIi5zdGF0aW9uXCIsICRwYW5lbCk7XG5cblx0Ly8gQ29uZmVyZSBzZSB1c3XDoXJpbyBqw6EgaGF2aWEgaGFiaWxpdGFkbyBnZW9sb2NhbGl6YcOnw6NvIGFudGVzXG5cdGlmIChcImdlb2xvY2F0aW9uXCIgaW4gbmF2aWdhdG9yKSB7XG5cdFx0aWYgKFwicGVybWlzc2lvbnNcIiBpbiBuYXZpZ2F0b3IpIHtcblx0XHRcdG5hdmlnYXRvci5wZXJtaXNzaW9ucy5xdWVyeSh7IFwibmFtZVwiOiBcImdlb2xvY2F0aW9uXCIgfSkudGhlbigocGVybWlzc2lvbikgPT4ge1xuXHRcdFx0XHRpZiAocGVybWlzc2lvbltcInN0YXRlXCJdID09PSBcImdyYW50ZWRcIikge1xuXHRcdFx0XHRcdC8vIFNlIGrDoSB0aXZlciwgcGVnYSBhIGxvY2FsaXphw6fDo28gYXR1YWwgZSBwcm9jdXJhIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXG5cdFx0XHRcdFx0Z2V0TG9jYXRpb24oKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBTZSBuw6NvIHRpdmVyLCBtb3N0cmEgYm90w6NvIHBhcmEgc29saWNpdGFyIGF1dG9yaXphw6fDo29cblx0XHRcdFx0XHQkKFwiYm9keVwiKS5hZGRDbGFzcyhcIi1tb2RlLS1pbml0aWFsXCIpO1xuXG5cdFx0XHRcdFx0bGV0ICRwZXJtaXNzaW9uID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJwZXJtaXNzaW9uXCIpLmFwcGVuZFRvKCRwYW5lbCk7XG5cdFx0XHRcdFx0bGV0ICRidXR0b24gPSAkKFwiPGEgLz5cIikuYWRkQ2xhc3MoXCJidXR0b25cIikuYXR0cihcImhyZWZcIiwgXCIjXCIpLmFwcGVuZFRvKCRwZXJtaXNzaW9uKTtcblx0XHRcdFx0XHQkKFwiPGkgLz5cIikuYWRkQ2xhc3MoXCJtYXRlcmlhbC1pY29uc1wiKS50ZXh0KFwibmVhcl9tZVwiKS5hcHBlbmRUbygkYnV0dG9uKTtcblx0XHRcdFx0XHQkKFwiPHNwYW4gLz5cIikudGV4dChcIkxvY2FsaXphciBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYVwiKS5hcHBlbmRUbygkYnV0dG9uKTtcblxuXHRcdFx0XHRcdCRidXR0b24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRnZXRMb2NhdGlvbih0cnVlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGdldExvY2F0aW9uKCk7XG5cdFx0fVxuXHR9XG59KTtcblxuLy8gU2VydmljZSBXb3JrZXJcbmlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcblx0XHRjdWVbXCJzZXJ2aWNlLXdvcmtlclwiXSA9IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFwiL3NlcnZpY2Utd29ya2VyLmpzXCIpO1xuXG5cdFx0Y3VlW1wic2VydmljZS13b3JrZXJcIl0udGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIVwiLCByZWdpc3RyYXRpb24pO1xuXHRcdH0sIChlcnJvcikgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiBcIiwgZXJyb3IpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuLy8gRXN0YWRvIGRhIGNvbmV4w6NvXG5sZXQgJHN0YXR1cztcbmxldCAkY29ubmVjdGlvbl9zdGF0dXM7XG5cbmNvbnN0IHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMgPSAoKSA9PiB7XG5cdHJldHVybiBmYWxzZTtcblx0bGV0IGNvbm5lY3RlZCA9IG5hdmlnYXRvci5vbkxpbmU7XG5cblx0aWYgKGNvbm5lY3RlZCA9PT0gdHJ1ZSkge1xuXHRcdC8vICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiLXN0YXRlLS1zdWNjZXNzXCIpLnRleHQoXCJDb25leMOjbyByZWVzdGFiZWxlY2lkYSFcIikuYXBwZW5kVG8oJGNvbm5lY3Rpb25fc3RhdHVzKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0JGNvbm5lY3Rpb25fc3RhdHVzLmVtcHR5KCk7XG5cdFx0fSwgNDAwMCk7XG5cdH0gZWxzZSB7XG5cdFx0JGNvbm5lY3Rpb25fc3RhdHVzLmVtcHR5KCk7XG5cdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCItc3RhdGUtLWVycm9yXCIpLnRleHQoXCJTZW0gY29uZXjDo29cIikuYXBwZW5kVG8oJGNvbm5lY3Rpb25fc3RhdHVzKTtcblx0fVxufTtcblxuJCh3aW5kb3cpLm9uKFwib25saW5lIG9mZmxpbmVcIiwgdXBkYXRlQ29ubmVjdGlvblN0YXR1cyk7XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib25saW5lXCIsIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMpO1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMpO1xuIl19
