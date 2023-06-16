import './Hello.css';
function Profile({children}){
    return (
    <div>
        <h1>My Profile</h1>
        {children}
        <hr/>
    </div>
    );
}
function Avatar({name,surname,age}){
    return (<>
        Name : {name} <br/>
        Surname : {surname} <br/>
        Age : {age}
    </>)
}
const Hello=(props)=>{
    return (
        <>
          <Profile>
                <Avatar {...props}/>
          </Profile>
        </>
    );
}
export default Hello;
