export interface NavigationTree {
    key: string
    icon: string
    title: string
    path: string
    translateKey: string
    isExternalLink?: boolean
    subMenu?: NavigationTree[]
}
