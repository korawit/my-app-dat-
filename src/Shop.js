import './Shop.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
function Item(props){
    return(<div onClick={()=>props.callback(props.id)}>
        <img src={props.img} width={200} height={200}/><br/>
        id: {props.id}<br/>
        Name: {props.name}<br/>
        Price: {props.price}<br/>
    </div>);
}
export default function Shop(){
    const baseURL="http://localhost:3001";
    const [cart,setCart]=useState([]);
    const [products,setProduct]=useState([]);
    useEffect(()=>{
        axios.get(baseURL+"/api/products").then((response)=>{
            setProduct(response.data);
        });
    },[]);
    const handleClick=id=>{
        alert("Add success!");
        setCart([...cart,products[id]]);
    }
    const clearCart=()=> {
        alert("Clear success!");
        setCart([]); }
        let total=0;
        
        const productsList=products.map(item=><Item callback={handleClick} {...item}/>);
        const cartList=cart.map(item=><li>{item.id} {item.name} {item.price}</li>)
        for(let i=0;i<cart.length;i++)
            total=total+cart[i].price;
        return(<><div className="grid-container">{productsList}</div>
              <h1>Cart</h1><button onClick={()=>clearCart()}>Clear Cart</button>
              <ol>{cartList}</ol>
              <h2>Total : {total} baht</h2>
        </>);
}