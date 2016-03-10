
module SimpleEuterpea(module SimpleEuterpea, E.InstrumentName(..), E.play) where

import qualified Euterpea as E
import System.Random
import qualified Data.List

type Music = E.Music E.Pitch

type Duration = Double

-- Pitches

r = E.wnr

empty = E.rest 0

pitchToMusic p = sf (E.note E.wn (E.pitch p))

cf1 = pitchToMusic 23
c1 = pitchToMusic 24
cs1 = pitchToMusic 25
df1 = pitchToMusic 25
d1 = pitchToMusic 26
ds1 = pitchToMusic 27
ef1 = pitchToMusic 27
e1 = pitchToMusic 28
ff1 = pitchToMusic 28
es1 = pitchToMusic 29
f1 = pitchToMusic 29
fs1 = pitchToMusic 30
gf1 = pitchToMusic 30
g1 = pitchToMusic 31
gs1 = pitchToMusic 32
af1 = pitchToMusic 32
a1 = pitchToMusic 33
as1 = pitchToMusic 34
bf1 = pitchToMusic 34
b1 = pitchToMusic 35
bs1 = pitchToMusic 36
cf2 = pitchToMusic 35
c2 = pitchToMusic 36
cs2 = pitchToMusic 37
df2 = pitchToMusic 37
d2 = pitchToMusic 38
ds2 = pitchToMusic 39
ef2 = pitchToMusic 39
e2 = pitchToMusic 40
ff2 = pitchToMusic 40
es2 = pitchToMusic 41
f2 = pitchToMusic 41
fs2 = pitchToMusic 42
gf2 = pitchToMusic 42
g2 = pitchToMusic 43
gs2 = pitchToMusic 44
af2 = pitchToMusic 44
a2 = pitchToMusic 45
as2 = pitchToMusic 46
bf2 = pitchToMusic 46
b2 = pitchToMusic 47
bs2 = pitchToMusic 48
cf3 = pitchToMusic 47
c3 = pitchToMusic 48
cs3 = pitchToMusic 49
df3 = pitchToMusic 49
d3 = pitchToMusic 50
ds3 = pitchToMusic 51
ef3 = pitchToMusic 51
e3 = pitchToMusic 52
ff3 = pitchToMusic 52
es3 = pitchToMusic 53
f3 = pitchToMusic 53
fs3 = pitchToMusic 54
gf3 = pitchToMusic 54
g3 = pitchToMusic 55
gs3 = pitchToMusic 56
af3 = pitchToMusic 56
a3 = pitchToMusic 57
as3 = pitchToMusic 58
bf3 = pitchToMusic 58
b3 = pitchToMusic 59
bs3 = pitchToMusic 60
cf4 = pitchToMusic 59
c4 = pitchToMusic 60
cs4 = pitchToMusic 61
df4 = pitchToMusic 61
d4 = pitchToMusic 62
ds4 = pitchToMusic 63
ef4 = pitchToMusic 63
e4 = pitchToMusic 64
ff4 = pitchToMusic 64
es4 = pitchToMusic 65
f4 = pitchToMusic 65
fs4 = pitchToMusic 66
gf4 = pitchToMusic 66
g4 = pitchToMusic 67
gs4 = pitchToMusic 68
af4 = pitchToMusic 68
a4 = pitchToMusic 69
as4 = pitchToMusic 70
bf4 = pitchToMusic 70
b4 = pitchToMusic 71
bs4 = pitchToMusic 72
cf5 = pitchToMusic 71
c5 = pitchToMusic 72
cs5 = pitchToMusic 73
df5 = pitchToMusic 73
d5 = pitchToMusic 74
ds5 = pitchToMusic 75
ef5 = pitchToMusic 75
e5 = pitchToMusic 76
ff5 = pitchToMusic 76
es5 = pitchToMusic 77
f5 = pitchToMusic 77
fs5 = pitchToMusic 78
gf5 = pitchToMusic 78
g5 = pitchToMusic 79
gs5 = pitchToMusic 80
af5 = pitchToMusic 80
a5 = pitchToMusic 81
as5 = pitchToMusic 82
bf5 = pitchToMusic 82
b5 = pitchToMusic 83
bs5 = pitchToMusic 84
cf6 = pitchToMusic 83
c6 = pitchToMusic 84
cs6 = pitchToMusic 85
df6 = pitchToMusic 85
d6 = pitchToMusic 86
ds6 = pitchToMusic 87
ef6 = pitchToMusic 87
e6 = pitchToMusic 88
ff6 = pitchToMusic 88
es6 = pitchToMusic 89
f6 = pitchToMusic 89
fs6 = pitchToMusic 90
gf6 = pitchToMusic 90
g6 = pitchToMusic 91
gs6 = pitchToMusic 92
af6 = pitchToMusic 92
a6 = pitchToMusic 93
as6 = pitchToMusic 94
bf6 = pitchToMusic 94
b6 = pitchToMusic 95
bs6 = pitchToMusic 96
cf7 = pitchToMusic 95
c7 = pitchToMusic 96
cs7 = pitchToMusic 97
df7 = pitchToMusic 97
d7 = pitchToMusic 98
ds7 = pitchToMusic 99
ef7 = pitchToMusic 99
e7 = pitchToMusic 100
ff7 = pitchToMusic 100
es7 = pitchToMusic 101
f7 = pitchToMusic 101
fs7 = pitchToMusic 102
gf7 = pitchToMusic 102
g7 = pitchToMusic 103
gs7 = pitchToMusic 104
af7 = pitchToMusic 104
a7 = pitchToMusic 105
as7 = pitchToMusic 106
bf7 = pitchToMusic 106
b7 = pitchToMusic 107
bs7 = pitchToMusic 108
cf8 = pitchToMusic 107
c8 = pitchToMusic 108
cs8 = pitchToMusic 109
df8 = pitchToMusic 109
d8 = pitchToMusic 110
ds8 = pitchToMusic 111
ef8 = pitchToMusic 111
e8 = pitchToMusic 112
ff8 = pitchToMusic 112
es8 = pitchToMusic 113
f8 = pitchToMusic 113
fs8 = pitchToMusic 114
gf8 = pitchToMusic 114
g8 = pitchToMusic 115
gs8 = pitchToMusic 116
af8 = pitchToMusic 116
a8 = pitchToMusic 117
as8 = pitchToMusic 118
bf8 = pitchToMusic 118
b8 = pitchToMusic 119
bs8 = pitchToMusic 120

up n m = E.transpose n m

down n m = E.transpose (-n) m


-- Durations

faster n m = E.tempo n m
slower n m = E.tempo (1/n) m

dw, w, dh, h, dq, q, de, e, ds, s, dot, ddot :: Music -> Music
dw = dot . w
ddw = ddot . w
dddw = dddot . w
w = id
h = slower (1/2)
dh = dot . h
ddh = ddot . h
dddh = dddot . h
q = slower (1/4)
dq = dot . q
ddq = ddot . q
dddq = dddot . q
e = slower (1/8)
de = dot . e
dde = ddot . e
ddde = dddot . e
s = slower (1/16)
ds = dot . s
dds = ddot . s
ddds = dddot . s
t = slower (1/32)
dt = dot . t
ddt = ddot . t
dddt = dddot . t
dot = slower (3/2)
ddot = slower (7/4)
dddot = slower (15/16)
triplet = slower (2/3)




-- Interval names

per1 = 0
aug1 = 1
dim2 = 0
min2 = 1
maj2 = 2
aug2 = 3
dim3 = 2
min3 = 3
maj3 = 4
aug3 = 5
dim4 = 4
per4 = 5
aug4 = 6
dim5 = 6
per5 = 7
aug5 = 8
dim6 = 7
min6 = 8
maj6 = 9
aug6 = 10
dim7 = 9
min7 = 10
maj7 = 11
aug7 = 12
dim8 = 11
per8 = 12

-- Instruments



piano = E.instrument E.AcousticGrandPiano
honkyTonkPiano = E.instrument E.HonkyTonkPiano
chorusedPiano = E.instrument E.ChorusedPiano
harpsichord = E.instrument E.Harpsichord
clavinet = E.instrument E.Clavinet
celesta = E.instrument E.Celesta
glockenspiel = E.instrument E.Glockenspiel
musicBox = E.instrument E.MusicBox
vibraphone = E.instrument E.Vibraphone
marimba = E.instrument E.Marimba
xylophone = E.instrument E.Xylophone
tubularBells = E.instrument E.TubularBells
dulcimer = E.instrument E.Dulcimer
hammondOrgan = E.instrument E.HammondOrgan
percussiveOrgan = E.instrument E.PercussiveOrgan
rockOrgan = E.instrument E.RockOrgan
churchOrgan = E.instrument E.ChurchOrgan
reedOrgan = E.instrument E.ReedOrgan
accordion = E.instrument E.Accordion
harmonica = E.instrument E.Harmonica
tangoAccordion = E.instrument E.TangoAccordion
acousticGuitarNylon = E.instrument E.AcousticGuitarNylon
acousticGuitarSteel = E.instrument E.AcousticGuitarSteel
electricGuitarJazz = E.instrument E.ElectricGuitarJazz
electricGuitarClean = E.instrument E.ElectricGuitarClean
electricGuitarMuted = E.instrument E.ElectricGuitarMuted
overdrivenGuitar = E.instrument E.OverdrivenGuitar
distortionGuitar = E.instrument E.DistortionGuitar
guitarHarmonics = E.instrument E.GuitarHarmonics
acousticBass = E.instrument E.AcousticBass
electricBassFingered = E.instrument E.ElectricBassFingered
electricBassPicked = E.instrument E.ElectricBassPicked
fretlessBass = E.instrument E.FretlessBass
slapBass1 = E.instrument E.SlapBass1
slapBass2 = E.instrument E.SlapBass2
synthBass1 = E.instrument E.SynthBass1
synthBass2 = E.instrument E.SynthBass2
violin = E.instrument E.Violin
viola = E.instrument E.Viola
cello = E.instrument E.Cello
contrabass = E.instrument E.Contrabass
tremoloStrings = E.instrument E.TremoloStrings
pizzicatoStrings = E.instrument E.PizzicatoStrings
orchestralHarp = E.instrument E.OrchestralHarp
timpani = E.instrument E.Timpani
stringEnsemble1 = E.instrument E.StringEnsemble1
stringEnsemble2 = E.instrument E.StringEnsemble2
synthStrings1 = E.instrument E.SynthStrings1
synthStrings2 = E.instrument E.SynthStrings2
choirAahs = E.instrument E.ChoirAahs
voiceOohs = E.instrument E.VoiceOohs
synthVoice = E.instrument E.SynthVoice
orchestraHit = E.instrument E.OrchestraHit
trumpet = E.instrument E.Trumpet
trombone = E.instrument E.Trombone
tuba = E.instrument E.Tuba
mutedTrumpet = E.instrument E.MutedTrumpet
frenchHorn = E.instrument E.FrenchHorn
brassSection = E.instrument E.BrassSection
synthBrass1 = E.instrument E.SynthBrass1
synthBrass2 = E.instrument E.SynthBrass2
sopranoSax = E.instrument E.SopranoSax
altoSax = E.instrument E.AltoSax
tenorSax = E.instrument E.TenorSax
baritoneSax = E.instrument E.BaritoneSax
oboe = E.instrument E.Oboe
bassoon = E.instrument E.Bassoon
englishHorn = E.instrument E.EnglishHorn
clarinet = E.instrument E.Clarinet
piccolo = E.instrument E.Piccolo
flute = E.instrument E.Flute
recorder = E.instrument E.Recorder
panFlute = E.instrument E.PanFlute
blownBottle = E.instrument E.BlownBottle
shakuhachi = E.instrument E.Shakuhachi
whistle = E.instrument E.Whistle
ocarina = E.instrument E.Ocarina
sitar = E.instrument E.Sitar
banjo = E.instrument E.Banjo
shamisen = E.instrument E.Shamisen
koto = E.instrument E.Koto
kalimba = E.instrument E.Kalimba
bagpipe = E.instrument E.Bagpipe
fiddle = E.instrument E.Fiddle
shanai = E.instrument E.Shanai
tinkleBell = E.instrument E.TinkleBell
agogo = E.instrument E.Agogo
steelDrums = E.instrument E.SteelDrums
woodblock = E.instrument E.Woodblock
taikoDrum = E.instrument E.TaikoDrum
melodicDrum = E.instrument E.MelodicDrum
synthDrum = E.instrument E.SynthDrum
reverseCymbal = E.instrument E.ReverseCymbal

-- Percussion
simplePerc n = sf $ E.instrument E.Percussion (E.perc n 1)

acousticBassDrum = simplePerc E.AcousticBassDrum
bassDrum1 = simplePerc E.BassDrum1
sideStick = simplePerc E.SideStick
acousticSnare = simplePerc E.AcousticSnare
handClap = simplePerc E.HandClap
electricSnare = simplePerc E.ElectricSnare
lowFloorTom = simplePerc E.LowFloorTom
closedHiHat = simplePerc E.ClosedHiHat
highFloorTom = simplePerc E.HighFloorTom
pedalHiHat = simplePerc E.PedalHiHat
lowTom = simplePerc E.LowTom
openHiHat = simplePerc E.OpenHiHat
lowMidTom = simplePerc E.LowMidTom
hiMidTom = simplePerc E.HiMidTom
crashCymbal1 = simplePerc E.CrashCymbal1
highTom = simplePerc E.HighTom
rideCymbal1 = simplePerc E.RideCymbal1
chineseCymbal = simplePerc E.ChineseCymbal
rideBell = simplePerc E.RideBell
tambourine = simplePerc E.Tambourine
splashCymbal = simplePerc E.SplashCymbal
cowbell = simplePerc E.Cowbell
crashCymbal2 = simplePerc E.CrashCymbal2
vibraslap = simplePerc E.Vibraslap
rideCymbal2 = simplePerc E.RideCymbal2
hiBongo = simplePerc E.HiBongo
lowBongo = simplePerc E.LowBongo
muteHiConga = simplePerc E.MuteHiConga
openHiConga = simplePerc E.OpenHiConga
lowConga = simplePerc E.LowConga
highTimbale = simplePerc E.HighTimbale
lowTimbale = simplePerc E.LowTimbale
highAgogo = simplePerc E.HighAgogo
lowAgogo = simplePerc E.LowAgogo
cabasa = simplePerc E.Cabasa
maracas = simplePerc E.Maracas
shortWhistle = simplePerc E.ShortWhistle
longWhistle = simplePerc E.LongWhistle
shortGuiro = simplePerc E.ShortGuiro
longGuiro = simplePerc E.LongGuiro
claves = simplePerc E.Claves
hiWoodBlock = simplePerc E.HiWoodBlock
lowWoodBlock = simplePerc E.LowWoodBlock
muteCuica = simplePerc E.MuteCuica
openCuica = simplePerc E.OpenCuica
muteTriangle = simplePerc E.MuteTriangle
openTriangle = simplePerc E.OpenTriangle

-- rhythm takes a string composed of the following:
-- space - rest
-- * - strike
-- > - accented strike
-- @ - very accented strike
-- {.....} - triplet time


rhythm :: String -> Music -> Music
rhythm str note = rhythm1 str
  where
    rhythm1 :: String -> Music
    rhythm1 "" = empty
    rhythm1 (' ':s) = E.rest (E.dur note) + rhythm1 s
    rhythm1 ('{':s) = let (s1, s2) = span (/= '}') s in
                        if null s2 then 
                           error ("Unmatched { in rhythm " ++ str) else
                           faster (3/2) (rhythm1 s1) + rhythm1 (tail s2) 
    rhythm1 (c:s) = let  (dots, rst) = span (== '.') s
                         dur = fromIntegral (length dots) + 1
                         note' = slower dur note
                         more = rhythm1 rst in
      case c of 
        '*' -> note' + more
        '>' -> accent 1.3 note' + more 
        '!' -> accent 1.6 note' + more
        _ -> error ("Unexpected character " ++ [c] ++ " in rhythm " ++ str)

rhythms :: [(String, Music)] -> Music
rhythms [] = empty
rhythms (a0@((s0, m1):ns)) = if and (map (\(_,m) -> dur m == dur m1) ns) then
                                if and (map (\(s,_) -> length s == length s0) ns) then
                                   chord (map (uncurry rhythm) a0)
                                else
                                   error "Problem in rhythms: strings are not all the same length"
                              else
                                 error "Problem in rhythms: some notes are of a different duration"



-- Dynamics

ppp = E.Modify (E.Phrase [E.Dyn $ E.StdLoudness $ E.PPP])
pp = E.Modify (E.Phrase [E.Dyn $ E.StdLoudness $ E.PP])
p = E.Modify (E.Phrase [E.Dyn $ E.StdLoudness $ E.P])
mp = E.Modify (E.Phrase [E.Dyn $ E.StdLoudness $ E.MP])
fff = E.Modify (E.Phrase [E.Dyn $ E.StdLoudness $ E.FFF])
ff = E.Modify (E.Phrase [E.Dyn $ E.StdLoudness $ E.FF])
f = E.Modify (E.Phrase [E.Dyn $ E.StdLoudness $ E.NF])
mf = E.Modify (E.Phrase [E.Dyn $ E.StdLoudness $ E.MF])
sf = E.Modify (E.Phrase [E.Dyn $ E.StdLoudness $ E.SF])

accent n = E.Modify (E.Phrase [E.Dyn $ E.Accent $ n])
ac = accent 1.5

-- Combiners

instance Num (E.Music a) where
  m1 + m2 = m1 E.:+: m2
  m1 * m2 = m1 E.:=: m2
  abs n = error "No abs for music"
  signum n = error "No signum for music"
  fromInteger n = error "No signum for music"
  negate n = error "No negate for music"

line = E.line

chord = E.chord

delay = E.delayM

dur = E.dur

-- IO

save f m =
  do E.writeMidi (f ++ ".midi") m
     putStrLn ("Wrote " ++ f ++ ".midi")

-- Utilities

-- Repeat a piece of music a given number of times
rpt n m = line (take n (repeat m))

tempo :: (Music -> Music) -> Rational -> Music -> Music
tempo noteSpeed bpm mus = E.tempo (d / defaultDur) mus
  where d = bpm * dur (noteSpeed c3)
        defaultDur = 120 / 4

arp :: [Int] -> [Int] -> [Music] -> Music
arp pitchs numbers notes =
     line (zipWith mp numbers (cycle notes))
 where 
   mp n note | n < 0 = faster (dur note) r
             | otherwise = up (pitchs !! n) note

blockChord :: [Int] -> [Int] -> [Music] -> Music
blockChord pitchs numbers notes =
     chord (zipWith mp numbers (cycle notes))
 where 
   mp n note | n < 0 = faster (dur note) r
             | otherwise = up (pitchs !! n) note

-- Transformational Harmony

data Chord = Chord Int Int String -- key, root, type

getPitchNote :: Music -> Int
getPitchNote (E.Modify _ m) = getPitchNote m
getPitchNote (E.Prim (E.Note _ d)) = E.absPitch d
getPitchNote _ = 0

instance Show Chord where
  show (Chord k root ty) =
       "Chord " ++ show pc ++ " " ++ ty ++ " starting at " ++ show rc ++ show (ro-1)
    where (pc, _) = E.pitch k
          (rc, ro) = E.pitch root

makeChord :: Music -> Music -> String -> Chord
makeChord key base ty | getPitchNote base `elem` pitches c = c
                      | otherwise = error ("Chord base " ++ show rc ++ show (ro-1)
                                          ++ " is not in chord " ++ show pc ++ " " 
                                          ++ ty)
    where c = Chord (getPitchNote key `mod` 12) (getPitchNote base) ty
          (pc, _) = E.pitch (getPitchNote key)
          (rc, ro) = E.pitch (getPitchNote base)


octaves1 :: [Int] -> [Int]
octaves1 ps = ps ++ octaves1 (map (+ 12) ps)

getInversion c@(Chord k r "major") = case r1 of
   0 -> 0
   4 -> 1
   7 -> 2
   _ -> error ("Bad base note in chord " ++ show c)
  where
    r1 = (r-k) `mod` 12
getInversion c@(Chord k r "minor") = case r1 of
   0 -> 0
   3 -> 1
   7 -> 2
   _ -> error ("Bad base note in chord " ++ show c)
  where
    r1 = (r-k) `mod` 12
getInversion c = error ("Can't compute inversion of " ++ show c)

maxNote :: Int
maxNote = 120

pitches :: Chord -> [Int]
pitches (Chord key root "major") =
   takeWhile (<= maxNote) $ dropWhile (< root) $ octaves1 (map (+ key) [0,4,7])
pitches (Chord key root "minor") =
   takeWhile (<= maxNote) $ dropWhile (< root) $ octaves1 (map (+ key) [0,3,7])
pitches (Chord key root m) = 
   error ("Don't know about chord type " ++ m)

-- Transformations of chords

tp c@(Chord k b "major") = case getInversion c of
  0 -> Chord k b "minor"
  1 -> Chord k (b-1) "minor"
  2 -> Chord k b "minor"
tp c@(Chord k b "minor") = case getInversion c of
  0 -> Chord k b "major"
  1 -> Chord k (b+1) "major"
  2 -> Chord k b "major"

tp c = error ("Cant transform p chord " ++ show c) 

tr c@(Chord k b "major") = case getInversion c of
   0 -> Chord ((k+9) `mod` 12) b "minor"
   1 -> Chord ((k+9) `mod` 12) b "minor"
   2 -> Chord ((k+9) `mod` 12) (b+2) "minor"
tr c@(Chord k b "minor") = case getInversion c of
   0 -> Chord ((k+3) `mod` 12) (b-2) "major"
   1 -> Chord ((k+3) `mod` 12) b "major"
   2 -> Chord ((k+3) `mod` 12) b "major"
tr c = error ("Cant transform r chord " ++ show c) 

tl c@(Chord k b "major") = case getInversion c of
   0 -> Chord ((k+4) `mod` 12) (b-1) "minor"
   1 -> Chord ((k+4) `mod` 12) b "minor"
   2 -> Chord ((k+4) `mod` 12) b "minor"
tl c@(Chord k b "minor") = case getInversion c of
   0 -> Chord ((k+8) `mod` 12) b "major"
   1 -> Chord ((k+8) `mod` 12) b "major"
   2 -> Chord ((k+8) `mod` 12) (b+1) "major"
tl c = error ("Cant transform l chord " ++ show c) 

-- Special note that can be transposed

c0 = pitchToMusic 0

data ScaleType = MajorS | MinorS | HMinorS | ChromaticS | WholeToneS | PentatonicS |
                 UserS [Int] deriving Show

-- data ChordType = MajorC | MinorC | DimC | AugC | UserS [Int]

data Scale = Scale ScaleType Int Int
  deriving Show

scaleToPitches :: ScaleType -> [Int]
scaleToPitches st =
  case st of
     MajorS ->      [2,2,1,2,2,2,1]
     MinorS ->      [2,1,2,2,1,2,2]  -- Same as natural minor
     HMinorS ->     [2,1,2,2,1,3,1]
     ChromaticS ->  [1]
     WholeToneS ->  [2]
     PentatonicS -> [2,2,3,2,3]   -- Not sure which one is the root!
     UserS p     -> p

-- chordToPitches st ->
--   case st of
--      MajorC -> [4,3,5]
--      MinorC -> [3,4,5]
--      DimC   -> [3,3,6]
--      AugC   -> [4,4,4]
--      UserC p -> p

makeScale :: ScaleType -> Music -> Music -> Scale
makeScale sType key base = c
    where c = Scale sType (getPitchNote key `mod` 12) (getPitchNote base)

sPitches :: Scale -> [Int]
sPitches (Scale ty key root) =
   takeWhile (<= maxNote) $ map (+ key) $
                            scanl (+) 0 (cycle ps)
 where
   ps = scaleToPitches ty

  
cMajorS b = makeScale MajorS c1 b
dMajorS b = makeScale MajorS d1 b
eMajorS b = makeScale MajorS e1 b
fMajorS b = makeScale MajorS f1 b
gMajorS b = makeScale MajorS g1 b
aMajorS b = makeScale MajorS a2 b
bMajorS b = makeScale MajorS b2 b

csMajorS b = makeScale MajorS cs1 b
dsMajorS b = makeScale MajorS ds1 b
esMajorS b = makeScale MajorS es1 b
fsMajorS b = makeScale MajorS fs1 b
gsMajorS b = makeScale MajorS gs1 b
asMajorS b = makeScale MajorS as2 b
bsMajorS b = makeScale MajorS bs2 b

cfMajorS b = makeScale MajorS cf2 b
dfMajorS b = makeScale MajorS df1 b
efMajorS b = makeScale MajorS ef1 b
ffMajorS b = makeScale MajorS ff1 b
gfMajorS b = makeScale MajorS gf1 b
afMajorS b = makeScale MajorS af2 b
bfMajorS b = makeScale MajorS bf2 b

cMinorS b = makeScale MinorS cs1 b
dMinorS b = makeScale MinorS ds1 b
eMinorS b = makeScale MinorS es1 b
fMinorS b = makeScale MinorS fs1 b
gMinorS b = makeScale MinorS gs1 b
aMinorS b = makeScale MinorS as2 b
bMinorS b = makeScale MajorS bs2 b

csMinorS b = makeScale MinorS cs1 b
dsMinorS b = makeScale MinorS ds1 b
esMinorS b = makeScale MinorS es1 b
fsMinorS b = makeScale MinorS fs1 b
gsMinorS b = makeScale MinorS gs1 b
asMinorS b = makeScale MinorS as2 b
bsMinorS b = makeScale MajorS bs2 b

cfMinorS b = makeScale MinorS cf2 b
dfMinorS b = makeScale MinorS df1 b
efMinorS b = makeScale MinorS ef1 b
ffMinorS b = makeScale MinorS ff1 b
gfMinorS b = makeScale MinorS gf1 b
afMinorS b = makeScale MinorS af2 b
bfMinorS b = makeScale MajorS bf2 b

melody :: Scale -> [Int] -> [Rational] -> Music
melody sc@(Scale ty key base) notes durs = addNotes notes (cycle durs)
  where
    snotes = sPitches sc
    adjustPitch n [] = n
    adjustPitch n (p:ps) | p >= base = n
                         | otherwise = adjustPitch (n+1) ps
    basei = adjustPitch 0 snotes
    addNotes [] ds = empty
    addNotes ns (d:ds) | d < 0 = slower (-d) r + addNotes ns ds
    addNotes (n:ns) (d:ds) =
        slower d (up (snotes !! (n + basei)) c0) + addNotes ns ds

-- Placing music at specific times

timedMusic :: [(Rational, Music)] -> Music
timedMusic l = foldr (*) empty (map (\(time, m) -> 
                                 if time == 0 then m else slower time r + m) l)

-- Random number stuff

-- This is the main thing that students will use
choices :: Int -> Int -> [a] -> [a]
choices seed n lst = take n (randomChoice (mkStdGen seed) lst)

shuffle :: Int -> [a] -> [a]
shuffle seed lst = map snd $ 
                  Data.List.sortBy (\(n1,_) (n2, _) -> compare n1 n2) $
                  zip (randomRs (0,10000::Int) (mkStdGen seed)) lst

randomNums :: Int -> Int -> [Double]
randomNums seed n = take n (randoms (mkStdGen seed))

randomChoice :: StdGen -> [a] -> [a]
randomChoice gen lst = map (lst !!) (randomRs (0, length lst-1) gen) 

transforms :: a -> [a -> a] -> [a]
transforms x [] = [x]
transforms x (f : fs) = x : transforms (f x) fs

age :: StdGen -> StdGen
age g = g' where (_, g') = next g


-- Markov Music

-- Defines a state.  The state value can be randomly varied
data State a = State (Float -> a) (Float -> (Maybe (State a)))

state :: a -> [(Float, State a)] -> State a
state value transitions =
  State (const value) (\r -> Just (getNextState r transitions))

fstate :: a -> [(Float, Maybe (State a))] -> State a
fstate value transitions =
  State (const value) (\r -> getNextState r transitions)

rstate :: (Float -> a) -> [(Float, State a)] -> State a
rstate rv transitions =
  State rv (\r -> Just (getNextState r transitions))

rfstate :: (Float -> a) -> [(Float, Maybe (State a))] -> State a
rfstate rv transitions =
  State rv (\r -> (getNextState r transitions))

getNextState :: Float -> [(Float, v)] -> v
getNextState r [(_,s)] = s
getNextState r ((p,s):t) | r <= p = s
                         | otherwise = getNextState (r-p) t

runState :: Int -> State a -> [a]
runState seed = runState1 rfloats where
  runState1 (r1:r2:rs) (State rv f) =
      let sval = rv r1 
          ns = f r2 in
        case ns of Nothing -> [sval]
                   Just v  -> sval : runState1 rs v
  rfloats :: [Float]
  rfloats = randoms (mkStdGen seed) 

newGen :: Float -> StdGen
newGen f = mkStdGen (round (1000000 * f))

chooseOne :: Float -> [a] -> a
chooseOne r l = l !! (floor (r * (fromIntegral (length l))))

