import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Cell } from 'react-native-tableview-simple';

export default function HomeScreenCell(props) {
  return (
    <Cell
      {...props}
      height={290}
      backgroundColor="transparent"
      highlightUnderlayColor="#ccc"
      onPress={props.action}
      cellContentView={
        <View style={styles.container}>
          <Image source={props.imgUri} style={styles.image} />
          <View style={styles.etaBox}>
            <Text style={styles.etaText}>{props.eta}{"\n"}mins</Text>
          </View>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subtitle}>{props.tagline}</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 290,
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  etaBox: {
    position: 'absolute',
    bottom: 60,
    right: 15,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 27,
    paddingVertical: 10,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  etaText: {
    fontWeight: '900',
    fontSize: 17,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 8,
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 10,
    marginLeft: 10,
  },
});
