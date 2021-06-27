import React, { useState } from "react";
import { View, ImageBackground, Text, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import Background from "../../components/Background";
import Header from "../../components/Header";
import ListHeader from "../../components/ListHeader";
import Members from "../../components/Members";
import ListDivider from "../../components/ListDivider";
import ButtonIcon from "../../components/ButtonIcon";

import BannerImg from "../../assets/banner.png";

import styles from "./styles";
import { theme } from "../../global/styles/theme";

function AppointmentsDetails() {
  const [members, setMembers] = useState([
    {
      id: "1",
      username: "Erik Ferreira",
      avatar_url: "https://github.com/erik-ferreira.png",
      status: "online",
    },
    {
      id: "2",
      username: "Diego Fernandes",
      avatar_url: "https://github.com/diego3g.png",
      status: "offline",
    },
  ]);

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" color={theme.colors.primary} size={24} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.contentBanner}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Members data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}

export default AppointmentsDetails;
