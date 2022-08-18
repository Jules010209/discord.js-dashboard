var btnToggle = document.getElementById('buttonSwitchMode');

function toggleDarkLight() {
    var body = document.getElementById("body");

    var button = [document.getElementById('buttonSwitchMenu'), document.getElementById('ButtonRefreshGraph'), document.getElementById('buttonSwitchMode')];

    var currentClass = body.className;
    var currentBtn = btnToggle.textContent;

    var newTheme = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
    var newThemeUI = currentBtn == "dark-mode🌛" ? "light-mode🌞" : "dark-mode🌛";

    const graphtype = window.location.href;
    const graphtype2 = graphtype.split('graphType')[1];
    const graphtype3 = graphtype2.split('=')[1].split('?')[0];

    window.location.replace(`http://localhost:52102/?graphType=${graphtype3}?theme=${newTheme}`);

    for(item of button) {
        item.className = newTheme;
    }

    body.className = newTheme;
    btnToggle.textContent = newThemeUI;
}

btnToggle.addEventListener('click', () => {
    toggleDarkLight();
});