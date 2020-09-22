import dayjs from "dayjs";

export const calculationBiorhythm = (birthDate, targetDate, cycle) => {
  const birthDay = dayjs(birthDate).startOf("day");
  const targetDay = dayjs(targetDate).startOf("day");
  const diff = targetDay.diff(birthDay, "days");
  return Math.sin((2 * Math.PI * diff) / cycle);
};

export const calculationBiorhythms = (birthDate, targetDate) => {
  return {
    physical: calculationBiorhythm(birthDate, targetDate, 23),
    emotional: calculationBiorhythm(birthDate, targetDate, 28),
    intellectual: calculationBiorhythm(birthDate, targetDate, 33)
  };
};
