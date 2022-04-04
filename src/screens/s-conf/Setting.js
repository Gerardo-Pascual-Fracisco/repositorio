import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native'

function sayHello() {}

const Setting = () => {
  const navigation = useNavigation()
  return (
    <View>
      <div>
        <ButtonGroup>
          <button onClick={() => navigation.navigate('Profile_C')}
          style={styles.Button}>
            <textA>Editar Cuenta</textA>
          </button>
          <button onClick={() => navigation.navigate('Mode')}
          style={styles.Button}>
            <textA>Modo Oscuro</textA>
          </button>
          <button onClick={() => navigation.navigate('Attention')}
          style={styles.Button}>
            <textA>Atencion a Cliente</textA>
          </button>
          <button onClick={() => navigation.navigate('Report')}
          style={styles.Button}>
            <textA>Informe de la Cuenta</textA>
          </button>
        </ButtonGroup>
      </div>
      <ButtonGroupEnd>
        <Button onClick={sayHello}>cerrar sesion</Button>
      </ButtonGroupEnd>
    </View>
  )
}


const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`
const ButtonGroupEnd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const textA = styled.text`
font-size: 20,
text-align: center,
color: white,
`
const styles = StyleSheet.create({
  Button: {
    backgroundColor: "black",
    color: "white",
    fontSize: "20px",
    padding: "10px 60px",
    bordeRadius: "5px",
    margin: "10px 0px",
    cursor: "pointer",
    textAlign: "left",
  },
});

export default Setting
