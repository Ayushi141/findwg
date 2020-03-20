document.getElementById('theForm').onsubmit = function () {
    var data = document.getElementById('cityName').value;
    var options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data})
    };
    console.log(options);
    fetch('/city', options).then((res) => res.json());
    return false;
};


