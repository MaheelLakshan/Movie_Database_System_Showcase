

function loading_data(movie_id) {
    console.log(movie_id);

    $.get(
        "http://www.omdbapi.com/?apikey=d3a7082e&i=" + movie_id,
        function (data) {
          console.log(data);

          $('#modal_title').text(data.Title);
          $("#modal_image").attr("src",data.Poster);
          $('#modal_header').text(data.Title);
          $('#actors').text(data.Actors);
          $('#awards').text(data.Awards);
          $('#box_office').text(data.BoxOffice);
          $('#country').text(data.Country);
          $('#director').text(data.Director);
          $('#genre').text(data.Genre);
          $('#language').text(data.Language);
          $('#released_date').text(data.Released);
          $('#run_time').text(data.Runtime);
          $('#year').text(data.Year);
          $('#writer').text(data.Writer);
          $('#imdb_rating').text(data.imdbRating);
          $('#imdb_votes').text(data.imdbVotes);
          $('#rated').text(data.Rated);
          $('#disc').text(data.Plot);
  
        }
      );

    $('#movie_modal').modal('show');
}


$(document).ready(() => {


  $("#btn").click((results) => {
    results.preventDefault();

    $.get(
      "http://www.omdbapi.com/?i=tt3896198&apikey=d3a7082e&s=" + $("#string").val(),
      function (data) {
        console.log(data.Search);

        let cards = "";

        data.Search.forEach((element) => {


          cards += '<div class="col-md-3 result-card"><div class="card scroll movie_card" style="height: 30rem;">';
          cards +=
            '<img class="card-img-top" src="' +
            element.Poster +
            '" alt="card image cap">';
            cards += '<div class="card-body">';
            cards += '<h5 class="card-title">' + element.Title + '</h5>';

          

          cards += '<p class="card-text">Type: ' + element.Type +'</p>';
          cards += '<p class="card-text">' +  element.Year +'</p>';
          cards += '<a onclick="loading_data(\''+element.imdbID+'\');" class="btn btn-outline-primary more-button">Show More > </a>';
          cards += "</div>";
          cards += "</div>";
          cards += "</div>";


        });

        $("#movie_list").append(cards);
      }
    );
  });
});
