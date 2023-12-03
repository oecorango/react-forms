export const emailValid = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export const firstUpperCase = new RegExp(/^[A-Z]/);
export const firstNotZero = new RegExp(/^[0]/);

export const oneNumber = new RegExp(/(?=.*?[0-9])+/);
export const oneUpperCase = new RegExp(/(?=.*?[A-Z])+/);
export const oneLowerCase = new RegExp(/(?=.*?[a-z])+/);
export const oneSpecialChar = new RegExp(/(?=.*?[!,?,<,>,*,-,+,=,(,),%,$,#])+/);
