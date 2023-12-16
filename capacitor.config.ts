import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.univocitta.app',
  appName: 'univocitta',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
