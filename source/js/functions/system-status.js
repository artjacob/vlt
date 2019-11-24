////////////////////////////////////////////////////////////////////////////////////////////////////
// system status ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// Pega o estado do sistema
const systemStatus = (() => {
    cue["load-document"].done(() => {
        cue["interval-system-status"] = setInterval(getStatus, 60 * 1000);
        getStatus();
    });

    let last_status;

    const state_classes = [
        "-state--ok",
        "-state--warning"
    ];

    const getStatus = () => {
        // Só carrega se estiver em foco e online
        if (document.hidden === true || navigator.onLine === false) {
            return false;
        }

		$.getJSON(endpoints["status"], {
            "env": env
        }).done((response) => {
            cue["load-departures"].done(() => {
                $panel["footer"]["status"].removeClass(state_classes);

                if (response["status"]) {
                    if (response["status"] === "Normal") {
                        $panel["footer"]["status"].addClass("-state--ok");

                        if (last_status !== "Normal") {
                            $panel["footer"]["status"]["icon"].text("check_circle");
                            $panel["footer"]["status"]["text"].text(L10n[language]["status-ok"]);

                            let message_height = $panel["footer"]["status"]["text"].outerHeight();
                            $panel["footer"]["status"].height(message_height);

                            $panel["footer"]["status"].removeClass("-mode--collapsed");

                            setTimeout(() => {
                                $panel["footer"]["status"].css("height", "").addClass("-mode--collapsed");
                            }, 10000);
                        }
                    } else {
                        $panel["footer"]["status"].addClass("-state--warning");
                        $panel["footer"]["status"]["icon"].text("error");
                        $panel["footer"]["status"]["text"].text(response["message"]);

                        let message_height = $panel["footer"]["status"]["text"].outerHeight();
                        $panel["footer"]["status"].height(message_height);

                        $panel["footer"]["status"].removeClass("-mode--collapsed");
                    }

                    last_status = response["status"];
                }
            });
        });
    };

    $(window).on("visibilitychange.systemStatus", () => {
        last_status = null;
        getStatus();
    });
})();
