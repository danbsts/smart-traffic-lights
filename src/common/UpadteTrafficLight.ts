import { TrafficLight } from "./TrafficLight";

export class UpdateTrafficLight {
    north: TrafficLight;
    south: TrafficLight;

    constructor(northTrafficLight: TrafficLight, southTrafficLight: TrafficLight) {
        this.north = northTrafficLight;
        this.south = southTrafficLight;
    }
}