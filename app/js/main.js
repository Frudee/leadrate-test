const getData = (q = 5) => {
  const container = document.querySelector(".list");
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .catch((err) => console.log(err))
    .then((res) => {
      for (let i = 0; i < q; i++) {
        let random = getRandomIntInclusive(0, res.length - 1);
        let randomDouble = getRandomIntInclusive(0, res.length - 1);
        let descChance = getRandomIntInclusive(1, 4);
        container.insertAdjacentHTML(
          "beforeend",
          `<li>       
          <label for=${res[random].id}
            >           
            <input type="checkbox" id=${res[random].id} />
            <p class="test">${res[random].title}</p>
            <span class="checkmark"></span>
            ${
              descChance === 1 ? `<span>${res[randomDouble].title}</span>` : ""
            }          
          </label>        
      </li>`
        );
      }
    });
};
getData();
