var btnToggle2 = document.getElementById('buttonSwitchMenu');
var btnToggle4 = document.getElementById('ButtonRefreshGraph');

const theme = window.location.href;
const theme2 = theme.split('theme')[1];
const theme3 = theme2.split('=')[1].split('?')[0];

function toggleMenuMode() {
    var currentBtn = btnToggle2.textContent;

    if(currentBtn == "Switch To Text") {
        window.location.replace(`http://localhost:52102/?graphType=text?theme=${theme3}?`);
    } else if(currentBtn == "Switch To Graph") {
        window.location.replace(`http://localhost:52102/?graphType=graph?theme=${theme3}?`);
    }
}

btnToggle2.addEventListener('click', () => {
    toggleMenuMode();
});