!function(){var e={select:document.querySelector(".breed-select"),catInfo:document.querySelector(".cat-info"),loader:document.querySelector(".loader"),error:document.querySelector(".error")};e.select.addEventListener("click",(function(n){fetch("https://api.thecatapi.com/v1/breeds").then((function(e){return e.json()})).then((function(t){var c=t.map((function(e){return'<option value="'.concat(e.id,'">').concat(e.name,"</option>")})).join("");e.select.innerHTML=c;var r,o=t.find((function(e){return e.id===n.target.value}));(r=o.id,fetch("https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=".concat(r,"&api_key=").concat("live_fOxgLowEMvVzv83NVOkuO9MdqpbmCuvrfvPFk27zYDau65gVme3460SYk4qBg6tH")).then((function(e){return e.json()}))).then((function(n){e.catInfo.innerHTML=function(e){return e.map((function(e){return'   <img class="cat-img" src="'.concat(e.url,'" width="340"/>\n                <div class="cat-description">\n                <h2>').concat(e.breeds[0].name,"</h2>\n                <p>").concat(e.breeds[0].description,"</p>\n                <p><h3>Temperament:</h3> ").concat(e.breeds[0].temperament,"</p>\n            </div>                        \n        ")})).join("")}(n)})).catch((function(n){e.error.removeAttribute("hidden",""),console.log(n)}))}))}))}();
//# sourceMappingURL=index.06aa5fc4.js.map