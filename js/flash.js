    var renderPage = true;
    $(window).on("load", function(){
      if(renderPage) {
      $('body').addClass('loaded');
      }         
    });   
    
    $(window).on('load',function(e){
        $("#price").load("price.html");
        $("#example").load("example.html");
        $("#footer-page").load("footer.html");
     });

    $('#div-click-1').on('click',function(e){
     	$("#div-1-1").load("div-1a.html");
     });

    $('#div-click-2').on('click',function(e){
     	$("#div-1-1").load("div-1b.html");
     });

    $('#div-click-3').on('click',function(e){
     	$("#div-1-1").load("div-1c.html");
     });

    $('#en').on('click',function(e){
        $("#div-en").attr('class','english-none');   
        $("#div-id").attr('class','bahasa');    
    });

    $('#id').on('click',function(e){
        $("#div-en").attr('class','english');   
        $("#div-id").attr('class','bahasa-none');    
    });
