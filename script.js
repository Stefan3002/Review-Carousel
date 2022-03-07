document.addEventListener("click",function(event){
    if(event.target.parentElement.classList[1] === "active") {
        if (event.target.classList[3] === "fa-arrow-left") {
            const Item = document.querySelector(".active")
            const prevItem = Item.previousElementSibling
            if (prevItem !== null) {
                prevItem.classList.replace("inactive", "active")
                Item.classList.replace("active", "inactive")
            } else {
                const items = document.querySelectorAll(".item")
                items[items.length - 1].classList.replace("inactive", "active")
                Item.classList.replace("active", "inactive")
            }
        } else if (event.target.classList[3] === "fa-arrow-right") {
            const Item = document.querySelector(".active")
            const nextItem = Item.nextElementSibling
            if (nextItem !== null) {
                nextItem.classList.replace("inactive", "active")
                Item.classList.replace("active", "inactive")
            } else {
                document.querySelector(".item").classList.replace("inactive", "active")
                Item.classList.replace("active", "inactive")
            }

        }
    }
})

