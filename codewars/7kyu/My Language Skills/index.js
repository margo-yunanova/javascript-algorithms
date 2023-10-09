function myLanguages(results) {
  const res = Object.entries(results).filter(([, score]) => score >= 60).sort((a, b) => b[1] - a[1])
  return res.map(([lang]) => lang);
}
