import { Color, Engine, FadeInOut, Keyboard, Scene, Transition, Keys } from "excalibur";
import { KeyEvent, KeyEvents, } from "excalibur/build/dist/Input/Keyboard";

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
    
    
    } 
}   
