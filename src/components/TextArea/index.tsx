import React from "react";
import { TextInput, TextInputProps } from "react-native";

import styles from "./styles";

const TextArea: React.FC<TextInputProps> = ({ ...rest }) => {
  return (
    <TextInput style={styles.container} {...rest} textAlignVertical="top" />
  );
};

export default TextArea;
