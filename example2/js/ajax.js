$(document).ready(function(){
  $("button").click(function(){
    //const car = {type:"Fiat", model:"500", color:"white"};
      var car = {}; // Creating a new array object
      car['type'] = "Fiat"; // Setting the attribute a to 200
      car['model'] = 200; // Setting the attribute b to 300
      car['color'] = "white"; // Setting the attribute b to 300
      var myJSON = JSON.stringify( car );
      $.ajax({
        url: "api.php",
        dataType: "json",
        data: { data:myJSON },
        type: 'post',
      }).done(function(data) {
        arr = JSON.parse(data); 
        let ele = `<ul>`;
        $.each(arr, function (key, val) {
            ele+= `<li>${key} - ${val}</li>`
        });
        ele+= `</ul>`;
        $("#div1").html(ele);
      });
  });
});