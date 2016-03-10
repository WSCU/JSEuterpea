import SimpleEuterpea

-- Tutorial Stuff --

tut = timedMusic [(0/4, c3), (1/4, dh e3), (2/4, h g3), (3/4, q c4)]

play' s = play (tempo q 250 (line (choices s 10 [c3,e3,g3])))

cookies = choices 1337 10 [piano, marimba, trumpet, violin]
bake milk = milk (s c3)
santa = line (map bake cookies)

kittens = choices 1337 30 [-2,-2,-1,-1,0,1,1,2,2]
puppies = scanl (+) 0 kittens
kennel = melody (dMajorS c3) puppies [1/16]

truffle = shuffle 1337 [dMajorS c3, gMajorS g3, fMajorS f3, dMajorS d3]
fungi shroom = melody shroom [0,2,4,7,4,2] [1/16]
bulb = line (map fungi truffle)

omega = choices 1337 10 [tp, tl, tr, tp . tl . tr]
ultima = transforms (makeChord c3 c3 "major") omega
magnum opus = arp (pitches opus) [0,1,2,3,2,1] [s c0]
end = line (map magnum ultima)

-- Assignment Stuff --

intervals32 = choices 25266 32 [0,-1,2,-3,4,-5,6,7]
intervals16 = choices 94737 16 [-3,-2,-1,0,1,2,3]
notes32 = scanl (+) 0 intervals32
notes16 = scanl (+) 0 intervals16
sixteenths = melody (aMajorS a3) notes32 [1/16]
eighths = melody (csMajorS cs3) notes16 [1/8]
rand1 = (marimba sixteenths) * (flute eighths)

rhythms1 = choices 43528 12 [" * *", "!** ", "  >*"]
rhythms2 = choices 86532 12 ["> > ", " **!", " ** "]
rhythms3 = choices 17479 12 [">>>>", "! **", "*  *"]
voice1 str = rhythm str (s bassDrum1)
voice2 str = rhythm str (s highAgogo)
voice3 str = rhythm str (s splashCymbal)
voice11 = line(map voice1 rhythms1)
voice22 = line(map voice2 rhythms2)
voice33 = line(map voice3 rhythms3)
rand2 = voice11 * voice22 * voice33

transformations = choices 13534 10 [tp,tl,tr,tp . tr, tl . tp, tr . tl]
chordlist = transforms (makeChord cs3 cs3 "major") transformations
chords = shuffle 33225 (chordlist)
arpeg chor = arp (pitches chor) [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1] [s c0]
rand3 = line(map arpeg chords)

dummy = c3 + c3 + c3 + c3