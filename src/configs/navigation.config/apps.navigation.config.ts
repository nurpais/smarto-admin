import { NavigationTree } from '@/@types/navigation'

const appsNavigationConfig: NavigationTree[] = [
    {
        key: 'home',
        icon: 'tst',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
    },

    {
        key: 'home2',
        icon: 'tst',
        path: '/home2',
        title: 'Home2',
        translateKey: 'nav.home2',
        subMenu: [
            {
                key: 'home3',
                icon: 'tst',
                path: '/home3',
                title: 'Home3',
                translateKey: 'nav.home3',
            },
        ],
    },
]

export default appsNavigationConfig
