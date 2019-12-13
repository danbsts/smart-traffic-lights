import { TrafficLight } from "../../common/TrafficLight";
import { TrafficLightController } from "../TrafficLightController";

export class TrafficLightOperator {
    trafficLight: TrafficLight;
    controller: TrafficLightController;

    operate() {
        let timeToChange = this.getTime() - this.trafficLight.actualTime;
        new Timer(timeToChange);
        this.trafficLight.actualStatus = this.trafficLight.nextStateOriginal(this.trafficLight.actualStatus);
        while(true) {
            new Timer(this.getTime());
            this.trafficLight.actualStatus = this.trafficLight.nextStateOriginal(this.trafficLight.actualStatus);
            new Timer(this.getTime());
            this.trafficLight.actualStatus = this.trafficLight.nextStateOriginal(this.trafficLight.actualStatus);
            new Timer(this.getTime());
            this.trafficLight.actualStatus = this.trafficLight.nextStateOriginal(this.trafficLight.actualStatus);
        }
    }

    getTime() {
        if(this.trafficLight.actualStatus == "red") return this.trafficLight.redTime;
        if(this.trafficLight.actualStatus == "yellow") return this.trafficLight.yellowTime;
        return this.trafficLight.greenTime;
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