const animateSection = document.querySelectorAll(".js_scroll");

const windowMetade = window.innerHeight * 0.5;
function initAnimationScroll() {
    if (animateSection.length) {
        function animatScroll() {
            animateSection.forEach((item) => {
                const animateSectionTop = item.getBoundingClientRect().top;
                const isSectionVisible = animateSectionTop - windowMetade < 0;
                if (isSectionVisible) {
                    item.classList.add("ativo");
                }
            });
        }
        window.addEventListener("scroll", animatScroll);
    }
}

initAnimationScroll();
