
/**
 * @author Miguel Angel Vega Garcia
 * @date 7/8/2021
 */
export class Player
{
    constructor(params)
    {
        this.x = params.x;
        this.y = params.y;
        this.r = params.r;
        this.turnDirection = 0;    //  -1 0 1      left      -  nothing - right 
        this.turnSpeed = params.turnSpeed;
        this.walkDirection = 0;    //  -1 0 1      upwards    - nothing - backwards
        this.walkSpeed = params.walkSpeed;
        this.rotationAngle = Math.PI * 2;    
        this.context = params.context;

        this.startControls();
    }

    startControls()
    {
        window.onkeydown = e =>
        {
            switch(e.key)
            {
                case "ArrowUp"   : this.walkDirection = +1; break;
                case "ArrowDown" : this.walkDirection = -1; break;
                case "ArrowLeft" : this.turnDirection = -1; break;
                case "ArrowRight": this.turnDirection = +1; break;
                default:;
            }
        }

        window.onkeyup = e =>
        {
            switch(e.key)
            {
                case "ArrowUp"   : this.walkDirection = 0; break; 
                case "ArrowDown" : this.walkDirection = 0; break;
                case "ArrowLeft" : this.turnDirection = 0; break;
                case "ArrowRight": this.turnDirection = 0; break;
                default:;
            }
        }

        console.log(this.turnDirection);

    }

    render()
    {
        // Circle Player 
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        this.context.fillStyle = "red";
        this.context.fill()
        this.context.closePath();
        
        //Direction Line render
        let x = this.x + Math.cos(this.rotationAngle) * 20;
        let y = this.y + Math.sin(this.rotationAngle) * 20;

        this.context.beginPath();
        this.context.moveTo(this.x, this.y);
        this.context.lineTo(x, y);
        this.context.stroke();
        this.context.closePath();

    }


    update()
    {
        this.rotationAngle += this.turnDirection * this.turnSpeed;

        let step = this.walkDirection * this.walkSpeed;
        this.x += Math.cos(this.rotationAngle) * step;
        this.y += Math.sin(this.rotationAngle) * step;

    }
}