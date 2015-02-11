$(function() {
    $("#signup").on('submit', function(ev) {
        ev.preventDefault();

        var data = {};
        $(ev.target).serializeArray().map(function(pair){data[pair.name] = pair.value;});
        data = JSON.stringify(data);

        $.ajax({
            type: "POST",
            url: "/signup",
            contentType:"application/json; charset=utf-8",
            dataType: "json",
            data: data
        })
        .done(function(response) {
            $('#signup').get(0).reset();
            $('#signup').hide();
            $("#currentUser").html("Hi, " + response.username);
        })
    })
})