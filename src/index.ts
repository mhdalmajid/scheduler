import { isValid, differenceInDays } from "date-fns";

const generateDaily = (start: Date, end: Date) => {
  if (!isValid(start) || !isValid(end)) return null;

  const dif = differenceInDays(start, end);
};

export const add = (a: number, b: number) => {
  return a + b;
};

console.log("hello");
