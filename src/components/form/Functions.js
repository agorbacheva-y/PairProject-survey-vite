export const validate = (value) => {
  if (
    value !== "" &&
    value !== null &&
    value !== undefined &&
    !value.toString().search(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/i)
  ) {
    return true;
  } else {
    return false;
  }
};
