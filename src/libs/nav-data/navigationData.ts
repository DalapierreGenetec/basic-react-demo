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
    { display: 'Overview' },
    { display: 'Camera feeds' },
    { display: 'Inventory' }
];

export const configurationSidebarNavItems: SidebarNavItem[] = [
    { display: 'Network' },
    { display: 'Security' },
    { display: 'Cameras' }
]

export const diagnosticsSidebarNavItems: SidebarNavItem[] = [
    { display: 'Logs' },
    { display: 'Log Sources' }
];

export const helpSidebarNavItems: SidebarNavItem[] = [
    { display: 'About' },
    { display: 'Documentation' },
    { display: 'Advanced settings' }
];
