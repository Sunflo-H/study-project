function getBooks() {
  const kakaoBookURL = "https://dapi.kakao.com/v3/search/book?target=title" + '&query=사랑';
  const option = {
    headers: {
      Authorization: "KakaoAK bbbe7d040459540b61c1f31e91280f78"
    }
  }
  let books = fetch(kakaoBookURL, option)
    .then(response => response.json())
    .then(json => json.documents);
  return books;
}

function displayBooks(books) {
  const main = document.querySelector('main');
  const ul = main.querySelector('.books');
  let htmlString = books.map(book=>{
      let string = `<li class="book">
                      <h1>${book.title}</h1>
                      <img src=${book.thumbnail} alt=${book.title}></img>
                    </li>
                    `
      console.log(string);
      return string;
  }).join('');
  
  ul.innerHTML=htmlString;
}

getBooks()
  .then(books => {
    displayBooks(books);
  }
  )