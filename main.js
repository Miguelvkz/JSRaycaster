/**
 * @author Miguel Angel Vega Garcia
 * @date 7/7/2021 
 */

import { World } from "./src/map/World.js"
import { mapGrid } from "./src/map/GridExample.js"
import { context, width, height } from "./src/globals/globals.js"

    

let grid = new World(mapGrid, context);



render();
function render()
{

    context.clearRect(0,0,width, height)
    grid.render()
    requestAnimationFrame(render);
}