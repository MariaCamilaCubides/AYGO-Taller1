const express = require('express');
const app = express();

const { port, serviceUrl, servicePath } = require('./config/app');
const { initializeRoundRobin, updateRoundRobin } = require('./src/roundRobin');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.post('*', async (req, res) => {
    const currentPort = global.Sequence[global.Count];
    updateRoundRobin();
    res.redirect(307, `http://${serviceUrl}:${currentPort}/${servicePath}`)
})

function startRoundRobin() {
    app.listen(port || '8585', () => {
        initializeRoundRobin();
    })
}

startRoundRobin();