
var btn = document.getElementById("btn")
btn.addEventListener("click", function(){
  const url = "https://api.wheretheiss.at/v1/satellites/25544"
    async function getData() {
      const response = await fetch(url);
      const data = await response.json();
      document.getElementById("result").innerHTML = data.latitude
      console.log(data.latitude);
    }
    getData();
})
