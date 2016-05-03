/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 ** File: main.js
 ** ----------------
 ** This is the main Javascript file.
 ** This contains all the Javascript that works top level,
 ** meaning all the UI and the call to evaluate which accesses all the dataobjects.
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

$(document).ready(function() { // wait for page to load to run Javascript
	// Variable Declaration

	// Function Calls *Called when page loads
	init();

	// CLICK HANDLERS
	$("#run").click(function() {
		evaluate($("#input").val());
	});

	$("#runmidi").click(function() {
		var evalRet = eval($("#midi").val());
		console.log(evalRet);
	});
	$("#playMusic").click(function() {

		//Example sequences
		// var midiStuff = new Seq(new Para(new Note("alto_sax", 55, 40, 2),new Note("synth_drum", 65, 40, 3)),new Seq(new Para(new Note("acoustic_guitar_steel", 70, 40, 1),new Note("alto_sax", 45, 40, 2)),new Note("acoustic_grand_piano", 50, 40, 5)));
		// var midiStuff2 = new Seq(new Note("acoustic_grand_piano", 45, 40, 2), new Note("acoustic_grand_piano", 60, 40, 2));
		var testMidi = new Note("acoustic_grand_piano", 60, 100, 2);

		//Loading MIDI plugin
		MIDI.loadPlugin({
			//Finds the soundfont file for instruments
			soundfontUrl: "./Resources/MIDI.js-master/soundfont/",
			//Sets instruments in an array
			instrument: ["acoustic_grand_piano", "synth_drum", "acoustic_guitar_nylon", "acoustic_guitar_steel", "alto_sax" /*"baritone_ sax", "brass_section", "distortion_guitar", "electric_bass_finger", "electric_bass_pick", "electric_guitar_jazz", "flute", "soprano_sax", "tenor_sax", "trumpet"*/],//piano at 0, percussion at 1
			callback: function() {
				//Setting instruments to channels (channelNumber, instrumentValue)
				// limited to 5 channels it seems **********

				MIDI.programChange(0,0);
				MIDI.programChange(1,118);
				MIDI.programChange(2,24);
				MIDI.programChange(3,25);
				MIDI.programChange(4,65);
				/*MIDI.programChange(5,67);
				 MIDI.programChange(6,61);
				 MIDI.programChange(7,30);
				 MIDI.programChange(8,33);
				 MIDI.programChange(9,34);
				 MIDI.programChange(10,26);
				 MIDI.programChange(11,73);
				 MIDI.programChange(12,64);
				 MIDI.programChange(13,66);
				 MIDI.programChange(14,56); */

				//Setting initial volume level
				MIDI.setVolume(0, 20);
				MIDI.setVolume(1, 20);
				MIDI.setVolume(2, 20);
				MIDI.setVolume(3, 20);
				MIDI.setVolume(4, 20);

				//Playing notes
				// midiStuff.play(0);
				// midiStuff.modVel(2);
				// midiStuff.play(3);
				testMidi.play(0);
			}
		}); //end MIDI.loadPlugin

	});

	// KEYDOWN HANDLERS

	// Functions
	/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	 ** init()
	 ** ----------------
	 ** This function is called when the page loads to initialize the web page
	 ** Please encapsulate any page load calls into this function
	 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	function init() {
		$("#input").val("");
		$("#input").attr("rows","5");
	}

	/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	 ** evaluate(String inputProgram)
	 ** ----------------
	 ** Evaluate is the top function which eventually sends to lexer
	 ** Notice that lexer is defined in a different file
	 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
	function evaluate(input) {
		// First step is to split into an array based on line breaks
		input = splitByLine(input); 
		// console.log(input);
		tokenStream = tokenize(input);
		// console.log(tokenStream);
		prePrattParser(tokenStream);
		// console.log(envP);
		console.log(envP.eval(new Token("x")));
	}
}); // close document.onload
