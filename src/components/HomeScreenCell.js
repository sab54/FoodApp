// Import core React functionalities and FontAwesome icon set
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Cell } from 'react-native-tableview-simple';

// Get screen width for responsive layout
const { width } = Dimensions.get('window');

// Define the functional component for the custom cell
export default function HomeScreenCell(props) {
  // Maintain internal state for heart (like) toggle
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);

  return (
    <Cell
      height={290} // Set fixed height for each cell
      backgroundColor="transparent"
      highlightUnderlayColor="#ccc" // Touch feedback color
      onPress={props.action} // Action passed via props on cell tap
      cellContentView={
        <View style={styles.container}>
          {/* Like (heart) icon overlay */}
          <View style={styles.heartContainer}>
            <TouchableOpacity onPress={toggleLike}>
              <Icon
                name="heart"
                size={24}
                color={liked ? 'red' : '#ccc'} // Change color based on state
              />
            </TouchableOpacity>
          </View>

          {/* Main image */}
          <Image source={props.imgUri} style={styles.image} />

          {/* ETA box positioned on top of the image */}
          <View style={styles.etaBox}>
            <Text style={styles.etaText}>
              {props.eta}
              {'\n'}mins
            </Text>
          </View>

          {/* Title, Rating, and Tagline */}
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.rating}>{props.rating}</Text>
          <Text style={styles.subtitle}>{props.tagline}</Text>
        </View>
      }
    />
  );
}

// Styling for layout and visual hierarchy
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: width - 30, // Slight margin from screen edges
    height: 290,
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: Math.min(width * 0.5, 200), // Responsive height capped at 200
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
    elevation: 5, // Shadow for Android
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
  rating: {
    fontSize: 16,
    color: '#888',
    marginLeft: 10,
    marginTop: 4,
  },
  heartContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    elevation: 3, // Add drop shadow to heart icon
  },
});
