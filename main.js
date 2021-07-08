/**
 * @author Miguel Angel Vega Garcia
 * @date 7/7/2021 
 */

let cell_size = 30;
let rows = 11;
let cols = 15;


    /**@type HTMLCanvasElement */
    // @ts-ignore
let canvas  = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width   = canvas.width                      = innerWidth,
    height  = canvas.height                     = innerWidth;

let mapWidth  = cols * cell_size;
let mapHeight = rows  * cell_size;

let mapGrid = [

    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

];

class World
{
    constructor(grid, ctx){
        this.grid = grid;
        this.ctx = ctx;
    }

    render(){
        this.grid.forEach( (row, i) => {
            row.forEach( (col, j) => {
                let x = j * cell_size;
                let y = i * cell_size;

                this.ctx.beginPath();
                this.ctx.fillStyle = col === 1 ? "blue" : "white";
                this.ctx.rect(x, y, cell_size, cell_size);
                this.ctx.fill();
                this.ctx.closePath();

            });
        })
    }
}


let game = new World(mapGrid, context);

render();
function render()
{

    context.clearRect(0,0,width, height)
    game.render()
    requestAnimationFrame(render);
}