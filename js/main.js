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
		MIDI.loadPlugin({
			soundfontUrl: "./soundfont/Resources/MidiJS/examples/soundfont/acoustic_grand_piano-ogg.js",
			instrument: "acoustic_grand_piano",
			onprogress: function(state, progress) {
				console.log(state, progress);
			},
			onsuccess: function() {
				var delay = 0; // play one note every quarter second
				var note = 50; // the MIDI note
				var velocity = 127; // how hard the note hits
				// play the note
				MIDI.setVolume(0, 127);
				MIDI.noteOn(0, note, velocity, delay);
				MIDI.noteOff(0, note, delay + 0.75);
			}
		});
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
		console.log(input);
		tokenStream = tokenize(input);
		
	}
}); // close document.onload
