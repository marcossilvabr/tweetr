$(function() {
  $(".new-tweet form").on("keyup", "textarea", function() {
    let textArea = $(this)
    let charCount = (140 - (textArea.val().length))
    let counter = $(this).parent().find('.counter')
    counter.text(charCount)
    if (charCount > 0) {
      counter.css({"color": "black"})
    }
    else {
      counter.css({"color": "red"})
    }
  })
})