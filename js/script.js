var moodList = document.querySelector("select");
var mood = "happy";

moodList.addEventListener("change", function (e) {
   mood = e.target.value;
   if (mood === "happy") {
      document.body.classList.remove("sad", "passionate");
      document.body.classList.add("happy");
   } else if (mood === "sad") {
      document.body.classList.remove("happy", "passionate");
      document.body.classList.add("sad");
   } else if (mood === "passionate") {
      document.body.classList.remove("sad", "happy");
      document.body.classList.add("passionate");
   }
});