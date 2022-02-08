import React from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';

export default function AppModal({item, modalVisible, onClose}) {
  return (
    <View style={[styles.centeredView]}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onClose}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onClose}
          style={[styles.centeredView, styles.backgroundColor]}>
          <View style={[styles.modalView]}>
            {Object.keys(item).length ? (
              <>
                <View style={styles.alignItemsCenter}>
                  <Image
                    source={{uri: item?.avatar_url}}
                    style={styles.avatar}
                  />
                  <Text style={[styles.heading, styles.fontSize18]}>
                    {item?.name}
                  </Text>
                </View>
                <View style={styles.detailsContainer}>
                  <View style={styles.alignItemsCenter}>
                    <Text style={styles.heading}>Followers</Text>
                    <Text>{item?.followers ?? 'No Data'}</Text>
                  </View>
                  <View style={styles.alignItemsCenter}>
                    <Text style={styles.heading}>Following</Text>
                    <Text>{item?.following ?? 'No Data'}</Text>
                  </View>
                  <View style={styles.alignItemsCenter}>
                    <Text style={styles.heading}>Location</Text>
                    <Text>{item?.location ?? 'No Data'}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                  <Text style={styles.closeText}>x</Text>
                </TouchableOpacity>
              </>
            ) : (
              <ActivityIndicator />
            )}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    padding: 20,
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderRadius: 100,
    backgroundColor: '#333',
    position: 'absolute',
    top: -10,
    right: -10,
    zIndex: 1000,
  },
  closeText: {fontSize: 16, color: '#fff'},
  heading: {
    fontWeight: 'bold',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 10,
  },
  alignItemsCenter: {alignItems: 'center'},
  backgroundColor: {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
  fontSize18: {fontSize: 18},
});
