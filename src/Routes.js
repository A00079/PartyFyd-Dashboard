import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { WithLayoutRoute } from "./routers";
import { PublicLayout, SecondaryPublicLayout } from "./layouts";

// const LandingPage = lazy(() => import("./pages/LandingPage"));

import Home from "./pages/Home";
import ComposeEmails from "./pages/ComposeEmails";
import { AddPlansPackages, ViewPlansPackages } from "./pages/PlansPackages/components";
import { AddCities } from "./pages/ManageCities/components";
import { ManageBanners } from "./pages/ManageBanners/components";
import { AddItems } from "./pages/ManageItems/components";
import { AddNewEmployee, ViewEmployee } from "./pages/ManageEmployees/components";
import { AddNewVendors } from "./pages/ManageVendors/components";
import { ManageCakes } from "./pages/ManageCakes/components";
import { ManageUtilities } from "./pages/ManageUtilities/components";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <WithLayoutRoute
          exact
          path="/Home"
          layout={PublicLayout}
          component={Home}
        />
        <WithLayoutRoute
          exact
          path="/partyfyd-cpanel"
          layout={SecondaryPublicLayout}
          component={Signup}
        />
        <WithLayoutRoute
          exact
          path="/compose-email"
          layout={PublicLayout}
          component={ComposeEmails}
        />
        <WithLayoutRoute
          exact
          path="/add-packages"
          layout={PublicLayout}
          component={AddPlansPackages}
        />
        <WithLayoutRoute
          exact
          path="/view-packages"
          layout={PublicLayout}
          component={ViewPlansPackages}
        />
        <WithLayoutRoute
          exact
          path="/manage-cities"
          layout={PublicLayout}
          component={AddCities}
        />
        <WithLayoutRoute
          exact
          path="/banners"
          layout={PublicLayout}
          component={ManageBanners}
        />
        <WithLayoutRoute
          exact
          path="/manage-items"
          layout={PublicLayout}
          component={AddItems}
        />
        <WithLayoutRoute
          exact
          path="/create-employee"
          layout={PublicLayout}
          component={AddNewEmployee}
        />
        <WithLayoutRoute
          exact
          path="/view-employee"
          layout={PublicLayout}
          component={ViewEmployee}
        />
        <WithLayoutRoute
          exact
          path="/create-vendor"
          layout={PublicLayout}
          component={AddNewVendors}
        />
        <WithLayoutRoute
          exact
          path="/manage-cakes"
          layout={PublicLayout}
          component={ManageCakes}
        />
        <WithLayoutRoute
          exact
          path="/manage-utilities"
          layout={PublicLayout}
          component={ManageUtilities}
        />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
};

export default Routes;
