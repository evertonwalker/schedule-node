var schedule = require('node-schedule');

module.exports = function (app) {

    app.get('/ping', (req, res) => {
        res.json({ msg: 'Pong' });
    })

    var scheduling = schedule.scheduleJob({ OneMinute: 1}, function (fireDate) {
        console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
    });

}