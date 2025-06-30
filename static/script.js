function callApi() {
    fetch("/api/hello")
        .then(response => response.json())
        .then(data => {
            document.getElementById("output").innerText = data.message;
        });
}
