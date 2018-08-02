export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

export const required = value => value ? undefined : 'Required';

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const maxLength15 = maxLength(15)

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

export const minLength3 = minLength(3)

export const minCounterValue = min => value =>
  value && (value.number < min) ? `Can't be less than ${min}`: null;


export const minCounterZero = minCounterValue(0);
export const categoryMaxLength =  max => value =>
  value.category && value.category.length > max ? `Must be ${max} characters or less` : undefined

export const categoryMaxLength15 = categoryMaxLength(15);