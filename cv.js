document.addEventListener("DOMContentLoaded", function () {
    var more = document.querySelectorAll(".more");
    var toggleButton = document.querySelectorAll(".toggleButton");
    toggleButton.forEach(function (button, index) {
        button.addEventListener("click", function () {
            var morePoints = more[index];
            if (morePoints.style.display === "none" || morePoints.style.display === "") {
                morePoints.style.display = "block";
                button.textContent = "Show Less";
            }
            else {
                morePoints.style.display = "none";
                button.textContent = "Show More";
            }
        });
    });
});
