import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import AppModal from '../Modal/AppModal';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../../store/actions/actions';
import {GET_ONE_USERS} from '../../store/types';

export default function Item({item = {}}) {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const GlobalState = useSelector(state => state.Main);

  const toggleModal = () => setModalVisible(!modalVisible);

  const onPressName = () => {
    toggleModal();
    dispatch(getUsers(item?.login, true));
  };

  return (
    <>
      <View style={styles.listContainer}>
        <Image source={{uri: item?.avatar_url}} style={styles.avatar} />
        <View style={styles.margin10}>
          <Text onPress={onPressName} style={styles.name}>
            {item?.login}
          </Text>
          <Text style={styles.fontSize12}>{item?.url}</Text>
        </View>
      </View>

      <AppModal
        modalVisible={modalVisible}
        onClose={() => {
          toggleModal();
          dispatch({type: GET_ONE_USERS, payload: {}});
        }}
        item={GlobalState?.user}
      />
    </>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
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
  avatar: {width: 50, height: 50, borderRadius: 50},
  margin10: {marginLeft: 10},
  name: {fontWeight: 'bold', fontSize: 16},
  fontSize12: {fontSize: 12},
});
