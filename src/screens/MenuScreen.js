// Import core React functionality and hooks
import React, { useState } from 'react';

// Import standard components from React Native
import {
  ScrollView,
  Image,
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';

// Import structured list components
import { TableView, Section, Cell } from 'react-native-tableview-simple';

// Import toast notifications for feedback on actions
import Toast from 'react-native-toast-message';

// Custom icon for vegetarian items (green dot inside box)
const VegIcon = () => (
  <View style={styles.vegIcon}>
    <View style={styles.vegDot} />
  </View>
);

// Custom icon for non-vegetarian items (brown triangle inside box)
const NonVegIcon = () => (
  <View style={styles.nonVegIcon}>
    <View style={styles.nonVegTriangle} />
  </View>
);

// Main menu screen displaying categorized dish lists
export default function MenuScreen({ route }) {
  const { items } = route.params; // Extract menu sections passed from Home
  const [selectedItem, setSelectedItem] = useState(null); // Handle selected item state

  // Triggered when 'Add to Basket' is pressed
  const handleAddToBasket = () => {
    Toast.show({
      type: 'success',
      text1: 'Added to Basket',
      text2: `${selectedItem?.title} has been added`,
      visibilityTime: 2000,
    });
    setSelectedItem(null); // Close modal after action
  };

  return (
    <>
      {/* Scrollable menu display */}
      <ScrollView>
        <TableView>
          {items.map((section, index) => (
            <Section key={index} header={section.title}>
              {section.contents.map((item, idx) => (
                <Cell
                  key={idx}
                  isDisabled={item.inStock === false}
                  onPress={() => item.inStock && setSelectedItem(item)}
                  cellContentView={
                    <View style={[styles.row, !item.inStock && styles.disabledRow]}>
                      {/* Dish image thumbnail */}
                      {item.image && (
                        <Image
                          source={item.image}
                          style={[
                            styles.image,
                            !item.inStock && styles.disabledImage,
                          ]}
                          resizeMode="cover"
                        />
                      )}
                      <View>
                        <View style={styles.titleRow}>
                          {/* Veg/Non-Veg indicator */}
                          {item.type === 'veg' && <VegIcon />}
                          {item.type === 'nonveg' && <NonVegIcon />}
                          <View style={styles.titleColumn}>
                            <Text
                              style={[
                                styles.title,
                                !item.inStock && styles.disabledText,
                              ]}
                            >
                              {item.title}
                            </Text>
                            {!item.inStock && (
                              <Text style={styles.outOfStock}>(Out of stock)</Text>
                            )}
                          </View>
                        </View>
                      </View>
                    </View>
                  }
                />
              ))}
            </Section>
          ))}
        </TableView>

        {/* Item detail modal on selection */}
        <Modal
          visible={!!selectedItem}
          transparent
          animationType="slide"
          onRequestClose={() => setSelectedItem(null)}
        >
          <View style={styles.modalBackdrop}>
            <View style={styles.modalContent}>
              {/* Close button */}
              <Pressable
                style={styles.modalCloseIcon}
                onPress={() => setSelectedItem(null)}
              >
                <Text style={styles.modalCloseText}>×</Text>
              </Pressable>

              {/* Enlarged image preview */}
              {selectedItem?.image && (
                <Image
                  source={selectedItem.image}
                  style={styles.modalImage}
                  resizeMode="cover"
                />
              )}

              {/* Modal content display */}
              <Text style={styles.modalTitle}>{selectedItem?.title}</Text>
              <Text style={styles.modalText}>
                {selectedItem?.type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
              </Text>
              <Text style={styles.modalText}>
                £{selectedItem?.price || 'N/A'}
              </Text>

              <Pressable style={styles.basketButton} onPress={handleAddToBasket}>
                <Text style={styles.basketText}>Add to Basket</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </ScrollView>

      {/* Required toast container for feedback messages */}
      <Toast />
    </>
  );
}

// Component-scoped styles for layout and UI elements
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
    fontSize: 18,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  titleColumn: {
    flexDirection: 'column',
  },
  outOfStock: {
    color: 'red',
    fontSize: 12,
    marginTop: 2,
  },
  disabledRow: {
    opacity: 0.4,
  },
  disabledImage: {
    opacity: 0.4,
  },
  disabledText: {
    color: '#888',
    fontStyle: 'italic',
  },
  vegIcon: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vegDot: {
    width: 8,
    height: 8,
    backgroundColor: 'green',
    borderRadius: 4,
  },
  nonVegIcon: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: 'brown',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nonVegTriangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'brown',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    position: 'relative',
  },
  modalCloseIcon: {
    position: 'absolute',
    top: 10,
    right: 14,
    zIndex: 1,
  },
  modalCloseText: {
    fontSize: 28,
    color: '#888',
  },
  modalImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  basketButton: {
    backgroundColor: '#008000',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginTop: 10,
  },
  basketText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
