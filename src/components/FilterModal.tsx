import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SvgUri} from 'react-native-svg';

const FilterModal: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const handleOverlayClick = () => {
    closeModal();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal}>
        <SvgUri
          width="40"
          height="40"
          uri="https://www.svgrepo.com/show/425202/filter-market-ecommerce.svg"
          style={{marginRight: 10}}
        />
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <TouchableWithoutFeedback onPress={handleOverlayClick}>
          <View style={styles.overlay}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity style={styles.modalButton}>
                  <Text style={styles.modalText}>Platform Filter</Text>
                </TouchableOpacity>
                <View style={styles.modalLine} />
                <TouchableOpacity style={styles.modalButton}>
                  <Text style={styles.modalText}>Category Filter</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'rgb(20,20,37)',
    borderRadius: 8,
    borderColor: 'aqua',
    borderWidth: 2,
    padding: 16,
  },
  modalContent: {
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 16,
    color: 'white',
  },
  modalButton: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  modalLine: {
    width: '100%',
    borderColor: 'aqua',
    borderBottomWidth: 1,
  },
});

export default FilterModal;
