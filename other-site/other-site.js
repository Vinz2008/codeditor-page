
function onClickRun(){
var input = document.getElementById("url");


var inputtext = input.value;
document.getElementById("div-iframe").innerHTML = `<iframe src="${inputtext}"></iframe>`; 
};