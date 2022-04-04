import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { saveTask, getTask, updateTask } from "../../api";
import Layout from "../../components/Layout";

const About = ({ navigation, route }) => {
  const [task, setTask] = useState({
    Name: "",
    
  });
  const [editing, setEditing] = useState(false);

  // if (route && route.params) {
  //   navigation.setOptions({ headerTitle: "Updating Task" });
  // }

  useEffect(() => {
    if (route.params && route.params.id) {
      setEditing(true);
      navigation.setOptions({ headerTitle: "Updating Task" });
      (async () => {
        const task = await getTask(route.params.id);
        setTask({ title: task.title, description: task.description });
      })();
    }
  }, []);

  const handleSubmit = async () => {
     saveTask(task);
     
      navigation.navigate("Home");
  
  };

  const handleChange = (name, value) => setTask({ ...task, [name]: value });

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Write the category's name"
        placeholderTextColor="#576574"
        value={task.name}
        onChangeText={(text) => handleChange("name", text)}
      />


    
        <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save Category</Text>
        </TouchableOpacity>

    
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    marginBottom: 7,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#10ac84",
    height: 30,
    color: "#ffffff",
    textAlign: "center",
    padding: 4,
    borderRadius: 5,
  },
  buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#10ac84",
    width: "90%",
  },
  buttonUpdate: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#e58e26",
    width: "90%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default About;