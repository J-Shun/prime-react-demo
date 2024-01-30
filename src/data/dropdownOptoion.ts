interface Date {
  name: string;
  code: string;
}

const generateOptions = (start: number, end: number): Date[] => {
  const options: Date[] = [];
  for (let i = start; i <= end; i++) {
    const value = i < 10 ? `0${i}` : `${i}`;
    options.push({ name: value, code: value });
  }
  return options;
};

const years: Date[] = generateOptions(1990, new Date().getFullYear());
const months: Date[] = generateOptions(1, 12);
const dates: Date[] = generateOptions(1, 31);

export { years, months, dates };
