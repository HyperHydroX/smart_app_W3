import { StyleSheet } from 'react-native'

export const theme = {
  alpha: '#ba0f0f',
  dark: '#2e0101',
  light: '#f2eeeb',
}

export const calculator = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 20,
  },

  body: {},

  title: {
    fontSize: 24,
    color: theme.light,
  },

  input: {
    paddingTop: 16,
    fontSize: 32,
    color: theme.dark,
  },
  detail: {
    paddingTop: 16,
    fontSize: 24,
    color: theme.light,
  },
})
