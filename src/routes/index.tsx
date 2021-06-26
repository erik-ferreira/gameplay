import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthRoutes from "./auth.routes";

const routes = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};

export default routes;
