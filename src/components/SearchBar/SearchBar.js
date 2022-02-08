import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {getUsers} from '../../store/actions/actions';
import {useDispatch} from 'react-redux';

export default function SearchBar() {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        placeholder="Enter search query"
        onChangeText={setSearch}
        onSubmitEditing={e => {
          dispatch(getUsers(search));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    margin: 20,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
