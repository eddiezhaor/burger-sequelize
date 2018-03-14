$(document).ready(function() {
    $(".add").on("click", function() {
        var id = $(this).attr("data-id");
        $.ajax({
            url: "/burgers/update/" + id,
            type: "PUT",
            data: {},
            success: function(data) {

            }
        })
    })
})