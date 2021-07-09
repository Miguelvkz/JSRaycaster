
/**
 * @author Miguel Angel Vega Garcia
 * @date 7/8/2021
 */


class Game
{
    constructor({players, world})
    {
        this.players = players;
        this.world = world;
    }

    play()
    {
        this.world.grid.render()

        this.players.forEach(player => {
            player.updade()
            player.render()
        })
    }

    checkWallCollition(player)
    {
        let step = player.walkDirection * player.walkSpeed;
        let nextX = player.x + Math.cos(player.rotationAngle) * step;
        let nextY = player.y + Math.sin(player.rotationAngle) * step;

        let gridX = Math.floor(nextX / this.world.)

    }

}