const btn = document.getElementById("btn-toggle");

var r = document.querySelector(':root');
function dark() {
    var rs = getComputedStyle(r);
    r.style.setProperty('--bkg-color', '#383A59');
    r.style.setProperty('--text-color', '#BD93F9');
    r.style.setProperty('--nav-color', '#282A36');
    r.style.setProperty('--backgroundTop-color', '#383A59');
    r.style.setProperty('--top-text-color', '#BD93F9');
    btn.innerHTML = "light"
}
function light() {
    var rs = getComputedStyle(r);
    r.style.setProperty('--bkg-color', '#FBFBFB');
    r.style.setProperty('--text-color', '#000000');
    r.style.setProperty('--nav-color', '#fff');
    r.style.setProperty('--backgroundTop-color', '#4C3AD8');
    r.style.setProperty('--text-color', '#000000');
    r.style.setProperty('--top-text-color', '#FFFFFF');
    btn.innerHTML = "dark"
}


var currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    dark()
  } else if (currentTheme == "light") {
    light()
  }

function buttonClicked() {
    var currentTheme = localStorage.getItem("theme");
    var theme = "light"
    if (currentTheme == "dark") {
        console.log("lightened")
      light()
      var theme = "light"
    } else if (currentTheme == "light") {
      console.log("darkened")
      dark()
      var theme = "dark"
    
    } else if (currentTheme == "undefined"){
      localStorage.setItem("theme", "light");
    }
    localStorage.setItem("theme", theme);
  };
