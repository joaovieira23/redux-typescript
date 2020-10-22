import { action } from "typesafe-actions";

export function signInRequest({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return action('@auth/SIGN_IN_REQUEST', {
    email,
    password,
  });
}

export function signInFailure() {
  return action('@auth/SIGN_IN_FAILURE');
}


export function signInSuccess({
  token,
}: {
  token: string;
}) {
  return action('@auth/SIGN_IN_SUCCESS', {
    token
  });
}