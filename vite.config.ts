import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    const isGitHubPages =
        command === 'build' &&
        window.location.hostname === 'rich1997.github.io';
    const base = isGitHubPages ? '/CoolFreeFonts/' : '/';

    return {
        plugins: [react()],
        base,
    };
});
