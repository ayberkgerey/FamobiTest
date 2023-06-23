import React, {useContext, useState} from 'react';
import {
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ScrollView,
} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {GameContext} from '../context/GameContext';

const FilterModal: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {getByPlatform, getByCategory} = useContext(GameContext);

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
            <ScrollView style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Platform Filter</Text>
                <View style={styles.modalLine} />
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getByPlatform('PC (Windows)');
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>PC (Windows)</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getByPlatform('Web Browser');
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>Web Browser</Text>
                </TouchableOpacity>
                <Text style={styles.modalTitle}>Category Filter</Text>
                <View style={styles.modalLine} />
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getByCategory('Action RPG');
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>Action RPG</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getByCategory('ARPG');
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>ARPG</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getByCategory('Battle Royale');
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>Battle Royale</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getByCategory('Card Game');
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>Card Game</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getByCategory('Fantasy');
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>Fantasy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getByCategory('Fighting');
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>Fighting</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getByCategory('MMORPG');
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>MMORPG</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getByCategory('MMOARPG');
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>MMOARPG</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getByCategory('MMO');
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>MMO</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getByCategory('MOBA');
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>MOBA</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getByCategory('Racing');
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>Racing</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getByCategory('Shooter');
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>Shooter</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getByCategory('Social');
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>Social</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getByCategory('Sports');
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>Sports</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => {
                    getByCategory('Strategy');
                    closeModal();
                  }}>
                  <Text style={styles.modalText}>Strategy</Text>
                </TouchableOpacity>
                <View style={{marginBottom: 50}} />
              </View>
            </ScrollView>
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
    paddingTop: 100,
    paddingBottom: 80,
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'rgb(20,20,37)',
    borderRadius: 8,
    borderColor: 'aqua',
    borderWidth: 2,
    padding: 15,
  },
  modalContent: {
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 18,
    color: 'white',
    marginTop: 15,
    width: '50%',
    height: 35,
    alignSelf: 'center',
    marginRight: 30,
  },
  modalButton: {
    height: 35,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  modalLine: {
    width: '100%',
    borderColor: 'aqua',
    borderBottomWidth: 1,
    marginTop: 10,
  },
});

export default FilterModal;
