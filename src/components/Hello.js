const Hello=(props)=>{
    const {who,age}=props;
    return (
        <h3>Hello {who}! {age?`Age ${age}`:''}</h3>
    );
}