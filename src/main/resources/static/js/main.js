$(document).ready(function () {

    $("#search-form").submit(function (event) {
        //stop submit the form, we will post it manually.
        event.preventDefault();
        fire_ajax_submit();
    });

    $("#search-address-form").submit(function (event) {
        event.preventDefault();
        ajax_set_address();
    })

});

function fire_ajax_submit() {

    var search = {};
    search["username"] = $("#username").val();

    $("#btn-search").prop("disabled", true);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/api/search",
        data: JSON.stringify(search),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {

            var json = "<h4>Ajax Response</h4>&lt;pre&gt;"
                + JSON.stringify(data, null, 4) + "&lt;/pre&gt;";
            $('#feedback').html(json);

            console.log("SUCCESS : ", data);
            $("#btn-search").prop("disabled", false);

        },
        error: function (e) {

            var json = "<h4>Ajax Response</h4>&lt;pre&gt;"
                + e.responseText + "&lt;/pre&gt;";
            $('#feedback').html(json);

            console.log("ERROR : ", e);
            $("#btn-search").prop("disabled", false);

        }
    });

}

function ajax_set_address() {
    var search = {};
    search["searching"] = $('#address').val();
    $("#btn-address-search").prop("disabled", true);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/address/search",
        data: JSON.stringify(search),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {

            var resultStreet = (data.street);
            $('#show-street').html(resultStreet);

            var resultHouse = (data.house);
            $('#show-house').html(resultHouse);

            var flat = (data.flat);
            $('#show-flat').html(flat);

            console.log("SUCCESS : ", data);
            $("#btn-address-search").prop("disabled", false);

        },
        error: function (e) {
            console.log("ERROR : ", e);
            $("#btn-address-search").prop("disabled", false);
        }

    });
}