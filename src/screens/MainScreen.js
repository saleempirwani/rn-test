import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {List, SearchBar} from '../components';
import {getUsers} from '../store/actions/actions';
import {useDispatch} from 'react-redux';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <View>
      <SearchBar />
      <List />
    </View>
  );
}

const styles = StyleSheet.create({});
