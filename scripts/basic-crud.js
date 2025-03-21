// temporary memory
//let myItems = new Array()
let myItems = ["surf excel","reynolds","bata shoe","banana","himalya pain palm","trolley"]

function adding(){
    const userItem = document.getElementsByName('item')[0].value
    myItems.push(userItem)
    alert(userItem+" has pushed to array")
}
function iterate(){
    // alert(myItems.length)
    myItems.map((value,index)=>{
        alert(value+" exists @ "+index)
    })
}
function remove(){
    myItems.pop() // always removes last item, if you wish to remove specific go after filter
}
const deleting=(pos)=>{
    myItems=myItems.filter((value,index)=>{
        return index!=pos
    })
}
const update=()=>{
    const olditem = prompt("enter the name of item to be replace ","")
    const newitem = prompt("enter the name item to be overwrite ","")
    for(var index=0;index<myItems.length;index++){
        if(myItems[index]==olditem){
            myItems[index]=newitem
            break
        }
    }
}
