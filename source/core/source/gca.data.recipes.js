/*
 * Gladiatus' Recipes 
 * Glaiatus Crazy Addon
 * 
 */

(function() {

// The first item in the array is the level
// The rest are the material's id

// Prefix Data
let prefix_recipes = {
'1':[35,35],
'2':[30,9,15],
'3':[30,13,17,18],
'4':[25,13,15,17,18],
'5':[20,9,15],
'6':[30,9,15,17],
'7':[45,7,35],
'8':[33,15,17],
'9':[31,15,17,18],
'10':[27,9,13,17],
'11':[28,15,17,20],
'12':[-1],
'13':[32,9,20],
'14':[33,9,13,17,18],
'15':[29,9,15,17],
'16':[26,9,15],
'17':[29,13,15,17],
'18':[24,15,20],
'19':[31,13],
'20':[28,17,18,20],
'21':[32,15,17,20],
'22':[22,9,13,15],
'23':[23,9,18,20],
'24':[27,13,15,17,18],
'25':[31,9,15,17],
'26':[28,9,15,17,20],
'27':[28,13,15,17,18],
'28':[32,9],
'29':[30,13,15,17,18],
'30':[32,9,15],
'31':[21,9,13,15],
'32':[16,15,17],
'33':[22,9,15,20],
'34':[25,13,17,18],
'35':[16,9],
'36':[16,13,17,18],
'37':[26,13,15,18],
'38':[25,9,13,15],
'39':[23,9,15,17,18],
'40':[32,9,13,15,18,20],
'41':[28,9,17,20],
'42':[31,9,15],
'43':[30,9,15],
'44':[31,13,15,17,18],
'45':[30,9,15,17,20],
'46':[36,29,35],
'47':[32,9,13,17,18,20],
'48':[27,9,13,20],
'49':[33,9,13,18],
'50':[40,7,21,35,40],
'51':[42,7,21,35,40],
'52':[50,7,21,35,40],
'53':[60,26,36,38,49],
'54':[70,26,36,38,42,49],
'55':[80,26,38,42,49],
'60':[17,15,20],
'61':[18,9,15,18],
'62':[19,9,15,18,20],
'63':[21,15,18,20],
'64':[22,15,20],
'65':[23,9,13,15,20],
'66':[24,9,15,18,20],
'67':[26,15,20],
'68':[27,9,13,15,18,20],
'69':[28,15,18,20],
'70':[30,9,13,15,20],
'71':[31,9,13,15,20],
'72':[32,9,17,18,20],
'73':[33,15,20],
'74':[35,7,29,40],
'75':[36,7,21,29,35],
'76':[37,35,40],
'77':[39,7,21,29,35,40],
'78':[40,7],
'79':[41,21,35,40],
'80':[42,7,29,35,40],
'81':[44,7,21,29,35,40],
'82':[45,21,40],
'83':[46,7,29,35,40],
'84':[48,7,21,29,35],
'85':[49,35,40],
'86':[50,7,29,35,40],
'87':[-1],
'88':[-1],
'89':[54,7,29,35],
'90':[55,36,49],
'91':[56,11,26],
'92':[58,11,42,49],
'93':[59,11,26,36,38],
'94':[60,11,26,49],
'95':[62,11,26,42,49],
'96':[63,11,26,36,38,49],
'97':[-1],
'98':[65,11,26,38,49],
'99':[67,36],
'100':[-1],
'101':[69,11,38,49],
'102':[71,26,49],
'103':[72,26,38,42,49],
'104':[73,11,42,49],
'105':[74,11,36],
'106':[76,11,26],
'107':[77,11,42,49],
'108':[78,11,26,36,38],
'109':[80,11,26,38,49],
'112':[87,10,22,27,47],
'114':[81,11,36,38,49],
'115':[81,26],
'116':[82,11,36,38,42,49],
'118':[90,10,22,45],
'120':[83,38,42,49],
'122':[84,11,26,36,38,42,49],
'124':[85,27,45,50],
'130':[86,10,22,27,45],
'131':[89,10,22,27,47,50],
'132':[88,27],
'134':[88,27,45,47,50],
'135':[85,22,27],
'138':[86,10,22,27,45,50],
'139':[90,10,27],
'140':[91,27],
'141':[92,22,27,47,50],
'142':[92,10,22,45,50],
'143':[93,10,22,45,47,50],
'144':[93,10,22,27,45,47],
'145':[94,10,22,27,47,50],
'146':[95,22,27,45],
'147':[95,27],
'148':[96,22,27,45,47],
'149':[97,10,22,27,45,47,50],
'150':[98,10,22,27,45,50],
'151':[99,10,22,27,47,50],
'152':[99,10,22,45,47,50],
'153':[100,10,22,45],
'154':[100,10,27],
'155':[101,54,58,62,63],
'156':[-1,54,58,61,63],
'157':[103,54,58,61,62,63,64],
'158':[-1,54,61,62,63,64],
'159':[-1,54,58,62,63],
'160':[105,10,22,45,50],
'161':[105,54,58,61,62,63],
'162':[106,54,58,61,62,63],
'163':[107,54,58,61,63,64],
'164':[107,54,58,61,62,63,64],
'165':[-1,58,61,63,64],
'166':[108,54,58,61,62,63,64],
'167':[-1,54,58,61,62,63],
'168':[109,58,62,63],
'169':[110,54,58,63,64],
'170':[110,22,27,47,50],
'171':[-1,54,58,61,62,63],
'172':[111,58,61,62,63,64],
'173':[-1,54,58,61,63,64],
'174':[113,54,58,61,62,63],
'175':[114,58,61,62,63],
'176':[115,58,62,64],
'177':[116,54,58,61,62,64],
'178':[117,58,63,64],
'179':[118,54,61,63],
'180':[119,58,61,62,63,64],
'181':[-1,54],
'182':[120,58,62,63,64],
'183':[120,54,63],
'184':[120,54,58,62,63],
'185':[130,58,61,62,63,64],
'186':[140,58,61,62,63],
'187':[-1,58,61,62,63],
};

// Suffix Data
let suffix_recipes = {
'0':[-1],
'1':[25,37],
'2':[10,25,31],
'3':[16,6,31],
'4':[15,6],
'5':[10,16,31],
'6':[10,5,16],
'7':[-1],
'8':[20,23],
'9':[20,37,39],
'10':[-1],
'11':[10,6],
'12':[20,37],
'13':[15,5,6,25],
'14':[-1],
'15':[20,23,39],
'16':[10,5],
'17':[12,31],
'18':[10,5,6],
'19':[-1],
'20':[15,6,16,31],
'21':[10,25,31],
'22':[-1],
'23':[25,23],
'24':[22,24],
'25':[-1],
'26':[15,5,16],
'27':[-1],
'28':[-1],
'29':[15,16,25,31],
'30':[17,5,25],
'31':[19,6],
'32':[20,23,37,39],
'33':[20,37],
'34':[20,34,37,48],
'35':[15,5,25],
'36':[25,23,39],
'37':[18,16,31],
'38':[15,5,6,16,25,31],
'39':[14,5,25],
'40':[13,25,31],
'41':[-1],
'42':[19,16,31],
'43':[12,25],
'44':[20,23,24],
'45':[-1],
'46':[22,23,24],
'47':[18,6,25,31],
'48':[11,16,25],
'49':[13,25,31],
'50':[14,6,16,31],
'51':[12,5,25],
'52':[14,6,25],
'53':[12,16,25,31],
'54':[-1],
'55':[25,24,34,48],
'56':[23,23,24,39],
'57':[-1],
'58':[20,23,37,39],
'59':[18,5,6],
'60':[-1],
'61':[15,6],
'62':[-1],
'63':[20,34,37],
'64':[-1],
'65':[20,37,39],
'66':[20,23,24],
'67':[15,5,6],
'68':[-1],
'69':[15,25],
'70':[20,23,24],
'71':[17,5,25],
'72':[16,5,6,25],
'73':[16,6,14,16],
'74':[20,23,24,34,48],
'75':[22,23,24,37],
'76':[40,28,32,46],
'77':[35,19,30,41],
'78':[20,23,24,39],
'79':[15,5,14,31],
'80':[20,23,34,39,48],
'81':[15,5,6,14,25],
'82':[20,23,24,39],
'83':[21,37],
'84':[15,5,6,16,25],
'85':[25,34,37,39],
'86':[15,6,14,16,25],
'87':[20,23,34,37],
'88':[15,14,16,31],
'89':[20,34],
'90':[22,37,39],
'91':[20,23],
'92':[20,39,48],
'93':[15,6,25],
'94':[21,23,39],
'95':[-1],
'96':[21,23,34,37,48],
'97':[18,5,14,25],
'98':[33,33],
'99':[25,23,24,37,39],
'100':[-1], // no resources?
'101':[-1], // no resources?
'102':[3], // no resources?
'103':[4], // no resources?
'104':[5], // no resources?
'105':[6], // no resources?
'106':[7], // no resources?
'107':[8], // no resources?
'108':[9], // no resources?
'109':[-1], // no resources?
'110':[10,6],
'111':[10,25],
'112':[-1],
'113':[-1],
'114':[11,25],
'115':[11,16,31],
'116':[12,5,14,31],
'117':[12,25],
'118':[12,6],
'119':[13,14,25],
'120':[13,25],
'121':[13,5,16],
'122':[13,14],
'123':[14,25],
'124':[14,5,6],
'125':[-1],
'126':[15,25],
'127':[15,5,6,16,31],
'128':[15,6,14],
'129':[16,25],
'130':[16,5,6,16],
'131':[16,14],
'132':[16,25],
'133':[17,5,16,25],
'134':[17,6],
'135':[17,6,25],
'136':[18,5,6,16,25],
'137':[18,5,6],
'138':[18,25],
'139':[19,6,31],
'140':[-1],
'141':[19,25],
'142':[19,5,6],
'143':[20,39],
'144':[20,23],
'145':[20,37,48],
'146':[21,23,24,48],
'147':[21,23,37],
'148':[21,23,24,34,37],
'149':[22,23,24,37,48],
'150':[22,23,48],
'151':[22,23,37,48],
'152':[22,37,39],
'153':[23,23],
'154':[23,23,24,37],
'155':[23,39],
'156':[24,23],
'157':[24,23,24,34,37],
'158':[24,39],
'159':[25,23,24],
'160':[25,23,37,48],
'161':[25,39],
'162':[25,23],
'163':[26,24,48],
'164':[26,23,37],
'165':[26,23],
'166':[-1],
'167':[27,39],
'168':[27,23],
'169':[28,24,37,48],
'170':[28,23,37],
'171':[28,23],
'172':[28,24,37],
'173':[29,37,39],
'174':[29,23],
'175':[29,23,37,48],
'176':[30,33,41],
'177':[30,33,41],
'178':[30,19,33,52],
'179':[31,33,41],
'180':[31,41],
'181':[31,12,33],
'182':[31,19,33,52],
'183':[32,33,41],
'184':[32],
'185':[32,41],
'186':[33,41],
'187':[33,12,19,33],
'188':[33,41],
'189':[34,41],
'190':[34,12,33,41],
'191':[34,30],
'192':[34,33,41],
'193':[35,19,33,52],
'194':[-1],
'195':[35,41],
'196':[36,12,19,33,41],
'197':[36,30,33],
'198':[36,41],
'199':[37,33,41,52],
'200':[37,19,30,33,52],
'201':[37,19,41],
'202':[-1],
'203':[38,19,30,33,41,52],
'204':[-1],
'205':[38,19,33,52],
'206':[39,19,33,41,52],
'207':[39,41],
'208':[39,12,19,33,41],
'209':[-1],
'210':[43,28,43,46,51],
'215':[48,28,32,43,44,46],
'218':[43,32,43,46,51],
'220':[47,28,32,43,44,46,51],
'221':[44,32,44,46],
'222':[48,32,43],
'223':[45,28,32,44,46],
'224':[50,32],
'229':[49,28,32,44,46],
'230':[46,32,46,51],
'232':[40,46,51],
'234':[41,43,44,46,51],
'236':[41,32,43],
'237':[50,43,44,46,51],
'239':[42,32,43,44,46,51],
'240':[51,28,32,43,44],
'241':[51,53,57],
'242':[-1,53,55,57,59],
'243':[52,53,55,56,57,60],
'244':[-1,53,57,60],
'245':[-1,55,57,59],
'246':[-1,57,59,60],
'247':[-1,53,57,59],
'248':[54,53,55,57,59,60],
'249':[-1,53],
'250':[-1,57,60],
'251':[-1,56,59],
'252':[-1,53,57],
'253':[55,28,32],
'254':[-1,53,57,59,60],
'255':[55,53,55,57],
'256':[-1,53,56,57],
'257':[-1,57,59],
'258':[55,53,56,57],
'259':[-1,53,57,59],
'260':[56,53,57],
'261':[56,57],
'262':[-1,53,57],
'263':[-1,53],
'264':[56,53,55],
'265':[-1,56,60],
'266':[-1,53,56,57,59],
'267':[57,55,59,60],
'268':[-1,57,59,60],
'269':[-1,53,57],
'270':[-1,53,56,57],
'271':[58,53,57,59],
'272':[58,55,57,59],
'273':[-1,53,60],
'274':[58,53,57,59],
'275':[-1,56],
'276':[-1,56,59,60],
'277':[-1,53,57],
'278':[-1,53,56,57,59],
'279':[58,53,55,57],
'280':[58,53,57,59],
'281':[-1,53,57],
'282':[-1,53,57],
'283':[59,53,55,56,57],
'284':[59,53,60],
'285':[60,32,43,44],
'286':[60,55,59],
'287':[-1,53,59,60],
'288':[60,55,57,60],
'289':[60,53,56,59],
'290':[65,53],
'291':[70,53,56,59],
'292':[75,53,55,59,60],
'293':[80,53,59],
};

// Base Data
let base_recipes = {
// Όπλα
'1-1' : [1, 1], // Ρόπαλο
'1-2' : [1, 3, 4], // Κοντό σπαθί
'1-3' : [1, 3, 4], // Μικρό στιλέτο
'1-4' : [2, 1, 4], // Δρεπάνι
'1-5' : [3, 3, 4], // Φαρδύ Ξίφος
'1-6' : [3, 3, 4], // Χατζάρα
'1-7' : [4, 2, 3, 4], // Τρίαινα
'1-8' : [4, 2, 3, 4], // Μεγάλο σπαθί
'1-9' : [4, 1, 3, 4], // Τσεκούρι
'1-10' : [5, 1, 2, 3, 4], // Λόγχη τρίαινας
'1-11' : [6, 1, 3, 4], // Μεγάλο Τσεκούρι
'1-12' : [6, 1, 3, 4], // Σφυρί
'1-13' : [2, 3, 4], // Κοφτερό Στιλέτο
'1-14' : [7, 1, 2, 3, 4], // Άγγελος Θανάτου
'1-15' : [8, 2, 4], // Schiavone
'1-16' : [9, 2, 3, 4], // Σπαθί
'1-17' : [8, 2, 4], // Khopesh
'1-18' : [9, 1, 3, 4], // Ακόντιο
'1-19' : [5, 1, 4], // Σαξ
'1-20' : [7, 1, 4], // Ράβδος πολέμου

// Ασπίδες
'2-1' : [1, 1], // Σανίδες
'2-2' : [2, 1, 4], // Ξύλινη ασπίδα
'2-3' : [3, 1, 4], // Σιδερένια ασπίδα
'2-4' : [4, 3], // Δίχτυ
'2-5' : [5, 2, 4], // Ασπίδα του δράκου
'2-6' : [6, 2, 4, 48], // Ασημένια Ασπίδα
'2-7' : [7, 2, 3, 4], // Επιβλητική ασπίδα
'2-8' : [8, 2, 3, 4], // Ασπίδα με φωτιά
'2-9' : [9, 2, 3, 4], // Πύρινη επιβλητική ασπίδα
'2-10' : [10, 4], // Ασπίδα από Τιτάνιο
'2-11' : [3, 1, 4], // Ασπίδα Βίκινγκ
'2-12' : [5, 1, 4], // Αιγυπτιακή ασπίδα

// Πανοπλίες
'3-1' : [1, 3], // Κουρέλια
'3-2' : [1, 2, 3], // Δερμάτινη πανοπλία
'3-3' : [2, 2, 3], // Διπλή δερμάτινη πανοπλία
'3-4' : [3, 2, 3, 4], // Χάλκινες επωμίδες
'3-5' : [4, 4], // Μισή θωράκιση
'3-6' : [5, 2, 4], // Χάλκινη πανοπλία
'3-7' : [6, 2, 4], // Αλυσιδωτή πανοπλία
'3-8' : [7, 2, 4], // Σιδερένια ασπίδα
'3-9' : [8, 2, 3, 4], // Πλήρης θωράκιση
'3-10' : [9, 2, 3, 4], // Σιδερένιες επωμίδες
'3-11' : [10, 3], // Πανοπλία από σκληρό δέρμα
'3-12' : [4, 3, 4], // Πανοπλία κροκόδειλου

// Κράνη
'4-1' : [1, 3], // Δερμάτινο κασκέτο
'4-2' : [1, 4], // Μεταλλικό Πηλήκιο
'4-3' : [2, 2, 4], // Myrmillo
'4-4' : [2, 2, 4], // Thracian
'4-5' : [3, 2, 4], // Κράνος μονομάχου
'4-6' : [4, 2, 4], // Κράνος από κρανίο
'4-7' : [6, 3, 4], // Κράνος Βίκινγκ
'4-8' : [7, 2, 4], // Εκατόνταρχος
'4-9' : [9, 2, 4], // Κράνος Εκατόνταρχου
'4-10' : [10, 2, 3, 4], // Μπρούτζινος Εκατόνταρχος
'4-11' : [5, 2, 3], // Χάλκινο κράνος
'4-12' : [8, 2, 4], // Κράνος με καρφιά
'4-13' : [7, 4], // Κράνος με προστατευτική διόπτρα

// Γάντια
'5-1' : [1, 3], // Δερμάτινα γάντια
'5-2' : [2, 2, 3], // Χάλκινα προστατευτικά μπράτσου
'5-3' : [3, 2, 3], // Χάλκινα γάντια
'5-4' : [4, 3], // Δερμάτινα γάντια μάχης
'5-5' : [5, 2, 3], // Δερμάτινα προστατευτικά μπράτσου
'5-6' : [6, 3, 4], // Γάντια με σιδερένια επένδυση
'5-7' : [7, 2, 3, 4], // Γάντια με καρφιά
'5-8' : [8, 3, 4], // Προστατευτικά μπράτσου από λαμαρίνα
'5-9' : [9, 3, 4], // Μεταλλικά γάντια

// Δαχτυλίδια
'6-1' : [1, 2], // Μπλε Δαχτυλίδι
'6-2' : [1, 2], // Δαχτυλίδι από μαλαχίτη
'6-3' : [1, 2], // Χρυσό Δακτυλίδι
'6-4' : [1, 2], // Ασημένιο Δακτυλίδι
'6-5' : [1, 2], // Δακτυλίδι του Δράκου
'6-6' : [1, 2], // Δαχτυλίδι με ρουμπίνι
'6-7' : [1, 2], // Σκαραβαίος
'6-8' : [1, 2], // Τρίσκελο

// Παπούτσια
'8-1' : [1, 1, 3], // Σανδάλια
'8-2' : [2, 3], // Δερμάτινα σανδάλια
'8-3' : [3, 3], // Δερμάτινες μπότες
'8-4' : [4, 2, 3], // Δερμάτινες μπότες μάχης
'8-5' : [5, 2, 3], // Χάλκινοι επίδεσμοι
'8-6' : [6, 2, 3], // Μπότες κυνηγιού
'8-7' : [7, 3], // Επίδεσμοι από σκληρό δέρμα
'8-8' : [8, 1, 3, 4], // Ασημένιες μπότες μάχης
'8-9' : [9, 2, 3, 4], // Μπότες με καρφιά
'8-10' : [10, 3, 4], // Επιμεταλλωμένες μπότες

// Φυλακτό
'9-1' : [1, 2], // Χρυσό σύμβολο
'9-2' : [1, 2], // Ασημένιο κολάρο
'9-3' : [1, 2], // Κρεμαστό φυλακτό
'9-4' : [1, 2], // Ασημένιο μενταγιόν
'9-5' : [1, 2], // Κρεμαστό sugilith
'9-6' : [1, 2], // Κρεμαστό από μαλαχίτη
'9-7' : [1, 2], // Φυλακτό των αστεριών
'9-8' : [1, 2], // Κρεμαστό από ρουμπίνια
'9-9' : [1, 2], // Μάτι του Ρα
'9-10' : [1, 2], // Καρφίτσα
};

window.gca_data_recipes = {
	getRecipe : function(prefix, base, suffix) {
		var data = {prefix : false, base : false, suffix : false};
		if (prefix_recipes.hasOwnProperty(prefix)) {
			data.prefix = prefix_recipes[prefix].slice(1);
			data.prefix.level = prefix_recipes[prefix][0];
		}
		if (base_recipes.hasOwnProperty(base)) {
			data.base = base_recipes[base].slice(1);
			data.base.level = base_recipes[base][0];
		}
		if (suffix_recipes.hasOwnProperty(suffix)) {
			data.suffix = suffix_recipes[suffix].slice(1);
			data.suffix.level = suffix_recipes[suffix][0];
		}
		return data;
	},

	isCraftable : function(base) {
		return base_recipes.hasOwnProperty(base) ? true : false;
	}
};

})();
