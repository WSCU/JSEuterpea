// var h = new HashTable("baritone_sax" : 67, "brass_section" : 61, "distortion_guitar" : 30, "electric_bass_finger" : 33, "electric_bass_pick" : 34,
// "electric_guitar_jazz" : 26, "flute" : 73, "soprano_sax" : 64,  "tenor_sax" : 66, "trumpet" : 56});
var intruments = {};
intruments["acoustic_grand_piano"] = 0;
intruments["acoustic_guitar_nylon"] = 24;
intruments["acoustic_guitar_steel"] = 25;
intruments["alto_sax"] = 65;
intruments["synth_drum"] = 118;

console.log("Loading Music");

function Note(instrument, pitch, velocity, duration){
    this.instrumentNum = intruments[instrument];
    this.pitch = pitch;
    this.velocity = velocity;
    this.duration = duration;
}
Note.prototype.play = function (startTime) {
    MIDI.programChange(0, this.instrumentNum);
    MIDI.setVolume(0, this.velocity);
    MIDI.noteOn(0, this.pitch, this.velocity, startTime);
    MIDI.noteOff(0, this.pitch, startTime + this.duration);
    t = startTime + this.duration;
    return t;
}
Note.prototype.newInst = function (instrumentMod){
    this.instrumentNum = h.getItem(instrumentMod);
}
Note.prototype.modPitch = function (pitchMod){
    this.pitch = this.pitch * pitchMod;
}
Note.prototype.modVel = function (velocityMod){
    if(this.velocity * velocityMod > 128)
        this.velocity = 128;
    else
        this.velocity = this.velocity * velocityMod;
}
Note.prototype.newVel = function (newVelocity){
    if(newVelocity > 128)
        newVelocity = 128;
    this.velocity = newVelocity;
}
Note.prototype.modDur = function (durationMod){
    this.duration = this.duration * durationMod;
}

function Seq(firstMusic, secondMusic){

    this.firstMusic = firstMusic;
    this.secondMusic = secondMusic;
}
Seq.prototype.play = function (startTime) {
    t = this.firstMusic.play(startTime);
    console.log("t = " + t);
    t1 = this.secondMusic.play(t);
    console.log("t1 = " + t1);
    return t1;
}
Seq.prototype.modInst = function (instrumentMod){
    this.firstMusic.modInst(instrumentMod);
    this.secondMusic.modInst(instrumentMod);
}
Seq.prototype.modPitch = function (pitchMod){
    this.firstMusic.modPitch(pitchMod);
    this.secondMusic.modPitch(pitchMod);
}
Seq.prototype.modVel = function (velocityMod){
    this.firstMusic.modVel(velocityMod);
    this.secondMusic.modVel(velocityMod);
}
Seq.prototype.newVel = function (newVelocity){
    this.firstMusic.newVel(newVelocity);
    this.secondMusic.newVel(newVelocity);
}
Seq.prototype.modDur = function (durationMod){
    this.firstMusic.modDur(durationMod);
    this.secondMusic.modDur(durationMod);
}

function Para(firstMusic, secondMusic){

    this.firstMusic = firstMusic;
    this.secondMusic = secondMusic;
}
Para.prototype.play = function (startTime) {
    t = this.firstMusic.play(startTime);
    t1 = this.secondMusic.play(startTime);
    return Math.max(t,t1);
}
Para.prototype.modInst = function (instrumentMod){
    this.firstMusic.modInst(instrumentMod);
    this.secondMusic.modInst(instrumentMod);
}
Para.prototype.modPitch = function (pitchMod){
    this.firstMusic.modPitch(pitchMod);
    this.secondMusic.modPitch(pitchMod);
}
Para.prototype.modVel = function (velocityMod){
    this.firstMusic.modVel(velocityMod);
    this.secondMusic.modVel(velocityMod);
}
Para.prototype.newVel = function (newVelocity){
    this.firstMusic.newVel(newVelocity);
    this.secondMusic.newVel(newVelocity);
}
Para.prototype.modDur = function (durationMod){
    this.firstMusic.modDur(durationMod);
    this.secondMusic.modDur(durationMod);
}