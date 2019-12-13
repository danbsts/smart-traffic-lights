export class TrafficLight {
    id: number;
    streetSpeed: number;
    position: number;
    greenTime: number;
    redTime: number;
    yellowTime: number;
    actualStatus: string;
    carsOnQueue: number;

    constructor(id, streetSpeed, position, greenTime, redTime, actualStatus, carsOnQueue) {
        this.id = id;
        this.streetSpeed = streetSpeed;
        this.position = position;
        this.greenTime = greenTime;
        this.redTime = redTime;
        this.yellowTime = 3000;
        this.actualStatus = actualStatus;
        this.carsOnQueue = carsOnQueue;
    }

    setGreen(greenTime: number) {
        this.greenTime = greenTime;
    }

    setRed(redTime: number) {
        this.redTime = redTime;
    }

    changeStatus() {
        while(true) {
            this.actualStatus = "green";
            new Timer(this.greenTime);
            this.actualStatus = "yellow";
            new Timer(this.yellowTime);
            this.actualStatus = "red";
            new Timer(this.redTime);
        }
    }
}

class Timer {
    constructor(public counter: number) {
        let intervalId = setInterval(() => {
            this.counter = this.counter - 1;
            console.log(this.counter)
            if(this.counter === 0) clearInterval(intervalId)
        }, 1)
    }
}