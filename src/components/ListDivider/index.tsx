import React from "react";
import { View } from "react-native";

import styles from "./styles";

type Props = {
  isCentered?: boolean;
};

const ListDivider: React.FC<Props> = ({ isCentered }) => {
  return (
    <View
      style={[
        styles.container,
        isCentered
          ? { marginVertical: 12 }
          : { marginTop: 2, marginBottom: 31 },
      ]}
    />
  );
};

export default ListDivider;
