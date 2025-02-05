function main (){
  fetchBooks()
}
main();

function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
 .then(response => {
    return response.json()
    console.log(json)
 })
 .then(json => renderBooks(json))
}  

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}
