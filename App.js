import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ListItem, ThemeProvider } from 'react-native-elements';
import { useColorScheme } from 'react-native-appearance';

import { videos } from './variables/videos'
import YoutubeView from './components/YoutubeView'

export default function App() {
  let colorScheme = useColorScheme();

  const renderItem = ({item}) => (
    <ListItem style={{ marginTop: 30 }} key={item.key} bottomDivider>
        <YoutubeView
          key={item.key}
          videoId={item.videoId}
        />
    </ListItem>
  )

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <ThemeProvider useDark={colorScheme === 'dark'}>
          <FlatList 
            data={videos}
            renderItem={renderItem}
            keyExtractor={item => item.videoId}
          />
          {/* <ScrollView>
            { videos.map((video) => (
              <ListItem style={{ marginTop: 30 }} key={video.key} bottomDivider>
                  <YoutubeView
                    key={video.key}
                    videoId={video.videoId}
                  />
              </ListItem>
            ))}
          </ScrollView> */}
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
