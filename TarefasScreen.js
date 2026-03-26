import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const taref = [
  { id: '1', tarefa: 'Adiar Projeto',  },
  { id: '2', tarefa: 'Construir Banco de Dados',  },
  { id: '3', tarefa: 'Finalizar Back-End',  },
  { id: '4', tarefa: 'Finalizar Front-ENd',  },
  { id: '5', tarefa: 'Contratar QA',  },
];

const ContactItem = ({ tarefa }) => (
  <View style={styles.row}>
    <Text style={styles.tarefa}>{tarefa}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={taref}
        renderItem={({ item }) => (
          <ContactItem
            tarefa={item.tarefa}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  tarefa: {
    fontSize: 12,
    color: '#999',
  },
});