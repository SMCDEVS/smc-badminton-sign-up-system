var tableRows = document.querySelectorAll("tr")

function createCSV() {

    var row = []
    var csv = []

    row.push('학년', '반', '번호', '이름', '전화번호')
    csv.push(row.join(','))

    for(var i = 1;i < tableRows.length;i++){
        row = []

        var data = tableRows[i].getElementsByTagName('td')

        for (var j = 0;j < data.length;j++){
            row.push(data[j].innerText)
        }

        csv.push(row.join(','))

    }

    return csv
}

function downloadCSV() {

    var downloadLink = document.createElement('a')
    var blob = new Blob(['\uFEFF' + createCSV().join('\n')], {
        type: 'text/csv;charset=utf-8'
    })

    var url = URL.createObjectURL(blob)
    downloadLink.href = url
    downloadLink.download = 'sign_up_list.csv'

    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)

}

function deleteUser() {

    var userIds = []

    for (let i = 1;i < tableRows.length;i++) {
        var checkbox = tableRows[i].getElementsByTagName('input')[0]
        if(checkbox.checked) {
            userIds.push(checkbox.value)
        }
    }

    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            regex: userIds.join('|')
        })
    }

    fetch('/delete', options)
        .then(() => deleteUserElement())

}


function deleteUserElement() {

    for(let i = 1;i < tableRows.length;i++) {
        if(tableRows[i].getElementsByTagName('input')[0].checked) {
            tableRows[i].remove()
        }
    }
}


function selectAll() {
    var isCheck = document.getElementById('selectAllBtn').checked

    for (let i = 1;i < tableRows.length;i++) {
        tableRows[i].getElementsByTagName('input')[0].checked = isCheck
    }
}

