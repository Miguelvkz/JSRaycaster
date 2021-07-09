
/**
 * @author Miguel Angel Vega Garcia
 * @date 7/8/2021
 */


export class Game
{
    constructor({players, world})
    {
        this.players = players;
        this.world = world;
    }

    play()
    {   
        // Render Grid
        this.world.render()

        //Render Players
        this.players.forEach(player => {
            if(!this.checkWallCollition(player)){
                player.update();
            }
            player.render();
        })
    }

    checkWallCollition(player)
    {
        let step = player.walkDirection * player.walkSpeed;

        let nextX = player.x + Math.cos(player.rotationAngle) * step;
        let nextY = player.y + Math.sin(player.rotationAngle) * step;

        let gridX = Math.floor(nextX / this.world.cellSize);
        let gridY = Math.floor(nextY / this.world.cellSize);

        return this.world.grid[gridY][gridX]
        
    }

}