document.addEventListener("DOMContentLoaded", function() {
    console.log("main.js loaded");
    var navbar = document.getElementById("navbar");
    if (navbar) {
        window.addEventListener("scroll", function() {
            navbar.classList.toggle("shadow", window.scrollY > 50);
        });
    }
    var progress = document.getElementById("progress");
    if (progress) {
        window.addEventListener("scroll", function() {
            var totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var progressValue = (window.scrollY / totalHeight) * 100;
            progress.value = progressValue || 0;
        });
    }
    var toggleBtn = document.getElementById("light-toggle");
    if (toggleBtn) {
        var icons = {
            system: document.getElementById("light-toggle-system"),
            dark: document.getElementById("light-toggle-dark"),
            light: document.getElementById("light-toggle-light")
        };
        var currentTheme = localStorage.getItem("theme") || "system";
        function setTheme(theme) {
            document.body.classList.remove("dark-theme");
            
            if (icons.system) icons.system.style.display = "none";
            if (icons.dark) icons.dark.style.display = "none";
            if (icons.light) icons.light.style.display = "none";
            
            if (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                document.body.classList.add("dark-theme");
                if (icons.dark) icons.dark.style.display = "inline";
            } else if (theme === "light") {
                if (icons.light) icons.light.style.display = "inline";
            } else {
                if (icons.system) icons.system.style.display = "inline";
                if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                    document.body.classList.add("dark-theme");
                }
            }
            localStorage.setItem("theme", theme);
        }

        toggleBtn.addEventListener("click", function() {
            var themes = ["system", "light", "dark"];
            var currentIndex = themes.indexOf(currentTheme);
            currentTheme = themes[(currentIndex + 1) % themes.length];
            setTheme(currentTheme);
        });

        setTheme(currentTheme);
    }
    window.openSearchModal = function() {
        var modalElement = document.getElementById("searchModal");
        if (modalElement) {
            if (typeof $ !== "undefined") {
                $('#searchModal').modal('show');
                setTimeout(function() {
                    var searchInput = document.getElementById("searchInput");
                    if (searchInput) searchInput.focus();
                }, 300);
            } else {
                alert("Search functionality coming soon!");
            }
        }
    };
});