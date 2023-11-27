# Counter 

Benvenuto nel progetto **Counter**! Questa applicazione è stata progettata per essere uno strumento di conteggio.

L’applicazione funziona come un counter, permettendo all’utente di aumentare o decrementare il valore del counter con facilità. Al primo accesso, l’utente visualizzerà 0 come valore iniziale del counter. Sono disponibili due pulsanti, + e -, che consentono di modificare il valore del counter incrementandolo o decrementandolo rispettivamente.

Inoltre, è presente un terzo pulsante che consente di resettare il valore del counter a 0. Questa funzionalità è particolarmente utile se si desidera ricominciare il conteggio da capo.  



## Demo 

![Counter-gif](./assets/img/img%20file%20readme/Gif%201.gif)
 Il pulsante + permette di incrementare di 1 il valore del counter.

![Counter-gif](./assets/img/img%20file%20readme/gif%202.gif)
 Il pulsante - permette di incrementare di 1 il valore del counter.

![Counter-gif](./assets/img/img%20file%20readme/gif%203.gif)
 Il pulsante reload permette di settare a 0 il valore del counter.


## Installazione

Non è necessaria alcuna installazione per utilizzare **Counter**. L'applicazione è completamente basata sul web, il che significa che può essere utilizzata direttamente nel tuo browser preferito. Non è richiesto alcun software aggiuntivo. Basta aprire il file `index.html` nel tuo browser per iniziare a utilizzare l'applicazione.

## Utilizzo
Nelle prossime righe, illustrerò le logiche che ho adottato per implementare il progetto del counter. Suddividerò la spiegazione in due parti, nella prima illustrerò come sono stati implementati i pulsanti +/-, reload e il valore del counter; nella seconda parte verranno illustrate le scelte effettuate per l'effettivo funzionamento dell'applicazione. 

### Implementazione pulsanti e del valore counter con JavaScript

Il codice descritto è situato nella cartella js, con il nome script.js 

Presupponendo che nel file HTML ci fosse già un container e un tag h1, sono stati aggiunti gli elementi "p", "div", "button" ecc, personalizzati con CSS. Di seguito è descritta la funzione per implementare gli elementi: 

```javascript
function createDomElement (tagName, id, innerHtml, className, container){
    const element = document.createElement(tagName);
    element.id = id;
    element.innerHTML = innerHtml;
    element.classList.add(className);
    container.appendChild(element);
    return element;

}
 ``` 
La funzione createDomElement è una funzione che crea e restituisce un elemento DOM con le proprietà specificate. La funzione accetta i seguenti parametri:

tagName: una stringa che rappresenta il nome del tag dell’elemento da creare, come “p”, “div”, “img”, ecc.
id: una stringa che rappresenta l’identificativo univoco dell’elemento.
innerHtml: una stringa che rappresenta il contenuto HTML dell’elemento, che può includere altri elementi, testo o entità.
className: una stringa che rappresenta il nome della classe CSS da applicare all’elemento, che può essere usata per definire lo stile o il comportamento dell’elemento.
container: un elemento DOM che rappresenta il nodo padre a cui appendere l’elemento creato come figlio.
La funzione esegue i seguenti passaggi:

Crea un nuovo elemento DOM usando il metodo document.createElement e passando il parametro tagName.
Assegna al nuovo elemento l’id specificato tramite il parametro id.
Assegna al nuovo elemento il contenuto HTML specificato tramite il parametro innerHtml.
Aggiunge al nuovo elemento la classe CSS specificata tramite il parametro className usando il metodo element.classList.add.
Appende il nuovo elemento al nodo padre specificato tramite il parametro container usando il metodo container.appendChild.
Restituisce il nuovo elemento creato.
La funzione createDomElement è utile per creare dinamicamente elementi DOM senza dover scrivere codice HTML statico.



```javascript
window.addEventListener("resize", updateImage);

function updateImage(){
    if (window.matchMedia("(max-width: 767px)").matches){
        reloadButton.innerHTML = "<img src= 'assets/img/icons8-ruota-a-destra-ios-16-filled-16.png'>"; 
    } else {
        reloadButton.innerHTML = "<img src='assets/img/icons8-ruota-a-destra-ios-16-filled-32.png'>"; 
    }
}
 ``` 
Aggiunge un “event listener” per l’evento resize della finestra che chiama la funzione updateImage ogni volta che la finestra viene ridimensionata.
La funzione aggiorna l’immagine del pulsante di ricarica in base alla dimensione della finestra. Se la larghezza della finestra è inferiore o uguale a 767px, utilizza un’immagine più piccola. Altrimenti, utilizza un’immagine più grande.


### Implementazione del codice per il funzionamento dell'applicazione

Ho iniziato suddividendo il problema in diverse parti, come segue:

1. **Lettura del valore del display**: Il primo passo è stato leggere il numero visualizzato sul display del counter.
2. **Riconoscimento del bottone**: Successivamente, ho implementato una logica per riconoscere quale pulsante era stato cliccato dall’utente.
3. **Aggiunta di un evento al pulsante selezionato**: Una volta riconosciuto il pulsante, ho applicato la funzione corrispondente (addizione o sottrazione) in base al pulsante premuto.

In generale, ho ritenuto utile suddividere il codice in diverse funzioni, ognuna con compiti specifici. Ho estratto gli elementi necessari dal Document Object Model (DOM) su cui verrano applicate le funzioni. Infine, ho implementato un evento ‘addEventListener’. Questo approccio ha permesso di mantenere il codice organizzato e facilmente gestibile.

Vediamo nel dettaglio il codice: 

Gli elementi del DOM: 

```javascript
const displayCounter = document.getElementById("value-counter"); 
const btnContainer = document.querySelector(".btn-container"); 
const plus = document.getElementById("plus-btn"); 
const minus = document.getElementById("minus-btn"); 
const reloadBtn = document.getElementById("reload-btn"); 
 ``` 
In ordine sono:
1. Il valore del counter
2. IL div che contiene i bottoni + e -
3. Il bottone +
4. Il bottone -
5. Il bottone reload 


Le funzioni utilizzate sono:

```javascript
function getDisplay(display){
    let count = display.textContent;
    let numberCount = parseInt(count);
    return numberCount;
}
 ``` 
La funzione getDisplay ha il compito di acquisire il valore visualizzato sul display. Questo valore, inizialmente una stringa, viene poi convertito in un intero. Infine, la funzione restituisce questo valore intero. Questo processo consente di manipolare numericamente il valore visualizzato sul display.  

```javascript
function addNumber(counter){
    counter++;
    return counter;
}

function subtractNumber(counter){
    counter--;
    return counter;
}
 ```
La funzione addNumber incrementa di 1 il valore di un generico numero, la funzione substractNumber lo decrementa. 


```javascript
function changeColor(number, display){
    if (number%2 ===0){
        display.style.color="#fdf0d5";
    }else{
        display.style.color="#F1F181";
    }   
}
 ``` 
La funzione changeColor ha il compito di modificare il colore di un numero visualizzato sul display in base al fatto che sia pari o dispari. Questa funzionalità aggiunge un elemento visivo dinamico all’interfaccia utente dell’applicazione. 


```javascript
function updateCounter(op){
    let number = getDisplay(displayCounter);
    if (op===plus){
        newValue = addNumber(number);
    }else {
        newValue = subtractNumber(number);
    };
    changeColor(newValue, displayCounter);
    displayCounter.textContent= newValue;
}
 ``` 
La funzione updateCounter è responsabile dell’aggiornamento del valore visualizzato sul counter. Questa funzione prende come argomento un operatore (op), che può essere plus o un altro valore.

All’interno della funzione, viene prima chiamata la funzione getDisplay con displayCounter come argomento per ottenere il valore corrente del counter. Questo valore viene memorizzato nella variabile number.

Successivamente, la funzione controlla se l’operatore (op) è uguale a plus. Se è così, chiama la funzione addNumber con number come argomento e assegna il risultato alla variabile newValue. Se op non è uguale a plus, chiama invece la funzione subtractNumber e assegna il risultato a newValue.

Dopo aver calcolato il nuovo valore, la funzione changeColor viene chiamata con newValue e displayCounter come argomenti. Questa funzione cambia il colore del testo visualizzato sul counter in base al valore di newValue.

Infine, il valore di newValue viene assegnato al textContent del displayCounter, aggiornando così il valore visualizzato sul counter.

In sintesi, la funzione updateCounter gestisce l’aggiornamento del valore del counter in base all’operatore specificato e aggiorna il colore del testo visualizzato sul counter.    

Gli eventi vengono, come di seguito, gestiti:

```javascript
btnContainer.addEventListener("click", (e)=>{
    let operation = e.target.closest("button");
    if (operation!=null){
        updateCounter(operation);
    };
}) 
 ``` 
Viene aggiunto un gestore di eventi al contenitore dei pulsanti, btnContainer.  Quando si verifica un evento di click, la funzione verifica se l’elemento cliccato è un pulsante all’interno del btnContainer.

Se l’elemento cliccato è un pulsante (operation != null), allora la funzione updateCounter viene chiamata con l’elemento pulsante come argomento. Questo permette di eseguire un’operazione specifica (come incrementare o decrementare il counter) in base al pulsante cliccato.

In sintesi, questa funzione consente di gestire le interazioni dell’utente con i pulsanti nel btnContainer e di aggiornare il counter di conseguenza. 

```javascript
reloadBtn.addEventListener("click", ()=>{
    displayCounter.textContent = 0;
    displayCounter.style.color = "White";
})
 ``` 

Questo evento aggiunge un ascoltatore al pulsante reloadBtn. Quando l’utente clicca sul pulsante, il contenuto del displayCounter viene reimpostato a 0 e il colore del testo viene cambiato in bianco. In pratica, questo evento resetta il counter e ripristina il colore del testo ogni volta che l’utente clicca sul pulsante reloadBtn. Questa funzionalità è utile per ripristinare lo stato del counter e prepararlo per un nuovo conteggio.


## Links

[counter](https://dora2607.github.io/Progetto-JavaScript-Basics-di-Addolorata-Sparagno/): per provare l'applicazione

## Ringraziamenti 
Vorrei esprimere la mia profonda gratitudine a start2impact per avermi fornito le conoscenze necessarie per realizzare questa applicazione. Grazie per avermi dato gli strumenti per trasformare un’idea in una realtà funzionante. Grazie!