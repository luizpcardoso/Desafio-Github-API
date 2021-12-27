import { Switch, Route } from "react-router";
import { Results } from "../Results";
import { Home } from "../Home";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/results">
        <Results></Results>
      </Route>
    </Switch>
  );
};
