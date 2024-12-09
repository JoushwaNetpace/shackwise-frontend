export const getRandomPercentage = (): 0 | 25 | 50 | 75 | 100 => {
  const percentages: (0 | 25 | 50 | 75 | 100)[] = [0, 25, 50, 75, 100];
  return percentages[Math.floor(Math.random() * percentages.length)];
};
