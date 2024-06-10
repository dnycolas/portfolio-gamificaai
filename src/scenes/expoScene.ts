import { Color, Engine, FadeInOut, Keyboard, Scene, Transition, Keys, Resource } from "excalibur";
import { KeyEvent, KeyEvents, } from "excalibur/build/dist/Input/Keyboard";
import { Resources } from "../resources";

export class expoScene extends Scene {

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut ({
            direction:direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Blue 
        

        // adicionar a cena do mapa
        let tiledMap = Resources.Mapa

        tiledMap.addToScene(this)
    
    } 
}   
