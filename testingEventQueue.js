function simulateLongRunningProcess() {
    console.log('running')
    var timeToWait = 6000 + (new Date()).getTime()
    while (new Date().getTime() < timeToWait) { }
    console.log('finished after 3sec')
}

simulateLongRunningProcess()
console.log('finished executing')