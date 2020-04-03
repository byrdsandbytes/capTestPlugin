declare module "@capacitor/core" {
  interface PluginRegistry {
    CapTestPlugin: CapTestPluginPlugin;
  }
}

export interface CapTestPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
