import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Layout from '../../components/Layout';
import ServicesList from '../../components/ServicesList';


const Search = () => {
  return (
   
  <Layout>
  <ServicesList/>
  </Layout>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Search;
