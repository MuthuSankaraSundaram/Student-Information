var select1=document.getElementById("val1")
var select2=document.getElementById("val2")
var select3=document.getElementById("val3")
var select4=document.getElementById("val4")
var select5=document.getElementById("val5")
var select6=document.getElementById("val6")
function add(){
    var createrow=document.createElement("tr")
    var createcol1=document.createElement("td")
    var createcol2=document.createElement("td")
    var createcol3=document.createElement("td")
    var createcol4=document.createElement("td")
    var createcol5=document.createElement("td")
    var createcol6=document.createElement("td")

    createcol1.innerHTML=select1.value
    createcol2.textContent=select2.value
    var gender = document.querySelector('input[name="Gender"]:checked');
createcol3.textContent = gender ? gender.nextSibling.nodeValue.trim() : "Not Specified";

    createcol4.textContent=select4.value
    createcol5.textContent=select5.value
    createcol6.innerHTML="<button onclick='del(event)' style='background-color:aqua;'>DELETE</button>"
    createrow.append(createcol1,createcol2,createcol3,createcol4,createcol5,createcol6)

    select6.append(createrow)

}

function del(event){
    event.target.parentElement.parentElement.remove();
}