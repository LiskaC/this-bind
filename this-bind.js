let talk = function () {
  console.log(this.sound);
};

//talk();
// {}

let cat = {
  sound: "miao"
}

let talkingCat = talk.bind(cat);
talkingCat();