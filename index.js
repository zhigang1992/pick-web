$(document).ready(function() {
    $('body').on('click', function() {

      function getRandomColor() {
          var letters = '0123456789ABCDEF'.split('');
          var color = '#';
          for (var i = 0; i < 6; i++ ) {
              color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
      }

      function sample(array) {
        return array.length > 0 ? array[Math.floor(Math.random()*array.length)] : "没了，重新<a href='edit.html'>设置</a>"
      }

      var savedData = localStorage.getItem("candidates")
      var candidates = savedData ? JSON.parse(savedData) : ["先<a href='edit.html'>设置</a>"]

      var $body = $("body")
      var $label = $(".js-label")

      $body.addClass("disabled")

      var timer = window.setInterval(function () {
          $body.css('background-color', getRandomColor())
          $label.html(sample(candidates))
      }, 100);
      setTimeout(function() {
        $body.removeClass("disabled")
        var winnersDatas = localStorage.getItem("winners")
        var winners = winnersDatas ? JSON.parse(winnersDatas) : []
        var availableCandidates = $(candidates).not(winners).get()
        var newWinner = sample(availableCandidates)
        $label.html(newWinner)
        winners.push(newWinner)
        localStorage.setItem("winners", JSON.stringify(winners))
        window.clearTimeout(timer)
      }, 8000)
    })
})
