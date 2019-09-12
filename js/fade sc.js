$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrolltop() > 0){
        $(".h1general").css({"opacity" : "0"})
        }
        
        else {
            $(".h1general").css({"opacity" : "1"})
            }
    })
})