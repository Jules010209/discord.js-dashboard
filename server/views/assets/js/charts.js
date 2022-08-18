const graphtype = window.location.href
const graphtype2 = graphtype.split('graphType')[1];

if(!graphtype2) {
    let buttonToEdit1 = document.getElementById('buttonSwitchMenu');
    let buttonToEdit2 = document.getElementById('ButtonRefreshGraph');

    buttonToEdit1.textContent = 'Switch To Text';
    buttonToEdit2.textContent = 'Refresh Graph';

    function addElement(id) {
        const doc = document.createElement('canvas');
        doc.id = id;
        const container = document.querySelector('.box');
        container.appendChild(doc);
    }
    
    addElement('all_stats');

    const labels_all = [
        'Member',
        'Serveur',
        'Autre',
    ];

    const data_all = {
        labels: labels_all,
        datasets: [{
            label: 'All stats',
            backgroundColor: ['rgb(50, 205, 50)','rgb(135, 206, 250)','rgb(100, 149, 237)'],
            borderColor: ['rgb(50, 205, 50)','rgb(135, 206, 250)','rgb(100, 149, 237)'],
            data: [users_func, guilds_func, 3],
        }]
    };

    const config_all = {
        type: 'polarArea',
        data: data_all,
        options: {
            responsive: true,
            maintainAspectRatio: true
        }
    };

    const all_stats = new Chart(document.getElementById('all_stats'), config_all);
} else {
    const graphtype3 = graphtype2.split('=')[1].split('?')[0];

    if(graphtype3 == 'graph') {

        let buttonToEdit1 = document.getElementById('buttonSwitchMenu');
        let buttonToEdit2 = document.getElementById('ButtonRefreshGraph');

        buttonToEdit1.textContent = 'Switch To Text'
        buttonToEdit2.textContent = 'Refresh Graph'

        function addElement(id) {
            const doc = document.createElement('canvas');
            doc.id = id;
            const container = document.querySelector('.box');
            container.appendChild(doc);
        }
        
        addElement('all_stats');

        const labels_all = [
            'Member',
            'Serveur',
            'Autre',
        ];
    
        const data_all = {
            labels: labels_all,
            datasets: [{
                label: 'All stats',
                backgroundColor: ['rgb(50, 205, 50)','rgb(135, 206, 250)','rgb(100, 149, 237)'],
                borderColor: ['rgb(50, 205, 50)','rgb(135, 206, 250)','rgb(100, 149, 237)'],
                data: [users_func, guilds_func, 3],
            }]
        };
    
        const config_all = {
            type: 'polarArea',
            data: data_all,
            options: {
                responsive: true,
                maintainAspectRatio: true
            }
        };
    
        const all_stats = new Chart(document.getElementById('all_stats'), config_all);

    } else if(graphtype3 == 'text') {
        let buttonToEdit1 = document.getElementById('buttonSwitchMenu');
        let buttonToEdit2 = document.getElementById('ButtonRefreshGraph');

        buttonToEdit1.textContent = 'Switch To Graph'
        buttonToEdit2.textContent = 'Refresh Text'

        function addElement(text, id) {
            const doc = document.createElement('h1');
            doc.innerHTML = text;
            doc.id = id;
            const container = document.querySelector('.all_stats_text');
            container.appendChild(doc);
        }
        
        function addCustomElement(text, type, container, id) {
            const a = document.createElement(type);
            
            a.innerHTML = text;
            a.id = id;

            const content = document.querySelector(container);
            content.appendChild(a);
        }

        addCustomElement(`User ${users_func}`, 'h1', '.all_stats_text', 'switch-text-1');
        addCustomElement(`Guild ${guilds_func}`, 'h1', '.all_stats_text', 'switch-text-2');
        addCustomElement(`Random int : 234`, 'h1', '.all_stats_text', 'switch-text-3');
        // addElement(`User : ${users_func}`, "switch-text-1");
        // addElement(`Guild : ${guilds_func}`, "switch-text-2");
        // addElement(`Randome int : 234`, "switch-text-3");
    }
}