/*
 * FSD tesztvideók – adatfájl
 * Új videó felvétele: másolj le egy blokkot, és írd át.
 *   id    – a YouTube-videó azonosítója (a youtu.be/ utáni, vagy a watch?v= utáni rész)
 *   c     – ország kódja (NL, LT, EE, DK, BE, SI, CZ, HR)
 *   t     – a videó eredeti címe
 *   ch    – csatorna neve
 *   lang  – a videó nyelve: hu, en, nl, da, lt, et, sl
 *   prio  – 1 = magyar tartalom, 2 = robot*irl, 3 = egyéb
 *   d     – feltöltés dátuma (ÉÉÉÉ-HH-NN)
 *   min   – hossz percben
 *   tags  – címkék (a szűrőkhöz)
 *   note  – rövid magyar leírás
 *   start – (opcionális) kezdés másodpercben, pl. 272 = 4:32
 * Országonként legfeljebb 4–5 videó legyen.
 */
window.FSD_VIDEOS = [
  // ── Horvátország ──────────────────────────────────────────────
  { id:'wqWyVYp_itQ', c:'HR', prio:1, lang:'hu', ch:'xabcast', d:'2026-10-03', min:20,
    t:'Kipróbáltuk a Tesla Full Self Drive önvezetést horvát-magyar határon Pécs mellett!',
    tags:['országút','határ','első út'],
    note:'Magyar nyelvű teszt Horvátországban, Pécstől fél órára: első élő találkozás az FSD-vel, valós forgalomban.' },
  { id:'8FVuCwVYJvM', c:'HR', prio:3, lang:'en', ch:'Jan Skočaj', d:'2026-10-01', min:50,
    t:'First Tesla FSD (Supervised) Drive in Croatia! | Novigrad → Umag → Savudrija → Plovanija',
    tags:['első út','kisváros','parkolás','határ'],
    note:'Isztria: az FSD egy bevásárlóközpont parkolójából indul, megvárja a sorompót, majd Umagon és Savudrián át a plovanijai határátkelőig visz.' },
  { id:'K5mOo9Cx430', c:'HR', prio:3, lang:'en', ch:'Jan Skočaj', d:'2026-09-30', min:22,
    t:'First Cross-Border Drive with Tesla FSD (Supervised) from Slovenia to Croatia!',
    tags:['határ','országút'],
    note:'Egy nappal a horvát jóváhagyás után: határátlépés FSD-vel Szlovéniából Horvátországba.' },
  { id:'Chtzp5cOAGs', c:'HR', prio:3, lang:'en', ch:'JR Car Reviews', d:'2026-01-31', min:23,
    t:'Tesla FSD (Supervised) vs Zagreb traffic part I',
    tags:['város','bemutató út'],
    note:'Tesla-bemutató út Zágráb sűrű forgalmában, még a horvát jóváhagyás előtt (2026 január).' },

  // ── Csehország ────────────────────────────────────────────────
  { id:'2DGgjrx-RRw', c:'CZ', prio:2, lang:'en', ch:'robot*irl', d:'2026-09-22', min:31,
    t:'My Tesla Finally Got FSD in Prague – FIRST DRIVE',
    tags:['első út','város'],
    note:'Az első út a cseh jóváhagyás napján (FSD 14.2.2.6): a bekapcsoláshoz szükséges kvíz, indulás a Közlekedési Minisztériumtól, majd Prága belvárosa.' },
  { id:'kj4q8BKp6SY', c:'CZ', prio:2, lang:'en', ch:'robot*irl', d:'2026-10-05', min:31,
    t:'Tesla FSD vs Prague\'s Worst Junctions',
    tags:['város','kereszteződés','körforgalom'],
    note:'Prága legtöbb balesettel járó csomópontjai csúcsforgalomban – a végén egy „főellenség” körforgalom.' },
  { id:'yLjMofRnewI', c:'CZ', prio:2, lang:'en', ch:'robot*irl', d:'2026-09-25', min:41,
    t:'Tesla FSD vs Prague After Dark',
    tags:['város','éjszaka','villamos','korlátok'],
    note:'Éjszakai városnézés Prágában (az útvonalat a Grok tervezte): villamossínek, szűk utcák. A beavatkozások benne maradtak, az autó kameraképével együtt.' },

  // ── Belgium ───────────────────────────────────────────────────
  { id:'ZVDnBLVQTZs', c:'BE', prio:2, lang:'en', ch:'robot*irl', d:'2026-07-13', min:24,
    t:'Tesla FSD vs the Capital of Europe',
    tags:['város','első út'],
    note:'Brüsszel két napon át (FSD 14.2.2.6): első nap utasként, másodikon felügyelőként. Belga elsőbbségi szabályok, kör az Európai Bizottság körül, rést keresés csúcsforgalomban.' },
  { id:'Z6qp8MLfVLA', c:'BE', prio:2, lang:'en', ch:'robot*irl', d:'2026-08-24', min:17,
    t:'Driving Tesla FSD in Belgium Until It Breaks',
    tags:['város','autópálya','korlátok'],
    note:'Kétórás út Brüsszelen át beavatkozás nélkül, 17 percbe sűrítve: rendőrautó, „nem igazi” körforgalom, védetlen balra kanyar gyors forgalomban – végül a charleroi-i reptéren akad el egy sávnál.' },
  { id:'2MUNvojII7E', c:'BE', prio:2, lang:'en', ch:'robot*irl', d:'2026-07-27', min:23,
    t:'Tesla FSD is a Genius. Until It Sees This.',
    tags:['város','villamos','korlátok'],
    note:'Brüsszel legnehezebb utcái: behajtani tilos táblák, villamossínek, alagutak, útépítés – a végén egy macskaköves kávézóterasz asztalai közé szorul az autó, a rendőrök szeme láttára.' },
  { id:'zwNEg_M3vCo', c:'BE', prio:3, lang:'en', ch:'Steven Peeters', d:'2026-06-13', min:35,
    t:'Tesla FSD Supervised In Belgium | First Real Test',
    tags:['első út','értékelés'],
    note:'Belga tulajdonos első tesztje a jóváhagyás után, azon az útvonalon, amelyen évekkel korábban az Autopilotot is tesztelte.' },

  // ── Dánia ─────────────────────────────────────────────────────
  { id:'s7qXFsA_Jxs', c:'DK', prio:2, lang:'en', ch:'robot*irl', d:'2026-09-07', min:21,
    t:'We Sent Tesla FSD Into Denmark\'s Worst Street',
    tags:['város','szűk utca','gyalogosok','biciklisek'],
    note:'Graven, Aarhus: Dánia legzsúfoltabb gyalogos utcája, ahol az autók csak „vendégek”. Rést keresés, átkelés a bicikliúton, apró zöld nyíl.' },
  { id:'cHUPSAvX66I', c:'DK', prio:3, lang:'en', ch:'Tesla FSD Europe', d:'2026-07-08', min:8,
    t:'Tesla FSD vs Copenhagen Bike Chaos',
    tags:['város','biciklisek'],
    note:'Rövid teszt Koppenhága sűrű biciklisforgalmában.' },
  { id:'wPlu7_n4WGM', c:'DK', prio:3, lang:'en', ch:'Tesla FSD Europe', d:'2026-06-26', min:5,
    t:'Tesla FSD vs European Roads: A Dangerous Close Call',
    tags:['város','vészhelyzet'],
    note:'Váratlan helyzet Koppenhágában, amelyben a készítő szerint az FSD megakadályozta az ütközést.' },
  { id:'s_4t3iZeINg', c:'DK', prio:3, lang:'da', ch:'Alex Riis', d:'2026-06-12', min:45,
    t:'Tesla inviterede mig til at teste FSD (Supervised) i Danmark – fra førersædet!',
    tags:['bemutató út','értékelés'],
    note:'Dán nyelvű: fél évvel korábban utasként, most a Tesla meghívására a vezetőülésből tesztel Køge környékén – ugyanazokon az útvonalakon, így jól látszik a fejlődés.' },

  // ── Szlovénia ─────────────────────────────────────────────────
  { id:'nLH8r5jqIPc', c:'SI', prio:2, lang:'en', ch:'robot*irl', d:'2026-09-28', min:17,
    t:'Tesla FSD vs Slovenia\'s Mountain Roads',
    tags:['hegyi út','autópálya','határ','biciklisek'],
    note:'Az osztrák határtól a szlovén hegyi utakig, saját autóval (2026.27.300 · FSD 14.2.2.6): autópálya-felhajtások, előzések, biciklisek és egy záróvonalon átjövő szembejövő.' },
  { id:'Z0kIGjPTZnA', c:'SI', prio:3, lang:'en', ch:'Jan Skočaj', d:'2026-09-14', min:20,
    t:'Can Tesla FSD (Supervised) Handle Slovenia\'s Highest Road? | Mangart Saddle Test',
    tags:['hegyi út'],
    note:'A Mangart-nyereg útja (2055 m), Szlovénia egyik legnehezebb hegyi útja.' },
  { id:'QFIcVp8e5FY', c:'SI', prio:3, lang:'sl', ch:'Avtomobilnost', d:'2026-09-30', min:18,
    t:'Tesla FSD v Ljubljani: Je nadzorovana avtonomna vožnja že kos slovenski prestolnici?',
    tags:['város','körforgalom','biciklisek'],
    note:'Szlovén nyelvű városi teszt Ljubljanában: dugó, körforgalmak, lámpák, oszlopelőzés és szűk utcák biciklisekkel.' },

  // ── Hollandia ─────────────────────────────────────────────────
  { id:'-YJvbkNVHng', c:'NL', prio:2, lang:'en', ch:'robot*irl', d:'2026-04-20', min:24,
    t:'I Supervised Tesla FSD in Europe for the FIRST TIME EVER',
    tags:['első út','szűk utca','országút'],
    note:'Amszterdam környéke, egy héttel az első európai kiadás után (FSD 14.2.2.5): szűk, sövényes utak, felfestés nélküli szakaszok, a vezetőfigyelés „bóbiskolás” tesztje, és megtalálja-e a Superchargert.' },
  { id:'vsmQrDqMwcI', c:'NL', prio:3, lang:'en', ch:'Steven Peeters', d:'2026-04-13', min:39,
    t:'I Tested FSD in Amsterdam\'s busiest streets',
    tags:['város','biciklisek','gyalogosok'],
    note:'Vágatlan út Amszterdam belvárosán át: sok autó, biciklis és gyalogos. Az egyik legnézettebb európai FSD-videó.' },
  { id:'WtgvAne6Uvs', c:'NL', prio:3, lang:'en', ch:'Tesla Jigsaw', d:'2026-08-22', min:28,
    t:'FIRST Tesla FSD v14 Drive in Amsterdam — Mind-Blowing!',
    tags:['bemutató út','város','autópálya'],
    note:'A Tesla meghívására: félórás út autópályán és városban, végig FSD-vel, beavatkozás nélkül.' },
  { id:'YrGhNM69dIA', c:'NL', prio:3, lang:'nl', ch:'Zelfrijder', d:'2026-08-14', min:47,
    t:'Tesla FSD Test in Amsterdam: Fietsers, Trambanen en Krappe Straatjes!',
    tags:['város','biciklisek','villamos','szűk utca'],
    note:'Holland nyelvű, teljes út Amszterdam belvárosában: villamossínek, szűk csatornaparti utcák és rengeteg biciklis.' },
  { id:'sj1bX90-smU', c:'NL', prio:3, lang:'en', ch:'Dutch FSD Lab', d:'2026-08-16', min:35,
    t:'I Tested Tesla FSD in Europe… Here\'s What Happened',
    tags:['értékelés'],
    note:'Első tapasztalatok valós holland utakon, összefoglaló értékeléssel.' },

  // ── Litvánia ──────────────────────────────────────────────────
  { id:'cwWFzN9GqYA', c:'LT', prio:3, lang:'lt', ch:'Vytis Bareika', d:'2026-06-09', min:9,
    t:'Išbandžiau Tesla FSD Lietuvoje: Ar veikia, ar neužsimušim?',
    tags:['város','gyalogosok'],
    note:'Litván nyelvű városi teszt Vilniusban: hétköznapi utak (posta, bolt), gyalogosok – lehet-e bízni a rendszerben?' },
  { id:'vk4jShppZ4c', c:'LT', prio:3, lang:'lt', ch:'Nerijus EV', d:'2026-05-01', min:11,
    t:'Tesla Full Self Driving (FSD) Lietuvoje.',
    tags:['bemutató út','értékelés'],
    note:'Litván nyelvű első benyomások – a litván jóváhagyás előtt feltöltve, valószínűleg bemutató út.' },

  // ── Észtország ────────────────────────────────────────────────
  { id:'-PTzxicg65g', c:'EE', prio:3, lang:'et', ch:'Liikluslab', d:'2026-09-14', min:33,
    t:'Tesla FSD — kas see on valmis Eesti liikluseks? Mis üllatas, mis ebaõnnestus?',
    tags:['város','körforgalom','országút','értékelés'],
    note:'Észt nyelvű, kiegyensúlyozott teszt Tallinnban és környékén: körforgalmak, egyirányú utcák, belvárosi csúcsforgalom és országút – mi lepett meg, és hol akadt el.' }
];
