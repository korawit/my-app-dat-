function Item(props){
        return(<li>{props.id} {props.name} {props.isPacked&&'✔️'}</li>);
}

export default function ItemList(){
    const items=[{id:0,name:"Sunglasses",isPacked: true},
                 {id:1,name:"Towel",isPacked: false},
                 {id:2,name:"Shampoo",isPacked:true},
                 {id:3,name:"Powerbank",isPacked:true}];
    const listItems=items.map(i=><Item key={i.id} name={i.name} isPacked={i.isPacked}/>);
    const filterItems=items.filter(i=>i.name.includes("S"));
    const filterlistItems=filterItems.map(i=><Item key={i.id} name={i.name}/>);
    return (
        <>
            <h1> Items include "S"</h1>
            <ul>{filterlistItems}</ul>
            <h1>To pack list</h1>
            <ul>{listItems}</ul>
            
        </>
    );
}