const themes = window.location.href;
const themes2 = themes.split('theme')[1];

if(!themes2) {

} else {
    const themes3 = themes2.split('=')[1].split('?')[0];
    var body = document.getElementById("body");
    var button = [document.getElementById('buttonSwitchMenu'), document.getElementById('ButtonRefreshGraph'), document.getElementById('buttonSwitchMode')];

    if(themes3 == 'light-mode' || themes3 == 'dark-mode') {

        // var test = themes3 == "dark-mode" ? "dark mode" : "light mode";

        var test = themes3 == "dark-mode" ? "light-mode🌞" : "dark-mode🌛";
        
        button[2].textContent = test

        body.className = themes3;

        for(item of button){
            item.className = themes3;
        }
    }
}