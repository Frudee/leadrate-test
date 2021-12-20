const container = document.querySelector(".list");
let q = 5;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const data = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .catch((err) => alert(err))
  .then((res) => {
    for (let i = 0; i < q; i++) {
      let random = getRandomIntInclusive(0, res.length);
      let randomDouble = getRandomIntInclusive(0, res.length);
      let descChance = getRandomIntInclusive(1, 4);
      //   console.log(res);
      container.insertAdjacentHTML(
        "beforeend",
        `<li>
        <div class="card__item">
          <label for=${res[random].id}
            >           
            <input type="checkbox" id=${res[random].id} />
            <p class="test">${res[random].title}</p>
            <span class="checkmark"></span>
            ${
              descChance === 1 ? `<span>${res[randomDouble].title}</span>` : ""
            }          
          </label>
        </div>
      </li>`
      );
    }
  });
//   создать функцию с агрументом количества и колвом по дефолту, перенести все в эту функ
// ловить ошибки
// в мобильной версии сразу зачеркнуто
