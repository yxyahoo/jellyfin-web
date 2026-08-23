export function shouldEnableOverflow(userSettings?: { get: (key: string, enableOnServer?: boolean) => string | boolean | undefined }) {
    const value = userSettings?.get('homeSectionEnableOverflow', false);
    return value !== false && value !== 'false';
}
