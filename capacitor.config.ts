import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.example.wataru.biorhythms',
  appName: 'Biorhythms',
  webDir: 'build',
  server: {
    androidScheme: 'https',
    // url: 'http://192.168.1.35:5173',
    // cleartext: true,
  },
};

export default config;
