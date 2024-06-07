import { Actor, Blink, Color, Engine, FadeInOut, Font, Keys, Label, Scene, TextAlign, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class welcomeScene extends Scene {


    frase?: Label

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        // this = Essa classe, ou seja, essa Cena
        this.backgroundColor = Color.Black

        // Configura o objeto para ser a frase de Bem-Vindo
        let fraseBemVindo = new Label({
            text: "Bem vindo ao Portfólio",
            width: 400,
            height: 50,
            // Posição X = metade da tela, Posição Y = 300
            pos: vec(engine.drawWidth / 2, 300), 
            font: new Font({
                color: Color.White,
                size: 40,
                textAlign: TextAlign.Center,
                family: "Anta"
            })
        })
        
        // Adiciona a frase na cena, tela
        this.add(fraseBemVindo)

        // configurar actor do logo 
        let actorLogo = new Actor({
            pos: vec(engine.drawWidth / 2 , 430),
        })

        // Utilizar imagem do logo
        let imagemLogo = Resources.Logo.toSprite()
        
        // aplicar zoom na imagem
        imagemLogo.scale = vec(0.4,0.4)

        // configurar o metodo para 
        actorLogo.graphics.add(imagemLogo)

        // adicionando Actor o logo na tela
        this.add(actorLogo)

// ____________________________________________________________________________________________________________________________
// forma que eu fiz

    // frase = new Label({
    //     text: 'pressione "Enter" para iniciar ',
    //     width: 400,
    //     height: 50,
    //     // Posição X = metade da tela, Posição Y = 300
    //     pos: vec(engine.drawWidth / 2, 500), 
    //     font: new Font({
    //         color: Color.White,
    //         size: 40,
    //         textAlign: TextAlign.Center,
    //         family: "Anta"
    //     })

    // })

    // frase.actions.blink(200, 200, 1000000000000000000000000 )

    // // Adiciona a frase na cena, tela
    // this.add(frase)
        
// ____________________________________________________________________________________________________________________________
// forma que o professor fez

        // configurar o texto de iniciar
    //     this.frase = new Label({
    //         text: "pressione \"Enter\" para iniciar ",
    //         width: 200,
    //         height: 50,
    //         // Posição X = metade da tela, Posição Y = 300
    //         pos: vec(engine.drawWidth / 2, 630), 
    //         font: new Font({
    //             color: Color.White,
    //             size: 20,
    //             textAlign: TextAlign.Center,
    //             family: "Anta"
    //         })

    //     })

    //     // Adiciona a frase na cena, tela
    //     this.add(this.frase)
    // }

    // onPreUpdate(engine: Engine<any>, delta: number): void {
    //     this.frase?.actions.fade(0, 1000)
    //     this.frase?.actions.fade(1, 1000)

// ____________________________________________________________________________________________________________________________
// forma que os alunos fizeram

        // configurar o texto de iniciar
        this.frase = new Label({
            text: "pressione \"Enter\" para iniciar ",
            width: 200,
            height: 50,
            // Posição X = metade da tela, Posição Y = 300
            pos: vec(engine.drawWidth / 2, 630), 
            font: new Font({
                color: Color.White,
                size: 20,
                textAlign: TextAlign.Center,
                family: "Anta"
            })

        })

        // Adiciona a frase na cena, tela
        this.add(this.frase)



        // Move up in a zig-zag by repeated moveBy's
        this.frase.actions.repeatForever( context => {
        context.fade(0, 1000),
        context.fade(1, 1000)
        })

        this.input.keyboard.on("press", (event) => {
            // Caso a tecla pressiona for "Enter", deve ir para a proxima cena
            if (event.key ==  Keys.Enter) {
                // Direciona para a cena Historia
                engine.goToScene("historia",{
                    sourceOut: new FadeInOut({ duration: 1000})
                })
            }
        })
    
    }

}
