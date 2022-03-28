
function signup(){
    let name = document.getElementById('name').value
    let studentId = document.getElementById('studentId').value
    let phoneNumber = document.getElementById('tel').value

    const req ={
        "name": name,
        "studentId": studentId,
        "phoneNumber": phoneNumber
    }


    if(!/[0-9]{5,6}/.test(studentId) || !/[0-1]{3}[0-9]{4}[0-9]{4}/.test(phoneNumber)){
        console.log('형식에 맞춰서 지원해주세요!')
        return
    }


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