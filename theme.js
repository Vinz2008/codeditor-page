const btn = document.getElementById("btn-toggle");

var r = document.querySelector(':root');
function dark() {
    var rs = getComputedStyle(r);
    r.style.setProperty('--bkg-color', '#383A59');
    r.style.setProperty('--text-color', '#BD93F9');
    r.style.setProperty('--nav-color', '#282A36');
}
function light() {
    var rs = getComputedStyle(r);
    r.style.setProperty('--bkg-color', '#FFFFFF');
    r.style.setProperty('--text-color', '#000000');
    r.style.setProperty('--nav-color', 'green');
}


var currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    dark()
  } else if (currentTheme == "light") {
    light()
  }

function buttonClicked() {
    var currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
        console.log("lightened")
      light()
      var theme = "light"
    } else {
    if (currentTheme == "light") {
      console.log("darkened")
      dark()
      var theme = "dark"
    }
    }
    localStorage.setItem("theme", theme);
  };
