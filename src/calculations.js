import dayjs from "dayjs";

export const calculationBiorhythm = (birthDate, targetDate, cycle) => {
  const birthDay = dayjs(birthDate).startOf("day");
  const targetDay = dayjs(targetDate).startOf("day");
  const diff = targetDay.diff(birthDay, "days");
  return Math.sin((2 * Math.PI * diff) / cycle);
};

export const calculationBiorhythms = (birthDate, targetDate) => {
  return {
    date: targetDate,
    physical: calculationBiorhythm(birthDate, targetDate, 23),
    emotional: calculationBiorhythm(birthDate, targetDate, 28),
    intellectual: calculationBiorhythm(birthDate, targetDate, 33)
  };
};

export const calculateBiorhythmSeries = (birthDate, StartDate, size) => {
  const series = [];
  const startDay = dayjs(StartDate).startOf("day");
  for (let i = 0; i < size; i++) {
    const targetDate = startDay.add(i, "days").toISOString();
    series.push(calculationBiorhythms(birthDate, targetDate));
  }
  return series;
};
