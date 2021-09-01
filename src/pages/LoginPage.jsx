import React from 'react'

const LoginPage = () => {
    return (  
        <div>
            <label>Podaj login:
                <input type="text" />
            </label>
            <br />
            <label>Poda hasło:
                <input type="password" />
            </label>
            <br />
            <button>Zaloguj</button>
        </div>
    );
}
 
export default LoginPage;