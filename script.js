const STORAGE_KEY = "studyboss_data_v1";

const questions = {
  math: [
    { id: "m1", question: "Vyřeš rovnici: 3x - 5 = 16", answers: ["5", "6", "7", "8"], correct: 2 },
    { id: "m2", question: "Vyřeš rovnici: 2(x - 4) = 10", answers: ["7", "8", "9", "10"], correct: 2 },
    { id: "m3", question: "Kolik je 15 % z 240?", answers: ["24", "30", "36", "48"], correct: 2 },
    { id: "m4", question: "Kolik je 3/4 + 1/8?", answers: ["5/8", "6/8", "7/8", "1"], correct: 2 },
    { id: "m5", question: "Kolik je 5³?", answers: ["15", "25", "125", "625"], correct: 2 },
    { id: "m6", question: "Kolik je √196?", answers: ["12", "13", "14", "16"], correct: 2 },
    { id: "m7", question: "Vypočítej: -7 + 12 - 5", answers: ["-10", "0", "5", "10"], correct: 1 },
    { id: "m8", question: "Jeden sešit stojí 27 Kč. Kolik stojí 4 sešity?", answers: ["81 Kč", "98 Kč", "108 Kč", "112 Kč"], correct: 2 },
    { id: "m9", question: "Vypočítej hodnotu výrazu 4a + 3 pro a = 5", answers: ["20", "23", "25", "18"], correct: 1 },
    { id: "m10", question: "Vyřeš rovnici: x / 6 = 4", answers: ["10", "18", "24", "28"], correct: 2 },
    { id: "m11", question: "Kolik je 2,5 × 0,4?", answers: ["0,1", "0,5", "1", "10"], correct: 2 },
    { id: "m12", question: "V poměru 2 : 3 je celek 25. Kolik odpovídá menší části?", answers: ["5", "10", "12", "15"], correct: 1 },
    { id: "m13", question: "Zboží za 800 Kč bylo zlevněno o 30 %. Kolik stojí po slevě?", answers: ["500 Kč", "540 Kč", "560 Kč", "600 Kč"], correct: 2 },
    { id: "m14", question: "Jaký je obvod trojúhelníku se stranami 6 cm, 7 cm a 9 cm?", answers: ["20 cm", "21 cm", "22 cm", "23 cm"], correct: 2 },
    { id: "m15", question: "Pravoúhlý trojúhelník má odvěsny 3 cm a 4 cm. Jaká je přepona?", answers: ["5 cm", "6 cm", "7 cm", "8 cm"], correct: 0 },
    { id: "m16", question: "Vyřeš rovnici: 7(x + 1) = 56", answers: ["6", "7", "8", "9"], correct: 1 },
    { id: "m17", question: "Desetinné číslo 0,375 odpovídá kolika procentům?", answers: ["3,75 %", "37,5 %", "375 %", "0,375 %"], correct: 1 },
    { id: "m18", question: "Kolik je (-3)²?", answers: ["-9", "6", "9", "-6"], correct: 2 },
    {id:"m19",question:"Vyřeš: 5x + 3 = 28",answers:["4","5","6","7"],correct:1},
{id:"m20",question:"Vyřeš: 4x - 12 = 20",answers:["6","7","8","9"],correct:2},
{id:"m21",question:"Kolik je 20 % z 350?",answers:["60","70","80","90"],correct:1},
{id:"m22",question:"Kolik je 7²?",answers:["14","21","49","56"],correct:2},
{id:"m23",question:"Kolik je √225?",answers:["12","13","14","15"],correct:3},
{id:"m24",question:"Vypočítej: -8 + 15 - 4",answers:["3","2","1","4"],correct:0},
{id:"m25",question:"Vyřeš: 9x = 72",answers:["6","7","8","9"],correct:2},
{id:"m26",question:"Kolik je 30 % z 500?",answers:["120","150","180","200"],correct:1},
{id:"m27",question:"Kolik je 2³ × 3?",answers:["12","18","24","6"],correct:0},
{id:"m28",question:"Vyřeš: x + 15 = 40",answers:["20","25","30","35"],correct:1},

{id:"m29",question:"Kolik je 0,75 × 80?",answers:["40","50","60","70"],correct:2},
{id:"m30",question:"Kolik je 6² + 4²?",answers:["36","40","52","60"],correct:2},
{id:"m31",question:"Vyřeš: 3x + 9 = 0",answers:["-3","-2","3","0"],correct:0},
{id:"m32",question:"Kolik je 1/2 + 3/4?",answers:["5/4","4/4","3/4","6/4"],correct:0},
{id:"m33",question:"Vyřeš: 8(x - 2) = 32",answers:["4","5","6","7"],correct:1},
{id:"m34",question:"Kolik je 25 % z 640?",answers:["120","140","160","180"],correct:2},
{id:"m35",question:"Kolik je 9³?",answers:["81","243","729","512"],correct:1},
{id:"m36",question:"Vyřeš: 2x + 10 = 18",answers:["3","4","5","6"],correct:1},
{id:"m37",question:"Kolik je √144 + 6?",answers:["16","18","20","22"],correct:1},
{id:"m38",question:"Kolik je 7 × (-3)?",answers:["-21","21","-10","10"],correct:0},

{id:"m39",question:"Vyřeš: 6x - 18 = 0",answers:["2","3","4","5"],correct:1},
{id:"m40",question:"Kolik je 15 % z 200?",answers:["20","25","30","35"],correct:2},
{id:"m41",question:"Kolik je 11²?",answers:["111","121","131","101"],correct:1},
{id:"m42",question:"Vyřeš: x/5 = 9",answers:["35","40","45","50"],correct:2},
{id:"m43",question:"Kolik je 2,4 × 5?",answers:["10","11","12","13"],correct:2},
{id:"m44",question:"Kolik je 3/5 z 50?",answers:["20","25","30","35"],correct:2},
{id:"m45",question:"Vyřeš: 7x + 7 = 56",answers:["6","7","8","9"],correct:1},
{id:"m46",question:"Kolik je √100 × 3?",answers:["20","30","40","50"],correct:1},
{id:"m47",question:"Kolik je 18 - 5²?",answers:["-7","-2","3","8"],correct:0},
{id:"m48",question:"Vyřeš: 10x = 150",answers:["10","12","15","20"],correct:2},

{id:"m49",question:"Kolik je 0,2 × 300?",answers:["40","50","60","70"],correct:2},
{id:"m50",question:"Kolik je 8² - 4²?",answers:["48","50","52","54"],correct:0},
{id:"m51",question:"Vyřeš: 4x + 8 = 0",answers:["-2","-1","2","1"],correct:0},
{id:"m52",question:"Kolik je 2/3 z 90?",answers:["50","60","70","80"],correct:1},
{id:"m53",question:"Vyřeš: x - 12 = 25",answers:["35","36","37","38"],correct:2},
{id:"m54",question:"Kolik je 12²?",answers:["124","144","154","164"],correct:1},
{id:"m55",question:"Kolik je √169?",answers:["11","12","13","14"],correct:2},
{id:"m56",question:"Vyřeš: 3(x + 5) = 30",answers:["5","6","7","8"],correct:0},
{id:"m57",question:"Kolik je 50 % z 180?",answers:["80","85","90","95"],correct:2},
{id:"m58",question:"Kolik je (-4)²?",answers:["-16","16","8","4"],correct:1},

{id:"m59",question:"Vyřeš: 2x + 4 = 20",answers:["6","7","8","9"],correct:2},
{id:"m60",question:"Kolik je 1,5 × 40?",answers:["50","55","60","65"],correct:2},
{id:"m61",question:"Kolik je 6³?",answers:["36","216","126","256"],correct:1},
{id:"m62",question:"Vyřeš: 9x - 9 = 0",answers:["1","2","3","4"],correct:0},
{id:"m63",question:"Kolik je 4/5 z 100?",answers:["60","70","80","90"],correct:2},
{id:"m64",question:"Kolik je √81 × 2?",answers:["16","18","20","22"],correct:1},
{id:"m65",question:"Vyřeš: x/4 = 12",answers:["36","40","44","48"],correct:3},
{id:"m66",question:"Kolik je 7² + 1?",answers:["48","49","50","51"],correct:2},
{id:"m67",question:"Kolik je 25 % z 200?",answers:["40","45","50","55"],correct:2},
{id:"m68",question:"Vyřeš: 5(x - 1) = 20",answers:["3","4","5","6"],correct:2},

{id:"m69",question:"Kolik je 2,5 × 8?",answers:["18","19","20","21"],correct:2},
{id:"m70",question:"Kolik je 3² × 4?",answers:["24","36","48","12"],correct:0},
{id:"m71",question:"Vyřeš: 8x = 64",answers:["6","7","8","9"],correct:2},
{id:"m72",question:"Kolik je 60 % z 50?",answers:["20","25","30","35"],correct:2},
{id:"m73",question:"Kolik je √256?",answers:["14","15","16","17"],correct:2},
{id:"m74",question:"Vyřeš: x + 8 = 19",answers:["9","10","11","12"],correct:2},
{id:"m75",question:"Kolik je 4³?",answers:["16","32","64","128"],correct:2},
{id:"m76",question:"Kolik je 3/4 z 80?",answers:["50","55","60","65"],correct:2},
{id:"m77",question:"Vyřeš: 6x + 6 = 42",answers:["5","6","7","8"],correct:1},
{id:"m78",question:"Kolik je 100 % z 250?",answers:["200","250","300","150"],correct:1},

{id:"m79",question:"Kolik je 5² + 5²?",answers:["25","50","75","100"],correct:1},
{id:"m80",question:"Vyřeš: x/2 = 14",answers:["26","28","30","32"],correct:1},
{id:"m81",question:"Kolik je 1,2 × 10?",answers:["10","11","12","13"],correct:2},
{id:"m82",question:"Kolik je √64 + 4?",answers:["10","12","14","16"],correct:1},
{id:"m83",question:"Vyřeš: 7x = 21",answers:["2","3","4","5"],correct:1},
{id:"m84",question:"Kolik je 10 % z 900?",answers:["80","90","100","110"],correct:1},
{id:"m85",question:"Kolik je 2² × 6?",answers:["12","16","24","36"],correct:0},
{id:"m86",question:"Vyřeš: 4x - 8 = 8",answers:["2","3","4","5"],correct:2},
{id:"m87",question:"Kolik je √121?",answers:["9","10","11","12"],correct:2},
{id:"m88",question:"Kolik je 30 % z 300?",answers:["60","70","80","90"],correct:3},

{id:"m89",question:"Vyřeš: x + 20 = 45",answers:["20","25","30","35"],correct:1},
{id:"m90",question:"Kolik je 6² + 2?",answers:["36","38","40","42"],correct:1},
{id:"m91",question:"Kolik je 0,5 × 60?",answers:["20","25","30","35"],correct:2},
{id:"m92",question:"Vyřeš: 5x = 35",answers:["5","6","7","8"],correct:2},
{id:"m93",question:"Kolik je √36 × 5?",answers:["25","30","35","40"],correct:1},
{id:"m94",question:"Kolik je 2/4 z 100?",answers:["40","50","60","70"],correct:1},
{id:"m95",question:"Vyřeš: 9x + 9 = 90",answers:["8","9","10","11"],correct:1},
{id:"m96",question:"Kolik je 8²?",answers:["64","72","81","56"],correct:0},
{id:"m97",question:"Kolik je 20 % z 150?",answers:["20","25","30","35"],correct:2},
{id:"m98",question:"Vyřeš: 3x = 27",answers:["7","8","9","10"],correct:2},

{id:"m99",question:"Kolik je √49 × 3?",answers:["14","21","28","35"],correct:1},
{id:"m100",question:"Kolik je 1,25 × 8?",answers:["8","9","10","11"],correct:2},
{id:"m101",question:"Vyřeš: x - 7 = 13",answers:["18","19","20","21"],correct:2},
{id:"m102",question:"Kolik je 4² × 2?",answers:["16","24","32","48"],correct:2},
{id:"m103",question:"Kolik je 50 % z 90?",answers:["40","45","50","55"],correct:1},
{id:"m104",question:"Vyřeš: 6x = 54",answers:["7","8","9","10"],correct:2},
{id:"m105",question:"Kolik je √100 + 10?",answers:["15","18","20","22"],correct:2},
{id:"m106",question:"Kolik je 3/4 z 60?",answers:["40","45","50","55"],correct:1},
{id:"m107",question:"Vyřeš: 2x + 6 = 14",answers:["3","4","5","6"],correct:1},
{id:"m108",question:"Kolik je 9²?",answers:["81","72","91","101"],correct:0},

{id:"m109",question:"Kolik je 25 % z 400?",answers:["80","90","100","110"],correct:2},
{id:"m110",question:"Vyřeš: 7x = 70",answers:["8","9","10","11"],correct:2},
{id:"m111",question:"Kolik je √196 + 2?",answers:["14","15","16","17"],correct:2},
{id:"m112",question:"Kolik je 2² × 5?",answers:["10","15","20","25"],correct:0},
{id:"m113",question:"Vyřeš: x + 30 = 80",answers:["40","45","50","55"],correct:2},
{id:"m114",question:"Kolik je 60 % z 100?",answers:["50","60","70","80"],correct:1},
{id:"m115",question:"Kolik je √81 + 1?",answers:["8","9","10","11"],correct:2},
{id:"m116",question:"Vyřeš: 8x = 96",answers:["10","11","12","13"],correct:2},
{id:"m117",question:"Kolik je 7² × 2?",answers:["84","98","112","72"],correct:1},
{id:"m118",question:"Kolik je 1/5 z 200?",answers:["20","30","40","50"],correct:2}
  ],

  german: [

{ id:"g1",question:"Jak se německy řekne 'ulice'?",answers:["die Straße","das Haus","der Park","die Schule"],correct:0},
{ id:"g2",question:"Jak se německy řekne 'budova'?",answers:["das Gebäude","die Straße","der Park","die Schule"],correct:0},
{ id:"g3",question:"Jak se německy řekne 'dům'?",answers:["das Haus","die Wohnung","die Schule","die Bank"],correct:0},
{ id:"g4",question:"Jak se německy řekne 'byt'?",answers:["die Wohnung","das Haus","die Schule","das Kino"],correct:0},
{ id:"g5",question:"Jak se německy řekne 'park'?",answers:["der Park","die Straße","die Schule","die Bank"],correct:0},
{ id:"g6",question:"Jak se německy řekne 'hřiště'?",answers:["der Spielplatz","der Park","die Schule","das Kino"],correct:0},
{ id:"g7",question:"Jak se německy řekne 'restaurace'?",answers:["das Restaurant","das Café","die Schule","die Bank"],correct:0},
{ id:"g8",question:"Jak se německy řekne 'kavárna'?",answers:["das Café","das Restaurant","die Schule","die Bank"],correct:0},
{ id:"g9",question:"Jak se německy řekne 'supermarket'?",answers:["der Supermarkt","die Bäckerei","die Schule","die Bank"],correct:0},
{ id:"g10",question:"Jak se německy řekne 'pekárna'?",answers:["die Bäckerei","der Supermarkt","die Schule","das Kino"],correct:0},

{ id:"g11",question:"Jak se německy řekne 'lékárna'?",answers:["die Apotheke","die Bank","die Schule","der Park"],correct:0},
{ id:"g12",question:"Jak se německy řekne 'nemocnice'?",answers:["das Krankenhaus","die Schule","die Bank","der Park"],correct:0},
{ id:"g13",question:"Jak se německy řekne 'škola'?",answers:["die Schule","das Kino","die Bank","der Park"],correct:0},
{ id:"g14",question:"Jak se německy řekne 'univerzita'?",answers:["die Universität","die Schule","die Bank","der Park"],correct:0},
{ id:"g15",question:"Jak se německy řekne 'nádraží'?",answers:["der Bahnhof","die Haltestelle","die Schule","der Park"],correct:0},
{ id:"g16",question:"Jak se německy řekne 'zastávka'?",answers:["die Bushaltestelle","der Bahnhof","die Schule","der Park"],correct:0},
{ id:"g17",question:"Jak se německy řekne 'policie'?",answers:["die Polizei","die Schule","die Bank","der Park"],correct:0},
{ id:"g18",question:"Jak se německy řekne 'banka'?",answers:["die Bank","die Schule","der Park","das Kino"],correct:0},
{ id:"g19",question:"Jak se německy řekne 'kino'?",answers:["das Kino","die Schule","die Bank","der Park"],correct:0},
{ id:"g20",question:"Jak se německy řekne 'muzeum'?",answers:["das Museum","die Schule","die Bank","der Park"],correct:0},

{ id:"g21",question:"Přelož: die Straße",answers:["ulice","park","dům","škola"],correct:0},
{ id:"g22",question:"Přelož: das Gebäude",answers:["budova","dům","škola","banka"],correct:0},
{ id:"g23",question:"Přelož: das Haus",answers:["dům","byt","škola","kino"],correct:0},
{ id:"g24",question:"Přelož: die Wohnung",answers:["byt","dům","škola","kino"],correct:0},
{ id:"g25",question:"Přelož: der Park",answers:["park","ulice","dům","škola"],correct:0},
{ id:"g26",question:"Přelož: der Spielplatz",answers:["hřiště","park","škola","kino"],correct:0},
{ id:"g27",question:"Přelož: das Restaurant",answers:["restaurace","kavárna","škola","banka"],correct:0},
{ id:"g28",question:"Přelož: das Café",answers:["kavárna","restaurace","škola","banka"],correct:0},
{ id:"g29",question:"Přelož: der Supermarkt",answers:["supermarket","pekárna","škola","banka"],correct:0},
{ id:"g30",question:"Přelož: die Bäckerei",answers:["pekárna","supermarket","škola","kino"],correct:0},

{ id:"g31",question:"Přelož: die Apotheke",answers:["lékárna","banka","škola","park"],correct:0},
{ id:"g32",question:"Přelož: das Krankenhaus",answers:["nemocnice","škola","banka","park"],correct:0},
{ id:"g33",question:"Přelož: die Schule",answers:["škola","kino","banka","park"],correct:0},
{ id:"g34",question:"Přelož: die Universität",answers:["univerzita","škola","banka","park"],correct:0},
{ id:"g35",question:"Přelož: der Bahnhof",answers:["nádraží","zastávka","škola","park"],correct:0},
{ id:"g36",question:"Přelož: die Bushaltestelle",answers:["zastávka","nádraží","škola","park"],correct:0},
{ id:"g37",question:"Přelož: die Polizei",answers:["policie","škola","banka","park"],correct:0},
{ id:"g38",question:"Přelož: die Bank",answers:["banka","škola","park","kino"],correct:0},
{ id:"g39",question:"Přelož: das Kino",answers:["kino","škola","banka","park"],correct:0},
{ id:"g40",question:"Přelož: das Museum",answers:["muzeum","škola","banka","park"],correct:0},

{ id:"g41",question:"Jak se řekne 'rovně'?",answers:["geradeaus","links","rechts","zurück"],correct:0},
{ id:"g42",question:"Jak se řekne 'doleva'?",answers:["links","rechts","geradeaus","oben"],correct:0},
{ id:"g43",question:"Jak se řekne 'doprava'?",answers:["rechts","links","unten","zurück"],correct:0},
{ id:"g44",question:"Jak se řekne 'křižovatka'?",answers:["die Kreuzung","die Straße","der Park","der Weg"],correct:0},
{ id:"g45",question:"Jak se řekne 'semafor'?",answers:["die Ampel","der Bus","der Bahnhof","die Bank"],correct:0},

{ id:"g46",question:"Přelož: Jdi rovně.",answers:["Geh geradeaus.","Geh links.","Geh rechts.","Bleib hier."],correct:0},
{ id:"g47",question:"Přelož: Zahni doprava.",answers:["Bieg rechts ab.","Bieg links ab.","Geh geradeaus.","Bleib hier."],correct:0},
{ id:"g48",question:"Přelož: Zahni doleva.",answers:["Bieg links ab.","Bieg rechts ab.","Geh zurück.","Geh geradeaus."],correct:0},
{ id:"g49",question:"Přelož: Kde je škola?",answers:["Wo ist die Schule?","Wo ist die Bank?","Wo ist das Kino?","Wo ist der Park?"],correct:0},
{ id:"g50",question:"Přelož: Kde je banka?",answers:["Wo ist die Bank?","Wo ist die Schule?","Wo ist das Kino?","Wo ist der Park?"],correct:0},

{ id:"g51",question:"Jak se německy řekne 'chodník'?",answers:["der Gehweg","die Straße","der Park","die Schule"],correct:0},
{ id:"g52",question:"Jak se německy řekne 'stanice'?",answers:["die Station","der Bahnhof","die Schule","der Park"],correct:0},
{ id:"g53",question:"Přelož: der Gehweg",answers:["chodník","ulice","park","škola"],correct:0},
{ id:"g54",question:"Přelož: die Station",answers:["stanice","nádraží","škola","park"],correct:0},

{ id:"g55",question:"Jak se řekne 'nastoupit'?",answers:["einsteigen","aussteigen","umsteigen","gehen"],correct:0},
{ id:"g56",question:"Jak se řekne 'vystoupit'?",answers:["aussteigen","einsteigen","gehen","fahren"],correct:0},
{ id:"g57",question:"Jak se řekne 'přestoupit'?",answers:["umsteigen","einsteigen","aussteigen","gehen"],correct:0},

{ id:"g58",question:"Přelož: Geh nach links.",answers:["Jdi doleva.","Jdi doprava.","Jdi rovně.","Zůstaň."],correct:0},
{ id:"g59",question:"Přelož: Geh nach rechts.",answers:["Jdi doprava.","Jdi doleva.","Jdi rovně.","Zůstaň."],correct:0},
{ id:"g60",question:"Přelož: Geh geradeaus.",answers:["Jdi rovně.","Jdi doleva.","Jdi doprava.","Zastav."],correct:0},

{ id:"g61",question:"Jak se řekne 'ulice je dlouhá'?",answers:["Die Straße ist lang.","Das Haus ist groß.","Die Schule ist klein.","Die Bank ist neu."],correct:0},
{ id:"g62",question:"Jak se řekne 'dům je velký'?",answers:["Das Haus ist groß.","Die Straße ist lang.","Die Schule ist klein.","Das Kino ist alt."],correct:0},
{ id:"g63",question:"Jak se řekne 'škola je malá'?",answers:["Die Schule ist klein.","Das Haus ist groß.","Die Bank ist groß.","Das Kino ist neu."],correct:0},

{ id:"g64",question:"Vyber správně: 'bank' německy",answers:["die Bank","das Bank","der Bank","die Banken"],correct:0},
{ id:"g65",question:"Vyber správně: 'kino' německy",answers:["das Kino","die Kino","der Kino","das Kinos"],correct:0},
{ id:"g66",question:"Vyber správně: 'park' německy",answers:["der Park","die Park","das Park","der Parks"],correct:0},

{ id:"g67",question:"Jak se zeptáš: 'Kde je nemocnice?'",answers:["Wo ist das Krankenhaus?","Wo ist die Schule?","Wo ist die Bank?","Wo ist das Kino?"],correct:0},
{ id:"g68",question:"Jak se zeptáš: 'Kde je restaurace?'",answers:["Wo ist das Restaurant?","Wo ist das Café?","Wo ist die Schule?","Wo ist die Bank?"],correct:0},

{ id:"g69",question:"Přelož: Ich gehe in die Schule.",answers:["Jdu do školy.","Jdu do banky.","Jdu do kina.","Jdu do parku."],correct:0},
{ id:"g70",question:"Přelož: Ich gehe in den Park.",answers:["Jdu do parku.","Jdu do školy.","Jdu do banky.","Jdu do kina."],correct:0},

{ id:"g71",question:"Co znamená 'links'?",answers:["doleva","doprava","rovně","zpět"],correct:0},
{ id:"g72",question:"Co znamená 'rechts'?",answers:["doprava","doleva","rovně","zpět"],correct:0},

{ id:"g73",question:"Jak se řekne 'zahni doleva'?",answers:["Bieg links ab.","Bieg rechts ab.","Geh geradeaus.","Bleib hier."],correct:0},
{ id:"g74",question:"Jak se řekne 'zahni doprava'?",answers:["Bieg rechts ab.","Bieg links ab.","Geh zurück.","Bleib hier."],correct:0},

{ id:"g75",question:"Přelož: die Ampel",answers:["semafor","autobus","vlak","stanice"],correct:0},
{ id:"g76",question:"Přelož: der Bahnhof",answers:["nádraží","zastávka","škola","park"],correct:0},

{ id:"g77",question:"Jak se řekne 'jděte rovně'?",answers:["Gehen Sie geradeaus.","Gehen Sie links.","Gehen Sie rechts.","Stoppen Sie."],correct:0},
{ id:"g78",question:"Jak se řekne 'přejdi ulici'?",answers:["Überquere die Straße.","Geh links.","Geh rechts.","Bleib stehen."],correct:0},

{ id:"g79",question:"Vyber správný člen: ___ Schule",answers:["die","der","das","den"],correct:0},
{ id:"g80",question:"Vyber správný člen: ___ Kino",answers:["das","die","der","den"],correct:0},
{ id:"g81",question:"Vyber správný člen: ___ Park",answers:["der","die","das","den"],correct:0},

{ id:"g82",question:"Přelož: Ich bin in der Schule.",answers:["Jsem ve škole.","Jsem v parku.","Jsem v kině.","Jsem v bance."],correct:0},
{ id:"g83",question:"Přelož: Ich bin im Park.",answers:["Jsem v parku.","Jsem ve škole.","Jsem v kině.","Jsem v bance."],correct:0},

{ id:"g84",question:"Jak se řekne 'město'?",answers:["die Stadt","das Dorf","der Park","die Straße"],correct:0},
{ id:"g85",question:"Jak se řekne 'vesnice'?",answers:["das Dorf","die Stadt","der Park","die Straße"],correct:0},

{ id:"g86",question:"Přelož: die Stadt",answers:["město","vesnice","park","ulice"],correct:0},
{ id:"g87",question:"Přelož: das Dorf",answers:["vesnice","město","park","ulice"],correct:0},

{ id:"g88",question:"Jak se řekne 'blízko'?",answers:["nah","weit","links","rechts"],correct:0},
{ id:"g89",question:"Jak se řekne 'daleko'?",answers:["weit","nah","links","rechts"],correct:0},

{ id:"g90",question:"Přelož: Es ist nah.",answers:["Je to blízko.","Je to daleko.","Je to vlevo.","Je to vpravo."],correct:0},
{ id:"g91",question:"Přelož: Es ist weit.",answers:["Je to daleko.","Je to blízko.","Je to vlevo.","Je to vpravo."],correct:0},

{ id:"g92",question:"Jak se řekne 'za rohem'?",answers:["um die Ecke","auf der Straße","im Park","in der Schule"],correct:0},
{ id:"g93",question:"Přelož: um die Ecke",answers:["za rohem","na ulici","v parku","ve škole"],correct:0},

{ id:"g94",question:"Jak se řekne 'na ulici'?",answers:["auf der Straße","im Park","in der Schule","bei der Bank"],correct:0},
{ id:"g95",question:"Přelož: auf der Straße",answers:["na ulici","v parku","ve škole","v bance"],correct:0},

{ id:"g96",question:"Jak se řekne 'v parku'?",answers:["im Park","auf der Straße","in der Schule","bei der Bank"],correct:0},
{ id:"g97",question:"Přelož: im Park",answers:["v parku","na ulici","ve škole","v bance"],correct:0},

{ id:"g98",question:"Jak se řekne 've škole'?",answers:["in der Schule","im Park","auf der Straße","bei der Bank"],correct:0},
{ id:"g99",question:"Přelož: in der Schule",answers:["ve škole","v parku","na ulici","v bance"],correct:0},

{ id:"g100",question:"Jak se řekne 'v bance'?",answers:["bei der Bank","in der Schule","im Park","auf der Straße"],correct:0},

{ id:"g101",question:"Přelož: bei der Bank",answers:["v bance","ve škole","v parku","na ulici"],correct:0},
{ id:"g102",question:"Jak se řekne 'kde?'?",answers:["wo","wann","wer","was"],correct:0},
{ id:"g103",question:"Jak se řekne 'kdy?'?",answers:["wann","wo","wer","was"],correct:0},
{ id:"g104",question:"Jak se řekne 'kdo?'?",answers:["wer","wo","wann","was"],correct:0},
{ id:"g105",question:"Jak se řekne 'co?'?",answers:["was","wo","wann","wer"],correct:0},

{ id:"g106",question:"Přelož: Wo bist du?",answers:["Kde jsi?","Kdy jsi?","Kdo jsi?","Co jsi?"],correct:0},
{ id:"g107",question:"Přelož: Was ist das?",answers:["Co to je?","Kde to je?","Kdy to je?","Kdo to je?"],correct:0},

{ id:"g108",question:"Jak se řekne 'Jsem doma'?",answers:["Ich bin zu Hause.","Ich bin in der Schule.","Ich bin im Park.","Ich bin in der Bank."],correct:0},
{ id:"g109",question:"Jak se řekne 'Jdu domů'?",answers:["Ich gehe nach Hause.","Ich gehe in die Schule.","Ich gehe in den Park.","Ich gehe zur Bank."],correct:0},

{ id:"g110",question:"Přelož: Ich gehe nach Hause.",answers:["Jdu domů.","Jdu do školy.","Jdu do parku.","Jdu do banky."],correct:0}
    
],

  english: [
    { id: "e1", question: "Doplň: She ___ to school every day.", answers: ["go", "goes", "going", "gone"], correct: 1 },
    { id: "e2", question: "Doplň: Yesterday we ___ football.", answers: ["play", "played", "plays", "playing"], correct: 1 },
    { id: "e3", question: "Doplň: I have ___ my homework.", answers: ["finish", "finished", "finishing", "finishes"], correct: 1 },
    { id: "e4", question: "Vyber správně: This book is ___ than that one.", answers: ["interesting", "more interesting", "most interesting", "interestinger"], correct: 1 },
    { id: "e5", question: "Doplň: If it rains, we ___ at home.", answers: ["stayed", "stay", "will stay", "staying"], correct: 2 },
    { id: "e6", question: "Doplň: There ___ two apples on the table.", answers: ["is", "are", "was", "be"], correct: 1 },
    { id: "e7", question: "Vyber správnou předložku: He is good ___ math.", answers: ["in", "on", "at", "for"], correct: 2 },
    { id: "e8", question: "Vyber správnou větu.", answers: ["I was watching TV when he arrived.", "I watched TV when he was arrive.", "I watching TV when he arrived.", "I was watch TV when he arrived."], correct: 0 },
    { id: "e9", question: "Doplň: How ___ money do you have?", answers: ["many", "much", "more", "any"], correct: 1 },
    { id: "e10", question: "Doplň: They ___ dinner now.", answers: ["cook", "cooks", "are cooking", "cooked"], correct: 2 },
    { id: "e11", question: "Vyber správně: We ___ to Prague next week.", answers: ["are going", "went", "goes", "going"], correct: 0 },
    { id: "e12", question: "Doplň: She can speak English very ___.", answers: ["good", "well", "best", "better"], correct: 1 },
    { id: "e13", question: "Doplň: I haven't seen him ___ Monday.", answers: ["for", "since", "from", "in"], correct: 1 },
    { id: "e14", question: "Vyber správnou otázku.", answers: ["How often do you play tennis?", "How often you play tennis?", "How do often you play tennis?", "How often are you play tennis?"], correct: 0 },
    { id: "e15", question: "Doplň: There isn't ___ milk in the fridge.", answers: ["some", "many", "any", "a"], correct: 2 },
    { id: "e16", question: "Doplň: My brother is the ___ in our family.", answers: ["tall", "taller", "tallest", "most tall"], correct: 2 },
    { id: "e17", question: "Vyber správně: You ___ smoke here.", answers: ["must", "mustn't", "can", "could"], correct: 1 },
    { id: "e18", question: "Doplň: When I was younger, I ___ swim very well.", answers: ["can", "could", "must", "should"], correct: 1 },
{ id: "e19", question: "Doplň: If I ___ more time, I would learn Spanish.", answers: ["have", "had", "will have", "would have"], correct: 1 },
{ id: "e20", question: "Vyber správně: By the time we arrived, the film ___.", answers: ["already started", "had already started", "has already started", "was already starting"], correct: 1 },
{ id: "e21", question: "Doplň: This exercise is ___ difficult than the last one.", answers: ["much", "more", "much more", "most"], correct: 2 },
{ id: "e22", question: "Vyber správně: She asked me where ___.", answers: ["was I", "I was", "am I", "I am"], correct: 1 },
{ id: "e23", question: "Doplň: We ___ dinner when the lights went out.", answers: ["had", "were having", "have had", "are having"], correct: 1 },
{ id: "e24", question: "Vyber správně: Neither Tom nor his friends ___ coming.", answers: ["is", "are", "was", "be"], correct: 1 },
{ id: "e25", question: "Doplň: I am looking forward to ___ you again.", answers: ["see", "saw", "seeing", "seen"], correct: 2 },
{ id: "e26", question: "Vyber správně: That is the boy ___ won the competition.", answers: ["which", "whose", "who", "whom"], correct: 2 },
{ id: "e27", question: "Doplň: You ___ have told me earlier. Now it is too late.", answers: ["should", "must", "can", "may"], correct: 0 },
{ id: "e28", question: "Vyber správně: I have lived here ___ 2019.", answers: ["for", "since", "from", "during"], correct: 1 },
{ id: "e29", question: "Doplň: There were ___ people at the concert than I expected.", answers: ["less", "fewer", "few", "little"], correct: 1 },
{ id: "e30", question: "Vyber správně: He speaks English almost as ___ as his teacher.", answers: ["good", "better", "well", "best"], correct: 2 },

{ id: "e31", question: "Doplň: If she ___ harder, she will pass the exam.", answers: ["study", "studies", "studied", "will study"], correct: 1 },
{ id: "e32", question: "Vyber správně: I don’t know what ___.", answers: ["does it mean", "it means", "means it", "did it mean"], correct: 1 },
{ id: "e33", question: "Doplň: The book ___ by my older sister last year.", answers: ["was written", "wrote", "is written", "has wrote"], correct: 0 },
{ id: "e34", question: "Vyber správně: We have to leave now, ___?", answers: ["haven't we", "do we", "don't we", "have we"], correct: 2 },
{ id: "e35", question: "Doplň: I wish I ___ play the guitar better.", answers: ["can", "could", "will", "must"], correct: 1 },
{ id: "e36", question: "Vyber správně: He is interested ___ modern history.", answers: ["at", "for", "in", "on"], correct: 2 },
{ id: "e37", question: "Doplň: She is the girl ___ brother is a pilot.", answers: ["who", "which", "whose", "whom"], correct: 2 },
{ id: "e38", question: "Vyber správně: We ___ this museum three times already.", answers: ["visit", "visited", "have visited", "are visiting"], correct: 2 },
{ id: "e39", question: "Doplň: You don’t need to hurry. We still have ___ time.", answers: ["a few", "many", "plenty of", "too"], correct: 2 },
{ id: "e40", question: "Vyber správně: The test was ___ difficult that half the class failed.", answers: ["too", "such", "so", "enough"], correct: 2 },
{ id: "e41", question: "Doplň: I’m not used to ___ up so early.", answers: ["get", "got", "getting", "have got"], correct: 2 },
{ id: "e42", question: "Vyber správně: If you had called me, I ___ you.", answers: ["helped", "would help", "would have helped", "had helped"], correct: 2 },

{ id: "e43", question: "Doplň: The match was cancelled ___ the heavy rain.", answers: ["because", "because of", "although", "despite"], correct: 1 },
{ id: "e44", question: "Vyber správně: I’d rather ___ at home tonight.", answers: ["stay", "stayed", "to stay", "staying"], correct: 0 },
{ id: "e45", question: "Doplň: Hardly ___ we arrived when it started to snow.", answers: ["had", "have", "did", "were"], correct: 0 },
{ id: "e46", question: "Vyber správně: She told me she ___ busy the next day.", answers: ["is", "was", "would be", "has been"], correct: 2 },
{ id: "e47", question: "Doplň: He apologized ___ being rude.", answers: ["for", "to", "of", "about"], correct: 0 },
{ id: "e48", question: "Vyber správně: This is the most interesting documentary I have ever ___.", answers: ["see", "saw", "seen", "seeing"], correct: 2 },
{ id: "e49", question: "Doplň: She made me ___ the whole essay again.", answers: ["write", "to write", "writing", "wrote"], correct: 0 },
{ id: "e50", question: "Vyber správně: While I ___ home, I met an old friend.", answers: ["walked", "was walking", "had walked", "am walking"], correct: 1 },
{ id: "e51", question: "Doplň: Not only my parents but also my brother ___ coming.", answers: ["is", "are", "be", "were"], correct: 0 },
{ id: "e52", question: "Vyber správně: He asked if I ___ ever been to London.", answers: ["have", "had", "has", "would"], correct: 1 },
{ id: "e53", question: "Doplň: We will stay here until the rain ___.", answers: ["stops", "will stop", "stopped", "is stopping"], correct: 0 },
{ id: "e54", question: "Vyber správně: There is no point in ___ about it now.", answers: ["worry", "to worry", "worried", "worrying"], correct: 3 },

{ id: "e55", question: "Doplň: The teacher suggested ___ earlier next time.", answers: ["come", "to come", "coming", "came"], correct: 2 },
{ id: "e56", question: "Vyber správně: He is not old enough ___ a car.", answers: ["drive", "driving", "to drive", "drove"], correct: 2 },
{ id: "e57", question: "Doplň: She has been learning French ___ three years.", answers: ["since", "for", "from", "during"], correct: 1 },
{ id: "e58", question: "Vyber správně: If only I ___ the answer!", answers: ["know", "knew", "have known", "will know"], correct: 1 },
{ id: "e59", question: "Doplň: They accused him ___ cheating in the test.", answers: ["for", "of", "with", "about"], correct: 1 },
{ id: "e60", question: "Vyber správně: The room ___ before the guests arrived.", answers: ["cleaned", "had been cleaned", "has cleaned", "was cleaning"], correct: 1 },
{ id: "e61", question: "Doplň: I’m afraid I can’t ___ your invitation.", answers: ["accept", "to accept", "accepting", "accepted"], correct: 0 },
{ id: "e62", question: "Vyber správně: She is one of the best students in the class, ___?", answers: ["isn't she", "doesn't she", "wasn't she", "hasn't she"], correct: 0 },
{ id: "e63", question: "Doplň: We were made ___ outside for an hour.", answers: ["wait", "to wait", "waiting", "waited"], correct: 1 },
{ id: "e64", question: "Vyber správně: I didn’t enjoy the film, ___ the acting was excellent.", answers: ["because", "although", "unless", "so"], correct: 1 },
{ id: "e65", question: "Doplň: The more you practise, the ___ you become.", answers: ["good", "better", "best", "well"], correct: 1 },
{ id: "e66", question: "Vyber správně: He denied ___ my notebook.", answers: ["take", "to take", "taking", "took"], correct: 2 },

{ id: "e67", question: "Doplň: I am tired because I ___ since six o’clock.", answers: ["worked", "have been working", "am working", "had worked"], correct: 1 },
{ id: "e68", question: "Vyber správně: She said she ___ me later.", answers: ["calls", "called", "would call", "has called"], correct: 2 },
{ id: "e69", question: "Doplň: We had better ___ now or we will miss the bus.", answers: ["leave", "to leave", "left", "leaving"], correct: 0 },
{ id: "e70", question: "Vyber správně: This town is famous ___ its old castle.", answers: ["about", "with", "for", "at"], correct: 2 },
{ id: "e71", question: "Doplň: No sooner had he sat down than the phone ___.", answers: ["rang", "had rung", "was ringing", "has rung"], correct: 0 },
{ id: "e72", question: "Vyber správně: I wish it ___ raining. I want to go out.", answers: ["stops", "would stop", "had stopped", "will stop"], correct: 1 },
{ id: "e73", question: "Doplň: She succeeded ___ the problem on her own.", answers: ["solve", "to solve", "in solving", "solving"], correct: 2 },
{ id: "e74", question: "Vyber správně: I have never heard such a ___ story.", answers: ["fascinated", "fascinating", "fascinate", "fascination"], correct: 1 },
{ id: "e75", question: "Doplň: He advised me ___ so much money.", answers: ["not spend", "not to spend", "don't spend", "not spending"], correct: 1 },
{ id: "e76", question: "Vyber správně: The girl ___ lives next door is my cousin.", answers: ["which", "whose", "who", "whom"], correct: 2 },
{ id: "e77", question: "Doplň: We arrived too late ___ the beginning of the show.", answers: ["for", "to", "at", "with"], correct: 0 },
{ id: "e78", question: "Vyber správně: By next summer, they ___ the house.", answers: ["finish", "will finish", "will have finished", "have finished"], correct: 2 },

{ id: "e79", question: "Doplň: There is very ___ sugar left, so buy some.", answers: ["few", "little", "many", "several"], correct: 1 },
{ id: "e80", question: "Vyber správně: I prefer tea ___ coffee.", answers: ["than", "to", "from", "over"], correct: 1 },
{ id: "e81", question: "Doplň: She can’t be at school; she ___ at home.", answers: ["must be", "can be", "should be", "used to be"], correct: 0 },
{ id: "e82", question: "Vyber správně: He is responsible ___ checking the results.", answers: ["to", "with", "for", "at"], correct: 2 },
{ id: "e83", question: "Doplň: I would rather you ___ that again.", answers: ["don't do", "didn't do", "won't do", "haven't done"], correct: 1 },
{ id: "e84", question: "Vyber správně: If I ___ you, I wouldn’t do that.", answers: ["am", "was", "were", "be"], correct: 2 },
{ id: "e85", question: "Doplň: He seems ___ the answer already.", answers: ["know", "to know", "knowing", "known"], correct: 1 },
{ id: "e86", question: "Vyber správně: The lesson was so boring that I could hardly keep my eyes ___.", answers: ["open", "opened", "opening", "opens"], correct: 0 },
{ id: "e87", question: "Doplň: We haven’t decided where ___ this summer.", answers: ["go", "to go", "going", "went"], correct: 1 },
{ id: "e88", question: "Vyber správně: He is used to ___ in front of people.", answers: ["speak", "spoke", "speaking", "spoken"], correct: 2 },
{ id: "e89", question: "Doplň: She was disappointed ___ her exam result.", answers: ["with", "from", "about", "for"], correct: 0 },
{ id: "e90", question: "Vyber správně: He told me not ___ late again.", answers: ["be", "to be", "being", "been"], correct: 1 },

{ id: "e91", question: "Doplň: It was ___ cold to go swimming.", answers: ["too", "enough", "so much", "such"], correct: 0 },
{ id: "e92", question: "Vyber správně: I have no idea what time ___.", answers: ["does the train leave", "the train leaves", "leaves the train", "did the train leave"], correct: 1 },
{ id: "e93", question: "Doplň: She is proud ___ winning the competition.", answers: ["for", "about", "of", "with"], correct: 2 },
{ id: "e94", question: "Vyber správně: We ___ lunch when they arrived.", answers: ["had", "were having", "have had", "had had"], correct: 1 },
{ id: "e95", question: "Doplň: The sooner we start, the ___ we will finish.", answers: ["early", "earlier", "earliest", "more early"], correct: 1 },
{ id: "e96", question: "Vyber správně: You needn’t ___ me home. I can walk.", answers: ["drive", "to drive", "driving", "drove"], correct: 0 },
{ id: "e97", question: "Doplň: He admitted ___ the window by mistake.", answers: ["break", "to break", "breaking", "broke"], correct: 2 },
{ id: "e98", question: "Vyber správně: I would have phoned you if I ___ your number.", answers: ["knew", "know", "had known", "have known"], correct: 2 },
{ id: "e99", question: "Doplň: We are thinking ___ moving to another city.", answers: ["about", "for", "at", "with"], correct: 0 },
{ id: "e100", question: "Vyber správně: The news ___ surprising to everyone.", answers: ["were", "are", "was", "be"], correct: 2 },
{ id: "e101", question: "Doplň: I regret ___ you that your application was rejected.", answers: ["tell", "to tell", "telling", "told"], correct: 1 },
{ id: "e102", question: "Vyber správně: She is the same age ___ my sister.", answers: ["like", "than", "as", "with"], correct: 2 },

{ id: "e103", question: "Doplň: We could go for a walk, ___ we could stay at home.", answers: ["but", "or", "although", "because"], correct: 1 },
{ id: "e104", question: "Vyber správně: This problem is not ___ difficult as I expected.", answers: ["so", "such", "too", "enough"], correct: 0 },
{ id: "e105", question: "Doplň: She let me ___ her notes from yesterday.", answers: ["borrow", "to borrow", "borrowing", "borrowed"], correct: 0 },
{ id: "e106", question: "Vyber správně: Nobody knows where he ___.", answers: ["has gone", "has been gone", "did go", "going"], correct: 0 },
{ id: "e107", question: "Doplň: We have plenty ___ food, so don’t buy anything.", answers: ["from", "of", "for", "with"], correct: 1 },
{ id: "e108", question: "Vyber správně: The boy was too short ___ the shelf.", answers: ["reach", "to reach", "reaching", "reached"], correct: 1 },
{ id: "e109", question: "Doplň: If she ___ earlier, she wouldn’t have missed the train.", answers: ["left", "had left", "would leave", "has left"], correct: 1 },
{ id: "e110", question: "Vyber správně: We were surprised ___ how fast he solved it.", answers: ["at", "for", "by", "with"], correct: 2 },
{ id: "e111", question: "Doplň: I’d like to know what ___ tomorrow.", answers: ["happens", "will happen", "happened", "is happen"], correct: 1 },
{ id: "e112", question: "Vyber správně: She is one of those people who always ___ the truth.", answers: ["tell", "tells", "telling", "told"], correct: 0 },
{ id: "e113", question: "Doplň: He is said ___ very talented.", answers: ["be", "to be", "being", "been"], correct: 1 },
{ id: "e114", question: "Vyber správně: I’d rather not ___ about it now.", answers: ["talk", "to talk", "talking", "talked"], correct: 0 },

{ id: "e115", question: "Doplň: She had her bike ___ yesterday.", answers: ["repair", "to repair", "repaired", "repairing"], correct: 2 },
{ id: "e116", question: "Vyber správně: The sooner you apologise, the ___ it will be.", answers: ["good", "better", "best", "well"], correct: 1 },
{ id: "e117", question: "Doplň: He warned us ___ touch the wires.", answers: ["don't", "not", "not to", "to not"], correct: 2 },
{ id: "e118", question: "Vyber správně: I am not sure whether he ___ the message yet.", answers: ["has received", "received", "receives", "had receive"], correct: 0 }
  ],

  czech: [
    { id: "c1", question: "Ve větě „Malý pes běžel domů.“ je přídavné jméno:", answers: ["pes", "běžel", "malý", "domů"], correct: 2 },
    { id: "c2", question: "Najdi podmět ve větě: „Včera přijeli hosté.“", answers: ["včera", "přijeli", "hosté", "žádný tam není"], correct: 2 },
    { id: "c3", question: "Které slovo je příslovce?", answers: ["rychle", "pes", "modrý", "běžet"], correct: 0 },
    { id: "c4", question: "Vyber správný zápis.", answers: ["Bily jsme doma.", "Byli jsme doma.", "Byly jsme doma.", "Bili jsme doma."], correct: 1 },
    { id: "c5", question: "Kolik má čeština pádů?", answers: ["5", "6", "7", "8"], correct: 2 },
    { id: "c6", question: "Které slovo je sloveso?", answers: ["rychle", "přemýšlet", "lavice", "modrý"], correct: 1 },
    { id: "c7", question: "Ve větě „Tatínek četl zajímavou knihu.“ je předmět:", answers: ["Tatínek", "četl", "zajímavou", "knihu"], correct: 3 },
    { id: "c8", question: "Které slovo je zájmeno?", answers: ["on", "pět", "krásný", "pomalu"], correct: 0 },
    { id: "c9", question: "Ve větě „Děti si hrály na zahradě.“ je podstatné jméno:", answers: ["si", "hrály", "děti", "na"], correct: 2 },
    { id: "c10", question: "Která možnost je souvětí?", answers: ["Petr píše úkol.", "Venku prší.", "Až přijdu domů, napíšu úkol.", "Rychle běž."], correct: 2 },
    { id: "c11", question: "Ve větě „Petr je pilný a chytrý.“ spojka „a“ vyjadřuje poměr:", answers: ["odporovací", "slučovací", "stupňovací", "důsledkový"], correct: 1 },
    { id: "c12", question: "Které slovo je číslovka?", answers: ["pět", "on", "rychle", "hezký"], correct: 0 },
    { id: "c13", question: "Které slovo je předložka?", answers: ["mezi", "zelený", "napsal", "kdo"], correct: 0 },
    { id: "c14", question: "Ve větě „Rychle jsme doběhli do školy.“ je příslovečné určení místa:", answers: ["rychle", "jsme", "doběhli", "do školy"], correct: 3 },
    { id: "c15", question: "Doplň správně: „Dej to ___.“", answers: ["mě", "mně", "mne", "mněe"], correct: 1 },
    { id: "c16", question: "Ve větě „Když zaprší, zůstaneme doma.“ je vedlejší věta:", answers: ["zůstaneme doma", "když zaprší", "doma", "žádná tam není"], correct: 1 },
    { id: "c17", question: "Které slovo je citoslovce?", answers: ["ach", "škola", "běžet", "třetí"], correct: 0 },
    { id: "c18", question: "Ve větě „Nový mobil byl velmi drahý.“ je příslovce:", answers: ["nový", "mobil", "velmi", "drahý"], correct: 2 },
{ id:"c19",question:"Urči druh vedlejší věty: „Vím, že přijde.“",answers:["příčinná","předmětná","podmětná","časová"],correct:1},
{ id:"c20",question:"Urči větný člen: „rychle“ ve větě „Běžel rychle domů.“",answers:["předmět","příslovečné určení způsobu","přívlastek","podmět"],correct:1},
{ id:"c21",question:"Vyber správný tvar: „Viděl jsem ___ v parku.“",answers:["její","jí","ji","jej"],correct:2},
{ id:"c22",question:"Urči druh souvětí: „Přišel domů a začal se učit.“",answers:["podřadné","souřadné","jednoduché","vložené"],correct:1},
{ id:"c23",question:"Najdi přísudek: „Děti si hrály na hřišti.“",answers:["děti","si","hrály","na hřišti"],correct:2},
{ id:"c24",question:"Která věta obsahuje přístavek?",answers:["Petr běží.","Praha, hlavní město ČR, je krásná.","Venku prší.","Jdu domů."],correct:1},
{ id:"c25",question:"Urči rod slova „kuře“",answers:["mužský","ženský","střední","neutrální"],correct:2},
{ id:"c26",question:"Vyber správně: „Bez ___ by to nešlo.“",answers:["tebe","tebou","tobě","ty"],correct:0},
{ id:"c27",question:"Urči druh zájmena „někdo“",answers:["osobní","tázací","neurčité","vztažné"],correct:2},
{ id:"c28",question:"Urči druh vedlejší věty: „Až přijde, odejdeme.“",answers:["časová","příčinná","účelová","podmínková"],correct:0},

{ id:"c29",question:"Která věta obsahuje doplněk?",answers:["Viděl jsem ho smutného.","Čtu knihu.","Běžím rychle.","Píšu úkol."],correct:0},
{ id:"c30",question:"Urči druh přísudku: „Je unavený.“",answers:["slovesný","jmenný se sponou","jmenný bez spony","slovesně-jmenný"],correct:1},
{ id:"c31",question:"Vyber správně: „Mluvili jsme o ___.“",answers:["něm","něho","němu","němž"],correct:0},
{ id:"c32",question:"Urči druh spojky „protože“",answers:["slučovací","odporovací","příčinná","stupňovací"],correct:2},
{ id:"c33",question:"Najdi podmět: „Na zahradě rostou květiny.“",answers:["zahradě","rostou","květiny","na"],correct:2},
{ id:"c34",question:"Které slovo je částice?",answers:["prý","pes","běží","rychle"],correct:0},
{ id:"c35",question:"Urči druh věty: „Kéž by to vyšlo!“",answers:["oznamovací","tázací","rozkazovací","přací"],correct:3},
{ id:"c36",question:"Vyber správně: „Vidím ___ psa.“",answers:["toho","ten","tomu","tím"],correct:0},
{ id:"c37",question:"Urči vid slovesa „napsat“",answers:["dokonavý","nedokonavý","obojí","neurčitý"],correct:0},
{ id:"c38",question:"Urči druh věty: „Kdo to udělal?“",answers:["oznamovací","tázací","rozkazovací","přací"],correct:1},

{ id:"c39",question:"Najdi přívlastek: „Velký dům stojí na rohu.“",answers:["dům","velký","stojí","na rohu"],correct:1},
{ id:"c40",question:"Urči pád: „bez psa“",answers:["2.","3.","4.","6."],correct:0},
{ id:"c41",question:"Které slovo je citoslovce?",answers:["ach","rychle","pes","modrý"],correct:0},
{ id:"c42",question:"Vyber správný zápis:",answers:["By jsme doma.","Byli jsme doma.","Byly jsme doma.","Bily jsme doma."],correct:1},
{ id:"c43",question:"Urči druh věty: „Přijď sem!“",answers:["oznamovací","tázací","rozkazovací","přací"],correct:2},
{ id:"c44",question:"Které slovo je předložka?",answers:["do","běží","rychle","pes"],correct:0},
{ id:"c45",question:"Urči druh vedlejší věty: „Když prší, zůstanu doma.“",answers:["časová","příčinná","účelová","podmínková"],correct:0},
{ id:"c46",question:"Vyber správně: „Řekl ___ pravdu.“",answers:["mi","mě","mně","mnou"],correct:0},
{ id:"c47",question:"Urči slovesný čas: „psal jsem“",answers:["přítomný","minulý","budoucí","neurčitý"],correct:1},
{ id:"c48",question:"Najdi přísudek: „Auto zastavilo před domem.“",answers:["auto","zastavilo","před","domem"],correct:1},

{ id:"c49",question:"Urči druh spojení: „černobílý“",answers:["souřadné","podřadné","složené","příslovečné"],correct:0},
{ id:"c50",question:"Které slovo je číslovka?",answers:["dva","běžet","modrý","rychle"],correct:0},
{ id:"c51",question:"Urči pád: „vidím dům“",answers:["1.","2.","3.","4."],correct:3},
{ id:"c52",question:"Vyber správně: „Jdu k ___ domů.“",answers:["nim","němu","němuž","němu"],correct:1},
{ id:"c53",question:"Urči druh zájmena „kdo“",answers:["osobní","tázací","neurčité","vztažné"],correct:1},
{ id:"c54",question:"Která věta obsahuje přívlastek neshodný?",answers:["Dům na rohu je starý.","Velký dům stojí.","Dům stojí.","Dům je velký."],correct:0},
{ id:"c55",question:"Urči rod slova „žena“",answers:["mužský","ženský","střední","společný"],correct:1},
{ id:"c56",question:"Vyber správně: „Bez ___ bych to nezvládl.“",answers:["tebe","tobě","tebou","ty"],correct:0},
{ id:"c57",question:"Urči druh vedlejší věty: „Aby uspěl, musí se učit.“",answers:["účelová","příčinná","časová","podmínková"],correct:0},
{ id:"c58",question:"Které slovo je příslovce?",answers:["dnes","pes","krásný","běžet"],correct:0},

{ id:"c59",question:"Urči druh přísudku: „Stal se učitelem.“",answers:["slovesný","jmenný se sponou","jmenný bez spony","doplňkový"],correct:1},
{ id:"c60",question:"Vyber správně: „Viděl jsem ___ dům.“",answers:["ten","toho","tím","tomu"],correct:1},
{ id:"c61",question:"Urči větný člen: „včera“",answers:["podmět","předmět","příslovečné určení času","přívlastek"],correct:2},
{ id:"c62",question:"Urči druh věty: „Kéž by pršelo!“",answers:["oznamovací","tázací","rozkazovací","přací"],correct:3},
{ id:"c63",question:"Která věta obsahuje doplněk?",answers:["Viděl jsem ho unaveného.","Běžím rychle.","Čtu knihu.","Píšu dopis."],correct:0},
{ id:"c64",question:"Urči pád: „o škole“",answers:["2.","3.","6.","7."],correct:2},
{ id:"c65",question:"Vyber správně: „Mluvím o ___.“",answers:["něm","něho","němu","němž"],correct:0},
{ id:"c66",question:"Urči druh zájmena „ten“",answers:["osobní","ukazovací","neurčité","tázací"],correct:1},
{ id:"c67",question:"Urči druh vedlejší věty: „Protože pršelo, zůstali jsme doma.“",answers:["příčinná","časová","účelová","podmínková"],correct:0},
{ id:"c68",question:"Které slovo je předložka?",answers:["na","běží","pes","rychle"],correct:0},

{ id:"c69",question:"Urči slovesný čas: „budu psát“",answers:["přítomný","minulý","budoucí","neurčitý"],correct:2},
{ id:"c70",question:"Najdi podmět: „Venku zpívají ptáci.“",answers:["venku","zpívají","ptáci","na"],correct:2},
{ id:"c71",question:"Vyber správně: „Řekni ___ pravdu.“",answers:["mi","mě","mně","mnou"],correct:0},
{ id:"c72",question:"Urči druh věty: „Přijdeš?“",answers:["oznamovací","tázací","rozkazovací","přací"],correct:1},
{ id:"c73",question:"Které slovo je částice?",answers:["asi","pes","běží","rychle"],correct:0},
{ id:"c74",question:"Urči druh spojky „ale“",answers:["slučovací","odporovací","příčinná","stupňovací"],correct:1},
{ id:"c75",question:"Vyber správně: „Vidím ___.“",answers:["tebe","tobě","tebou","ty"],correct:0},
{ id:"c76",question:"Urči pád: „s kamarádem“",answers:["2.","3.","6.","7."],correct:3},
{ id:"c77",question:"Urči druh zájmena „já“",answers:["osobní","tázací","neurčité","ukazovací"],correct:0},
{ id:"c78",question:"Která věta je souvětí?",answers:["Prší.","Jdu domů.","Když prší, jdu domů.","Běžím."],correct:2},

{ id:"c79",question:"Urči příslovečné určení: „rychle“",answers:["způsobu","místa","času","příčiny"],correct:0},
{ id:"c80",question:"Vyber správně: „Jdu k ___.“",answers:["nim","němu","němuž","němu"],correct:1},
{ id:"c81",question:"Urči rod slova „město“",answers:["mužský","ženský","střední","společný"],correct:2},
{ id:"c82",question:"Které slovo je sloveso?",answers:["běžet","pes","modrý","rychle"],correct:0},
{ id:"c83",question:"Urči druh vedlejší věty: „Když přijde, zavolám.“",answers:["časová","příčinná","účelová","podmínková"],correct:0},
{ id:"c84",question:"Vyber správně: „Bez ___ by to nešlo.“",answers:["nich","nimi","nichž","nim"],correct:0},
{ id:"c85",question:"Urči pád: „k domu“",answers:["2.","3.","4.","6."],correct:1},
{ id:"c86",question:"Které slovo je přídavné jméno?",answers:["krásný","běžet","pes","rychle"],correct:0},
{ id:"c87",question:"Urči druh věty: „Pojď sem!“",answers:["oznamovací","tázací","rozkazovací","přací"],correct:2},
{ id:"c88",question:"Vyber správně: „Mluvili jsme o ___.“",answers:["nich","nimi","nim","nichž"],correct:0},

{ id:"c89",question:"Urči druh přísudku: „Je učitelem.“",answers:["slovesný","jmenný se sponou","jmenný bez spony","doplňkový"],correct:1},
{ id:"c90",question:"Které slovo je citoslovce?",answers:["ach","pes","běžet","rychle"],correct:0},
{ id:"c91",question:"Urči druh zájmena „něco“",answers:["osobní","tázací","neurčité","vztažné"],correct:2},
{ id:"c92",question:"Vyber správně: „Viděl jsem ___.“",answers:["ho","jemu","němu","jehož"],correct:0},
{ id:"c93",question:"Urči větný člen: „doma“",answers:["podmět","předmět","příslovečné určení místa","přívlastek"],correct:2},
{ id:"c94",question:"Urči pád: „bez knihy“",answers:["2.","3.","4.","6."],correct:0},
{ id:"c95",question:"Která věta obsahuje souvětí?",answers:["Běžím.","Prší.","Když prší, běžím.","Spím."],correct:2},
{ id:"c96",question:"Vyber správně: „Řekl ___ to.“",answers:["mi","mě","mně","mnou"],correct:0},
{ id:"c97",question:"Urči druh spojky „a“",answers:["slučovací","odporovací","příčinná","stupňovací"],correct:0},
{ id:"c98",question:"Urči druh věty: „Ať se ti daří!“",answers:["oznamovací","tázací","rozkazovací","přací"],correct:3},

{ id:"c99",question:"Které slovo je příslovce?",answers:["dnes","pes","běžet","modrý"],correct:0},
{ id:"c100",question:"Urči rod slova „muž“",answers:["mužský","ženský","střední","společný"],correct:0},
{ id:"c101",question:"Vyber správně: „Vidím ___.“",answers:["je","jim","ně","nich"],correct:0},
{ id:"c102",question:"Urči pád: „o domě“",answers:["2.","3.","6.","7."],correct:2},
{ id:"c103",question:"Které slovo je předložka?",answers:["u","běží","pes","rychle"],correct:0},
{ id:"c104",question:"Urči druh věty: „Přijdeš zítra?“",answers:["oznamovací","tázací","rozkazovací","přací"],correct:1},
{ id:"c105",question:"Vyber správně: „Jdu s ___.“",answers:["ním","něho","němu","něm"],correct:0},
{ id:"c106",question:"Urči druh zájmena „který“",answers:["osobní","tázací","vztažné","neurčité"],correct:2},
{ id:"c107",question:"Která věta obsahuje doplněk?",answers:["Viděl jsem ho unaveného.","Běžím rychle.","Čtu knihu.","Píšu dopis."],correct:0},
{ id:"c108",question:"Urči druh vedlejší věty: „Kdyby přišel, odešli bychom.“",answers:["podmínková","časová","příčinná","účelová"],correct:0},

{ id:"c109",question:"Vyber správně: „Řekl ___ pravdu.“",answers:["mi","mě","mně","mnou"],correct:0},
{ id:"c110",question:"Urči pád: „knihu“",answers:["1.","2.","3.","4."],correct:3},
{ id:"c111",question:"Které slovo je sloveso?",answers:["běžet","pes","modrý","rychle"],correct:0},
{ id:"c112",question:"Urči druh věty: „Prší.“",answers:["oznamovací","tázací","rozkazovací","přací"],correct:0},
{ id:"c113",question:"Vyber správně: „Bez ___ bych to nedal.“",answers:["nich","nimi","nim","nichž"],correct:0},
{ id:"c114",question:"Urči druh spojky „protože“",answers:["slučovací","odporovací","příčinná","stupňovací"],correct:2},
{ id:"c115",question:"Urči rod slova „auto“",answers:["mužský","ženský","střední","společný"],correct:2},
{ id:"c116",question:"Vyber správně: „Mluvili jsme o ___.“",answers:["něm","něho","němu","němž"],correct:0},
{ id:"c117",question:"Urči druh věty: „Kéž by to vyšlo!“",answers:["oznamovací","tázací","rozkazovací","přací"],correct:3},
{ id:"c118",question:"Které slovo je číslovka?",answers:["pět","běžet","modrý","rychle"],correct:0}
  ],

  custom: [
    { id: "x1", question: "Jaké je hlavní město Slovenska?", answers: ["Brno", "Bratislava", "Košice", "Vídeň"], correct: 1 },
    { id: "x2", question: "Chemická značka kyslíku je:", answers: ["K", "O", "Ox", "Ky"], correct: 1 },
    { id: "x3", question: "Kolik komor má lidské srdce?", answers: ["2", "3", "4", "5"], correct: 2 },
    { id: "x4", question: "Nejdelší kost v lidském těle je:", answers: ["lebka", "stehenní kost", "žebro", "loketní kost"], correct: 1 },
    { id: "x5", question: "Kdo byl prvním prezidentem České republiky?", answers: ["Tomáš Garrigue Masaryk", "Václav Klaus", "Václav Havel", "Miloš Zeman"], correct: 2 },
    { id: "x6", question: "V kterém roce začala první světová válka?", answers: ["1912", "1914", "1916", "1918"], correct: 1 },
    { id: "x7", question: "Ve které části buňky probíhá fotosyntéza?", answers: ["mitochondrie", "jádro", "chloroplast", "ribozom"], correct: 2 },
    { id: "x8", question: "Která planeta je nazývána rudá planeta?", answers: ["Venuše", "Mars", "Jupiter", "Merkur"], correct: 1 },
    { id: "x9", question: "Největší oceán na Zemi je:", answers: ["Atlantský", "Indický", "Severní ledový", "Tichý"], correct: 3 },
    { id: "x10", question: "Kolik wattů je 1 kilowatt?", answers: ["10", "100", "1000", "10 000"], correct: 2 },
    { id: "x11", question: "Jednotka elektrického proudu je:", answers: ["volt", "watt", "ampér", "ohm"], correct: 2 },
    { id: "x12", question: "Roztok s pH 7 je:", answers: ["kyselý", "zásaditý", "neutrální", "jedovatý"], correct: 2 },
    { id: "x13", question: "Který plyn rostliny přijímají ze vzduchu při fotosyntéze?", answers: ["kyslík", "oxid uhličitý", "dusík", "vodík"], correct: 1 },
    { id: "x14", question: "Největší světadíl je:", answers: ["Evropa", "Afrika", "Asie", "Austrálie"], correct: 2 },
    { id: "x15", question: "Které cévy vedou krev od srdce?", answers: ["žíly", "tepny", "vlásečnice", "míznice"], correct: 1 },
    { id: "x16", question: "Chemický vzorec H₂O znamená:", answers: ["kyslík", "vodu", "vodík", "sůl"], correct: 1 },
    { id: "x17", question: "Který stát sousedí s Českem?", answers: ["Chorvatsko", "Polsko", "Ukrajina", "Slovinsko"], correct: 1 },
    { id: "x18", question: "Kdo napsal Babičku?", answers: ["Karel Čapek", "Božena Němcová", "Jan Neruda", "Alois Jirásek"], correct: 1 },
{ id:"x19",question:"Který plyn je nejvíce zastoupen v atmosféře Země?",answers:["kyslík","dusík","oxid uhličitý","vodík"],correct:1},
{ id:"x20",question:"Který kontinent je nejmenší?",answers:["Evropa","Austrálie","Antarktida","Jižní Amerika"],correct:1},
{ id:"x21",question:"Jaká je značka sodíku?",answers:["So","Na","S","Sd"],correct:1},
{ id:"x22",question:"Který orgán filtruje krev?",answers:["plíce","játra","ledviny","srdce"],correct:2},
{ id:"x23",question:"Jaká je jednotka síly?",answers:["joule","newton","watt","volt"],correct:1},
{ id:"x24",question:"Kdo byl první prezident Československa?",answers:["Edvard Beneš","T. G. Masaryk","Václav Havel","Klement Gottwald"],correct:1},
{ id:"x25",question:"Jaká je nejvyšší hora světa?",answers:["K2","Everest","Mont Blanc","Kilimandžáro"],correct:1},
{ id:"x26",question:"Který kov je kapalný při pokojové teplotě?",answers:["železo","rtuť","hliník","měď"],correct:1},
{ id:"x27",question:"Kolik zubů má dospělý člověk?",answers:["28","30","32","34"],correct:2},
{ id:"x28",question:"Jaká je jednotka elektrického napětí?",answers:["ampér","volt","ohm","watt"],correct:1},

{ id:"x29",question:"Který stát má hlavní město Berlín?",answers:["Rakousko","Německo","Polsko","Švýcarsko"],correct:1},
{ id:"x30",question:"Co je fotosyntéza?",answers:["rozklad cukrů","tvorba cukrů a kyslíku","spalování","trávení"],correct:1},
{ id:"x31",question:"Jaká je značka železa?",answers:["Fe","Ir","Zn","Ag"],correct:0},
{ id:"x32",question:"Který oceán je druhý největší?",answers:["Atlantský","Indický","Tichý","Severní ledový"],correct:0},
{ id:"x33",question:"Který stát leží na Pyrenejském poloostrově?",answers:["Itálie","Španělsko","Řecko","Bulharsko"],correct:1},
{ id:"x34",question:"Jaký je chemický vzorec CO₂?",answers:["oxid kyslíku","oxid uhličitý","oxid sodný","kyselina"],correct:1},
{ id:"x35",question:"Která planeta je největší?",answers:["Země","Mars","Jupiter","Saturn"],correct:2},
{ id:"x36",question:"Který orgán pumpuje krev?",answers:["plíce","játra","srdce","ledviny"],correct:2},
{ id:"x37",question:"Jaká je jednotka výkonu?",answers:["watt","volt","ampér","newton"],correct:0},
{ id:"x38",question:"Kdo objevil Ameriku?",answers:["Kolumbus","Magellan","Cook","Vasco da Gama"],correct:0},

{ id:"x39",question:"Jaký je symbol pro vodík?",answers:["H","O","V","W"],correct:0},
{ id:"x40",question:"Který světadíl je nejlidnatější?",answers:["Evropa","Afrika","Asie","Amerika"],correct:2},
{ id:"x41",question:"Jaká je jednotka energie?",answers:["watt","joule","volt","ampér"],correct:1},
{ id:"x42",question:"Který orgán slouží k dýchání?",answers:["plíce","srdce","ledviny","játra"],correct:0},
{ id:"x43",question:"Jaká je nejdelší řeka světa?",answers:["Amazonka","Nil","Dunaj","Mississippi"],correct:0},
{ id:"x44",question:"Který kov je nejlepší vodič elektřiny?",answers:["železo","stříbro","měď","hliník"],correct:1},
{ id:"x45",question:"Kolik má člověk chromozomů?",answers:["44","46","48","50"],correct:1},
{ id:"x46",question:"Jaký je vzorec vody?",answers:["H₂O","CO₂","O₂","NaCl"],correct:0},
{ id:"x47",question:"Který stát má hlavní město Paříž?",answers:["Španělsko","Itálie","Francie","Belgie"],correct:2},
{ id:"x48",question:"Jaká je jednotka odporu?",answers:["volt","watt","ohm","ampér"],correct:2},

{ id:"x49",question:"Který orgán produkuje inzulin?",answers:["játra","slinivka","ledviny","plíce"],correct:1},
{ id:"x50",question:"Jaká planeta má prstence?",answers:["Mars","Venuše","Saturn","Merkur"],correct:2},
{ id:"x51",question:"Který stát sousedí s Českem?",answers:["Chorvatsko","Polsko","Itálie","Francie"],correct:1},
{ id:"x52",question:"Jaká je značka draslíku?",answers:["K","Dr","D","Ka"],correct:0},
{ id:"x53",question:"Kolik je 1 km v metrech?",answers:["10","100","1000","10000"],correct:2},
{ id:"x54",question:"Kdo byl první člověk na Měsíci?",answers:["Gagarin","Armstrong","Aldrin","Collins"],correct:1},
{ id:"x55",question:"Jaký orgán čistí krev?",answers:["plíce","ledviny","srdce","žaludek"],correct:1},
{ id:"x56",question:"Jaký je symbol zlata?",answers:["Au","Ag","Go","Zl"],correct:0},
{ id:"x57",question:"Jaký oceán omývá Evropu?",answers:["Atlantský","Indický","Tichý","Severní ledový"],correct:0},
{ id:"x58",question:"Jaká je jednotka frekvence?",answers:["Hz","W","V","N"],correct:0},

{ id:"x59",question:"Jaký je chemický vzorec kuchyňské soli?",answers:["NaCl","HCl","KCl","CaCl"],correct:0},
{ id:"x60",question:"Kolik kostí má lidské tělo?",answers:["206","210","198","220"],correct:0},
{ id:"x61",question:"Který stát má hlavní město Vídeň?",answers:["Rakousko","Maďarsko","Německo","Polsko"],correct:0},
{ id:"x62",question:"Jaká je jednotka práce?",answers:["joule","newton","watt","ampér"],correct:0},
{ id:"x63",question:"Který orgán je největší v těle?",answers:["játra","kůže","plíce","mozek"],correct:1},
{ id:"x64",question:"Která planeta je nejblíže Slunci?",answers:["Venuše","Merkur","Mars","Země"],correct:1},
{ id:"x65",question:"Jaký plyn je nutný pro dýchání?",answers:["dusík","kyslík","vodík","helium"],correct:1},
{ id:"x66",question:"Jaká je značka stříbra?",answers:["Au","Ag","Sr","Si"],correct:1},
{ id:"x67",question:"Který kontinent má nejvíce států?",answers:["Afrika","Evropa","Asie","Amerika"],correct:0},
{ id:"x68",question:"Jaká je jednotka teploty?",answers:["kelvin","ampér","volt","newton"],correct:0},

{ id:"x69",question:"Který orgán produkuje žluč?",answers:["játra","žaludek","ledviny","plíce"],correct:0},
{ id:"x70",question:"Jaká planeta je známá jako modrá planeta?",answers:["Mars","Země","Venuše","Saturn"],correct:1},
{ id:"x71",question:"Jaký je symbol kyslíku?",answers:["O","K","Ox","Ky"],correct:0},
{ id:"x72",question:"Kolik minut má hodina?",answers:["50","60","70","100"],correct:1},
{ id:"x73",question:"Který stát má hlavní město Praha?",answers:["Slovensko","Česko","Polsko","Rakousko"],correct:1},
{ id:"x74",question:"Jaká je jednotka hmotnosti?",answers:["kg","m","s","A"],correct:0},
{ id:"x75",question:"Který orgán řídí tělo?",answers:["srdce","mozek","plíce","ledviny"],correct:1},
{ id:"x76",question:"Jaký oceán je největší?",answers:["Atlantský","Indický","Tichý","Severní ledový"],correct:2},
{ id:"x77",question:"Jaký je symbol uhlíku?",answers:["U","C","Co","Cu"],correct:1},
{ id:"x78",question:"Kolik má rok dní?",answers:["365","360","366","364"],correct:0},

{ id:"x79",question:"Jaký stát má hlavní město Londýn?",answers:["USA","UK","Kanada","Austrálie"],correct:1},
{ id:"x80",question:"Jaký je vzorec kyseliny chlorovodíkové?",answers:["HCl","NaCl","CO₂","H₂O"],correct:0},
{ id:"x81",question:"Jaká je jednotka rychlosti?",answers:["m/s","kg","N","J"],correct:0},
{ id:"x82",question:"Který orgán pomáhá trávení?",answers:["žaludek","plíce","srdce","mozek"],correct:0},
{ id:"x83",question:"Který světadíl je nejchladnější?",answers:["Evropa","Asie","Antarktida","Afrika"],correct:2},
{ id:"x84",question:"Jaká je značka mědi?",answers:["Cu","Co","Cm","Md"],correct:0},
{ id:"x85",question:"Kolik sekund má minuta?",answers:["50","60","70","100"],correct:1},
{ id:"x86",question:"Který orgán pumpuje krev?",answers:["plíce","srdce","játra","ledviny"],correct:1},
{ id:"x87",question:"Jaká planeta má nejvíce měsíců?",answers:["Mars","Jupiter","Země","Merkur"],correct:1},
{ id:"x88",question:"Jaká je jednotka objemu?",answers:["litr","metr","sekunda","ampér"],correct:0},

{ id:"x89",question:"Jaký je symbol dusíku?",answers:["N","D","Ni","Nu"],correct:0},
{ id:"x90",question:"Kolik má den hodin?",answers:["12","24","36","48"],correct:1},
{ id:"x91",question:"Který orgán pomáhá dýchání?",answers:["plíce","srdce","mozek","játra"],correct:0},
{ id:"x92",question:"Jaký stát má hlavní město Madrid?",answers:["Itálie","Španělsko","Portugalsko","Francie"],correct:1},
{ id:"x93",question:"Jaká je jednotka tlaku?",answers:["pascal","watt","volt","joule"],correct:0},
{ id:"x94",question:"Jaký je symbol hliníku?",answers:["Al","Hl","Ha","Hn"],correct:0},
{ id:"x95",question:"Kolik je 1 litr v ml?",answers:["10","100","1000","10000"],correct:2},
{ id:"x96",question:"Který orgán je nejdůležitější pro myšlení?",answers:["plíce","mozek","srdce","ledviny"],correct:1},
{ id:"x97",question:"Jaký oceán je nejmenší?",answers:["Atlantský","Indický","Severní ledový","Tichý"],correct:2},
{ id:"x98",question:"Jaká je jednotka elektrického proudu?",answers:["ampér","volt","watt","ohm"],correct:0},

{ id:"x99",question:"Jaký je symbol vápníku?",answers:["Ca","Va","Vp","Vc"],correct:0},
{ id:"x100",question:"Kolik je 1 tuna v kg?",answers:["100","500","1000","10000"],correct:2},
{ id:"x101",question:"Který orgán je největší?",answers:["mozek","kůže","plíce","játra"],correct:1},
{ id:"x102",question:"Jaký stát má hlavní město Řím?",answers:["Itálie","Španělsko","Řecko","Francie"],correct:0},
{ id:"x103",question:"Jaká je jednotka délky?",answers:["metr","sekunda","kg","watt"],correct:0},
{ id:"x104",question:"Jaký je symbol chloru?",answers:["Cl","Ch","Cr","Co"],correct:0},
{ id:"x105",question:"Kolik minut má den?",answers:["1440","1000","1200","1600"],correct:0},
{ id:"x106",question:"Který orgán produkuje hormony?",answers:["žlázy","plíce","srdce","ledviny"],correct:0},
{ id:"x107",question:"Jaký oceán je mezi Amerikou a Evropou?",answers:["Atlantský","Indický","Tichý","Severní"],correct:0},
{ id:"x108",question:"Jaká je jednotka výkonu?",answers:["watt","volt","ampér","joule"],correct:0},

{ id:"x109",question:"Jaký je symbol fosforu?",answers:["P","F","Ph","Fo"],correct:0},
{ id:"x110",question:"Kolik je 1 hodina v sekundách?",answers:["3600","3000","4000","6000"],correct:0},
{ id:"x111",question:"Který orgán produkuje krev?",answers:["kostní dřeň","srdce","plíce","játra"],correct:0},
{ id:"x112",question:"Jaký stát má hlavní město Tokio?",answers:["Čína","Japonsko","Korea","Thajsko"],correct:1},
{ id:"x113",question:"Jaká je jednotka síly?",answers:["newton","joule","watt","ampér"],correct:0},
{ id:"x114",question:"Jaký je symbol helia?",answers:["He","Hl","Ha","H"],correct:0},
{ id:"x115",question:"Kolik má týden dní?",answers:["5","6","7","8"],correct:2},
{ id:"x116",question:"Který orgán pomáhá pohybu?",answers:["svaly","plíce","játra","mozek"],correct:0},
{ id:"x117",question:"Jaký oceán leží u Austrálie?",answers:["Indický","Atlantský","Severní","Žádný"],correct:0},
{ id:"x118",question:"Jaká je jednotka energie?",answers:["joule","volt","ampér","watt"],correct:0},

{ id:"x119",question:"Jaký je symbol síry?",answers:["S","Si","Su","Sr"],correct:0},
{ id:"x120",question:"Kolik je 1 den v hodinách?",answers:["12","24","36","48"],correct:1},
{ id:"x121",question:"Který orgán pomáhá vidění?",answers:["oko","ucho","nos","kůže"],correct:0},
{ id:"x122",question:"Jaký stát má hlavní město Moskva?",answers:["Rusko","Ukrajina","Polsko","Česko"],correct:0},
{ id:"x123",question:"Jaká je jednotka teploty?",answers:["kelvin","metr","sekunda","ampér"],correct:0},
{ id:"x124",question:"Jaký je symbol zinku?",answers:["Zn","Zi","Zk","Zu"],correct:0},
{ id:"x125",question:"Kolik má rok měsíců?",answers:["10","11","12","13"],correct:2},
{ id:"x126",question:"Který orgán pomáhá slyšení?",answers:["ucho","oko","nos","kůže"],correct:0},
{ id:"x127",question:"Jaký oceán je nejhlubší?",answers:["Tichý","Atlantský","Indický","Severní"],correct:0},
{ id:"x128",question:"Jaká je jednotka elektrického napětí?",answers:["volt","ampér","watt","joule"],correct:0},

{ id:"x129",question:"Jaký je symbol mědi?",answers:["Cu","Co","Cm","Md"],correct:0},
{ id:"x130",question:"Kolik má člověk prstů na ruce?",answers:["4","5","6","7"],correct:1},
{ id:"x131",question:"Který orgán pomáhá čichu?",answers:["nos","ucho","oko","kůže"],correct:0},
{ id:"x132",question:"Jaký stát má hlavní město Ottawa?",answers:["USA","Kanada","Austrálie","UK"],correct:1},
{ id:"x133",question:"Jaká je jednotka objemu?",answers:["litr","metr","sekunda","ampér"],correct:0},
{ id:"x134",question:"Jaký je symbol hořčíku?",answers:["Mg","Hg","Ho","Hm"],correct:0},
{ id:"x135",question:"Kolik je 1 minuta v sekundách?",answers:["60","100","120","30"],correct:0},
{ id:"x136",question:"Který orgán pomáhá trávení?",answers:["žaludek","plíce","srdce","mozek"],correct:0},
{ id:"x137",question:"Jaký oceán leží u Ameriky?",answers:["Atlantský","Indický","Severní","Žádný"],correct:0},
{ id:"x138",question:"Jaká je jednotka odporu?",answers:["ohm","volt","watt","ampér"],correct:0},

{ id:"x139",question:"Jaký je symbol křemíku?",answers:["Si","Kr","Ke","Km"],correct:0},
{ id:"x140",question:"Kolik má den minut?",answers:["1440","1000","1200","1500"],correct:0},
{ id:"x141",question:"Který orgán pomáhá koordinaci?",answers:["mozek","plíce","srdce","játra"],correct:0},
{ id:"x142",question:"Jaký stát má hlavní město Peking?",answers:["Čína","Japonsko","Korea","Vietnam"],correct:0},
{ id:"x143",question:"Jaká je jednotka práce?",answers:["joule","volt","watt","ampér"],correct:0},
{ id:"x144",question:"Jaký je symbol argonu?",answers:["Ar","Ag","An","Ao"],correct:0},
{ id:"x145",question:"Kolik má rok týdnů?",answers:["50","52","54","48"],correct:1},
{ id:"x146",question:"Který orgán pomáhá ochraně těla?",answers:["kůže","plíce","srdce","mozek"],correct:0},
{ id:"x147",question:"Jaký oceán je u Afriky?",answers:["Atlantský","Indický","oba","žádný"],correct:2},
{ id:"x148",question:"Jaká je jednotka proudu?",answers:["ampér","volt","watt","joule"],correct:0},

{ id:"x149",question:"Jaký je symbol neonu?",answers:["Ne","No","Na","Ni"],correct:0},
{ id:"x150",question:"Kolik má hodina sekund?",answers:["3600","3000","4000","2000"],correct:0},
{ id:"x151",question:"Který orgán pomáhá mluvení?",answers:["jazyk","plíce","srdce","játra"],correct:0},
{ id:"x152",question:"Jaký stát má hlavní město Canberra?",answers:["USA","Austrálie","Kanada","UK"],correct:1},
{ id:"x153",question:"Jaká je jednotka délky?",answers:["metr","sekunda","kg","watt"],correct:0},
{ id:"x154",question:"Jaký je symbol olova?",answers:["Pb","Ol","Lo","Po"],correct:0},
{ id:"x155",question:"Kolik má rok dnů (běžný)?",answers:["365","366","360","364"],correct:0},
{ id:"x156",question:"Který orgán pomáhá rovnováze?",answers:["ucho","oko","nos","kůže"],correct:0},
{ id:"x157",question:"Jaký oceán je nejteplejší?",answers:["Indický","Atlantský","Tichý","Severní"],correct:0},
{ id:"x158",question:"Jaká je jednotka energie?",answers:["joule","volt","ampér","watt"],correct:0}
  ]
};

const preloadQuestions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      Object.values(questions).forEach(arr => {
        arr.length;
      });
      resolve();
    }, 500);
  });
};

const missionTemplates = [
  {
    id: "answer8",
    title: "Odpověz na 8 otázek",
    reward: 25,
    target: 8,
    type: "questionsAnswered"
  },
  {
    id: "correct6",
    title: "Dej 6 správných odpovědí",
    reward: 30,
    target: 6,
    type: "correctAnswers"
  },
  {
    id: "complete2quiz",
    title: "Dokonči 2 quizy",
    reward: 35,
    target: 2,
    type: "quizzesCompleted"
  },
  {
    id: "gain70xp",
    title: "Získej 70 XP",
    reward: 35,
    target: 70,
    type: "xpEarned"
  }
];

const defaultData = () => ({
  username: "Player",
  xp: 0,
  level: 1,
  streak: 1,
  lastActiveDate: getToday(),
  completedTasks: 0,
  quizzesCompleted: 0,
  totalCorrect: 0,
  totalWrong: 0,
  badges: [],
  usedQuestionIds: {
  math: [],
  english: [],
  czech: [],
  custom: []
},
  subjects: {
    math: { correct: 0, wrong: 0 },
    english: { correct: 0, wrong: 0 },
    czech: { correct: 0, wrong: 0 },
    custom: { correct: 0, wrong: 0 }
  },
  daily: {
    date: getToday(),
    questionsAnswered: 0,
    correctAnswers: 0,
    quizzesCompleted: 0,
    xpEarned: 0,
    claimedMissions: []
  }
});

let appData = loadData();
let currentSection = "dashboard";
let currentSubject = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let currentAnswered = false;
let currentQuizCorrect = 0;
let currentQuizWrong = 0;
let currentQuizXP = 0;

const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");

const pageTitle = document.getElementById("pageTitle");
const topGreeting = document.getElementById("topGreeting");
const quickStartBtn = document.getElementById("quickStartBtn");
const resetDataBtn = document.getElementById("resetDataBtn");
const saveNameBtn = document.getElementById("saveNameBtn");
const usernameInput = document.getElementById("usernameInput");
const resetMissionsBtn = document.getElementById("resetMissionsBtn");

const quizQuestion = document.getElementById("quizQuestion");
const answersWrap = document.getElementById("answers");
const quizFeedback = document.getElementById("quizFeedback");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const stopQuizBtn = document.getElementById("stopQuizBtn");
const quizSubjectLabel = document.getElementById("quizSubjectLabel");
const quizQuestionCounter = document.getElementById("quizQuestionCounter");
const quizSubtitle = document.getElementById("quizSubtitle");

document.addEventListener("DOMContentLoaded", init);

function init() {
  updateDailyStreak();
  ensureDailyReset();
  bindEvents();
  renderAll();

  preloadQuestions().then(() => {
    window.appReady = true;
  });
}

function bindEvents() {
  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => showSection(btn.dataset.section));
  });

  document.querySelectorAll(".subject-start").forEach((btn) => {
    btn.addEventListener("click", () => startQuiz(btn.dataset.subject));
  });

  quickStartBtn.addEventListener("click", () => startQuiz("math"));

  nextQuestionBtn.addEventListener("click", nextQuestion);

  stopQuizBtn.addEventListener("click", () => {
    stopQuiz();
    showSection("dashboard");
  });

  saveNameBtn.addEventListener("click", saveUsername);

  resetDataBtn.addEventListener("click", resetAllData);

  resetMissionsBtn.addEventListener("click", () => {
    appData.daily = createFreshDaily();
    saveData();
    renderAll();
  });
}

function showSection(sectionId) {
  currentSection = sectionId;

  navButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.section === sectionId);
  });

  sections.forEach((section) => {
    section.classList.toggle("active", section.id === sectionId);
  });

  const titleMap = {
    dashboard: "Dashboard",
    subjects: "Předměty",
    quiz: "Quiz",
    missions: "Mise",
    progress: "Progress",
    settings: "Nastavení"
  };

  pageTitle.textContent = titleMap[sectionId] || "StudyBoss";
}

function saveUsername() {
  const newName = usernameInput.value.trim();
  if (!newName) return;

  appData.username = newName;
  saveData();
  renderAll();
}

function startQuiz(subject) {
  currentSubject = subject;
  currentQuestions = getNextQuestionsForSubject(subject, 8);
  currentQuestionIndex = 0;
  currentAnswered = false;
  currentQuizCorrect = 0;
  currentQuizWrong = 0;
  currentQuizXP = 0;

  quizSubtitle.textContent = `Aktuální předmět: ${getSubjectName(subject)}`;
  showSection("quiz");
  renderQuizQuestion();
  renderAll();
}

function getNextQuestionsForSubject(subject, count = 8) {
  const pool = shuffleArray([...questions[subject]]);
  const actualCount = Math.min(count, pool.length);
  const usedIds = new Set(appData.usedQuestionIds?.[subject] || []);

  let freshQuestions = pool.filter((q) => !usedIds.has(q.id));
  let selected = freshQuestions.slice(0, actualCount);

  if (selected.length < actualCount) {
    const selectedIds = new Set(selected.map((q) => q.id));
    const refill = pool
      .filter((q) => !selectedIds.has(q.id))
      .slice(0, actualCount - selected.length);

    selected = [...selected, ...refill];

    appData.usedQuestionIds[subject] = refill.map((q) => q.id);
  } else {
    appData.usedQuestionIds[subject] = [
      ...new Set([
        ...(appData.usedQuestionIds[subject] || []),
        ...selected.map((q) => q.id)
      ])
    ];
  }

  saveData();
  return selected;
}

function renderQuizQuestion() {
  if (!currentSubject || currentQuestions.length === 0) {
    quizQuestion.textContent = "Vyber si předmět a začni.";
    answersWrap.innerHTML = "";
    quizFeedback.textContent = "";
    quizFeedback.className = "quiz-feedback";
    quizSubjectLabel.textContent = "Předmět: —";
    quizQuestionCounter.textContent = "Otázka: 0 / 0";
    nextQuestionBtn.disabled = true;
    return;
  }

  const q = currentQuestions[currentQuestionIndex];
  currentAnswered = false;
  nextQuestionBtn.disabled = true;
  quizFeedback.textContent = "";
  quizFeedback.className = "quiz-feedback";

  quizSubjectLabel.textContent = `Předmět: ${getSubjectName(currentSubject)}`;
  quizQuestionCounter.textContent = `Otázka: ${currentQuestionIndex + 1} / ${currentQuestions.length}`;
  quizQuestion.textContent = q.question;
  answersWrap.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answer;
    btn.addEventListener("click", () => selectAnswer(index));
    answersWrap.appendChild(btn);
  });

  updateCurrentQuizBox();
}

function selectAnswer(selectedIndex) {
  if (currentAnswered) return;

  const q = currentQuestions[currentQuestionIndex];
  const buttons = [...answersWrap.querySelectorAll(".answer-btn")];
  currentAnswered = true;

  appData.daily.questionsAnswered += 1;

  buttons.forEach((btn, index) => {
    btn.disabled = true;

    if (index === q.correct) {
      btn.classList.add("correct");
    }

    if (index === selectedIndex && index !== q.correct) {
      btn.classList.add("wrong");
    }
  });

  if (selectedIndex === q.correct) {
    quizFeedback.textContent = "Správně! +10 XP";
    quizFeedback.className = "quiz-feedback good";

    appData.xp += 10;
    appData.totalCorrect += 1;
    appData.subjects[currentSubject].correct += 1;
    appData.daily.correctAnswers += 1;
    appData.daily.xpEarned += 10;
    currentQuizCorrect += 1;
    currentQuizXP += 10;

    checkBadges();
  } else {
    quizFeedback.textContent = `Špatně. Správná odpověď byla: ${q.answers[q.correct]}`;
    quizFeedback.className = "quiz-feedback bad";

    appData.totalWrong += 1;
    appData.subjects[currentSubject].wrong += 1;
    currentQuizWrong += 1;
  }

  updateLevel();
  checkMissions();
  saveData();
  renderAll();
  nextQuestionBtn.disabled = false;
}

function nextQuestion() {
  if (!currentSubject) return;

  if (currentQuestionIndex < currentQuestions.length - 1) {
    currentQuestionIndex += 1;
    renderQuizQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  appData.quizzesCompleted += 1;
  appData.daily.quizzesCompleted += 1;
  appData.xp += 20;
  appData.daily.xpEarned += 20;
  currentQuizXP += 20;

  quizQuestion.textContent = `Quiz dokončen. Správně: ${currentQuizCorrect}, špatně: ${currentQuizWrong}. Bonus +20 XP`;
  answersWrap.innerHTML = "";
  quizFeedback.textContent = "Hotovo. Můžeš začít nový quiz.";
  quizFeedback.className = "quiz-feedback good";
  quizQuestionCounter.textContent = `Otázka: ${currentQuestions.length} / ${currentQuestions.length}`;
  nextQuestionBtn.disabled = true;

  updateLevel();
  checkMissions();
  checkBadges();
  saveData();
  renderAll();
}

function stopQuiz() {
  currentSubject = null;
  currentQuestions = [];
  currentQuestionIndex = 0;
  currentAnswered = false;
  currentQuizCorrect = 0;
  currentQuizWrong = 0;
  currentQuizXP = 0;
  renderQuizQuestion();
}

function updateCurrentQuizBox() {
  document.getElementById("currentQuizCorrect").textContent = currentQuizCorrect;
  document.getElementById("currentQuizWrong").textContent = currentQuizWrong;
  document.getElementById("currentQuizXP").textContent = currentQuizXP;
}

function updateLevel() {
  appData.level = Math.floor(appData.xp / 100) + 1;
}

function checkMissions() {
  missionTemplates.forEach((mission) => {
    const currentValue = appData.daily[mission.type];
    const alreadyClaimed = appData.daily.claimedMissions.includes(mission.id);

    if (currentValue >= mission.target && !alreadyClaimed) {
      appData.xp += mission.reward;
      appData.completedTasks += 1;
      appData.daily.claimedMissions.push(mission.id);
      updateLevel();
    }
  });
}

function checkBadges() {
  unlockBadge("first_win", appData.totalCorrect >= 1, "🥇 First Win");
  unlockBadge("math_starter", appData.subjects.math.correct >= 5, "➗ Math Starter");
  unlockBadge("english_starter", appData.subjects.english.correct >= 5, "🇬🇧 English Starter");
  unlockBadge("czech_starter", appData.subjects.czech.correct >= 5, "🇨🇿 Czech Starter");
  unlockBadge("quiz_runner", appData.quizzesCompleted >= 3, "⚡ Quiz Runner");
  unlockBadge("mission_hunter", appData.completedTasks >= 3, "🎯 Mission Hunter");
}

function unlockBadge(id, condition, label) {
  if (condition && !appData.badges.some((badge) => badge.id === id)) {
    appData.badges.push({ id, label });
  }
}

function renderAll() {
  renderHeader();
  renderSidebar();
  renderDashboard();
  renderSubjects();
  renderMissions();
  renderProgress();
  renderSettings();
  updateCurrentQuizBox();
}

function renderHeader() {
  topGreeting.textContent = `Vítej zpět, ${appData.username}. Dnes můžeš zase posunout svůj progress.`;
}

function renderSidebar() {
  document.getElementById("sidebarLevel").textContent = appData.level;
  document.getElementById("sidebarXP").textContent = appData.xp;
}

function renderDashboard() {
  document.getElementById("welcomeName").textContent = appData.username;
  document.getElementById("dashboardLevel").textContent = appData.level;
  document.getElementById("dashboardStreak").textContent = appData.streak;
  document.getElementById("dashboardCorrect").textContent = appData.totalCorrect;
  document.getElementById("dashboardWrong").textContent = appData.totalWrong;
  document.getElementById("dashboardQuizzes").textContent = appData.quizzesCompleted;
  document.getElementById("dashboardCompletedMissions").textContent = appData.completedTasks;
  document.getElementById("dashboardBadges").textContent = appData.badges.length;

  const levelBaseXP = (appData.level - 1) * 100;
  const currentLevelXP = appData.xp - levelBaseXP;
  const xpPercent = Math.min((currentLevelXP / 100) * 100, 100);

  document.getElementById("xpProgressText").textContent = `${currentLevelXP} / 100 XP`;
  document.getElementById("xpBar").style.width = `${xpPercent}%`;

  renderMissionList("dashboardMissions");
  document.getElementById("bestSubject").textContent = getBestSubject();
  document.getElementById("dashboardTip").textContent = getDashboardTip();
}

function renderSubjects() {
  document.getElementById("mathCorrect").textContent = appData.subjects.math.correct;
  document.getElementById("mathWrong").textContent = appData.subjects.math.wrong;

  document.getElementById("englishCorrect").textContent = appData.subjects.english.correct;
  document.getElementById("englishWrong").textContent = appData.subjects.english.wrong;

  document.getElementById("czechCorrect").textContent = appData.subjects.czech.correct;
  document.getElementById("czechWrong").textContent = appData.subjects.czech.wrong;

  document.getElementById("customCorrect").textContent = appData.subjects.custom.correct;
  document.getElementById("customWrong").textContent = appData.subjects.custom.wrong;
}

function renderMissions() {
  renderMissionList("missionsList");
}

function renderMissionList(targetId) {
  const wrap = document.getElementById(targetId);
  wrap.innerHTML = "";

  missionTemplates.forEach((mission) => {
    const current = Math.min(appData.daily[mission.type], mission.target);
    const completed = appData.daily.claimedMissions.includes(mission.id);

    const item = document.createElement("div");
    item.className = `mission-item ${completed ? "completed" : ""}`;

    item.innerHTML = `
      <div class="mission-top">
        <div class="mission-title">${mission.title}</div>
        <div class="mission-reward">+${mission.reward} XP</div>
      </div>
      <div class="mission-progress">
        Progress: ${current} / ${mission.target} ${completed ? "• splněno" : ""}
      </div>
      <div class="progress-bar" style="margin-top:10px;">
        <div class="progress-fill" style="width:${(current / mission.target) * 100}%"></div>
      </div>
    `;

    wrap.appendChild(item);
  });
}

function renderProgress() {
  document.getElementById("progressXP").textContent = appData.xp;
  document.getElementById("progressLevel").textContent = appData.level;
  document.getElementById("progressStreak").textContent = appData.streak;
  document.getElementById("progressQuizzes").textContent = appData.quizzesCompleted;
  document.getElementById("progressCorrect").textContent = appData.totalCorrect;
  document.getElementById("progressWrong").textContent = appData.totalWrong;

  const badgesList = document.getElementById("badgesList");
  badgesList.innerHTML = "";

  if (appData.badges.length === 0) {
    badgesList.innerHTML = `<div class="badge-pill empty">Zatím žádné odznaky</div>`;
    return;
  }

  appData.badges.forEach((badge) => {
    const el = document.createElement("div");
    el.className = "badge-pill";
    el.textContent = badge.label;
    badgesList.appendChild(el);
  });
}

function renderSettings() {
  usernameInput.value = appData.username;
}

function getBestSubject() {
  const entries = Object.entries(appData.subjects).map(([key, value]) => {
    const score = value.correct - value.wrong;
    return { key, score, correct: value.correct };
  });

  const best = entries.sort((a, b) => b.score - a.score)[0];

  if (!best || best.correct === 0) return "Zatím žádný";
  return getSubjectName(best.key);
}

function getDashboardTip() {
  if (appData.totalCorrect === 0) {
    return "Začni prvním quizem a odemkni svůj první odznak.";
  }

  if (appData.daily.claimedMissions.length < missionTemplates.length) {
    return "Dnes ještě nemáš hotové všechny mise. Zkus dokončit další quiz.";
  }

  if (appData.badges.length < 3) {
    return "Jde ti to. Teď zkus sbírat další odznaky.";
  }

  return "Progress roste dobře. Můžeš přidat další otázky nebo nové režimy.";
}

function getSubjectName(subject) {
  const names = {
    math: "Matematika",
    english: "Angličtina",
    czech: "Čeština",
    custom: "Vlastní"
  };
  return names[subject] || subject;
}

function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return defaultData();
  }

  try {
    return { ...defaultData(), ...JSON.parse(saved) };
  } catch (error) {
    return defaultData();
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

function resetAllData() {
  const confirmed = confirm("Opravdu chceš resetovat celý progress?");
  if (!confirmed) return;

  appData = defaultData();
  stopQuiz();
  saveData();
  renderAll();
  showSection("dashboard");
}

function ensureDailyReset() {
  const today = getToday();

  if (appData.daily.date !== today) {
    appData.daily = createFreshDaily();
    saveData();
  }
}

function updateDailyStreak() {
  const today = getToday();
  const last = appData.lastActiveDate;

  if (!last) {
    appData.lastActiveDate = today;
    appData.streak = 1;
    saveData();
    return;
  }

  if (last === today) return;

  const diff = daysBetween(last, today);

  if (diff === 1) {
    appData.streak += 1;
  } else {
    appData.streak = 1;
  }

  appData.lastActiveDate = today;
  saveData();
}

function createFreshDaily() {
  return {
    date: getToday(),
    questionsAnswered: 0,
    correctAnswers: 0,
    quizzesCompleted: 0,
    xpEarned: 0,
    claimedMissions: []
  };
}

function getToday() {
  return new Date().toISOString().split("T")[0];
}

function daysBetween(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffMs = d2 - d1;
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
