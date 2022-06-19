import React, {useState} from 'react'

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);
    const submitForm = (e) => {
        e.preventDefault()
        const newEntry = {id:new Date().getTime().toString, email:email, password:password}
        setAllEntry([...allEntry, newEntry]);
        setEmail("")
        setPassword("")
    }
    return (
        <>  
            <form onSubmit={submitForm} action="#" className="d-block mx-auto w-50 mt-5">
                <h2 className="mb-4 pt-2">Login Form</h2>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Enter Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete="off"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Type your Password Here</label>
                    <input type="password" className="form-control" id="password" placeholder="" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            <div>
                {
                    allEntry.map((curElem)=>{
                        return(
                            <div className="showDetails">
                                <ul>
                                    <li>{curElem.id}</li>
                                    <li>{curElem.email}</li>
                                    <li>{curElem.password}</li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Login
