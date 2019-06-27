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

  var $loading = $("<div />").addClass("loading");
  $("<div />").addClass("animation").appendTo($loading);
  $panel.empty().append($loading); // Atualização

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
      var $station = $("<div />").addClass("station");
      var directions = [];
      var departures_by_direction = {}; // Organiza as partidas por destino

      departures["lines"].forEach(function (line) {
        line["directions"].forEach(function (direction) {
          var direction_title = direction["name"];

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
      }); // Monta as partidas

      var $departures = $("<div />").addClass("departures").appendTo($station);
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

      $panel.empty().append($station);
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
var $panel;
$(function () {
  $panel = $(".panel"); // Confere se usuário já havia habilitado geolocalização antes

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
  if (env === "production") {
    window.addEventListener("load", function () {
      cue["service-worker"] = navigator.serviceWorker.register("/service-worker.js");
      cue["service-worker"].then(function (registration) {// console.log("Service Worker registration successful!", registration);
      }, function (error) {// console.log("Service Worker registration failed: ", error);
      });
    });
  }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpb24taW5mby5qcyIsImxpbmUtaW5mby5qcyIsImdldC1sb2NhdGlvbi5qcyIsIm5lYXJlc3Qtc3RhdGlvbi5qcyIsIm5leHQtZGVwYXJ0dXJlcy5qcyIsInN0YXRpb24tbGlzdC5qcyIsInRoZW1lLmpzIiwic3RhcnQuanMiXSwibmFtZXMiOlsic3RhdGlvbnMiLCJzdGF0aW9uX2luZGV4IiwiZm9yRWFjaCIsInN0YXRpb24iLCJzdGF0aW9uX25hbWUiLCJsaW5lcyIsImxpbmVfaW5kZXgiLCJsaW5lIiwibGluZV9uYW1lIiwiZ2V0TG9jYXRpb24iLCJpc19pbml0aWFsIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsIiQiLCJyZW1vdmVDbGFzcyIsIm5lYXJlc3Rfc3RhdGlvbiIsIm5lYXJlc3RTdGF0aW9uIiwibmV4dERlcGFydHVyZXMiLCJkZWcycmFkIiwiZGVnIiwiTWF0aCIsIlBJIiwidXNlcl9jb29yZGluYXRlcyIsInVzZXJfbGF0aXR1ZGUiLCJ1c2VyX2xvbmdpdHVkZSIsIlIiLCJzaG9ydGVzdF9kaXN0YW5jZSIsInN0YXRpb25fbGF0aXR1ZGUiLCJzdGF0aW9uX2xvbmdpdHVkZSIsIngiLCJjb3MiLCJ5IiwiZGlzdGFuY2UiLCJzcXJ0IiwiZGVwYXJ0dXJlcyIsImxpbmVfZW1vamkiLCJjbGVhckludGVydmFsIiwiY3VlIiwid2luZG93Iiwib2ZmIiwidGV4dCIsIiRsb2FkaW5nIiwiYWRkQ2xhc3MiLCJhcHBlbmRUbyIsIiRwYW5lbCIsImVtcHR5IiwiYXBwZW5kIiwibGFzdFVwZGF0ZWQiLCIkYmFkZ2UiLCJjb25uZWN0ZWQiLCJvbkxpbmUiLCJzZWNvbmRzX3NpbmNlX3VwZGF0ZSIsIm1vbWVudCIsImRpZmYiLCJsYXN0X3VwZGF0ZWQiLCJmcm9tTm93IiwiJHN0YXR1cyIsImdldERhdGEiLCJkb2N1bWVudCIsImhpZGRlbiIsImdldEpTT04iLCJkb25lIiwicmVzcG9uc2UiLCIkc3RhdGlvbiIsImRpcmVjdGlvbnMiLCJkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbiIsImRpcmVjdGlvbiIsImRpcmVjdGlvbl90aXRsZSIsImxlbmd0aCIsImluY2x1ZGVzIiwicHVzaCIsInRyYWluIiwiJGRlcGFydHVyZXMiLCIkdGl0bGUiLCJvbiIsInNoYXJlX3RleHQiLCIkZGlyZWN0aW9uIiwiZXRhcyIsInNvcnQiLCJhIiwiYiIsIiR0cmFpbiIsIiRsaW5lIiwiaXNfYXBwcm9hY2hpbmciLCJkZXBhcnR1cmVfY291bnRkb3duIiwicm91bmQiLCJkZXBhcnR1cmVfdGltZSIsImZvcm1hdCIsImNzcyIsImF0dHIiLCJodG1sIiwidXBkYXRlV2luZG93IiwiZW52Iiwic2V0SW50ZXJ2YWwiLCIkc3RhdGlvbnMiLCIkbmVhcmVzdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkbGluZXMiLCIkc2hpZWxkIiwidG9nZ2xlQ2xhc3MiLCJzY3JvbGxfdG9wX3Bvc2l0aW9uIiwic2Nyb2xsVG9wIiwiVGhlbWUiLCJ0aGVtZV9vcmRlciIsInRoZW1lX3NldHRpbmdzIiwic2V0IiwibmV3X3RoZW1lIiwib2xkX3RoZW1lIiwiY3VycmVudF90aGVtZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwiZ2V0SXRlbSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicmVwbGFjZSIsInRoZW1lX3Bvc2l0aW9uIiwiaW5kZXhPZiIsInBlcm1pc3Npb25zIiwicXVlcnkiLCJ0aGVuIiwicGVybWlzc2lvbiIsIiRwZXJtaXNzaW9uIiwiJGJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJyZWdpc3RyYXRpb24iLCJlcnJvciIsIiRjb25uZWN0aW9uX3N0YXR1cyIsInVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUFBLFFBQUEsR0FBQSxDQUNBO0FBQ0EsVUFBQSxnQkFEQTtBQUVBLFFBQUEsZ0JBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FEQSxFQVNBO0FBQ0E7QUFDQSxVQUFBLFVBRkE7QUFHQSxRQUFBLFVBSEE7QUFJQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FMQTtBQU1BO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFQQSxDQVRBLEVBa0JBO0FBQ0EsVUFBQSxZQURBO0FBRUEsUUFBQSxZQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbEJBLEVBMEJBO0FBQ0EsVUFBQSxTQURBO0FBRUEsUUFBQSxTQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBMUJBLEVBa0NBO0FBQ0EsVUFBQSxTQURBO0FBRUEsUUFBQSxTQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbENBLEVBMENBO0FBQ0EsVUFBQSxpQkFEQTtBQUVBLFFBQUEsaUJBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQTFDQSxFQWtEQTtBQUNBLFVBQUEsWUFEQTtBQUVBLFFBQUEsWUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FB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LENBQUEsR0FBQTVCLFNBQUEsQ0FBQXFILGFBQUEsQ0FBQUMsUUFBQSxDQUFBLG9CQUFBLENBQUE7QUFFQTFGLE1BQUFBLEdBQUEsQ0FBQSxnQkFBQSxDQUFBLENBQUFvRixJQUFBLENBQUEsVUFBQU8sWUFBQSxFQUFBLENBQ0E7QUFDQSxPQUZBLEVBRUEsVUFBQUMsS0FBQSxFQUFBLENBQ0E7QUFDQSxPQUpBO0FBS0EsS0FSQTtBQVNBO0FBQ0EsQyxDQUVBOzs7QUFDQSxJQUFBekUsT0FBQTtBQUNBLElBQUEwRSxrQkFBQTs7QUFFQSxJQUFBQyxzQkFBQSxHQUFBLFNBQUFBLHNCQUFBLEdBQUE7QUFDQSxTQUFBLEtBQUE7QUFDQSxNQUFBbEYsU0FBQSxHQUFBeEMsU0FBQSxDQUFBeUMsTUFBQTs7QUFFQSxNQUFBRCxTQUFBLEtBQUEsSUFBQSxFQUFBO0FBQ0E7QUFFQW1GLElBQUFBLFVBQUEsQ0FBQSxZQUFBO0FBQ0FGLE1BQUFBLGtCQUFBLENBQUFyRixLQUFBO0FBQ0EsS0FGQSxFQUVBLElBRkEsQ0FBQTtBQUdBLEdBTkEsTUFNQTtBQUNBcUYsSUFBQUEsa0JBQUEsQ0FBQXJGLEtBQUE7QUFDQWhDLElBQUFBLENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTZCLFFBQUEsQ0FBQSxlQUFBLEVBQUFGLElBQUEsQ0FBQSxhQUFBLEVBQUFHLFFBQUEsQ0FBQXVGLGtCQUFBO0FBQ0E7QUFDQSxDQWRBOztBQWdCQXJILENBQUEsQ0FBQXlCLE1BQUEsQ0FBQSxDQUFBb0MsRUFBQSxDQUFBLGdCQUFBLEVBQUF5RCxzQkFBQSxFLENBRUE7QUFDQSIsImZpbGUiOiJ2bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc3RhdGlvbnMgPSBbXG5cdHtcblx0XHRcIm5hbWVcIjogXCJBbnRvbmlvIENhcmxvc1wiLFxuXHRcdFwiaWRcIjogXCJhbnRvbmlvLWNhcmxvc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAyLCAzOiAyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkxMTMxNTM0NDM5MTMxOSwgLTQzLjE3MjA1MDk5NzU5ODI0MV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIkNhbWVyaW5vXCIsXG5cdFx0XCJpZFwiOiBcImNhbWVyaW5vXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDM6IDggfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAxNjk4MDQ2MDIyMzgyLCAtNDMuMTgzOTgzNjE0OTMzNDg5XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDYW5kZWzDoXJpYVwiLFxuXHRcdFwiaWRcIjogXCJjYW5kZWxhcmlhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDYsIDM6IDYgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAxNzI1MDI5Mzg0MjU5LCAtNDMuMTc4ODA4NjY1NDE4NjcxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDYXJpb2NhXCIsXG5cdFx0XCJpZFwiOiBcImNhcmlvY2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNCwgMzogNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDc0ODQ1MDcyNTI4MTEsIC00My4xNzY2NDU1MTgwMzg5MTddLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNlbnRyYWxcIixcblx0XHRcImlkXCI6IFwiY2VudHJhbFwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA1LCAzOiAxMCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDI3MDQ5NjA3NDQ5NTIsIC00My4xOTI2MjUzMTQzNzczMzhdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMiwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNpZGFkZSBkbyBTYW1iYVwiLFxuXHRcdFwiaWRcIjogXCJjaWRhZGUtZG8tc2FtYmFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk0MTc5OTU3MTI4MDY3LCAtNDMuMTk2ODg0MDgyMDc4NDc2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDaW5lbMOibmRpYVwiLFxuXHRcdFwiaWRcIjogXCJjaW5lbGFuZGlhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDMsIDM6IDMgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTEwNzM0MDAxODQyMjQzLCAtNDMuMTc1NDI1Mzg3MzY0OTMyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJDb2xvbWJvXCIsXG5cdFx0XCJpZFwiOiBcImNvbG9tYm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogMiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDUxNzUyMTkwMDk0MTUsIC00My4xNzgwMTY5NjgyMjg4MThdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNvcmRlaXJvIGRhIEdyYcOnYVwiLFxuXHRcdFwiaWRcIjogXCJjb3JkZWlyby1kYS1ncmFjYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMywgMjogOCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTcxMDQ2Mjk5MjMxMTcsIC00My4yMDQxNzg0MDM1MzM3MDNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcIm5hbWVcIjogXCJDcmlzdGlhbm8gT3R0b25pXCIsXG5cdFx0XCJpZFwiOiBcImNyaXN0aWFuby1vdHRvbmlcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogOSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDMwNjEyNzg0ODA2NDgsIC00My4xOTA3NDkxMDk0MjE0ODldLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMiwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkVxdWFkb3JcIixcblx0XHRcImlkXCI6IFwiZXF1YWRvclwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxOCwgMjogMTEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3ODk0NTY0Njg3NzgyLCAtNDMuMjA0ODA1MDE0NDQwODE1XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJHYW1ib2FcIixcblx0XHRcImlkXCI6IFwiZ2FtYm9hXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE2LCAyOiA2IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5Nzk1OTQwODM3Mjg0NSwgLTQzLjE5OTMzNjY4MzI0NjMwMV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiSGFybW9uaWFcIixcblx0XHRcImlkXCI6IFwiaGFybW9uaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTQgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1NzU0NDM3MjczMzg2LCAtNDMuMTkxNDI3NjM5NTg0NDk2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQYXJhZGEgZG9zIE11c2V1c1wiLFxuXHRcdFwiaWRcIjogXCJwYXJhZGEtZG9zLW11c2V1c1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA4IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NTk0NjU4NjgwMjI2NCwgLTQzLjE4MTk1NTk4MDU4MTI3Ml0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUGFyYWRhIGRvcyBOYXZpb3NcIixcblx0XHRcImlkXCI6IFwicGFyYWRhLWRvcy1uYXZpb3NcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogOSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTQxMzk2MjUzMDM4NzUsIC00My4xODcxODE4MzA2MTc0NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUGVyZWlyYSBSZWlzXCIsXG5cdFx0XCJpZFwiOiBcInBlcmVpcmEtcmVpc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNywgMjogMTAgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk2NjQ3MDY0OTYwNDMsIC00My4yMDE3NzMxMTE1MjM1OTNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlByYcOnYSBYVlwiLFxuXHRcdFwiaWRcIjogXCJwcmFjYS14dlwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAxIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMjA3MDEyODk0NTg0OCwgLTQzLjE3MzExNzM5NTc4Mzg3Nl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJhaWEgRm9ybW9zYVwiLFxuXHRcdFwiaWRcIjogXCJwcmFpYS1mb3Jtb3NhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEwLCAyOiAxMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDMxNzcxNTIzODgwNTcsIC00My4yMDgxNjE5NjQ5MDIzMDNdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlByb3ZpZMOqbmNpYVwiLFxuXHRcdFwiaWRcIjogXCJwcm92aWRlbmNpYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTc0ODk5MjIwMTQzODMsIC00My4xOTY3MDE0MDA4OTAwMzVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlJvZG92acOhcmlhXCIsXG5cdFx0XCJpZFwiOiBcInJvZG92aWFyaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTksIDI6IDEyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5ODgwNTU3NDI1MTc5OSwgLTQzLjIwNzM0Mjk0MTQ3NTk4Nl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FhcmFcIixcblx0XHRcImlkXCI6IFwic2FhcmFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDU5MTIxMDg0NjAyNTMsIC00My4xODczMjA3ODIyMjgyMDVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdC8vIFwiZGlzYWJsZWRcIjogdHJ1ZSxcblx0XHRcIm5hbWVcIjogXCJTYW50YSBSaXRhXCIsXG5cdFx0XCJpZFwiOiBcInNhbnRhLXJpdGFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogNyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDA1OTQxNjc0MTA2NDksIC00My4xODE1MDkwNDk4NTQyMDZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlNhbnRvIENyaXN0b1wiLFxuXHRcdFwiaWRcIjogXCJzYW50by1jcmlzdG9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTIsIDI6IDcgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1MzI3MjgyMDAyMTQ2LCAtNDMuMjAwMjU5MTgxNzU1NzRdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlNhbnRvcyBEdW1vbnRcIixcblx0XHRcImlkXCI6IFwic2FudG9zLWR1bW9udFwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxLCAzOiAxIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkxMjI4Njg3NDk2MjQwMSwgLTQzLjE2NzYzMjI1OTU0NTg0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTw6NvIEJlbnRvXCIsXG5cdFx0XCJpZFwiOiBcInNhby1iZW50b1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA3IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5ODY0ODA5NjA1MTAxMiwgLTQzLjE3OTk2NDMxMTc2NDg4NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2V0ZSBkZSBTZXRlbWJyb1wiLFxuXHRcdFwiaWRcIjogXCJzZXRlLWRlLXNldGVtYnJvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDUsIDM6IDUgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTA1MzA1OTAwOTc3ODk3LCAtNDMuMTc3NDYzODE2MzQ2OTIyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJUaXJhZGVudGVzXCIsXG5cdFx0XCJpZFwiOiBcInRpcmFkZW50ZXNcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMjogMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDY1NzgyMjIwMjYxMTYsIC00My4xODI4NTQyMzY1NTc4MDJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlV0b3BpYSBBcXVhUmlvXCIsXG5cdFx0XCJpZFwiOiBcInV0b3BpYS1hcXVhcmlvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEwIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5MzA5NTQ3MTk5OTYxMiwgLTQzLjE5MDIzNjkwNzIxMzIxOV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiVmlsYSBPbMOtbXBpY2FcIixcblx0XHRcImlkXCI6IFwidmlsYS1vbGltcGljYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5OTA1NjU3MjY0NjUzMywgLTQzLjE5OTY0MzUyOTQ5NTI5N10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9XG5dO1xuXG5sZXQgc3RhdGlvbl9pbmRleCA9IHt9O1xuc3RhdGlvbnMuZm9yRWFjaCgoc3RhdGlvbikgPT4ge1xuXHRsZXQgc3RhdGlvbl9uYW1lID0gc3RhdGlvbltcIm5hbWVcIl07XG5cdHN0YXRpb25faW5kZXhbc3RhdGlvbl9uYW1lXSA9IHN0YXRpb247XG59KTtcbiIsImxldCBsaW5lcyA9IFtcblx0e1xuXHRcdFwiaWRcIjogMSxcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAxXCIsXG5cdFx0XCJjb2xvclwiOiBcIiM2OGI5ZmJcIixcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xuXHRcdC8vIFx0XCJTYW50b3MgRHVtb250XCIsXG5cdFx0Ly8gXHRcIlByYWlhIEZvcm1vc2FcIlxuXHRcdC8vIF1cblx0fSxcblx0e1xuXHRcdFwiaWRcIjogMixcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAyXCIsXG5cdFx0XCJjb2xvclwiOiBcIiM3M2NhM2ZcIixcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xuXHRcdC8vIFx0XCJQcmHDp2EgWFZcIixcblx0XHQvLyBcdFwiUHJhaWEgRm9ybW9zYVwiXG5cdFx0Ly8gXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwiaWRcIjogMyxcblx0XHRcIm5hbWVcIjogXCJMaW5oYSAzXCIsXG5cdFx0XCJjb2xvclwiOiBcIiNmM2EyMzBcIixcblx0XHQvLyBcImRpcmVjdGlvbnNcIjogW1xuXHRcdC8vIFx0XCJTYW50b3MgRHVtb250XCIsXG5cdFx0Ly8gXHRcIkNlbnRyYWxcIlxuXHRcdC8vIF1cblx0fVxuXTtcblxubGV0IGxpbmVfaW5kZXggPSB7IH07XG5saW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdGxldCBsaW5lX25hbWUgPSBsaW5lW1wibmFtZVwiXTtcblx0bGluZV9pbmRleFtsaW5lX25hbWVdID0gbGluZTtcbn0pO1xuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gZ2V0IGxvY2F0aW9uIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBQZWdhIGEgbG9jYWxpemHDp8OjbyBkbyB1c3XDoXJpb1xuY29uc3QgZ2V0TG9jYXRpb24gPSAoaXNfaW5pdGlhbCA9IGZhbHNlKSA9PiB7XG5cdG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XG5cdFx0Ly8gU2UgdmllciBkbyBtb2RvIGluaWNpYWwsIGVuY2VycmEgZWxlXG5cdFx0aWYgKGlzX2luaXRpYWwpIHtcblx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWluaXRpYWxcIik7XG5cdFx0fVxuXG5cdFx0Ly8gRGVzY29icmUgYSBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYSBlIHByb2N1cmEgYXMgcHLDs3hpbWFzIHBhcnRpZGFzXG5cdFx0bGV0IG5lYXJlc3Rfc3RhdGlvbiA9IG5lYXJlc3RTdGF0aW9uKFtwb3NpdGlvbltcImNvb3Jkc1wiXVtcImxhdGl0dWRlXCJdLCBwb3NpdGlvbltcImNvb3Jkc1wiXVtcImxvbmdpdHVkZVwiXV0pO1xuXHRcdG5leHREZXBhcnR1cmVzKG5lYXJlc3Rfc3RhdGlvbik7XG5cdH0pO1xufTtcbiIsIi8vIEVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXG5jb25zdCBkZWcycmFkID0gKGRlZykgPT4ge1xuXHRyZXR1cm4gZGVnICogKE1hdGguUEkgLyAxODApO1xufTtcblxuY29uc3QgbmVhcmVzdFN0YXRpb24gPSAodXNlcl9jb29yZGluYXRlcykgPT4ge1xuXHRsZXQgdXNlcl9sYXRpdHVkZSA9IGRlZzJyYWQodXNlcl9jb29yZGluYXRlc1swXSk7XG5cdGxldCB1c2VyX2xvbmdpdHVkZSA9IGRlZzJyYWQodXNlcl9jb29yZGluYXRlc1sxXSk7XG5cblx0bGV0IFIgPSA2MzcxO1xuXG5cdGxldCBzaG9ydGVzdF9kaXN0YW5jZSA9IG51bGw7XG5cdGxldCBuZWFyZXN0X3N0YXRpb24gPSBudWxsO1xuXG5cdHN0YXRpb25zLmZvckVhY2goKHN0YXRpb24pID0+IHtcblx0XHRpZiAoIXN0YXRpb25bXCJkaXNhYmxlZFwiXSkge1xuXHRcdFx0bGV0IHN0YXRpb25fbGF0aXR1ZGUgPSBkZWcycmFkKHN0YXRpb25bXCJjb29yZGluYXRlc1wiXVswXSk7XG5cdFx0XHRsZXQgc3RhdGlvbl9sb25naXR1ZGUgPSBkZWcycmFkKHN0YXRpb25bXCJjb29yZGluYXRlc1wiXVsxXSk7XG5cblx0XHRcdGxldCB4ID0gKHN0YXRpb25fbG9uZ2l0dWRlIC0gdXNlcl9sb25naXR1ZGUpICogTWF0aC5jb3MoKHVzZXJfbGF0aXR1ZGUgKyBzdGF0aW9uX2xhdGl0dWRlKSAvIDIpO1xuXHRcdFx0bGV0IHkgPSAoc3RhdGlvbl9sYXRpdHVkZSAtIHVzZXJfbGF0aXR1ZGUpO1xuXHRcdFx0bGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpICogUjtcblxuXHRcdFx0aWYgKCFzaG9ydGVzdF9kaXN0YW5jZSB8fCBkaXN0YW5jZSA8IHNob3J0ZXN0X2Rpc3RhbmNlKSB7XG5cdFx0XHRcdHNob3J0ZXN0X2Rpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRcdG5lYXJlc3Rfc3RhdGlvbiA9IHN0YXRpb247XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gbmVhcmVzdF9zdGF0aW9uO1xufTtcbiIsIi8vIFByw7N4aW1hcyBwYXJ0aWRhc1xuY29uc3QgbmV4dERlcGFydHVyZXMgPSAoc3RhdGlvbikgPT4ge1xuXHRsZXQgZGVwYXJ0dXJlcztcblxuXHRsZXQgbGluZV9lbW9qaSA9IHtcblx0XHQxOiBcIjHvuI/ig6NcIixcblx0XHQyOiBcIjLvuI/ig6NcIixcblx0XHQzOiBcIjPvuI/ig6NcIlxuXHR9O1xuXG5cdC8vIERlc2xpZ2EgaW50ZXJ2YWxvcyBlIGV2ZW50b3MgZXhpc3RlbnRlc1xuXHRjbGVhckludGVydmFsKGN1ZVtcImludGVydmFsLWRlcGFydHVyZXNcIl0pO1xuXHRjbGVhckludGVydmFsKGN1ZVtcImludGVydmFsLWxhc3QtdXBkYXRlZFwiXSk7XG5cblx0JCh3aW5kb3cpLm9mZihcInZpc2liaWxpdHljaGFuZ2Ugb25saW5lXCIpO1xuXHQvLyAkKHdpbmRvdykub2ZmKFwib25saW5lXCIpO1xuXG5cdC8vIENvbG9jYSBvIG5vbWUgZGEgZXN0YcOnw6NvIG5vIGFwcGJhclxuXHQkKFwiLnN0YXRpb25zIGgxIC5zdGF0aW9uLW5hbWVcIikudGV4dChzdGF0aW9uW1wibmFtZVwiXSk7XG5cblx0Ly8gSW5zaXJlIGFuaW1hw6fDo28gZGUgbG9hZFxuXHRsZXQgJGxvYWRpbmcgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImxvYWRpbmdcIik7XG5cdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiYW5pbWF0aW9uXCIpLmFwcGVuZFRvKCRsb2FkaW5nKTtcblx0JHBhbmVsLmVtcHR5KCkuYXBwZW5kKCRsb2FkaW5nKTtcblxuXHQvLyBBdHVhbGl6YcOnw6NvXG5cdGNvbnN0IGxhc3RVcGRhdGVkID0gKCkgPT4ge1xuXHRcdGxldCAkYmFkZ2UgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInN0YXR1cy1iYWRnZVwiKTtcblx0XHRsZXQgY29ubmVjdGVkID0gbmF2aWdhdG9yLm9uTGluZTtcblxuXHRcdC8vIFRlbXBvIGVtIHNlZ3VuZG9zIGRlc2RlIGEgw7psdGltYSBhdHVhbGl6YcOnw6NvXG5cdFx0bGV0IHNlY29uZHNfc2luY2VfdXBkYXRlID0gbW9tZW50KCkuZGlmZihkZXBhcnR1cmVzW1wibGFzdFVwZGF0ZWRcIl0sIFwic2Vjb25kc1wiKTtcblxuXHRcdC8vIFNlIHRpdmVyIHNpZG8gYXR1YWxpemFkbyBow6EgbWVub3MgZGUgNjAgc2VndW5kb3MsIG1vc3RyYSBUZW1wbyBSZWFsXG5cdFx0aWYgKHNlY29uZHNfc2luY2VfdXBkYXRlIDw9IDYwKSB7XG5cdFx0XHQkYmFkZ2UuYWRkQ2xhc3MoXCItc3RhdGUtLXJlYWwtdGltZVwiKS50ZXh0KFwiVGVtcG8gcmVhbFwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGxhc3RfdXBkYXRlZCA9IFwiQXR1YWxpemFkbyBcIiArIG1vbWVudChkZXBhcnR1cmVzW1wibGFzdFVwZGF0ZWRcIl0pLmZyb21Ob3codHJ1ZSkgKyBcIiBhdHLDoXNcIjtcblx0XHRcdCRiYWRnZS50ZXh0KGxhc3RfdXBkYXRlZCk7XG5cdFx0fVxuXG5cdFx0JHN0YXR1cy5lbXB0eSgpLmFwcGVuZCgkYmFkZ2UpO1xuXHR9O1xuXG5cdGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG5cdFx0Ly8gU8OzIGNhcnJlZ2Egc2UgZXN0aXZlciBjb20gZm9jb1xuXHRcdGlmIChkb2N1bWVudC5oaWRkZW4gPT09IHRydWUgfHwgbmF2aWdhdG9yLm9uTGluZSA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBDYXJyZWdhIG9zIGRhZG9zXG5cdFx0JC5nZXRKU09OKFwiaHR0cHM6Ly9lbWl0cmVtbXVzLmNvbS8tL3ZsdC9kZXBhcnR1cmVzP2NhbGxiYWNrPT9cIiwge1xuXHRcdFx0XCJzdGF0aW9uXCI6IHN0YXRpb25bXCJpZFwiXSxcblx0XHRcdC8vIFwiZW52XCI6IFwiZGV2XCJcblx0XHR9KS5kb25lKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0ZGVwYXJ0dXJlcyA9IHJlc3BvbnNlO1xuXG5cdFx0XHRsZXQgJHN0YXRpb24gPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInN0YXRpb25cIik7XG5cdFx0XHRsZXQgZGlyZWN0aW9ucyA9IFsgXTtcblx0XHRcdGxldCBkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbiA9IHsgfTtcblxuXHRcdFx0Ly8gT3JnYW5pemEgYXMgcGFydGlkYXMgcG9yIGRlc3Rpbm9cblx0XHRcdGRlcGFydHVyZXNbXCJsaW5lc1wiXS5mb3JFYWNoKChsaW5lKSA9PiB7XG5cdFx0XHRcdGxpbmVbXCJkaXJlY3Rpb25zXCJdLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuXHRcdFx0XHRcdGxldCBkaXJlY3Rpb25fdGl0bGUgPSBkaXJlY3Rpb25bXCJuYW1lXCJdO1xuXG5cdFx0XHRcdFx0aWYgKGRpcmVjdGlvbltcImV0YXNcIl0ubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0aWYgKCFkaXJlY3Rpb25zLmluY2x1ZGVzKGRpcmVjdGlvbl90aXRsZSkpIHtcblx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9ucy5wdXNoKGRpcmVjdGlvbl90aXRsZSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICghZGVwYXJ0dXJlc19ieV9kaXJlY3Rpb25bZGlyZWN0aW9uX3RpdGxlXSkge1xuXHRcdFx0XHRcdFx0XHRkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbltkaXJlY3Rpb25fdGl0bGVdID0gWyBdO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRkaXJlY3Rpb25bXCJldGFzXCJdLmZvckVhY2goKHRyYWluKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRyYWluW1wibGluZVwiXSA9IGxpbmVbXCJuYW1lXCJdO1xuXHRcdFx0XHRcdFx0XHRkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbltkaXJlY3Rpb25fdGl0bGVdLnB1c2godHJhaW4pO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBNb250YSBhcyBwYXJ0aWRhc1xuXHRcdFx0bGV0ICRkZXBhcnR1cmVzID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJkZXBhcnR1cmVzXCIpLmFwcGVuZFRvKCRzdGF0aW9uKTtcblx0XHRcdGxldCAkdGl0bGUgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImRlcGFydHVyZXMtdGl0bGVcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdFx0XHR9KS5hcHBlbmRUbygkZGVwYXJ0dXJlcyk7XG5cdFx0XHQkKFwiPHNwYW4gLz5cIikudGV4dChcIlByw7N4aW1vcyB0cmVuc1wiKS5hcHBlbmRUbygkdGl0bGUpO1xuXG5cdFx0XHRsZXQgc2hhcmVfdGV4dCA9IFtcIlByw7N4aW1vcyB0cmVuc1wiLCBcIvCfmokgKlwiICsgc3RhdGlvbltcIm5hbWVcIl0gKyBcIipcIiwgXCJcIl07XG5cblx0XHRcdC8vIGRpcmVjdGlvbnMuc29ydCgpO1xuXHRcdFx0ZGlyZWN0aW9ucy5mb3JFYWNoKChkaXJlY3Rpb24pID0+IHtcblx0XHRcdFx0bGV0ICRkaXJlY3Rpb24gPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImRpcmVjdGlvblwiKS5hcHBlbmRUbygkZGVwYXJ0dXJlcyk7XG5cdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGlyZWN0aW9uLWNhcHRpb25cIikudGV4dChcIkRlc3Rpbm9cIikuYXBwZW5kVG8oJGRpcmVjdGlvbik7XG5cblx0XHRcdFx0bGV0IGV0YXMgPSBkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbltkaXJlY3Rpb25dO1xuXHRcdFx0XHRldGFzLnNvcnQoKGEsIGIpID0+IHsgcmV0dXJuIGFbXCJzZWNvbmRzXCJdIC0gYltcInNlY29uZHNcIl0gfSk7XG5cblx0XHRcdFx0ZXRhcy5mb3JFYWNoKCh0cmFpbikgPT4ge1xuXHRcdFx0XHRcdGxldCAkdHJhaW4gPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInRyYWluXCIpLmFwcGVuZFRvKCRkaXJlY3Rpb24pO1xuXHRcdFx0XHRcdGxldCAkbGluZSA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW4tbGluZVwiKS5hcHBlbmRUbygkdHJhaW4pO1xuXHRcdFx0XHRcdGxldCBpc19hcHByb2FjaGluZyA9IHRyYWluW1wic2Vjb25kc1wiXSA8IDI1O1xuXG5cdFx0XHRcdFx0bGV0IGxpbmUgPSBsaW5lX2luZGV4W3RyYWluW1wibGluZVwiXV07XG5cdFx0XHRcdFx0bGV0IGRlcGFydHVyZV9jb3VudGRvd24gPSAoaXNfYXBwcm9hY2hpbmc/IFwiQWdvcmFcIiA6IE1hdGgucm91bmQodHJhaW5bXCJzZWNvbmRzXCJdIC8gNjApICsgXCI8c3Bhbj5taW48L3NwYW4+XCIpO1xuXHRcdFx0XHRcdGxldCBkZXBhcnR1cmVfdGltZSA9IG1vbWVudCh0cmFpbltcImFycml2YWxUaW1lXCJdKS5mb3JtYXQoXCJISDptbVwiKTtcblxuXHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwibGluZS1zaGllbGRcIikuY3NzKFwiY29sb3JcIiwgbGluZVtcImNvbG9yXCJdKS5hdHRyKFwidGl0bGVcIiwgXCJMaW5oYSBcIiArIGxpbmVbXCJpZFwiXSkuYXR0cihcImRpc2FibGVkXCIsIHRydWUpLnRleHQobGluZVtcImlkXCJdKS5hcHBlbmRUbygkbGluZSk7XG5cdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpbi1kaXJlY3Rpb25cIikuYXR0cihcInRpdGxlXCIsIFwiVHJlbSBcIiArIHRyYWluW1widHJhaW5cIl0pLnRleHQoZGlyZWN0aW9uKS5hcHBlbmRUbygkdHJhaW4pO1xuXHRcdFx0XHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW4tZXRhXCIpLmF0dHIoXCJ0aXRsZVwiLCBkZXBhcnR1cmVfdGltZSkuaHRtbChkZXBhcnR1cmVfY291bnRkb3duKS5hcHBlbmRUbygkdHJhaW4pO1xuXG5cdFx0XHRcdFx0aWYgKGlzX2FwcHJvYWNoaW5nKSB7XG5cdFx0XHRcdFx0XHQkdHJhaW4uYWRkQ2xhc3MoXCItc3RhdGUtLWFwcHJvYWNoaW5nXCIpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFRleHRvIHBhcmEgY29tcGFydGlsaGFtZW50b1xuXHRcdFx0XHRcdHNoYXJlX3RleHQucHVzaChsaW5lX2Vtb2ppW2xpbmVbXCJpZFwiXV0gKyBcIiBcIiArIGRpcmVjdGlvbiArIFwiIFwiICsgZGVwYXJ0dXJlX3RpbWUpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBDb21wYXJ0aWxoYXJcblx0XHRcdFx0Ly8gaWYgKG5hdmlnYXRvci5zaGFyZSkge1xuXHRcdFx0XHQvLyBcdGxldCBsb25ncHJlc3M7XG5cdFx0XHRcdC8vIFx0bGV0IGxvbmdwcmVzc19kZWxheSA9IDEzMDA7XG5cblx0XHRcdFx0Ly8gXHQkZGlyZWN0aW9uLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0XHQvLyBcdFx0bG9uZ3ByZXNzID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdC8vIFx0XHRcdG5hdmlnYXRvci5zaGFyZSh7XG5cdFx0XHRcdC8vIFx0XHRcdFx0dGV4dDogc2hhcmVfdGV4dC5qb2luKFwiXFxuXCIpXG5cdFx0XHRcdC8vIFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBcdFx0fSwgbG9uZ3ByZXNzX2RlbGF5KTtcblx0XHRcdFx0Ly8gXHR9KS5vbihcIm1vdXNldXAgbW91c2VvdXRcIiwgKCkgPT4ge1xuXHRcdFx0XHQvLyBcdFx0Ly8gY2xlYXJJbnRlcnZhbChsb25ncHJlc3MpO1xuXHRcdFx0XHQvLyBcdH0pO1xuXHRcdFx0XHQvLyB9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gRXN0YWRvIGRhIGNvbmV4w6NvIGUgaG9yYSBkYSDDumx0aW1hIGF0dWFsaXphw6fDo29cblx0XHRcdCRzdGF0dXMgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInN0YXR1c1wiKS5hcHBlbmRUbygkdGl0bGUpO1xuXHRcdFx0Ly8gJGNvbm5lY3Rpb25fc3RhdHVzID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJjb25uZWN0aW9uLXN0YXR1c1wiKS5hcHBlbmRUbygkc3RhdHVzKTtcblx0XHRcdC8vICRsYXN0X3VwZGF0ZWQgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImxhc3QtdXBkYXRlZFwiKS5hcHBlbmRUbygkc3RhdHVzKTtcblx0XHRcdGxhc3RVcGRhdGVkKCk7XG5cblx0XHRcdC8vIExpbXBhIG8gcGFpbmVsIGUgaW5zZXJlIG9zIG5vdm9zIGRhZG9zXG5cdFx0XHQkcGFuZWwuZW1wdHkoKS5hcHBlbmQoJHN0YXRpb24pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHVwZGF0ZVdpbmRvdyA9ICgpID0+IHtcblx0XHRpZiAoZG9jdW1lbnQuaGlkZGVuID09PSBmYWxzZSAmJiBuYXZpZ2F0b3Iub25MaW5lID09PSB0cnVlKSB7XG5cdFx0XHRsYXN0VXBkYXRlZCgpO1xuXHRcdFx0Z2V0RGF0YSgpO1xuXHRcdH1cblx0fTtcblxuXHRnZXREYXRhKCk7XG5cblx0Ly8gQ3JpYSBub3ZvcyBpbnRlcnZhbG9zIGUgZXZlbnRvc1xuXHRpZiAoZW52ID09PSBcInByb2R1Y3Rpb25cIikge1xuXHRcdGN1ZVtcImludGVydmFsLWRlcGFydHVyZXNcIl0gPSBzZXRJbnRlcnZhbChnZXREYXRhLCAxNTAwMCk7IC8vIFRFTVBcblx0XHRjdWVbXCJpbnRlcnZhbC1sYXN0LXVwZGF0ZWRcIl0gPSBzZXRJbnRlcnZhbChsYXN0VXBkYXRlZCwgNTAwMCk7XG5cdH1cblxuXHQkKHdpbmRvdykub24oXCJvbmxpbmUgdmlzaWJpbGl0eWNoYW5nZVwiLCB1cGRhdGVXaW5kb3cpO1xufTtcbiIsIiQoZnVuY3Rpb24oKSB7XG5cdC8vIE1vbnRhIGxpc3RhIGRlIHBhcmFkYXMgZSBlc3Rhw6fDtWVzXG5cdGxldCAkc3RhdGlvbnMgPSAkKFwiLnN0YXRpb25zIHVsXCIpO1xuXG5cdGxldCAkbmVhcmVzdCA9ICQoXCI8YSAvPlwiKS5hdHRyKFwiaHJlZlwiLCBcIiNcIikub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdCQoXCIuc3RhdGlvbnMgaDEgLnN0YXRpb24tbmFtZVwiKS50ZXh0KFwiXCIpO1xuXHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdFx0Z2V0TG9jYXRpb24oKTtcblx0fSkuYXBwZW5kVG8oJHN0YXRpb25zKTtcblx0JChcIjxpIC8+XCIpLmFkZENsYXNzKFwibWF0ZXJpYWwtaWNvbnNcIikudGV4dChcIm5lYXJfbWVcIikuYXBwZW5kVG8oJG5lYXJlc3QpO1xuXHQkKFwiPHNwYW4gLz5cIikudGV4dChcIkxvY2FsaXphciBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYVwiKS5hcHBlbmRUbygkbmVhcmVzdCk7XG5cblx0JChcIjxsaSAvPlwiKS5hZGRDbGFzcyhcIm5lYXJlc3Qtc3RhdGlvblwiKS5hcHBlbmQoJG5lYXJlc3QpLmFwcGVuZFRvKCRzdGF0aW9ucyk7XG5cblx0c3RhdGlvbnMuZm9yRWFjaCgoc3RhdGlvbikgPT4ge1xuXHRcdGxldCAkc3RhdGlvbiA9ICQoXCI8YSAvPlwiKS5hdHRyKFwiaHJlZlwiLCBcIiNcIiArIHN0YXRpb25bXCJpZFwiXSk7XG5cblx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInN0YXRpb24tbmFtZVwiKS50ZXh0KHN0YXRpb25bXCJuYW1lXCJdKS5hcHBlbmRUbygkc3RhdGlvbik7XG5cblx0XHRsZXQgJGxpbmVzID0gJChcIjx1bCAvPlwiKS5hZGRDbGFzcyhcInN0YXRpb24tbGluZXNcIikuYXBwZW5kVG8oJHN0YXRpb24pO1xuXHRcdGxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcblx0XHRcdGxldCAkbGluZSA9ICQoXCI8bGkgLz5cIikuYXBwZW5kVG8oJGxpbmVzKTtcblx0XHRcdGlmIChzdGF0aW9uW1wibGluZXNcIl0uaW5jbHVkZXMobGluZVtcImlkXCJdKSkge1xuXHRcdFx0XHRsZXQgJHNoaWVsZCA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwibGluZS1zaGllbGRcIikuY3NzKFwiY29sb3JcIiwgbGluZVtcImNvbG9yXCJdKS50ZXh0KGxpbmVbXCJpZFwiXSkuYXBwZW5kVG8oJGxpbmUpO1xuXG5cdFx0XHRcdGlmIChsaW5lW1wiZGlzYWJsZWRcIl0pIHtcblx0XHRcdFx0XHQkc2hpZWxkLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKS5hZGRDbGFzcyhcIi1zdGF0ZS0tZGlzYWJsZWRcIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGlmICghc3RhdGlvbltcImRpc2FibGVkXCJdKSB7XG5cdFx0XHQkc3RhdGlvbi5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRuZXh0RGVwYXJ0dXJlcyhzdGF0aW9uKTtcblx0XHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkc3RhdGlvbi5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHQvLyAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHRcdFx0fSk7XG5cdFx0XHQkc3RhdGlvbi5hZGRDbGFzcyhcIi1zdGF0ZS0tZGlzYWJsZWRcIik7XG5cdFx0fVxuXG5cdFx0JChcIjxsaSAvPlwiKS5hcHBlbmQoJHN0YXRpb24pLmFwcGVuZFRvKCRzdGF0aW9ucyk7XG5cdH0pO1xuXG5cdC8vIE5hdmVnYcOnw6NvXG5cdCQoXCIuYXBwYmFyXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdCQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdH0pO1xuXG5cdCQod2luZG93KS5vbihcInNjcm9sbFwiLCAoZXZlbnQpID0+IHtcblx0XHRsZXQgc2Nyb2xsX3RvcF9wb3NpdGlvbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuXHRcdGlmIChzY3JvbGxfdG9wX3Bvc2l0aW9uID49IDEyKSB7XG5cdFx0XHQkKFwiYm9keVwiKS5hZGRDbGFzcyhcIi1tb2RlLS1zY3JvbGxcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLXNjcm9sbFwiKTtcblx0XHR9XG5cdH0pO1xufSk7XG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIHRoZW1lIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxubGV0IFRoZW1lID0gKCgpID0+IHtcclxuICAgIGxldCB0aGVtZV9vcmRlciA9IFtcclxuICAgICAgICBcImF1dG9cIixcclxuICAgICAgICBcImxpZ2h0XCIsXHJcbiAgICAgICAgXCJkYXJrXCJcclxuICAgIF07XHJcblxyXG4gICAgbGV0IHRoZW1lX3NldHRpbmdzID0ge1xyXG4gICAgICAgIFwiYXV0b1wiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUZW1hIGF1dG9tw6F0aWNvXCIsXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImJyaWdodG5lc3NfYXV0b1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImxpZ2h0XCI6IHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRlbWEgY2xhcm9cIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiYnJpZ2h0bmVzc181XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGFya1wiOiB7XHJcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJUZW1hIGVzY3Vyb1wiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJicmlnaHRuZXNzXzRcIlxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBzZXQgPSAobmV3X3RoZW1lLCBvbGRfdGhlbWUpID0+IHtcclxuICAgICAgICBjdXJyZW50X3RoZW1lID0gbmV3X3RoZW1lO1xyXG5cclxuICAgICAgICAkKFwiLnNldHRpbmdzIC50aGVtZSBzcGFuXCIpLnRleHQodGhlbWVfc2V0dGluZ3NbbmV3X3RoZW1lXVtcInRpdGxlXCJdKTtcclxuICAgICAgICAkKFwiLnNldHRpbmdzIC50aGVtZSBpXCIpLnRleHQodGhlbWVfc2V0dGluZ3NbbmV3X3RoZW1lXVtcImljb25cIl0pO1xyXG5cclxuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi10aGVtZS0tXCIgKyBvbGRfdGhlbWUpLmFkZENsYXNzKFwiLXRoZW1lLS1cIiArIG5ld190aGVtZSk7XHJcblxyXG4gICAgICAgIC8vIFNhbHZhIGNvbmZpZ3VyYcOnw6NvIG5vIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIGlmIChuZXdfdGhlbWUgPT09IFwiYXV0b1wiKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidGhlbWVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBuZXdfdGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gQ29uZmVyZSBzZSBqw6EgaMOhIHRlbWEgc2Fsdm8gbm8gbG9jYWxTdG9yYWdlLlxyXG4gICAgLy8gU2UgbsOjbyBob3V2ZXIsIHBlZ2EgbyBwYWRyw6NvIGRvIHNpc3RlbWFcclxuICAgIGxldCBjdXJyZW50X3RoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSB8fCBnZXRDb21wdXRlZFN0eWxlKCQoXCIuc2V0dGluZ3MgLmN1cnJlbnQtdGhlbWVcIilbMF0pLmdldFByb3BlcnR5VmFsdWUoXCJjb250ZW50XCIpLnJlcGxhY2UoL1wiL2csIFwiXCIpO1xyXG5cclxuICAgIGlmIChjdXJyZW50X3RoZW1lKSB7XHJcbiAgICAgICAgc2V0KGN1cnJlbnRfdGhlbWUsIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIi5zZXR0aW5ncyAudGhlbWVcIikub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlc2NvYnJlIGEgcG9zacOnw6NvIGRvIHRlbWEgbmEgb3JkZW1cclxuICAgICAgICAgICAgbGV0IHRoZW1lX3Bvc2l0aW9uID0gdGhlbWVfb3JkZXIuaW5kZXhPZihjdXJyZW50X3RoZW1lKTtcclxuICAgICAgICAgICAgbGV0IG5ld190aGVtZSA9IHRoZW1lX29yZGVyW3RoZW1lX3Bvc2l0aW9uICsgMV0gfHwgdGhlbWVfb3JkZXJbMF07XHJcblxyXG4gICAgICAgICAgICAvLyBTZXRhIG8gbm92byB0ZW1hXHJcbiAgICAgICAgICAgIHNldChuZXdfdGhlbWUsIGN1cnJlbnRfdGhlbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufSkoKTtcclxuIiwibGV0IGN1ZSA9IFsgXTtcbmxldCAkcGFuZWw7XG5cbiQoZnVuY3Rpb24gKCkge1xuXHQkcGFuZWwgPSAkKFwiLnBhbmVsXCIpO1xuXG5cdC8vIENvbmZlcmUgc2UgdXN1w6FyaW8gasOhIGhhdmlhIGhhYmlsaXRhZG8gZ2VvbG9jYWxpemHDp8OjbyBhbnRlc1xuXHRpZiAoXCJnZW9sb2NhdGlvblwiIGluIG5hdmlnYXRvcikge1xuXHRcdGlmIChcInBlcm1pc3Npb25zXCIgaW4gbmF2aWdhdG9yKSB7XG5cdFx0XHRuYXZpZ2F0b3IucGVybWlzc2lvbnMucXVlcnkoeyBcIm5hbWVcIjogXCJnZW9sb2NhdGlvblwiIH0pLnRoZW4oKHBlcm1pc3Npb24pID0+IHtcblx0XHRcdFx0aWYgKHBlcm1pc3Npb25bXCJzdGF0ZVwiXSA9PT0gXCJncmFudGVkXCIpIHtcblx0XHRcdFx0XHQvLyBTZSBqw6EgdGl2ZXIsIHBlZ2EgYSBsb2NhbGl6YcOnw6NvIGF0dWFsIGUgcHJvY3VyYSBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYVxuXHRcdFx0XHRcdGdldExvY2F0aW9uKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gU2UgbsOjbyB0aXZlciwgbW9zdHJhIGJvdMOjbyBwYXJhIHNvbGljaXRhciBhdXRvcml6YcOnw6NvXG5cdFx0XHRcdFx0JChcImJvZHlcIikuYWRkQ2xhc3MoXCItbW9kZS0taW5pdGlhbFwiKTtcblxuXHRcdFx0XHRcdGxldCAkcGVybWlzc2lvbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwicGVybWlzc2lvblwiKS5hcHBlbmRUbygkcGFuZWwpO1xuXHRcdFx0XHRcdGxldCAkYnV0dG9uID0gJChcIjxhIC8+XCIpLmFkZENsYXNzKFwiYnV0dG9uXCIpLmF0dHIoXCJocmVmXCIsIFwiI1wiKS5hcHBlbmRUbygkcGVybWlzc2lvbik7XG5cdFx0XHRcdFx0JChcIjxpIC8+XCIpLmFkZENsYXNzKFwibWF0ZXJpYWwtaWNvbnNcIikudGV4dChcIm5lYXJfbWVcIikuYXBwZW5kVG8oJGJ1dHRvbik7XG5cdFx0XHRcdFx0JChcIjxzcGFuIC8+XCIpLnRleHQoXCJMb2NhbGl6YXIgZXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcIikuYXBwZW5kVG8oJGJ1dHRvbik7XG5cblx0XHRcdFx0XHQkYnV0dG9uLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0Z2V0TG9jYXRpb24odHJ1ZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRnZXRMb2NhdGlvbigpO1xuXHRcdH1cblx0fVxufSk7XG5cbi8vIFNlcnZpY2UgV29ya2VyXG5pZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XG5cdGlmIChlbnYgPT09IFwicHJvZHVjdGlvblwiKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcblx0XHRcdGN1ZVtcInNlcnZpY2Utd29ya2VyXCJdID0gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXCIvc2VydmljZS13b3JrZXIuanNcIik7XG5cblx0XHRcdGN1ZVtcInNlcnZpY2Utd29ya2VyXCJdLnRoZW4oKHJlZ2lzdHJhdGlvbikgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIVwiLCByZWdpc3RyYXRpb24pO1xuXHRcdFx0fSwgKGVycm9yKSA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwiU2VydmljZSBXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogXCIsIGVycm9yKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG5cbi8vIEVzdGFkbyBkYSBjb25leMOjb1xubGV0ICRzdGF0dXM7XG5sZXQgJGNvbm5lY3Rpb25fc3RhdHVzO1xuXG5jb25zdCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzID0gKCkgPT4ge1xuXHRyZXR1cm4gZmFsc2U7XG5cdGxldCBjb25uZWN0ZWQgPSBuYXZpZ2F0b3Iub25MaW5lO1xuXG5cdGlmIChjb25uZWN0ZWQgPT09IHRydWUpIHtcblx0XHQvLyAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcIi1zdGF0ZS0tc3VjY2Vzc1wiKS50ZXh0KFwiQ29uZXjDo28gcmVlc3RhYmVsZWNpZGEhXCIpLmFwcGVuZFRvKCRjb25uZWN0aW9uX3N0YXR1cyk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdCRjb25uZWN0aW9uX3N0YXR1cy5lbXB0eSgpO1xuXHRcdH0sIDQwMDApO1xuXHR9IGVsc2Uge1xuXHRcdCRjb25uZWN0aW9uX3N0YXR1cy5lbXB0eSgpO1xuXHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiLXN0YXRlLS1lcnJvclwiKS50ZXh0KFwiU2VtIGNvbmV4w6NvXCIpLmFwcGVuZFRvKCRjb25uZWN0aW9uX3N0YXR1cyk7XG5cdH1cbn07XG5cbiQod2luZG93KS5vbihcIm9ubGluZSBvZmZsaW5lXCIsIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMpO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzKTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCB1cGRhdGVDb25uZWN0aW9uU3RhdHVzKTtcbiJdfQ==
