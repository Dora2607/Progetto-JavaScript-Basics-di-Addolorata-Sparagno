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

Nelle prossime righe, illustrerò le logiche che ho adottato per implementare il progetto del counter. Ho iniziato suddividendo il problema in diverse parti, come segue:

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
Questa funzione aggiunge un gestore di eventi al contenitore dei pulsanti, btnContainer.  Quando si verifica un evento di click, la funzione verifica se l’elemento cliccato è un pulsante all’interno del btnContainer.

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