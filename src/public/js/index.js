
function login(){
    const req ={
        "name": document.getElementById('name').value,
        "studentId": document.getElementById('studentId').value,
        "phoneNumber": document.getElementById('tel').value
    }
    console.log(req)
    console.log(JSON.stringify(req))

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    }


    fetch('/sign_up', options)
        .then()
}


