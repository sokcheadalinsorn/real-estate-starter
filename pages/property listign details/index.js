const sectionPropertiesElement = document.getElementById("similar__properties");

fetch("../../public/data/properties.json")
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
      for (let i = 0; i < 6; i++) {
        sectionPropertiesElement.innerHTML += `
        <a class="card" href="/pages/property/${data[i].title.km}">
            <img class="card__media" src="home-hero.png"
                alt="home-similar" />
            <div class="card__body">
                <h3 class="card__title">${data[i].title.km}</h3>
                <div class="card__meta">${data[i].price} ${data[i].currency} / month</div>
                <span class="badge">Available</span>
            </div>
        </a>
      `;
      }
    }
  });


