import axios from 'axios'
import { useEffect, useState } from 'react';
 
const Produtos = () => {
    //Estado para guardar a lista de pizzas
    const [pizzas,setPizzas] = useState(['Calabreza','Muçarela']);
   // Consumir as pizzas da rota do backend
   axios.get("")
   //Consumir Pizzas da rota do backend
   axios.get("https://172.19.0.49/pizzariaoficial/api/v1/produto") 
   .then(response => setPizzas(response.data.data))
   .catch(error => console.log(error))

    // Mapeamento das pizzas da lista (iteração)
    const listaPizzas = pizzas.map(pizza =>
        <li key={pizza}>{pizza.nome}</li>);
    return(
    <>
        <h3>Listagem de Produtos</h3>
        <ul>
            {listaPizzas}
        </ul>
    </>
    )
}
export default Produtos