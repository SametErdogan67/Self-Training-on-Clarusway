let models = [
  {
    name: "F-16 Fighting Falcon",
    image: "img1/f16.jpeg",
    link: "https://www.lockheedmartin.com/en-us/who-we-are/international/turkey.html",
    content:
      "  Today’s F-16 –the Block 70/72 –is the most advanced 4th generation fighter ever built and brings a new level of capability to air forces around the world.",
  },
  {
    name: "F-35 Lightning II",
    image: "img1/f-35.jpg",
    link: "https://www.lockheedmartin.com/en-us/products/f-35.html",
    content:
      "The F-35 strengthens national security, enhances global partnerships and powers economic growth. As the most lethal, survivable and connected fighter jet in the world, the F-35 gives pilots the critical advantage against any adversary, enabling them to execute their mission and come home safe.",
  },
  {
    name: "F-22 Raptor",
    image: "img1/f-22.jpg",
    link: "https://www.lockheedmartin.com/en-us/products/f-22.html",
    content:
      "Celebrating 25 years of the F-22 and Raptor Nation. The F-22 first took flight on Sept. 7, 1997 in Marietta, Georgia, after six years of development. Today the Raptor continues to provide our nation and allies air superiority and is a pathfinder to the next generation of air dominance.",
  },
  {
    name: "RAFALE",
    image: "img1/rafale.webp",
    link: "https://www.dassault-aviation.com/en/defense/rafale/introduction/",
    content:
      "The Rafale, with its “Omnirole” capabilities, is the right answer to the capability approach selected by an increasing number of governments.",
  },
  {
    name: "Eurofighter Typhoon",
    image: "img1/eurofighter.avif",
    link: "https://www.eurofighter.com/",
    content:
      "Eurofighter Typhoon is the world’s most advanced swing-role combat aircraft providing simultaneously deployable Air-to-Air and Air-to-Surface capabilities.",
  },
];

let index = 0;
let cardCount = models.length;
showSlide(index);

const leftArrow = document.querySelector(".fa-circle-arrow-left");
leftArrow.addEventListener("click", function () {
  index--;
  showSlide(index);

  console.log(index);
});

const rightArrow = document.querySelector(".fa-circle-arrow-right");
rightArrow.addEventListener("click", function () {
  index++;
  showSlide(index);
  console.log(index);
});

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = cardCount - 1;
  }
  if (i >= cardCount) {
    index = 0;
  }

  document.querySelector(".card-title").textContent =
    `${index + 1}.  ` + models[index].name;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);

  document
    .querySelector(".btn-primary")
    .setAttribute("href", models[index].link);

  document.querySelector(".card-text").textContent = models[index].content;
}
