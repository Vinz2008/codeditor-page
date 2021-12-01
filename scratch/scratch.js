
function onClickRun(){
    var input = document.getElementById("url");
    
    
    var inputtext = input.value;
    inputtextcomplete = inputtext + "/embed"
    document.getElementById("div-iframe").innerHTML = `<iframe src="${inputtextcomplete}" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>`; 
    };