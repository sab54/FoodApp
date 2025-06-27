import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import { TableView, Section, Cell } from 'react-native-tableview-simple';

export default function MenuScreen({ route }) {
  const { items } = route.params;

  return (
    <ScrollView>
      <TableView>
        {items.map((section, index) => (
          <Section key={index} header={section.title} >
            {section.contents.map((item, idx) => (
              <Cell
                key={idx}
                cellContentView={
                  <View style={styles.row}>
                    {item.image && (
                      <Image
                        source={item.image}
                        style={styles.image}
                        resizeMode="cover"
                      />
                    )}
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                }
              />
            ))}
          </Section>
        ))}
      </TableView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 12,
  },
  title: {
    fontSize: 20,
  },
});
