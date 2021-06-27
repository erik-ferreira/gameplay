import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";

import Guild, { GuildProps } from "../../components/Guild";

import ListDivider from "../../components/ListDivider";

import styles from "./styles";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

const Guilds: React.FC<Props> = ({ handleGuildSelect }) => {
  const [guilds, setGuilds] = useState([
    {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild onPress={() => handleGuildSelect(item)} data={item} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
      />
    </View>
  );
};

export default Guilds;
