// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //apiUrl: 'http://localhost:4000',
  objUrl: 'https://inventomodel2.herokuapp.com',
  //inventoServer: 'https://invento-server.herokuapp.com',
  // inventoServer: 'http://127.0.0.1:5000',
  inventoServer: 'https://inventowebserver.herokuapp.com',
  testUrl: `http://127.0.0.1:5000/`
  // apiUrl: 'http://127.0.0.1:8080',
  //apiUrl: 'http://inventowebapis-env.eba-7bpn3x7j.us-east-2.elasticbeanstalk.com',
  //loginApi: 'http://127.0.0.1:5000/login'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
