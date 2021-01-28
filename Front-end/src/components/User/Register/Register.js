import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';
import * as vua from '../../../assets/uniforme.png'
function initialState() {
  return { user: '', password: '' };
}


async function login({ user, password }) {
  if (user === "", password === "") {
    return { error: 'E necessario digitar as credenciais' }

  }
  else if (user && password) {
    
    try {
      // const result = await axios.post('http://localhost:3333/users', {
        const result = await axios.post('https://a825d3b33a62.ngrok.io/users', {
        email: user,
        password: password,
      })

      if (result.status !== 200) {
        return { error: 'Usuário ou senha inválido' };

      }
    } catch (e) { if (e) { return { error: 'Usuário ou senha inválido' } } }



  }
  return { error: null }

}




const Register = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);

  const history = useHistory();


  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }





  async function onSubmit(event) {
    event.preventDefault();
    const { error } = await login(values);

    if (error === null) {



      return history.push('/login');
    }
    setError(error);
    setValues(initialState);
  }






  return (
    <div className="user-login">
      <h1 className="userLoginTitle"><img style={{width:180, height:60}} src={vua} alt="avengers-font" border="0"/></h1>
      <form onSubmit={onSubmit}>
        <div className="userLoginFormControl">
          <label htmlFor="user">Usuário</label>
          <input
            id="user"
            type="text"
            name="user"
            onChange={onChange}
            value={values.user}
            placeholder="Email"
          />
        </div>
        <div className="userLoginFormControl">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
            placeholder="Password"
          />
        </div>
        {error && (
          <div className="user-login__error">{error}</div>
        )}
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Registrar
        </UIButton>
      </form>
    </div>
  )
}

export default Register