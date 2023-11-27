const movies = {
  luca: {
    description: `A young boy experiences an unforgettable seaside
     summer on the Italian Riviera filled with gelato, pasta and endless scooter rides.
     Luca shares these adventures with his newfound best friend, 
     but all the fun is threatened by a deeply-held secret: he is a sea
      monster from another world just below the ocean's surface.`,
    title: "Luca",
    rating: "9.5",
    releaseYear: "June 3, 2021",
    creators: ["Enrico Casarosa", "Andrea Warren", "Jesse Andrews"],
    stars: ["Jacob Tremblay", "Emma Berman", "Peter Sohn", "Sandy Martin"],
    img: "movie-img--1.jpeg",
  },

  cars: {
    description: `The film follows a selfish and arrogant young racecar named Lightning McQueen who, on the way
    to the biggest race of his life, becomes stranded in a
    forgotten town called Radiator Springs, where he
     learns to be humbler and more respectful towards others.`,
    title: "Cars",
    rating: "8.7",
    releaseYear: "September 7, 2006",
    creators: ["Dan Fogelman", "Kiel Murray", "Jorgen Klubien"],
    stars: [
      "Sally Carrera",
      "Holley Shiftwell",
      "Doc Hudson",
      "Lightning McQueen",
    ],
    img: "movie-img--2.jpeg",
  },

  frozen: {
    description: `When the newly crowned Queen Elsa accidentally uses her power to 
    turn things into ice to curse her home in infinite winter, 
    her sister Anna teams up with a mountain man, his playful reindeer, 
    and a snowman to change the weather condition.`,
    title: "Frozen",
    rating: "7.8",
    releaseYear: "November 28, 2013",
    creators: ["Peter Del Vecho", "Chris Buck", "Jennifer Lee"],
    stars: ["Jonathan Groff", "Josh Gad", "Santino Fontana", "Idina Menzel"],
    img: "movie-img--3.jpeg",
  },

  onward: {
    description: `Teenage elf brothers Ian and Barley embark on a magical quest
     to spend one more day with their late father. Like any good adventure,
     their journey is filled with cryptic maps, impossible obstacles and#
      unimaginable discoveries.`,
    title: "Onward",
    rating: "10.0",
    releaseYear: "March 5, 2020",
    creators: ["Dan Scanlon", "Jason Headley", "Kori Rae"],
    stars: ["Tom Holland", "Chris Pratt", "Octavia Spencer", "Julia Louis"],
    img: "movie-img--4.jpeg",
  },
};

const descr = document.querySelector(".movie__description");
const date = document.querySelector(".movie__release__date");
const creators = document.querySelector(".creators");
const stars = document.querySelector(".stars");
const img = document.querySelector(".popup__movie__img");
const title = document.querySelector(".popup__movie__title");
const rating = document.querySelector(".popup__rating");

function addData(name) {
  const movie = movies[name];
  title.textContent = movie.title;
  rating.textContent = movie.rating;
  img.src = `images/${movie.img}`;
  descr.textContent = movie.description;
  date.textContent = movie.releaseYear;
  creators.textContent = movie.creators.join(", ");
  stars.textContent = movie.stars.join(", ");
}

document.addEventListener("click", (e) => {
  const filmName = e.target.closest(".movie").dataset.movie;
  if (filmName) addData(filmName);
});
