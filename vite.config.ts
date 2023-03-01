import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { isGitHubPages } from './env';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: isGitHubPages ? '/CoolFreeFonts/' : '/',
});
