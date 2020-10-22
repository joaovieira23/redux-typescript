import React from 'react';
import logo from '../../assets/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import { signInRequest } from '../../store/modules/auth/actions';
import { StoreState } from '../../store/createStore';

const SignIn: React.FC = () => {
  const { loadingSignInRequest, isSignedIn, error, token } = useSelector((state: StoreState) => state.auth)
  // console.log(loadingSignInRequest);
  const dispatch = useDispatch();

  console.log('LOADING: ', loadingSignInRequest);
  console.log('SIGNED: ', isSignedIn);
  console.log('ERROR: ', error);
  console.log('TOKEN: ', token);

  return (
    <div className="sign-in-page">
      <img src={logo} alt="CL Logo" />
      <input type="text" defaultValue="test@email.com" />
      <input type="password" defaultValue="12345678" />
      <button
        onClick={() =>
          dispatch(signInRequest({
            email: 'joaovictorvieira.23@hotmail.com',
            password: '1234567'
          }))
        }>{loadingSignInRequest ? 'Carregando...' : 'Entrar'}
      </button>
    </div>
  );
}

export default SignIn;