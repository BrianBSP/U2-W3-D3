//https://striveschool-api.herokuapp.com/books

const fetchBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      console.log("response", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel reperimento dei dati");
      }
    })
    .then((books) => {
      //console.log("ciao", books);
      const row = document.getElementById("book-container");
      books.forEach((book) => {
        const col = document.createElement("div");
        col.classList.add("col");
        const card = document.createElement("div");
        card.classList.add("card");
        const img = document.createElement("img");
        img.classList.add("card-img-top");
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const title = document.createElement("h3");
        title.classList.add("card-title");
        const category = document.createElement("p");
        category.classList.add("card-text");
        const price = document.createElement("h4");
        price.classList.add("card-text");
        const button = document.createElement("a");
        button.classList.add("btn", "btn-primary");

        img.setAttribute("src", `${book.img}`);
        img.setAttribute("alt", `${book.title}`);
        card.style.maxHeigth = "200px";
        title.innerText = `${book.title}`;
        category.innerText = `${book.category}`;
        price.innerText = `${book.price}€`;
        button.innerText = "Scarta";

        card.appendChild(img);
        card.appendChild(cardBody);
        cardBody.appendChild(title);
        cardBody.appendChild(category);
        cardBody.appendChild(price);
        cardBody.appendChild(button);
        col.appendChild(card);
        row.appendChild(col);
        console.log(card);
      });
    })
    .catch((err) => console.log(err));
};

window.addEventListener("DOMContentLoaded", () => {
  fetchBooks();
});
