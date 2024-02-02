import ButtonVue from './components/Button.vue';
import './style.css'



export default {
  install(app: any, options: any = {primary: '#0000ff'}) {
    // Add global styles
    console.log(options.primary);

    app.component('Button', ButtonVue)
    // Add global components, directives, etc.
    // app.component('my-component', MyComponent);
    // app.directive('my-directive', myDirective);
  }
}