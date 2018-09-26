import * as React from 'react';

import Api from '../api';

import Login from '../Login';

type Field = {
  readonly value: string;
  readonly label: string;
  readonly errors: ReadonlyArray<FieldError>;
};

type FieldError = {
  readonly message: string;
};

export type Form = {
  readonly email: Field;
  readonly password: Field;
};

type State = {
  readonly form: Form;
};

class LoginContainer extends React.Component<{}, State> {
  readonly state = {
    form: {
      email: {
        value: '',
        label: 'Adresse email',
        errors: []
      },
      password: {
        value: '',
        label: 'Mot de passe',
        errors: []
      }
    }
  };

  // readonly validateForm = () => {};

  readonly login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Api.login('', '').then((res) => {
      // tslint:disable-next-line
      console.log(res)
    });
  };

  render() {
    return <Login form={this.state.form} onSubmit={this.login} />;
  }
}

export default LoginContainer;
