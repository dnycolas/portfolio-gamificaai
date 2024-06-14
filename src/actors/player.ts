import { Actor, Animation, Collider, CollisionContact, CollisionType, Color, Engine, Keys, Side, SpriteSheet, Vector, vec } from "excalibur";
import { Resources } from "../resources";

export class Player extends Actor {
    // Propriedade do player
    private velocidade: number = 180

    private temObjetoProximo: boolean = false

    private ultimoColisor?: Collider

    // Configuração do Player
    constructor(posicao: Vector) {
        super({
            pos: posicao,
            width:32,
            height:32,
            name: "Jogador",
            color: Color.Red,
            collisionType: CollisionType.Active
        })
    }

    onInitialize(engine: Engine<any>): void {
        // Configurar sprite do player 
        const PlayerSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerSpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0
                }
            }
        })

        // Criar animaçoes
        const duracaoFrameAnimacao = 70
        // Animacoes Idle
        // Idle Esquerda
        const leftIdle = new Animation ({
            frames: [
                {graphic: PlayerSpriteSheet.getSprite(12,1)},
                {graphic: PlayerSpriteSheet.getSprite(13,1)},
                {graphic: PlayerSpriteSheet.getSprite(14,1)},
                {graphic: PlayerSpriteSheet.getSprite(15,1)},
                {graphic: PlayerSpriteSheet.getSprite(16,1)},
                {graphic: PlayerSpriteSheet.getSprite(17,1)},
            ],
        })
        this.graphics.add("leftIdle", leftIdle)

        // this.graphics.use("leftIdle")

        // idle direita
        const rightIdle = new Animation ({
            frames: [
                {graphic: PlayerSpriteSheet.getSprite(0,1)},
                {graphic: PlayerSpriteSheet.getSprite(1,1)},
                {graphic: PlayerSpriteSheet.getSprite(2,1)},
                {graphic: PlayerSpriteSheet.getSprite(3,1)},
                {graphic: PlayerSpriteSheet.getSprite(4,1)},
                {graphic: PlayerSpriteSheet.getSprite(5,1)},
            ]
        }) 

        this.graphics.add("rightIdle", rightIdle)

        // this.graphics.use("rightIdle")

        // idle down 
        const downIdle = new Animation ({
            frames: [
                {graphic: PlayerSpriteSheet.getSprite(18,1)},
                {graphic: PlayerSpriteSheet.getSprite(19,1)},
                {graphic: PlayerSpriteSheet.getSprite(20,1)},
                {graphic: PlayerSpriteSheet.getSprite(21,1)},
                {graphic: PlayerSpriteSheet.getSprite(22,1)},
                {graphic: PlayerSpriteSheet.getSprite(23,1)},
            ]
        }) 

        this.graphics.add("downIdle", downIdle)

        // this.graphics.use("downIdle")

        const upIdle = new Animation ({
            frames: [
                {graphic: PlayerSpriteSheet.getSprite(6,1)},
                {graphic: PlayerSpriteSheet.getSprite(7,1)},
                {graphic: PlayerSpriteSheet.getSprite(8,1)},
                {graphic: PlayerSpriteSheet.getSprite(9,1)},
                {graphic: PlayerSpriteSheet.getSprite(10,1)},
                {graphic: PlayerSpriteSheet.getSprite(11,1)},
            ]
        }) 

        this.graphics.add("upIdle", upIdle)

        this.graphics.use("upIdle")


        // idle direita
        const leftWalk = new Animation ({
            frames: [
                {graphic: PlayerSpriteSheet.getSprite(13,2)},
                {graphic: PlayerSpriteSheet.getSprite(12,2)},
                {graphic: PlayerSpriteSheet.getSprite(14,2)},
                {graphic: PlayerSpriteSheet.getSprite(15,2)},
                {graphic: PlayerSpriteSheet.getSprite(16,2)},
                {graphic: PlayerSpriteSheet.getSprite(17,2)},
            ],
        }) 

        this.graphics.add("leftWalk", leftWalk)

        // this.graphics.use("leftWalk")


        const rightWalk = new Animation ({
            frames: [
                {graphic: PlayerSpriteSheet.getSprite(0,2)},
                {graphic: PlayerSpriteSheet.getSprite(1,2)},
                {graphic: PlayerSpriteSheet.getSprite(2,2)},
                {graphic: PlayerSpriteSheet.getSprite(3,2)},
                {graphic: PlayerSpriteSheet.getSprite(4,2)},
                {graphic: PlayerSpriteSheet.getSprite(5,2)},
            ]
        }) 

        this.graphics.add("rightWalk", rightWalk)

        // this.graphics.use("rightWalk")


        const downWalk = new Animation ({
            frames: [
                {graphic: PlayerSpriteSheet.getSprite(18,2)},
                {graphic: PlayerSpriteSheet.getSprite(19,2)},
                {graphic: PlayerSpriteSheet.getSprite(20,2)},
                {graphic: PlayerSpriteSheet.getSprite(21,2)},
                {graphic: PlayerSpriteSheet.getSprite(22,2)},
                {graphic: PlayerSpriteSheet.getSprite(23,2)},
            ]
        }) 

        this.graphics.add("downWalk", downWalk)

        // this.graphics.use("downWalk")


        const upWalk = new Animation ({
            frames: [
                {graphic: PlayerSpriteSheet.getSprite(6,2)},
                {graphic: PlayerSpriteSheet.getSprite(7,2)},
                {graphic: PlayerSpriteSheet.getSprite(8,2)},
                {graphic: PlayerSpriteSheet.getSprite(9,2)},
                {graphic: PlayerSpriteSheet.getSprite(10,2)},
                {graphic: PlayerSpriteSheet.getSprite(11,2)},
            ]
        }) 

        this.graphics.add("upWalk", upWalk)

        // this.graphics.use("upWalk")

       

        // pra ver se ta funcionando (colocar imagem)
        // let imagemPlayer = PlayerSpriteSheet.getSprite(3, 0)
        // this.graphics.add(imagemPlayer)

        // Configurar player para monitorar evento "hold" -> segurar tecla
        engine.input.keyboard.on("press", (event) => {
            // Detectar qual tecla está pressionada
            switch (event.key) {
                case Keys.Left:
                case Keys.A:
                    // Mover para esquerda
                    // Define a velocidade x para negativa, que siginifica movimentar o player para a esquerda
                    this.vel.x = -this.velocidade;
                    this.graphics.use("leftWalk")
                    
                    break;

                case Keys.Right:
                case Keys.D:
                    // Mover para direita
                    // Define a velocidade x positivas, que siginifica movimentar o player para a direita
                    this.vel.x = this.velocidade;
                    this.graphics.use("rightWalk")
                    break;

                case Keys.Up:
                case Keys.W:
                    // Mover para direita
                    // Define a velocidade y negativa, que siginifica movimentar o player para cima
                    this.vel.y = -this.velocidade;
                    this.graphics.use("upWalk")
                    break;
                    
                    case Keys.Down:
                        case Keys.S:
                            // Mover para direita
                            // Define a velocidade y positiva, que siginifica movimentar o player para baixo
                            this.vel.y = this.velocidade;
                            this.graphics.use("downWalk")
                    break;
                default:
                    // Zera a velocidade do Player , PARA a movimentação
                    this.vel.x = 0
                    this.vel.y = 0
                    break;
            }
        })

        // Configura o player para monitorar evento "release" -> soltar
        engine.input.keyboard.on ("release", (event) => {
            // Fazer o player parar ao soltar as teclas de movimentação
            // Parar movimentação lateral ao soltar as teclas de movimentação lateral
            if (
                event.key == Keys.A ||
                event.key == Keys.Left ||
                event.key == Keys.D ||
                event.key == Keys.Right
            ) {
                // Zerar velocidade horizontal
                this.vel.x = 0
            }

            if (event.key == Keys.A) {
                this.graphics.use("leftIdle")
            } else if (event.key == Keys.Left) {
                this.graphics.use("leftIdle")
            } 
            if (event.key == Keys.D) {
                this.graphics.use("rightIdle")
            } else if (event.key == Keys.Right) {
                this.graphics.use("rightIdle")
            } 

            // Para movimentação vertical ao soltar as teclas de movimentacao vertical
            if (
                event.key == Keys.W ||
                event.key == Keys.Up ||
                event.key == Keys.S ||
                event.key == Keys.Down
            ) {
                // Zerar velocidade horizontal
                this.vel.y = 0
            }

            if (event.key == Keys.S) {
                this.graphics.use("downIdle")
            } else if (event.key == Keys.Down) {
                this.graphics.use("downIdle")
            } 
            if (event.key == Keys.W) {
                this.graphics.use("upIdle")
            } else if (event.key == Keys.Up) {
                this.graphics.use("upIdle")
            } 

        })
    }

    onPostCollisionResolve(self: Collider, other: Collider, side: Side, contact: CollisionContact): void {
        // Indicar que tem um objeto proximo
        this.temObjetoProximo = true

        // Registrar o ultimo objeto colidido
        this.ultimoColisor = other

    }

    onPreUpdate(engine: Engine<any>, delta: number): void {
        // Detectar se o player esta distante do ultimo objeto colidido
        if (this.ultimoColisor && this.pos.distance(this.ultimoColisor.worldPos) > 60) {
            // Marca que o objeto não está próximo
            this.temObjetoProximo = false 

            console.log("Esta longe")

            
        }
    }

}