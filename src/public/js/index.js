
function signup(){
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
        .then((response) => {
            if(response.status == 400)
                location.href = '/400_error'
            else if(response.status == 200)
                showPopup()
        })


}

const start = () => {
    setTimeout(function() {
        confetti.start()
    }, 100); // 0.1초 후 꽃가루 실행 ( 100 = 0.1sec )
};

const stop = () => {
    setTimeout(function() {
        confetti.stop()
    }, 3000); // 3초동안 꽃가루 실행 ( 3000 = 3초 )
};

let btn = document.querySelector('.btn');
let popup = document.querySelector('.popup-page')
function showPopup(){
    popup.classList.add('active')
    start();
    stop();
}