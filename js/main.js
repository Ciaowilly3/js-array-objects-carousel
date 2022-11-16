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
createBigImg();
function createBigImg() {
  let bigImg = document.createElement("img");

  bigImg.src = imagesArray[indexImg].image;
  bigImg.classList.add("big-img");

  imgContainerEl.append(bigImg);
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
