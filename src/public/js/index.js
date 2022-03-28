
function login(){
    const req ={
        "name": document.getElementById('name').value,
        "studentId": document.getElementById('studentId').value,
        "phoneNumber": document.getElementById('tel').value
    }
    console.log(req)
    console.log(JSON.stringify(req))

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    }

    fetch('/sign_up', options)
        .then(response => response.json())
        .then(response => {
            if(response.isOverlap)
                console.log('당신은 이미 신청했군요👀')
            else
                location.href = '/complete'
        })
}