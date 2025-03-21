let banks = [
    {
        "name":"icici",
        "branch":"ponnammapet",
        "address":"Salem",
        "ifscode":"icic3434c",
        "contact":7656453546
    },
    {
        "name":"axis",
        "branch":"Rasipuram",
        "address":"Namakkal",
        "ifscode":"uti3565c",
        "contact":8765434567
    },
    {
        "name":"indian bank",
        "branch":"tiruchengode",
        "address":"Namakkal",
        "ifscode":"idib67567r",
        "contact":87654567865
    }
]

const view=()=>{
    var tableBody = document.getElementsByTagName("tbody")[0]
    var content = ""
    banks.map((value,index)=>{
        // alert(JSON.stringify(value))
        content+="<tr><td>"+value.name+"</td><td>"+value.address+"</td><td>"+value.ifscode+"</td><td>"+value.contact+"</td><td>"+value.branch+"</td></tr>"
    })
    tableBody.innerHTML = content
}