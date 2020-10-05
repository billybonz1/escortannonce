export function all(document){
    const hamburger = document.querySelector(".hamburger");
    const mobileMenuCont = document.querySelector(".mobile-menu-cont");
    const searchBtn = document.querySelector(".mobile-search-btn");
    const searchMobileCont = document.querySelector(".mobile-search");

    hamburger.addEventListener("click", function(e){
        e.preventDefault();
        hamburger.classList.toggle("is-active");
        mobileMenuCont.classList.toggle("is-active");
    });


    searchBtn.addEventListener("click", function(e){
        e.preventDefault();
        searchBtn.classList.toggle("is-active");
        searchMobileCont.classList.toggle("is-active");
    });

    document.addEventListener("click", function(e){
        let menuClose = 1;
        let searchClose = 1;
        e.path.forEach(function(item){
            if(item && item.classList){
                if(item.classList.contains("hamburger") || item.classList.contains("mobile-menu-cont")){
                    menuClose = 0;
                }
                if(item.classList.contains("mobile-search") || item.classList.contains("mobile-search-btn")){
                    searchClose = 0;
                }
            }
        });
        if(menuClose == 1){
            hamburger.classList.remove("is-active");
            mobileMenuCont.classList.remove("is-active");
        }
        if(searchClose == 1){
            searchBtn.classList.remove("is-active");
            searchMobileCont.classList.remove("is-active");
        }
    });



    document.querySelectorAll(".menu-ul-in > a").forEach(function(a){
        a.addEventListener("click", function(e){
            e.preventDefault();
            a.parentElement.classList.toggle("is-active");
            a.nextElementSibling.classList.toggle("is-active");
        });
    });
}
