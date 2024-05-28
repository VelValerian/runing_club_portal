document.addEventListener('DOMContentLoaded', () => {
    const words = ["заниматься", "жить", "радоваться", "бегать"];
    const textElement = document.getElementById('dynamic-txt');
    let currentWordIndex = 0;
    let deleting = false;
    let charIndex = 0;

    function changeText() {
        const currentWord = words[currentWordIndex];
        const displayText = deleting ? currentWord.substring(0, charIndex--) : currentWord.substring(0, charIndex++);

        textElement.textContent = displayText;

        if (!deleting && charIndex === currentWord.length + 1) {
            // слово напечатано полностью
            setTimeout(() => {
                deleting = true;
                changeText();
            }, 2000); // Пауза перед удалением
        } else if (deleting && charIndex === 0) {
            // слово полностью удалено
            deleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(changeText, 1000); // Пауза перед началом печати нового слова
        } else {
            setTimeout(changeText, deleting ? 150 : 300); // Скорость удаления и печати
        }
    }

    changeText();
});
