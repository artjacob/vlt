////////////////////////////////////////////////////////////////////////////////////////////////////
// theme ///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

let Theme = (() => {
    let theme_order = [
        "auto",
        "light",
        "dark"
    ];

    let theme_settings = {
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
        },
    };

    let set = (new_theme, old_theme) => {
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
    let current_theme = localStorage.getItem("theme") || getComputedStyle($(".settings .current-theme")[0]).getPropertyValue("content").replace(/"/g, "");

    if (current_theme) {
        set(current_theme, "");
    }

    $(function() {
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
