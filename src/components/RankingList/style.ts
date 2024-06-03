// style.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333238',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingVertical: 20,
    borderTopColor: '#909090',
    borderBottomColor: '#909090',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25, // half of width and height to make it circular
  },
  textContainer: {
    marginLeft: 20,
  },
  user: {
    color: '#FFF',
    fontSize: 18,
    letterSpacing: 0.6,
  },
  nilai: {
    color: '#B3B3B3',
    marginTop: 5,
    fontSize: 13,
    letterSpacing: 0.4,
  },
  rankingContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 20,
  },
  rank: {
    marginBottom: 5,
    color: '#B3B3B3',
    fontSize: 12,
    letterSpacing: 0.4,
  },
  rankIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
