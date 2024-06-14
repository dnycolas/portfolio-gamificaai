import { Actor, CollisionType, Color, Engine, SpriteSheet, Vector, Animation } from "excalibur";
import { Resources } from "../resources";

export class npc extends Actor {
    constructor(posicao: Vector, cor: Color, nome: string) {
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: nome,
            color: cor,
            collisionType: CollisionType.Fixed
        });
        
 
    }
    onInitialize(engine: Engine<any>): void {
        // configurando as sprites do personagem
        const npcSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.NpcASpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            }, spacing: {
                originOffset: {
                    y:0
                }
            }
        })

        const Idle = new Animation ({
            frames: [
                {graphic: npcSpriteSheet.getSprite(18,1)},
                {graphic: npcSpriteSheet.getSprite(19,1)},
                {graphic: npcSpriteSheet.getSprite(20,1)},
                {graphic: npcSpriteSheet.getSprite(21,1)},
                {graphic: npcSpriteSheet.getSprite(22,1)},
                {graphic: npcSpriteSheet.getSprite(23,1)},
            ]
        })

        this.graphics.add("Idle", Idle)

        this.graphics.use(Idle)
    }
}