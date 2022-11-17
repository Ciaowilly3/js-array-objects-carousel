// dichiaro le costanti di cui ho bisogno, e
// inizio anche a dichiarare l'indeximg che cambiarà al click della freccia

const imgContainerEl = document.querySelector(".img-container");
const allImgContainerEl = document.querySelector(".all-img-container");
let indexImg = 0;
const imagesArray = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// creo l'immagine grande dentro una funzione per ordine
let divArray = [];
createBigImg();
function createBigImg() {
  for (let i = 0; i < imagesArray.length; i++) {
    let createdContainerEl = document.createElement("div");
    imgContainerEl.append(createdContainerEl);
    createdContainerEl.style.height = "500px";
    createdContainerEl.classList.add("d-none");
    let bigImg = document.createElement("img");

    bigImg.src = imagesArray[i].image;
    bigImg.classList.add("big-img");

    createdContainerEl.append(bigImg);

    //   creo un contenitore sull'immagine per la scritta
    let titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    createdContainerEl.append(titleContainer);
    let imgTitle = document.createElement("h4");
    imgTitle.innerText = imagesArray[i].title;
    titleContainer.append(imgTitle);
    divArray[i] = createdContainerEl;
  }
}

// anche le immagini piccole le creo con una funzione, e do ad ognuna un'altezza statica
createLittleImg();
function createLittleImg() {
  for (let i = 0; i < imagesArray.length; i++) {
    let littleImg = document.createElement("img");
    let littleImgHeight = 100 / imagesArray.length;

    littleImg.src = imagesArray[i].image;
    littleImg.classList.add("little-img");
    littleImg.style.height = littleImgHeight + "%";

    allImgContainerEl.append(littleImg);
  }
}

// creo i due bottoni quindi li appendo al allimgcontainer e aggiungo eventlistener
const buttonUp = document.createElement("button");
const buttonDown = document.createElement("button");

buttonUp.innerHTML = "&#x1F81D;";

buttonUp.classList.add("my-btn");
buttonUp.classList.add("top-btn");

buttonDown.innerHTML = "&#x1F81F;";

buttonDown.classList.add("my-btn");
buttonDown.classList.add("btm-btn");

allImgContainerEl.append(buttonUp);
allImgContainerEl.append(buttonDown);

buttonDown.addEventListener("click", function () {
  if (indexImg > 4) {
    indexImg = 0;
  }
  if (indexImg > 0) {
    divArray[indexImg - 1].classList.remove("d-block");
    divArray[indexImg - 1].classList.add("d-none");
  }
  divArray[indexImg].classList.remove("d-none");
  divArray[indexImg].classList.add("d-block");
  indexImg += 1;
});

buttonUp.addEventListener("click", function () {
  indexImg = indexImg - 1;
  divArray[indexImg].classList.add("d-none");

  createBigImg();
});
