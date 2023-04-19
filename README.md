# React - maturitní příklady
## Založení a spuštění aplikace
npx create-react-app my-app

cd my-app

npm start

### 22. AJAX, REST
* ukázka získávání dat z webového [Beers API](https://api.punkapi.com/v2/beers)
* fetch a axios

npm install -s axios


### 23. React - up/down čítač
* 2 komponenty - tlačítko a výsledek

## Přehled háků
### useState
```javascript
const [stav, metoda_pro_nastaveni_stavu] = useState(vychozi_stav);
```

### useEffect
1) spouští se neustále dokola (při každém překreslení komponenty) - bez závislostí
```javascript
useEffect(() => {
    // kód
});
```

2) spustí se jen při připojení komponenty do stromu - funkce konstruktoru, prázdné pole závislostí
```javascript
useEffect(() => {
    // kód
}, []);
```

3) spustí se při změně hodnot v závislostech - funkce observeru
```javascript
useEffect(() => {
    // kód
}, [nejaky_nesmysly]);
```

4) cleanup efekt - spustí se při odpojení komponenty ze stromu - funkce destruktoru
```javascript
useEffect(() => {
    // kód
    return () => clearTimeout(); // cleanup
}, [nejaky_nesmysly]);
```

### useCallback
* v podstatě jako useEffect, funkci pak můžeme předat do pole závislostí
* výhodnější použití u asynchronních funkcí
#### Porovnání
1) useEffect
```javascript
// funkci napíšeme v useEffectu a rovnou ji v něm zavoláme
useEffect(() => {
  const fetchData = () => {
    // kód
  }
  fetchData();
}, [searchString]);
```
2) useCallback + useEffect
```javascript
// pro vytvoření fce použijeme useCallback
const fetchData = useCallback(() => {
  // kód
}, [searchString]);

// a použijeme ji v useEffectu
useEffect(() => {
  fetchData();
}, [fetchData]);
```

### useRef
```javascript
export const Second = () => {
    const [text, setText] = useState("abcdef");
    const inp = useRef();
    return (
        <>
        <div>First</div>
        <input ref={inp} />
        <button onClick={e => {setText(inp.current.value)}}>go</button>
        <p>{text}</p>
        </>
    );
}
```
