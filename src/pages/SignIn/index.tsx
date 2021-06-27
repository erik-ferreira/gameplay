import React from "react";
import { View, Text, Image, Alert } from "react-native";

import ButtonIcon from "../../components/ButtonIcon";
import Background from "../../components/Background";

import IllustrationImg from "../../assets/illustration.png";

import { useAuth } from "../../hooks/auth";

import styles from "./styles";

function SignIn() {
  const { user, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
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
