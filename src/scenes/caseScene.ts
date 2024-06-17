import { Color, Engine, Scene, FadeInOut, Transition, SceneActivationContext, Label, vec, Font, TextAlign, Actor } from "excalibur";

export class caseScene extends Scene {
    private objetoInteracao: any

    private textoDaCena?: string = ""

    casesExplicados?: HTMLElement

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut ({
            direction:direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // Pegar dados vindos da cena passada
        this.objetoInteracao = context.data

        console.log(this.objetoInteracao);

        // Se for a mesa A
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_a") {

            let quadro = new Actor ({
                x: 800,
                y: 300,
                width: 600,
                height: 800,
                color: Color.White,
                
            })

            let borda = new Actor ({
                x: 800,
                y: 300,
                width: 700,
                height: 900,
                color: Color.Black,
                
                
            })
            
            let fraseBemVindo = new Label({
                text: "Essa é a descrição do case A",
                width: 400,
                height: 50,
                // Posição X = metade da tela, Posição Y = 300
                pos: vec(800,600) ,
                font: new Font({
                    color: Color.Black,
                    size: 40,
                    textAlign: TextAlign.Center,
                    family: "Anta", 
                    
                }),  
                  
            })

            this.add(borda)

            this.add(quadro)

            this.add(fraseBemVindo)

        //     this.casesExplicados = document.createElement("div") as HTMLElement
        // this.casesExplicados.style.opacity = "0"

        // let opacidade = parseFloat(this.casesExplicados.style.opacity)
        
        
        // setInterval(() => {
        //     if (opacidade < 1) {
        //         // Aumentar a visibilidade
        //         opacidade = opacidade + 0.01

        //         // Atualizar a opacidade do elemento
        //         this.casesExplicados!.style.opacity = opacidade.toString()             
                
        //     }
        // },10)

        // let containergame = document.querySelector(".container-game") as HTMLElement
        // containergame.appendChild(this.casesExplicados)

        // this.casesExplicados.classList.add("gamificacao")

        // // Adicionar titulo e paragrafo dentro do conteudo da div
        // this.casesExplicados.innerHTML = `<h2>O que é gamificação</h2> </div> `

}  
        
        

        // Se for a mesa B
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            let fraseBemVindo = new Label({
                text: "Essa é a descrição do case B",
                width: 400,
                height: 50,
                // Posição X = metade da tela, Posição Y = 300
                pos: vec(600,600) ,
                font: new Font({
                    color: Color.White,
                    size: 40,
                    textAlign: TextAlign.Center,
                    family: "Anta"
                })
            })

            this.add(fraseBemVindo)
        }                                                           
        // Se for a mesa C
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
            let fraseBemVindo = new Label({
                text: "Essa é a descrição do case C",
                width: 400,
                height: 50,
                // Posição X = metade da tela, Posição Y = 300
                pos: vec(600,600) ,
                font: new Font({
                    color: Color.White,
                    size: 40,
                    textAlign: TextAlign.Center,
                    family: "Anta"
                })
            })

            this.add(fraseBemVindo)
        }                                                           
    }
}