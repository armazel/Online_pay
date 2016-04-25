
/*Добавление списка меню в адаптивный навбар*/
$(document).ready(function(){
    $(".main-mnu-button").click(function(){
        $(".main_mnu ul:not(img.logotip)").slideToggle();
    });
});