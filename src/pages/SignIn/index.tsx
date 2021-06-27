import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ButtonIcon from "../../components/ButtonIcon";
import Background from "../../components/Background";

import IllustrationImg from "../../assets/illustration.png";

import styles from "./styles";

function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("Home");
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`} e organize suas {`\n`} jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
          </Text>

          <ButtonIcon onPress={handleSignIn} title="Entrar com Discord" />
        </View>
      </View>
    </Background>
  );
}

export default SignIn;
