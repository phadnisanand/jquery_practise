$(document).ready(function(){
  $("button").click(function(){
      $.ajax({
        url: "api.php",
      }).done(function(data) {
        arr = $.parseJSON(data); 
        $.each(arr, function (key, val) {
            alert(key + val);
        });
      });
  });
});