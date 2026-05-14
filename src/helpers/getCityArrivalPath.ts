interface IGetCityArrivalPath {
  cityId: string;
}
export const getCityArrivalPath = ({ cityId }: IGetCityArrivalPath) => {
  return `/arrival/${cityId}`;
};
