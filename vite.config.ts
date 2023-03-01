import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const isGitHubPages =
        mode === 'production' && process.env.VITE_GITHUB_PAGES === 'true';
    const base = isGitHubPages ? '/CoolFreeFonts/' : '/';

    return {
        plugins: [react()],
        base,
    };
});
