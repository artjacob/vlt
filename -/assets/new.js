"use strict";

var _nearestStation = _interopRequireDefault(require("nearest-station.js"));

var _getLocation = _interopRequireDefault(require("get-location.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
          (0, _getLocation.default)();
        } else {
          // Se não tiver, mostra botão para solicitar autorização
          $("body").addClass("-mode--initial");
          var $permission = $("<div />").addClass("permission").appendTo($panel);
          var $button = $("<a />").addClass("button").attr("href", "#").appendTo($permission);
          $("<i />").addClass("material-icons").text("near_me").appendTo($button);
          $("<span />").text("Localizar estação mais próxima").appendTo($button);
          $button.on("click", function (event) {
            event.preventDefault();
            (0, _getLocation.default)(true);
          });
        }
      });
    } else {
      (0, _getLocation.default)();
    }
  }
});