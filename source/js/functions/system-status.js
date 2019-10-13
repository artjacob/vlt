////////////////////////////////////////////////////////////////////////////////////////////////////
// system status ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// Pega o estado do sistema
const systemStatus = (() => {
    cue["load-document"].done(() => {
        if (env !== "development") {
            cue["interval-system-status"] = setInterval(getStatus, 60 * 1000);
            getStatus();
        }
    });

    let last_status;

    const state_classes = [
        "-state--ok",
        "-state--warning"
    ];

    const getStatus = () => {
        $.getJSON("https://us-central1-vltcarioca.cloudfunctions.net/status?callback=?").done((response) => {
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
                        }, 4000);
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
    };
})();
