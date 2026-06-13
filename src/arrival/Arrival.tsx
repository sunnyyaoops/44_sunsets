import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { ArrivalPopup } from "./popup/ArrivalPopup.tsx";
import { useEffect, useState } from "react";
import { getLocationInfo } from "./helpers/getLocationInfo";
import type { IGetLocationInfo } from "./helpers/getLocationInfo";
import { Flying } from "./Flying";
import { helicopterLeafletIcon } from "./helicopterLeafletIcon";
import { Info } from "../universeContainer/info/Info.tsx";
import { useQueries } from "@tanstack/react-query";
import { fetchWebcams } from "./helpers/fetchWebcams.ts";
import { fetchSunsetDetails } from "./helpers/fetchSunsetDetails.ts";
import { SunsetView } from "./sunsetView/SunsetView.tsx";
export const Arrival: React.FC<IGetLocationInfo> = ({
  cityId,
  sunsetOcean,
}) => {
  const sunsetLocation = getLocationInfo({ cityId, sunsetOcean });
  const { lat, lng } = sunsetLocation;
  const locationCoordinate: [number, number] = [lat, lng];
  const [flying, setFlying] = useState<boolean>(true);
  const [
    { data: sunsetDetails, isPending: isSunsetDetailsPending },
    { data: webcamsData, isPending: isWebcamsPending },
  ] = useQueries({
    queries: [
      {
        queryKey: ["sunsetDetails", lat, lng],
        queryFn: () => fetchSunsetDetails({ lat, lng }),
      },
      {
        queryKey: ["webcams", lat, lng],
        queryFn: () => fetchWebcams({ lat, lng }),
      },
    ],
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setFlying(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return flying || isSunsetDetailsPending || isWebcamsPending ? (
    <Flying />
  ) : (
    <MapContainer
      center={locationCoordinate}
      zoom={6}
      style={{ height: "100vh", width: "100vw" }}
      maxBounds={[
        [-90, lng - 180],
        [90, lng + 180],
      ]}
      maxBoundsViscosity={1}
      maxZoom={9}
      minZoom={2.5}
      zoomDelta={0.5}
      zoomControl={false}
      scrollWheelZoom="center"
      doubleClickZoom="center"
    >
      <TileLayer
        attribution="Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}.png"
      />
      <Marker
        position={locationCoordinate}
        icon={helicopterLeafletIcon}
        eventHandlers={{
          add: (e) => {
            e.target.openPopup();
          },
        }}
      >
        <Popup minWidth={600}>
          <ArrivalPopup
            sunsetLocation={sunsetLocation}
            sunsetDetails={sunsetDetails}
          />
        </Popup>
      </Marker>
      <Info buttonStyle={{ zIndex: 1001, color: "gray" }} />
      <SunsetView webcams={webcamsData || []} />
    </MapContainer>
  );
};
