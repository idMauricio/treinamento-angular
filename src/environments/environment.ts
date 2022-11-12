// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'peixoto-fish',
    appId: '1:1041833110304:web:241aec46a81b5211444545',
    storageBucket: 'peixoto-fish.appspot.com',
    apiKey: 'AIzaSyDPEvQfNCsUY9FekUyyWjYGwAT3cJrEZqE',
    authDomain: 'peixoto-fish.firebaseapp.com',
    messagingSenderId: '1041833110304',
    measurementId: 'G-Q4JBXV46HX',
  },
  production: false,
  apiBase: 'https://www.fishwatch.gov/api/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
