import React from "react";
import { View, Text } from "react-native";
import { SvgProps } from "react-native-svg";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";
import { theme } from "../../global/styles/theme";

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckBox?: boolean;
  checked?: boolean;
};

const Category: React.FC<Props> = (props) => {
  const {
    title,
    icon: Icon,
    checked = true,
    hasCheckBox = false,
    ...rest
  } = props;
  const { secondary40, secondary50, secondary70, secondary75 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        colors={[secondary50, secondary70]}
        style={styles.container}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? secondary75 : secondary50, secondary40]}
        >
          {hasCheckBox && (
            <View style={checked ? styles.checked : styles.check} />
          )}

          <Icon width={48} height={48} />

          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
};

export default Category;
