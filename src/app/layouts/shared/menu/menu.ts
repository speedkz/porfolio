import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        label: 'Navigation',
        isTitle: true
    },
    {
        label: 'Dashboard',
        icon: 'home',
        link: '/',
        badge: {
            variant: 'success',
            text: '1',
        }
    },
    {
        label: 'Apps',
        isTitle: true
    },
    {
        label: 'Users',
        icon: 'users',
        subItems: [
            {
                label: 'Management',
                link: '/users',
            },
        ]
    },
    {
        label: 'Báo cáo',
        icon: 'file-text',
        subItems: [
            {
                label: 'Báo cáo đơn vị',
                link: '/bao-cao-don-vi',
            },
            {
                label: 'Báo cáo tổng hợp',
                link: '/bao-cao-tong-hop',
            },
            {
                label: 'Báo cáo sở tài chính',
                link: '/bao-cao-so-tai-chinh',
            },
        ]
    },
];
