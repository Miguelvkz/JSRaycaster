/**
 * @author Miguel Angel Vega Garcia
 * @date 7/8/2021 
 */

export class World
{
    constructor({grid, ctx, cell_size = 30, rows = 11, cols = 15}){
        this.grid = grid;
        this.ctx = ctx;
        this.cellSize = cell_size;
        this.rows = rows;
        this.cols = cols;
    }

    get mapWidth() { return this.cols * this.cellSize}
    get mapHeight() { return this.rows * this.cellSize}

    render(){
        this.grid.forEach( (row, i) => {
            row.forEach( (col, j) => {
                let x = j * this.cellSize;
                let y = i * this.cellSize;

                this.ctx.beginPath();
                this.ctx.fillStyle = col === 1 ? "blue" : "white";
                this.ctx.rect(x, y, this.cellSize, this.cellSize);
                this.ctx.fill();
                this.ctx.closePath();

            });
        })
    }
}