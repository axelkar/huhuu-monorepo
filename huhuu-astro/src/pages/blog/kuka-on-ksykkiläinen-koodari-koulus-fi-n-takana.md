---
title: "Kuka on ksykkiläinen koodari koulus.fi:n takana?"
wixCategoryIds: ["5f80417e596b6b00171783ac"]
slug: "kuka-on-ksykkiläinen-koodari-koulus-fi-n-takana"
isPinned: false
isFeatured: true
timeToRead: 5
wixViewCount: 564
created: "2020-11-02T18:47:47.392Z"
published: "2020-11-03T17:32:47.302Z"
modified: "2020-11-02T18:47:47.392Z"
language: "en"
layout: "../../layouts/BlogPost.astro"
---
### **4 vuotta sitten muuttaessaan Orivedeltä Helsinkiin Viljami Virtanen ei olisi voinut uskoa omistavansa suositun sivuston ja puolet ohjelmointiyrityksestä. Viljami on koulus.fi-sivuston luoja ja päätyi jotenkin pyörittämään ja ylläpitämään opiskelijoille tärkeää sekä erityisen hyödyllistä nettisivustoa.**

![Unknown image description. Check context for details.](https://static.wixstatic.com/media/18093e_e577b39ef6c84563b98a6516bd65866d~mv2.jpg)
**Missä minulla on seuraava tunti? Monelta on RO? Onko meillä split? Mitä kirjoja tarvitsen tässä jaksossa? Missä minun pitää nyt olla? Kaikkiin löytyy vastaus –koulus.fi:stä.**

**Koulus.fi on monen mielestä ksykkiläisten pelastus. Se on palvelu, josta saa selville tarpeellisia tietoja: lukujärjestyksen, ruokailuajat, kirja- ja ruokalistat. Palvelun käyttöönotto vaatii vain oman Google-tilin tiedot sekä Wilman lukujärjestyksen linkin. Koulus.fi on noin vuoden vanha, mutta tuntuu siltä, että se olisi aina ollut apunamme.**

**Koko projekti lähti käyntiin TT-linjan pakollisella koodauskurssilla viime syksynä, kun Viljami Virtanen oli juuri aloittanut lukion. Koska koodaaminen ja tietotekniikka olivat Viljamille jo ennestään tuttuja, ei hänellä ollut oikein mitään tekemistä kurssilla, samalla kun suurin osa muista TT-linjalaisista vasta opetteli koodauksen alkeita. Testaamisen ja kokeilun kautta Viljami halusi yrittää yhdistellä eri tietolähteitä ja muodostaa niistä jotain hyödyllistä. “Se oli enemmänki sellanen testi aluks, en suunnitellu mitään isoa palvelua siitä”, Viljami summaa.**

**Ykkösille viime vuonna ylpeästi esitelty –myös ksykkiläisen luoma–  onkomeillasplit.ml-sivusto, joka kertoo ryhmien ruokailuajat, antoi Viljamille motivaatiota viedä ideaa pidemmälle. Pelkkien ruokailuaikojen lisäksi Viljami halusi yrittää saada muitakin tietoja helpommin saataville, jotta Viljamin olisi itsekin helpompi pysyä perillä siitä, missä milloinkin tulee olla. Projekti valmistui pikkuhiljaa koodaustunneilla ensimmäisen jakson aikana, eikä sivusto ollut aluksi kuin muutaman tiedon tarjoava palvelu.**

**Sivusto on koodattu javascript-kielellä, tarkemmin selainpuolella React-kirjastolla ja palvelinpuolella Node.js-ympäristössä. Sivuston koodaamisesta ja luomisesta Viljami arvuuttelee nauraen: “Mitenköhän tän nyt selittäis fiksusti”. Sivuston toiminnan pohjalla on datatieto, jota kerätään käyttäjän sekä Viljamin omista Google- sekä Wilma-tiedoista. Viljamin omista tiedoista kerätään esimerkiksi ruokailuajat, jotka vaihtuvat joka viikko. Ennen syksyä Viljami päivitti kaikki ajat vielä manuaalisesti sivustoon, mutta tiheään tahtiin vaihtuvien ruokailuaikalistojen vuoksi Viljami kehitteli uuden systeemin. Viljamin ei nyt tarvitse itse kirjoittaa ruokailuaikoja sivustoon, vaan ne tulevat sinne automaattisesti jaetuista tiedostoista. Viljamin omien tiedostojen yhdistäminen sivustoon on säästänyt paljon aikaa työskentelytunneista.**
****
![Unknown image description. Check context for details.](https://static.wixstatic.com/media/18093e_a6448a9460fb4e1b94083957ffd947bf~mv2.jpg)

**Käyttäjän selaimesta ja palvelun datatiedosta sekä Viljamin itsensä lisäämistä tiedoista muodostuu kaikkien suosima koulus.fi-sivusto. Sivuston koodissa on käytetty hyödyksi netissä olevia valmiita koodeja eli erilaisia paketteja, jotka tekevät valmiiksi toimintoja, jotta Viljamin ei ole tarvinnut tehdä kaikkea alusta loppuun asti. **

**Tietyt pienet asiat palvelussa ovat raastavaa työtä Viljamille. Etäopiskelun aikana koulus.fi-sivustolle tulee aina tunnin mukaan oman kurssin Meet-linkki, jonka Viljami laittaa sivustolle. “Sen [oikean linkin] kaivaminen on yllättävän vaikeeta”, Viljami kertoo. Myös sivustolle rakennetun kartan navigaatio-ominaisuus vei Viljamin mukaan paljon työtä ja aikaa.**

**Bugien korjaaminen vaatii ylläpitämisessä eniten aikaa. Esimerkiksi chat-ominaisuuden tullessa viime lukukautena, etusivulla oleva bugi kaatoi sivustoa. Viljami kertoo: “Mä luulin et se [bugi] on tän chatin syytä ja sen takii siihen koko jutun selvittelyyn meni tosi kauan aikaa.” Pieniä, huomaamattomia bugeja tulee sivustoon usein, joita Viljami korjailee sitä mukaa, kun hän tai muut huomaavat niitä. Suurempia bugeja ja ongelmia, kuten Wilman tietokatkoksia, on vaikeampi setviä. Alkusyksystä koulus.fi-sivusto ei toiminut kunnolla, koska Wilmasta puuttui lukujärjestyksen tiedot, joten olennainen osa koulus.fi-sivuston palvelua puuttui. Viljami oli yhteydessä Ksykin IT-tukeen, jonka kautta Wilmaan saatiin yhteys ja parin viikon kuluessa sivusto taas toimi.**

**Koulus.fi ei ole koskaan valmis. “Alussa [sivusto] näytti vain nykyisen tunnin eikä mitään muuta”, Viljami toteaa. Ajan kuluessa palvelu on laajentunut, levinnyt ja kehittynyt. Jatkuvasti tulee uusia ideoita ja ehdotuksia sekä käyttäjiltä että Viljamilta itseltään. Uusien asioiden kokeileminen on Viljamille tärkeintä kehittäessä sivustoa. Lisäksi pienet asiat, kuten Wilma-viesteistä esiin tulevat erikoisjärjestelyt, Viljami koodaa sivustoon. Uusien toimintojen lisäämisen ja kehittämisen myötä työn määrä on myös lisääntynyt. Viljamin tulee olla ajan tasalla kaikesta - vaikka alunperin koulus.fi kehiteltiin vähentämään ajan tasalla pysymisen taakkaa.**

![Unknown image description. Check context for details.](https://static.wixstatic.com/media/18093e_e3b736b1687f4dc591033757b59a18f5~mv2.jpg)
**Positiivinen palaute antaa Viljamille motivaatiota ylläpitää ja kehittää sivustoa. “Mäkin opin uutta, kun mä teen jotain uusia ominaisuuksia [sivustoon] ja kehityn”, Viljami kertoo. Koulus.fi:n suuren käyttäjämäärän vuoksi Viljami kokee myös tarvetta työskennellä sivuston parissa.**

**Hyödyllisin ominaisuus Viljamille itselleen on oppituntien ajat ja paikat. Myös ruokailuajankohta on hyvin tärkeä ominaisuus koulus.fi:ssä, koska on paljon hankalampaa etsiä oman kurssin ruokailuaika viikoittain vaihtuvista taulukoista. Päiväjärjestyksen näkee kätevästi sivustolta ja mahdolliset muutokset, perutut tunnit, itsenäiset tunnit, luokkamuutokset tai yhteiset tapahtumat saattavat myös olla koodattuna omaan lukkariin. Nälän ja tylsyyden keskellä voi tuijottaa ajastinta, joka kertoo kuinka kauan välituntiin tai ruokailuun on aikaa.**
****
![Unknown image description. Check context for details.](https://static.wixstatic.com/media/18093e_f35583a9ea8b471a899af4d96e0563a9~mv2.jpg)

**Koulus.fi:n ylläpitäminen maksaa Viljamille jonkin verran vuodessa sen lisäksi, että palveluun uppoaa paljon työtä. Viljami ei kuitenkaan halua lisätä sivustolle sellaisia mainoksia, joista saisi tuloja ja siten korvausta palvelun ylläpitämiseen. Sen sijaan erilaisten teemaulkoasujen, kuten Halloween-teeman, käyttöönotosta saatetaan ottaa maksu tulevaisuudessa, minkä avulla käyttäjät voisivat tukea palvelun ylläpitämistä.**

**Viljami toteaa, ettei koulus.fi-sivuston ylläpitäminen ole hänelle pakkopullaa, koska Viljami kehittää sivustoa vain silloin, kun häntä itseään huvittaa. “Se on ihan fiiliksestä kiinni”, Viljami aprikoi kertoessaan, että välillä aikaa kuluu jopa kymmeniä tunteja viikossa sivuston parissa työskennellen. “Mitään pakollista duunia ei oo kovin paljoa”, Viljami tarkentaa. Ylläpitämiseen liittyy lähinnä tuntimuutosten korjaamista ja vastaavia pieniä fiksailuja.**

**“Oon monta vuotta ollut kiinnostunu kaikesta tietotekniikasta ja koodaamisesta”, Viljami kertoo. Ensimmäisen koodinsa Viljami kirjoitti vitosluokalla Youtube-tutoriaalien pohjalta. “Sen jälkeen vähän kaikkea on tullu testailtua ja tehtyä.” Ksykin tiede ja teknologia -linja on ollut loistava valinta Viljamin mukaan. “Oon tykännyt tosi paljon tästä yhteishengestä”, Viljami kertoo hymyillen. Tulevaisuudessa Viljami ei kuitenkaan halua tehdä näin yksinkertaisia koodaushommia – ainakaan kokopäiväisesti. “Kyl tää käy aika tylsäks”, Viljami toteaa tavallisesta nettisivuston rakentamisesta. Jokin tutkivampi ja mielenkiintoisempi ala esimerkiksi tietotekniikassa olisi Viljamille mieleisempi.**

**Kaikkia jännittää koulus.fi:n tulevaisuus, kun Viljami valmistuu Ksykistä alle kahden vuoden päästä. Viljami ei itsekään tiedä, miten sivuston käy, kun hän valmistuu Ksykistä. Viljami toteaa, että vaihtoehtoina olisi automatisoida sivustoa niin paljon, ettei Viljamin poissaolo Ksykistä haittaisi tai sitten löytää mahdollinen perijä sivustolle. Joka tapauksessa Viljami ei haluaisi eikä pystyisi jatkamaan sivuston ylläpitämistä aktiivisesti lakin saatuaan.**

**Niki Jaakola, myös 19c-luokan ksykkiläinen, hoitaa paljon koulus.fi:n markkinointiasioita. Viljamin mukaan Niki on itse ottanut paljon vastuuta sivuston markkinoinnissa ja myös ylläpitämisessä. Käyttäjien kanssa kommunikointi, ideointi ja esimerkiksi Jodelissa mainostaminen ovat asioita, joita Niki tekee sivuston parissa. Myös koko Viljamin luokka ja monet muut Viljamin kaverit markkinoivat sivustoa tämän puolesta. “Muut tuntuu hoitavan tän [markkinoinnin] mun puolesta”, Viljami naurahtaa.**
****
![Unknown image description. Check context for details.](https://static.wixstatic.com/media/18093e_03775272dc584036b84f21e57e321d06~mv2.jpg)
**Monia ksykkiläisiä on mietityttänyt**
**tietosuojaan liittyvät asiat koulus.fi:ssä. Palveluun pitää kirjautua koulun Google-tilillä ja lisäksi kopioida Wilmasta oma lukujärjestys. Pitkät tietosuojaselosteet ja käyttäjäehdot tuntuvat vierailta ja oudoilta, minkä vuoksi jotkut ksykkiläiset eivät halua käyttää palvelua. “Kyl se on ihan fiksua, et ihmisiä kiinnostaa, mihin ne laittaa niiden tietoja”, Viljami pohtii. Sivusto saattaa vaikuttaa epäilyttävältä myös, jos sen tarkoitus- tai toimintaperiaatetta ei tiedä. Sivusto ei ole kuitenkaan tarkoitettu tietojen taltiointiin.**

**Melkein jokainen ksykkiläinen käyttää koulus.fi:tä. Jokaiselta luokalta noin 30 opiskelijaa käyttää palvelua, lukuun ottamatta muutamaa kolmosluokkaa. “Kakkoset ja ykköset käyttää tosi paljon”, Viljami summaa. Koulus.fi toimii myös muutamissa muissa kouluissa, mutta tieto-ongelmien takia esimerkiksi kaupungin kouluissa koulus.fi ei tällä hetkellä toimi. Viljamin on vaikea saada tietoa kaikista kouluista, koska systeemit ovat niin erilaiset eri paikoissa. Ylimääräisten koulujen lisääminen vie myös paljon aikaa.**
****
![Unknown image description. Check context for details.](https://static.wixstatic.com/media/18093e_7c8c81e00d3942189818863f7394e529~mv2.jpg)

**Viljami tekee määrätietoisesti hommia sivuston eteen. Viime vuoden jatkokoulutuspäivänä sivustolle oli ilmestynyt jokaisen aikataulu riippuen siitä, mihin oli ilmoittautunut. Ilmoittautumislistat olivat koulun käytävän seinällä. Viljami kumppaneineen otti kuvat listoista ja puolivitsillä he ajattelivat, että tiedot voisivat tulla koulus.fi:hin. Viljami alkoi näpyttämään tietoja sivustoon kotiin päästessään ja puolessa välissä hän tajusi, että lisättäviä kohtia on älyttömän paljon, eikä niitä millään jaksaisi lisätä sivustoon. Viljami ajatteli kuitenkin, ettei voi jättää asiaa puolitiehen ja näpytteli tietoja palveluun monia tunteja.”Se ei ollu mitenkään kivaa, mut ihmiset tykkäs siitä”, Viljami naurahtaa. “Tänä vuonna en ajatellu tehä sitä uudestaan”, Viljami lisää. **

**“[Tavoite on, että] mahollisimman moni ksykkiläinen saa oleellisia tietoja mahollisimman helposti”, Viljami toteaa, vaikka sivustolla ei olekaan selkeää tavoitetta saada paljon käyttäjiä. “Kannattaa käydä kattoo mitä kaikkea hyödyllistä tietoa täältä löytyy”, Viljami markkinoi.**
** **
![Unknown image description. Check context for details.](https://static.wixstatic.com/media/18093e_6f4e994611554ff58665bfecccee1cd2~mv2.jpg)
---
Kirjoittaja: Yasmin Goran
Kuvat: Yasmin Goran


