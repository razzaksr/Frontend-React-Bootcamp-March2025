let banks = []

// const initialize = () =>{
//     localStorage.setItem('bankings',JSON.stringify(banks))
// }


// create
const UpdateEntry = () =>{
    // load from local storage
    banks = JSON.parse(localStorage.getItem('bankings'))
    const myJson = {
        "name":document.getElementById('bank-name').value,
        "branch":document.getElementById('bank-branch').value,
        "address":document.getElementById('bank-address').value,
        "ifscode":document.getElementById('bank-ifsc').value,
        "contact":document.getElementById('bank-contact').value
    }
    // find and replace
    for(var index=0;index<banks.length;index++){
        // find bank by ifscode
        if(banks[index].ifscode==myJson.ifscode){
            // replace old one with new myJson
            banks[index]=myJson
        }
    }
    alert('bank entry has updated')
    document.getElementById('bank-name').value=""
    document.getElementById('bank-branch').value=""
    document.getElementById('bank-address').value=""
    document.getElementById('bank-ifsc').value=""
    document.getElementById('bank-contact').value=""
    // write string to local storage
    localStorage.setItem('bankings',JSON.stringify(banks))
}

// set selected position into session
const readOne = (pos) =>{
    sessionStorage.setItem('selected',pos)
    // alert(pos+" added into session storage ")
    location.assign('http://127.0.0.1:5500/BootstrapDemo/EditBank.html')
}

// read by position via session storage
const fetchByPosition = () =>{
    banks = JSON.parse(localStorage.getItem('bankings'))
    const userSelected = parseInt(sessionStorage.getItem('selected'))
    console.log(sessionStorage.getItem('selected'))
    const obj = banks.filter((v,i)=>{
        // console.log(JSON.stringify(v))
        return i==userSelected
    })[0]
    // alert(JSON.stringify(obj))
    sessionStorage.removeItem('selected')
    document.getElementById('bank-name').value=obj.name
    document.getElementById('bank-branch').value=obj.branch
    document.getElementById('bank-address').value=obj.address
    document.getElementById('bank-ifsc').value=obj.ifscode
    document.getElementById('bank-contact').value=obj.contact
}

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
        content+="<tr><td>"+value.name+"</td><td>"+value.address+"</td><td>"+value.ifscode+"</td><td>"+value.contact+"</td><td class='text-danger'><span onclick='readOne("+index+")' class='text-warning bi bi-pen-fill'></span>"+value.branch+"<span onclick='deletes("+index+")' class='bi bi-trash-fill'></span></td></tr>"
    })
    tableBody.innerHTML = content
}