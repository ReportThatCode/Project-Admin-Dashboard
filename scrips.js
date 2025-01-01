const $search = document.getElementById('search');

$search.addEventListener("input",(e)=>{

    if(e.target.value === "Why is HTML so sad?"){
        return alert("Because it needs a CSS to make it look good!")
    }
})
// #F0B429

document.addEventListener("click",(e)=>{


    const $card = e.target.closest(".card");
    const $colorCard = $card.querySelector(".color-deco");

    console.log($colorCard)

    if(e.target.matches(".checked")){

        e.target.src = "icons/checkbox-blank-circle-outline.svg"
        $colorCard.style.backgroundColor = "#F0B429";
        return e.target.classList.remove("checked")
    }

    else if(e.target.matches(".check")){

        e.target.src = "icons/checked.svg"
        $colorCard.style.backgroundColor = "#61cf45";
        return e.target.classList.add("checked")
    }

    else if(e.target.matches(".favChecked")){
        e.target.src = "icons/star-plus-outline.svg"
        return e.target.classList.remove("favChecked");
        
    }

    else if(e.target.matches(".fav")){
        e.target.src = "icons/starChecked.svg"
        return e.target.classList.add("favChecked");
    }

})