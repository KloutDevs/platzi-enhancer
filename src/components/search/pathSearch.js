class PlatziPathSearch {
    constructor() {
        this.init();
    }

    init() {
        if (window.location.pathname.includes('/home/mis-rutas/')) {
            this.setupPathSearch();
        }
    }

    setupPathSearch() {
        const actionsPanel = document.querySelector('.MyRoutes_MyRoutes__list-panel__actions___UJE0');
        if (!actionsPanel || document.querySelector('.platzi-enhancer-search-container')) {
            return;
        }

        const searchContainer = this.createSearchElement();
        actionsPanel.insertBefore(searchContainer, actionsPanel.firstChild);
    }

    createSearchElement() {
        const container = document.createElement('div');
        container.className = 'platzi-enhancer-search-container';

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Search routes...';
        input.className = 'platzi-enhancer-search-input';

        const resultsCounter = document.createElement('div');
        resultsCounter.className = 'platzi-enhancer-search-results';

        container.appendChild(input);
        container.appendChild(resultsCounter);

        this.setupSearchListener(input, resultsCounter);
        return container;
    }

    setupSearchListener(input, resultsCounter) {
        input.addEventListener('input', () => {
            const searchTerm = input.value.toLowerCase();
            const pathItems = document.querySelectorAll('.LearningPathsListItem');
            let visibleCount = 0;

            pathItems.forEach(item => {
                const title = item.querySelector('.LearningPathsListItem-content-title')
                    .textContent.toLowerCase();
                const isVisible = title.includes(searchTerm);
                item.style.display = isVisible ? '' : 'none';
                if (isVisible) visibleCount++;
            });

            resultsCounter.textContent = `${visibleCount} resultado${visibleCount !== 1 ? 's' : ''}`;
        });
    }
}

// Initialize
new PlatziPathSearch();

// Observer for dynamic changes in the page
const observer = new MutationObserver(() => new PlatziPathSearch());
observer.observe(document.body, { childList: true, subtree: true });