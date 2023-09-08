import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Fontisto';

import {theme} from './colors';

const STORAGE_KEY = '@todos';

export default function App() {
  const [isTodo, setIsTodo] = useState(true);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<any>({});
  const [editId, setEditId] = useState<string>();
  const [editText, setEditText] = useState<string>('');

  const onChangeText = (v: string) => {
    setText(v);
  };

  const onChangeHandleIsTodo = async (todo: boolean) => {
    await AsyncStorage.setItem('isTodo', JSON.stringify(todo));
    setIsTodo(todo);
  };

  const loadTodos = async () => {
    const saveTodos = await AsyncStorage.getItem(STORAGE_KEY);
    saveTodos && setTodos(JSON.parse(saveTodos));
  };

  const addTodo = async () => {
    if (text !== '') {
      const newTodos = {...todos, [Date.now()]: {text, isTodo, done: false}};
      await setText('');
      setTodos(newTodos);
      await saveTodos(newTodos);
    }
  };

  const saveTodos = async (toSave: any) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    setText('');
  };

  const deleteTodo = async (id: string) => {
    Alert.alert('Delete To Do?', 'Are you sure?', [
      {
        text: 'Cancel',
      },
      {
        text: "I'm Sure",
        onPress: () => {
          const newTodos = {...todos};
          delete newTodos[id];
          setTodos(newTodos);
          saveTodos(newTodos);
        },
      },
    ]);
  };

  const onHandleDone = async (id: string) => {
    const newTodos = {
      ...todos,
      [id]: {
        text: todos[id].text,
        isTodo: todos[id].isTodo,
        done: todos[id].done === true ? false : true,
      },
    };
    setTodos(newTodos);
    await saveTodos(newTodos);
  };

  const onEditHandle = (id: string) => {
    if (id === editId) {
      setEditId(undefined);
    } else {
      setEditId(id);
    }
  };

  const onEditTexthandle = async (id: string) => {
    if (editText !== '') {
      const newTodos = {
        ...todos,
        [id]: {text: editText, isTodo, done: false},
      };
      setTodos(newTodos);
      await saveTodos(newTodos);
      setEditId(undefined);
      setEditText('');
    }
  };

  useEffect(() => {
    loadTodos();
    setText('');
  }, [isTodo]);

  useEffect(() => {
    async function fetchHandle() {
      const todo = await AsyncStorage.getItem('isTodo');
      todo && setIsTodo(todo === 'true' ? true : false);
    }
    fetchHandle();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text
            style={{...styles.btnText, color: isTodo ? 'white' : theme.grey}}
            onPress={() => onChangeHandleIsTodo(true)}>
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{...styles.btnText, color: !isTodo ? 'white' : theme.grey}}
            onPress={() => onChangeHandleIsTodo(false)}>
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        returnKeyType="done"
        onSubmitEditing={addTodo}
        value={text}
        onChangeText={onChangeText}
        placeholder={isTodo ? 'Add a To Do' : 'Where do you want to go?'}
        style={styles.input}
      />
      <ScrollView>
        {Object.keys(todos).map(key =>
          todos[key].isTodo === isTodo ? (
            <View style={styles.todo} key={key}>
              {editId === key ? (
                <TextInput
                  returnKeyType="done"
                  onSubmitEditing={() => onEditTexthandle(key)}
                  value={editText}
                  onChangeText={setEditText}
                  placeholder={todos[key].text}
                  style={styles.editInput}
                />
              ) : (
                <Text
                  style={{
                    ...styles.todoText,
                    textDecorationLine: todos[key].done && 'line-through',
                  }}>
                  {todos[key].text}
                </Text>
              )}
              <View style={styles.btns}>
                <TouchableOpacity onPress={() => onHandleDone(key)}>
                  <Icon
                    name="check"
                    size={13}
                    color={todos[key].done ? theme.check : theme.grey}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onEditHandle(key)}>
                  <Icon name="undo" size={18} color={theme.grey} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTodo(key)}>
                  <Icon name="trash" size={18} color={theme.grey} />
                </TouchableOpacity>
              </View>
            </View>
          ) : null,
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: '600',
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  todo: {
    backgroundColor: theme.todoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  btns: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  editInput: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 11,
    fontSize: 16,
  },
});
