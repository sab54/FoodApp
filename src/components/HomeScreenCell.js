import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Cell } from 'react-native-tableview-simple';

// Get screen width (static, not reactive to rotation)
const { width } = Dimensions.get('window');

export default function HomeScreenCell(props) {
  return (
    <Cell
      height={290}
      backgroundColor="transparent"
      highlightUnderlayColor="#ccc"
      onPress={props.action}
      cellContentView={
        <View style={styles.container}>
          <Image source={props.imgUri} style={styles.image} />
          <View style={styles.etaBox}>
            <Text style={styles.etaText}>
              {props.eta}
              {'\n'}mins
            </Text>
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
    alignSelf: 'center',
    width: width - 20,
    height: 290,
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: Math.min(width * 0.5, 200),
    borderRadius: 8,
  },
  etaBox: {
    position: 'absolute',
    bottom: '25%',
    right: 15,
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 27,
    paddingVertical: 10,
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
