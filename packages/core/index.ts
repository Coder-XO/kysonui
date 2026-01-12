import { makeInstaller } from "@oui/utils";
import components from './components';
import '@oui/theme/index.css';

const installer = makeInstaller(components);

export * from '@oui/components';
export default installer;