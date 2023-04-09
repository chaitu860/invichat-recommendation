import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';

 
const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
          
            console.log(user);
            if(user.email!=="sridar@gmail.com"){
              props.setPro()
            }
            props.setRec();
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <>
            <main className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>        
                <section>
                    <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">                                            
                        <h3 className="text-center"> Login </h3>                       
                                                       
                        <form>                                              
                            <div>
                                <label htmlFor="email-address">
                                    Email address::{'     '}
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password::{'     '}
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div>
                                <button 
                                className="border-0 px-3 py-2 text-white fw-bold w-100 text-center"
            style={{ background: "#ffd333" }}                                   
                                    onClick={onLogin}                                        
                                >      
                                    Login                                                                  
                                </button>
                            </div>                               
                        </form>
                       
                        <p className="text-sm text-white text-center">
                            No account yet? {' '}
                           
                        </p>
                                                   
                    </div>
                </section>
            </main>
        </>
    )

}
 
export default Login