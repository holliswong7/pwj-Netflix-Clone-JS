window.onload = () => {
    addMovies();
}

function addMovies() {
    var moviesEl = document.querySelector('.netflixOriginals__movies');
    // console.log(moviesEl);
    moviesEl.innerHTML += '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjLcuaSnQ7jExLywFiFgRM8_71h3qIjdla359raNqzU4BFY8n">';
    moviesEl.innerHTML += '<img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Record_of_Youth.jpg/250px-Record_of_Youth.jpg">';
    moviesEl.innerHTML += '<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTxf7Ida_bqNddNOAcoE9wXrLC5dJ23TiRBnoPn8oHKohoExlXV">';
    moviesEl.innerHTML += '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgRcPawUSYoFBqNmmt8rfDIN_jenk_Hsr6ZuyKVxWpe9yUdNKC">';
    moviesEl.innerHTML += '<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQR9nWodwMRAwPnOyUZ_86wNH8r8IzoJbjXs3cfAaD2aiStl7QB">';
    moviesEl.innerHTML += '<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKRbFs9EUISleKCHEEJ5_3W9zGFsq95dfuMRBK6vcHd1CbgqqE">';
}