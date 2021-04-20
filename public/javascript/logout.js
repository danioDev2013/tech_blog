
$(document).ready(() => {
$("#logout").click(() =>
    {
        $.ajax({
            url: "/api/users/logout",
            type: "POST",
            headers: {"Content-Type" : "application/json" },
            success: () => { document.location.replace("/login") },
            error: (req, text, err) =>
            {
                alert(`Something went wrong! Status: ${text}; Error: ${err}`);
            }
        });
    });
});