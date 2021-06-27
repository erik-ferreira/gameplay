import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ButtonAdd from "../../components/ButtonAdd";
import CategorySelect from "../../components/CategorySelect";
import Profile from "../../components/Profile";
import ListHeader from "../../components/ListHeader";
import Appointments from "../../components/Appointments";
import ListDivider from "../../components/ListDivider";
import Background from "../../components/Background";

import styles from "./styles";

function Home() {
  const navigation = useNavigation();

  const [category, setCategory] = useState("");
  const [appointments, setAppointments] = useState([
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 ás 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 ás 20:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ]);

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleNavigateAppointmentsDetail() {
    navigation.navigate("AppointmentsDetails");
  }

  function handleNavigateAppointmentsCreate() {
    navigation.navigate("AppointmentsCreate");
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleNavigateAppointmentsCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <ListHeader title="Partidas agendadas" subtitle="Total 6" />

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Appointments
            onPress={handleNavigateAppointmentsDetail}
            data={item}
          />
        )}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        contentContainerStyle={{
          paddingBottom: 70,
        }}
      />
    </Background>
  );
}

export default Home;
