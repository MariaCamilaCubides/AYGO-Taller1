const express = require('express');
const app = express();

const { port, serviceUrl, servicePath } = require('./config/app');
const { initializeRoundRobin, updateRoundRobin } = require('./src/roundRobin');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', async (req, res) => {
    const currentPort = global.Sequence[global.Count];
    updateRoundRobin();
    res.redirect(`${serviceUrl}:${currentPort}/${servicePath}`)
})

function startRoundRobin() {
    app.listen(port || '8585', () => {
        initializeRoundRobin();
    })
}

startRoundRobin();