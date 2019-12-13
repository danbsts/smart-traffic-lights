export class TrafficLight {
    id: number;
    streetSpeed: number;
    position: number;
    greenTime: number;
    redTime: number;
    actualTime: number;
    yellowTime: number;
    actualStatus: string;
    carsOnQueue: number;

    constructor(id: number, streetSpeed: number, position: number, greenTime: number, redTime: number, actualStatus: string, carsOnQueue: number) {
        this.id = id;
        this.streetSpeed = streetSpeed;
        this.position = position;
        this.greenTime = greenTime;
        this.redTime = redTime;
        this.yellowTime = 3;
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

    calculateState() {
        let nextTime = this.redTime;
        this.actualStatus = "red";
        while(this.actualTime > nextTime) {
            this.actualTime = this.actualTime - this.remainingTime(this.actualStatus);
            this.actualStatus = this.nextState(this.actualStatus);
        }
    }

    nextState(state: string): string {
        if (state == "yellow") return "red";
        if (state == "red") return "green";
        return "yellow";
    }

    remainingTime(state: string): number {
        if (state == "yellow") return this.yellowTime;
        if (state == "red") return this.redTime;
        return this.greenTime;
    }
}

class Timer {
    constructor(public counter: number) {
        let intervalId = setInterval(() => {
            this.counter = this.counter - 1;
            console.log(this.counter)
            if(this.counter === 0) clearInterval(intervalId)
        }, 1000)
    }
}