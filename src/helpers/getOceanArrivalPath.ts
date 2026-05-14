interface IGetOceanArricalPath {
  nameAscii: string;
  lat: number;
  lng: number;
}

export const getOceanArrivalPath = ({
  nameAscii,
  lat,
  lng,
}: IGetOceanArricalPath) => {
  return `/arrival/ocean/${nameAscii}/${lat}/${lng}`;
};
