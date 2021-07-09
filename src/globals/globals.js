/**@type HTMLCanvasElement */
// @ts-ignore
let canvas    = document.getElementById("canvas"),
    context   = canvas.getContext("2d"),
    width     = canvas.width                      = innerWidth,
    height    = canvas.height                     = innerWidth;


export {
    canvas, context, width, height,
}