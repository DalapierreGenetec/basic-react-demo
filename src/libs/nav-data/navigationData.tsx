import { About } from '@portal/modules/about';
import { CameraFeeds } from '@portal/modules/camera-feeds';
import { NotImplemented } from '@portal/modules/not-implemented';
import { Overview } from '@portal/modules/overview';

export interface TopNavItem {
    type: TopNavigationType,
    display: string
}

export interface SidebarNavItem {
    display: string,
    content?: JSX.Element
}

export const topNavigationTypes = {
    dashboard: 'dashboard',
    configuration: 'configuration',
    diagnostics: 'diagnostics',
    help: 'help'
} as const;

export type TopNavigationType = keyof typeof topNavigationTypes;

export const TopNavigation: TopNavItem[] = [
    { type: topNavigationTypes.dashboard, display: 'Dashboard' },
    { type: topNavigationTypes.configuration, display: 'Configuration' },
    { type: topNavigationTypes.diagnostics, display: 'Diagnostics' },
    { type: topNavigationTypes.help, display: 'Help' }
];

export const dashboardSidebarNavItems: SidebarNavItem[] = [
    { display: 'Overview', content: <Overview /> },
    { display: 'Camera feeds', content: <CameraFeeds /> },
    { display: 'Inventory', content: <NotImplemented /> }
];

export const configurationSidebarNavItems: SidebarNavItem[] = [
    { display: 'Network', content: <NotImplemented />  },
    { display: 'Security', content: <NotImplemented />  },
    { display: 'Cameras', content: <NotImplemented />  }
]

export const diagnosticsSidebarNavItems: SidebarNavItem[] = [
    { display: 'Logs', content: <NotImplemented />  },
    { display: 'Log Sources', content: <NotImplemented />  }
];

export const helpSidebarNavItems: SidebarNavItem[] = [
    { display: 'About', content: <About />  },
    { display: 'Documentation', content: <NotImplemented />  },
    { display: 'Advanced settings', content: <NotImplemented />  }
];
