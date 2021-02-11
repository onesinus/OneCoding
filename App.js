import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ListItem, ThemeProvider } from 'react-native-elements';
import { useColorScheme } from 'react-native-appearance';


import YoutubeView from './components/YoutubeView'

export default function App() {
  let colorScheme = useColorScheme();

  const videos = [
    {key: 1, videoId: "BpiRMVV_WhE"},
    {key: 2, videoId: "22FfQHW_YFE"},
    {key: 3, videoId: "LgeQR3sFiRI"},
    {key: 4, videoId: "h5DK0JzICdM"},
    {key: 5, videoId: "rAwIdpQEsCU"}, 
  ]

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <ThemeProvider useDark={colorScheme === 'dark'}>
          <ScrollView>
            { videos.map((video) => (
              <ListItem style={{ marginTop: 30 }} key={video.key} bottomDivider>
                  <YoutubeView
                    key={video.key}
                    videoId={video.videoId}
                  />
              </ListItem>
            ))}
          </ScrollView>
        </ThemeProvider>        
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
