import type { App, Component, Plugin } from 'vue';

type SFCWithInstall<T> = T & Plugin;

// 获取组件名称
function getComponentName(component: unknown): string | null {
  if (typeof component !== 'object' || component === null) return null;
  if (!('name' in component)) return null;

  const { name } = component as { name?: unknown };
  if (typeof name !== 'string') return null;
  if (name.trim().length === 0) return null;
  return name;
}

// 创建安装器
export function makeInstaller(components: Plugin[]): Plugin {
  return (app: App) => {
    for (const component of components) {
      app.use(component);
    }
  };
}

// 为组件添加 install 方法
export function withInstall<T extends Component>(component: T): SFCWithInstall<T> {
  const name = getComponentName(component);
  if (!name) {
    throw new Error('Component name is required');
  }

  const componentWithInstall = component as SFCWithInstall<T>;
  componentWithInstall.install = (app: App) => {
    app.component(name, component);
  };

  return componentWithInstall;
}
