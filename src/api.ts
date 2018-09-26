import 'whatwg-fetch';

const baseUrl = 'https://gojob-api-review-foc-api-li-4ylolh.gojob.tech';

const headers = {
  'Content-Type': 'application/json'
};

// type Account = {
//   readonly accountId: string;
//   readonly email: string;
//   readonly firstName: string;
//   readonly lastName: string;
//   readonly type: number;
// }

// type Auth = {
//   readonly token: string;
//   readonly firebase: string;
// }

// type Success = {
//   readonly account: Account;
//   readonly auth: Auth;
//   readonly permissions: ReadonlyArray<number>;
// };

// type Error = {
//   readonly error: string;
//   readonly message: string;
//   readonly statusCode: string;
// }

// type ApiResponse = Promise<Success | Error>;

namespace Api {
  export const login = (email: string, password: string) => {
    const url = `${baseUrl}/foc/login`;
    const body = {
      email,
      password
    };
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    };

    return fetch(url, options);
  };

  // export const forgotPassword = (email: string) => {};
}

export default Api;
