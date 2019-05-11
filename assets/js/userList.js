main();

function main() {
    // define variable with usersAPI URL
    var usersApiURL = "http://jsonplaceholder.typicode.com/users";
    loadJSON(usersApiURL);
    addClickEvents();
}

function loadJSON(apiURL) {
    // get list of users from the API
    $.getJSON(apiURL)
        .done(data => {
            appendUsers(data);
        })
        .fail((jqxhr, textStatus, error) => {
            var err = "UsersAPI " + textStatus + ": " + error;
            console.log(err);
        });
}

function appendUsers(users) {
    users.forEach(user => {
        var userHTML = 
            '<li class="user">' + user.username +
                '<ul class="user-info">' +
                    '<li><i class="fas fa-user-alt"></i> ' + user.name + '</li>' +
                    '<li><i class="fas fa-city"></i> ' + user.address.city + '</li>' +
                    '<li><i class="fas fa-envelope"></i> ' + user.email + '</li>' +
                '</ul>' +
            '</li>';
        $("#user-list").append(userHTML);
    });
}

function addClickEvents() {
    $("ul").on("click", "li", function () {
        $(this).children(".user-info").slideToggle();
    });
}