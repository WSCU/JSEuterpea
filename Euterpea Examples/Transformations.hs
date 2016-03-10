import SimpleEuterpea
--cs Major 4/4
--Surprised that a bit of messing around got me my second section, which I thought would be the hardest to come up with
arp' c a t = arp (pitches c) a t
block' c t = blockChord (pitches c) [0,1,2] t
sarp = [s c0]
earp = [e c0]
qarp = [q c0]
hb = [h c0]
wb = [w c0]

alter = [5,4,5,4,5,4,5,4,5,4,5,4,5,4,5,4]

test = rpt 2 (block' plr1 wb + block' plr2 wb +  block' plr3 wb +  block' plr4 wb +  block' plr5 wb +  block' plr6 wb)

key = makeChord cs1 cs3 "major" -- (C# F G#)
plr1 = key          --(C# F G#)(C# F G#)  cs Major
plr2 = tp plr1      --(C# E G#)(C# E G#)  cs minor 1
plr3 = tl plr2      --(C# E A) (A C# E)   A  Major
plr4 = tr plr3      --(C# F# A)(F# A C#)  fs minor
plr5 = tp plr4      --(C# F# A#)(F# A# C#)fs Major
plr6 = tl plr5      --(C# F A#)(A# C# F)  as minor

mKeep1 = tl (tp plr2) --(F G# C)  f minor
mKeep2 = tp (tl plr2) --(A C E)   a minor 3
mKeep3 = tp (tr plr2) --(E G B)   e minor
mKeep4 = tl (tr plr2) --(G# B D#) gs minor

mKeep11 = tr (tp mKeep1) --(D F A) d minor
mKeep12 = tl (tr mKeep1) --(C D# G) c minor 2
mKeep31 = tp (tr mKeep3) --(G A# D) g minor
mKeep41 = tp (tr mKeep4) --(B D F#) b minor
mKeep42 = tl (tr mKeep4) --(D# F# A#) ds minor

--Into the unknown

--Just the working force
ph2p1a = arp' plr1 alter sarp
ph2p1b = rpt 4 (block' plr1 qarp)
ph2p1 = ph2p1a * ph2p1b
ph2p2a = arp' plr2 alter sarp
ph2p2b = rpt 4 (block' plr2 qarp)
ph2p2 = ph2p2a * ph2p2b
ph2p3a = arp' plr3 alter sarp
ph2p3b = rpt 4 (block' plr3 qarp)
ph2p3 = ph2p3a * ph2p3b
ph2p4a = arp' plr5 alter sarp
ph2p4b = rpt 4 (block' plr5 qarp)
ph2p4 = ph2p4a * ph2p4b

phrase2 = rpt 2 (ph2p1 + ph2p2) + ph2p3 + ph2p2 + ph2p3 + ph2p4
--Enlightenment