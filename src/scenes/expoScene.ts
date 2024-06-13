import { Color, Engine, FadeInOut, Keyboard, Scene, Transition, Keys, Resource, vec, Actor, CollisionType, Vector } from "excalibur";
import { KeyEvent, KeyEvents, } from "excalibur/build/dist/Input/Keyboard";
import { Resources } from "../resources";
import { Player } from "../actors/player";
import { npc } from "../actors/npc";

export class expoScene extends Scene {

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut ({
            direction:direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        // Ativar debug
        engine.toggleDebug

        this.backgroundColor = Color.Black
        

        // adicionar a cena do mapa
        let tiledMap = Resources.Mapa

        // Definir offset para redenrização do mapa
        let offsetX = 138
        let offsetY = 100


        tiledMap.addToScene(this, {
            pos: vec(offsetX,offsetY)
        })

        // Definir zoom da camera para aumentar um pouco a visualizaçao
        this.camera.zoom = 1.4


        // Carregar spawn point do player
        let spawnPoint = tiledMap.getObjectsByName("jogador")[0]



        // Criação e configuração do Player
        let jogador = new Player(vec(spawnPoint.x + offsetX, spawnPoint.y + offsetY))



        // Define z-index do player, útil se algum outro elemento ficar "por cima " do jogador
        jogador.z = 1
        
        // Adicionar o player na cena
        this.add(jogador)

        let spawnNpcA = tiledMap.getObjectsByName("npc_a")[0]
        let spawnNpcB = tiledMap.getObjectsByName("npc_b")[0]
        let spawnNpcC = tiledMap.getObjectsByName("npc_c")[0]

        // configurar NPCs 
        let npcA = new npc (
            vec(spawnNpcA.x + offsetX, spawnNpcA.y + offsetY),
            Color.Blue,
            "npcA"
        )

        // configurar NPCs 
        let npcB = new npc (
            vec(spawnNpcB.x + offsetX, spawnNpcA.y + offsetY),
            Color.Red,
            "npcB"
        )
        // configurar NPCs 
        let npcC = new npc (
            vec(spawnNpcC.x + offsetX, spawnNpcA.y + offsetY),
            Color.Yellow,
            "npcC"
        )

        this.add(npcA)
        this.add(npcB)
        this.add(npcC)

        // Focar a camera no player
        this.camera.strategy.lockToActor(jogador)
        this.camera.zoom = 1

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
