main();

// main function to run
function main() {
    // define variable with usersAPI URL
    var usersApiURL = "http://jsonplaceholder.typicode.com/users";
    loadJSON(usersApiURL);
    addClickEvents();
}

// load JSON from given URL and when done add them to the list
function loadJSON(apiURL) {
    // get list of users from the API
    $.getJSON(apiURL)
        .done(data => {
            // when obtained data
            appendUsers(data);
        })
        .fail((jqxhr, textStatus, error) => {
            var err = "UsersAPI " + textStatus + ": " + error;
            console.log(err);
            appendError(textStatus, error);
        });
}

// function to add users to HTML
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

// function to print error to HTML
function appendError(textStatus, error) {
    var errorHTML = '<div class="error"><i class="fas fa-exclamation-triangle"></i>' + textStatus.toUpperCase() + ': ' + error + "</div>";
    $("#user-list").append(errorHTML);
}

// add event listeners
function addClickEvents() {
    $("ul").on("click", "li", function () {
        $(this).children(".user-info").slideToggle();
    });
}