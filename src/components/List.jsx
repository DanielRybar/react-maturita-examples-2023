import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "https://api.punkapi.com/v2/beers"; // adresa API

export const List = () => {
    const [data, setData] = useState(null); // pro data z API
    const [error, setError] = useState(null); // pro chyby z API
    const [loading, setLoading] = useState(false); // načítají se stále data?

    // spustí se pouze jednou při načtení komponenty - v podstatě konstruktor
    useEffect(() => {
        setLoading(true); 
        axios.get(API_URL, { headers: "application/json" }) // získávání dat z API, formát je JSON
            .then(response => { // pokud bylo získávání dat úspěšné
                setData(response.data); 
            })
            .catch(error => { // pokud došlo k chybě
                setError(error); 
            })
            .finally(() => { // provede se v obou případech
                setLoading(false); 
        });
    }, []);


    // ukázka pomocí fetch - nemusí se nic instalovat, ale je to starší způsob + rozbaluje se JSON ručně
    /*
    useEffect(() => {
        setLoading(true);
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);  
    */


    if (loading) {
        return <p>Načítám data...</p>
    } else if (error) {
        return <p>Došlo k chybě: {error.message}</p>
    } else if (data) {
        return (
            <table style={{paddingLeft: "5%"}}>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Název</th>
                        <th>Objem</th>
                        <th>Přísady</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.image_url} alt={item.name} width={100} /></td>
                            <td><b>{item.name}</b></td>
                            <td>{item.volume.value} {item.volume.unit}</td>
                            <td>{item.ingredients.malt.map(malt => malt.name).join(", ")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    } else {
        return <p>Načítám komponentu</p>
    }
};

export default List;