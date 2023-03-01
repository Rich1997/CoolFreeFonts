import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
    const isGitHubPages =
        command === 'build' &&
        process.env.BASE_URL === 'https://rich1997.github.io/CoolFreeFonts/';

    return {
        plugins: [react()],
        base: isGitHubPages ? '/CoolFreeFonts/' : '/',
    };
});
