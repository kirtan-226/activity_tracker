import React, { useEffect, useState } from 'react';
import { View, FlatList, Button } from 'react-native';
import { getTasks, toggleTaskComplete, deleteTask } from '../services/taskService';
import TaskCard from '../components/TaskCard';

export default function Dashboard({ navigation }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadTasks);
    return unsubscribe;
  }, [navigation]);

  const handleToggle = async (task) => {
    await toggleTaskComplete(task.id, task.completed);
    loadTasks();
  };

  const handleDelete = async (task) => {
    await deleteTask(task.id);
    loadTasks();
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Add Task" onPress={() => navigation.navigate('Task')} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard task={item} onToggle={handleToggle} onDelete={handleDelete} />
        )}
      />
    </View>
  );
}