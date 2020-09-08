import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  $('#keywordButton').click(function () {
    // const keyword = $('#keyword').val();
    // $('#keyword').val("");

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=&rating=pg-13`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      
      
      $('.showResults').html(`<img src='${response.data.images.original.url}'>`);

    }
  });
});

// function getElements(response) {
//   $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//   $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
// }
// });
//});