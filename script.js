const accessKey = "K1x6oLD_M7wRZkkVTCExrmU4BKI40eicJCzVWPJ5QvQ"

const searchbox = document.getElementById("search-box")
const searchbtn = document.getElementById("search-btn")
const searchform = document.getElementById("search-form")
const searchResults = document.getElementById("search-results")
let keyword = "";
let page = 1;
async function searchImages() {
    keyword = searchbox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12    `
    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        searchResults.innerHTML = "";
    }
    const results = data.results;

    results.map((results) => {
        const image = document.createElement("img");
        image.src = results.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = results.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResults.appendChild(imageLink)
    })
    showmorebtn.style.display = "block"
}

searchform.addEventListener("submit", (e) => {
    e.preventDefault()
    page = 1;
    searchImages();
})
showmorebtn.addEventListener("click", () => {
    page++
    searchImages()
})
