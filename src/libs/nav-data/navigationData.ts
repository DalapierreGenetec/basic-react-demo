export interface NavigationModule {
    display: string,
    module?: JSX.Element
}

export interface NavigationData {
    topNav: string,
    sideNav: NavigationModule[]
}

export const NavigationData: NavigationData[] = [
    {
        topNav: "Dashboard",
        sideNav: [
            { display: "Overview" }
        ]
    }
]