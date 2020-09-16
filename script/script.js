$(document).ready(function() {
  $(".square" ).click(function() {
  $.ajax(
  {
  "context": this,
  "url": "https://flynn.boolean.careers/exercises/api/random/int",
  "method": "GET",
  "success": function (data, stato) {
      if (data.response > 5) {
        $(this).addClass("active-green");
        $(this).text(data.response);
      } else {
        $(this).addClass("active-yellow");
        $(this).text(data.response);
      };
  },
  error: function (richiesta, stato, errori) {
  alert("errore");
  }
  }
  );
});
});
