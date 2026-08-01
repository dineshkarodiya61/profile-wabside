document.addEventListener("DOMContentLoaded", function() {
    console.log("search.js loaded");
    let searchData = [];
    async function loadSearchData() {
        try {
            const pages = [
                { url: "index.html", title: "About" },
                { url: "publications.html", title: "Publications" },
                { url: "projects.html", title: "Projects" },
                { url: "cv.html", title: "CV" }
            ];
            for (const page of pages) {
                const response = await fetch(page.url);
                if (response.ok) {
                    const html = await response.text();
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, "text/html");
                    const content = doc.body.textContent || "";
                    searchData.push({
                        url: page.url,
                        title: page.title,
                        content: content.substring(0, 5000)
                    });
                }
            }
            console.log("Search data loaded:", searchData.length, "pages");
        } catch (error) {
            console.error("Error loading search data:", error);
        }
    }
    function performSearch(query) {
        if (!query || query.trim().length < 2) {
            return [];
        }
        const searchTerm = query.toLowerCase().trim();
        const results = [];
        for (const item of searchData) {
            if (item.content.toLowerCase().includes(searchTerm)) {
                results.push(item);
            }
        }
        return results.slice(0, 10);
    }
    function displayResults(results) {
        const resultsContainer = document.getElementById("searchResults");
        if (!resultsContainer) return;
        if (results.length === 0) {
            resultsContainer.innerHTML = '<p class="text-muted">No results found</p>';
            return;
        }
        let html = '<div class="list-group">';
        for (const result of results) {
            html += `
                <a href="${result.url}" class="list-group-item list-group-item-action">
                    <h6 class="mb-1">${result.title}</h6>
                    <small class="text-muted">${result.url}</small>
                </a>
            `;
        }
        html += '</div>';
        resultsContainer.innerHTML = html;
    }
    loadSearchData();
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        let timeoutId = null;
        
        searchInput.addEventListener("input", function() {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                const results = performSearch(this.value);
                displayResults(results);
            }, 300);
        });
    }
    if (typeof $ !== "undefined") {
        $('#searchModal').on('hidden.bs.modal', function() {
            const searchInput = document.getElementById("searchInput");
            const resultsContainer = document.getElementById("searchResults");
            if (searchInput) searchInput.value = "";
            if (resultsContainer) resultsContainer.innerHTML = "";
        });
    } else {
        document.addEventListener("hidden.bs.modal", function(e) {
            if (e.target.id === "searchModal") {
                const searchInput = document.getElementById("searchInput");
                const resultsContainer = document.getElementById("searchResults");
                if (searchInput) searchInput.value = "";
                if (resultsContainer) resultsContainer.innerHTML = "";
            }
        });
    }
});