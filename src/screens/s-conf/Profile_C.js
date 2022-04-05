import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, StatusBar, FlatList, Text, View, SafeAreaView, ScrollView, Image, } from "react-native";
import styled from 'styled-components';
import axios from 'axios';

const URL = 'http://localhost:8000/api/user/1'

function Profile_C() {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    getlibros()
  }, [])

  const getlibros = async () => {
    axios.get(URL)
      .then(({ data }) => {
        console.log(data)
        setData(data.usuario)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsHorizontalScrollIndicato={false} showsVerticalScrollIndicator={false}>

        <FlatList
          data={data}
          renderItem={({ item }) => (

            <View>
              <table>
                <tr>
                  <td>
                    <View style={styles.Image}>
                      <Image
                        style={styles.tinyLogo}
                        source={{ uri: "http://placekitten.com/100/100" }}
                      />
                    </View>
                  </td>
                  <td>
                    <View style={styles.ViewA1}>
                      <text>Nombre:</text>
                      <td><Input style={styles.InputA1} value={item.name}></Input></td>
                    </View>
                    <View style={styles.ViewA1}>
                      <text>Correo:</text>
                      <td><Input style={styles.InputA1} value={item.email}></Input></td>
                    </View>
                  </td>
                </tr>
              </table>

              <View style={styles.ViewA2}>
                <text>Direccion</text>
                <td><Input style={styles.InputA2} value={item.address}></Input></td>
              </View>
              <View style={styles.ViewA2}>
                <text>Redes Sociales</text>
                <td><Input style={styles.InputA2}></Input></td>
              </View>
              <View style={styles.ViewA2}>
                <text>Metodo de Pago</text>
                <td><Input style={styles.InputA2}></Input></td>
              </View>

              <View style={styles.ViewA2}>
                <Button style={styles.ButtonA1}>Cambiar Contraseña</Button>
              </View>
            </View>



          )}
          keyExtractor={item => item.id.toString()}
        />

      </ScrollView>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 15,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  Image: {
    paddingLeft: 0,
  },
  ViewA1: {
    borderColor: "orange",
    color: "black",
    backgroundColor: "white",
    borderColor: "orange",
    fontSize: 15,
    borderRadius: 5,
    textAlign: "left",
  },
  InputA1: {
    borderColor: "orange",
    padding: "5% 25%",

    backgroundColor: "white",
    color: "black",
    borderRadius: 5,
    margin: "10px 0px",
    textAlign: "left",
  },
  ViewA2: {
    borderColor: "orange",
    color: "black",
    backgroundColor: "white",
    margin: "10px 0px",
    fontSize: 15,
    borderRadius: 5,
    textAlign: "left",
  
  },
  InputA2: {
    borderColor: "purple",
    fontSize: 20,
    padding: "25% 30%",

    backgroundColor: "white",
    color: "black",
    borderRadius: 5,
    margin: "10px 0px",
    textAlign: "left",
  },
  ButtonA1: {
    backgroundColor: "#138d75",

    color: "#fdfefe",
    borderColor: "black",
    fontSize: 20,
    padding: "5px 5px",
    borderRadius: 15,
    margin: "10px 0px",
    //cursor: "pointer",
    textAlign: "left",
  },

});
export default Profile_C;