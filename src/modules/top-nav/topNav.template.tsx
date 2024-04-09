const TopNavItemTemplate = (item: string, isSelected: boolean) => (
    <div key={item} className={isSelected ? "selected top-nav-item" : "top-nav-item"}>
        {item}
    </div>
);

export const TopNavTemplate = (navItems: string[], currentNav?: string) => (
    <div id="top-nav-bar-container">
        {navItems.map((item, i) => TopNavItemTemplate(item, item === currentNav))}
    </div>
);