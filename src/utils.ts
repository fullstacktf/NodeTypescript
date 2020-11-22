export const assertIsNotEmpty = (value: string): string => {
  if (!value) {
    throw new Error(`${value} is an empty string`);
  }
  return value;
};

export const assertIsNumber = (value: string): number => {
  assertIsNotEmpty(value);

  const result = Number(value);
  if (isNaN(result)) {
    throw new Error(`${value} is not a number`);
  }
  return result;
};
