export default function Card ({index,reference,mission_name, details, src}) {
    return(
        <div key={index} ref={reference} style={{
            border: "1px solid #5a6472",
            backgroundColor:"#2c323a", margin:'20px 0', padding:'15px', display:'flex',flexDirection:'row', borderRadius:'10px'}}>
            <img src={src} style={{minWidth:'100px', width:"100px", height:'auto', objectFit:'cover'}}/>
            <div style={{paddingLeft: '20px', display:'flex',alignItems:'start', flexDirection:'column'}}>
                <h1 style={{margin:0}}>{mission_name}</h1>
                <p style={{margin:0, textAlign:'start'}}>{details}</p>
            </div>

        </div>
    )
}