import { Arrival } from "./arrival/Arrival";
import { OCEAN_SUNSET_LOCATION_ID } from "./departure/helpers/getOceanSunsetLocation";
import { Departure } from "./departure/Departure";
import { Route, Switch } from "wouter";
import { Intro } from "./Intro";
import { RedirectionPage } from "./RedirectionPage";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Intro} />
      <Route path="/departure" component={Departure} />
      <Route path="/arrival/:cityId">
        {(params) => <Arrival cityId={params.cityId} sunsetOcean={null} />}
      </Route>
      <Route path="/arrival/ocean/:nameAscii/:lat/:lng">
        {(params) => (
          <Arrival
            cityId={null}
            sunsetOcean={{
              id: OCEAN_SUNSET_LOCATION_ID,
              name: params.nameAscii,
              nameAscii: params.nameAscii,
              lat: parseFloat(params.lat),
              lng: parseFloat(params.lng),
            }}
          />
        )}
      </Route>
      <Route>
        <RedirectionPage />
      </Route>
    </Switch>
  );
};

export default App;
