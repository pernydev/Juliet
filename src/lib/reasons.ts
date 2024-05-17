const reasons: Record<string, CauseDetails> = {
	'16848129': {
		code: 'L101',
		name: 'Yhteysjunan odotus',
		validFrom: '2017-01-01'
	},
	'16848641': {
		code: 'S101',
		name: 'Laukaisu',
		validFrom: '2019-09-01'
	},
	'16848897': {
		code: 'T101',
		name: 'Roudasta johtuvat nopeusrajoitukset',
		validFrom: '2019-09-01'
	},
	'16849665': {
		code: 'M101',
		name: 'Matkustajaruuhka',
		validFrom: '2019-09-01'
	},
	'16913665': {
		code: 'L201',
		name: 'Junakohtaus',
		validFrom: '2017-01-01'
	},
	'16913921': {
		code: 'P101',
		name: 'JKV / ERTMS-vika',
		validFrom: '2019-09-01'
	},
	'16979201': {
		code: 'L301',
		name: 'Tuloraide varattu',
		validFrom: '2017-01-01'
	},
	'16979713': {
		code: 'S201',
		name: 'Sähköratarakenne',
		validFrom: '2019-09-01'
	},
	'17044993': {
		code: 'P201',
		name: 'Lähtötietojen puuttuminen',
		validFrom: '2019-09-01'
	},
	'17046017': {
		code: 'O401',
		name: 'Suistuminen ratapihalla',
		validFrom: '2017-01-01'
	},
	'17046529': {
		code: 'I301',
		name: 'Ilkivalta',
		validFrom: '2019-09-01'
	},
	'17110529': {
		code: 'P301',
		name: 'Kuumakäynti-ilmaisin vika / aiheeton hälytys',
		validFrom: '2019-09-01'
	},
	'17176577': {
		code: 'T301',
		name: 'Kiskoviat',
		validFrom: '2019-09-01'
	},
	'17241345': {
		code: 'L601',
		name: 'Odotetaan koko junaa sen edelliseltä matkalta',
		validFrom: '2019-09-01'
	},
	'17241601': {
		code: 'P401',
		name: 'RAILI-palvelu',
		validFrom: '2019-09-01'
	},
	'17437953': {
		code: 'L701',
		name: 'Reititysvirhe normaalissa liikennetilanteessa',
		validFrom: '2021-01-01'
	},
	'18088200': {
		code: 'E1',
		name: 'Etuajassa lähtö',
		validFrom: '2017-01-01'
	},
	'18153736': {
		code: 'L1',
		name: 'Yhteysliikenteen odotus (jatkoyhteydet)',
		validFrom: '2017-01-01'
	},
	'18284808': {
		code: 'S1',
		name: 'Sähkönjakeluhäiriö',
		validFrom: '2019-09-01'
	},
	'18350344': {
		code: 'T1',
		name: 'Pitkäaikaiset nopeusrajoitukset',
		validFrom: '2019-09-01'
	},
	'18415880': {
		code: 'R1',
		name: 'Ratatyöt (ennakoidut työt nopeusrajoituksineen)',
		validFrom: '2019-09-01'
	},
	'18481416': {
		code: 'O1',
		name: 'Allejäänti (ihminen)',
		validFrom: '2017-01-01'
	},
	'18546952': {
		code: 'M1',
		name: 'Matkustajajunan pysähtymisajan ylitys',
		validFrom: '2019-09-01'
	},
	'18612488': {
		code: 'I1',
		name: 'Poikkeukselliset sääolosuhteet',
		validFrom: '2017-01-01'
	},
	'33625345': {
		code: 'L102',
		name: 'Muu yhteysliikenteen odotus',
		validFrom: '2017-01-01'
	},
	'33625857': {
		code: 'S102',
		name: 'Tehon rajoitus',
		validFrom: '2019-09-01'
	},
	'33626113': {
		code: 'T102',
		name: 'Muut suunnitellut nopeusrajoitukset',
		validFrom: '2019-09-01'
	},
	'33626881': {
		code: 'M102',
		name: 'Matkustajan aiheuttama häiriö',
		validFrom: '2019-09-01'
	},
	'33690881': {
		code: 'L202',
		name: 'Toisen junan edelle päästäminen',
		validFrom: '2017-01-01'
	},
	'33691137': {
		code: 'P102',
		name: 'Baliisi',
		validFrom: '2019-09-01'
	},
	'33756417': {
		code: 'L302',
		name: 'Risteävät kulkutiet',
		validFrom: '2017-01-01'
	},
	'33756929': {
		code: 'S202',
		name: 'Syöttöasema',
		validFrom: '2019-09-01'
	},
	'33822209': {
		code: 'P202',
		name: 'Tekninen vika lähtövalmiusilmoituksen tekemisessä',
		validFrom: '2019-09-01'
	},
	'33823233': {
		code: 'O402',
		name: 'Suistuminen linjalla',
		validFrom: '2017-01-01'
	},
	'33823745': {
		code: 'I302',
		name: 'Asiaton radalla liikkuminen',
		validFrom: '2019-09-01'
	},
	'33887745': {
		code: 'P302',
		name: 'Pyörävoimailmaisin vika / aiheeton hälytys',
		validFrom: '2019-09-01'
	},
	'33953793': {
		code: 'T302',
		name: 'Vika ratarakenteessa',
		validFrom: '2019-09-01'
	},
	'34018561': {
		code: 'L602',
		name: 'Odotetaan yhdistettävää runkoa',
		validFrom: '2019-09-01'
	},
	'34018817': {
		code: 'P402',
		name: 'Liikenteenohjauksen viestintävälineet',
		validFrom: '2019-09-01'
	},
	'34215169': {
		code: 'L702',
		name: 'Reititysvirhe poikkeustilanteessa',
		validFrom: '2021-01-01'
	},
	'34603272': {
		code: 'J1',
		name: 'Junan muodostamisen viivästyminen (kaikki liikenne)',
		validFrom: '2021-01-01'
	},
	'34799880': {
		code: 'A1',
		name: 'Mäkeenjäänti tai nopeuden poikkeuksellinen aleneminen mäessä',
		validFrom: '2019-09-01'
	},
	'34865416': {
		code: 'E2',
		name: 'Ajo- tai pysähtymisajan alitus',
		validFrom: '2019-09-01'
	},
	'34930952': {
		code: 'L2',
		name: 'Junakohtaus, edellä kulkeva juna tai ohitus',
		validFrom: '2017-01-01'
	},
	'34996488': {
		code: 'P1',
		name: 'Ratainfran laiteviat',
		validFrom: '2019-09-01'
	},
	'35258632': {
		code: 'O2',
		name: 'Allejäänti (eläin)',
		validFrom: '2017-01-01'
	},
	'35389704': {
		code: 'I2',
		name: 'Lehtikeli tai muu liukkaus',
		validFrom: '2017-01-01'
	},
	'50403073': {
		code: 'S103',
		name: 'Yleisen sähköverkon vika tai rajoitus',
		validFrom: '2019-09-01'
	},
	'50404097': {
		code: 'M103',
		name: 'Matkustajan loukkaantuminen tai sairaskohtaus',
		validFrom: '2019-09-01'
	},
	'50468097': {
		code: 'L203',
		name: 'Edellä kulkevan junan ohitus',
		validFrom: '2017-01-01'
	},
	'50468353': {
		code: 'P103',
		name: 'Asetinlaite',
		validFrom: '2019-09-01'
	},
	'50533633': {
		code: 'L303',
		name: 'Ahtaus ratapihalla',
		validFrom: '2017-01-01'
	},
	'50534145': {
		code: 'S203',
		name: 'Erotusjakso',
		validFrom: '2019-09-01'
	},
	'50599425': {
		code: 'P203',
		name: 'Muu liikennöitsijän vastuulla oleva tietojärjestelmähäiriö',
		validFrom: '2019-09-01'
	},
	'50600449': {
		code: 'O403',
		name: 'Tulipalot, metsäpalot',
		validFrom: '2017-01-01'
	},
	'50600961': {
		code: 'I303',
		name: 'Eläin radalla',
		validFrom: '2019-09-01'
	},
	'50664705': {
		code: 'L503',
		name: 'Mäkeenjäänti',
		validFrom: '2017-01-01'
	},
	'50664961': {
		code: 'P303',
		name: 'Virrotinkamera vika / aiheeton hälytys',
		validFrom: '2019-09-01'
	},
	'50731009': {
		code: 'T303',
		name: 'Muu este (puu, lumieste tms. radalla)',
		validFrom: '2019-09-01'
	},
	'50795777': {
		code: 'L603',
		name: 'Veturin odotus myöhässä olevasta junasta',
		validFrom: '2019-09-01'
	},
	'50796033': {
		code: 'P403',
		name: 'Muut viestintälaite / -yhteysviat',
		validFrom: '2019-09-01'
	},
	'50992385': {
		code: 'L703',
		name: 'Liikenneohjaajan virhe',
		validFrom: '2021-01-01'
	},
	'51708168': {
		code: 'L3',
		name: 'Konflikti kapasiteetissa',
		validFrom: '2017-01-01'
	},
	'51839240': {
		code: 'S2',
		name: 'Sähköratavika',
		validFrom: '2019-09-01'
	},
	'51970312': {
		code: 'R2',
		name: 'Ratatyön sovitun ajan ylitys',
		validFrom: '2019-09-01'
	},
	'52035848': {
		code: 'O3',
		name: 'Tasoristeysonnettomuus',
		validFrom: '2017-01-01'
	},
	'52101384': {
		code: 'M2',
		name: 'Ylimääräinen pysähdys',
		validFrom: '2017-01-01'
	},
	'67180289': {
		code: 'S104',
		name: 'Muu vika mm. virhetoiminto',
		validFrom: '2019-09-01'
	},
	'67181313': {
		code: 'M104',
		name: 'Passi- ja tullitarkastus',
		validFrom: '2019-09-01'
	},
	'67245313': {
		code: 'L204',
		name: 'Edellä kulkeva juna',
		validFrom: '2017-01-01'
	},
	'67245569': {
		code: 'P104',
		name: 'Suojastus',
		validFrom: '2019-09-01'
	},
	'67310849': {
		code: 'L304',
		name: 'Suunnitteluvirhe',
		validFrom: '2017-01-01'
	},
	'67311361': {
		code: 'S204',
		name: 'Puu tms. sähköratarakenteissa',
		validFrom: '2019-09-01'
	},
	'67376641': {
		code: 'P204',
		name: 'Ulkopuolisen tahon vastuulla oleva tietojärjestelmähäiriö',
		validFrom: '2019-09-01'
	},
	'67377665': {
		code: 'O404',
		name: 'Junan törmäys muuhun kalustoon',
		validFrom: '2017-01-01'
	},
	'67378177': {
		code: 'I304',
		name: 'Viranomaistoiminta',
		validFrom: '2023-03-01'
	},
	'67441921': {
		code: 'L504',
		name: 'Onnettomuus',
		validFrom: '2017-01-01'
	},
	'67442177': {
		code: 'P304',
		name: 'Muut liikkuvan kaluston valvontalaitehäiriöt',
		validFrom: '2019-09-01'
	},
	'67769601': {
		code: 'L704',
		name: 'Määrittelyvirhe automatiikassa',
		validFrom: '2021-01-01'
	},
	'68288776': {
		code: 'V3',
		name: 'Vetovoimasta johtuva nopeuden alennus / tehon puute',
		validFrom: '2017-01-01'
	},
	'68485384': {
		code: 'L4',
		name: 'Myöhästyminen ulkomailta',
		validFrom: '2017-01-01'
	},
	'68550920': {
		code: 'P2',
		name: 'Tietojärjestelmäviat',
		validFrom: '2019-09-01'
	},
	'68681992': {
		code: 'T2',
		name: 'Liikenteenohjauksen asettamat nopeusrajoitukset (ratarakenne)',
		validFrom: '2019-09-01'
	},
	'68813064': {
		code: 'O4',
		name: 'Muut onnettomuudet ja vauriot',
		validFrom: '2017-01-01'
	},
	'68944136': {
		code: 'I3',
		name: 'Ilkivalta, asiaton radalla liikkuminen',
		validFrom: '2019-09-01'
	},
	'83958529': {
		code: 'M105',
		name: 'Vankien kuormaus ja purku',
		validFrom: '2019-09-01'
	},
	'84022273': {
		code: 'E201',
		name: 'Aikataulua nopeampi kulku',
		validFrom: '2023-03-01'
	},
	'84022785': {
		code: 'P105',
		name: 'Raidevirtapiiri',
		validFrom: '2019-09-01'
	},
	'84088065': {
		code: 'L305',
		name: 'Konflikti ratatyön kanssa myöhässäkulun takia',
		validFrom: '2023-03-01'
	},
	'84088577': {
		code: 'S205',
		name: 'Nostettava ajolanka',
		validFrom: '2019-09-01'
	},
	'84153857': {
		code: 'P205',
		name: 'Liikenteenhallinnan järjestelmien konesalipalvelut',
		validFrom: '2019-09-01'
	},
	'84154881': {
		code: 'O405',
		name: 'Muu onnettomuus',
		validFrom: '2017-01-01'
	},
	'84546817': {
		code: 'L705',
		name: 'Muu liikenteenhoidosta johtuva myöhästyminen',
		validFrom: '2021-01-01'
	},
	'85000456': {
		code: 'K4',
		name: 'Kytkentä',
		validFrom: '2017-01-01'
	},
	'85065992': {
		code: 'V4',
		name: 'Katsastamaton vetokalusto',
		validFrom: '2017-01-01'
	},
	'85131528': {
		code: 'A3',
		name: 'Junaa ei ole ajettu',
		validFrom: '2017-01-01'
	},
	'85262600': {
		code: 'L5',
		name: 'Edessä oleva kalusto tukkii radan',
		validFrom: '2017-01-01'
	},
	'85328136': {
		code: 'P3',
		name: 'Liikkuvan kaluston valvontalaitevika tai -häiriö',
		validFrom: '2019-09-01'
	},
	'85524744': {
		code: 'R3',
		name: 'Liikennerajoite ratatyön jälkeen',
		validFrom: '2019-09-01'
	},
	'100735745': {
		code: 'M106',
		name: 'Matkustajan avustaminen',
		validFrom: '2019-09-01'
	},
	'100800001': {
		code: 'P106',
		name: 'Akselinlaskenta',
		validFrom: '2019-09-01'
	},
	'100865793': {
		code: 'S206',
		name: 'Muu sähköratavika',
		validFrom: '2019-09-01'
	},
	'100931073': {
		code: 'P206',
		name: 'Liikenteenhallinnan järjestelmien tietoliikennepalvelut',
		validFrom: '2019-09-01'
	},
	'101777672': {
		code: 'K5',
		name: 'Irroitus',
		validFrom: '2017-01-01'
	},
	'101843208': {
		code: 'V1',
		name: 'Veturipula',
		validFrom: '2021-01-01'
	},
	'102236424': {
		code: 'T3',
		name: 'Ratarikko / este radalla',
		validFrom: '2019-09-01'
	},
	'117512961': {
		code: 'M107',
		name: 'Ovien sulkeminen',
		validFrom: '2019-09-01'
	},
	'117577217': {
		code: 'P107',
		name: 'Kauko-ohjauksen rajapintaviat',
		validFrom: '2019-09-01'
	},
	'117708289': {
		code: 'P207',
		name: 'Liikenteenhallinnan järjestelmien työasemat ja laitteet',
		validFrom: '2019-09-01'
	},
	'117773569': {
		code: 'L501',
		name: 'Kalusto rikki',
		validFrom: '2022-01-20'
	},
	'117904641': {
		code: 'L607',
		name: 'Saaton viivästyminen johtuen muusta liikenteestä',
		validFrom: '2019-09-01'
	},
	'118554888': {
		code: 'K6',
		name: 'Katsastamaton kalusto',
		validFrom: '2017-01-01'
	},
	'118620424': {
		code: 'V2',
		name: 'Veturivika',
		validFrom: '2021-01-01'
	},
	'118685960': {
		code: 'A2',
		name: 'Aikataulusuunnittelun virhe',
		validFrom: '2022-01-20'
	},
	'118817032': {
		code: 'L6',
		name: 'Junan lähtöön liittyvä odotus',
		validFrom: '2019-09-01'
	},
	'118882568': {
		code: 'P4',
		name: 'Viestintälaite /-yhteysviat',
		validFrom: '2019-09-01'
	},
	'119079176': {
		code: 'R4',
		name: 'Ratatyön toteutus poikkeaa suunnitellusta',
		validFrom: '2019-09-01'
	},
	'119275784': {
		code: 'I4',
		name: 'Muu syy',
		validFrom: '2022-10-01'
	},
	'134290177': {
		code: 'M108',
		name: 'Matkustajien odotus raidemuutoksen vuoksi',
		validFrom: '2019-09-01'
	},
	'134354433': {
		code: 'P108',
		name: 'Opastin',
		validFrom: '2019-09-01'
	},
	'134485505': {
		code: 'P208',
		name: 'Integraatiopalvelu',
		validFrom: '2019-09-01'
	},
	'134550785': {
		code: 'L502',
		name: 'Ei-kaupallinen juna tai ratatyökone rikki',
		validFrom: '2022-01-20'
	},
	'135332104': {
		code: 'K1',
		name: 'Kalustopula',
		validFrom: '2021-01-01'
	},
	'151067393': {
		code: 'M109',
		name: 'Matkustajien odotus kalustomuutoksen vuoksi',
		validFrom: '2019-09-01'
	},
	'151131649': {
		code: 'P109',
		name: 'Vaihde',
		validFrom: '2019-09-01'
	},
	'151262721': {
		code: 'P209',
		name: 'Liikenteenohjauksen tietojärjestelmät',
		validFrom: '2019-09-01'
	},
	'151459073': {
		code: 'L604',
		name: 'Saaton viivästyminen johtuen kalusto- tai veturiviasta',
		validFrom: '2021-01-01'
	},
	'152109320': {
		code: 'K2',
		name: 'Kalustovika',
		validFrom: '2021-01-01'
	},
	'152371464': {
		code: 'L8',
		name: 'Liikenteelliset päätökset',
		validFrom: '2019-09-01'
	},
	'167844609': {
		code: 'M110',
		name: 'Muu syy pysähtymisajan ylitykselle',
		validFrom: '2019-09-01'
	},
	'167908865': {
		code: 'P110',
		name: 'Tasoristeyslaitos',
		validFrom: '2019-09-01'
	},
	'168039937': {
		code: 'P210',
		name: 'Kapasiteetinhallinnan tietojärjestelmät',
		validFrom: '2019-09-01'
	},
	'168236289': {
		code: 'L605',
		name: 'Saaton viivästyminen johtuen junanmuodostuksesta',
		validFrom: '2021-01-01'
	},
	'169148680': {
		code: 'L7',
		name: 'Liikenteenhoitovirhe',
		validFrom: '2021-01-01'
	},
	'184621825': {
		code: 'M111',
		name: 'Porttirahastus',
		validFrom: '2023-03-01'
	},
	'184686081': {
		code: 'P111',
		name: 'Avattava silta',
		validFrom: '2019-09-01'
	},
	'184817153': {
		code: 'P211',
		name: 'Radanpidolle ja liikennöitsijöille suunnatut tietojärjestelmät',
		validFrom: '2019-09-01'
	},
	'185013505': {
		code: 'L606',
		name: 'Saaton viivästyminen johtuen infraviasta',
		validFrom: '2021-01-01'
	},
	'185663752': {
		code: 'K3',
		name: 'Kalustosta johtuva nopeuden alennus',
		validFrom: '2022-01-20'
	},
	'201463297': {
		code: 'P112',
		name: 'Tiedonsiirto',
		validFrom: '2019-09-01'
	},
	'201594369': {
		code: 'P212',
		name: 'Kauko-ohjausjärjestelmä, ESKO',
		validFrom: '2019-09-01'
	},
	'201790721': {
		code: 'L608',
		name: 'Junan lähtöön liittyvä muu odotus',
		validFrom: '2021-01-01'
	},
	'218240513': {
		code: 'P113',
		name: 'Virransyöttö',
		validFrom: '2019-09-01'
	},
	'218371585': {
		code: 'P213',
		name: 'Kauko-ohjausjärjestelmä, TAKO',
		validFrom: '2019-09-01'
	},
	'235017729': {
		code: 'P114',
		name: 'Laskumäkilaitteisto',
		validFrom: '2019-09-01'
	},
	'235148801': {
		code: 'P214',
		name: 'Kauko-ohjausjärjestelmä, KAKO',
		validFrom: '2019-09-01'
	},
	'251725898': {
		code: 'H',
		name: 'Henkilökunta',
		validFrom: '2017-01-01'
	},
	'251794945': {
		code: 'P115',
		name: 'Tunnelitekniset järjestelmät',
		validFrom: '2019-09-01'
	},
	'251926017': {
		code: 'P215',
		name: 'Kauko-ohjausjärjestelmä, Mipron MiSO-järjestelmä',
		validFrom: '2019-09-01'
	},
	'268503114': {
		code: 'J',
		name: 'Junan muodostamisen viivästyminen',
		validFrom: '2019-09-01'
	},
	'268572161': {
		code: 'P116',
		name: 'Muut kuin radanpidon vastuulla olevat laiteviat',
		validFrom: '2019-09-01'
	},
	'285280330': {
		code: 'K',
		name: 'Kalusto, moottorijunat ja vaunut',
		validFrom: '2017-01-01'
	},
	'285349377': {
		code: 'P117',
		name: 'Muut laiteviat',
		validFrom: '2019-09-01'
	},
	'285480449': {
		code: 'P217',
		name: 'Muut liikenteenohjauksen vastuulla olevat tietojärjestelmähäiriöt',
		validFrom: '2019-09-01'
	},
	'302057546': {
		code: 'V',
		name: 'Vetokalusto',
		validFrom: '2017-01-01'
	},
	'302257665': {
		code: 'P216',
		name: 'Kauko-ohjausjärjestelmä, POKA',
		validFrom: '2023-03-01'
	},
	'318834762': {
		code: 'A',
		name: 'Aikataulu ja liikennöinti',
		validFrom: '2017-01-01'
	},
	'335611978': {
		code: 'E',
		name: 'Etuajassakulku',
		validFrom: '2017-01-01'
	},
	'352389194': {
		code: 'L',
		name: 'Liikenteenhoito',
		validFrom: '2017-01-01'
	},
	'369166410': {
		code: 'P',
		name: 'Liikenteenhoitojärjestelmät',
		validFrom: '2017-01-01'
	},
	'385943626': {
		code: 'S',
		name: 'Sähkörata',
		validFrom: '2017-01-01'
	},
	'402720842': {
		code: 'T',
		name: 'Rata (ratarakenne)',
		validFrom: '2017-01-01'
	},
	'419498058': {
		code: 'R',
		name: 'Ratatyö',
		validFrom: '2017-01-01'
	},
	'436275274': {
		code: 'O',
		name: 'Onnettomuus',
		validFrom: '2017-01-01'
	},
	'453052490': {
		code: 'M',
		name: 'Matkustajapalvelu',
		validFrom: '2017-01-01'
	},
	'469829706': {
		code: 'I',
		name: 'Muut syyt',
		validFrom: '2017-01-01'
	},
	'486606922': {
		code: 'X',
		name: 'Rataliikennekeskukselle ilmoitettavat syyt',
		validFrom: '2017-07-01'
	}
};

export default reasons;
