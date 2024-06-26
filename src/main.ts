import { Engine, FadeInOut } from "excalibur";
import { welcomeScene } from "./scenes/welcomeScene";
import { loader } from "./resources";
import { historyScene } from "./scenes/historyScene";
import { gamificationScene } from "./scenes/gamificationScene";
import { expoScene } from "./scenes/expoScene";
import { comandos } from "./scenes/comandos";
import {caseScene} from "./scenes/caseScene"

const game = new Engine({
  width: 1200,
  height: 800,
  canvasElementId: "jogo",
  // otimização para PixelArt
  pixelArt: true
})

game.addScene("bemvindo", new welcomeScene())
game.addScene("historia", new historyScene())
game.addScene("gamificacao", new gamificationScene())
game.addScene("comandos", new comandos())
game.addScene("exposicao", new expoScene())
game.addScene("cenaCase", new caseScene())

game.start(loader).then(() => {
  game.goToScene("exposicao", {
    // Adiciona transição lenta ao ir para a welcomeScene
    sourceOut: new FadeInOut({ duration: 1000 })
  })
})
