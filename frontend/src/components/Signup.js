import React, {useState} from 'react';

import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import {auth } from '../firebase'
 
const Signup = (props) => {
   
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            if(user.email!=="sridar@gmail.com"){
                props.setPro()
              }
            props.setRec();
            
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <main className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>        
        <section>
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
                <div>                  
                    <h1 className="text-center"> SignUp </h1>                                                                            
                    <form>                                                                                            
                        <div>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>

                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>                                             
                        
                        <button
                         className="border-0 px-3 py-2 text-white fw-bold w-100 text-center"
            style={{ background: "#ffd333" }} 
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Sign up                                
                        </button>
                                                                     
                    </form>
                   
                    <p>
                        Already have an account?{' '}
                       
                    </p>                   
                </div>
            </div>
        </section>
    </main>
  )
}
 
export default Signup