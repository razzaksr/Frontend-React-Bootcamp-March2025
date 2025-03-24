let banks = []

// const initialize = () =>{
//     localStorage.setItem('bankings',JSON.stringify(banks))
// }

// delete
const deletes = (position) =>{
    banks = JSON.parse(localStorage.getItem('bankings'))
    alert('Bank to be deleted @ '+position)
    // collect all except given position
    banks = banks.filter((value, index)=>{
        return index!=position
    })
    localStorage.setItem('bankings',JSON.stringify(banks))
    window.location.assign('http://127.0.0.1:5500/BootstrapDemo/Alignments.html')
}

// create
const NewEntry = () =>{
    // load from local storage
    banks = JSON.parse(localStorage.getItem('bankings'))
    const myJson = {
        "name":document.getElementById('bank-name').value,
        "branch":document.getElementById('bank-branch').value,
        "address":document.getElementById('bank-address').value,
        "ifscode":document.getElementById('bank-ifsc').value,
        "contact":document.getElementById('bank-contact').value
    }
    banks.push(myJson)
    alert('new bank entry has added')
    document.getElementById('bank-name').value=""
    document.getElementById('bank-branch').value=""
    document.getElementById('bank-address').value=""
    document.getElementById('bank-ifsc').value=""
    document.getElementById('bank-contact').value=""
    // write string to local storage
    localStorage.setItem('bankings',JSON.stringify(banks))
}
// read
const view=()=>{
    var tableBody = document.getElementsByTagName("tbody")[0]
    var content = ""
    banks = JSON.parse(localStorage.getItem('bankings'))
    banks.map((value,index)=>{
        // alert(JSON.stringify(value))
        content+="<tr><td>"+value.name+"</td><td>"+value.address+"</td><td>"+value.ifscode+"</td><td>"+value.contact+"</td><td onclick='deletes("+index+")'>"+value.branch+"</td></tr>"
    })
    tableBody.innerHTML = content
}