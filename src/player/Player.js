
export class Player
{
    constructor(params)
    {
        this.x = params.x;
        this.y = params.y;
        this.r = params.r;
        this.turnDirection = 0;    //  -1 0 1      left      -  nothing - right 
        this.walkDirection = 0;    //  -1 0 1      upwards    - nothing - backwards
        this.rotationAngle = Math.PI * 2;

        this.walkSpeed = 3.0;
        this.turnSpeed = 0.05;
    }
}