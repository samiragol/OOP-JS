
function StopWatch() {
    let duration = 0;
    let running, startTime, endTime;

    this.start = function() {
        if(running) throw Error("you already started");

        running = true;
        startTime = new Date();
    }

    this.stop = function() {
       if(!running) throw Error("you already started")

       running = false;
       endTime = new Date();
       duration = (endTime.getTime() - startTime.getTime())/1000;

    }

    this.reset = function() {
        running = false;
        startTime = null;
        endTime = null;
        duration = 0;
    }

    Object.defineProperty(this, "duration", {
        get: function() {
            return duration;
        }
    })
}

const stopWatch = new StopWatch();