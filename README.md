# L'unione fa la cocchia

Gioco da browser: fai cadere le cocchie (i gusci, in ascolano) nel cocchiodromo. Due cocchie uguali che si toccano si fondono in quella più grossa. Si vince un livello arrivando alla Cocchia d'oro, si perde se il cocchiodromo si riempie. I livelli sono 20, ognuno con un cocchiodromo di forma diversa: sedici piatti, tre a tre dimensioni e l'ultimo a quattro.

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
- La scossa muove il cocchiodromo tutto insieme: va, torna e va di nuovo (nei livelli 3D anche in profondità, nel tesseratto pure nella quarta dimensione), così il mucchio si rimescola e le cocchie uguali si trovano. Per 2 secondi dopo la scossa il conto del cocchiodromo pieno resta fermo: le cocchie lanciate sopra la linea non ti fanno perdere.
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
| 6 | Tramoggia | 95% | Cocchia noce |
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
| 17 | Vasca | 3D | Cocchia bronzo |
| 18 | Cilindro | 3D | Cocchia argento |
| 19 | Imbuto | 3D | Cocchia oro |
| 20 | Tesseratto | 4D | Cocchia Dark Matter |

- Dal livello 1 al 16 la bocca resta uguale e ogni livello toglie l'1% di spazio sotto la linea.
- Nei livelli 17, 18 e 19 il cocchiodromo ha anche la profondità e le cocchie sono sfere. Col dito (o col mouse) destra e sinistra spostano la cocchia, su e giù scelgono la profondità: in basso vicino, in alto lontano. Un'ombra gialla segna dove andrà a cadere. Da tastiera: frecce per spostarla, spazio per lasciarla.
- Il livello 20 è un tesseratto, un ipercubo: oltre alla profondità c'è una quarta dimensione, che si sceglie col cursore sotto il cocchiodromo (o con i tasti Q ed E). Il cubo piccolo disegnato dentro quello grande è l'altro capo della quarta dimensione: le cocchie che stanno da quella parte si vedono più piccole e violacee. Due cocchie si fondono solo se si toccano in tutte e quattro le dimensioni.
- L'ordine dei livelli piatti è stato tarato con un giocatore automatico (120 partite per livello, sempre la stessa strategia): i suoi punti medi scendono da circa 18.800 al livello 1 a circa 12.400 al livello 16. Nei livelli 3D e 4D lo stesso giocatore arriva di solito al cocco e non vince quasi mai; lì i punti non sono confrontabili con quelli dei livelli piatti, perché le fusioni a catena sono molto più frequenti.
- Anche la scossa è stata tarata con il giocatore automatico, su mucchi a un passo dal cocchiodromo pieno (150 per livello): con la scossa di prima, che spingeva ogni cocchia a caso, la partita finiva lo stesso in circa 6 casi su 10 nei livelli piatti; con questa in circa 1 su 10, e le fusioni per scossa passano da 3 a più di 8.
- Per provare tutti i livelli senza vincerli, apri il gioco aggiungendo `?sblocca` all'indirizzo.

## L'app: Open Cocchia

Il gioco si può installare sul telefono come app, con il nome Open Cocchia e la Cocchia d'oro grattata per metà come icona. Una volta installato si apre a tutto schermo e funziona anche senza rete.

Dove l'app si può installare, sopra i comandi compare il pulsante giallo "Installa Open Cocchia"; la × accanto lo nasconde per sempre su quel telefono.

- Android (Chrome): tocca il pulsante e conferma. In alternativa menu ⋮ e "Installa app" (o "Aggiungi a schermata Home").
- iPhone (Safari): lì l'installazione passa per forza da Condividi, quindi il pulsante mostra solo la strada: Condividi, poi "Aggiungi alla schermata Home".

## Contatti

Nella finestra "Cocchie" il link "Contatta gli sviluppatori" apre in una nuova scheda un Google Form. Serve la rete. Le risposte arrivano nel modulo, senza nessun server del gioco.

## Com'è fatto

Il gioco è tutto in `index.html`: nessuna installazione e nessun server. Accanto ci sono solo i file che servono all'app: `manifest.webmanifest` (nome, colori, icone), `sw.js` (la copia per quando manca la rete) e la cartella `icons`. Record, partita in corso, livelli aperti e cocchie vinte restano nel browser di chi gioca.
