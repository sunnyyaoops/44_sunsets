interface IGetLocalTimeByUtcOffset {
  timezoneOffsetMinutes: number;
}
export const getLocalTimeByUtcOffset = ({
  timezoneOffsetMinutes,
}: IGetLocalTimeByUtcOffset): Date => {
  const currentTime = new Date();
  const utcMilliseconds =
    currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
  const localTime = new Date(utcMilliseconds + timezoneOffsetMinutes * 60000);
  return localTime;
};
