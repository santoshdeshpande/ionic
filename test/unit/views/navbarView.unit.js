describe('NavBar View', function() {
    var container, titleContainer;

    beforeEach(function() {
        container = document.createElement('div')
        container.id = "container";
        container.className = 'container';

        titleContainer = document.createElement("p")
        titleContainer.className = "title";
        titleContainer.textContent = "Some Title";
        container.appendChild(titleContainer);

        document.body.appendChild(container)
    });

    it("should init hidden", function() {
        var view = new ionic.views.NavBar({
            el: container,
            hidden: true
        });
        expect(container.classList.contains('hidden')).toBe(true);
    });

    it("should set the proper title", function() {
        var view = new ionic.views.NavBar({
            el: container,
            hidden: false
        });
        view.setTitle("Hello, Navbar");
        expect(titleContainer.textContent).toBe("Hello, Navbar");
    });

    it("should add the back button at the right place", function() {
        var view = new ionic.views.NavBar({
            el: container,
            hidden: false
        });
        view.show();
        view.showBackButton(true);
        var firstChild = container.firstChild;
        expect(firstChild.tagName).toBe('A');
    });
});