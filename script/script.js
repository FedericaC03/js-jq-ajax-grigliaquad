$(document).ready(function() {
  $.ajax(
  {
  "url": "https://flynn.boolean.careers/exercises/api/random/int",
  "method": "GET",
  "success": function (data, stato) {
    console.log(data.response);
    $(".square" ).click(function() {
      if (data.response > 5) {
        $(this).addClass("active-green");
        $(this).text(data.response);
      } else {
        $(this).addClass("active-yellow");
        $(this).text(data.response);
      };
    });
  },
  error: function (richiesta, stato, errori) {
  alert("errore");
  }
  }
  );
});
