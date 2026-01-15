const btn = document.getElementById("get-activity");
const activityEl = document.getElementById("activity");
const titleEl = document.getElementById("title"); 

btn.addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(res => res.json())
    .then(data => {
      activityEl.textContent = data.activity;
      titleEl.textContent = "🔥 Let’s do this!";
      document.body.classList.add("excited");
      activityEl.classList.remove("pop");
      void activityEl.offsetWidth; 
      activityEl.classList.add("pop");
    });
});
