const { serviceInitialPort, serviceUrl } = require('../config/app')

function initializeRoundRobin() {
    global.Count = 0;
    global.Sequence = [
        serviceInitialPort,
        `${parseInt(serviceInitialPort,10) + 1}`,
        `${parseInt(serviceInitialPort,10) + 2}`,
    ]
}

function updateRoundRobin() {
    if (global.Count < 2) {
        global.Count += 1;
    } else {
        global.Count = 0;
    }
}

module.exports = {
    initializeRoundRobin,
    updateRoundRobin
}