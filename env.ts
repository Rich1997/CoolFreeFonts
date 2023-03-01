export const isGitHubPages =
    process.env.NODE_ENV === 'production' &&
    window.location.hostname === 'rich1997.github.io';
