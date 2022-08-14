const Profil =({children,FulName,Profession,Bio,handleName})=>{
    return(
        <>
        
        <h1>  {FulName} </h1>
        <h3> <span> STREET DEFENSE SYSTEM</span> est un {Profession} </h3>
        <ul>
                {
                  Bio.map((el,i,t)=> <li>{el}</li>)
                }
            </ul>
            <div className='pic'>
        {
            children
        }     
        <button onClick={()=>handleName('SDS')}>AlertName</button>
        </div>
        </>
    )

}
export default Profil;