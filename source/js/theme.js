////////////////////////////////////////////////////////////////////////////////////////////////////
// theme ///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

const theme = (() => {
    let theme_order = [
        "auto",
        "light",
        "dark"
    ];

    let theme_settings = {
        "auto": {
            "title": L10n[language]["auto-theme"],
            "icon": "brightness_auto"
        },
        "light": {
            "title": L10n[language]["light-theme"],
            "icon": "brightness_5"
        },
        "dark": {
            "title": L10n[language]["dark-theme"],
            "icon": "brightness_4"
        },
    };

    let set = (new_theme, old_theme = "") => {
        current_theme = new_theme;

        $(".settings .theme span").text(theme_settings[new_theme]["title"]);
        $(".settings .theme i").text(theme_settings[new_theme]["icon"]);

        $("body").removeClass("-theme--" + old_theme).addClass("-theme--" + new_theme);

        // Salva configuração no localStorage
        if (new_theme === "auto") {
            localStorage.removeItem("theme");
        } else {
            localStorage.setItem("theme", new_theme);
        }
    };

    // Confere se já há tema salvo no localStorage.
    // Se não houver, pega o padrão do sistema
    // let current_theme = localStorage.getItem("theme") || getComputedStyle($(".settings .current-theme")[0]).getPropertyValue("content").replace(/"/g, "");
    let current_theme = localStorage.getItem("theme") || "auto";

    if (current_theme) {
        set(current_theme);
    }

    $(function() {
        if (!current_theme) {
            $(".settings .theme span").text(L10n[language]["auto-theme"]);
        }

        $(".settings .theme").on("click", (event) => {
            event.preventDefault();

            // Descobre a posição do tema na ordem
            let theme_position = theme_order.indexOf(current_theme);
            let new_theme = theme_order[theme_position + 1] || theme_order[0];

            // Seta o novo tema
            set(new_theme, current_theme);
        })
    });
})();
