document.addEventListener("DOMContentLoaded", () => {
    const quizOptions = document.querySelectorAll(".quiz-option");

    quizOptions.forEach(option => {
        option.addEventListener("click", () => {
            if (option.classList.contains("correct")) {
                option.style.background = "green";
                option.style.color = "#fff";
            } else {
                option.style.background = "crimson";
                option.style.color = "#fff";
            }
        });
    });
});
