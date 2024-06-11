import { Actor, Color, Engine, Keys, vec } from "excalibur";

export class Player extends Actor {
    // Propriedade do player
    private velocidade: number = 180

    // Configuração do Player
    constructor() {
        super({
            pos: vec(600, 520),
            radius: 16,
            name: "Jogador",
            color: Color.Red,
        })
    }

    onInitialize(engine: Engine<any>): void {
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
    }
}