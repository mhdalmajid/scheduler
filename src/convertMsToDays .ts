const typeNaN = [NaN, Infinity] as const;
function convertMsToDays<T extends number | unknown>(
  x: T
): T extends number
  ? T extends typeof typeNaN[number]
    ? undefined
    : number
  : number;

function convertMsToDays(ms: number | unknown): number | undefined {
  if (typeof ms !== "number" || Number.isNaN(ms)) return undefined;

  const msInOneSecond = 1000;
  const secondsInOneMinute = 60;
  const minutesInOneHour = 60;
  const hoursInOneDay = 24;

  const minutesInOneDay = hoursInOneDay * minutesInOneHour;
  const secondsInOneDay = secondsInOneMinute * minutesInOneDay;
  const msInOneDay = msInOneSecond * secondsInOneDay;

  return Math.ceil(ms / msInOneDay);
}

const result = convertMsToDays(1);
