function menuClick() {
    const menu = document.querySelector(".nav-list")

    const menuBtn = document.querySelector(".menu-btn")
    const togle = menu.style.visibility = "hidden"

    menuBtn.addEventListener('click', function() {
        if(menu.style.visibility === 'hidden'){
            menu.style.visibility = "visible";
        }
        else {
            menu.style.visibility = 'hidden';
        }
    })
    }

menuClick()

    