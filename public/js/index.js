const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    tel = document.querySelector("#tel");

function login(){
    const req ={
        id: id.value,
        psword: psword.value,
        tel: tel.value,
    };
    console.log(req);
    console.log(JSON.stringify(req))
}
// fetch("/log_in", {
//     method: "POST",
//     headers: {
//         "Content-Type": ""
//     },
//     body: JSON.stringify()
//     }
// )