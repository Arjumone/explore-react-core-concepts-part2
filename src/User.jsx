export default function User({user}){
    const {name,email,id,address}=user;
    
    return (
        <div style={{border:'3px solid purple',borderRadius:'10px',padding:'15px',marginTop:'8px'}}>
            <h1>Id:{id}</h1>
            <h2>name:{name}</h2>
            <h2>Email:{email}</h2>
            <h3>city:{address.city}</h3>
        </div>
    )
}