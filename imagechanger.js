var item;
$(document).ready(function() {
    if ($(window).width() <= 1080) {
        item = $(".multipic").detach();
    } else {
        item = $(".singlepic").detach();
    }
});
$(window).resize(function() {
    if ($(window).width() <= 1080) {
        $(".column2").prepend(item);
        item = $(".multipic").detach();
    } else {
        $(".column2").prepend(item);
        item = $(".singlepic").detach();
    }
});