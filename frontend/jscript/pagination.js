let currentPage = 1;
const totalPages = 5; // Update this as needed

function renderPageNumbers() {
    const pageNumbersContainer = document.getElementById('page-numbers');
    pageNumbersContainer.innerHTML = '';

    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        if (i > 0 && i <= totalPages) {
            const pageNumber = document.createElement('div');
            pageNumber.className = 'page-number';
            pageNumber.innerText = i;
            if (i === currentPage) {
                pageNumber.classList.add('active');
            }
            pageNumber.onclick = () => goToPage(i);
            pageNumbersContainer.appendChild(pageNumber);
        }
    }
}

function goToFirstPage() {
    currentPage = 1;
    updatePageContent();
    renderPageNumbers();
}

function goToLastPage() {
    currentPage = totalPages;
    updatePageContent();
    renderPageNumbers();
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePageContent();
        renderPageNumbers();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePageContent();
        renderPageNumbers();
    }
}

function goToPage(pageNumber) {
    currentPage = pageNumber;
    updatePageContent();
    renderPageNumbers();
}

function updatePageContent() {
    for (let i = 1; i <= totalPages; i++) {
        const page = document.getElementById(`page-${i}`);
        if (i === currentPage) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updatePageContent();
    renderPageNumbers();
});
