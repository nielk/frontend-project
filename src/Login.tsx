import * as React from 'react';

import Input from './components/Input';
import Typography from './components/Typography';
import { Form } from './containers/LoginContainer';

type Props = {
  readonly form: Form;
  readonly onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Login = ({ onSubmit }: Props) => (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <form onSubmit={onSubmit}>
      <div style={{ width: 275 }}>
        <Typography variant="label">Adresse email</Typography>
        <Input defaultValue="" placeholder="email" />
      </div>
      <div style={{ width: 275 }}>
        <Typography variant="label">Mot de passe</Typography>
        <Input defaultValue="" type="password" placeholder="password" />
      </div>
    </form>
  </div>
);

export default Login;
