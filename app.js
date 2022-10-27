// NAVBAR START
const navBar = document.querySelector(".navbar");
let prevScrollHeight = window.pageYOffset;
let currentScrollHeight;
window.addEventListener("scroll", function () {
    currentScrollHeight = window.pageYOffset;
    if (prevScrollHeight > currentScrollHeight) {
        navBar.style.transform = "translate(0,0)";
        prevScrollHeight = window.pageYOffset;
    } else {
        currentScrollHeight = window.pageYOffset;
        navBar.style.transform = "translate(0, -64px)";
    }
    prevScrollHeight = currentScrollHeight;
});

//NAVBAR END

// SIDEBAR START
const sidebarBtn = document.getElementById("sidebar-btn");
const sidebar = document.querySelector(".sidebar");

sidebarBtn.addEventListener("click", function () {
    if (sidebar.classList.contains("hide-sidebar")) {
        sidebar.classList.remove("hide-sidebar");
        sidebar.classList.add("show-sidebar");
    } else {
        sidebar.classList.add("hide-sidebar");
        sidebar.classList.remove("show-sidebar");
    }
});

// SIDEBAR END

// SLIDER START
const slider = [
    {
        title: "NEGRONI",
        img: "/Img/NEGRONI.jpg",
        ingredients:
            "<li>3 cl Gin</li><li>3 cl Campari</li><li>3 cl sweet vermouth</li>",
        recipeText:
            "<li>Add the gin, Campari and sweet vermouth to a mixing glass filled with ice, and stir until well-chilled.</li><li>Strain into a rocks glass over a large icecube.</li><li>Garnish with an orange peel.</li>",
    },
    {
        title: "OLD FASHIONED",
        img: "/Img/old_fashioned.jpg",
        ingredients:
            "<li>6 cl Whiskey</li><li>1 cl syrup</li><li>4 dashes Angostura Bitters</li>",
        recipeText:
            "<li>Pour sugar syrup into a glass , shaker or suitable container to stir the drink in. The sugar syrup in this drink is preferably made with raw cane sugar and with two parts sugar and one part water.</li><li>Then add a few splashes of bitters and finally whiskey. Since an Old Fashioned consists mostly of whiskey, it is important to choose a type of whiskey and a brand that you like. Some prefer bourbon while some prefer to use rye whiskey.</li><li>Fill the container with ice and stir the drink with a bar spoon until it is really cold. This step is both for cooling the drink, but also for adding water.</li><li>Strain the drink into an ice-filled glass (suggested with a large ice cube).</li><li>Then garnish with a piece of orange peel that you first squeeze to spray the citrus oils over the drink.</li>",
    },
    {
        title: "WHISKEY SOUR",
        img: "/Img/whiskey_sour.jpg",
        ingredients:
            "<li>50ml bourbon</li><li>35ml lemon juice, freshly squeezed</li><li>12ml syrup</li><li>½ fresh egg white</li><li>ice</li><li>lemon zest</li>",
        recipeText:
            "<li>Add bourbon, lemon juice, simple syrup and egg white, if using, to a shaker and dry-shake for 30 seconds without ice.</li><li>Add ice and shake again until well-chilled.</li><li>Strain into a rocks glass or a coupe.</li>",
    },
    {
        title: "DAQUIRI",
        img: "/Img/daiquiri.jpg",
        ingredients:
            "<li>50ml white rum</li><li>25ml lime juice</li><li>10ml sugar syrup</li><li>ice</li>",
        recipeText:
            "<li>Shake all the ingredients in a cocktail shaker and strain into a cocktail glass.</li>",
    },
    {
        title: "MOJITO",
        img: "/Img/mojito.jpg",
        ingredients: "<li></li><li></li><li></li>",
        recipeText: "<li></li><li></li><li></li>",
    },
    {
        title: "DRY MARTINI",
        img: "/Img/dry_martini.jpg",
        ingredients: "<li></li><li></li><li></li>",
        recipeText: "<li></li><li></li><li></li>",
    },
    {
        title: "ESPRESSO MARTINI",
        img: "/Img/espresso_martini.jpg",
        ingredients: "<li></li><li></li><li></li>",
        recipeText: "<li></li><li></li><li></li>",
    },
    {
        title: "MARGARITA",
        img: "/Img/margarita.jpg",
        ingredients: "<li></li><li></li><li></li>",
        recipeText: "<li></li><li></li><li></li>",
    },
    {
        title: "APEROL SPRITZ",
        img: "/Img/aperol_spritz.jpg",
        ingredients: "<li></li><li></li><li></li>",
        recipeText: "<li></li><li></li><li></li>",
    },
    {
        title: "GIN & TONIC",
        img: "/Img/gin-and-tonic.jpg",
        ingredients: "<li></li><li></li><li></li>",
        recipeText: "<li></li><li></li><li></li>",
    },
];
const sliderContent = document.querySelector(".slider-container");
let counter = 0;
function sliderText(index) {
    sliderContent.innerHTML = `<div class="img-overlay-container">
    <img id="slider-img" class="slider-img" src="${slider[index].img}" alt="${slider[index].title}" />
    <div class="img-overlay"></div>
    <h2 id="slider-title" class="drink-title">${slider[index].title}</h2>
    <a class="slider-btn" href="#${slider[index].title}">Recipe</a>
    <button class="arrow-btn">
        <i
            id="slider-arrow-left"
            class="fa-solid fa-chevron-left"></i>
    </button>
    <button class="arrow-btn">
        <i
            id="slider-arrow-right"
            class="fa-solid fa-chevron-right"></i>
    </button>

</div>`;
    const sliderBtnRight = document.getElementById("slider-arrow-right");
    const sliderBtnleft = document.getElementById("slider-arrow-left");
    sliderBtnRight.addEventListener("click", function () {
        counter++;
        console.log(counter);
        if (counter > slider.length - 1) {
            counter = 0;
            sliderText(counter);
        } else {
            sliderText(counter);
        }
    });
    sliderBtnleft.addEventListener("click", function () {
        counter--;
        if (counter < 0) {
            counter = slider.length - 1;
            sliderText(counter);
        } else {
            sliderText(counter);
        }
    });
}
window.addEventListener("DOMContentLoaded", function () {
    sliderText(0);
    displayRecipe();
});
// SLIDER END
// RECIPE START
const recipeContainer = document.querySelector(".recipe-section");
function displayRecipe() {
    for (let i = 0; i <= slider.length - 1; i++) {
        recipeContainer.innerHTML += `            <!-- RECIPE START -->
        <div class="recipe-container" id="${slider[i].title}">
            <img  class="recipe-img .from-right" src="${slider[i].img}" alt="${slider[i].title}" />
            <div class="recipe-underlay .from-left">
                <div class="recipe-text">
                    <h3>${slider[i].title}</h3>
                    <div class="recipe">
                        <ul class="ingridients">
                        ${slider[i].ingredients}
                        </ul>
                        <ol>
                        ${slider[i].recipeText}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <!-- RECIPE END -->`;
    }
}

// RECIPE TRANSISTION

// RECIPE END
