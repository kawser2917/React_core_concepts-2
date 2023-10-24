export default function User({user}){
    const {name,email} = user
    return(
        <div className="box">
            <p>{name}</p>
            <p>{email}</p>
        </div>
    )
}