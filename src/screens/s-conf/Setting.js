import React from 'react';
import { View, StyleSheet, Text,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function sayHello() {};

const Setting = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.ButtonGroup}>
        <View style={styles.ButtonGroup}>
          <Button onClick={() => navigation.navigate('Profile_C')}
          style={styles.Button} title='Editar Cuenta'>
          </Button>
          <Button onClick={() => navigation.navigate('Mode')}
          style={styles.Button} title='Modo Oscuro'>
          </Button>
          <Button onClick={() => navigation.navigate('Attention')}
          style={styles.Button} color='#000' title='Atencion a Cliente'>
          </Button>
          <Button onClick={() => navigation.navigate('Report')}
          style={styles.textA} title='Informe de la Cuenta'>
          </Button>
        </View>
      </View>
      <View style={styles.ButtonGroupEnd}>
      <Button title='Cerrar Sesion'></Button>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 15,
  },
  ButtonGroup: {
    borderColor: "orange",
    color: "black",
    backgroundColor: "white",
    borderColor: "orange",
    fontSize: 15,
    borderRadius: 5,
    textAlign: "left",
  },
  ButtonGroupEnd: {
    display:'flex',
    flexDirection: "column",
    alignItems: "flex-start",
  },
  textA: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
  Button: {
    backgroundColor: "black",
    color: "white",
    fontSize: 20,
    padding: "10px 60px",
    borderRadius: 5,
    margin: "10px 0px",
    textAlign: "left",
  },
});

export default Setting;
