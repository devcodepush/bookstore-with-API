function render(data) {
  
  const shopItemsContainer = document.createElement('div');
  shopItemsContainer.classList.add('shop-items');
  document.body.appendChild(shopItemsContainer);
  console.log(shopItemsContainer);
  console.log(data);


  const books = data.results.books.map(book => {
    return {
      src: book.book_image
  }})

  for (let i = 0; i < books.length; i++) {
    const Item = books[i];
  
    const itemCard = document.createElement("div");
    itemCard.classList.add("book-card");
    itemCard.innerHTML = 
    `
        <img class="book-image" src="${Item.src}" alt="${Item.name}">
/*         <div class="book-info">
        <h3 class="book-id">${Item.id}</h3>
        <h3 class="book-name">${Item.name}</h3>
        <h3 class="book-price">${Item.price}$</h3>
        <button id="book-btn-increment" class="book-btn">${Item.increment}</button>
        <button id="book-btn-decrement" class="book-btn">${Item.decrement}</button> 
        </div> */
        `;
    shopItemsContainer.appendChild(itemCard);
  }

}

function getBooks() {
  fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=V3JGVGRG3S3hbA9ydRGxlK5gy3YhQlFr')
  .then(response => response.json()) 
  .then(data => render(
    data
  ));


}

getBooks();


const item = [
  {
    id: "bookIdOne",
    name: "bookTitleOne",
    price: 5 ,
    src: "./assets/images/1.jpg",
    increment: '+',
    decrement: '-',
  },
  {
    id: "bookIdTwo",
    name: "bookTitleTwo",
    price: 5.5,
    src: "./assets/images/2.jpg",
    increment: '+',
    decrement: '-',
  },
  {
    id: "bookIdThree",
    name: "bookTitleThree",
    price: 6,
    src: "./assets/images/3.jpg",
    increment: '+',
    decrement: '-',
  },
  {
    id: "bookIdFour",
    name: "bookTitleFour",
    price: 7.25,
    src: "./assets/images/4.jpg",
    increment: '+',
    decrement: '-',
  },
  {
    id: "bookIdFive",
    name: "bookTitleFive",
    price: 5.25,
    src: "./assets/images/5.jpg",
    increment: '+',
    decrement: '-',
  },
  {
    id: "bookIdSix",
    name: "bookTitleSix",
    price: 5.75,
    src: "./assets/images/6.jpg",
    increment: '+',
    decrement: '-',
  },
  {
    id: "bookIdSeven",
    name: "bookTitleSeven",
    price: 6.5,
    src: "./assets/images/7.jpg",
    increment: '+',
    decrement: '-',
  },
  {
    id: "bookIdEight",
    name: "bookTitleEight",
    price: 7.85,
    src: "./assets/images/8.jpg",
    increment: '+',
    decrement: '-',
  },
  {
    id: "bookIdNine",
    name: "bookTitleNine",
    price: 8,
    src: "./assets/images/9.jpg",
    increment: '+',
    decrement: '-',
  },
  {
    id: "bookIdTen",
    name: "bookTitleTen",
    price: 8.25,
    src: "./assets/images/10.jpg",
    increment: '+',
    decrement: '-',
  },
  {
    id: "bookIdEleven",
    name: "bookTitleEleven",
    price: 8.75,
    src: "./assets/images/11.jpg",
    increment: '+',
    decrement: '-',
  },
  {
    id: "bookIdTwelve",
    name: "bookTitleTwelve",
    price: 9,
    src: "./assets/images/12.jpg",
    increment: '+',
    decrement: '-',
  },
  {
    id: "bookIdThirteen",
    name: "bookTitleThirteen",
    price: 4.75,
    src: "./assets/images/13.jpg",
    increment: '+',
    decrement: '-',
  },
  {
    id: "bookIdFourteen",
    name: "bookTitleFourteen",
    price: 8.15,
    src: "./assets/images/14.jpg",
    increment: '+',
    decrement: '-',
  },
  {
    id: "bookIdFifteen",
    name: "bookTitleFifteen",
    price: 9.85,
    src: "./assets/images/15.jpg",
    increment: '+',
    decrement: '-',
  },
  {
    id: "bookIdSixteen",
    name: "bookTitleSixteen",
    price: 10,
    src: "./assets/images/16.jpg",
    increment: '+',
    decrement: '-',
  },
];










  