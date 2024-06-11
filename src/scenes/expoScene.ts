import { Color, Engine, FadeInOut, Keyboard, Scene, Transition, Keys, Resource, vec } from "excalibur";
import { KeyEvent, KeyEvents, } from "excalibur/build/dist/Input/Keyboard";
import { Resources } from "../resources";
import { Player } from "../actors/player";

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

        // Definir offset para redenrização do mapa
        let offsetX = 138
        let offsetY = 100


        tiledMap.addToScene(this, {
            pos: vec(offsetX,offsetY)
        })

        this.camera.zoom = 1.4

        // Criação e configuração do Player
        let jogador = new Player()

        // Define z-index do player, útil se algum outro elemento ficar "por cima " do jogador
        jogador.z = 1
        
        // Adicionar o player na cena
        this.add(jogador)
    } 
}   
