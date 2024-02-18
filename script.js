/* Define constants. */
const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=90e80bf299a5b1b337a336cbcf4ab90e&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=90e80bf299a5b1b337a336cbcf4ab90e&query=';

/* Get section and form search. */
const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

/* Function: return_movies */
const return_movies = url =>
{
    fetch(url).then(res => res.json())
    .then(data =>
    {
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            div_card.setAttribute('class', 'card');
            const div_row = document.createElement('div');
            div_row.setAttribute('class', 'row')
            const div_col = document.createElement('div');
            div_col.setAttribute('class', 'column');
            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail');
            image.setAttribute('id', 'image');
            const title = document.createElement('h3');
            title.setAttribute('id', 'title');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;
            div_card.appendChild(image);
            div_card.appendChild(title);
            div_col.appendChild(div_card);
            div_row.appendChild(div_col);

            main.appendChild(div_row);
        });
    });
};
return_movies(APILINK);

/* Listen for searches */
form.addEventListener("submit", e => {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;

    if (searchItem)
    {
        return_movies(SEARCH_API + searchItem);
        search.value = "";
    }
});