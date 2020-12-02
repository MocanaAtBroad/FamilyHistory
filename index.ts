
// Write TypeScript code!
import { history } from './src/ivankaTrump'
const appDiv: HTMLElement  | null = document.getElementById('app');
appDiv && (appDiv.innerHTML = JSON.stringify(history));
