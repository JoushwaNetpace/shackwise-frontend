export const getRandomPercentage = (): 0 | 25 | 50 | 75 | 100 => {
  const percentages: (0 | 25 | 50 | 75 | 100)[] = [0, 25, 50, 75, 100];
  return percentages[Math.floor(Math.random() * percentages.length)];
};

export const formatPrice = (price: number): string => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

  return `${formattedPrice} USD`;
};

export const getInitials = (name: string): string =>
  name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
