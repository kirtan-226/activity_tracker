import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { addTask } from '../services/taskService';

export default function TaskScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [xp, setXp] = useState('');

  const handleAddTask = async () => {
    await addTask(title, parseInt(xp));
    Alert.alert("Task Added!");
    setTitle('');
    setXp('');
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="XP"
        keyboardType="numeric"
        value={xp}
        onChangeText={setXp}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}