export default function User({user}){
    const {name,email,id}=user;
    return (
        <div style={{border:'3px solid purple',borderRadius:'10px',padding:'15px',marginTop:'8px'}}>
            <h1>Id:{id}</h1>
            <h2>name:{name}</h2>
            <h2>Email:{email}</h2>
        </div>
    )
}