export const EmailValidation = (email: string) => {
  const emailRule = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
  const isValid = emailRule.test(email);
  return isValid;
};

export const PasswordValidation = (password: string) => {
  const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s]).{8,}$/;
  const isValid = passwordRule.test(password);
  return isValid;
};
