import { TrafficLight } from "../../common/TrafficLight";
import { TrafficLightsFixture } from "../fixture/TrafficLightsFixture";

export class TrafficLightRepository {
    trafficLightsSouthWay : TrafficLight[] = [];
    trafficLightsNorthWay : TrafficLight[] = [];

    constructor() {
        this.trafficLightsSouthWay = new TrafficLightsFixture().getDefaultSouth();
        this.trafficLightsNorthWay = new TrafficLightsFixture().getDefaultNorth();
    }

    calculateTimeForAll() {
        var carsSouth: number;
        this.trafficLightsSouthWay.forEach(elem => {
            carsSouth += elem.carsOnQueue;
        });
        var carsNorth: number;
        this.trafficLightsNorthWay.forEach(elem => {
            carsNorth += elem.carsOnQueue;
        });
        if (this.difAbs(carsSouth, carsNorth) < (carsSouth + carsNorth)/4) {
            const segmentationSize: number = this.trafficLightsNorthWay.length/4;
            let pos = 0;
            for(let i = 0; i < 4; i++) {
                let lastTime = 0;
                if (i%2 == 0) {
                    for(let l = pos; l < pos + segmentationSize && l < this.trafficLightsNorthWay.length; l++) {
                        this.trafficLightsNorthWay[l].actualTime = lastTime;
                        this.trafficLightsSouthWay[l].actualTime = lastTime;
                        lastTime = lastTime + 100/60 + this.trafficLightsNorthWay[l].carsOnQueue;
                    }
                } else {
                    for(let l = this.min(pos + segmentationSize, this.trafficLightsSouthWay.length - 1); l > pos; l--) {
                        this.trafficLightsSouthWay[l].actualTime = lastTime;
                        this.trafficLightsNorthWay[l].actualTime = lastTime;
                        lastTime = lastTime + 100/60 + this.trafficLightsSouthWay[l].carsOnQueue;
                    }
                }
                pos = pos + segmentationSize;
            }
        } else {
            if (carsNorth > carsSouth) {
                let lastTime = 0;
                for (let i = 0; i < this.trafficLightsNorthWay.length; i++) {
                    this.trafficLightsNorthWay[i].actualTime = lastTime;
                    this.trafficLightsSouthWay[i].actualTime = lastTime;
                    lastTime = lastTime + 100/60 + this.trafficLightsNorthWay[i].carsOnQueue;
                }
            } else {
                let lastTime = 0;
                for (let i = this.trafficLightsSouthWay.length - 1; i > 0; i--) {
                    this.trafficLightsNorthWay[i].actualTime = lastTime;
                    this.trafficLightsSouthWay[i].actualTime = lastTime;
                    lastTime = lastTime + 100/60 + this.trafficLightsSouthWay[i].carsOnQueue;
                }
            }
        }
        this.calculateState();
    }

    calculateState() {
        for(var i = 0; i < this.trafficLightsNorthWay.length; i++) {
            this.trafficLightsNorthWay[i].calculateState();
        }
        this.trafficLightsNorthWay.forEach(trafficLight => trafficLight.calculateState);
        this.trafficLightsSouthWay.forEach(trafficLight => trafficLight.calculateState);
    }

    updateTrafficLight(trafficLightSouth: TrafficLight, trafficLightNorth: TrafficLight) : boolean {
        for(var i = 0; i < this.trafficLightsNorthWay.length; i++) {
            if(this.trafficLightsNorthWay[i].id == trafficLightNorth.id) {
                this.trafficLightsNorthWay[i] = trafficLightNorth;
                this.trafficLightsSouthWay[i] = trafficLightSouth;
                return true;
            }
        }
        return false;
    }

    getById(id: number): TrafficLight {
        let ans: TrafficLight;
        this.trafficLightsNorthWay.forEach(elem => {
            if(elem.id == id) ans = elem;
        });
        return ans;
    }

    getAll(): TrafficLight[] {
        return this.trafficLightsNorthWay;
    }

    min(a: number, b: number): number {
        if (a <= b) return a;
        return b;
    }

    difAbs(a: number, b: number): number {
        let res = a - b;
        if (res < 0) return res * (-1);
        return res;
    }
}