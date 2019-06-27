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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpb24taW5mby5qcyIsImxpbmUtaW5mby5qcyIsImdldC1sb2NhdGlvbi5qcyIsIm5lYXJlc3Qtc3RhdGlvbi5qcyIsIm5leHQtZGVwYXJ0dXJlcy5qcyIsInN0YXRpb24tbGlzdC5qcyIsInRoZW1lLmpzIiwic3RhcnQuanMiXSwibmFtZXMiOlsic3RhdGlvbnMiLCJzdGF0aW9uX2luZGV4IiwiZm9yRWFjaCIsInN0YXRpb24iLCJzdGF0aW9uX25hbWUiLCJsaW5lcyIsImxpbmVfaW5kZXgiLCJsaW5lIiwibGluZV9uYW1lIiwiZ2V0TG9jYXRpb24iLCJpc19pbml0aWFsIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsIiQiLCJyZW1vdmVDbGFzcyIsIm5lYXJlc3Rfc3RhdGlvbiIsIm5lYXJlc3RTdGF0aW9uIiwibmV4dERlcGFydHVyZXMiLCJkZWcycmFkIiwiZGVnIiwiTWF0aCIsIlBJIiwidXNlcl9jb29yZGluYXRlcyIsInVzZXJfbGF0aXR1ZGUiLCJ1c2VyX2xvbmdpdHVkZSIsIlIiLCJzaG9ydGVzdF9kaXN0YW5jZSIsInN0YXRpb25fbGF0aXR1ZGUiLCJzdGF0aW9uX2xvbmdpdHVkZSIsIngiLCJjb3MiLCJ5IiwiZGlzdGFuY2UiLCJzcXJ0IiwiZGVwYXJ0dXJlcyIsImxpbmVfZW1vamkiLCJjbGVhckludGVydmFsIiwiY3VlIiwid2luZG93Iiwib2ZmIiwidGV4dCIsIiRsb2FkaW5nIiwiYWRkQ2xhc3MiLCJhcHBlbmRUbyIsIiRwYW5lbCIsImVtcHR5IiwiYXBwZW5kIiwibGFzdFVwZGF0ZWQiLCIkYmFkZ2UiLCJjb25uZWN0ZWQiLCJvbkxpbmUiLCJzZWNvbmRzX3NpbmNlX3VwZGF0ZSIsIm1vbWVudCIsImRpZmYiLCJsYXN0X3VwZGF0ZWQiLCJmcm9tTm93IiwiJHN0YXR1cyIsImdldERhdGEiLCJkb2N1bWVudCIsImhpZGRlbiIsImdldEpTT04iLCJkb25lIiwicmVzcG9uc2UiLCIkc3RhdGlvbiIsImRpcmVjdGlvbnMiLCJkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbiIsImRpcmVjdGlvbiIsImRpcmVjdGlvbl90aXRsZSIsImxlbmd0aCIsImluY2x1ZGVzIiwicHVzaCIsInRyYWluIiwiJGRlcGFydHVyZXMiLCIkdGl0bGUiLCJvbiIsInNoYXJlX3RleHQiLCIkZGlyZWN0aW9uIiwiZXRhcyIsInNvcnQiLCJhIiwiYiIsIiR0cmFpbiIsIiRsaW5lIiwiaXNfYXBwcm9hY2hpbmciLCJkZXBhcnR1cmVfY291bnRkb3duIiwicm91bmQiLCJkZXBhcnR1cmVfdGltZSIsImZvcm1hdCIsImNzcyIsImF0dHIiLCJodG1sIiwidXBkYXRlV2luZG93IiwiZW52Iiwic2V0SW50ZXJ2YWwiLCIkc3RhdGlvbnMiLCIkbmVhcmVzdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkbGluZXMiLCIkc2hpZWxkIiwidG9nZ2xlQ2xhc3MiLCJzY3JvbGxfdG9wX3Bvc2l0aW9uIiwic2Nyb2xsVG9wIiwiVGhlbWUiLCJ0aGVtZV9vcmRlciIsInRoZW1lX3NldHRpbmdzIiwic2V0IiwibmV3X3RoZW1lIiwib2xkX3RoZW1lIiwiY3VycmVudF90aGVtZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwiZ2V0SXRlbSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicmVwbGFjZSIsInRoZW1lX3Bvc2l0aW9uIiwiaW5kZXhPZiIsInBlcm1pc3Npb25zIiwicXVlcnkiLCJ0aGVuIiwicGVybWlzc2lvbiIsIiRwZXJtaXNzaW9uIiwiJGJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJyZWdpc3RyYXRpb24iLCJlcnJvciIsIiRjb25uZWN0aW9uX3N0YXR1cyIsInVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUFBLFFBQUEsR0FBQSxDQUNBO0FBQ0EsVUFBQSxnQkFEQTtBQUVBLFFBQUEsZ0JBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FEQSxFQVNBO0FBQ0E7QUFDQSxVQUFBLFVBRkE7QUFHQSxRQUFBLFVBSEE7QUFJQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FMQTtBQU1BO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFQQSxDQVRBLEVBa0JBO0FBQ0EsVUFBQSxZQURBO0FBRUEsUUFBQSxZQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbEJBLEVBMEJBO0FBQ0EsVUFBQSxTQURBO0FBRUEsUUFBQSxTQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBMUJBLEVBa0NBO0FBQ0EsVUFBQSxTQURBO0FBRUEsUUFBQSxTQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbENBLEVBMENBO0FBQ0EsVUFBQSxpQkFEQTtBQUVBLFFBQUEsaUJBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQTFDQSxFQWtEQTtBQUNBLFVBQUEsWUFEQTtBQUVBLFFBQUEsWUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FB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QUFDLFFBQUEsQ0FBQSxvQkFBQSxDQUFBO0FBRUExRixJQUFBQSxHQUFBLENBQUEsZ0JBQUEsQ0FBQSxDQUFBb0YsSUFBQSxDQUFBLFVBQUFPLFlBQUEsRUFBQSxDQUNBO0FBQ0EsS0FGQSxFQUVBLFVBQUFDLEtBQUEsRUFBQSxDQUNBO0FBQ0EsS0FKQTtBQUtBLEdBUkE7QUFTQSxDLENBRUE7OztBQUNBLElBQUF6RSxPQUFBO0FBQ0EsSUFBQTBFLGtCQUFBOztBQUVBLElBQUFDLHNCQUFBLEdBQUEsU0FBQUEsc0JBQUEsR0FBQTtBQUNBLFNBQUEsS0FBQTtBQUNBLE1BQUFsRixTQUFBLEdBQUF4QyxTQUFBLENBQUF5QyxNQUFBOztBQUVBLE1BQUFELFNBQUEsS0FBQSxJQUFBLEVBQUE7QUFDQTtBQUVBbUYsSUFBQUEsVUFBQSxDQUFBLFlBQUE7QUFDQUYsTUFBQUEsa0JBQUEsQ0FBQXJGLEtBQUE7QUFDQSxLQUZBLEVBRUEsSUFGQSxDQUFBO0FBR0EsR0FOQSxNQU1BO0FBQ0FxRixJQUFBQSxrQkFBQSxDQUFBckYsS0FBQTtBQUNBaEMsSUFBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBNkIsUUFBQSxDQUFBLGVBQUEsRUFBQUYsSUFBQSxDQUFBLGFBQUEsRUFBQUcsUUFBQSxDQUFBdUYsa0JBQUE7QUFDQTtBQUNBLENBZEE7O0FBZ0JBckgsQ0FBQSxDQUFBeUIsTUFBQSxDQUFBLENBQUFvQyxFQUFBLENBQUEsZ0JBQUEsRUFBQXlELHNCQUFBLEUsQ0FFQTtBQUNBIiwiZmlsZSI6InZsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBzdGF0aW9ucyA9IFtcblx0e1xuXHRcdFwibmFtZVwiOiBcIkFudG9uaW8gQ2FybG9zXCIsXG5cdFx0XCJpZFwiOiBcImFudG9uaW8tY2FybG9zXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDIsIDM6IDIgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTExMzE1MzQ0MzkxMzE5LCAtNDMuMTcyMDUwOTk3NTk4MjQxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHQvLyBcImRpc2FibGVkXCI6IHRydWUsXG5cdFx0XCJuYW1lXCI6IFwiQ2FtZXJpbm9cIixcblx0XHRcImlkXCI6IFwiY2FtZXJpbm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogOCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDE2OTgwNDYwMjIzODIsIC00My4xODM5ODM2MTQ5MzM0ODldLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNhbmRlbMOhcmlhXCIsXG5cdFx0XCJpZFwiOiBcImNhbmRlbGFyaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNiwgMzogNiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDE3MjUwMjkzODQyNTksIC00My4xNzg4MDg2NjU0MTg2NzFdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNhcmlvY2FcIixcblx0XHRcImlkXCI6IFwiY2FyaW9jYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA0LCAzOiA0IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNzQ4NDUwNzI1MjgxMSwgLTQzLjE3NjY0NTUxODAzODkxN10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ2VudHJhbFwiLFxuXHRcdFwiaWRcIjogXCJjZW50cmFsXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDUsIDM6IDEwIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMjcwNDk2MDc0NDk1MiwgLTQzLjE5MjYyNTMxNDM3NzMzOF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ2lkYWRlIGRvIFNhbWJhXCIsXG5cdFx0XCJpZFwiOiBcImNpZGFkZS1kby1zYW1iYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTQxNzk5NTcxMjgwNjcsIC00My4xOTY4ODQwODIwNzg0NzZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNpbmVsw6JuZGlhXCIsXG5cdFx0XCJpZFwiOiBcImNpbmVsYW5kaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMywgMzogMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MTA3MzQwMDE4NDIyNDMsIC00My4xNzU0MjUzODczNjQ5MzJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNvbG9tYm9cIixcblx0XHRcImlkXCI6IFwiY29sb21ib1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNTE3NTIxOTAwOTQxNSwgLTQzLjE3ODAxNjk2ODIyODgxOF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ29yZGVpcm8gZGEgR3Jhw6dhXCIsXG5cdFx0XCJpZFwiOiBcImNvcmRlaXJvLWRhLWdyYWNhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEzLCAyOiA4IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NzEwNDYyOTkyMzExNywgLTQzLjIwNDE3ODQwMzUzMzcwM10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIkNyaXN0aWFubyBPdHRvbmlcIixcblx0XHRcImlkXCI6IFwiY3Jpc3RpYW5vLW90dG9uaVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAzOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMzA2MTI3ODQ4MDY0OCwgLTQzLjE5MDc0OTEwOTQyMTQ4OV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiRXF1YWRvclwiLFxuXHRcdFwiaWRcIjogXCJlcXVhZG9yXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE4LCAyOiAxMSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTc4OTQ1NjQ2ODc3ODIsIC00My4yMDQ4MDUwMTQ0NDA4MTVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkdhbWJvYVwiLFxuXHRcdFwiaWRcIjogXCJnYW1ib2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTYsIDI6IDYgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3OTU5NDA4MzcyODQ1LCAtNDMuMTk5MzM2NjgzMjQ2MzAxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJIYXJtb25pYVwiLFxuXHRcdFwiaWRcIjogXCJoYXJtb25pYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTU3NTQ0MzcyNzMzODYsIC00My4xOTE0Mjc2Mzk1ODQ0OTZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlBhcmFkYSBkb3MgTXVzZXVzXCIsXG5cdFx0XCJpZFwiOiBcInBhcmFkYS1kb3MtbXVzZXVzXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDggfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1OTQ2NTg2ODAyMjY0LCAtNDMuMTgxOTU1OTgwNTgxMjcyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQYXJhZGEgZG9zIE5hdmlvc1wiLFxuXHRcdFwiaWRcIjogXCJwYXJhZGEtZG9zLW5hdmlvc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NDEzOTYyNTMwMzg3NSwgLTQzLjE4NzE4MTgzMDYxNzQ0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQZXJlaXJhIFJlaXNcIixcblx0XHRcImlkXCI6IFwicGVyZWlyYS1yZWlzXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE3LCAyOiAxMCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTY2NDcwNjQ5NjA0MywgLTQzLjIwMTc3MzExMTUyMzU5M10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJhw6dhIFhWXCIsXG5cdFx0XCJpZFwiOiBcInByYWNhLXh2XCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAyMDcwMTI4OTQ1ODQ4LCAtNDMuMTczMTE3Mzk1NzgzODc2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQcmFpYSBGb3Jtb3NhXCIsXG5cdFx0XCJpZFwiOiBcInByYWlhLWZvcm1vc2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTAsIDI6IDEzIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMzE3NzE1MjM4ODA1NywgLTQzLjIwODE2MTk2NDkwMjMwM10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJvdmlkw6puY2lhXCIsXG5cdFx0XCJpZFwiOiBcInByb3ZpZGVuY2lhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE1IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NzQ4OTkyMjAxNDM4MywgLTQzLjE5NjcwMTQwMDg5MDAzNV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUm9kb3Zpw6FyaWFcIixcblx0XHRcImlkXCI6IFwicm9kb3ZpYXJpYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxOSwgMjogMTIgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk4ODA1NTc0MjUxNzk5LCAtNDMuMjA3MzQyOTQxNDc1OTg2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTYWFyYVwiLFxuXHRcdFwiaWRcIjogXCJzYWFyYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA0IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNTkxMjEwODQ2MDI1MywgLTQzLjE4NzMyMDc4MjIyODIwNV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIlNhbnRhIFJpdGFcIixcblx0XHRcImlkXCI6IFwic2FudGEtcml0YVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAzOiA3IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMDU5NDE2NzQxMDY0OSwgLTQzLjE4MTUwOTA0OTg1NDIwNl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFszXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FudG8gQ3Jpc3RvXCIsXG5cdFx0XCJpZFwiOiBcInNhbnRvLWNyaXN0b1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMiwgMjogNyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTUzMjcyODIwMDIxNDYsIC00My4yMDAyNTkxODE3NTU3NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FudG9zIER1bW9udFwiLFxuXHRcdFwiaWRcIjogXCJzYW50b3MtZHVtb250XCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEsIDM6IDEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTEyMjg2ODc0OTYyNDAxLCAtNDMuMTY3NjMyMjU5NTQ1ODRdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlPDo28gQmVudG9cIixcblx0XHRcImlkXCI6IFwic2FvLWJlbnRvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDcgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk4NjQ4MDk2MDUxMDEyLCAtNDMuMTc5OTY0MzExNzY0ODg0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTZXRlIGRlIFNldGVtYnJvXCIsXG5cdFx0XCJpZFwiOiBcInNldGUtZGUtc2V0ZW1icm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNSwgMzogNSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDUzMDU5MDA5Nzc4OTcsIC00My4xNzc0NjM4MTYzNDY5MjJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlRpcmFkZW50ZXNcIixcblx0XHRcImlkXCI6IFwidGlyYWRlbnRlc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAzIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNjU3ODIyMjAyNjExNiwgLTQzLjE4Mjg1NDIzNjU1NzgwMl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiVXRvcGlhIEFxdWFSaW9cIixcblx0XHRcImlkXCI6IFwidXRvcGlhLWFxdWFyaW9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTAgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODkzMDk1NDcxOTk5NjEyLCAtNDMuMTkwMjM2OTA3MjEzMjE5XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJWaWxhIE9sw61tcGljYVwiLFxuXHRcdFwiaWRcIjogXCJ2aWxhLW9saW1waWNhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDkgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk5MDU2NTcyNjQ2NTMzLCAtNDMuMTk5NjQzNTI5NDk1Mjk3XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzJdXG5cdH1cbl07XG5cbmxldCBzdGF0aW9uX2luZGV4ID0ge307XG5zdGF0aW9ucy5mb3JFYWNoKChzdGF0aW9uKSA9PiB7XG5cdGxldCBzdGF0aW9uX25hbWUgPSBzdGF0aW9uW1wibmFtZVwiXTtcblx0c3RhdGlvbl9pbmRleFtzdGF0aW9uX25hbWVdID0gc3RhdGlvbjtcbn0pO1xuIiwibGV0IGxpbmVzID0gW1xuXHR7XG5cdFx0XCJpZFwiOiAxLFxuXHRcdFwibmFtZVwiOiBcIkxpbmhhIDFcIixcblx0XHRcImNvbG9yXCI6IFwiIzY4YjlmYlwiLFxuXHRcdC8vIFwiZGlyZWN0aW9uc1wiOiBbXG5cdFx0Ly8gXHRcIlNhbnRvcyBEdW1vbnRcIixcblx0XHQvLyBcdFwiUHJhaWEgRm9ybW9zYVwiXG5cdFx0Ly8gXVxuXHR9LFxuXHR7XG5cdFx0XCJpZFwiOiAyLFxuXHRcdFwibmFtZVwiOiBcIkxpbmhhIDJcIixcblx0XHRcImNvbG9yXCI6IFwiIzczY2EzZlwiLFxuXHRcdC8vIFwiZGlyZWN0aW9uc1wiOiBbXG5cdFx0Ly8gXHRcIlByYcOnYSBYVlwiLFxuXHRcdC8vIFx0XCJQcmFpYSBGb3Jtb3NhXCJcblx0XHQvLyBdXG5cdH0sXG5cdHtcblx0XHQvLyBcImRpc2FibGVkXCI6IHRydWUsXG5cdFx0XCJpZFwiOiAzLFxuXHRcdFwibmFtZVwiOiBcIkxpbmhhIDNcIixcblx0XHRcImNvbG9yXCI6IFwiI2YzYTIzMFwiLFxuXHRcdC8vIFwiZGlyZWN0aW9uc1wiOiBbXG5cdFx0Ly8gXHRcIlNhbnRvcyBEdW1vbnRcIixcblx0XHQvLyBcdFwiQ2VudHJhbFwiXG5cdFx0Ly8gXVxuXHR9XG5dO1xuXG5sZXQgbGluZV9pbmRleCA9IHsgfTtcbmxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcblx0bGV0IGxpbmVfbmFtZSA9IGxpbmVbXCJuYW1lXCJdO1xuXHRsaW5lX2luZGV4W2xpbmVfbmFtZV0gPSBsaW5lO1xufSk7XG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBnZXQgbG9jYXRpb24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIFBlZ2EgYSBsb2NhbGl6YcOnw6NvIGRvIHVzdcOhcmlvXG5jb25zdCBnZXRMb2NhdGlvbiA9IChpc19pbml0aWFsID0gZmFsc2UpID0+IHtcblx0bmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcblx0XHQvLyBTZSB2aWVyIGRvIG1vZG8gaW5pY2lhbCwgZW5jZXJyYSBlbGVcblx0XHRpZiAoaXNfaW5pdGlhbCkge1xuXHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0taW5pdGlhbFwiKTtcblx0XHR9XG5cblx0XHQvLyBEZXNjb2JyZSBhIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hIGUgcHJvY3VyYSBhcyBwcsOzeGltYXMgcGFydGlkYXNcblx0XHRsZXQgbmVhcmVzdF9zdGF0aW9uID0gbmVhcmVzdFN0YXRpb24oW3Bvc2l0aW9uW1wiY29vcmRzXCJdW1wibGF0aXR1ZGVcIl0sIHBvc2l0aW9uW1wiY29vcmRzXCJdW1wibG9uZ2l0dWRlXCJdXSk7XG5cdFx0bmV4dERlcGFydHVyZXMobmVhcmVzdF9zdGF0aW9uKTtcblx0fSk7XG59O1xuIiwiLy8gRXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcbmNvbnN0IGRlZzJyYWQgPSAoZGVnKSA9PiB7XG5cdHJldHVybiBkZWcgKiAoTWF0aC5QSSAvIDE4MCk7XG59O1xuXG5jb25zdCBuZWFyZXN0U3RhdGlvbiA9ICh1c2VyX2Nvb3JkaW5hdGVzKSA9PiB7XG5cdGxldCB1c2VyX2xhdGl0dWRlID0gZGVnMnJhZCh1c2VyX2Nvb3JkaW5hdGVzWzBdKTtcblx0bGV0IHVzZXJfbG9uZ2l0dWRlID0gZGVnMnJhZCh1c2VyX2Nvb3JkaW5hdGVzWzFdKTtcblxuXHRsZXQgUiA9IDYzNzE7XG5cblx0bGV0IHNob3J0ZXN0X2Rpc3RhbmNlID0gbnVsbDtcblx0bGV0IG5lYXJlc3Rfc3RhdGlvbiA9IG51bGw7XG5cblx0c3RhdGlvbnMuZm9yRWFjaCgoc3RhdGlvbikgPT4ge1xuXHRcdGlmICghc3RhdGlvbltcImRpc2FibGVkXCJdKSB7XG5cdFx0XHRsZXQgc3RhdGlvbl9sYXRpdHVkZSA9IGRlZzJyYWQoc3RhdGlvbltcImNvb3JkaW5hdGVzXCJdWzBdKTtcblx0XHRcdGxldCBzdGF0aW9uX2xvbmdpdHVkZSA9IGRlZzJyYWQoc3RhdGlvbltcImNvb3JkaW5hdGVzXCJdWzFdKTtcblxuXHRcdFx0bGV0IHggPSAoc3RhdGlvbl9sb25naXR1ZGUgLSB1c2VyX2xvbmdpdHVkZSkgKiBNYXRoLmNvcygodXNlcl9sYXRpdHVkZSArIHN0YXRpb25fbGF0aXR1ZGUpIC8gMik7XG5cdFx0XHRsZXQgeSA9IChzdGF0aW9uX2xhdGl0dWRlIC0gdXNlcl9sYXRpdHVkZSk7XG5cdFx0XHRsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSkgKiBSO1xuXG5cdFx0XHRpZiAoIXNob3J0ZXN0X2Rpc3RhbmNlIHx8IGRpc3RhbmNlIDwgc2hvcnRlc3RfZGlzdGFuY2UpIHtcblx0XHRcdFx0c2hvcnRlc3RfZGlzdGFuY2UgPSBkaXN0YW5jZTtcblx0XHRcdFx0bmVhcmVzdF9zdGF0aW9uID0gc3RhdGlvbjtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBuZWFyZXN0X3N0YXRpb247XG59O1xuIiwiLy8gUHLDs3hpbWFzIHBhcnRpZGFzXG5jb25zdCBuZXh0RGVwYXJ0dXJlcyA9IChzdGF0aW9uKSA9PiB7XG5cdGxldCBkZXBhcnR1cmVzO1xuXG5cdGxldCBsaW5lX2Vtb2ppID0ge1xuXHRcdDE6IFwiMe+4j+KDo1wiLFxuXHRcdDI6IFwiMu+4j+KDo1wiLFxuXHRcdDM6IFwiM++4j+KDo1wiXG5cdH07XG5cblx0Ly8gRGVzbGlnYSBpbnRlcnZhbG9zIGUgZXZlbnRvcyBleGlzdGVudGVzXG5cdGNsZWFySW50ZXJ2YWwoY3VlW1wiaW50ZXJ2YWwtZGVwYXJ0dXJlc1wiXSk7XG5cdGNsZWFySW50ZXJ2YWwoY3VlW1wiaW50ZXJ2YWwtbGFzdC11cGRhdGVkXCJdKTtcblxuXHQkKHdpbmRvdykub2ZmKFwidmlzaWJpbGl0eWNoYW5nZSBvbmxpbmVcIik7XG5cdC8vICQod2luZG93KS5vZmYoXCJvbmxpbmVcIik7XG5cblx0Ly8gQ29sb2NhIG8gbm9tZSBkYSBlc3Rhw6fDo28gbm8gYXBwYmFyXG5cdCQoXCIuc3RhdGlvbnMgaDEgLnN0YXRpb24tbmFtZVwiKS50ZXh0KHN0YXRpb25bXCJuYW1lXCJdKTtcblxuXHQvLyBJbnNpcmUgYW5pbWHDp8OjbyBkZSBsb2FkXG5cdGxldCAkbG9hZGluZyA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwibG9hZGluZ1wiKTtcblx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJhbmltYXRpb25cIikuYXBwZW5kVG8oJGxvYWRpbmcpO1xuXHQkcGFuZWwuZW1wdHkoKS5hcHBlbmQoJGxvYWRpbmcpO1xuXG5cdC8vIEF0dWFsaXphw6fDo29cblx0Y29uc3QgbGFzdFVwZGF0ZWQgPSAoKSA9PiB7XG5cdFx0bGV0ICRiYWRnZSA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdHVzLWJhZGdlXCIpO1xuXHRcdGxldCBjb25uZWN0ZWQgPSBuYXZpZ2F0b3Iub25MaW5lO1xuXG5cdFx0Ly8gVGVtcG8gZW0gc2VndW5kb3MgZGVzZGUgYSDDumx0aW1hIGF0dWFsaXphw6fDo29cblx0XHRsZXQgc2Vjb25kc19zaW5jZV91cGRhdGUgPSBtb21lbnQoKS5kaWZmKGRlcGFydHVyZXNbXCJsYXN0VXBkYXRlZFwiXSwgXCJzZWNvbmRzXCIpO1xuXG5cdFx0Ly8gU2UgdGl2ZXIgc2lkbyBhdHVhbGl6YWRvIGjDoSBtZW5vcyBkZSA2MCBzZWd1bmRvcywgbW9zdHJhIFRlbXBvIFJlYWxcblx0XHRpZiAoc2Vjb25kc19zaW5jZV91cGRhdGUgPD0gNjApIHtcblx0XHRcdCRiYWRnZS5hZGRDbGFzcyhcIi1zdGF0ZS0tcmVhbC10aW1lXCIpLnRleHQoXCJUZW1wbyByZWFsXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgbGFzdF91cGRhdGVkID0gXCJBdHVhbGl6YWRvIFwiICsgbW9tZW50KGRlcGFydHVyZXNbXCJsYXN0VXBkYXRlZFwiXSkuZnJvbU5vdyh0cnVlKSArIFwiIGF0csOhc1wiO1xuXHRcdFx0JGJhZGdlLnRleHQobGFzdF91cGRhdGVkKTtcblx0XHR9XG5cblx0XHQkc3RhdHVzLmVtcHR5KCkuYXBwZW5kKCRiYWRnZSk7XG5cdH07XG5cblx0Y29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcblx0XHQvLyBTw7MgY2FycmVnYSBzZSBlc3RpdmVyIGNvbSBmb2NvXG5cdFx0aWYgKGRvY3VtZW50LmhpZGRlbiA9PT0gdHJ1ZSB8fCBuYXZpZ2F0b3Iub25MaW5lID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIENhcnJlZ2Egb3MgZGFkb3Ncblx0XHQkLmdldEpTT04oXCJodHRwczovL2VtaXRyZW1tdXMuY29tLy0vdmx0L2RlcGFydHVyZXM/Y2FsbGJhY2s9P1wiLCB7XG5cdFx0XHRcInN0YXRpb25cIjogc3RhdGlvbltcImlkXCJdLFxuXHRcdFx0Ly8gXCJlbnZcIjogXCJkZXZcIlxuXHRcdH0pLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRkZXBhcnR1cmVzID0gcmVzcG9uc2U7XG5cblx0XHRcdGxldCAkc3RhdGlvbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdGlvblwiKTtcblx0XHRcdGxldCBkaXJlY3Rpb25zID0gWyBdO1xuXHRcdFx0bGV0IGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uID0geyB9O1xuXG5cdFx0XHQvLyBPcmdhbml6YSBhcyBwYXJ0aWRhcyBwb3IgZGVzdGlub1xuXHRcdFx0ZGVwYXJ0dXJlc1tcImxpbmVzXCJdLmZvckVhY2goKGxpbmUpID0+IHtcblx0XHRcdFx0bGluZVtcImRpcmVjdGlvbnNcIl0uZm9yRWFjaCgoZGlyZWN0aW9uKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGRpcmVjdGlvbl90aXRsZSA9IGRpcmVjdGlvbltcIm5hbWVcIl07XG5cblx0XHRcdFx0XHRpZiAoZGlyZWN0aW9uW1wiZXRhc1wiXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWRpcmVjdGlvbnMuaW5jbHVkZXMoZGlyZWN0aW9uX3RpdGxlKSkge1xuXHRcdFx0XHRcdFx0XHRkaXJlY3Rpb25zLnB1c2goZGlyZWN0aW9uX3RpdGxlKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKCFkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbltkaXJlY3Rpb25fdGl0bGVdKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0gPSBbIF07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGRpcmVjdGlvbltcImV0YXNcIl0uZm9yRWFjaCgodHJhaW4pID0+IHtcblx0XHRcdFx0XHRcdFx0dHJhaW5bXCJsaW5lXCJdID0gbGluZVtcIm5hbWVcIl07XG5cdFx0XHRcdFx0XHRcdGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0ucHVzaCh0cmFpbik7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIE1vbnRhIGFzIHBhcnRpZGFzXG5cdFx0XHRsZXQgJGRlcGFydHVyZXMgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImRlcGFydHVyZXNcIikuYXBwZW5kVG8oJHN0YXRpb24pO1xuXHRcdFx0bGV0ICR0aXRsZSA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGVwYXJ0dXJlcy10aXRsZVwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRcdH0pLmFwcGVuZFRvKCRkZXBhcnR1cmVzKTtcblx0XHRcdCQoXCI8c3BhbiAvPlwiKS50ZXh0KFwiUHLDs3hpbW9zIHRyZW5zXCIpLmFwcGVuZFRvKCR0aXRsZSk7XG5cblx0XHRcdGxldCBzaGFyZV90ZXh0ID0gW1wiUHLDs3hpbW9zIHRyZW5zXCIsIFwi8J+aiSAqXCIgKyBzdGF0aW9uW1wibmFtZVwiXSArIFwiKlwiLCBcIlwiXTtcblxuXHRcdFx0Ly8gZGlyZWN0aW9ucy5zb3J0KCk7XG5cdFx0XHRkaXJlY3Rpb25zLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuXHRcdFx0XHRsZXQgJGRpcmVjdGlvbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGlyZWN0aW9uXCIpLmFwcGVuZFRvKCRkZXBhcnR1cmVzKTtcblx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJkaXJlY3Rpb24tY2FwdGlvblwiKS50ZXh0KFwiRGVzdGlub1wiKS5hcHBlbmRUbygkZGlyZWN0aW9uKTtcblxuXHRcdFx0XHRsZXQgZXRhcyA9IGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl07XG5cdFx0XHRcdGV0YXMuc29ydCgoYSwgYikgPT4geyByZXR1cm4gYVtcInNlY29uZHNcIl0gLSBiW1wic2Vjb25kc1wiXSB9KTtcblxuXHRcdFx0XHRldGFzLmZvckVhY2goKHRyYWluKSA9PiB7XG5cdFx0XHRcdFx0bGV0ICR0cmFpbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW5cIikuYXBwZW5kVG8oJGRpcmVjdGlvbik7XG5cdFx0XHRcdFx0bGV0ICRsaW5lID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpbi1saW5lXCIpLmFwcGVuZFRvKCR0cmFpbik7XG5cdFx0XHRcdFx0bGV0IGlzX2FwcHJvYWNoaW5nID0gdHJhaW5bXCJzZWNvbmRzXCJdIDwgMjU7XG5cblx0XHRcdFx0XHRsZXQgbGluZSA9IGxpbmVfaW5kZXhbdHJhaW5bXCJsaW5lXCJdXTtcblx0XHRcdFx0XHRsZXQgZGVwYXJ0dXJlX2NvdW50ZG93biA9IChpc19hcHByb2FjaGluZz8gXCJBZ29yYVwiIDogTWF0aC5yb3VuZCh0cmFpbltcInNlY29uZHNcIl0gLyA2MCkgKyBcIjxzcGFuPm1pbjwvc3Bhbj5cIik7XG5cdFx0XHRcdFx0bGV0IGRlcGFydHVyZV90aW1lID0gbW9tZW50KHRyYWluW1wiYXJyaXZhbFRpbWVcIl0pLmZvcm1hdChcIkhIOm1tXCIpO1xuXG5cdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJsaW5lLXNoaWVsZFwiKS5jc3MoXCJjb2xvclwiLCBsaW5lW1wiY29sb3JcIl0pLmF0dHIoXCJ0aXRsZVwiLCBcIkxpbmhhIFwiICsgbGluZVtcImlkXCJdKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSkudGV4dChsaW5lW1wiaWRcIl0pLmFwcGVuZFRvKCRsaW5lKTtcblx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInRyYWluLWRpcmVjdGlvblwiKS5hdHRyKFwidGl0bGVcIiwgXCJUcmVtIFwiICsgdHJhaW5bXCJ0cmFpblwiXSkudGV4dChkaXJlY3Rpb24pLmFwcGVuZFRvKCR0cmFpbik7XG5cdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpbi1ldGFcIikuYXR0cihcInRpdGxlXCIsIGRlcGFydHVyZV90aW1lKS5odG1sKGRlcGFydHVyZV9jb3VudGRvd24pLmFwcGVuZFRvKCR0cmFpbik7XG5cblx0XHRcdFx0XHRpZiAoaXNfYXBwcm9hY2hpbmcpIHtcblx0XHRcdFx0XHRcdCR0cmFpbi5hZGRDbGFzcyhcIi1zdGF0ZS0tYXBwcm9hY2hpbmdcIik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gVGV4dG8gcGFyYSBjb21wYXJ0aWxoYW1lbnRvXG5cdFx0XHRcdFx0c2hhcmVfdGV4dC5wdXNoKGxpbmVfZW1vamlbbGluZVtcImlkXCJdXSArIFwiIFwiICsgZGlyZWN0aW9uICsgXCIgXCIgKyBkZXBhcnR1cmVfdGltZSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIENvbXBhcnRpbGhhclxuXHRcdFx0XHQvLyBpZiAobmF2aWdhdG9yLnNoYXJlKSB7XG5cdFx0XHRcdC8vIFx0bGV0IGxvbmdwcmVzcztcblx0XHRcdFx0Ly8gXHRsZXQgbG9uZ3ByZXNzX2RlbGF5ID0gMTMwMDtcblxuXHRcdFx0XHQvLyBcdCRkaXJlY3Rpb24ub24oXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdC8vIFx0XHRsb25ncHJlc3MgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0Ly8gXHRcdFx0bmF2aWdhdG9yLnNoYXJlKHtcblx0XHRcdFx0Ly8gXHRcdFx0XHR0ZXh0OiBzaGFyZV90ZXh0LmpvaW4oXCJcXG5cIilcblx0XHRcdFx0Ly8gXHRcdFx0fSk7XG5cdFx0XHRcdC8vIFx0XHR9LCBsb25ncHJlc3NfZGVsYXkpO1xuXHRcdFx0XHQvLyBcdH0pLm9uKFwibW91c2V1cCBtb3VzZW91dFwiLCAoKSA9PiB7XG5cdFx0XHRcdC8vIFx0XHQvLyBjbGVhckludGVydmFsKGxvbmdwcmVzcyk7XG5cdFx0XHRcdC8vIFx0fSk7XG5cdFx0XHRcdC8vIH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBFc3RhZG8gZGEgY29uZXjDo28gZSBob3JhIGRhIMO6bHRpbWEgYXR1YWxpemHDp8Ojb1xuXHRcdFx0JHN0YXR1cyA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdHVzXCIpLmFwcGVuZFRvKCR0aXRsZSk7XG5cdFx0XHQvLyAkY29ubmVjdGlvbl9zdGF0dXMgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImNvbm5lY3Rpb24tc3RhdHVzXCIpLmFwcGVuZFRvKCRzdGF0dXMpO1xuXHRcdFx0Ly8gJGxhc3RfdXBkYXRlZCA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwibGFzdC11cGRhdGVkXCIpLmFwcGVuZFRvKCRzdGF0dXMpO1xuXHRcdFx0bGFzdFVwZGF0ZWQoKTtcblxuXHRcdFx0Ly8gTGltcGEgbyBwYWluZWwgZSBpbnNlcmUgb3Mgbm92b3MgZGFkb3Ncblx0XHRcdCRwYW5lbC5lbXB0eSgpLmFwcGVuZCgkc3RhdGlvbik7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlV2luZG93ID0gKCkgPT4ge1xuXHRcdGlmIChkb2N1bWVudC5oaWRkZW4gPT09IGZhbHNlICYmIG5hdmlnYXRvci5vbkxpbmUgPT09IHRydWUpIHtcblx0XHRcdGxhc3RVcGRhdGVkKCk7XG5cdFx0XHRnZXREYXRhKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGdldERhdGEoKTtcblxuXHQvLyBDcmlhIG5vdm9zIGludGVydmFsb3MgZSBldmVudG9zXG5cdGlmIChlbnYgPT09IFwicHJvZHVjdGlvblwiKSB7XG5cdFx0Y3VlW1wiaW50ZXJ2YWwtZGVwYXJ0dXJlc1wiXSA9IHNldEludGVydmFsKGdldERhdGEsIDE1MDAwKTsgLy8gVEVNUFxuXHRcdGN1ZVtcImludGVydmFsLWxhc3QtdXBkYXRlZFwiXSA9IHNldEludGVydmFsKGxhc3RVcGRhdGVkLCA1MDAwKTtcblx0fVxuXG5cdCQod2luZG93KS5vbihcIm9ubGluZSB2aXNpYmlsaXR5Y2hhbmdlXCIsIHVwZGF0ZVdpbmRvdyk7XG59O1xuIiwiJChmdW5jdGlvbigpIHtcblx0Ly8gTW9udGEgbGlzdGEgZGUgcGFyYWRhcyBlIGVzdGHDp8O1ZXNcblx0bGV0ICRzdGF0aW9ucyA9ICQoXCIuc3RhdGlvbnMgdWxcIik7XG5cblx0bGV0ICRuZWFyZXN0ID0gJChcIjxhIC8+XCIpLmF0dHIoXCJocmVmXCIsIFwiI1wiKS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0JChcIi5zdGF0aW9ucyBoMSAuc3RhdGlvbi1uYW1lXCIpLnRleHQoXCJcIik7XG5cdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRnZXRMb2NhdGlvbigpO1xuXHR9KS5hcHBlbmRUbygkc3RhdGlvbnMpO1xuXHQkKFwiPGkgLz5cIikuYWRkQ2xhc3MoXCJtYXRlcmlhbC1pY29uc1wiKS50ZXh0KFwibmVhcl9tZVwiKS5hcHBlbmRUbygkbmVhcmVzdCk7XG5cdCQoXCI8c3BhbiAvPlwiKS50ZXh0KFwiTG9jYWxpemFyIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXCIpLmFwcGVuZFRvKCRuZWFyZXN0KTtcblxuXHQkKFwiPGxpIC8+XCIpLmFkZENsYXNzKFwibmVhcmVzdC1zdGF0aW9uXCIpLmFwcGVuZCgkbmVhcmVzdCkuYXBwZW5kVG8oJHN0YXRpb25zKTtcblxuXHRzdGF0aW9ucy5mb3JFYWNoKChzdGF0aW9uKSA9PiB7XG5cdFx0bGV0ICRzdGF0aW9uID0gJChcIjxhIC8+XCIpLmF0dHIoXCJocmVmXCIsIFwiI1wiICsgc3RhdGlvbltcImlkXCJdKTtcblxuXHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdGlvbi1uYW1lXCIpLnRleHQoc3RhdGlvbltcIm5hbWVcIl0pLmFwcGVuZFRvKCRzdGF0aW9uKTtcblxuXHRcdGxldCAkbGluZXMgPSAkKFwiPHVsIC8+XCIpLmFkZENsYXNzKFwic3RhdGlvbi1saW5lc1wiKS5hcHBlbmRUbygkc3RhdGlvbik7XG5cdFx0bGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuXHRcdFx0bGV0ICRsaW5lID0gJChcIjxsaSAvPlwiKS5hcHBlbmRUbygkbGluZXMpO1xuXHRcdFx0aWYgKHN0YXRpb25bXCJsaW5lc1wiXS5pbmNsdWRlcyhsaW5lW1wiaWRcIl0pKSB7XG5cdFx0XHRcdGxldCAkc2hpZWxkID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJsaW5lLXNoaWVsZFwiKS5jc3MoXCJjb2xvclwiLCBsaW5lW1wiY29sb3JcIl0pLnRleHQobGluZVtcImlkXCJdKS5hcHBlbmRUbygkbGluZSk7XG5cblx0XHRcdFx0aWYgKGxpbmVbXCJkaXNhYmxlZFwiXSkge1xuXHRcdFx0XHRcdCRzaGllbGQuYXR0cihcImRpc2FibGVkXCIsIHRydWUpLmFkZENsYXNzKFwiLXN0YXRlLS1kaXNhYmxlZFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKCFzdGF0aW9uW1wiZGlzYWJsZWRcIl0pIHtcblx0XHRcdCRzdGF0aW9uLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdG5leHREZXBhcnR1cmVzKHN0YXRpb24pO1xuXHRcdFx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRzdGF0aW9uLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdC8vICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdFx0XHR9KTtcblx0XHRcdCRzdGF0aW9uLmFkZENsYXNzKFwiLXN0YXRlLS1kaXNhYmxlZFwiKTtcblx0XHR9XG5cblx0XHQkKFwiPGxpIC8+XCIpLmFwcGVuZCgkc3RhdGlvbikuYXBwZW5kVG8oJHN0YXRpb25zKTtcblx0fSk7XG5cblx0Ly8gTmF2ZWdhw6fDo29cblx0JChcIi5hcHBiYXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0JChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0fSk7XG5cblx0JCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIChldmVudCkgPT4ge1xuXHRcdGxldCBzY3JvbGxfdG9wX3Bvc2l0aW9uID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0aWYgKHNjcm9sbF90b3BfcG9zaXRpb24gPj0gMTIpIHtcblx0XHRcdCQoXCJib2R5XCIpLmFkZENsYXNzKFwiLW1vZGUtLXNjcm9sbFwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tc2Nyb2xsXCIpO1xuXHRcdH1cblx0fSk7XG59KTtcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gdGhlbWUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5sZXQgVGhlbWUgPSAoKCkgPT4ge1xyXG4gICAgbGV0IHRoZW1lX29yZGVyID0gW1xyXG4gICAgICAgIFwiYXV0b1wiLFxyXG4gICAgICAgIFwibGlnaHRcIixcclxuICAgICAgICBcImRhcmtcIlxyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgdGhlbWVfc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgXCJhdXRvXCI6IHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRlbWEgYXV0b23DoXRpY29cIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiYnJpZ2h0bmVzc19hdXRvXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibGlnaHRcIjoge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGVtYSBjbGFyb1wiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJicmlnaHRuZXNzXzVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkYXJrXCI6IHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRlbWEgZXNjdXJvXCIsXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImJyaWdodG5lc3NfNFwiXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHNldCA9IChuZXdfdGhlbWUsIG9sZF90aGVtZSkgPT4ge1xyXG4gICAgICAgIGN1cnJlbnRfdGhlbWUgPSBuZXdfdGhlbWU7XHJcblxyXG4gICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lIHNwYW5cIikudGV4dCh0aGVtZV9zZXR0aW5nc1tuZXdfdGhlbWVdW1widGl0bGVcIl0pO1xyXG4gICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lIGlcIikudGV4dCh0aGVtZV9zZXR0aW5nc1tuZXdfdGhlbWVdW1wiaWNvblwiXSk7XHJcblxyXG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLXRoZW1lLS1cIiArIG9sZF90aGVtZSkuYWRkQ2xhc3MoXCItdGhlbWUtLVwiICsgbmV3X3RoZW1lKTtcclxuXHJcbiAgICAgICAgLy8gU2FsdmEgY29uZmlndXJhw6fDo28gbm8gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgaWYgKG5ld190aGVtZSA9PT0gXCJhdXRvXCIpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0aGVtZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIG5ld190aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBDb25mZXJlIHNlIGrDoSBow6EgdGVtYSBzYWx2byBubyBsb2NhbFN0b3JhZ2UuXHJcbiAgICAvLyBTZSBuw6NvIGhvdXZlciwgcGVnYSBvIHBhZHLDo28gZG8gc2lzdGVtYVxyXG4gICAgbGV0IGN1cnJlbnRfdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIHx8IGdldENvbXB1dGVkU3R5bGUoJChcIi5zZXR0aW5ncyAuY3VycmVudC10aGVtZVwiKVswXSkuZ2V0UHJvcGVydHlWYWx1ZShcImNvbnRlbnRcIikucmVwbGFjZSgvXCIvZywgXCJcIik7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRfdGhlbWUpIHtcclxuICAgICAgICBzZXQoY3VycmVudF90aGVtZSwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKFwiLnNldHRpbmdzIC50aGVtZVwiKS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGVzY29icmUgYSBwb3Npw6fDo28gZG8gdGVtYSBuYSBvcmRlbVxyXG4gICAgICAgICAgICBsZXQgdGhlbWVfcG9zaXRpb24gPSB0aGVtZV9vcmRlci5pbmRleE9mKGN1cnJlbnRfdGhlbWUpO1xyXG4gICAgICAgICAgICBsZXQgbmV3X3RoZW1lID0gdGhlbWVfb3JkZXJbdGhlbWVfcG9zaXRpb24gKyAxXSB8fCB0aGVtZV9vcmRlclswXTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldGEgbyBub3ZvIHRlbWFcclxuICAgICAgICAgICAgc2V0KG5ld190aGVtZSwgY3VycmVudF90aGVtZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59KSgpO1xyXG4iLCJsZXQgY3VlID0gWyBdO1xubGV0ICRwYW5lbDtcblxuJChmdW5jdGlvbiAoKSB7XG5cdCRwYW5lbCA9ICQoXCIucGFuZWxcIik7XG5cblx0Ly8gQ29uZmVyZSBzZSB1c3XDoXJpbyBqw6EgaGF2aWEgaGFiaWxpdGFkbyBnZW9sb2NhbGl6YcOnw6NvIGFudGVzXG5cdGlmIChcImdlb2xvY2F0aW9uXCIgaW4gbmF2aWdhdG9yKSB7XG5cdFx0aWYgKFwicGVybWlzc2lvbnNcIiBpbiBuYXZpZ2F0b3IpIHtcblx0XHRcdG5hdmlnYXRvci5wZXJtaXNzaW9ucy5xdWVyeSh7IFwibmFtZVwiOiBcImdlb2xvY2F0aW9uXCIgfSkudGhlbigocGVybWlzc2lvbikgPT4ge1xuXHRcdFx0XHRpZiAocGVybWlzc2lvbltcInN0YXRlXCJdID09PSBcImdyYW50ZWRcIikge1xuXHRcdFx0XHRcdC8vIFNlIGrDoSB0aXZlciwgcGVnYSBhIGxvY2FsaXphw6fDo28gYXR1YWwgZSBwcm9jdXJhIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXG5cdFx0XHRcdFx0Z2V0TG9jYXRpb24oKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBTZSBuw6NvIHRpdmVyLCBtb3N0cmEgYm90w6NvIHBhcmEgc29saWNpdGFyIGF1dG9yaXphw6fDo29cblx0XHRcdFx0XHQkKFwiYm9keVwiKS5hZGRDbGFzcyhcIi1tb2RlLS1pbml0aWFsXCIpO1xuXG5cdFx0XHRcdFx0bGV0ICRwZXJtaXNzaW9uID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJwZXJtaXNzaW9uXCIpLmFwcGVuZFRvKCRwYW5lbCk7XG5cdFx0XHRcdFx0bGV0ICRidXR0b24gPSAkKFwiPGEgLz5cIikuYWRkQ2xhc3MoXCJidXR0b25cIikuYXR0cihcImhyZWZcIiwgXCIjXCIpLmFwcGVuZFRvKCRwZXJtaXNzaW9uKTtcblx0XHRcdFx0XHQkKFwiPGkgLz5cIikuYWRkQ2xhc3MoXCJtYXRlcmlhbC1pY29uc1wiKS50ZXh0KFwibmVhcl9tZVwiKS5hcHBlbmRUbygkYnV0dG9uKTtcblx0XHRcdFx0XHQkKFwiPHNwYW4gLz5cIikudGV4dChcIkxvY2FsaXphciBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYVwiKS5hcHBlbmRUbygkYnV0dG9uKTtcblxuXHRcdFx0XHRcdCRidXR0b24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRnZXRMb2NhdGlvbih0cnVlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGdldExvY2F0aW9uKCk7XG5cdFx0fVxuXHR9XG59KTtcblxuLy8gU2VydmljZSBXb3JrZXJcbmlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcblx0XHRjdWVbXCJzZXJ2aWNlLXdvcmtlclwiXSA9IG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKFwiL3NlcnZpY2Utd29ya2VyLmpzXCIpO1xuXG5cdFx0Y3VlW1wic2VydmljZS13b3JrZXJcIl0udGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIVwiLCByZWdpc3RyYXRpb24pO1xuXHRcdH0sIChlcnJvcikgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiBcIiwgZXJyb3IpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuLy8gRXN0YWRvIGRhIGNvbmV4w6NvXG5sZXQgJHN0YXR1cztcbmxldCAkY29ubmVjdGlvbl9zdGF0dXM7XG5cbmNvbnN0IHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMgPSAoKSA9PiB7XG5cdHJldHVybiBmYWxzZTtcblx0bGV0IGNvbm5lY3RlZCA9IG5hdmlnYXRvci5vbkxpbmU7XG5cblx0aWYgKGNvbm5lY3RlZCA9PT0gdHJ1ZSkge1xuXHRcdC8vICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiLXN0YXRlLS1zdWNjZXNzXCIpLnRleHQoXCJDb25leMOjbyByZWVzdGFiZWxlY2lkYSFcIikuYXBwZW5kVG8oJGNvbm5lY3Rpb25fc3RhdHVzKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0JGNvbm5lY3Rpb25fc3RhdHVzLmVtcHR5KCk7XG5cdFx0fSwgNDAwMCk7XG5cdH0gZWxzZSB7XG5cdFx0JGNvbm5lY3Rpb25fc3RhdHVzLmVtcHR5KCk7XG5cdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCItc3RhdGUtLWVycm9yXCIpLnRleHQoXCJTZW0gY29uZXjDo29cIikuYXBwZW5kVG8oJGNvbm5lY3Rpb25fc3RhdHVzKTtcblx0fVxufTtcblxuJCh3aW5kb3cpLm9uKFwib25saW5lIG9mZmxpbmVcIiwgdXBkYXRlQ29ubmVjdGlvblN0YXR1cyk7XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib25saW5lXCIsIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMpO1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMpO1xuIl19
