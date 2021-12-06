/**
 * THE PLANN (tm)
 * 
 * Not only is processing painful with what you're trying to do (https://happycoding.io/tutorials/processing/collision-detection),
 * but you also got 2 people both bringing up how you should use div tags. You know what you must do now.
 */

const sinWht = '#9ad6d1';
const sinBlk = '#4e8580';
const sinAct = '#20e6d5';
const triWht = '#cf84c3';
const triBlk = '#834d7a';
const triAct = '#e613c2';
const sqrWht = '#d1c871';
const sqrBlk = '#7a7546';
const sqrAct = '#f1db10';

var sinKeyWht = [];
var sinKeyBlk = [];

function setup() {
    createCanvas(720, 300);
    for (let key = 0; key < 8; key++) {
        const width = 90;
        rect((0 + (key * width)), 0, width, 300);   
    }
    for (let key = 0; key < 6; key++) {
        if (key != 2) {
            const width = 60;
        rect((width + (key * 90)), 0, width, 175); 
        }  
    }
}

function draw() {
    // create 8 white keys
    fill(sinWht)
    for (let key = 0; key < 8; key++) {
        const width = 90;
        rect((0 + (key * width)), 0, width, 300);   
    }
    // create 5 black keys
    fill(sinBlk);
    for (let key = 0; key < 6; key++) {
        if (key != 2) {
            const width = 60;
        rect((width + (key * 90)), 0, width, 175); 
        }  
    }


}