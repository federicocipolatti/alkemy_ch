import "./Login.css"

export const Login = () => {

    const submitHandler = e => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        console.log(regexEmail.test(email));

        if (email === '' || password === '') {
            console.log('Los campos están vacíos');
            return;
        } 

        if (email !== '' && !regexEmail.test(email)) {
            console.log('Dirección de correo inválida');
            return;
        }

        if (email !== 'fedecipo@ccg.com.ar' || password !== 'fedecipo'){
            console.log('Credenciales inválidas');
            return;
        }

        console.log('Listo para enviar información!');
    }

    return(
        <form onSubmit={submitHandler} className="login">
            <label>
                <span>Correo electrónico: </span>
                <br/>
                <input type='text' name='email'></input>
            </label>
            <br/>
            <label>
                <span>Contraseña: </span>
                <br/>
                <input type='password' name='password'></input>
            </label>  
            <br/>
            <button type='submit'>Ingresar</button>
        </form>
    )
}