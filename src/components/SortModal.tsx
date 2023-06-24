import React, {useContext, useState} from 'react';
import {
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {GameContext} from '../context/GameContext';

const SortModal: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    getAlphabeticallyOrdered,
    getByDateOrdered,
    getRelevanceOrdered,
    getPopularityOrdered,
  } = useContext(GameContext);

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
          uri="https://www.svgrepo.com/show/215734/sort-swap.svg"
          style={{marginLeft: 10}}
        />
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <TouchableWithoutFeedback onPress={handleOverlayClick}>
          <View style={styles.overlay}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getByDateOrdered();
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>Sort by Release Date</Text>
                </TouchableOpacity>
                <View style={styles.modalLine} />
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getPopularityOrdered();
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>Sort by Popularity</Text>
                </TouchableOpacity>
                <View style={styles.modalLine} />
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getRelevanceOrdered();
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>Sort by Relevance</Text>
                </TouchableOpacity>
                <View style={styles.modalLine} />
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getAlphabeticallyOrdered();
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>
                    Sort by Alphabetical Order
                  </Text>
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

export default SortModal;
