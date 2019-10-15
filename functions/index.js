const functions = require("firebase-functions");
const request = require("request");
const samples = require("./samples");

const runtime_options = {
    "memory": "128MB",
    "timeoutSeconds": 10
};

const content_type = {
    "json": "application/json; charset=utf-8",
    "jsonp": "application/javascript; charset=utf-8"
};

exports.departures = functions.runWith(runtime_options).https.onRequest((req, res) => {
    const station = req.query.station;
    const env = req.query.env;
    const callback = req.query.callback;

    const stations = {
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

    const data = new Promise((resolve) => {
        if (env === "development") {
            resolve(JSON.stringify(samples["departures"]));
        } else {
            request("http://appmobile.vltrio.com.br:8080/station/eta?id=vlt_station_" + stations[station], (error, response, body) => {
                resolve(body);
            });
        }
    }).then((response) => {
        if (callback) {
            res.header("content-type", content_type["jsonp"]);
            res.send(callback + "(" + response + ");");
        } else {
            res.header("content-type", content_type["json"]);
            res.send(response);
        }
    });
});

exports.status = functions.runWith(runtime_options).https.onRequest((req, res) => {
    const env = req.query.env;
    const callback = req.query.callback;

    const data = new Promise((resolve) => {
        if (env === "development") {
            resolve(samples["status"]["warning"]);
        } else {
            request("http://157.230.119.186/modal_api", (error, response, body) => {
                const vlt = body.split("\n")[1];
                const parts = vlt.split(";");

                resolve({
                    "status": parts[1],
                    "message": parts[2] || null
                });
            });
        }
    }).then((response) => {
        if (callback) {
            res.header("content-type", content_type["jsonp"]);
            res.send(callback + "(" + JSON.stringify(response) + ");");
        } else {
            res.header("content-type", content_type["json"]);
            res.send(response);
        }
    });
});
