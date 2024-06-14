import { TiledResource } from "@excaliburjs/plugin-tiled";
import { ImageFiltering, ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import logo from "./images/logo.png";
import logoVertical from "./images/logo-vertical.png";

import pngTileSetPath from "./maps/tilesets/Room_Builder_32x32.png?url"

import tsxParedesPath from "./maps/tileset_paredes.tsx?url"
import tsxPlantaPath from "./maps/tiliset_planta.tsx?url"
import tsxComputadoresPath from "./maps/tileset_computadores.tsx?url"
import tsxObjetosPath from "./maps/tileset_objetos.tsx?url"

import tmxMapaPath from "./maps/showroomMap.tmx?url"

import PlayerSpritePath from "./sprites/jogador.png"

import NpcASpritePath from "./sprites/npc_A.png"

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  PlayerSpriteSheet: new ImageSource(PlayerSpritePath, {filtering: ImageFiltering.Pixel}),
  NpcASpriteSheet: new ImageSource(NpcASpritePath, {filtering: ImageFiltering.Pixel}),
  logoVertical: new ImageSource(logoVertical),
  Mapa: new TiledResource(tmxMapaPath, {
    pathMap: [
      {path: "showroomMap.tmx", output: tmxMapaPath},
      {path: "Room_Builder_32x32.png", output: pngTileSetPath},
      {path: "tileset_paredes.tsx", output: tsxParedesPath},
      {path: "tiliset_planta.tsx", output:  tsxPlantaPath},
      {path: "tileset_computadores.tsx", output:  tsxComputadoresPath},
      {path: "tileset_objetos.tsx", output: tsxObjetosPath},
    ]
  })
    
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
