import { TrafficLight } from "../../common/TrafficLight";

export class TrafficLightsFixture {

    // This is a factory, it generates all traffic lights by ID (same as Caxanga JSON)
    getDefaultSouth() : TrafficLight[] {
        var TL_1: TrafficLight =  new TrafficLight(  8, 10, 0, 40, 20, "undefined", 4);
        var TL_2: TrafficLight =  new TrafficLight( 80, 10, 100, 40, 20, "undefined", 10);
        var TL_3: TrafficLight =  new TrafficLight(228, 10, 200, 40, 20, "undefined", 2);
        var TL_4: TrafficLight =  new TrafficLight(229, 10, 300, 40, 20, "undefined", 0);
        var TL_5: TrafficLight =  new TrafficLight(230, 10, 400, 40, 20, "undefined", 0);
        var TL_6: TrafficLight =  new TrafficLight(231, 10, 500, 40, 20, "undefined", 15);
        var TL_7: TrafficLight =  new TrafficLight(232, 10, 600, 40, 20, "undefined", 1);
        var TL_8: TrafficLight =  new TrafficLight(234, 10, 700, 40, 20, "undefined", 5);
        var TL_9: TrafficLight =  new TrafficLight(235, 10, 800, 40, 20, "undefined", 3);
        var TL_10: TrafficLight = new TrafficLight(236, 10, 900, 40, 20, "undefined", 8);
        var TL_11: TrafficLight = new TrafficLight(262, 10, 1000, 40, 20, "undefined", 5);
        var TL_12: TrafficLight = new TrafficLight(263, 10, 1100, 40, 20, "undefined", 4);
        var TL_13: TrafficLight = new TrafficLight(264, 10, 1200, 40, 20, "undefined", 4);
        var TL_14: TrafficLight = new TrafficLight(265, 10, 1300, 40, 20, "undefined", 8);
        var TL_15: TrafficLight = new TrafficLight(266, 10, 1400, 40, 20, "undefined", 9);
        var TL_16: TrafficLight = new TrafficLight(267, 10, 1500, 40, 20, "undefined", 20);
        var TL_17: TrafficLight = new TrafficLight(268, 10, 1600, 40, 20, "undefined", 15);
        var TL_18: TrafficLight = new TrafficLight(269, 10, 1700, 40, 20, "undefined", 5);
        var TL_19: TrafficLight = new TrafficLight(270, 10, 1800, 40, 20, "undefined", 7);
        var TL_20: TrafficLight = new TrafficLight(273, 10, 1900, 40, 20, "undefined", 16);
        var TL_21: TrafficLight = new TrafficLight(274, 10, 2000, 40, 20, "undefined", 8);
        var TL_22: TrafficLight = new TrafficLight(275, 10, 2100, 40, 20, "undefined", 3);
        var TL_23: TrafficLight = new TrafficLight(489, 10, 2200, 40, 20, "undefined", 2);
        var TL_24: TrafficLight = new TrafficLight(533, 10, 2300, 40, 20, "undefined", 17);
        var TL_25: TrafficLight = new TrafficLight(599, 10, 2400, 40, 20, "undefined", 2);
        var TL_26: TrafficLight = new TrafficLight(600, 10, 2500, 40, 20, "undefined", 9);
        var TL_27: TrafficLight = new TrafficLight(601, 10, 2600, 40, 20, "undefined", 4);
        var TL_28: TrafficLight = new TrafficLight(602, 10, 2700, 40, 20, "undefined", 1);
        var TL_29: TrafficLight = new TrafficLight(603, 10, 2800, 40, 20, "undefined", 0);
        var TL_30: TrafficLight = new TrafficLight(604, 10, 2900, 40, 20, "undefined", 12);
        var trafficLights: TrafficLight[] = [
            TL_1, TL_2, TL_3, TL_4, TL_5, TL_6,
            TL_7, TL_8, TL_9, TL_10, TL_11, TL_12,
            TL_13, TL_14, TL_15, TL_16, TL_17, TL_18,
            TL_19, TL_20, TL_21, TL_22, TL_23, TL_24,
            TL_25, TL_26, TL_27, TL_28, TL_29, TL_30
        ]
        return trafficLights;
    }

    getDefaultNorth() : TrafficLight[] {
        var TL_1: TrafficLight =  new TrafficLight(  8, 10, 0, 40, 20, "undefined", 4);
        var TL_2: TrafficLight =  new TrafficLight( 80, 10, 100, 40, 20, "undefined", 10);
        var TL_3: TrafficLight =  new TrafficLight(228, 10, 200, 40, 20, "undefined", 2);
        var TL_4: TrafficLight =  new TrafficLight(229, 10, 300, 40, 20, "undefined", 0);
        var TL_5: TrafficLight =  new TrafficLight(230, 10, 400, 40, 20, "undefined", 0);
        var TL_6: TrafficLight =  new TrafficLight(231, 10, 500, 40, 20, "undefined", 15);
        var TL_7: TrafficLight =  new TrafficLight(232, 10, 600, 40, 20, "undefined", 1);
        var TL_8: TrafficLight =  new TrafficLight(234, 10, 700, 40, 20, "undefined", 5);
        var TL_9: TrafficLight =  new TrafficLight(235, 10, 800, 40, 20, "undefined", 3);
        var TL_10: TrafficLight = new TrafficLight(236, 10, 900, 40, 20, "undefined", 8);
        var TL_11: TrafficLight = new TrafficLight(262, 10, 1000, 40, 20, "undefined", 5);
        var TL_12: TrafficLight = new TrafficLight(263, 10, 1100, 40, 20, "undefined", 4);
        var TL_13: TrafficLight = new TrafficLight(264, 10, 1200, 40, 20, "undefined", 4);
        var TL_14: TrafficLight = new TrafficLight(265, 10, 1300, 40, 20, "undefined", 8);
        var TL_15: TrafficLight = new TrafficLight(266, 10, 1400, 40, 20, "undefined", 9);
        var TL_16: TrafficLight = new TrafficLight(267, 10, 1500, 40, 20, "undefined", 20);
        var TL_17: TrafficLight = new TrafficLight(268, 10, 1600, 40, 20, "undefined", 15);
        var TL_18: TrafficLight = new TrafficLight(269, 10, 1700, 40, 20, "undefined", 5);
        var TL_19: TrafficLight = new TrafficLight(270, 10, 1800, 40, 20, "undefined", 7);
        var TL_20: TrafficLight = new TrafficLight(273, 10, 1900, 40, 20, "undefined", 16);
        var TL_21: TrafficLight = new TrafficLight(274, 10, 2000, 40, 20, "undefined", 8);
        var TL_22: TrafficLight = new TrafficLight(275, 10, 2100, 40, 20, "undefined", 3);
        var TL_23: TrafficLight = new TrafficLight(489, 10, 2200, 40, 20, "undefined", 2);
        var TL_24: TrafficLight = new TrafficLight(533, 10, 2300, 40, 20, "undefined", 17);
        var TL_25: TrafficLight = new TrafficLight(599, 10, 2400, 40, 20, "undefined", 2);
        var TL_26: TrafficLight = new TrafficLight(600, 10, 2500, 40, 20, "undefined", 9);
        var TL_27: TrafficLight = new TrafficLight(601, 10, 2600, 40, 20, "undefined", 4);
        var TL_28: TrafficLight = new TrafficLight(602, 10, 2700, 40, 20, "undefined", 1);
        var TL_29: TrafficLight = new TrafficLight(603, 10, 2800, 40, 20, "undefined", 0);
        var TL_30: TrafficLight = new TrafficLight(604, 10, 2900, 40, 20, "undefined", 12);
        var trafficLights: TrafficLight[] = [
            TL_1, TL_2, TL_3, TL_4, TL_5, TL_6,
            TL_7, TL_8, TL_9, TL_10, TL_11, TL_12,
            TL_13, TL_14, TL_15, TL_16, TL_17, TL_18,
            TL_19, TL_20, TL_21, TL_22, TL_23, TL_24,
            TL_25, TL_26, TL_27, TL_28, TL_29, TL_30
        ]
        return trafficLights;
    }
}