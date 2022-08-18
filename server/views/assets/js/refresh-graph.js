var btnToggle3 = document.getElementById('ButtonRefreshGraph');

function Refresh() {
    // window.location.reload();
    var currentBtn = btnToggle3.textContent;
    var graphType = '';

    if(currentBtn == "Refresh Graph") {
        graphType = 'graph';
    } else if(currentBtn == "Refresh Text") {
        graphType = 'text';
    }

    const theme = window.location.href;
    const theme2 = theme.split('theme')[1];
    const theme3 = theme2.split('=')[1].split('?')[0];

    window.location.replace(`http://localhost:52102/?graphType=${graphType}?theme=${theme3}`);
}

btnToggle3.addEventListener('click', () => {
    Refresh();
});