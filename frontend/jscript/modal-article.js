document.addEventListener("DOMContentLoaded", function () {
    const articleLinks = document.querySelectorAll(".article-link");
    const modalContainer = document.getElementById("modal-container");
    const articleContent = document.getElementById("article-content");

    articleLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const articleUrl = this.getAttribute("data-article-url");

            fetch(articleUrl)
                .then(response => response.text())
                .then(data => {
                    articleContent.innerHTML = data;
                    modalContainer.style.display = "flex";

                    // Найти и добавить обработчик события для кнопки закрытия
                    const articleCloseButton = articleContent.querySelector(".close-button");
                    if (articleCloseButton) {
                        articleCloseButton.addEventListener("click", function () {
                            modalContainer.style.display = "none";
                            articleContent.innerHTML = "";
                        });
                    }
                })
                .catch(error => {
                    console.error("Error loading article:", error);
                });
        });
    });
});
