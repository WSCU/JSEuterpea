import SimpleEuterpea

cat = pitches (makeChord cs1 cs3 "major")

strings = [piano, violin, banjo, sitar, acousticBass, harpsichord, clavinet]
winds = [churchOrgan, flute, harmonica, accordion, whistle, ocarina, bagpipe]
brass = [trumpet, tuba, oboe, bassoon, baritoneSax, frenchHorn, brassSection]
bangs = [glockenspiel, marimba, agogo, woodblock, tinkleBell, melodicDrum, xylophone] 

simprise = [0,1,2]
summin = [1,0,2,2,2,2,2,2]
summinelse = [2,2,1,3,2,1,2,1]
lowdalwa = [0,1,3]
highdalwa = [0,2,5]
cannon = [0,1,0,2,0,3]

bat = arp cat simprise [s c0]
wat = arp cat summin [de c0]
fat = arp cat lowdalwa [e c0, s c0,  de r]
fat2 = arp cat highdalwa [e c0, s c0,  de r]
chat = arp cat summinelse [de c0]
dat = arp cat cannon [de c0, ds c0, de c0, ds c0, de c0, dh r]

x1 = fff bat
x2 = ff bat
x3 = f bat
x4 = mf bat
x5 = mp bat
x6 = p bat
x7 = pp bat
x8 = ppp bat

x9 = ppp fat
x10 = p fat
x11 = f fat
x12 = fff fat
x13 = ppp fat2
x14 = p fat2
x15 = f fat2
x16 = fff fat2

phrase1 = x1 + x2 + x3 + x4 + x5 + x6 + x7 + x8 --strings, winds
phrase2 = mp  wat --bangs, winds
phrase3 = x9 + x10 + x11 + x12 -- brass, bangs
phrase4 = x13 + x14 + x15 + x16 -- brass, strings
phrase5 = chat --strings, bangs
phrase6 = dat --winds, brass
rest = dw  r

p1C = [strings, winds]
p2C = [bangs, winds]
p3C = [brass, bangs]
p4C = [brass, strings]
p5C = [strings, bangs]
p6C = [winds, brass]

coolFunc chS = let
	grS seed = map truncate (map (*1000000) (randomNums seed 18)) -- Stands for Grand Seed



	inst1 = choices (grS chS !! 0) 1 (p1C !! (round (randomNums (grS chS !! 6) 1 !! 0)))
	inst2 = choices (grS chS !! 1) 1 (p2C !! (round (randomNums (grS chS !! 7) 1 !! 0)))
	inst3 = choices (grS chS !! 2) 1 (p3C !! (round (randomNums (grS chS !! 8) 1 !! 0)))
	inst4 = choices (grS chS !! 3) 1 (p4C !! (round (randomNums (grS chS !! 9) 1 !! 0)))
	inst5 = choices (grS chS !! 4) 1 (p5C !! (round (randomNums (grS chS !! 10) 1 !! 0)))
	inst6 = choices (grS chS !! 5) 1 (p6C !! (round (randomNums (grS chS !! 11) 1 !! 0)))

	p1 arm = arm ([phrase1, rest] !! (round (randomNums (grS chS !! 12) 1 !! 0)))
	p2 arm = arm ([phrase2, rest] !! (round (randomNums (grS chS !! 13) 1 !! 0)))
	p3 arm = arm ([phrase3, rest] !! (round (randomNums (grS chS !! 14) 1 !! 0)))
	p4 arm = arm ([phrase4, rest] !! (round (randomNums (grS chS !! 15) 1 !! 0)))
	p5 arm = arm ([phrase5, rest] !! (round (randomNums (grS chS !! 16) 1 !! 0)))
	p6 arm = arm ([phrase6, rest] !! (round (randomNums (grS chS !! 17) 1 !! 0)))

	mat = line (map p1 inst1)
	hat = line (map p2 inst4)
	rat = line (map p3 inst3)
	rat2 = line (map p4 inst3)
	stat = line (map p5 inst1)
	prat = line (map p6 inst4)


	pat = mat * hat * rat * rat2 * stat * prat
  in pat
  

spf seed n= map truncate (map (*1000000) (randomNums seed n))

makeComp seed n = line(map coolFunc (spf seed n))

play' seed n = play (makeComp seed n)

submission = makeComp 31337 8
markadie = makeComp 92895999 9