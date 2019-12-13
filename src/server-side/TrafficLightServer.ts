import { TrafficLightRepository } from "./repository/TrafficLightRepository";
import express = require('express');
import bodyParser = require("body-parser");
import { GetTrafficLight } from "../common/GetTrafficLight";
import { TrafficLight } from "../common/TrafficLight";
import { UpdateTrafficLight } from "../common/UpadteTrafficLight";

const port = process.env.PORT || 3000;

var app = express();
var trafficLights: TrafficLightRepository = new TrafficLightRepository();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

app.get('/getStatus', function (req, res) {
    let getTrafficLight: GetTrafficLight = <GetTrafficLight> req.body;
    let ans: TrafficLight = trafficLights.getById(getTrafficLight.id);
    if (ans) {
        res.send(JSON.stringify(ans));
    } else {
        res.send("Not found!")
    }
})

app.get('/getAll', function (req, res) {
  res.send(JSON.stringify(trafficLights.getAll()))
})

app.post('/refresh', function (req: express.Request, res: express.Response) {
    var trafficLight: UpdateTrafficLight = <UpdateTrafficLight> req.body;
    console.log(req.body);
    if (trafficLight)
        var saved = trafficLights.updateTrafficLight(trafficLight.north, trafficLight.south);
    if (saved && trafficLight) {
      res.send({"success": "O semaforo foi atualizado com sucesso"});
    } else {
      res.send({"failure": "O semaforo nao pode ser atualizado"});
    }
})

var server = app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!')
})