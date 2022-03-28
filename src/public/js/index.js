const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    tel = document.querySelector("#tel");


function login(){
    const req ={
        "name": document.getElementById('name').value,
        "studentId": document.getElementById('studentId').value,
        "phoneNumber": document.getElementById('tel').value
    };
    console.log(req);
    console.log(JSON.stringify(req))

    fetch("/sign_up", {
        method: "POST",
        headers: {
            Content-Type: "application/json"
        },
        body: JSON.stringify(req)
    }
}


