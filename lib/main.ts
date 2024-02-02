import ButtonVue from './components/Button.vue';
import './style.css'

function updateColors(options: any = {}) {
  let colorNames = ["primary", "background", "red", "orange", "yellow", "lime", "green", "teal", "blue", "indigo", "purple", "pink"];
  if (options.colors) {
    for (let color of colorNames) {
      if (options.colors[color]) {
        for (let i: number = 0; i < 10; i++) {
          document.documentElement.style.setProperty(`--${color}-${i*100}`, `hsl(${options.colors[color]}, 90%, ${(10 - i) * 10}%)`);
        }
      }
    }
  }
}

export default {
  install(app: any, options: any = {}) {
    // Add global styles
    console.log(options.primaryHue);
    
    updateColors(options);

    app.component('Button', ButtonVue)
    // Add global components, directives, etc.
    // app.component('my-component', MyComponent);
    // app.directive('my-directive', myDirective);
  }
}