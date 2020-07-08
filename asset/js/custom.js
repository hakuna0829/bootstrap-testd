var btn = $('#back2top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 150) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

function setCookie(name,value,days) {
    var expires = "";
    var expire=new Date();
    if (days) {
        expire=new Date(expire.getTime() + (days*24*60*60*1000));    
    }    
    console.log(name + "=" + value + "; expires="+expire)
    document.cookie=name + "=" + value + "; expires="+expire;
  
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

$(document).ready(function(){
    var getCookieAccept;  
    getCookieAccept = getCookie("testdCookie");
    
    if(getCookieAccept != 'accept'){
        console.log(getCookieAccept)
        $('#CookieBanner').show();
    }
  
    $("#btn_accept").click(function(){
      $('#CookieBanner').hide();
        //Setting cookie expiry after 7 days 
        setCookie("testdCookie","accept",7 )     
    });

    $("#btn_decline").click(function(){
        $('#CookieBanner').hide();
         //Setting cookie expiry after 7 days 
         // setCookie("testdCookie","decline",7 )
      });
  });