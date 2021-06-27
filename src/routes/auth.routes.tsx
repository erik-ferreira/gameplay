import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import AppointmentsDetails from "../pages/AppointmentsDetails";
import AppointmentsCreate from "../pages/AppointmentsCreate";

import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();
const Routes = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentsDetails" component={AppointmentsDetails} />
      <Screen name="AppointmentsCreate" component={AppointmentsCreate} />
    </Navigator>
  );
};

export default Routes;
