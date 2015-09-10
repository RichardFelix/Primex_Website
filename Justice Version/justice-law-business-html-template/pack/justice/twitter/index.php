<script src="jquery.min.js" type="text/javascript"></script>

<script type="text/javascript">

$.ajax({

  method: "POST",

  url: "tweet-api.php",

  data: { }

})

  .done(function( msg ) {

     $(".twitter").append(msg);

  });

</script>

<div class="twitter"></div>