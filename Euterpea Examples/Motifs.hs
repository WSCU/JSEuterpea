

import SimpleEuterpea
--Progression: I IV V I
--Key of B major = B C# D# E F# G# A#

bmIc = makeChord b1 b3 "major"
bmIVc = makeChord e1 e4 "major"
bmVc = makeChord fs1 fs4 "major"
bmI2c = makeChord b1 b4 "major"

bmI = blockChord (pitches bmIc) [0,1,2] [w c0]
bmIV = blockChord (pitches bmIVc) [0,1,2] [w c0]
bmV = blockChord (pitches bmVc) [0,1,2] [w c0]
bmI2 = blockChord (pitches bmI2c) [0,1,2] [w c0]
background = bmI + bmIV + bmV + bmI2

fmusp = [0,0,1,3,3]  -- First motif half
fmusd = [1/12, 1/12, 1/12, 1/6, 1/12]  -- . . . .. .
emusp = [4,3,2,1,2,4] -- Second half
emusd = [1/12,1/12,1/12,1/12,1/12,1/12] -- . . . . . .
musp = concat[fmusp, emusp]
musd = concat[fmusd, emusd]

myKey = bMajorS b3 -- The B major scale starting at b3
mus = melody myKey musp musd -- This plays the same notes as the previous mus
musf1 = melody myKey fmusp fmusd
musf2 = melody myKey emusp emusd


-- Transpose to a new key
muskey1 = melody (eMajorS e3) musp musd
muskey2 = melody (fsMinorS fs3) musp musd
-- Move up or down by a scale degree
muscale1 = melody myKey (map (+ 2) musp) musd
muscale2 = melody myKey (map (+ 3) musp) musd
-- Go faster or slower
mus3 = melody myKey musp (map (* 2) musd)
mus4 = melody myKey musp (map (/ 2) musd)
-- Melodic inversion
musinv = melody myKey (map (\x -> -x) musp) musd
musinvf1 = melody myKey (map (\x -> -x) fmusp)fmusd
musinvf2 = melody myKey (map (\x -> -x) emusp) emusd
musinv1 = musf1 + musinvf2
musinv2 = musinvf1 + musf2

-- Overlap 

mus11 = muskey1 * (h r + muskey1)

-- Computer Science!

mus12 = melody myKey (concatMap (\p -> [p,p]) musp) (concatMap (\d -> [d/2, d/2]) musd)

dulmus = dulcimer mus
orgmus = churchOrgan musf1
vibmus = vibraphone mus
accomus = accordion musinvf2
timpmus  = timpani mus4
timpmusi = timpani mus3
viomus = violin musinvf2

back1 = w r
back2 = h r + timpmus
back3 = (q r + orgmus) * (h r + orgmus)
back4 = vibmus
back5 = dh r + accomus
back6 = h r + viomus
back7 = rpt 6 (w r) + timpmusi

comprog1 = mus + muskey1 + muskey2 + musinv + muscale1 + muscale2 + musinv1 + musinv2
comprog2 = (back1 + back2 + back3 + back4 + back5 + back6) * back7
comp = (background + background) * (fff comprog1) * (ppp comprog2)