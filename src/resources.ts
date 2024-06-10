import { TiledResource } from "@excaliburjs/plugin-tiled";
import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import logo from "./images/logo.png";
import logoVertical from "./images/logo-vertical.png";

import pngTileSetPath from "./maps/tilesets/Room_Builder_32x32.png?url"

import tsxParedesPath from "./maps/tileset_paredes.tsx?url"
import tsxPlantaPath from "./maps/tiliset_planta.tsx?url"
import tsxComputadoresPath from "./maps/tileset_computadores.tsx?url"
import tsxObjetosPath from "./maps/tileset_objetos.tsx?url"

import tmxMapaPath from "./maps/showroomMap.tmx?url"

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
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
