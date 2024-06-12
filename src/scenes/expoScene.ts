import { Color, Engine, FadeInOut, Keyboard, Scene, Transition, Keys, Resource, vec, Actor, CollisionType } from "excalibur";
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
        this.backgroundColor = Color.Black
        

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

        // Adicionar colisao com cada objeto
        // Pegar a camada de objetos colisores
        let camadaObjetosColisores = tiledMap.getObjectLayers("objetosColisores")[0]
        
        // Percorrer objetos com foreach e para cada objeto, renderizar um actor
        camadaObjetosColisores.objects.forEach(objeto => {
            // Configurar o actor 
            const objetoAtual = new Actor ({
                name: objeto.name,
                x: objeto.x + offsetX + (objeto.tiledObject.width! / 2),
                y: objeto.y + offsetY + (objeto.tiledObject.height! / 2),
                width: objeto.tiledObject.width,
                height: objeto.tiledObject.height,
                collisionType: CollisionType.Fixed,
                // color: Color.Red (para testar)
            })

            this.add(objetoAtual)
        })

    } 
}   
