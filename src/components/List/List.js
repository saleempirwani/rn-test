import React from 'react';
import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import Item from '../Item/Item';

export default function List() {
  const GlobalState = useSelector(state => state.Main);

  if (!GlobalState.users.length) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={GlobalState.users}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
