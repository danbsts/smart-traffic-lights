import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import { GetTrafficLight } from '../../common/GetTrafficLight';
import { TrafficLight } from '../../common/TrafficLight';
import { UpdateTrafficLight } from '../../common/UpadteTrafficLight';

@Injectable()
export class TrafficLightController {
    private headers = new Headers({'Content-Type': 'application/json'});
    private trafficLightURL = 'http://localhost:3000';

    constructor(private http: Http) { }

    update(trafficLight: TrafficLight): TrafficLight {
        let responseTrafficLight: TrafficLight = this.get(trafficLight.id);
        let req: UpdateTrafficLight;
        if (trafficLight.place == "south") {
            req = new UpdateTrafficLight(responseTrafficLight, trafficLight);
        } else {
            req = new UpdateTrafficLight(trafficLight, responseTrafficLight);
        }
        this.http.post(this.trafficLightURL + "/update",JSON.stringify(req), {headers: this.headers})
        .toPromise()
        .then((ans: any) => {
           if (ans.json().success) return this.get(trafficLight.id);
        })
        .catch(this.tratarErro);
        return undefined;
    }

    get(id: number): TrafficLight{
        let req = new GetTrafficLight(id);
        this.http.post(this.trafficLightURL + "/update",JSON.stringify(req), {headers: this.headers})
        .toPromise()
        .then((ans: any) => {
            ans = <TrafficLight> ans;
           if (ans) {return ans;} else {return undefined;}
        })
        .catch(this.tratarErro);
        return undefined;
    }

    private tratarErro(erro: any): Promise<any>{
        console.error('Acesso mal sucedido ao serviço de semaforos',erro);
        return Promise.reject(erro.message || erro);
    }
}