import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <View style={styles.card}>
      <Text style={task.completed ? styles.done : undefined}>{task.title} - {task.xp} XP</Text>
      <View style={styles.actions}>
        <Button title={task.completed ? 'Undo' : 'Done'} onPress={() => onToggle(task)} />
        <Button title="Delete" onPress={() => onDelete(task)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  done: {
    textDecorationLine: 'line-through',
  },
});