$( document ).ready(function() {
    /*------------mobile menu---------------*/
    $('.mobile_menu').click(function(e){
        e.preventDefault();
        $('.menu-mobile-btn').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('fixed');
        /*------------end mobile menu---------------*/
    });
    $('.has_child').click(function () {
        $(this).toggleClass('active');
    });

    $('.currency th').click(function () {
        if($(this).hasClass('sort_up')){
            $(this).removeClass('sort_up');
            $(this).removeClass('sort_down');
        }if($(this).hasClass('sort_down')){
            $(this).removeClass('sort_down');
            $(this).addClass('sort_up');
        }else {
            $(this).addClass('sort_down');
        }
    });
    // show - hide table column
    $(".modal-customize input[type=checkbox]").on("change", function(e) {
        var id = $(this).attr('data-id'),
            col = $("table tr th:nth-child("+id+"), table tr td:nth-child("+id+")");
        $(this).is(":checked") ? col.show() : col.hide();
    }).prop("checked", true).change();

    $("button").on("click", function(e) {
        $("input[type=checkbox]").prop("checked", true).change();
    });

});