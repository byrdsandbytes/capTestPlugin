import { WebPlugin } from '@capacitor/core';
import { CapTestPluginPlugin } from './definitions';

export class CapTestPluginWeb extends WebPlugin implements CapTestPluginPlugin {
  constructor() {
    super({
      name: 'CapTestPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const CapTestPlugin = new CapTestPluginWeb();

export { CapTestPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapTestPlugin);
