const router = require('express').Router();

const { client } = require('../index');

router.get('/', (req, res) => {
    res.render('index.ejs', {
        Client: client,
        presence: client.options.presence,
        // graphtype: window.location.href.split('graphType')[1].split('=')[1],
    });
});

module.exports = router;