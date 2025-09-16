
const express = require('express');
const router = express.Router();
const request = require('request');

// @route   POST api/run
// @desc    Compile and run code
// @access  Public

router.post('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    const langMap = {
        python:    { lang: 'python3', versionIndex: '3' },
        golang:    { lang: 'go',      versionIndex: '3' },
        javascript:{ lang: 'nodejs',  versionIndex: '4' },
        c:         { lang: 'c',       versionIndex: '5' },
        cpp:       { lang: 'cpp17',   versionIndex: '0' },
        java:      { lang: 'java',    versionIndex: '4' }
    };

    const userLang = req.body.mode.toLowerCase();
    const langInfo = langMap[userLang] || { lang: userLang, versionIndex: '0' };

    const program = {
        script: req.body.value,
        language: langInfo.lang,
        versionIndex: langInfo.versionIndex,
        stdin: req.body.input,
        clientId: "302da1ffb5a05411fb5ed037582b4437",
        clientSecret: "8d2e46ad0eaf64c214018eb16ebb129911167758297f13ec04d46971982a4868"
    };

    request({
        url: 'https://api.jdoodle.com/v1/execute',
        method: "POST",
        json: program
    },
    function (error, response, body) {
        if (error) {
            console.error('JDoodle Error:', error);
            return res.status(500).json({ error: 'Execution failed' });
        }

        console.log('JDoodle Response:', body);
        res.send(JSON.stringify(body.output));
    });
});

module.exports = router;
