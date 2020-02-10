const client = filestack.init(fileStackKey);
const options = {
    onFileSelected: file => {
        if (file.size > 1000 * 1000) {
            throw new Error('File too big, select something smaller than 1MB');
        }
    }
};

$("#menteeBtn").click(function () {
    $("#right").html(
        "<div class=\"rightContent\">\n" +
        "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>✔</p></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"line\"></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>2</p></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"littleCircle\"></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"littleCircle\"></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"littleCircle\"></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>3</p></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"littleCircle\"></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"littleCircle\"></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"littleCircle\"></div>\n" +
        "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>4</p></div>\n" +
        "</div>" +
        "<div style=\"margin-left: 30%\">" +
        "<div class='form'>" +
        "<form action=\"/register\" method=\"post\">\n" +
        "        <div class=\"form-group\">\n" +
        "            <label for=\"username\">Username</label>\n" +
        "            <input id=\"username\" name=\"username\" class=\"form-control\" type=\"text\" value=\"\">\n" +
        "        </div>\n" +
        "        <div class=\"form-group\">\n" +
        "            <label for=\"email\">Email</label>\n" +
        "            <input id=\"email\" name=\"email\" class=\"form-control\" type=\"text\" value=\"\">\n" +
        "        </div>\n" +
        "        <div class=\"form-group\">\n" +
        "            <label for=\"password\">Password</label>\n" +
        "            <input id=\"password\" name=\"password\" class=\"form-control\" type=\"password\">\n" +
        "        </div>\n" +
        "        <div class=\"form-group\">\n" +
        "            <label for=\"confirm_password\">Confirm Password</label>\n" +
        "            <input id=\"confirm_password\" name=\"confirm_password\" class=\"form-control\" type=\"password\">\n" +
        "        </div>\n" +
        "        <input type=\"submit\" class=\"button\" id='subButton'>\n" +
        "</form>" +
        "</div>" +
        "</div>"
    );
    $("#subButton").click(function () {
        $("#right").html(
            "<div class=\"rightContent\">\n" +
            "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>✔</p></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"line\"></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>✔</p></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"line\"></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>3</p></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"littleCircle\"></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"littleCircle\"></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"littleCircle\"></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>4</p></div>\n" +
            "</div>" +
            "<div style=\"text-align: center\">" +
            "<button id='upload' class='button'>Upload Pic</button>" +
            "<button id='next' class='button'>Next</button>" +
            "</div>"
        );
        $("#upload").click(function () {
            client.picker().open();
        });
    $("#next").click(function () {
        $("#right").html(
            "<div class=\"rightContent\">\n" +
            "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>✔</p></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"line\"></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>✔</p></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"line\"></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>✔</p></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"line\"></div>\n" +
            "    <div style=\"background-color: #1777f2\" class=\"bigCircle\"><p>4</p></div>\n" +
            "</div>" +
            "<div style=\"text-align: center\">" +
            "<button id='agree' class='button'>Agree</button>" +
            "</div>"
        );
    });
});
});
