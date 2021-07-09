/**
 * @author Miguel Angel Vega Garcia
 * @date 7/7/2021 
 */

import { World } from "./src/map/World.js"
import { mapGrid } from "./src/map/GridExample.js"
import { context, width, height } from "./src/globals/globals.js"
import { Player } from "./src/player/Player.js"

let cell_size = 30,
    rows      = 11,
    cols      = 15,
    mapWidth  = cols * cell_size,
    mapHeight = rows * cell_size;


let grid = new World({grid: mapGrid, ctx: context});
let player = new Player({
    x: mapWidth  / 2,
    y: mapHeight / 2,
    r: 5,
    walkSpeed: 3.0,
    turnSpeed: 0.05,
    context,
})


render();
function render()
{

    context.clearRect(0,0,width, height);

    grid.render();
    player.update();
    player.render();

    requestAnimationFrame(render);
}