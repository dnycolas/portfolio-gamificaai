import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene {
    explicacaoTexto?: HTMLElement

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
        duration: 1000
       })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        
        this.explicacaoTexto = document.createElement("div") as HTMLElement
        this.explicacaoTexto.style.opacity = "0"

        let opacidade = parseFloat(this.explicacaoTexto.style.opacity)
        
        
        setInterval(() => {
            if (opacidade < 1) {
                // Aumentar a visibilidade
                opacidade = opacidade + 0.01

                // Atualizar a opacidade do elemento
                this.explicacaoTexto!.style.opacity = opacidade.toString()             
                
            }
        },30)

        let containergame = document.querySelector(".container-game") as HTMLElement
        containergame.appendChild(this.explicacaoTexto)

        this.explicacaoTexto.classList.add("gamificacao")

        // Adicionar titulo e paragrafo dentro do conteudo da div
        this.explicacaoTexto.innerHTML = `<h2>O que é gamificação</h2>
        <p>Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos desejados e aumentar a participação e o comprometimento dos participantes.</p>
      </div> `

            // configurar actor do logoVertical
            let actorLogo = new Actor({
                pos: vec(engine.drawWidth / 4.5 , 350),
            })
    
            // Utilizar imagem do logoVertical
            let imagemLogo = Resources.logoVertical.toSprite()
            
            // aplicar zoom na imagem
            imagemLogo.scale = vec(0.7,0.7)
    
            // configurar o metodo para 
            actorLogo.graphics.add(imagemLogo)
    
            // adicionando Actor o logo na tela
            this.add(actorLogo)

                this.input.keyboard.on("press", (event) => {
                    if ( event.key == Keys.Enter ) {
                        this.fadeOutElement(this.explicacaoTexto!)
                        // Direcionar para a próxima cena
                        engine.goToScene("exposicao",{
                        sourceOut: new FadeInOut ({duration: 1000})
                    })
                }
            })
        }
    
    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.explicacaoTexto?.remove()
    }
}    
