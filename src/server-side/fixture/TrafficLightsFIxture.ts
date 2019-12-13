import { TrafficLight } from "../../common/TrafficLight";

export class TrafficLightsFixture {

    // This is a factory, it generates all traffic lights by ID (same as Caxanga JSON)
    getDefaultSouth() : TrafficLight[] {
        var TL_1: TrafficLight =  new TrafficLight(  8, 60, 0, 0, 0, "green", 4);
        var TL_2: TrafficLight =  new TrafficLight( 80, 60, 100, 0, 0, "green", 10);
        var TL_3: TrafficLight =  new TrafficLight(228, 60, 200, 0, 0, "green", 2);
        var TL_4: TrafficLight =  new TrafficLight(229, 60, 300, 0, 0, "green", 0);
        var TL_5: TrafficLight =  new TrafficLight(230, 60, 400, 0, 0, "green", 0);
        var TL_6: TrafficLight =  new TrafficLight(231, 60, 500, 0, 0, "green", 15);
        var TL_7: TrafficLight =  new TrafficLight(232, 60, 600, 0, 0, "green", 1);
        var TL_8: TrafficLight =  new TrafficLight(234, 60, 700, 0, 0, "green", 5);
        var TL_9: TrafficLight =  new TrafficLight(235, 60, 800, 0, 0, "green", 3);
        var TL_10: TrafficLight = new TrafficLight(236, 60, 900, 0, 0, "green", 8);
        var TL_11: TrafficLight = new TrafficLight(262, 60, 1000, 0, 0, "green", 5);
        var TL_12: TrafficLight = new TrafficLight(263, 60, 1100, 0, 0, "green", 4);
        var TL_13: TrafficLight = new TrafficLight(264, 60, 1200, 0, 0, "green", 4);
        var TL_14: TrafficLight = new TrafficLight(265, 60, 1300, 0, 0, "green", 8);
        var TL_15: TrafficLight = new TrafficLight(266, 60, 1400, 0, 0, "green", 9);
        var TL_16: TrafficLight = new TrafficLight(267, 60, 1500, 0, 0, "green", 20);
        var TL_17: TrafficLight = new TrafficLight(268, 60, 1600, 0, 0, "green", 15);
        var TL_18: TrafficLight = new TrafficLight(269, 60, 1700, 0, 0, "green", 5);
        var TL_19: TrafficLight = new TrafficLight(270, 60, 1800, 0, 0, "green", 7);
        var TL_20: TrafficLight = new TrafficLight(273, 60, 1900, 0, 0, "green", 16);
        var TL_21: TrafficLight = new TrafficLight(274, 60, 2000, 0, 0, "green", 8);
        var TL_22: TrafficLight = new TrafficLight(275, 60, 2100, 0, 0, "green", 3);
        var TL_23: TrafficLight = new TrafficLight(489, 60, 2200, 0, 0, "green", 2);
        var TL_24: TrafficLight = new TrafficLight(533, 60, 2300, 0, 0, "green", 17);
        var TL_25: TrafficLight = new TrafficLight(599, 60, 2400, 0, 0, "green", 2);
        var TL_26: TrafficLight = new TrafficLight(600, 60, 2500, 0, 0, "green", 9);
        var TL_27: TrafficLight = new TrafficLight(601, 60, 2600, 0, 0, "green", 4);
        var TL_28: TrafficLight = new TrafficLight(602, 60, 2700, 0, 0, "green", 1);
        var TL_29: TrafficLight = new TrafficLight(603, 60, 2800, 0, 0, "green", 0);
        var TL_30: TrafficLight = new TrafficLight(604, 60, 2900, 0, 0, "green", 12);
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
        var TL_1: TrafficLight =  new TrafficLight(  8, 60, 0, 0, 0, "green", 4);
        var TL_2: TrafficLight =  new TrafficLight( 80, 60, 100, 0, 0, "green", 0);
        var TL_3: TrafficLight =  new TrafficLight(228, 60, 200, 0, 0, "green", 2);
        var TL_4: TrafficLight =  new TrafficLight(229, 60, 300, 0, 0, "green", 0);
        var TL_5: TrafficLight =  new TrafficLight(230, 60, 400, 0, 0, "green", 0);
        var TL_6: TrafficLight =  new TrafficLight(231, 60, 500, 0, 0, "green", 5);
        var TL_7: TrafficLight =  new TrafficLight(232, 60, 600, 0, 0, "green", 1);
        var TL_8: TrafficLight =  new TrafficLight(234, 60, 700, 0, 0, "green", 5);
        var TL_9: TrafficLight =  new TrafficLight(235, 60, 800, 0, 0, "green", 3);
        var TL_10: TrafficLight = new TrafficLight(236, 60, 900, 0, 0, "green", 8);
        var TL_11: TrafficLight = new TrafficLight(262, 60, 1000, 0, 0, "green", 5);
        var TL_12: TrafficLight = new TrafficLight(263, 60, 1100, 0, 0, "green", 0);
        var TL_13: TrafficLight = new TrafficLight(264, 60, 1200, 0, 0, "green", 0);
        var TL_14: TrafficLight = new TrafficLight(265, 60, 1300, 0, 0, "green", 0);
        var TL_15: TrafficLight = new TrafficLight(266, 60, 1400, 0, 0, "green", 0);
        var TL_16: TrafficLight = new TrafficLight(267, 60, 1500, 0, 0, "green", 0);
        var TL_17: TrafficLight = new TrafficLight(268, 60, 1600, 0, 0, "green", 5);
        var TL_18: TrafficLight = new TrafficLight(269, 60, 1700, 0, 0, "green", 5);
        var TL_19: TrafficLight = new TrafficLight(270, 60, 1800, 0, 0, "green", 7);
        var TL_20: TrafficLight = new TrafficLight(273, 60, 1900, 0, 0, "green", 6);
        var TL_21: TrafficLight = new TrafficLight(274, 60, 2000, 0, 0, "green", 8);
        var TL_22: TrafficLight = new TrafficLight(275, 60, 2100, 0, 0, "green", 3);
        var TL_23: TrafficLight = new TrafficLight(489, 60, 2200, 0, 0, "green", 2);
        var TL_24: TrafficLight = new TrafficLight(533, 60, 2300, 0, 0, "green", 7);
        var TL_25: TrafficLight = new TrafficLight(599, 60, 2400, 0, 0, "green", 2);
        var TL_26: TrafficLight = new TrafficLight(600, 60, 2500, 0, 0, "green", 9);
        var TL_27: TrafficLight = new TrafficLight(601, 60, 2600, 0, 0, "green", 4);
        var TL_28: TrafficLight = new TrafficLight(602, 60, 2700, 0, 0, "green", 1);
        var TL_29: TrafficLight = new TrafficLight(603, 60, 2800, 0, 0, "green", 0);
        var TL_30: TrafficLight = new TrafficLight(604, 60, 2900, 0, 0, "green", 2);
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