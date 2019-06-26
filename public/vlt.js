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
  // cue["interval-departures"] = setInterval(getData, 15000); // TEMP
  // cue["interval-last-updated"] = setInterval(lastUpdated, 5000);

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpb24taW5mby5qcyIsImxpbmUtaW5mby5qcyIsImdldC1sb2NhdGlvbi5qcyIsIm5lYXJlc3Qtc3RhdGlvbi5qcyIsIm5leHQtZGVwYXJ0dXJlcy5qcyIsInN0YXRpb24tbGlzdC5qcyIsInRoZW1lLmpzIiwic3RhcnQuanMiXSwibmFtZXMiOlsic3RhdGlvbnMiLCJzdGF0aW9uX2luZGV4IiwiZm9yRWFjaCIsInN0YXRpb24iLCJzdGF0aW9uX25hbWUiLCJsaW5lcyIsImxpbmVfaW5kZXgiLCJsaW5lIiwibGluZV9uYW1lIiwiZ2V0TG9jYXRpb24iLCJpc19pbml0aWFsIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsIiQiLCJyZW1vdmVDbGFzcyIsIm5lYXJlc3Rfc3RhdGlvbiIsIm5lYXJlc3RTdGF0aW9uIiwibmV4dERlcGFydHVyZXMiLCJkZWcycmFkIiwiZGVnIiwiTWF0aCIsIlBJIiwidXNlcl9jb29yZGluYXRlcyIsInVzZXJfbGF0aXR1ZGUiLCJ1c2VyX2xvbmdpdHVkZSIsIlIiLCJzaG9ydGVzdF9kaXN0YW5jZSIsInN0YXRpb25fbGF0aXR1ZGUiLCJzdGF0aW9uX2xvbmdpdHVkZSIsIngiLCJjb3MiLCJ5IiwiZGlzdGFuY2UiLCJzcXJ0IiwiZGVwYXJ0dXJlcyIsImxpbmVfZW1vamkiLCJjbGVhckludGVydmFsIiwiY3VlIiwid2luZG93Iiwib2ZmIiwidGV4dCIsIiRsb2FkaW5nIiwiYWRkQ2xhc3MiLCJhcHBlbmRUbyIsIiRwYW5lbCIsImVtcHR5IiwiYXBwZW5kIiwibGFzdFVwZGF0ZWQiLCIkYmFkZ2UiLCJjb25uZWN0ZWQiLCJvbkxpbmUiLCJzZWNvbmRzX3NpbmNlX3VwZGF0ZSIsIm1vbWVudCIsImRpZmYiLCJsYXN0X3VwZGF0ZWQiLCJmcm9tTm93IiwiJHN0YXR1cyIsImdldERhdGEiLCJkb2N1bWVudCIsImhpZGRlbiIsImdldEpTT04iLCJkb25lIiwicmVzcG9uc2UiLCIkc3RhdGlvbiIsImRpcmVjdGlvbnMiLCJkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbiIsImRpcmVjdGlvbiIsImRpcmVjdGlvbl90aXRsZSIsImxlbmd0aCIsImluY2x1ZGVzIiwicHVzaCIsInRyYWluIiwiJGRlcGFydHVyZXMiLCIkdGl0bGUiLCJvbiIsInNoYXJlX3RleHQiLCIkZGlyZWN0aW9uIiwiZXRhcyIsInNvcnQiLCJhIiwiYiIsIiR0cmFpbiIsIiRsaW5lIiwiaXNfYXBwcm9hY2hpbmciLCJkZXBhcnR1cmVfY291bnRkb3duIiwicm91bmQiLCJkZXBhcnR1cmVfdGltZSIsImZvcm1hdCIsImNzcyIsImF0dHIiLCJodG1sIiwidXBkYXRlV2luZG93IiwiJHN0YXRpb25zIiwiJG5lYXJlc3QiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJGxpbmVzIiwiJHNoaWVsZCIsInRvZ2dsZUNsYXNzIiwic2Nyb2xsX3RvcF9wb3NpdGlvbiIsInNjcm9sbFRvcCIsIlRoZW1lIiwidGhlbWVfb3JkZXIiLCJ0aGVtZV9zZXR0aW5ncyIsInNldCIsIm5ld190aGVtZSIsIm9sZF90aGVtZSIsImN1cnJlbnRfdGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImdldEl0ZW0iLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInJlcGxhY2UiLCJ0aGVtZV9wb3NpdGlvbiIsImluZGV4T2YiLCJwZXJtaXNzaW9ucyIsInF1ZXJ5IiwidGhlbiIsInBlcm1pc3Npb24iLCIkcGVybWlzc2lvbiIsIiRidXR0b24iLCJlbnYiLCJhZGRFdmVudExpc3RlbmVyIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwicmVnaXN0cmF0aW9uIiwiZXJyb3IiLCIkY29ubmVjdGlvbl9zdGF0dXMiLCJ1cGRhdGVDb25uZWN0aW9uU3RhdHVzIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFBQSxRQUFBLEdBQUEsQ0FDQTtBQUNBLFVBQUEsZ0JBREE7QUFFQSxRQUFBLGdCQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBREEsRUFTQTtBQUNBO0FBQ0EsVUFBQSxVQUZBO0FBR0EsUUFBQSxVQUhBO0FBSUE7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBTEE7QUFNQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBUEEsQ0FUQSxFQWtCQTtBQUNBLFVBQUEsWUFEQTtBQUVBLFFBQUEsWUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQWxCQSxFQTBCQTtBQUNBLFVBQUEsU0FEQTtBQUVBLFFBQUEsU0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQTFCQSxFQWtDQTtBQUNBLFVBQUEsU0FEQTtBQUVBLFFBQUEsU0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQWxDQSxFQTBDQTtBQUNBLFVBQUEsaUJBREE7QUFFQSxRQUFBLGlCQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0ExQ0EsRUFrREE7QUFDQSxVQUFBLFlBREE7QUFFQSxRQUFBLFlBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0FsREEsRUEwREE7QUFDQSxVQUFBLFNBREE7QUFFQSxRQUFBLFNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQTFEQSxFQWtFQTtBQUNBLFVBQUEsbUJBREE7QUFFQSxRQUFBLG1CQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBbEVBLEVBMEVBO0FBQ0E7QUFDQSxVQUFBLGtCQUZBO0FBR0EsUUFBQSxrQkFIQTtBQUlBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUxBO0FBTUE7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFQQSxDQTFFQSxFQW1GQTtBQUNBLFVBQUEsU0FEQTtBQUVBLFFBQUEsU0FGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQW5GQSxFQTJGQTtBQUNBLFVBQUEsUUFEQTtBQUVBLFFBQUEsUUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQTNGQSxFQW1HQTtBQUNBLFVBQUEsVUFEQTtBQUVBLFFBQUEsVUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBbkdBLEVBMkdBO0FBQ0EsVUFBQSxtQkFEQTtBQUVBLFFBQUEsbUJBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQTNHQSxFQW1IQTtBQUNBLFVBQUEsbUJBREE7QUFFQSxRQUFBLG1CQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGlCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0FuSEEsRUEySEE7QUFDQSxVQUFBLGNBREE7QUFFQSxRQUFBLGNBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxpQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBTkEsQ0EzSEEsRUFtSUE7QUFDQSxVQUFBLFVBREE7QUFFQSxRQUFBLFVBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQW5JQSxFQTJJQTtBQUNBLFVBQUEsZUFEQTtBQUVBLFFBQUEsZUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQTNJQSxFQW1KQTtBQUNBLFVBQUEsYUFEQTtBQUVBLFFBQUEsYUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBbkpBLEVBMkpBO0FBQ0EsVUFBQSxZQURBO0FBRUEsUUFBQSxZQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBM0pBLEVBbUtBO0FBQ0EsVUFBQSxPQURBO0FBRUEsUUFBQSxPQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0FuS0EsRUEyS0E7QUFDQTtBQUNBLFVBQUEsWUFGQTtBQUdBLFFBQUEsWUFIQTtBQUlBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUxBO0FBTUE7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQVBBLENBM0tBLEVBb0xBO0FBQ0EsVUFBQSxjQURBO0FBRUEsUUFBQSxjQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGlCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBcExBLEVBNExBO0FBQ0EsVUFBQSxlQURBO0FBRUEsUUFBQSxlQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGlCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQU5BLENBNUxBLEVBb01BO0FBQ0EsVUFBQSxXQURBO0FBRUEsUUFBQSxXQUZBO0FBR0E7QUFDQSxpQkFBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxDQUFBLGtCQUFBLENBSkE7QUFLQTtBQUNBLFdBQUEsQ0FBQSxDQUFBO0FBTkEsQ0FwTUEsRUE0TUE7QUFDQSxVQUFBLGtCQURBO0FBRUEsUUFBQSxrQkFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFOQSxDQTVNQSxFQW9OQTtBQUNBLFVBQUEsWUFEQTtBQUVBLFFBQUEsWUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBcE5BLEVBNE5BO0FBQ0EsVUFBQSxnQkFEQTtBQUVBLFFBQUEsZ0JBRkE7QUFHQTtBQUNBLGlCQUFBLENBQUEsQ0FBQSxrQkFBQSxFQUFBLENBQUEsa0JBQUEsQ0FKQTtBQUtBO0FBQ0EsV0FBQSxDQUFBLENBQUE7QUFOQSxDQTVOQSxFQW9PQTtBQUNBLFVBQUEsZUFEQTtBQUVBLFFBQUEsZUFGQTtBQUdBO0FBQ0EsaUJBQUEsQ0FBQSxDQUFBLGtCQUFBLEVBQUEsQ0FBQSxrQkFBQSxDQUpBO0FBS0E7QUFDQSxXQUFBLENBQUEsQ0FBQTtBQU5BLENBcE9BLENBQUE7QUE4T0EsSUFBQUMsYUFBQSxHQUFBLEVBQUE7QUFDQUQsUUFBQSxDQUFBRSxPQUFBLENBQUEsVUFBQUMsT0FBQSxFQUFBO0FBQ0EsTUFBQUMsWUFBQSxHQUFBRCxPQUFBLENBQUEsTUFBQSxDQUFBO0FBQ0FGLEVBQUFBLGFBQUEsQ0FBQUcsWUFBQSxDQUFBLEdBQUFELE9BQUE7QUFDQSxDQUhBO0FDL09BLElBQUFFLEtBQUEsR0FBQSxDQUNBO0FBQ0EsUUFBQSxDQURBO0FBRUEsVUFBQSxTQUZBO0FBR0EsV0FBQSxTQUhBLENBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBUEEsQ0FEQSxFQVVBO0FBQ0EsUUFBQSxDQURBO0FBRUEsVUFBQSxTQUZBO0FBR0EsV0FBQSxTQUhBLENBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBUEEsQ0FWQSxFQW1CQTtBQUNBO0FBQ0EsUUFBQSxDQUZBO0FBR0EsVUFBQSxTQUhBO0FBSUEsV0FBQSxTQUpBLENBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBUkEsQ0FuQkEsQ0FBQTtBQStCQSxJQUFBQyxVQUFBLEdBQUEsRUFBQTtBQUNBRCxLQUFBLENBQUFILE9BQUEsQ0FBQSxVQUFBSyxJQUFBLEVBQUE7QUFDQSxNQUFBQyxTQUFBLEdBQUFELElBQUEsQ0FBQSxNQUFBLENBQUE7QUFDQUQsRUFBQUEsVUFBQSxDQUFBRSxTQUFBLENBQUEsR0FBQUQsSUFBQTtBQUNBLENBSEEsRSxDQ2hDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFBRSxXQUFBLEdBQUEsU0FBQUEsV0FBQSxHQUFBO0FBQUEsTUFBQUMsVUFBQSx1RUFBQSxLQUFBO0FBQ0FDLEVBQUFBLFNBQUEsQ0FBQUMsV0FBQSxDQUFBQyxrQkFBQSxDQUFBLFVBQUFDLFFBQUEsRUFBQTtBQUNBO0FBQ0EsUUFBQUosVUFBQSxFQUFBO0FBQ0FLLE1BQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQUMsV0FBQSxDQUFBLGdCQUFBO0FBQ0EsS0FKQSxDQU1BOzs7QUFDQSxRQUFBQyxlQUFBLEdBQUFDLGNBQUEsQ0FBQSxDQUFBSixRQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsVUFBQSxDQUFBLEVBQUFBLFFBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0FLLElBQUFBLGNBQUEsQ0FBQUYsZUFBQSxDQUFBO0FBQ0EsR0FUQTtBQVVBLENBWEEsQyxDQ0xBOzs7QUFDQSxJQUFBRyxPQUFBLEdBQUEsU0FBQUEsT0FBQSxDQUFBQyxHQUFBLEVBQUE7QUFDQSxTQUFBQSxHQUFBLElBQUFDLElBQUEsQ0FBQUMsRUFBQSxHQUFBLEdBQUEsQ0FBQTtBQUNBLENBRkE7O0FBSUEsSUFBQUwsY0FBQSxHQUFBLFNBQUFBLGNBQUEsQ0FBQU0sZ0JBQUEsRUFBQTtBQUNBLE1BQUFDLGFBQUEsR0FBQUwsT0FBQSxDQUFBSSxnQkFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsTUFBQUUsY0FBQSxHQUFBTixPQUFBLENBQUFJLGdCQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFFQSxNQUFBRyxDQUFBLEdBQUEsSUFBQTtBQUVBLE1BQUFDLGlCQUFBLEdBQUEsSUFBQTtBQUNBLE1BQUFYLGVBQUEsR0FBQSxJQUFBO0FBRUFqQixFQUFBQSxRQUFBLENBQUFFLE9BQUEsQ0FBQSxVQUFBQyxPQUFBLEVBQUE7QUFDQSxRQUFBLENBQUFBLE9BQUEsQ0FBQSxVQUFBLENBQUEsRUFBQTtBQUNBLFVBQUEwQixnQkFBQSxHQUFBVCxPQUFBLENBQUFqQixPQUFBLENBQUEsYUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxVQUFBMkIsaUJBQUEsR0FBQVYsT0FBQSxDQUFBakIsT0FBQSxDQUFBLGFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBRUEsVUFBQTRCLENBQUEsR0FBQSxDQUFBRCxpQkFBQSxHQUFBSixjQUFBLElBQUFKLElBQUEsQ0FBQVUsR0FBQSxDQUFBLENBQUFQLGFBQUEsR0FBQUksZ0JBQUEsSUFBQSxDQUFBLENBQUE7QUFDQSxVQUFBSSxDQUFBLEdBQUFKLGdCQUFBLEdBQUFKLGFBQUE7QUFDQSxVQUFBUyxRQUFBLEdBQUFaLElBQUEsQ0FBQWEsSUFBQSxDQUFBSixDQUFBLEdBQUFBLENBQUEsR0FBQUUsQ0FBQSxHQUFBQSxDQUFBLElBQUFOLENBQUE7O0FBRUEsVUFBQSxDQUFBQyxpQkFBQSxJQUFBTSxRQUFBLEdBQUFOLGlCQUFBLEVBQUE7QUFDQUEsUUFBQUEsaUJBQUEsR0FBQU0sUUFBQTtBQUNBakIsUUFBQUEsZUFBQSxHQUFBZCxPQUFBO0FBQ0E7QUFDQTtBQUNBLEdBZEE7QUFnQkEsU0FBQWMsZUFBQTtBQUNBLENBMUJBLEMsQ0NMQTs7O0FBQ0EsSUFBQUUsY0FBQSxHQUFBLFNBQUFBLGNBQUEsQ0FBQWhCLE9BQUEsRUFBQTtBQUNBLE1BQUFpQyxVQUFBO0FBRUEsTUFBQUMsVUFBQSxHQUFBO0FBQ0EsT0FBQSxLQURBO0FBRUEsT0FBQSxLQUZBO0FBR0EsT0FBQTtBQUhBLEdBQUEsQ0FIQSxDQVNBOztBQUNBQyxFQUFBQSxhQUFBLENBQUFDLEdBQUEsQ0FBQSxxQkFBQSxDQUFBLENBQUE7QUFDQUQsRUFBQUEsYUFBQSxDQUFBQyxHQUFBLENBQUEsdUJBQUEsQ0FBQSxDQUFBO0FBRUF4QixFQUFBQSxDQUFBLENBQUF5QixNQUFBLENBQUEsQ0FBQUMsR0FBQSxDQUFBLHlCQUFBLEVBYkEsQ0FjQTtBQUVBOztBQUNBMUIsRUFBQUEsQ0FBQSxDQUFBLDRCQUFBLENBQUEsQ0FBQTJCLElBQUEsQ0FBQXZDLE9BQUEsQ0FBQSxNQUFBLENBQUEsRUFqQkEsQ0FtQkE7O0FBQ0EsTUFBQXdDLFFBQUEsR0FBQTVCLENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTZCLFFBQUEsQ0FBQSxTQUFBLENBQUE7QUFDQTdCLEVBQUFBLENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTZCLFFBQUEsQ0FBQSxXQUFBLEVBQUFDLFFBQUEsQ0FBQUYsUUFBQTtBQUNBRyxFQUFBQSxNQUFBLENBQUFDLEtBQUEsR0FBQUMsTUFBQSxDQUFBTCxRQUFBLEVBdEJBLENBd0JBOztBQUNBLE1BQUFNLFdBQUEsR0FBQSxTQUFBQSxXQUFBLEdBQUE7QUFDQSxRQUFBQyxNQUFBLEdBQUFuQyxDQUFBLENBQUEsU0FBQSxDQUFBLENBQUE2QixRQUFBLENBQUEsY0FBQSxDQUFBO0FBQ0EsUUFBQU8sU0FBQSxHQUFBeEMsU0FBQSxDQUFBeUMsTUFBQSxDQUZBLENBSUE7O0FBQ0EsUUFBQUMsb0JBQUEsR0FBQUMsTUFBQSxHQUFBQyxJQUFBLENBQUFuQixVQUFBLENBQUEsYUFBQSxDQUFBLEVBQUEsU0FBQSxDQUFBLENBTEEsQ0FPQTs7QUFDQSxRQUFBaUIsb0JBQUEsSUFBQSxFQUFBLEVBQUE7QUFDQUgsTUFBQUEsTUFBQSxDQUFBTixRQUFBLENBQUEsbUJBQUEsRUFBQUYsSUFBQSxDQUFBLFlBQUE7QUFDQSxLQUZBLE1BRUE7QUFDQSxVQUFBYyxZQUFBLEdBQUEsZ0JBQUFGLE1BQUEsQ0FBQWxCLFVBQUEsQ0FBQSxhQUFBLENBQUEsQ0FBQSxDQUFBcUIsT0FBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLFFBQUE7QUFDQVAsTUFBQUEsTUFBQSxDQUFBUixJQUFBLENBQUFjLFlBQUE7QUFDQTs7QUFFQUUsSUFBQUEsT0FBQSxDQUFBWCxLQUFBLEdBQUFDLE1BQUEsQ0FBQUUsTUFBQTtBQUNBLEdBaEJBOztBQWtCQSxNQUFBUyxPQUFBLEdBQUEsU0FBQUEsT0FBQSxHQUFBO0FBQ0E7QUFDQSxRQUFBQyxRQUFBLENBQUFDLE1BQUEsS0FBQSxJQUFBLElBQUFsRCxTQUFBLENBQUF5QyxNQUFBLEtBQUEsS0FBQSxFQUFBO0FBQ0EsYUFBQSxLQUFBO0FBQ0EsS0FKQSxDQU1BOzs7QUFDQXJDLElBQUFBLENBQUEsQ0FBQStDLE9BQUEsQ0FBQSxvREFBQSxFQUFBO0FBQ0EsaUJBQUEzRCxPQUFBLENBQUEsSUFBQSxDQURBLENBRUE7O0FBRkEsS0FBQSxFQUdBNEQsSUFIQSxDQUdBLFVBQUFDLFFBQUEsRUFBQTtBQUNBNUIsTUFBQUEsVUFBQSxHQUFBNEIsUUFBQTtBQUVBLFVBQUFDLFFBQUEsR0FBQWxELENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTZCLFFBQUEsQ0FBQSxTQUFBLENBQUE7QUFDQSxVQUFBc0IsVUFBQSxHQUFBLEVBQUE7QUFDQSxVQUFBQyx1QkFBQSxHQUFBLEVBQUEsQ0FMQSxDQU9BOztBQUNBL0IsTUFBQUEsVUFBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBbEMsT0FBQSxDQUFBLFVBQUFLLElBQUEsRUFBQTtBQUNBQSxRQUFBQSxJQUFBLENBQUEsWUFBQSxDQUFBLENBQUFMLE9BQUEsQ0FBQSxVQUFBa0UsU0FBQSxFQUFBO0FBQ0EsY0FBQUMsZUFBQSxHQUFBRCxTQUFBLENBQUEsTUFBQSxDQUFBOztBQUVBLGNBQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQUUsTUFBQSxHQUFBLENBQUEsRUFBQTtBQUNBLGdCQUFBLENBQUFKLFVBQUEsQ0FBQUssUUFBQSxDQUFBRixlQUFBLENBQUEsRUFBQTtBQUNBSCxjQUFBQSxVQUFBLENBQUFNLElBQUEsQ0FBQUgsZUFBQTtBQUNBOztBQUVBLGdCQUFBLENBQUFGLHVCQUFBLENBQUFFLGVBQUEsQ0FBQSxFQUFBO0FBQ0FGLGNBQUFBLHVCQUFBLENBQUFFLGVBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDQTs7QUFFQUQsWUFBQUEsU0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBbEUsT0FBQSxDQUFBLFVBQUF1RSxLQUFBLEVBQUE7QUFDQUEsY0FBQUEsS0FBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBbEUsSUFBQSxDQUFBLE1BQUEsQ0FBQTtBQUNBNEQsY0FBQUEsdUJBQUEsQ0FBQUUsZUFBQSxDQUFBLENBQUFHLElBQUEsQ0FBQUMsS0FBQTtBQUNBLGFBSEE7QUFJQTtBQUNBLFNBakJBO0FBa0JBLE9BbkJBLEVBUkEsQ0E2QkE7O0FBQ0EsVUFBQUMsV0FBQSxHQUFBM0QsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBNkIsUUFBQSxDQUFBLFlBQUEsRUFBQUMsUUFBQSxDQUFBb0IsUUFBQSxDQUFBO0FBQ0EsVUFBQVUsTUFBQSxHQUFBNUQsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBNkIsUUFBQSxDQUFBLGtCQUFBLEVBQUFnQyxFQUFBLENBQUEsT0FBQSxFQUFBLFlBQUE7QUFDQTdELFFBQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQUMsV0FBQSxDQUFBLGFBQUE7QUFDQSxPQUZBLEVBRUE2QixRQUZBLENBRUE2QixXQUZBLENBQUE7QUFHQTNELE1BQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQTJCLElBQUEsQ0FBQSxnQkFBQSxFQUFBRyxRQUFBLENBQUE4QixNQUFBO0FBRUEsVUFBQUUsVUFBQSxHQUFBLENBQUEsZ0JBQUEsRUFBQSxTQUFBMUUsT0FBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLEdBQUEsRUFBQSxFQUFBLENBQUEsQ0FwQ0EsQ0FzQ0E7O0FBQ0ErRCxNQUFBQSxVQUFBLENBQUFoRSxPQUFBLENBQUEsVUFBQWtFLFNBQUEsRUFBQTtBQUNBLFlBQUFVLFVBQUEsR0FBQS9ELENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTZCLFFBQUEsQ0FBQSxXQUFBLEVBQUFDLFFBQUEsQ0FBQTZCLFdBQUEsQ0FBQTtBQUNBM0QsUUFBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBNkIsUUFBQSxDQUFBLG1CQUFBLEVBQUFGLElBQUEsQ0FBQSxTQUFBLEVBQUFHLFFBQUEsQ0FBQWlDLFVBQUE7QUFFQSxZQUFBQyxJQUFBLEdBQUFaLHVCQUFBLENBQUFDLFNBQUEsQ0FBQTtBQUNBVyxRQUFBQSxJQUFBLENBQUFDLElBQUEsQ0FBQSxVQUFBQyxDQUFBLEVBQUFDLENBQUEsRUFBQTtBQUFBLGlCQUFBRCxDQUFBLENBQUEsU0FBQSxDQUFBLEdBQUFDLENBQUEsQ0FBQSxTQUFBLENBQUE7QUFBQSxTQUFBO0FBRUFILFFBQUFBLElBQUEsQ0FBQTdFLE9BQUEsQ0FBQSxVQUFBdUUsS0FBQSxFQUFBO0FBQ0EsY0FBQVUsTUFBQSxHQUFBcEUsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBNkIsUUFBQSxDQUFBLE9BQUEsRUFBQUMsUUFBQSxDQUFBaUMsVUFBQSxDQUFBO0FBQ0EsY0FBQU0sS0FBQSxHQUFBckUsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBNkIsUUFBQSxDQUFBLFlBQUEsRUFBQUMsUUFBQSxDQUFBc0MsTUFBQSxDQUFBO0FBQ0EsY0FBQUUsY0FBQSxHQUFBWixLQUFBLENBQUEsU0FBQSxDQUFBLEdBQUEsRUFBQTtBQUVBLGNBQUFsRSxJQUFBLEdBQUFELFVBQUEsQ0FBQW1FLEtBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQTtBQUNBLGNBQUFhLG1CQUFBLEdBQUFELGNBQUEsR0FBQSxPQUFBLEdBQUEvRCxJQUFBLENBQUFpRSxLQUFBLENBQUFkLEtBQUEsQ0FBQSxTQUFBLENBQUEsR0FBQSxFQUFBLElBQUEsa0JBQUE7QUFDQSxjQUFBZSxjQUFBLEdBQUFsQyxNQUFBLENBQUFtQixLQUFBLENBQUEsYUFBQSxDQUFBLENBQUEsQ0FBQWdCLE1BQUEsQ0FBQSxPQUFBLENBQUE7QUFFQTFFLFVBQUFBLENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTZCLFFBQUEsQ0FBQSxhQUFBLEVBQUE4QyxHQUFBLENBQUEsT0FBQSxFQUFBbkYsSUFBQSxDQUFBLE9BQUEsQ0FBQSxFQUFBb0YsSUFBQSxDQUFBLE9BQUEsRUFBQSxXQUFBcEYsSUFBQSxDQUFBLElBQUEsQ0FBQSxFQUFBb0YsSUFBQSxDQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUFqRCxJQUFBLENBQUFuQyxJQUFBLENBQUEsSUFBQSxDQUFBLEVBQUFzQyxRQUFBLENBQUF1QyxLQUFBO0FBQ0FyRSxVQUFBQSxDQUFBLENBQUEsU0FBQSxDQUFBLENBQUE2QixRQUFBLENBQUEsaUJBQUEsRUFBQStDLElBQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQWxCLEtBQUEsQ0FBQSxPQUFBLENBQUEsRUFBQS9CLElBQUEsQ0FBQTBCLFNBQUEsRUFBQXZCLFFBQUEsQ0FBQXNDLE1BQUE7QUFDQXBFLFVBQUFBLENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQTZCLFFBQUEsQ0FBQSxXQUFBLEVBQUErQyxJQUFBLENBQUEsT0FBQSxFQUFBSCxjQUFBLEVBQUFJLElBQUEsQ0FBQU4sbUJBQUEsRUFBQXpDLFFBQUEsQ0FBQXNDLE1BQUE7O0FBRUEsY0FBQUUsY0FBQSxFQUFBO0FBQ0FGLFlBQUFBLE1BQUEsQ0FBQXZDLFFBQUEsQ0FBQSxxQkFBQTtBQUNBLFdBZkEsQ0FpQkE7OztBQUNBaUMsVUFBQUEsVUFBQSxDQUFBTCxJQUFBLENBQUFuQyxVQUFBLENBQUE5QixJQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE2RCxTQUFBLEdBQUEsR0FBQSxHQUFBb0IsY0FBQTtBQUNBLFNBbkJBLEVBUEEsQ0E0QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BM0NBLEVBdkNBLENBb0ZBOztBQUNBOUIsTUFBQUEsT0FBQSxHQUFBM0MsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBNkIsUUFBQSxDQUFBLFFBQUEsRUFBQUMsUUFBQSxDQUFBOEIsTUFBQSxDQUFBLENBckZBLENBc0ZBO0FBQ0E7O0FBQ0ExQixNQUFBQSxXQUFBLEdBeEZBLENBMEZBOztBQUNBSCxNQUFBQSxNQUFBLENBQUFDLEtBQUEsR0FBQUMsTUFBQSxDQUFBaUIsUUFBQTtBQUNBLEtBL0ZBO0FBZ0dBLEdBdkdBOztBQXlHQSxNQUFBNEIsWUFBQSxHQUFBLFNBQUFBLFlBQUEsR0FBQTtBQUNBLFFBQUFqQyxRQUFBLENBQUFDLE1BQUEsS0FBQSxLQUFBLElBQUFsRCxTQUFBLENBQUF5QyxNQUFBLEtBQUEsSUFBQSxFQUFBO0FBQ0FILE1BQUFBLFdBQUE7QUFDQVUsTUFBQUEsT0FBQTtBQUNBO0FBQ0EsR0FMQTs7QUFPQUEsRUFBQUEsT0FBQSxHQTNKQSxDQTZKQTtBQUNBO0FBQ0E7O0FBRUE1QyxFQUFBQSxDQUFBLENBQUF5QixNQUFBLENBQUEsQ0FBQW9DLEVBQUEsQ0FBQSx5QkFBQSxFQUFBaUIsWUFBQTtBQUNBLENBbEtBOztBQ0RBOUUsQ0FBQSxDQUFBLFlBQUE7QUFDQTtBQUNBLE1BQUErRSxTQUFBLEdBQUEvRSxDQUFBLENBQUEsY0FBQSxDQUFBO0FBRUEsTUFBQWdGLFFBQUEsR0FBQWhGLENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQTRFLElBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSxFQUFBZixFQUFBLENBQUEsT0FBQSxFQUFBLFVBQUFvQixLQUFBLEVBQUE7QUFDQUEsSUFBQUEsS0FBQSxDQUFBQyxjQUFBO0FBQ0FsRixJQUFBQSxDQUFBLENBQUEsNEJBQUEsQ0FBQSxDQUFBMkIsSUFBQSxDQUFBLEVBQUE7QUFDQTNCLElBQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQUMsV0FBQSxDQUFBLGFBQUE7QUFDQVAsSUFBQUEsV0FBQTtBQUNBLEdBTEEsRUFLQW9DLFFBTEEsQ0FLQWlELFNBTEEsQ0FBQTtBQU1BL0UsRUFBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBNkIsUUFBQSxDQUFBLGdCQUFBLEVBQUFGLElBQUEsQ0FBQSxTQUFBLEVBQUFHLFFBQUEsQ0FBQWtELFFBQUE7QUFDQWhGLEVBQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQTJCLElBQUEsQ0FBQSxnQ0FBQSxFQUFBRyxRQUFBLENBQUFrRCxRQUFBO0FBRUFoRixFQUFBQSxDQUFBLENBQUEsUUFBQSxDQUFBLENBQUE2QixRQUFBLENBQUEsaUJBQUEsRUFBQUksTUFBQSxDQUFBK0MsUUFBQSxFQUFBbEQsUUFBQSxDQUFBaUQsU0FBQTtBQUVBOUYsRUFBQUEsUUFBQSxDQUFBRSxPQUFBLENBQUEsVUFBQUMsT0FBQSxFQUFBO0FBQ0EsUUFBQThELFFBQUEsR0FBQWxELENBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQTRFLElBQUEsQ0FBQSxNQUFBLEVBQUEsTUFBQXhGLE9BQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtBQUVBWSxJQUFBQSxDQUFBLENBQUEsU0FBQSxDQUFBLENBQUE2QixRQUFBLENBQUEsY0FBQSxFQUFBRixJQUFBLENBQUF2QyxPQUFBLENBQUEsTUFBQSxDQUFBLEVBQUEwQyxRQUFBLENBQUFvQixRQUFBO0FBRUEsUUFBQWlDLE1BQUEsR0FBQW5GLENBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTZCLFFBQUEsQ0FBQSxlQUFBLEVBQUFDLFFBQUEsQ0FBQW9CLFFBQUEsQ0FBQTtBQUNBNUQsSUFBQUEsS0FBQSxDQUFBSCxPQUFBLENBQUEsVUFBQUssSUFBQSxFQUFBO0FBQ0EsVUFBQTZFLEtBQUEsR0FBQXJFLENBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQThCLFFBQUEsQ0FBQXFELE1BQUEsQ0FBQTs7QUFDQSxVQUFBL0YsT0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBb0UsUUFBQSxDQUFBaEUsSUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUE7QUFDQSxZQUFBNEYsT0FBQSxHQUFBcEYsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBNkIsUUFBQSxDQUFBLGFBQUEsRUFBQThDLEdBQUEsQ0FBQSxPQUFBLEVBQUFuRixJQUFBLENBQUEsT0FBQSxDQUFBLEVBQUFtQyxJQUFBLENBQUFuQyxJQUFBLENBQUEsSUFBQSxDQUFBLEVBQUFzQyxRQUFBLENBQUF1QyxLQUFBLENBQUE7O0FBRUEsWUFBQTdFLElBQUEsQ0FBQSxVQUFBLENBQUEsRUFBQTtBQUNBNEYsVUFBQUEsT0FBQSxDQUFBUixJQUFBLENBQUEsVUFBQSxFQUFBLElBQUEsRUFBQS9DLFFBQUEsQ0FBQSxrQkFBQTtBQUNBO0FBQ0E7QUFDQSxLQVRBOztBQVdBLFFBQUEsQ0FBQXpDLE9BQUEsQ0FBQSxVQUFBLENBQUEsRUFBQTtBQUNBOEQsTUFBQUEsUUFBQSxDQUFBVyxFQUFBLENBQUEsT0FBQSxFQUFBLFVBQUFvQixLQUFBLEVBQUE7QUFDQUEsUUFBQUEsS0FBQSxDQUFBQyxjQUFBO0FBQ0E5RSxRQUFBQSxjQUFBLENBQUFoQixPQUFBLENBQUE7QUFDQVksUUFBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBQyxXQUFBLENBQUEsYUFBQTtBQUNBLE9BSkE7QUFLQSxLQU5BLE1BTUE7QUFDQWlELE1BQUFBLFFBQUEsQ0FBQVcsRUFBQSxDQUFBLE9BQUEsRUFBQSxVQUFBb0IsS0FBQSxFQUFBO0FBQ0FBLFFBQUFBLEtBQUEsQ0FBQUMsY0FBQSxHQURBLENBRUE7QUFDQSxPQUhBO0FBSUFoQyxNQUFBQSxRQUFBLENBQUFyQixRQUFBLENBQUEsa0JBQUE7QUFDQTs7QUFFQTdCLElBQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQWlDLE1BQUEsQ0FBQWlCLFFBQUEsRUFBQXBCLFFBQUEsQ0FBQWlELFNBQUE7QUFDQSxHQWhDQSxFQWZBLENBaURBOztBQUNBL0UsRUFBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBNkQsRUFBQSxDQUFBLE9BQUEsRUFBQSxZQUFBO0FBQ0E3RCxJQUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLENBQUFxRixXQUFBLENBQUEsYUFBQTtBQUNBLEdBRkE7QUFJQXJGLEVBQUFBLENBQUEsQ0FBQXlCLE1BQUEsQ0FBQSxDQUFBb0MsRUFBQSxDQUFBLFFBQUEsRUFBQSxVQUFBb0IsS0FBQSxFQUFBO0FBQ0EsUUFBQUssbUJBQUEsR0FBQXRGLENBQUEsQ0FBQXlCLE1BQUEsQ0FBQSxDQUFBOEQsU0FBQSxFQUFBOztBQUVBLFFBQUFELG1CQUFBLElBQUEsRUFBQSxFQUFBO0FBQ0F0RixNQUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLENBQUE2QixRQUFBLENBQUEsZUFBQTtBQUNBLEtBRkEsTUFFQTtBQUNBN0IsTUFBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBQyxXQUFBLENBQUEsZUFBQTtBQUNBO0FBQ0EsR0FSQTtBQVNBLENBL0RBLENBQUEsQyxDQ0FBO0FBQ0E7QUFDQTs7QUFFQSxJQUFBdUYsS0FBQSxHQUFBLFlBQUE7QUFDQSxNQUFBQyxXQUFBLEdBQUEsQ0FDQSxNQURBLEVBRUEsT0FGQSxFQUdBLE1BSEEsQ0FBQTtBQU1BLE1BQUFDLGNBQUEsR0FBQTtBQUNBLFlBQUE7QUFDQSxlQUFBLGlCQURBO0FBRUEsY0FBQTtBQUZBLEtBREE7QUFLQSxhQUFBO0FBQ0EsZUFBQSxZQURBO0FBRUEsY0FBQTtBQUZBLEtBTEE7QUFTQSxZQUFBO0FBQ0EsZUFBQSxhQURBO0FBRUEsY0FBQTtBQUZBO0FBVEEsR0FBQTs7QUFlQSxNQUFBQyxHQUFBLEdBQUEsU0FBQUEsR0FBQSxDQUFBQyxTQUFBLEVBQUFDLFNBQUEsRUFBQTtBQUNBQyxJQUFBQSxhQUFBLEdBQUFGLFNBQUE7QUFFQTVGLElBQUFBLENBQUEsQ0FBQSx1QkFBQSxDQUFBLENBQUEyQixJQUFBLENBQUErRCxjQUFBLENBQUFFLFNBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQTtBQUNBNUYsSUFBQUEsQ0FBQSxDQUFBLG9CQUFBLENBQUEsQ0FBQTJCLElBQUEsQ0FBQStELGNBQUEsQ0FBQUUsU0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBO0FBRUE1RixJQUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLENBQUFDLFdBQUEsQ0FBQSxhQUFBNEYsU0FBQSxFQUFBaEUsUUFBQSxDQUFBLGFBQUErRCxTQUFBLEVBTkEsQ0FRQTs7QUFDQSxRQUFBQSxTQUFBLEtBQUEsTUFBQSxFQUFBO0FBQ0FHLE1BQUFBLFlBQUEsQ0FBQUMsVUFBQSxDQUFBLE9BQUE7QUFDQSxLQUZBLE1BRUE7QUFDQUQsTUFBQUEsWUFBQSxDQUFBRSxPQUFBLENBQUEsT0FBQSxFQUFBTCxTQUFBO0FBQ0E7QUFDQSxHQWRBLENBdEJBLENBc0NBO0FBQ0E7OztBQUNBLE1BQUFFLGFBQUEsR0FBQUMsWUFBQSxDQUFBRyxPQUFBLENBQUEsT0FBQSxLQUFBQyxnQkFBQSxDQUFBbkcsQ0FBQSxDQUFBLDBCQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBb0csZ0JBQUEsQ0FBQSxTQUFBLEVBQUFDLE9BQUEsQ0FBQSxJQUFBLEVBQUEsRUFBQSxDQUFBOztBQUVBLE1BQUFQLGFBQUEsRUFBQTtBQUNBSCxJQUFBQSxHQUFBLENBQUFHLGFBQUEsRUFBQSxFQUFBLENBQUE7QUFDQTs7QUFFQTlGLEVBQUFBLENBQUEsQ0FBQSxZQUFBO0FBQ0FBLElBQUFBLENBQUEsQ0FBQSxrQkFBQSxDQUFBLENBQUE2RCxFQUFBLENBQUEsT0FBQSxFQUFBLFVBQUFvQixLQUFBLEVBQUE7QUFDQUEsTUFBQUEsS0FBQSxDQUFBQyxjQUFBLEdBREEsQ0FHQTs7QUFDQSxVQUFBb0IsY0FBQSxHQUFBYixXQUFBLENBQUFjLE9BQUEsQ0FBQVQsYUFBQSxDQUFBO0FBQ0EsVUFBQUYsU0FBQSxHQUFBSCxXQUFBLENBQUFhLGNBQUEsR0FBQSxDQUFBLENBQUEsSUFBQWIsV0FBQSxDQUFBLENBQUEsQ0FBQSxDQUxBLENBT0E7O0FBQ0FFLE1BQUFBLEdBQUEsQ0FBQUMsU0FBQSxFQUFBRSxhQUFBLENBQUE7QUFDQSxLQVRBO0FBVUEsR0FYQSxDQUFBO0FBWUEsQ0ExREEsRUFBQTs7QUNKQSxJQUFBdEUsR0FBQSxHQUFBLEVBQUE7QUFDQSxJQUFBTyxNQUFBO0FBRUEvQixDQUFBLENBQUEsWUFBQTtBQUNBK0IsRUFBQUEsTUFBQSxHQUFBL0IsQ0FBQSxDQUFBLFFBQUEsQ0FBQSxDQURBLENBR0E7O0FBQ0EsTUFBQSxpQkFBQUosU0FBQSxFQUFBO0FBQ0EsUUFBQSxpQkFBQUEsU0FBQSxFQUFBO0FBQ0FBLE1BQUFBLFNBQUEsQ0FBQTRHLFdBQUEsQ0FBQUMsS0FBQSxDQUFBO0FBQUEsZ0JBQUE7QUFBQSxPQUFBLEVBQUFDLElBQUEsQ0FBQSxVQUFBQyxVQUFBLEVBQUE7QUFDQSxZQUFBQSxVQUFBLENBQUEsT0FBQSxDQUFBLEtBQUEsU0FBQSxFQUFBO0FBQ0E7QUFDQWpILFVBQUFBLFdBQUE7QUFDQSxTQUhBLE1BR0E7QUFDQTtBQUNBTSxVQUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLENBQUE2QixRQUFBLENBQUEsZ0JBQUE7QUFFQSxjQUFBK0UsV0FBQSxHQUFBNUcsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBNkIsUUFBQSxDQUFBLFlBQUEsRUFBQUMsUUFBQSxDQUFBQyxNQUFBLENBQUE7QUFDQSxjQUFBOEUsT0FBQSxHQUFBN0csQ0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBNkIsUUFBQSxDQUFBLFFBQUEsRUFBQStDLElBQUEsQ0FBQSxNQUFBLEVBQUEsR0FBQSxFQUFBOUMsUUFBQSxDQUFBOEUsV0FBQSxDQUFBO0FBQ0E1RyxVQUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLENBQUE2QixRQUFBLENBQUEsZ0JBQUEsRUFBQUYsSUFBQSxDQUFBLFNBQUEsRUFBQUcsUUFBQSxDQUFBK0UsT0FBQTtBQUNBN0csVUFBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBMkIsSUFBQSxDQUFBLGdDQUFBLEVBQUFHLFFBQUEsQ0FBQStFLE9BQUE7QUFFQUEsVUFBQUEsT0FBQSxDQUFBaEQsRUFBQSxDQUFBLE9BQUEsRUFBQSxVQUFBb0IsS0FBQSxFQUFBO0FBQ0FBLFlBQUFBLEtBQUEsQ0FBQUMsY0FBQTtBQUNBeEYsWUFBQUEsV0FBQSxDQUFBLElBQUEsQ0FBQTtBQUNBLFdBSEE7QUFJQTtBQUNBLE9BbEJBO0FBbUJBLEtBcEJBLE1Bb0JBO0FBQ0FBLE1BQUFBLFdBQUE7QUFDQTtBQUNBO0FBQ0EsQ0E3QkEsQ0FBQSxDLENBK0JBOztBQUNBLElBQUEsbUJBQUFFLFNBQUEsRUFBQTtBQUNBLE1BQUFrSCxHQUFBLEtBQUEsWUFBQSxFQUFBO0FBQ0FyRixJQUFBQSxNQUFBLENBQUFzRixnQkFBQSxDQUFBLE1BQUEsRUFBQSxZQUFBO0FBQ0F2RixNQUFBQSxHQUFBLENBQUEsZ0JBQUEsQ0FBQSxHQUFBNUIsU0FBQSxDQUFBb0gsYUFBQSxDQUFBQyxRQUFBLENBQUEsb0JBQUEsQ0FBQTtBQUVBekYsTUFBQUEsR0FBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQWtGLElBQUEsQ0FBQSxVQUFBUSxZQUFBLEVBQUEsQ0FDQTtBQUNBLE9BRkEsRUFFQSxVQUFBQyxLQUFBLEVBQUEsQ0FDQTtBQUNBLE9BSkE7QUFLQSxLQVJBO0FBU0E7QUFDQSxDLENBRUE7OztBQUNBLElBQUF4RSxPQUFBO0FBQ0EsSUFBQXlFLGtCQUFBOztBQUVBLElBQUFDLHNCQUFBLEdBQUEsU0FBQUEsc0JBQUEsR0FBQTtBQUNBLFNBQUEsS0FBQTtBQUNBLE1BQUFqRixTQUFBLEdBQUF4QyxTQUFBLENBQUF5QyxNQUFBOztBQUVBLE1BQUFELFNBQUEsS0FBQSxJQUFBLEVBQUE7QUFDQTtBQUVBa0YsSUFBQUEsVUFBQSxDQUFBLFlBQUE7QUFDQUYsTUFBQUEsa0JBQUEsQ0FBQXBGLEtBQUE7QUFDQSxLQUZBLEVBRUEsSUFGQSxDQUFBO0FBR0EsR0FOQSxNQU1BO0FBQ0FvRixJQUFBQSxrQkFBQSxDQUFBcEYsS0FBQTtBQUNBaEMsSUFBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBNkIsUUFBQSxDQUFBLGVBQUEsRUFBQUYsSUFBQSxDQUFBLGFBQUEsRUFBQUcsUUFBQSxDQUFBc0Ysa0JBQUE7QUFDQTtBQUNBLENBZEE7O0FBZ0JBcEgsQ0FBQSxDQUFBeUIsTUFBQSxDQUFBLENBQUFvQyxFQUFBLENBQUEsZ0JBQUEsRUFBQXdELHNCQUFBLEUsQ0FFQTtBQUNBIiwiZmlsZSI6InZsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBzdGF0aW9ucyA9IFtcblx0e1xuXHRcdFwibmFtZVwiOiBcIkFudG9uaW8gQ2FybG9zXCIsXG5cdFx0XCJpZFwiOiBcImFudG9uaW8tY2FybG9zXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDIsIDM6IDIgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTExMzE1MzQ0MzkxMzE5LCAtNDMuMTcyMDUwOTk3NTk4MjQxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDNdXG5cdH0sXG5cdHtcblx0XHQvLyBcImRpc2FibGVkXCI6IHRydWUsXG5cdFx0XCJuYW1lXCI6IFwiQ2FtZXJpbm9cIixcblx0XHRcImlkXCI6IFwiY2FtZXJpbm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMzogOCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDE2OTgwNDYwMjIzODIsIC00My4xODM5ODM2MTQ5MzM0ODldLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNhbmRlbMOhcmlhXCIsXG5cdFx0XCJpZFwiOiBcImNhbmRlbGFyaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNiwgMzogNiB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDE3MjUwMjkzODQyNTksIC00My4xNzg4MDg2NjU0MTg2NzFdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNhcmlvY2FcIixcblx0XHRcImlkXCI6IFwiY2FyaW9jYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA0LCAzOiA0IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNzQ4NDUwNzI1MjgxMSwgLTQzLjE3NjY0NTUxODAzODkxN10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ2VudHJhbFwiLFxuXHRcdFwiaWRcIjogXCJjZW50cmFsXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDUsIDM6IDEwIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMjcwNDk2MDc0NDk1MiwgLTQzLjE5MjYyNTMxNDM3NzMzOF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ2lkYWRlIGRvIFNhbWJhXCIsXG5cdFx0XCJpZFwiOiBcImNpZGFkZS1kby1zYW1iYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTQxNzk5NTcxMjgwNjcsIC00My4xOTY4ODQwODIwNzg0NzZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNpbmVsw6JuZGlhXCIsXG5cdFx0XCJpZFwiOiBcImNpbmVsYW5kaWFcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMywgMzogMyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MTA3MzQwMDE4NDIyNDMsIC00My4xNzU0MjUzODczNjQ5MzJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkNvbG9tYm9cIixcblx0XHRcImlkXCI6IFwiY29sb21ib1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAyIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNTE3NTIxOTAwOTQxNSwgLTQzLjE3ODAxNjk2ODIyODgxOF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiQ29yZGVpcm8gZGEgR3Jhw6dhXCIsXG5cdFx0XCJpZFwiOiBcImNvcmRlaXJvLWRhLWdyYWNhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEzLCAyOiA4IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NzEwNDYyOTkyMzExNywgLTQzLjIwNDE3ODQwMzUzMzcwM10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIkNyaXN0aWFubyBPdHRvbmlcIixcblx0XHRcImlkXCI6IFwiY3Jpc3RpYW5vLW90dG9uaVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAzOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMzA2MTI3ODQ4MDY0OCwgLTQzLjE5MDc0OTEwOTQyMTQ4OV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyLCAzXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiRXF1YWRvclwiLFxuXHRcdFwiaWRcIjogXCJlcXVhZG9yXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE4LCAyOiAxMSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTc4OTQ1NjQ2ODc3ODIsIC00My4yMDQ4MDUwMTQ0NDA4MTVdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMSwgMl1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIkdhbWJvYVwiLFxuXHRcdFwiaWRcIjogXCJnYW1ib2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTYsIDI6IDYgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk3OTU5NDA4MzcyODQ1LCAtNDMuMTk5MzM2NjgzMjQ2MzAxXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJIYXJtb25pYVwiLFxuXHRcdFwiaWRcIjogXCJoYXJtb25pYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxNCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTU3NTQ0MzcyNzMzODYsIC00My4xOTE0Mjc2Mzk1ODQ0OTZdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDEsXG5cdFx0XCJsaW5lc1wiOiBbMV1cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlBhcmFkYSBkb3MgTXVzZXVzXCIsXG5cdFx0XCJpZFwiOiBcInBhcmFkYS1kb3MtbXVzZXVzXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDggfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk1OTQ2NTg2ODAyMjY0LCAtNDMuMTgxOTU1OTgwNTgxMjcyXSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQYXJhZGEgZG9zIE5hdmlvc1wiLFxuXHRcdFwiaWRcIjogXCJwYXJhZGEtZG9zLW5hdmlvc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiA5IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NDEzOTYyNTMwMzg3NSwgLTQzLjE4NzE4MTgzMDYxNzQ0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQZXJlaXJhIFJlaXNcIixcblx0XHRcImlkXCI6IFwicGVyZWlyYS1yZWlzXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE3LCAyOiAxMCB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTY2NDcwNjQ5NjA0MywgLTQzLjIwMTc3MzExMTUyMzU5M10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJhw6dhIFhWXCIsXG5cdFx0XCJpZFwiOiBcInByYWNhLXh2XCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTAyMDcwMTI4OTQ1ODQ4LCAtNDMuMTczMTE3Mzk1NzgzODc2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJQcmFpYSBGb3Jtb3NhXCIsXG5cdFx0XCJpZFwiOiBcInByYWlhLWZvcm1vc2FcIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTAsIDI6IDEzIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMzE3NzE1MjM4ODA1NywgLTQzLjIwODE2MTk2NDkwMjMwM10sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUHJvdmlkw6puY2lhXCIsXG5cdFx0XCJpZFwiOiBcInByb3ZpZGVuY2lhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDE1IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjg5NzQ4OTkyMjAxNDM4MywgLTQzLjE5NjcwMTQwMDg5MDAzNV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiUm9kb3Zpw6FyaWFcIixcblx0XHRcImlkXCI6IFwicm9kb3ZpYXJpYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxOSwgMjogMTIgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk4ODA1NTc0MjUxNzk5LCAtNDMuMjA3MzQyOTQxNDc1OTg2XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzEsIDJdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTYWFyYVwiLFxuXHRcdFwiaWRcIjogXCJzYWFyYVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiA0IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNTkxMjEwODQ2MDI1MywgLTQzLjE4NzMyMDc4MjIyODIwNV0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0Ly8gXCJkaXNhYmxlZFwiOiB0cnVlLFxuXHRcdFwibmFtZVwiOiBcIlNhbnRhIFJpdGFcIixcblx0XHRcImlkXCI6IFwic2FudGEtcml0YVwiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAzOiA3IH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwMDU5NDE2NzQxMDY0OSwgLTQzLjE4MTUwOTA0OTg1NDIwNl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFszXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FudG8gQ3Jpc3RvXCIsXG5cdFx0XCJpZFwiOiBcInNhbnRvLWNyaXN0b1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAxOiAxMiwgMjogNyB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi44OTUzMjcyODIwMDIxNDYsIC00My4yMDAyNTkxODE3NTU3NF0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMSxcblx0XHRcImxpbmVzXCI6IFsxLCAyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiU2FudG9zIER1bW9udFwiLFxuXHRcdFwiaWRcIjogXCJzYW50b3MtZHVtb250XCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDEsIDM6IDEgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuOTEyMjg2ODc0OTYyNDAxLCAtNDMuMTY3NjMyMjU5NTQ1ODRdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlPDo28gQmVudG9cIixcblx0XHRcImlkXCI6IFwic2FvLWJlbnRvXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDE6IDcgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk4NjQ4MDk2MDUxMDEyLCAtNDMuMTc5OTY0MzExNzY0ODg0XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAyLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJTZXRlIGRlIFNldGVtYnJvXCIsXG5cdFx0XCJpZFwiOiBcInNldGUtZGUtc2V0ZW1icm9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogNSwgMzogNSB9LFxuXHRcdFwiY29vcmRpbmF0ZXNcIjogWy0yMi45MDUzMDU5MDA5Nzc4OTcsIC00My4xNzc0NjM4MTYzNDY5MjJdLFxuXHRcdC8vIFwicGxhdGZvcm1zXCI6IDIsXG5cdFx0XCJsaW5lc1wiOiBbMSwgM11cblx0fSxcblx0e1xuXHRcdFwibmFtZVwiOiBcIlRpcmFkZW50ZXNcIixcblx0XHRcImlkXCI6IFwidGlyYWRlbnRlc1wiLFxuXHRcdC8vIFwib3JkZXJcIjogeyAyOiAzIH0sXG5cdFx0XCJjb29yZGluYXRlc1wiOiBbLTIyLjkwNjU3ODIyMjAyNjExNiwgLTQzLjE4Mjg1NDIzNjU1NzgwMl0sXG5cdFx0Ly8gXCJwbGF0Zm9ybXNcIjogMixcblx0XHRcImxpbmVzXCI6IFsyXVxuXHR9LFxuXHR7XG5cdFx0XCJuYW1lXCI6IFwiVXRvcGlhIEFxdWFSaW9cIixcblx0XHRcImlkXCI6IFwidXRvcGlhLWFxdWFyaW9cIixcblx0XHQvLyBcIm9yZGVyXCI6IHsgMTogMTAgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODkzMDk1NDcxOTk5NjEyLCAtNDMuMTkwMjM2OTA3MjEzMjE5XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzFdXG5cdH0sXG5cdHtcblx0XHRcIm5hbWVcIjogXCJWaWxhIE9sw61tcGljYVwiLFxuXHRcdFwiaWRcIjogXCJ2aWxhLW9saW1waWNhXCIsXG5cdFx0Ly8gXCJvcmRlclwiOiB7IDI6IDkgfSxcblx0XHRcImNvb3JkaW5hdGVzXCI6IFstMjIuODk5MDU2NTcyNjQ2NTMzLCAtNDMuMTk5NjQzNTI5NDk1Mjk3XSxcblx0XHQvLyBcInBsYXRmb3Jtc1wiOiAxLFxuXHRcdFwibGluZXNcIjogWzJdXG5cdH1cbl07XG5cbmxldCBzdGF0aW9uX2luZGV4ID0ge307XG5zdGF0aW9ucy5mb3JFYWNoKChzdGF0aW9uKSA9PiB7XG5cdGxldCBzdGF0aW9uX25hbWUgPSBzdGF0aW9uW1wibmFtZVwiXTtcblx0c3RhdGlvbl9pbmRleFtzdGF0aW9uX25hbWVdID0gc3RhdGlvbjtcbn0pO1xuIiwibGV0IGxpbmVzID0gW1xuXHR7XG5cdFx0XCJpZFwiOiAxLFxuXHRcdFwibmFtZVwiOiBcIkxpbmhhIDFcIixcblx0XHRcImNvbG9yXCI6IFwiIzY4YjlmYlwiLFxuXHRcdC8vIFwiZGlyZWN0aW9uc1wiOiBbXG5cdFx0Ly8gXHRcIlNhbnRvcyBEdW1vbnRcIixcblx0XHQvLyBcdFwiUHJhaWEgRm9ybW9zYVwiXG5cdFx0Ly8gXVxuXHR9LFxuXHR7XG5cdFx0XCJpZFwiOiAyLFxuXHRcdFwibmFtZVwiOiBcIkxpbmhhIDJcIixcblx0XHRcImNvbG9yXCI6IFwiIzczY2EzZlwiLFxuXHRcdC8vIFwiZGlyZWN0aW9uc1wiOiBbXG5cdFx0Ly8gXHRcIlByYcOnYSBYVlwiLFxuXHRcdC8vIFx0XCJQcmFpYSBGb3Jtb3NhXCJcblx0XHQvLyBdXG5cdH0sXG5cdHtcblx0XHQvLyBcImRpc2FibGVkXCI6IHRydWUsXG5cdFx0XCJpZFwiOiAzLFxuXHRcdFwibmFtZVwiOiBcIkxpbmhhIDNcIixcblx0XHRcImNvbG9yXCI6IFwiI2YzYTIzMFwiLFxuXHRcdC8vIFwiZGlyZWN0aW9uc1wiOiBbXG5cdFx0Ly8gXHRcIlNhbnRvcyBEdW1vbnRcIixcblx0XHQvLyBcdFwiQ2VudHJhbFwiXG5cdFx0Ly8gXVxuXHR9XG5dO1xuXG5sZXQgbGluZV9pbmRleCA9IHsgfTtcbmxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcblx0bGV0IGxpbmVfbmFtZSA9IGxpbmVbXCJuYW1lXCJdO1xuXHRsaW5lX2luZGV4W2xpbmVfbmFtZV0gPSBsaW5lO1xufSk7XG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBnZXQgbG9jYXRpb24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIFBlZ2EgYSBsb2NhbGl6YcOnw6NvIGRvIHVzdcOhcmlvXG5jb25zdCBnZXRMb2NhdGlvbiA9IChpc19pbml0aWFsID0gZmFsc2UpID0+IHtcblx0bmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcblx0XHQvLyBTZSB2aWVyIGRvIG1vZG8gaW5pY2lhbCwgZW5jZXJyYSBlbGVcblx0XHRpZiAoaXNfaW5pdGlhbCkge1xuXHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0taW5pdGlhbFwiKTtcblx0XHR9XG5cblx0XHQvLyBEZXNjb2JyZSBhIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hIGUgcHJvY3VyYSBhcyBwcsOzeGltYXMgcGFydGlkYXNcblx0XHRsZXQgbmVhcmVzdF9zdGF0aW9uID0gbmVhcmVzdFN0YXRpb24oW3Bvc2l0aW9uW1wiY29vcmRzXCJdW1wibGF0aXR1ZGVcIl0sIHBvc2l0aW9uW1wiY29vcmRzXCJdW1wibG9uZ2l0dWRlXCJdXSk7XG5cdFx0bmV4dERlcGFydHVyZXMobmVhcmVzdF9zdGF0aW9uKTtcblx0fSk7XG59O1xuIiwiLy8gRXN0YcOnw6NvIG1haXMgcHLDs3hpbWFcbmNvbnN0IGRlZzJyYWQgPSAoZGVnKSA9PiB7XG5cdHJldHVybiBkZWcgKiAoTWF0aC5QSSAvIDE4MCk7XG59O1xuXG5jb25zdCBuZWFyZXN0U3RhdGlvbiA9ICh1c2VyX2Nvb3JkaW5hdGVzKSA9PiB7XG5cdGxldCB1c2VyX2xhdGl0dWRlID0gZGVnMnJhZCh1c2VyX2Nvb3JkaW5hdGVzWzBdKTtcblx0bGV0IHVzZXJfbG9uZ2l0dWRlID0gZGVnMnJhZCh1c2VyX2Nvb3JkaW5hdGVzWzFdKTtcblxuXHRsZXQgUiA9IDYzNzE7XG5cblx0bGV0IHNob3J0ZXN0X2Rpc3RhbmNlID0gbnVsbDtcblx0bGV0IG5lYXJlc3Rfc3RhdGlvbiA9IG51bGw7XG5cblx0c3RhdGlvbnMuZm9yRWFjaCgoc3RhdGlvbikgPT4ge1xuXHRcdGlmICghc3RhdGlvbltcImRpc2FibGVkXCJdKSB7XG5cdFx0XHRsZXQgc3RhdGlvbl9sYXRpdHVkZSA9IGRlZzJyYWQoc3RhdGlvbltcImNvb3JkaW5hdGVzXCJdWzBdKTtcblx0XHRcdGxldCBzdGF0aW9uX2xvbmdpdHVkZSA9IGRlZzJyYWQoc3RhdGlvbltcImNvb3JkaW5hdGVzXCJdWzFdKTtcblxuXHRcdFx0bGV0IHggPSAoc3RhdGlvbl9sb25naXR1ZGUgLSB1c2VyX2xvbmdpdHVkZSkgKiBNYXRoLmNvcygodXNlcl9sYXRpdHVkZSArIHN0YXRpb25fbGF0aXR1ZGUpIC8gMik7XG5cdFx0XHRsZXQgeSA9IChzdGF0aW9uX2xhdGl0dWRlIC0gdXNlcl9sYXRpdHVkZSk7XG5cdFx0XHRsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSkgKiBSO1xuXG5cdFx0XHRpZiAoIXNob3J0ZXN0X2Rpc3RhbmNlIHx8IGRpc3RhbmNlIDwgc2hvcnRlc3RfZGlzdGFuY2UpIHtcblx0XHRcdFx0c2hvcnRlc3RfZGlzdGFuY2UgPSBkaXN0YW5jZTtcblx0XHRcdFx0bmVhcmVzdF9zdGF0aW9uID0gc3RhdGlvbjtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBuZWFyZXN0X3N0YXRpb247XG59O1xuIiwiLy8gUHLDs3hpbWFzIHBhcnRpZGFzXG5jb25zdCBuZXh0RGVwYXJ0dXJlcyA9IChzdGF0aW9uKSA9PiB7XG5cdGxldCBkZXBhcnR1cmVzO1xuXG5cdGxldCBsaW5lX2Vtb2ppID0ge1xuXHRcdDE6IFwiMe+4j+KDo1wiLFxuXHRcdDI6IFwiMu+4j+KDo1wiLFxuXHRcdDM6IFwiM++4j+KDo1wiXG5cdH07XG5cblx0Ly8gRGVzbGlnYSBpbnRlcnZhbG9zIGUgZXZlbnRvcyBleGlzdGVudGVzXG5cdGNsZWFySW50ZXJ2YWwoY3VlW1wiaW50ZXJ2YWwtZGVwYXJ0dXJlc1wiXSk7XG5cdGNsZWFySW50ZXJ2YWwoY3VlW1wiaW50ZXJ2YWwtbGFzdC11cGRhdGVkXCJdKTtcblxuXHQkKHdpbmRvdykub2ZmKFwidmlzaWJpbGl0eWNoYW5nZSBvbmxpbmVcIik7XG5cdC8vICQod2luZG93KS5vZmYoXCJvbmxpbmVcIik7XG5cblx0Ly8gQ29sb2NhIG8gbm9tZSBkYSBlc3Rhw6fDo28gbm8gYXBwYmFyXG5cdCQoXCIuc3RhdGlvbnMgaDEgLnN0YXRpb24tbmFtZVwiKS50ZXh0KHN0YXRpb25bXCJuYW1lXCJdKTtcblxuXHQvLyBJbnNpcmUgYW5pbWHDp8OjbyBkZSBsb2FkXG5cdGxldCAkbG9hZGluZyA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwibG9hZGluZ1wiKTtcblx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJhbmltYXRpb25cIikuYXBwZW5kVG8oJGxvYWRpbmcpO1xuXHQkcGFuZWwuZW1wdHkoKS5hcHBlbmQoJGxvYWRpbmcpO1xuXG5cdC8vIEF0dWFsaXphw6fDo29cblx0Y29uc3QgbGFzdFVwZGF0ZWQgPSAoKSA9PiB7XG5cdFx0bGV0ICRiYWRnZSA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdHVzLWJhZGdlXCIpO1xuXHRcdGxldCBjb25uZWN0ZWQgPSBuYXZpZ2F0b3Iub25MaW5lO1xuXG5cdFx0Ly8gVGVtcG8gZW0gc2VndW5kb3MgZGVzZGUgYSDDumx0aW1hIGF0dWFsaXphw6fDo29cblx0XHRsZXQgc2Vjb25kc19zaW5jZV91cGRhdGUgPSBtb21lbnQoKS5kaWZmKGRlcGFydHVyZXNbXCJsYXN0VXBkYXRlZFwiXSwgXCJzZWNvbmRzXCIpO1xuXG5cdFx0Ly8gU2UgdGl2ZXIgc2lkbyBhdHVhbGl6YWRvIGjDoSBtZW5vcyBkZSA2MCBzZWd1bmRvcywgbW9zdHJhIFRlbXBvIFJlYWxcblx0XHRpZiAoc2Vjb25kc19zaW5jZV91cGRhdGUgPD0gNjApIHtcblx0XHRcdCRiYWRnZS5hZGRDbGFzcyhcIi1zdGF0ZS0tcmVhbC10aW1lXCIpLnRleHQoXCJUZW1wbyByZWFsXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgbGFzdF91cGRhdGVkID0gXCJBdHVhbGl6YWRvIFwiICsgbW9tZW50KGRlcGFydHVyZXNbXCJsYXN0VXBkYXRlZFwiXSkuZnJvbU5vdyh0cnVlKSArIFwiIGF0csOhc1wiO1xuXHRcdFx0JGJhZGdlLnRleHQobGFzdF91cGRhdGVkKTtcblx0XHR9XG5cblx0XHQkc3RhdHVzLmVtcHR5KCkuYXBwZW5kKCRiYWRnZSk7XG5cdH07XG5cblx0Y29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcblx0XHQvLyBTw7MgY2FycmVnYSBzZSBlc3RpdmVyIGNvbSBmb2NvXG5cdFx0aWYgKGRvY3VtZW50LmhpZGRlbiA9PT0gdHJ1ZSB8fCBuYXZpZ2F0b3Iub25MaW5lID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIENhcnJlZ2Egb3MgZGFkb3Ncblx0XHQkLmdldEpTT04oXCJodHRwczovL2VtaXRyZW1tdXMuY29tLy0vdmx0L2RlcGFydHVyZXM/Y2FsbGJhY2s9P1wiLCB7XG5cdFx0XHRcInN0YXRpb25cIjogc3RhdGlvbltcImlkXCJdLFxuXHRcdFx0Ly8gXCJlbnZcIjogXCJkZXZcIlxuXHRcdH0pLmRvbmUoKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRkZXBhcnR1cmVzID0gcmVzcG9uc2U7XG5cblx0XHRcdGxldCAkc3RhdGlvbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdGlvblwiKTtcblx0XHRcdGxldCBkaXJlY3Rpb25zID0gWyBdO1xuXHRcdFx0bGV0IGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uID0geyB9O1xuXG5cdFx0XHQvLyBPcmdhbml6YSBhcyBwYXJ0aWRhcyBwb3IgZGVzdGlub1xuXHRcdFx0ZGVwYXJ0dXJlc1tcImxpbmVzXCJdLmZvckVhY2goKGxpbmUpID0+IHtcblx0XHRcdFx0bGluZVtcImRpcmVjdGlvbnNcIl0uZm9yRWFjaCgoZGlyZWN0aW9uKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGRpcmVjdGlvbl90aXRsZSA9IGRpcmVjdGlvbltcIm5hbWVcIl07XG5cblx0XHRcdFx0XHRpZiAoZGlyZWN0aW9uW1wiZXRhc1wiXS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWRpcmVjdGlvbnMuaW5jbHVkZXMoZGlyZWN0aW9uX3RpdGxlKSkge1xuXHRcdFx0XHRcdFx0XHRkaXJlY3Rpb25zLnB1c2goZGlyZWN0aW9uX3RpdGxlKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aWYgKCFkZXBhcnR1cmVzX2J5X2RpcmVjdGlvbltkaXJlY3Rpb25fdGl0bGVdKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0gPSBbIF07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGRpcmVjdGlvbltcImV0YXNcIl0uZm9yRWFjaCgodHJhaW4pID0+IHtcblx0XHRcdFx0XHRcdFx0dHJhaW5bXCJsaW5lXCJdID0gbGluZVtcIm5hbWVcIl07XG5cdFx0XHRcdFx0XHRcdGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl90aXRsZV0ucHVzaCh0cmFpbik7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIE1vbnRhIGFzIHBhcnRpZGFzXG5cdFx0XHRsZXQgJGRlcGFydHVyZXMgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImRlcGFydHVyZXNcIikuYXBwZW5kVG8oJHN0YXRpb24pO1xuXHRcdFx0bGV0ICR0aXRsZSA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGVwYXJ0dXJlcy10aXRsZVwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRcdH0pLmFwcGVuZFRvKCRkZXBhcnR1cmVzKTtcblx0XHRcdCQoXCI8c3BhbiAvPlwiKS50ZXh0KFwiUHLDs3hpbW9zIHRyZW5zXCIpLmFwcGVuZFRvKCR0aXRsZSk7XG5cblx0XHRcdGxldCBzaGFyZV90ZXh0ID0gW1wiUHLDs3hpbW9zIHRyZW5zXCIsIFwi8J+aiSAqXCIgKyBzdGF0aW9uW1wibmFtZVwiXSArIFwiKlwiLCBcIlwiXTtcblxuXHRcdFx0Ly8gZGlyZWN0aW9ucy5zb3J0KCk7XG5cdFx0XHRkaXJlY3Rpb25zLmZvckVhY2goKGRpcmVjdGlvbikgPT4ge1xuXHRcdFx0XHRsZXQgJGRpcmVjdGlvbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiZGlyZWN0aW9uXCIpLmFwcGVuZFRvKCRkZXBhcnR1cmVzKTtcblx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJkaXJlY3Rpb24tY2FwdGlvblwiKS50ZXh0KFwiRGVzdGlub1wiKS5hcHBlbmRUbygkZGlyZWN0aW9uKTtcblxuXHRcdFx0XHRsZXQgZXRhcyA9IGRlcGFydHVyZXNfYnlfZGlyZWN0aW9uW2RpcmVjdGlvbl07XG5cdFx0XHRcdGV0YXMuc29ydCgoYSwgYikgPT4geyByZXR1cm4gYVtcInNlY29uZHNcIl0gLSBiW1wic2Vjb25kc1wiXSB9KTtcblxuXHRcdFx0XHRldGFzLmZvckVhY2goKHRyYWluKSA9PiB7XG5cdFx0XHRcdFx0bGV0ICR0cmFpbiA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwidHJhaW5cIikuYXBwZW5kVG8oJGRpcmVjdGlvbik7XG5cdFx0XHRcdFx0bGV0ICRsaW5lID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpbi1saW5lXCIpLmFwcGVuZFRvKCR0cmFpbik7XG5cdFx0XHRcdFx0bGV0IGlzX2FwcHJvYWNoaW5nID0gdHJhaW5bXCJzZWNvbmRzXCJdIDwgMjU7XG5cblx0XHRcdFx0XHRsZXQgbGluZSA9IGxpbmVfaW5kZXhbdHJhaW5bXCJsaW5lXCJdXTtcblx0XHRcdFx0XHRsZXQgZGVwYXJ0dXJlX2NvdW50ZG93biA9IChpc19hcHByb2FjaGluZz8gXCJBZ29yYVwiIDogTWF0aC5yb3VuZCh0cmFpbltcInNlY29uZHNcIl0gLyA2MCkgKyBcIjxzcGFuPm1pbjwvc3Bhbj5cIik7XG5cdFx0XHRcdFx0bGV0IGRlcGFydHVyZV90aW1lID0gbW9tZW50KHRyYWluW1wiYXJyaXZhbFRpbWVcIl0pLmZvcm1hdChcIkhIOm1tXCIpO1xuXG5cdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJsaW5lLXNoaWVsZFwiKS5jc3MoXCJjb2xvclwiLCBsaW5lW1wiY29sb3JcIl0pLmF0dHIoXCJ0aXRsZVwiLCBcIkxpbmhhIFwiICsgbGluZVtcImlkXCJdKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSkudGV4dChsaW5lW1wiaWRcIl0pLmFwcGVuZFRvKCRsaW5lKTtcblx0XHRcdFx0XHQkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcInRyYWluLWRpcmVjdGlvblwiKS5hdHRyKFwidGl0bGVcIiwgXCJUcmVtIFwiICsgdHJhaW5bXCJ0cmFpblwiXSkudGV4dChkaXJlY3Rpb24pLmFwcGVuZFRvKCR0cmFpbik7XG5cdFx0XHRcdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJ0cmFpbi1ldGFcIikuYXR0cihcInRpdGxlXCIsIGRlcGFydHVyZV90aW1lKS5odG1sKGRlcGFydHVyZV9jb3VudGRvd24pLmFwcGVuZFRvKCR0cmFpbik7XG5cblx0XHRcdFx0XHRpZiAoaXNfYXBwcm9hY2hpbmcpIHtcblx0XHRcdFx0XHRcdCR0cmFpbi5hZGRDbGFzcyhcIi1zdGF0ZS0tYXBwcm9hY2hpbmdcIik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gVGV4dG8gcGFyYSBjb21wYXJ0aWxoYW1lbnRvXG5cdFx0XHRcdFx0c2hhcmVfdGV4dC5wdXNoKGxpbmVfZW1vamlbbGluZVtcImlkXCJdXSArIFwiIFwiICsgZGlyZWN0aW9uICsgXCIgXCIgKyBkZXBhcnR1cmVfdGltZSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIENvbXBhcnRpbGhhclxuXHRcdFx0XHQvLyBpZiAobmF2aWdhdG9yLnNoYXJlKSB7XG5cdFx0XHRcdC8vIFx0bGV0IGxvbmdwcmVzcztcblx0XHRcdFx0Ly8gXHRsZXQgbG9uZ3ByZXNzX2RlbGF5ID0gMTMwMDtcblxuXHRcdFx0XHQvLyBcdCRkaXJlY3Rpb24ub24oXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdC8vIFx0XHRsb25ncHJlc3MgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0Ly8gXHRcdFx0bmF2aWdhdG9yLnNoYXJlKHtcblx0XHRcdFx0Ly8gXHRcdFx0XHR0ZXh0OiBzaGFyZV90ZXh0LmpvaW4oXCJcXG5cIilcblx0XHRcdFx0Ly8gXHRcdFx0fSk7XG5cdFx0XHRcdC8vIFx0XHR9LCBsb25ncHJlc3NfZGVsYXkpO1xuXHRcdFx0XHQvLyBcdH0pLm9uKFwibW91c2V1cCBtb3VzZW91dFwiLCAoKSA9PiB7XG5cdFx0XHRcdC8vIFx0XHQvLyBjbGVhckludGVydmFsKGxvbmdwcmVzcyk7XG5cdFx0XHRcdC8vIFx0fSk7XG5cdFx0XHRcdC8vIH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBFc3RhZG8gZGEgY29uZXjDo28gZSBob3JhIGRhIMO6bHRpbWEgYXR1YWxpemHDp8Ojb1xuXHRcdFx0JHN0YXR1cyA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdHVzXCIpLmFwcGVuZFRvKCR0aXRsZSk7XG5cdFx0XHQvLyAkY29ubmVjdGlvbl9zdGF0dXMgPSAkKFwiPGRpdiAvPlwiKS5hZGRDbGFzcyhcImNvbm5lY3Rpb24tc3RhdHVzXCIpLmFwcGVuZFRvKCRzdGF0dXMpO1xuXHRcdFx0Ly8gJGxhc3RfdXBkYXRlZCA9ICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwibGFzdC11cGRhdGVkXCIpLmFwcGVuZFRvKCRzdGF0dXMpO1xuXHRcdFx0bGFzdFVwZGF0ZWQoKTtcblxuXHRcdFx0Ly8gTGltcGEgbyBwYWluZWwgZSBpbnNlcmUgb3Mgbm92b3MgZGFkb3Ncblx0XHRcdCRwYW5lbC5lbXB0eSgpLmFwcGVuZCgkc3RhdGlvbik7XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlV2luZG93ID0gKCkgPT4ge1xuXHRcdGlmIChkb2N1bWVudC5oaWRkZW4gPT09IGZhbHNlICYmIG5hdmlnYXRvci5vbkxpbmUgPT09IHRydWUpIHtcblx0XHRcdGxhc3RVcGRhdGVkKCk7XG5cdFx0XHRnZXREYXRhKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGdldERhdGEoKTtcblxuXHQvLyBDcmlhIG5vdm9zIGludGVydmFsb3MgZSBldmVudG9zXG5cdC8vIGN1ZVtcImludGVydmFsLWRlcGFydHVyZXNcIl0gPSBzZXRJbnRlcnZhbChnZXREYXRhLCAxNTAwMCk7IC8vIFRFTVBcblx0Ly8gY3VlW1wiaW50ZXJ2YWwtbGFzdC11cGRhdGVkXCJdID0gc2V0SW50ZXJ2YWwobGFzdFVwZGF0ZWQsIDUwMDApO1xuXG5cdCQod2luZG93KS5vbihcIm9ubGluZSB2aXNpYmlsaXR5Y2hhbmdlXCIsIHVwZGF0ZVdpbmRvdyk7XG59O1xuIiwiJChmdW5jdGlvbigpIHtcblx0Ly8gTW9udGEgbGlzdGEgZGUgcGFyYWRhcyBlIGVzdGHDp8O1ZXNcblx0bGV0ICRzdGF0aW9ucyA9ICQoXCIuc3RhdGlvbnMgdWxcIik7XG5cblx0bGV0ICRuZWFyZXN0ID0gJChcIjxhIC8+XCIpLmF0dHIoXCJocmVmXCIsIFwiI1wiKS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0JChcIi5zdGF0aW9ucyBoMSAuc3RhdGlvbi1uYW1lXCIpLnRleHQoXCJcIik7XG5cdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0XHRnZXRMb2NhdGlvbigpO1xuXHR9KS5hcHBlbmRUbygkc3RhdGlvbnMpO1xuXHQkKFwiPGkgLz5cIikuYWRkQ2xhc3MoXCJtYXRlcmlhbC1pY29uc1wiKS50ZXh0KFwibmVhcl9tZVwiKS5hcHBlbmRUbygkbmVhcmVzdCk7XG5cdCQoXCI8c3BhbiAvPlwiKS50ZXh0KFwiTG9jYWxpemFyIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXCIpLmFwcGVuZFRvKCRuZWFyZXN0KTtcblxuXHQkKFwiPGxpIC8+XCIpLmFkZENsYXNzKFwibmVhcmVzdC1zdGF0aW9uXCIpLmFwcGVuZCgkbmVhcmVzdCkuYXBwZW5kVG8oJHN0YXRpb25zKTtcblxuXHRzdGF0aW9ucy5mb3JFYWNoKChzdGF0aW9uKSA9PiB7XG5cdFx0bGV0ICRzdGF0aW9uID0gJChcIjxhIC8+XCIpLmF0dHIoXCJocmVmXCIsIFwiI1wiICsgc3RhdGlvbltcImlkXCJdKTtcblxuXHRcdCQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwic3RhdGlvbi1uYW1lXCIpLnRleHQoc3RhdGlvbltcIm5hbWVcIl0pLmFwcGVuZFRvKCRzdGF0aW9uKTtcblxuXHRcdGxldCAkbGluZXMgPSAkKFwiPHVsIC8+XCIpLmFkZENsYXNzKFwic3RhdGlvbi1saW5lc1wiKS5hcHBlbmRUbygkc3RhdGlvbik7XG5cdFx0bGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuXHRcdFx0bGV0ICRsaW5lID0gJChcIjxsaSAvPlwiKS5hcHBlbmRUbygkbGluZXMpO1xuXHRcdFx0aWYgKHN0YXRpb25bXCJsaW5lc1wiXS5pbmNsdWRlcyhsaW5lW1wiaWRcIl0pKSB7XG5cdFx0XHRcdGxldCAkc2hpZWxkID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJsaW5lLXNoaWVsZFwiKS5jc3MoXCJjb2xvclwiLCBsaW5lW1wiY29sb3JcIl0pLnRleHQobGluZVtcImlkXCJdKS5hcHBlbmRUbygkbGluZSk7XG5cblx0XHRcdFx0aWYgKGxpbmVbXCJkaXNhYmxlZFwiXSkge1xuXHRcdFx0XHRcdCRzaGllbGQuYXR0cihcImRpc2FibGVkXCIsIHRydWUpLmFkZENsYXNzKFwiLXN0YXRlLS1kaXNhYmxlZFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0aWYgKCFzdGF0aW9uW1wiZGlzYWJsZWRcIl0pIHtcblx0XHRcdCRzdGF0aW9uLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdG5leHREZXBhcnR1cmVzKHN0YXRpb24pO1xuXHRcdFx0XHQkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIi1tb2RlLS1saXN0XCIpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRzdGF0aW9uLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdC8vICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLW1vZGUtLWxpc3RcIik7XG5cdFx0XHR9KTtcblx0XHRcdCRzdGF0aW9uLmFkZENsYXNzKFwiLXN0YXRlLS1kaXNhYmxlZFwiKTtcblx0XHR9XG5cblx0XHQkKFwiPGxpIC8+XCIpLmFwcGVuZCgkc3RhdGlvbikuYXBwZW5kVG8oJHN0YXRpb25zKTtcblx0fSk7XG5cblx0Ly8gTmF2ZWdhw6fDo29cblx0JChcIi5hcHBiYXJcIikub24oXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0JChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCItbW9kZS0tbGlzdFwiKTtcblx0fSk7XG5cblx0JCh3aW5kb3cpLm9uKFwic2Nyb2xsXCIsIChldmVudCkgPT4ge1xuXHRcdGxldCBzY3JvbGxfdG9wX3Bvc2l0aW9uID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG5cdFx0aWYgKHNjcm9sbF90b3BfcG9zaXRpb24gPj0gMTIpIHtcblx0XHRcdCQoXCJib2R5XCIpLmFkZENsYXNzKFwiLW1vZGUtLXNjcm9sbFwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCItbW9kZS0tc2Nyb2xsXCIpO1xuXHRcdH1cblx0fSk7XG59KTtcbiIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gdGhlbWUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5sZXQgVGhlbWUgPSAoKCkgPT4ge1xyXG4gICAgbGV0IHRoZW1lX29yZGVyID0gW1xyXG4gICAgICAgIFwiYXV0b1wiLFxyXG4gICAgICAgIFwibGlnaHRcIixcclxuICAgICAgICBcImRhcmtcIlxyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgdGhlbWVfc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgXCJhdXRvXCI6IHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRlbWEgYXV0b23DoXRpY29cIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiYnJpZ2h0bmVzc19hdXRvXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibGlnaHRcIjoge1xyXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiVGVtYSBjbGFyb1wiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJicmlnaHRuZXNzXzVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkYXJrXCI6IHtcclxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRlbWEgZXNjdXJvXCIsXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImJyaWdodG5lc3NfNFwiXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHNldCA9IChuZXdfdGhlbWUsIG9sZF90aGVtZSkgPT4ge1xyXG4gICAgICAgIGN1cnJlbnRfdGhlbWUgPSBuZXdfdGhlbWU7XHJcblxyXG4gICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lIHNwYW5cIikudGV4dCh0aGVtZV9zZXR0aW5nc1tuZXdfdGhlbWVdW1widGl0bGVcIl0pO1xyXG4gICAgICAgICQoXCIuc2V0dGluZ3MgLnRoZW1lIGlcIikudGV4dCh0aGVtZV9zZXR0aW5nc1tuZXdfdGhlbWVdW1wiaWNvblwiXSk7XHJcblxyXG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiLXRoZW1lLS1cIiArIG9sZF90aGVtZSkuYWRkQ2xhc3MoXCItdGhlbWUtLVwiICsgbmV3X3RoZW1lKTtcclxuXHJcbiAgICAgICAgLy8gU2FsdmEgY29uZmlndXJhw6fDo28gbm8gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgaWYgKG5ld190aGVtZSA9PT0gXCJhdXRvXCIpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0aGVtZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIG5ld190aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBDb25mZXJlIHNlIGrDoSBow6EgdGVtYSBzYWx2byBubyBsb2NhbFN0b3JhZ2UuXHJcbiAgICAvLyBTZSBuw6NvIGhvdXZlciwgcGVnYSBvIHBhZHLDo28gZG8gc2lzdGVtYVxyXG4gICAgbGV0IGN1cnJlbnRfdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIHx8IGdldENvbXB1dGVkU3R5bGUoJChcIi5zZXR0aW5ncyAuY3VycmVudC10aGVtZVwiKVswXSkuZ2V0UHJvcGVydHlWYWx1ZShcImNvbnRlbnRcIikucmVwbGFjZSgvXCIvZywgXCJcIik7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRfdGhlbWUpIHtcclxuICAgICAgICBzZXQoY3VycmVudF90aGVtZSwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKFwiLnNldHRpbmdzIC50aGVtZVwiKS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gRGVzY29icmUgYSBwb3Npw6fDo28gZG8gdGVtYSBuYSBvcmRlbVxyXG4gICAgICAgICAgICBsZXQgdGhlbWVfcG9zaXRpb24gPSB0aGVtZV9vcmRlci5pbmRleE9mKGN1cnJlbnRfdGhlbWUpO1xyXG4gICAgICAgICAgICBsZXQgbmV3X3RoZW1lID0gdGhlbWVfb3JkZXJbdGhlbWVfcG9zaXRpb24gKyAxXSB8fCB0aGVtZV9vcmRlclswXTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldGEgbyBub3ZvIHRlbWFcclxuICAgICAgICAgICAgc2V0KG5ld190aGVtZSwgY3VycmVudF90aGVtZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59KSgpO1xyXG4iLCJsZXQgY3VlID0gWyBdO1xubGV0ICRwYW5lbDtcblxuJChmdW5jdGlvbiAoKSB7XG5cdCRwYW5lbCA9ICQoXCIucGFuZWxcIik7XG5cblx0Ly8gQ29uZmVyZSBzZSB1c3XDoXJpbyBqw6EgaGF2aWEgaGFiaWxpdGFkbyBnZW9sb2NhbGl6YcOnw6NvIGFudGVzXG5cdGlmIChcImdlb2xvY2F0aW9uXCIgaW4gbmF2aWdhdG9yKSB7XG5cdFx0aWYgKFwicGVybWlzc2lvbnNcIiBpbiBuYXZpZ2F0b3IpIHtcblx0XHRcdG5hdmlnYXRvci5wZXJtaXNzaW9ucy5xdWVyeSh7IFwibmFtZVwiOiBcImdlb2xvY2F0aW9uXCIgfSkudGhlbigocGVybWlzc2lvbikgPT4ge1xuXHRcdFx0XHRpZiAocGVybWlzc2lvbltcInN0YXRlXCJdID09PSBcImdyYW50ZWRcIikge1xuXHRcdFx0XHRcdC8vIFNlIGrDoSB0aXZlciwgcGVnYSBhIGxvY2FsaXphw6fDo28gYXR1YWwgZSBwcm9jdXJhIGVzdGHDp8OjbyBtYWlzIHByw7N4aW1hXG5cdFx0XHRcdFx0Z2V0TG9jYXRpb24oKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBTZSBuw6NvIHRpdmVyLCBtb3N0cmEgYm90w6NvIHBhcmEgc29saWNpdGFyIGF1dG9yaXphw6fDo29cblx0XHRcdFx0XHQkKFwiYm9keVwiKS5hZGRDbGFzcyhcIi1tb2RlLS1pbml0aWFsXCIpO1xuXG5cdFx0XHRcdFx0bGV0ICRwZXJtaXNzaW9uID0gJChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCJwZXJtaXNzaW9uXCIpLmFwcGVuZFRvKCRwYW5lbCk7XG5cdFx0XHRcdFx0bGV0ICRidXR0b24gPSAkKFwiPGEgLz5cIikuYWRkQ2xhc3MoXCJidXR0b25cIikuYXR0cihcImhyZWZcIiwgXCIjXCIpLmFwcGVuZFRvKCRwZXJtaXNzaW9uKTtcblx0XHRcdFx0XHQkKFwiPGkgLz5cIikuYWRkQ2xhc3MoXCJtYXRlcmlhbC1pY29uc1wiKS50ZXh0KFwibmVhcl9tZVwiKS5hcHBlbmRUbygkYnV0dG9uKTtcblx0XHRcdFx0XHQkKFwiPHNwYW4gLz5cIikudGV4dChcIkxvY2FsaXphciBlc3Rhw6fDo28gbWFpcyBwcsOzeGltYVwiKS5hcHBlbmRUbygkYnV0dG9uKTtcblxuXHRcdFx0XHRcdCRidXR0b24ub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRnZXRMb2NhdGlvbih0cnVlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGdldExvY2F0aW9uKCk7XG5cdFx0fVxuXHR9XG59KTtcblxuLy8gU2VydmljZSBXb3JrZXJcbmlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcblx0aWYgKGVudiA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuXHRcdFx0Y3VlW1wic2VydmljZS13b3JrZXJcIl0gPSBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihcIi9zZXJ2aWNlLXdvcmtlci5qc1wiKTtcblxuXHRcdFx0Y3VlW1wic2VydmljZS13b3JrZXJcIl0udGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwiU2VydmljZSBXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwhXCIsIHJlZ2lzdHJhdGlvbik7XG5cdFx0XHR9LCAoZXJyb3IpID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiBcIiwgZXJyb3IpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLy8gRXN0YWRvIGRhIGNvbmV4w6NvXG5sZXQgJHN0YXR1cztcbmxldCAkY29ubmVjdGlvbl9zdGF0dXM7XG5cbmNvbnN0IHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMgPSAoKSA9PiB7XG5cdHJldHVybiBmYWxzZTtcblx0bGV0IGNvbm5lY3RlZCA9IG5hdmlnYXRvci5vbkxpbmU7XG5cblx0aWYgKGNvbm5lY3RlZCA9PT0gdHJ1ZSkge1xuXHRcdC8vICQoXCI8ZGl2IC8+XCIpLmFkZENsYXNzKFwiLXN0YXRlLS1zdWNjZXNzXCIpLnRleHQoXCJDb25leMOjbyByZWVzdGFiZWxlY2lkYSFcIikuYXBwZW5kVG8oJGNvbm5lY3Rpb25fc3RhdHVzKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0JGNvbm5lY3Rpb25fc3RhdHVzLmVtcHR5KCk7XG5cdFx0fSwgNDAwMCk7XG5cdH0gZWxzZSB7XG5cdFx0JGNvbm5lY3Rpb25fc3RhdHVzLmVtcHR5KCk7XG5cdFx0JChcIjxkaXYgLz5cIikuYWRkQ2xhc3MoXCItc3RhdGUtLWVycm9yXCIpLnRleHQoXCJTZW0gY29uZXjDo29cIikuYXBwZW5kVG8oJGNvbm5lY3Rpb25fc3RhdHVzKTtcblx0fVxufTtcblxuJCh3aW5kb3cpLm9uKFwib25saW5lIG9mZmxpbmVcIiwgdXBkYXRlQ29ubmVjdGlvblN0YXR1cyk7XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib25saW5lXCIsIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMpO1xuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsIHVwZGF0ZUNvbm5lY3Rpb25TdGF0dXMpO1xuIl19
