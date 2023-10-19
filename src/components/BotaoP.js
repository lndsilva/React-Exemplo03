import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Separador = () => <View style={estilo.separador} />;

const BotaoP = () => {
  return (
    <SafeAreaView style={estilo.container}>
      <View>
        <Text style={estilo.title}>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button
          title="Executar"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        <Separador />
        <View>
          <Text style={estilo.title}>
            Adjust the color in a way that looks standard on each platform. On
            iOS, the color prop controls the color of the text. On Android, the
            color adjusts the background color of the button.
          </Text>
          <Button
            title="Press me"
            color="#f194ff"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
        </View>
        <Separador />
        <View>
          <Text style={estilo.title}>
            All interaction for the component are disabled.
          </Text>
          <Button
            title="Press me"
            disabled
            onPress={() => Alert.alert('Cannot press this one')}
          />
        </View>
        <Separador />
        <View style={estilo.title}>
          <Text style={estilo.title}>
            This layout strategy lets the title define the width of the button.
          </Text>
        </View>
        <View style={estilo.fixToText}>
          <Button
            title="Left button"
            onPress={() => Alert.alert('Left button pressed')}
          />
          <Button
            title="Right button"
            onPress={() => Alert.alert('Rigth button pressed')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separador: {
    marginVertical: 8,
    borderBottomColor: '#131313',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default BotaoP;
