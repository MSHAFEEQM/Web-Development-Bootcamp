

const toggleSwitch = document.getElementById("switch");

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
    }    
    console.log(e)
}
