function race(v1, v2, g) {
  if (v1 === 0 || v2 === 0) return null;

  const time = g / Math.abs(v1 - v2);
  const hours = Math.trunc(time);
  const minutes = Math.trunc((time * 60) % 60);
  const sec = Math.trunc((time * 3600) % 60);

  return [hours, minutes, sec];
}
