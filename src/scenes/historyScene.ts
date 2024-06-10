import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";



export class historyScene extends Scene {
    // Declaração do elementoTexto
    elementoTexto?: HTMLElement

    mostrarElemento: boolean = false; // Variável auxiliar para controlar opacidade


    
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

    

    // Ao entrar ou sair da cena, utiliza o feito de transição lenta
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    
    
    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        // criar elemento com a descrição da empresa
        this.elementoTexto = document.createElement("div") as HTMLElement
        this.elementoTexto.style.opacity = "0"
        
        

        let opacidade = parseFloat(this.elementoTexto.style.opacity)
        
        setInterval(() => {
            if (opacidade < 1) {
                // Aumentar a visibilidade
                opacidade = opacidade + 0.01

                // Atualizar a opacidade do elemento
                this.elementoTexto!.style.opacity = opacidade.toString()
                
            }
        },10)


        // Inserir elementoTexto no container-game
        let containergame = document.querySelector(".container-game") as HTMLElement
        containergame.appendChild(this.elementoTexto)
        
        // Adicionar classe na div criada (elementoTexto)
        this.elementoTexto.classList.add("sobre-gamifica")

        // Adicionar titulo e paragrafo dentro do conteudo da div
        this.elementoTexto.innerHTML = `<h2>Sobre o GamificaAi</h2>
        <p>Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores,
          usando inteligência artificial e design de jogos para desenvolver estratégias interativas que melhoram a
          experiência do usuário e impulsionam resultados. Acreditamos no poder dos jogos e da tecnologia para engajar
          equipes, aumentar a produtividade e motivar, adaptando cada projeto às necessidades específicas do cliente,
          desde programas de treinamento interativo até sistemas de recompensa e engajamento de funcionários.</p>
      </div> `

        // configurar actor do logoVertical
        let actorLogo = new Actor({
            pos: vec(engine.drawWidth / 1.3 , 350),
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

                // Criar transição sua do elemento texto
                this.fadeOutElement(this.elementoTexto!)

                // Direcionar para a próxima cena
                engine.goToScene("gamificacao",{
                    sourceOut: new FadeInOut ({duration: 1000})
                    })
                }
        })
        
        
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        // Remover elemento texto da tela
        this.elementoTexto?.remove()
    }
}
