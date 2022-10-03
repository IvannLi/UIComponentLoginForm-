import { Button, Loader } from 'semantic-ui-react'
import LoginForm from '../comps/LoginForm';

//the router and states are mostly used in the page for data/information state managements
import {useRouter} from 'next/router';
import {useState} from 'react';

export default function Home() {
  
  //before, during, after 
  const [loginState, setLoginState] = useState("before")

  const r = useRouter();



{/*
  const HandleButton = () =>{
    if(loginState === "before"){
      setLoginState("during");
    } else if (loginState === "during"){
      setLoginState("after");
    }

    if(loginState === "after"){
      r.push("/dashboard");
    }
  }
*/}



  const Login = async () => {
    setLoginState("during");

    //it's going to take time to an "endpoint" to see if your user credentials are legit 
    //mock of the time passing -> this code is useless
    await new Promise(resolve=>setTimeout(resolve, 2000));

    setLoginState("after");

    //it's going to stall for 1-2 seconds
    //mock of the time passing -> this code is useless
    await new Promise(resolve=>setTimeout(resolve, 2000));

    r.push("/dashboard")
  }



  return (
    <div>
    {/*<Button color={c} onClick={()=>Login()}>
        {btn_txt}
        {loginState === "during" && <Loader active/>}
      </Button> */}
        
        <LoginForm
        loginState={loginState}
        onLoginClick={()=>Login()} 
        />
    </div>
  )
}
