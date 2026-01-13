import { makeInstaller } from "@kysonui/utils";
import components from './components';
import '@kysonui/theme/index.css';

const installer = makeInstaller(components);

export * from '@kysonui/components';
export default installer;