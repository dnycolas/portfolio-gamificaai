import { Actor, Animation, CollisionType, Color, Engine, Keys, SpriteSheet, Vector, vec } from "excalibur";
import { Resources } from "../resources";

export class Player extends Actor {
    // 

    // Propriedade do player
    private velocidade: number = 180

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
                    y: 8
                }
            }
        })

        // Criar animaçoes
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
            frameDuration: 70
        })
        this.graphics.add("leftIdle", leftIdle)

        this.graphics.use("leftIdle")

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
                    this.vel.x = -this.velocidade
                    break;

                case Keys.Right:
                case Keys.D:
                    // Mover para direita
                    // Define a velocidade x positivas, que siginifica movimentar o player para a direita
                    this.vel.x = this.velocidade
                    break;

                case Keys.Up:
                case Keys.W:
                    // Mover para direita
                    // Define a velocidade y negativa, que siginifica movimentar o player para cima
                    this.vel.y = -this.velocidade
                    break;

                case Keys.Down:
                case Keys.S:
                    // Mover para direita
                    // Define a velocidade y positiva, que siginifica movimentar o player para baixo
                    this.vel.y = this.velocidade
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
        })
    }
}