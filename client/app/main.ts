import {bootstrap} from "angular2/platform/browser";
import { HTTP_PROVIDERS } from 'angular2/http';

import { DemoComponent }  from './demo';

bootstrap(DemoComponent, [HTTP_PROVIDERS])