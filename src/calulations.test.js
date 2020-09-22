import { calculationBiorhythms } from "./calculations";

it("calculates the physical biorhythm", () => {
  const { physical } = calculationBiorhythms("1988-01-01", "2020-09-22");
  expect(physical).toBeCloseTo(-0.9423);
});
it("calculates the emotional biorhythm", () => {
  const { emotional } = calculationBiorhythms("1988-01-01", "2020-09-22");
  expect(emotional).toBeCloseTo(-0.6235);
});
it("calculates the intellectual biorhythm", () => {
  const { intellectual } = calculationBiorhythms("1988-01-01", "2020-09-22");
  expect(intellectual).toBeCloseTo(0.9718);
});
