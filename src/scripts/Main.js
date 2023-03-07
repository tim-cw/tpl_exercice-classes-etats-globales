import ColorTheme from './components/ColorTheme';

class Main {
  constructor() {
    this.init();
  }

  init() {
    // On ajoute une classe sur le html
    // pour qu'on puisse savoir si le JavaScript est
    // supporté dans notre css
    document.documentElement.classList.add('has-js');

    const components = document.querySelectorAll(
      '[data-component="ColorTheme"]'
    );
    for (let i = 0; i < components.length; i++) {
      const component = components[i];
      new ColorTheme(component);
    }
  }
}
new Main();
