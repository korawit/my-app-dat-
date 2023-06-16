import {useParams,useLocation} from 'react-router-dom';
function PostItem (props){
     return (<><img src={props.src} 
        width={props.width} 
        height={props.height}/>
        <p>{props.name}<br/>{props.price}</p></>);
}
export default function Post(){
    const {id}=useParams();
    const urlstring = new URLSearchParams(useLocation().search);
    const fname=urlstring.get("fname");
    const lname=urlstring.get("lname");
    if(id==1)
        return (<PostItem name="Mac mini" price="22000" width="100" height="100"
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-mini-hero-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1670038314708" />);
    else if(id==2)
        return (<PostItem name="Macbook Pro" price="30000" width="200" height="100"
        src="https://media.cnn.com/api/v1/images/stellar/prod/230125131405-macbook-pro-14-inch-2023-review-cnnu-7.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp" />);
    return (<>Hello {fname} {lname}</>)
}