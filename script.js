const cat = {
  name: "Fred",
  nickname: "Fluficus",
  age: 5,
  isSleeping: true,
  favoriteToys: ["spring", "ping pong balls", "bird stuffy"],
  pet: function () {
    return "purrrrrrrr";
  },
  play: function () {
    this.isSleeping = false;
    return `${this.nickname} is awake and playing!`;
  }
};

// console.log(cat.favoriteToys[2]);

cat.name = "Millie";

// console.log(cat.play());

let paperclips = 10;
paperclips += 2;
console.log(paperclips);
