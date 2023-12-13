export type AppConfig = {
    authenticatedEntryPath: string
    unAuthenticatedEntryPath: string
}

const appConfig: AppConfig = {
    authenticatedEntryPath: '/home',
    unAuthenticatedEntryPath: '/sign-in',
}

export default appConfig
