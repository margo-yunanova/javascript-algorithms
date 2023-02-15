const arraySum = (array) => array.reduce((sum, item) => sum + item, 0);

const meeting = (rooms, need) => {
  if (need === 0) return "Game On";
  const allFreeChairs = rooms.reduce((freeChairs, [persons, chairs]) => {
    if (arraySum(freeChairs) >= need) return freeChairs;
    else {
      if (persons.length >= chairs) return [...freeChairs, 0];
      const howChairsNeed = need - arraySum(freeChairs); //1
      const howChairsInRoom = chairs - persons.length; //5

      return [...freeChairs, Math.min(howChairsInRoom, howChairsNeed)];
    }
  }, []);
  return arraySum(allFreeChairs) >= need ? allFreeChairs : 'Not enough!';
};
