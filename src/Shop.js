import './Shop.css';
import { useState } from 'react';
function Item(props){
    return(<div onClick={()=>props.callback(props.id)}>
        <img src={props.img} width={200} height={200}/><br/>
        id: {props.id}<br/>
        Name: {props.name}<br/>
        Price: {props.price}<br/>
    </div>);
}
export default function Shop(){
    const [cart,setCart]=useState([]);
    const handleClick=id=>{
        alert("Add success!");
        setCart([...cart,products[id]]);
    }
    const clearCart=()=> {
        alert("Clear success!");
        setCart([]); }
    let total=0;
    const products=[
        {id:0,name:"Notebook Acer Swift",price:45900,img:"https://img.advice.co.th/images_nas/pic_product4/A0147295/A0147295_s.jpg"},
        {id:1,name:"Notebook Asus Vivo",price:19900,img:"https://img.advice.co.th/images_nas/pic_product4/A0146010/A0146010_s.jpg"},
        {id:2,name:"Notebook Lenovo Ideapad",price:32900,img:"https://img.advice.co.th/images_nas/pic_product4/A0149009/A0149009_s.jpg"},
        {id:3,name:"Notebook MSI Prestige",price:54900,img:"https://img.advice.co.th/images_nas/pic_product4/A0149954/A0149954_s.jpg"},
        {id:4,name:"Notebook DELL XPS",price:99900,img:"https://img.advice.co.th/images_nas/pic_product4/A0146335/A0146335_s.jpg"},
        {id:5,name:"Notebook HP Envy",price:46900,img:"https://img.advice.co.th/images_nas/pic_product4/A0145712/A0145712_s.jpg"}];
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