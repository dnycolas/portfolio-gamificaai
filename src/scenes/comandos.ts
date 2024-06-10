import { Actor, Color, Engine, FadeInOut, KeyEvent, Keys, Resource, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class comandos extends Scene {
    comandinho?: HTMLElement 


    // Método para esmaecer um elemento HTML
    fadeOutElement(elemento: HTMLElement) {


        // Pegar opacidade do elemento HTML
        let opacidade = parseFloat(elemento.style.opacity)

        //  Repetir diminuição da opacidade
        setInterval(() => {
            // Se elemento ainda esta visivel
            if (opacidade > 0) {
                // Diminuir a opacidade
                opacidade = opacidade - 0.01
    
                // Atualizar a opacidade do elemento
                elemento.style.opacity = opacidade.toString()
    
            }

        }, 10)


    }
    
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut ({
            direction: direction,
            color: Color.Black,
            duration: 1000,
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        this.comandinho = document.createElement("div") as HTMLElement
        this.comandinho.style.opacity = "0"
        

        let opacidade = parseFloat(this.comandinho.style.opacity)


        setInterval(() => {
        if (opacidade < 1) {
            opacidade = opacidade + 0.01

            this.comandinho!.style.opacity = opacidade.toString()
        }
    },10)

        let containergame = document.querySelector(".container-game") as HTMLElement
        containergame.appendChild(this.comandinho)

        this.comandinho.classList.add("botoesComando")

        this.comandinho.innerHTML = `<h2>Comandos</h2>
        <p>Agora conheça alguns cases da nossa empresa, interagindo com o cenário </p>
        <div class="botoesInteracao">
        <img src="src/images/botoesAndar.png" alt="">
        <img src="src/images/botoesAcoes.png" alt="">
        </div>`
        
        

                this.input.keyboard.on("press", (event) => {
                    if ( event.key == Keys.Enter ) {

                        this.fadeOutElement(this.comandinho!)

                        // Direcionar para a próxima cena
                        engine.goToScene("exposicao",{
                        sourceOut: new FadeInOut ({duration: 1000})
                    })
                }
            })
        }   
        
        onDeactivate(context: SceneActivationContext<undefined>): void {
            // Remover elemento texto da tela
            this.comandinho?.remove()
        }
}
  
