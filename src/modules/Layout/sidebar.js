class Sidebar {
    render() {
        const sidebarDiv = document.createElement('div');
        sidebarDiv.className = 'sidebar';

        return sidebarDiv;
    }
}

export default new Sidebar();