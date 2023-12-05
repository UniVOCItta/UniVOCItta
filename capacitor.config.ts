import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.univocitta.app',
  appName: 'progetto_univocitta',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
