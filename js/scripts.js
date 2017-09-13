$(document).ready(function() {
  $("#formOne").submit(function() {
    var recipientInput = $("input#recipient").val();
    var addressInput = $("input#address").val();
    $(".recipient").text(recipientInput);
    $(".address").text(addressInput);

    $("#postcard").show();

    event.preventDefault();
  })
})
