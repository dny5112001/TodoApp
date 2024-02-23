import React, {useState, useEffect} from 'react';
import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const STORAGE_KEY = '@todoList';

const App = () => {
  const [data, setData] = useState([]);
  const [task, setTask] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      if (jsonValue !== null) {
        setData(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error('Error loading data from AsyncStorage:', error);
    }
  };

  const saveData = async newData => {
    try {
      const jsonValue = JSON.stringify(newData);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };

  const handleAddTask = () => {
    if (task.trim() === '') {
      Alert.alert('Please Enter the task!');
      return;
    }
    const newData = [...data, task];
    setData(newData);
    saveData(newData);
    setTask('');
  };

  const handleDeleteTask = index => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    saveData(newData);
  };

  const handleEditTask = index => {
    setEditedTask(data[index]);
    setEditIndex(index);
    setIsModalVisible(true);
  };

  const handleUpdateTask = () => {
    if (editedTask.trim() === '') {
      Alert.alert('Please Enter the task!');
      return;
    }
    const newData = [...data];
    newData[editIndex] = editedTask;
    setData(newData);
    saveData(newData);
    setIsModalVisible(false);
    setEditedTask('');
  };

  const renderData = ({item, index}) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: 60,
          backgroundColor: '#215277',
          borderRadius: 10,
          paddingHorizontal: 10,
          marginVertical: 5,
          elevation: 5,
        }}>
        <Text style={{width: '60%', color: '#fff'}}>{item}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleDeleteTask(index)}>
          <Text style={{color: '#000', fontWeight: '900'}}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#269c7d'}]}
          onPress={() => handleEditTask(index)}>
          <Text style={{color: '#fff', fontWeight: '900'}}>Edit</Text>
        </TouchableOpacity>
      </View> 
    );
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#040918', '#082140', '#215277']}
      style={styles.linearGradient}>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#040918" barStyle="light-content" />
        <View
          style={{
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 45, fontWeight: '900', color: '#fff'}}>
            Todo List
          </Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="add item..."
          placeholderTextColor={'#fff'}
          value={task}
          onChangeText={text => setTask(text)}
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flex: 1, flexDirection: 'column'}}
          style={styles.listContainer}>
          <FlatList
            data={data}
            renderItem={renderData}
            keyExtractor={(item, index) => index.toString()}
            style={{marginBottom: 20}}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>

        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TextInput
                style={styles.modalInput}
                placeholder="Edit task..."
                placeholderTextColor={'#fff'}
                value={editedTask}
                onChangeText={text => setEditedTask(text)}
              />
              <TouchableOpacity
                style={[styles.modalButton, {backgroundColor: '#269c7d'}]}
                onPress={handleUpdateTask}>
                <Text style={[styles.modalButtonText, {color: '#fff'}]}>
                  Update
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setIsModalVisible(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </LinearGradient>
  );
};

export default App;
