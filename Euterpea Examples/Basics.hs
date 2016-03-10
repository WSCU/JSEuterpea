
import SimpleEuterpea
-----------------------------------Functions-----------------------------------------------------

-------------------------------------------------------------------------------------------------
mus = q c3 + q d3 + h e3
-----------------------------------Chord Practice------------------------------------------------
perty = e3 * gs3 * b3
purty = e3 * g3 * b3
pirty = e3 * g3 * bf3
party = e3 * gs3 * bs3

purse = perty + pirty + party + purty

upset = ds purse * up 12(ds purse)
frantic = upset + upset + upset + upset
yay = frantic + down 1(frantic) + frantic + down 1(frantic)
 
mari = ocarina purse
-----------------------------------HW 1----------------------------------------------------------
phrase = q bs2 + e g3 + e e3 + e d3 + s c3 + s c3 + ds d3 + de r + q bs2 + e g3 + e e3 + e d3 + s c3 + s c3 + e d3 + ds c3
phraseInst = electricGuitarClean phrase + de r + viola phrase + de r + flute phrase
phraseTimes = electricGuitarClean (down 12(phrase)) * viola (up 24(phrase)) * flute phrase
phraseDyn = ppp phrase + de r + mp phrase + de r + fff phrase
phraseDel = electricGuitarClean phrase * viola (q r + up 12(phrase))
phrasePerf = phrase * up 7(phrase)
-----------------------------------Chord HW------------------------------------------------------
arpGS3 = q (b3 * ds4) * (ds gs3 + ds gs3 + s gs3)
arpB3 = q (gs3 * ds4) * (ds b3 + ds b3 + s b3)
arpDS4 = q (gs4 * b4) * (ds ds4 + ds ds4 + s ds4)

arpRise = ds d3 + ds fs3 + s a3
arpFall = ds a3 + ds fs3 + s d3

spec1 = s gs3 + s gs3 + s gs3
spec2 = s b3 + s b3 + s b3
spec3 = s ds4 + s ds4 + s ds4

cho1 = a3 * cs4 * g4
cho7 = arpGS3 + arpB3 + arpDS4 + arpB3
cho7s = spec1 + spec2 + spec3 + spec2 + q gs3
cho2 = b3 * (q r + dh d4) * (h r + h fs4)
cho4 = arpRise + arpFall + up 12 (arpRise + arpFall)
choF = a3 * cs4 * e4 * a4 * cs5 * e5

comp = cho1 + cho7 + cho2 + cho4 + choF
----------------------------------Composition 1---------------------------------------------------
fall = s as2 + s a2 + s gs2 + s g2
begin = f(electricBassFingered (fall + down 1 fall + down 2 fall + down 3 fall))

bassBit = e d2 + e d2 + e d2 + e d2 + e d2 + e d2 + e c2 + e c2
bass = f (electricBassFingered (bassBit + bassBit + down 4 (bassBit) + e as1 + e as1 + e as1 + e as1 + e as1 + e as1 + e c2 + e c2))
bassLine =  bass + bass + bass + bass

bHarmBit = e a3 + e a3 + e a3 + e a3 + e a3 + e g3 + e g3 + e g3
bHarmBit2 = e a3 + e a3 + e a3 + e g3 + e a3 + e c4 + e b3 + e g3
bHarmBit3 = e f3 + e f3 + e f3 + e f3 + e f3 + e ds3 + e ds3 + e ds3
bHarmBit4 = e f3 + e f3 + e f3 + e e3 + e f3 + e g3 + e g3 + e g3
bHarm = mp (electricBassPicked(bHarmBit + bHarmBit2 + bHarmBit3 + bHarmBit4))
bHarmLine = bHarm + bHarm + bHarm + bHarm

highness1 = q r + d6 + q c6 + q d6+ q e6 + e e6 + e f6 + e e6 + dw d6 + e r
highness2 = dq d6 + dq c6 + dq d6 + dq c6 + q d6 + q e6 + e e6 + e f6 + e e6 + dw d6 + e r
highness3 = q r + d6 + q c6 + q a5 + q f6 + e e6 + e f6 + e e6 + dw d6 + e r
highness4 = dq d6 + dq c6 + dq a6 + dq g6 + q f6 + q e6 + e e6 + e f6 + e e6 + dw d6
choir = ppp (synthStrings2 ((highness1 + highness2 + highness3 + highness4)))

highHarm1 = q r + (d5 * f5 * a5) + q r + dq (f5 * a5 * c6) + e r + dw(b4 * d5 * f5) +  h r
highHarm2Block = dq (d5 * f5 * a5) + dq (c5 * ds5 * g5) + dq (d5 * f5 * a5) + dq (c5 * ds5 * g5) + q (d5 * f5 * a5) + q (c5 * e5 * g5)
highHarm2 = ((dw r + q c6) * highHarm2Block) + dw (b4 * d5 * f5) + h r
highHarm3 = q r + (d5 * f5 * a5) + q r + dq (b4 * d5 * f5) + e r + dw(f5 * a5 * c6) +  h r
highHarm4 = (d5 * f5 * a5) + q r + q g4 + dq (c5 * e5 * g5) + e r + dw(b4 * d5 * f5) +  h r
choirHarm =  ppp ((highHarm1 + highHarm2 + highHarm3 + highHarm4))

mel11 = q r + dq d4 + dq c4 + dq d4 + q c4 + e b3 + e e4 +e f4
mel12 = q r + e a3 + e a3 + e a3 + e g3 + e g3 + e g3 + e a3 + e a3 + e a3 + q g3 + e g3 + q c4
mel1 = mel11 + mel12
mel22 = q r + e a3 + e a3 + e a3 + e g3 + e g3 + e g3 + e a3 + e a3 + e a3 + q g3 + e g3 + e c4 + e b3
mel2 = mel11 + mel22
mel41 = q r + dq d4 + dq c4 + q a4 + e g4 + q f4 + dq e4
mel42 = e e4 + e f4 + e e4 + dw d4
mel4 = mel41 + mel42
mainLine = mf (distortionGuitar (mel1 + mel2 + mel1 + mel4))

harm1Blocks = q r + dh (d4 * fs4 * a4) + dq (d4 * fs4 * a4) + dq (c4 * ds4 * g4) + q (f4 * as4 * c5)
harm1 = q r + e (d4 * fs4 * a4) + q r + e (c4 * ds4 * g4) + q r + e (d4 * fs4 * a4) + q r + e (c4 * d4 * g4) + q r + e (f4 * a4 * c5) + e r
harm2 = down 12(harm1)
harm2Blocks = down 12(harm1Blocks)
harm3 = q r + dh (d4 * f4 * a4) + w (a4 * cs5 * e5)
harm4h = e e4 + e g4 + e e4 + e c4
harm4 = harm4h + up 12(harm4h) + e e6 + e g6 + e e6 + h c6 + (fff (dw crashCymbal1))
harmLine = p (overdrivenGuitar (harm1 + harm2 + harm1 + harm2 + harm1Blocks + harm2Blocks + harm3 + harm4))

drumBass =  rhythm "!*******" (e acousticBassDrum)
drumSnare = rhythm "  *   * " (e acousticSnare)
drumHigh =  rhythm "    *  *.>    !" (s closedHiHat)
drumCrash = rhythm "      ! " (e crashCymbal1)
drums = drumBass * drumHigh * drumSnare
drumF = drums + drums + drums + (drums * drumCrash)
drumLine = ff(drumF + drumF + drumF + drumF)

bassIntro = bass + (bass * bHarm) + (bass * bHarm * rpt 4 (acousticBassDrum)) + (bass * bHarm * drumIntro)
drumIntro = ff(rpt 4 (h acousticBassDrum) + rpt 4 (q acousticBassDrum) + rpt 6 (e acousticBassDrum) + rpt 4 (s acousticBassDrum))
bareBones = bassLine * bHarmLine * drumLine * choir
lessBare = bareBones * mainLine
fullSet = lessBare * (synthStrings2 choirHarm) * harmLine
outro1 = faster (1.05) (highHarm1)
outro2 = faster (1.0) (highHarm2)
outro3 = faster (0.95) (highHarm3)
outro4 = faster (0.90) (highHarm4)
outro5 = outro1 + outro2 + outro3 + outro4
outro = musicBox outro5 * down 24 outro5

comp1 = faster (1.4) begin + faster (1.5) (bassIntro + bareBones + lessBare + fullSet) + outro
------------------------------HW5---------------------------------------------------
-- Bmaj(B D# F#) -> D#maj (D# G A#) -> Emaj (E G# B) -> Bmaj (B D# F#)

arp' a c t = arp (pitches c) a t
block' c t = blockChord (pitches c) [0] t
arp1 crd = rpt 2 (arp (pitches crd) [0,1,2,3,2,1] [e c0] * blockChord (pitches crd) [0,2] [dh c0])
doremiFall = [0,1,2,3,4,5,6,7,7,6,5,4,3,2,1,0]
doremiTwo =  [0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7]
b2base =     [7,6,5,4,6,5,4,3,5,4,3,2,4,3,2,1]
sumfin = [1,0,2,2,1,2,1,3]
sumfint = [de c0, s c0, s c0, s c0, e c0, de c0, s c0, de c0]
std  = [s c0]
bstd = [w c0]
p2s1 = [3,3,2,3,1]
p2s2 = [2,2,1,2,0]
p2s3 = [0,1,0,0,1,0,2,3,4,5,4,4,5,5,6,7]
p2s4 = [7,7,6,6,7,7,6,5,6,5,4,4,3,2,1,0]
p2sp = [de c0, de c0, de c0, de c0, q c0]

bmajI = makeChord b1 b3 "major" --(B D# F#)
dsmajIV = makeChord ds1 ds4 "major" --(D# G A#)
emajV = makeChord e1 e4 "major" --(E G# B)
bmajXII = makeChord b1 b4 "major" --(B D# F#)

tc1 = bmajI --  (B D# F#)  (B D# F#) B Major
tc2 = tl tc1 -- (A# D# F#) (D# F# A#) D# minor
tc3 = tp tc2 -- (A# D# G)  (D# G A#) D# Major
tc4 = tr tc3 -- (C D# G)   (C D# G)  C minor
tc5 = tp tc4 -- (C E G)    (C E G) C Major
tc6 = tr tc5 -- (C E A)    (A C E) A minor
tc7 = tl tc6 -- (C F A)    (F A C) F Major
tc8 = tp tc7 -- (C F G#)   (F G# C) F minor

tp1a = arp' doremiFall tc1 std
tp2a = arp' doremiTwo tc2 std
tp3a = arp' b2base tc3 std
tp4a = arp' sumfin tc4 sumfint
tp1b = block' tc1 bstd
tp2b = block' tc2 bstd
tp3b = block' tc3 bstd
tp4b = block' tc4 bstd
tp1 = tp1a * rhythm "*..." (q (violin tp1b))
tp2 = tp2a * rhythm "*.*."(q (violin tp2b))
tp3 = tp3a * rhythm "****" (q (violin tp3b))
tp4 = tp4a * rhythm "*.. " (q (violin tp4b))
tp5 = arp' p2s1 tc5 p2sp
tp6 = arp' p2s2 tc6 p2sp
tp7 = arp' p2s3 tc7 std
tp8 = arp' p2s4 tc8 std
patch1 = tempo q 80(tp1 + tp2 + tp3 + tp4 + de r)
patch2 = harpsichord(tp5 + tp6 + tp7 + tp8)
transcomp = patch1 + patch2

da1 = arp (pitches bmajI) [0,1,2,1,2,3,4,5] [s c0]
da2 = arp (pitches dsmajIV) [0,1,2,1,2,3,4,5] [s c0]
da3 = arp (pitches emajV) [0,1,2,1,2,3,4,5] [s c0]
da4 = arp (pitches bmajXII) [0,1,2,1,2,3,4,5] [s c0]
da = da1 + da2 + da3 + da4
wa1 = arp (pitches bmajI) [2,2,1,0,1,1,2,3,2] [e c0, s c0, s c0]
wa2 = arp (pitches dsmajIV) [2,2,1,0,1,1,2,3,2] [e c0, s c0, s c0]
wa3 = arp (pitches emajV) [2,2,1,0,1,1,2,3,2] [e c0, s c0, s c0]
wa4 = arp (pitches bmajXII) [2,2,1,0,1,1,2,3,2] [e c0, s c0, s c0]
wa = wa1 + wa2 + wa3 + wa4
bString = "*..*..*..*.."
ma1 = arp (pitches bmajI) [0,1,0,1,0,2,0,2,0,3,0,4] [s c0]
ma2 = arp (pitches dsmajIV) [0,1,0,1,0,2,0,2,0,3,0,4] [s c0]
ma3 = arp (pitches emajV) [0,1,0,1,0,2,0,2,0,3,0,4] [s c0]
ma4 = arp (pitches bmajXII) [0,1,0,1,0,2,0,2,0,3,0,4] [s c0]
mab1 = blockChord (pitches bmajI) [0,1,0,1,0,2,0,2,0,3,0,4] [s c0]
mab2 = blockChord (pitches dsmajIV) [0,1,0,1,0,2,0,2,0,3,0,4] [s c0]
mab3 = blockChord (pitches emajV) [0,1,0,1,0,2,0,2,0,3,0,4] [s c0]
mab4 = blockChord (pitches bmajXII) [0,1,0,1,0,2,0,2,0,3,0,4] [s c0]
bam1 = ma1 * rhythm bString (w mab1)
bam2 = ma2 * rhythm bString (w mab2)
bam3 = ma3 * rhythm bString (w mab3)
bam4 = ma4 * rhythm bString (w mab4)
bam = bam1 + bam2 + bam3 + bam4


octaves p = p ++ octaves (map (+12) p)

majorTriad = octaves [0,4,7]
minorTriad = octaves [0,3,7]

tes1 = arp majorTriad [0,0,1,1,2,2,3,3,2,2,1,1] [s c3]
tes2 = arp minorTriad [0,1,2,3,4,3,4,5,6,5,4,3,4,3,2,1,0] [marimba (s c3)]
tes3 = arp majorTriad [0,1,2,3,4,5,6,7,6,5,4,3,2,1,0] [e c3, s c3, s c3]

cmaj = makeChord c1 c3 "major"
cmajp = pitches cmaj

ch1 = bmajI
ch2 = dsmajIV
ch3 = emajV
ch4 = bmajXII
ch5 = bmajI


test = tempo q 200 (arp1 ch1 + arp1 ch2 + arp1 ch3 + arp1 ch4 + arp1 ch5)