const findRarestPepe = (pepes: string[]) => {
  const total: Record<string, number> = {};

  for (const pepe of pepes) {
    total[pepe] = (total[pepe] ?? 0) + 1;
  }

  const min = Math.min(...Object.values(total));

  if (min >= 5) return "No rare pepes!";

  const sortedPepe = Object.keys(total)
    .filter((pepe) => total[pepe] === min)
    .sort();
  return sortedPepe.length === 1 ? sortedPepe[0] : sortedPepe;
};
