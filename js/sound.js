const $sine = $(".sin");
const $triangle = $(".tri");
const $square = $(".sqr");

const sine = new Tone.Synth().toDestination();
sine.oscillator.type = 'amsine';
sine.oscillator.modulationType = 'sine';
const triangle = new Tone.Synth().toDestination();
triangle.oscillator.type = 'amtriangle';
triangle.oscillator.modulationType = 'triangle';
const square = new Tone.Synth().toDestination();
square.oscillator.type = 'amsquare';
square.oscillator.modulationType = 'square';

function dynHarm(index, e) {
    const size = $sine.height();
    return ((e.pageY - (size * index)) / ((size + (size * index)) / 2) + 1);
}

$sine.mousemove(function(e) {sine.oscillator.harmonicity.value = dynHarm(0, e);});
$triangle.mousemove(function(e) {triangle.oscillator.harmonicity.value = dynHarm(1, e);});
$square.mousemove(function(e) {square.oscillator.harmonicity.value = dynHarm(2, e);});

$('.white').mousedown(function() {
    const notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b', 'C'];
    var note = '';

    for (let i = 0; i < notes.length; i++) {
        if (($(this).hasClass(notes[i])) === true) {
            switch (notes[i]) {
                case notes[0]:
                    note = 'C4';
                    break;
                case notes[1]:
                    note = 'D4';
                    break;
                case notes[2]:
                    note = 'E4';
                    break;
                case notes[3]:
                    note = 'F4';
                    break;
                case notes[4]:
                    note = 'G4';
                    break;
                case notes[5]:
                    note = 'A5';
                    break;
                case notes[6]:
                    note = 'B5';
                    break;
                case notes[7]:
                    note = 'C5';
                    break;
            } 
            console.log(note);   
        }
    }
    if ($(this).parent().hasClass("sin")) {
        sine.triggerAttack(note);
    } else if ($(this).parent().hasClass("tri")) {
        triangle.triggerAttack(note);
    } else if ($(this).parent().hasClass("sqr")) {
        square.triggerAttack(note);
    }
});
$('.white').mouseup(function() {
    if ($(this).parent().hasClass("sin")) {
        sine.triggerRelease();
    } else if ($(this).parent().hasClass("tri")) {
        triangle.triggerRelease();
    } else if ($(this).parent().hasClass("sqr")) {
        square.triggerRelease();
    }
});