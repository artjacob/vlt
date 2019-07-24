const functions = require("firebase-functions");
const request = require("request");

exports.departures = functions.https.onRequest((req, res) => {
    let station = req.query.station;
    let callback = req.query.callback;

    let stations = {
        "santos-dumont": 1,
        "antonio-carlos": 2,
        "cinelandia": 3,
        "carioca": 4,
        "sete-de-setembro": 5,
        "candelaria": 6,
        "sao-bento": 7,
        "parada-dos-museus": 8,
        "parada-dos-navios": 9,
        "utopia-aquario": 10,
        "cidade-do-samba": 11,
        "santo-cristo": 12,
        "cordeiro-da-graca": 13,
        "praia-formosa": 14,
        "rodoviaria": 15,
        "equador": 16,
        "pereira-reis": 17,
        "gamboa": 18,
        "providencia": 19,
        "harmonia": 20,
        "vila-olimpica": 21,
        "central": 22,
        "saara": 23,
        "tiradentes": 24,
        "colombo": 25,
        "praca-xv": 26,
        "cristiano-ottoni": 27,
        "camerino": 28,
        "santa-rita": 29
    };

    request("http://appmobile.vltrio.com.br:8080/station/eta?id=vlt_station_" + stations[station], (error, response, body) => {
        res.header("content-type", "application/json; charset=utf-8");

        if (callback) {
            res.send(callback + "(" + body + ");");
        } else {
            res.send(body);
        }
    });
});
