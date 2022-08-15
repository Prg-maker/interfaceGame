import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  text:string
}

export function ButtonPressProfile({text, ...rest}:Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:21
  },
  text:{
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    color: '#FFFFFF',
  }
})