# L'unione fa la cocchia

Gioco da browser: fai cadere le cocchie (i gusci, in ascolano) nel cocchiodromo. Due cocchie uguali che si toccano si fondono in quella più grossa. Si vince un livello arrivando alla Cocchia d'oro, si perde se il cocchiodromo si riempie. I livelli sono 20, ognuno con un cocchiodromo di forma diversa.

Gioca: https://g95g95.github.io/unione-fa-la-cocchia/

## Le cocchie

1. pistacchio
2. arachide
3. nocciola
4. mandorla
5. castagna
6. noce
7. uovo
8. vongola
9. cozza
10. lumaca
11. riccio di mare
12. granchio
13. cocco
14. tartaruga
15. Cocchia d'oro

## Come si gioca

- All'inizio cadono solo pistacchi. Poi cade fino alla cocchia subito sotto la più grossa che hai creato, e dalla noce in su resta sempre più indietro.
- Parti con 2 scosse, senza limite massimo.
- La prima volta che crei una cocchia dalla nocciola (cocchia 3) alla tartaruga (cocchia 14) esce uno scocchia e vinci "Cocchie d'oro": gratti 6 caselle e con 3 cocchie uguali guadagni una scossa. La probabilità parte da 0,33 e sale di 0,05 a ogni biglietto.

## I livelli

Ogni livello ha il suo cocchiodromo. Facendo la Cocchia d'oro vinci la cocchia del livello e apri quello dopo; dal pulsante Livelli scegli quale giocare tra quelli aperti.

| Livello | Cocchiodromo | Spazio | Premio |
|---|---|---|---|
| 1 | Classico | 100% | Cocchia pistacchio |
| 2 | Smussato | 99% | Cocchia arachide |
| 3 | Tinozza | 98% | Cocchia nocciola |
| 4 | Scivolo | 97% | Cocchia mandorla |
| 5 | Emme | 96% | Cocchia castagna |
| 6 | Imbuto | 95% | Cocchia noce |
| 7 | Conca | 94% | Cocchia uovo |
| 8 | Scalinata | 93% | Cocchia vongola |
| 9 | Gradino | 92% | Cocchia cozza |
| 10 | Dosso | 91% | Cocchia lumaca |
| 11 | Pozzo | 90% | Cocchia riccio di mare |
| 12 | Dente | 89% | Cocchia granchio |
| 13 | Cocchia | 88% | Cocchia cocco |
| 14 | Clessidra | 87% | Cocchia tartaruga |
| 15 | Sega | 86% | Cocchia perla |
| 16 | Pettine | 85% | Cocchia corallo |
| 17 | Serpentina | 84% | Cocchia bronzo |
| 18 | Flipper | 94% | Cocchia argento |
| 19 | Mensole | 97% | Cocchia oro |
| 20 | Buco nero | 89% | Cocchia Dark Matter |

- Dal livello 1 al 17 la bocca resta uguale e ogni livello toglie l'1% di spazio sotto la linea. Dal 18 al 20 lo spazio torna largo, ma dentro ci sono ostacoli: tre pioli, due mensole, un buco nero.
- L'ordine delle forme è stato tarato con un giocatore automatico (120 partite per livello, sempre la stessa strategia): i suoi punti medi scendono da circa 18.800 al livello 1 a circa 10.300 al livello 20.
- Per provare tutti i livelli senza vincerli, apri il gioco aggiungendo `?sblocca` all'indirizzo.

## Com'è fatto

Un solo file, `index.html`: nessuna installazione e nessun server. Record, partita in corso, livelli aperti e cocchie vinte restano nel browser di chi gioca.
