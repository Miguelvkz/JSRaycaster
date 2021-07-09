/**
 * @author Miguel Angel Vega Garcia
 * @date 7/8/2021 
 */

let cell_size = 30,
    rows      = 11,
    cols      = 15,
    mapWidth  = cols * cell_size,
    mapHeight = rows * cell_size;

export class World
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