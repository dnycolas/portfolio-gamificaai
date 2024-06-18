import { Color, Engine, Scene, FadeInOut, Transition, SceneActivationContext, Label, vec, Font, TextAlign, Actor, Keys, Resource, Graphic } from "excalibur";
import { line } from "excalibur/build/dist/Util/DrawUtil";
import { Resources } from "../resources";

export class caseScene extends Scene {
    private objetoInteracao: any;

    casesExplicados?: HTMLElement;

    FadeOutElement(elemento:HTMLElement) {
        let opacidade = parseFloat(elemento.style.opacity)

        setInterval(() => {
            // Se elemento ainda esta visivel
            if (opacidade > 0) {
                // Diminuir a opacidade
                opacidade = opacidade - 0.01
    
                // Atualizar a opacidade do elemento
                elemento.style.opacity = opacidade.toString()
    
            }

        }, 5)
        

    }

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut ({
            direction:direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

        engine.input.keyboard.on ("press", (event) => {

            let cont = 1

            if(event.key == Keys.G && cont <= 1) {

                
                   cont = cont + 1
                

                engine.goToScene("exposicao", {
                    // Adiciona transição lenta ao ir para a welcomeScene
                    sourceOut: new FadeInOut({ duration: 100 })
                  })

            }
        })

    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // Pegar dados vindos da cena passada
        this.objetoInteracao = context.data

        console.log(this.objetoInteracao);





        // Se for a mesa A
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_a") {


        this.casesExplicados = document.createElement("div") as HTMLElement
        this.casesExplicados.style.opacity = "0"

        let opacidade = parseFloat(this.casesExplicados.style.opacity)
        
        
        setInterval(() => {
            if (opacidade < 1) {
                // Aumentar a visibilidade
                opacidade = opacidade + 0.01

                // Atualizar a opacidade do elemento
                this.casesExplicados!.style.opacity = opacidade.toString()             
                
            }
        },5)

        let containergame = document.querySelector(".container-game") as HTMLElement
        containergame.appendChild(this.casesExplicados)

        this.casesExplicados.classList.add("gamificacao")

        // Adicionar titulo e paragrafo dentro do conteudo da div
        this.casesExplicados.innerHTML = `<h2>Essa é a descrição do case A</h2> </div> `

        let posicaoNPC = new Actor ({
            pos: vec(300,this.engine.drawHeight / 2)
        })

        let imagemPersonagem = Resources.JapaPhoto.toSprite()

        imagemPersonagem.scale = vec(2,2)


        posicaoNPC.graphics.add(imagemPersonagem)

        this.add(posicaoNPC)
}  
        
        




        // Se for a mesa B
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            this.casesExplicados = document.createElement("div") as HTMLElement
        this.casesExplicados.style.opacity = "0"

        let opacidade = parseFloat(this.casesExplicados.style.opacity)
        
        
        setInterval(() => {
            if (opacidade < 1) {
                // Aumentar a visibilidade
                opacidade = opacidade + 0.01

                // Atualizar a opacidade do elemento
                this.casesExplicados!.style.opacity = opacidade.toString()             
                
            }
        },10)

        let containergame = document.querySelector(".container-game") as HTMLElement
        containergame.appendChild(this.casesExplicados)

        this.casesExplicados.classList.add("gamificacao")

        // Adicionar titulo e paragrafo dentro do conteudo da div
        this.casesExplicados.innerHTML = `<h2>Essa é a descrição do case B</h2> </div> `

        let posicaoNPC = new Actor ({
            pos: vec(600,600)
        })

        let imagemPersonagem = Resources.JapaPhoto.toSprite()


        posicaoNPC.graphics.add(imagemPersonagem)

        this.add(posicaoNPC)
            
    }   

        
        



        // Se for a mesa C
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
            this.casesExplicados = document.createElement("div") as HTMLElement
        this.casesExplicados.style.opacity = "0"

        let opacidade = parseFloat(this.casesExplicados.style.opacity)
        
        
        setInterval(() => {
            if (opacidade < 1) {
                // Aumentar a visibilidade
                opacidade = opacidade + 0.01

                // Atualizar a opacidade do elemento
                this.casesExplicados!.style.opacity = opacidade.toString()             
                
            }
        },10)

        let containergame = document.querySelector(".container-game") as HTMLElement
        containergame.appendChild(this.casesExplicados)

        this.casesExplicados.classList.add("gamificacao")

        // Adicionar titulo e paragrafo dentro do conteudo da div
        this.casesExplicados.innerHTML = `<h2>Essa é a descrição do case C</h2> </div> `

        let posicaoNPC = new Actor ({
            pos: vec(1800,600)
        })

        let imagemPersonagem = Resources.JapaPhoto.toSprite()


        posicaoNPC.graphics.add(imagemPersonagem)

        this.add(posicaoNPC)
}    
        
        


    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.casesExplicados?.remove()
    }
}