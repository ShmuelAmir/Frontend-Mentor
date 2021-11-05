$(document).ready(function(){
    $('.que').click(function(){
        let q = $(this);
        let qs = q.parent().siblings();    
        qs.children('.que').removeClass('active');   //other que
        qs.children('.ans').fadeOut('fast');         //other ans
        q.toggleClass('active');              //this que
        q.next().fadeToggle('slow');          //this ans
    });
});
