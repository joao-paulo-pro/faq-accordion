const container = document.querySelectorAll(".container_title_faq");

container.forEach(number => {

    number.addEventListener("click", function () {
        const pai = this.parentElement;
        const icon = pai.querySelector(".img_icon");
        const resposta = pai.querySelector(".response");

        if (resposta.classList.contains("active")) {
            icon.src = "./assets/images/icon-plus.svg";
            resposta.classList.remove("active");
        } else {
            icon.src = "./assets/images/icon-minus.svg";
            resposta.classList.add("active");
        }
    })
})
