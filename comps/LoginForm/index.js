import { Button, Loader, Input } from 'semantic-ui-react'

export default function LoginForm({
    loginState="before",
    onLoginClick=()=>{}
}){
  
    var c = "blue";
    var btn_txt = "Title";
  
  
  
    if(loginState === "before"){    
      c = "blue";
      btn_txt = "Login";
    } else if (loginState === "during"){
      c = "green";
      btn_txt = "Loading...";
    } else if (loginState === "after"){
      c = "grey";
      btn_txt = "Success!"
    }
   
   
    
    return <div>
        <h3>Login Form</h3>
        <Input 
            disabled={loginState !== "before"}
            placeholder="email" 
        />
        <Input 
            disabled={loginState !== "before"}
            placeholder="password" 
        />
        <hr />
        <Button color={c} onClick={onLoginClick}>
            {btn_txt}
            {loginState === "during" && <Loader active/>}
      </Button>
    </div>
}