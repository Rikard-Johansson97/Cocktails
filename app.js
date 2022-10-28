// NAVBAR START
const navBar = document.querySelector(".navbar");
let prevScrollHeight;
let currentScrollHeight;
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 64) {
        currentScrollHeight = window.pageYOffset;
        if (prevScrollHeight > currentScrollHeight) {
            navBar.style.transform = "translate(0,0)";
            prevScrollHeight = window.pageYOffset;
        } else {
            currentScrollHeight = window.pageYOffset;
            navBar.style.transform = "translate(0, -64px)";
        }
        prevScrollHeight = currentScrollHeight;
    }
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
            "<li>Shake all the ingredients in a cocktail shaker and strain into a cocktail glass.</li><li>garnish with a lime wedge</li>",
    },
    {
        title: "MOJITO",
        img: "/Img/mojito.jpg",
        ingredients:
            "<li>6 cl of Cuban white rum</li><li>3 cl of lime juice</li><li>10 leaves of Hierba Buena </li><li>2 tablespoons of refined white sugar</li><li>Ice</li><li>a splash of soda</li>",
        recipeText:
            "<li>Pour lime juice and simple syrup into a glass.</li><li>Put 10-12 mint leaves in the glass.</li><li>Gently muddle the mint leaves.</li><li>Add gin and fill the glass a little more than halfway with crushed ice.</li><li>Stir with a spoon to mix the ingredients.</li><li>Add tonic and then fill the entire glass with crushed ice.</li><li>Serve with a straw and garnish with cucumber and a sprig of mint.</li>",
    },
    {
        title: "DRY MARTINI",
        img: "/Img/dry_martini.jpg",
        ingredients:
            "<li>5 cl Gin</li><li>1 cl vermouth dry</li><li>ice cubes</li><li>Olives</li>",
        recipeText:
            "<li>Fill the stirring glass with ice.</li><li>Combine the Dry Gin and vermouth in a stirring glass, or other mixing vessel.</li><li>Stir the mixture for ten seconds to chill and dilute the mixture.</li><li>Strain the drink into the glass.</li><li>Place the olives on the cocktail stick in the cocktail, and serve.</li>",
    },
    {
        title: "ESPRESSO MARTINI",
        img: "/Img/espresso_martini.jpg",
        ingredients:
            "<li>40 ml Vodka</li><li>20 ml Kahlúa</li><li>20 ml Espresso</li><li>3 Whole Coffee Beans</li>",
        recipeText:
            "<li>Fill a shaker with ice cubes.</li><li>Add all ingredients. Shake and strain into a cocktail glass.</li><li>Garnish with coffee beans.</li>",
    },
    {
        title: "MARGARITA",
        img: "/Img/margarita.jpg",
        ingredients: "<li>40 ml Tequila Blanco</li><li>20 ml Lime Juice</li><li>20 ml Triple Sec</li><li>1 Part Salt</li><li>Ice</li>",
        recipeText: "<li>Fill a shaker with ice cubes.</li><li>Add all ingredients. Shake and strain into a cocktail glass.</li><li>Garnish the glass with a salt rim.</li>",
    },
    {
        title: "APEROL SPRITZ",
        img: "/Img/aperol_spritz.jpg",
        ingredients: "<li>50ml Aperol</li><li>75ml prosecco</li><li>soda, to top up</li><li>Ice</li>",
        recipeText: "<li>Put a couple of icecubes into the glass.</li><li>Add the Aperol</li><li>Add the prosecco</li><li>Top with some soda</li>",
    },
    {
        title: "GIN & TONIC",
        img: "/Img/gin-and-tonic.jpg",
        ingredients: "<li>2 cl gin</li><li>5cl tonic water</li><li>Lime wedge or slices</li>",
        recipeText: "<li>Fill a glass with ice cubes</li><li>Pour the gin, then top with tonic.</li><li>Gently stir to combine, but not so much so that you lose carbonation.</li><li>Garnish with a lime wedge or lime slices. Serve and enjoy.</li>",
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
        recipeContainer.innerHTML += `<!-- RECIPE START -->
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
id = document.getElementById(slider[1].title);
window.addEventListener("scroll", function(){
    console.log(recipeContainer.offsetHeight);
});
// RECIPE END
