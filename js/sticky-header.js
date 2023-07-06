const header = document.querySelector(".normalheader");
const toggleClass = "stickyheader";

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add(toggleClass);
    } 
    else {
      header.classList.remove(toggleClass);
    }

});