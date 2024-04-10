import { TopNavItem, TopNavigationType } from "@portal/libs/nav-data/navigationData"

export interface TopNavProps {
    topNavItems: TopNavItem[]
    currentNav?: TopNavigationType
    onTopNavClick: (topNav: TopNavigationType) => void
}