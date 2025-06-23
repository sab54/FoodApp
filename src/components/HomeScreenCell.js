import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Cell } from 'react-native-tableview-simple';

export default function HomeScreenCell(props) {
  return (
    <View style={styles.wrapper}>
      <Cell
        onPress={props.action}
        cellStyle="Custom"
        highlightUnderlayColor="#ccc"
        style={styles.cell}
      >
        <View style={styles.imageContainer}>
          <Image source={props.imgUri} style={styles.image} />
          <View style={styles.etaBox}>
            <Text style={styles.etaText}>{props.eta}{"\n"}mins</Text>
          </View>
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subtitle}>{props.tagline}</Text>
        </View>
      </Cell>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
  marginTop: 12,
  marginBottom: 16,

},
  cell: {
    height: 290,
    backgroundColor: 'transparent',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    height: 200, // Reduced so there’s room for text
    width: '100%',
    borderRadius: 8,
  },
  etaBox: {
    position: 'absolute',
    bottom: -30,
    right: 10,
    backgroundColor: 'black',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  etaText: {
    fontWeight: 'bold',
    color:'white',
    fontSize: 16,
    textAlign: 'center',
  },
  textBlock: {
    paddingTop: 8,
    paddingHorizontal: 10,
  },
  title: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#aaa',
  },
});
