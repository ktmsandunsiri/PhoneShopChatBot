import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:9b2de2d8-889f-48ad-a1e4-e916aaa15d9f',
    region: 'us-east-1'
  },
  Interactions: {
    bots: {
      "PhoneShop": {
        "name": "PhoneShop",
        "alias": "$LATEST",
        "region": "us-east-1",
      },
    }
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
