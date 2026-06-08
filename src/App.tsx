import { Arrival } from "./arrival/Arrival";
import { OCEAN_SUNSET_LOCATION_ID } from "./departure/helpers/getOceanSunsetLocation";
import { Departure } from "./departure/Departure";
import { Route, Router, Switch } from "wouter";
import { Intro } from "./Intro";
import { RedirectionPage } from "./RedirectionPage";
import { useHashLocation } from "wouter/use-hash-location";

const App: React.FC = () => {
  return (
    <Router hook={useHashLocation}>
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
    </Router>
  );
};

export default App;
