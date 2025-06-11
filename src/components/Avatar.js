
const Avatar=(props)=>{
    const {name,gender,image}=props;
    return(
        <>
         <h3>Hello {gender?'Mr':'Miss'} {name}!</h3>
         <img src={image} width={150} height={150}/>
        </>
    );
}
export default Avatar;