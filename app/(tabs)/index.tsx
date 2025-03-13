import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      
      headerImage={
        <Image

        
          source={require('@/assets/images/puniru.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem Vindo(a) ao meu site... ao menos parece um</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">meu nome é *unknown*</ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold">E aqui é o meu site</ThemedText> 
          <ThemedText type="defaultSemiBold">
         
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Especialidades:</ThemedText>
        <ThemedText>
sou main Caçador e main Demogorgon o DbD... É... nada muito além disso        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Previsões:</ThemedText>
        <ThemedText>
Que Puniru receba logo a segunda temporada e que lance logo Steel Ball Run no Brasil         <ThemedText type="defaultSemiBold"></ThemedText> 

          <ThemedText type="defaultSemiBold"></ThemedText> 
          <ThemedText type="defaultSemiBold"></ThemedText> 
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>

    </ParallaxScrollView>
 

 );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 271,
    width: 425,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
