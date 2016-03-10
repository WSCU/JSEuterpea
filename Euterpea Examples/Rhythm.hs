import SimpleEuterpea

play' n m = play (tempo q n m)
---------------------------------Wild Ride--------------------------------------

--Section B Stuff
wildWhistle =   "!.!! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !"--made to be constant
ringit =        "   ** **    !* ** **       ** **    !* ** **    "--added
weakWhistle =   "   >     >     >     >     >     >     >     >  "
deceiver =      "   >  *  *  >  *  *  >  *  *  >  *  *  >  *  *  "--moved to give same silence as others
monkey =        "   *  *        *  *        *  *        *  *     "
baboon =        "         *  *        *  *        *  *        *  "
shakeit =       "   *********!***********!***********!*********  "--added
whis1 = rhythm wildWhistle (s shortWhistle)
whis2 = rhythm weakWhistle (s vibraslap)
whis = whis1 * whis2
grounder = rhythm deceiver (s acousticSnare)
aah = rhythm monkey (s muteCuica)
ooh = rhythm baboon (s openCuica)
whee = aah * ooh
crazy = rhythm shakeit (s maracas)--added
baby = rhythm ringit (s cowbell)--added

sB = rpt 2 (whis * whee * grounder * crazy)--includes crazy
sBm = rpt 2 baby * sB--added
sectionB = tempo q 180 (sB + sBm)--added
--end section b stuff
--Transition Stuff
easyGo =   ">..>..>..>.."
hypeIt =   "         !!!"
carnival =      "*...  *.*.*.    *...*...*.*.    *.*.    *...*..."
carnivalBack =  "    >.      !...            >.>.    !...        "
carni1 = rhythm carnival (s openCuica)
carni2 = rhythm carnivalBack (s muteCuica)
carn = carni1 * carni2
transBack = rhythm easyGo (q acousticSnare)
transFin = rhythm hypeIt (q shortWhistle)
transMain = carn * transBack * transFin
--end transition stuff
--Section A Stuff
surprise1 =     "! !  !      ! !  !      ! !  !      ! !   ! !   "--made all exclamations
surprise2 =     "        **          **          **     * *   * *"
funStuff =      "! *! *>>>>>>! *! *>>>>>>! *! *>>>>>>! *! *> *! >"
funStuffAlt1 =  ">.>   >.>   >.>   >.>   >.>   >.>   >.>   >.>   "--added
funStuffAlt2 =  "   *.*   *.*   *.*   *.*   *.*   *.*   *.*   *.*"--added
funBack =       "*  *     *  *  *     *  *  *     *  *  *     *  "
funBack2 =      "      >..         >..         >..         !....."
funClaps =      "   >     >.>   >     >.>   >     >.>   >     >.>"
funClapsAlt =   "   >     >.>   >     >     >     >.>   >     >  "--added
funVoice =      "   !     !     !     !     !     !     !     !  "--added
sAbeg1 = rhythm surprise1 (s acousticSnare)
sAbeg2 = rhythm surprise2 (s acousticBassDrum)
sAbeg = rpt 2 (sAbeg1 * sAbeg2)
sAbeater = rhythm funStuff (s acousticSnare)
sAbackerA = rhythm funBack (s rideCymbal1)
sAbackerB = rhythm funBack2 (s rideCymbal2)
sAbackerC = rhythm funBack (s acousticBassDrum)--added
sAbackerD = rhythm funBack2 (s acousticBassDrum)--added
sAbacker = sAbackerA * sAbackerB
sAbacker2 = sAbackerC * sAbackerD--added
sAclapper = rhythm funClaps (s handClap)
sAmain = rpt 2 (sAbeater * sAbacker * sAbacker2 * sAclapper)--includes sAbacker2

sAyeller = rhythm funVoice (s muteCuica)--added
sAbeatoo = rhythm funStuffAlt1 (s acousticSnare)--added
sAbeatwo = rhythm funStuffAlt2 (s acousticBassDrum)--added
sAbeatAlt = sAbeatoo * sAbeatwo--added
sAaltClaps = rhythm funClapsAlt (s handClap)--added

sA2 = rpt 2 (sAyeller * sAbeatAlt * sAaltClaps * sAbacker)--added

sA = tempo q 180 (sAbeg + sAmain + sA2)--includes sA2
--End Section A Stuff
--Intro Stuff
overtone =      "!..........."
two3 =          " >. >. >. >."
two3S =         " >. >. >...."
consEight =     ">**>>*>**>>*>.  >*>*****"--changed
consEightS =    ">**>>*>**>>*>**>>*>*****"--changed
consS =         ">**>>*>**>>*>.  >*>....."--changed
consEightHelp = "                          >>>.>                 "
consSS =        "                          >>>.>       **> > ! ! "
s1Overtone = rhythm overtone (q c2)
s1Slower = rhythm consEight (e acousticSnare)
s1SlowerS = rhythm consEightS (e acousticSnare)
s1Rapid = rhythm consEightHelp (s acousticSnare)
s1Constant = s1Slower * s1Rapid
s1Crash = rhythm two3 (q crashCymbal1)
s1Aux = (s1Overtone * s1Constant)
s1AuxS = (s1Overtone * s1SlowerS)
s1Main = (s1Overtone * s1Constant * s1Crash)
s1TransS = rhythm consS (e acousticSnare)
s1TransR = rhythm consSS (s acousticSnare)
s1Trans = s1TransS * s1TransR
s1TransC = rhythm two3S (q crashCymbal1)

s1 = tempo q 140 (rpt 2 (s1Overtone) + rpt 2 (s1AuxS) + s1Aux + s1AuxS + rpt 3 (s1Main) + (s1Overtone * s1Trans * s1TransC))
--End Intro Stuff

comp = s1 + dq r + sA + transMain + sectionB + sA--moved tempo declarations