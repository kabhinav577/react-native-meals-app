import { View, Text, StyleSheet } from 'react-native';
const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitlesContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitlesContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: '#e2e8ba',
    borderBottomWidth: 2,
  },
  subtitle: {
    color: '#e2e8ba',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
