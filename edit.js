$(document).ready(function() {
  var savedData = localStorage.getItem("candidates")
  var candidates = savedData ? JSON.parse(savedData) : []
  var $edit = $('.js-edit-box')
  $edit.val(candidates.join('\n'))

  $('.submit-button').on('click', function(){
    var dataToSave = JSON.stringify($edit.val().split('\n'))
    localStorage.setItem("candidates", dataToSave)
    localStorage.setItem("winners", JSON.stringify([]))
     window.location.href = "index.html"
  })
})
