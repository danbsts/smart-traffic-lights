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
        this.actualTime = 0;
    }

    setGreen(greenTime: number) {
        this.greenTime = greenTime;
    }

    setRed(redTime: number) {
        this.redTime = redTime;
    }

    calculateState() {
        let nextTime = this.redTime;
        this.actualStatus = "red";
        while(this.actualTime > nextTime) {
            this.actualTime = this.actualTime - this.remainingTime(this.actualStatus);
            this.actualStatus = this.nextState(this.actualStatus);
            nextTime = this.remainingTime(this.actualStatus);
        }
    }

    nextState(state: string): string {
        if (state == "yellow") return "green";
        if (state == "red") return "yellow";
        return "red";
    }

    nextStateOriginal(state: string): string {
        if (state == "green") return "yellow";
        if (state == "yellow") return "red";
        return "green";
    }

    remainingTime(state: string): number {
        if (state == "yellow") return this.yellowTime;
        if (state == "red") return this.redTime;
        return this.greenTime;
    }
}