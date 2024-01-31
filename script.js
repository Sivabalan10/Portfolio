window.onload = function () {
    var dataform = document.getElementById("formdata");

    dataform.addEventListener('submit', (e) => {
        e.preventDefault();

        fetch(dataform.action, {
            method: "POST",
            body: new FormData(dataform)
        }).then(response => response.json())
        .then(() => {
            let cont = document.getElementById('cot');
            cont.style.display = "none";
            let response = document.createElement("h3");
            response.innerHTML = "<br><br>Its Greatful to get response from you!<br>For project approach<br>Contact: +91 6383577376";
            response.style.color = "green";
            let par = document.getElementById("respon");
            par.appendChild(response);
        })
        .catch(error => {
            console.error('Error:', error);
            swal({
                title: "Error",
                text: "Something went wrong!",
                type: "error",
            });
        });
    });
};
