export const validation = (email, password, name) => {
  const emailVerification =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  const passwordVerification = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
    password
  );
  if (name) {
    const nameVerification = /^[A-Za-z][A-Za-z_]{7,29}$/.test(name);
    if (!nameVerification) return "Invalid Name";
  }
  if (!emailVerification) return "Email Id is invalid";
  if (!passwordVerification)
    return "Password is invalid. Must contain 8 chars, atleast 1 letter and 1 number";

  return null;
};
