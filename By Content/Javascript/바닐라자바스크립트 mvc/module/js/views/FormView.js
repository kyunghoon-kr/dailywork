import View from './View.js'

const tag = "[FormView]"

// View 객체를 가져와서 카피해서 새로운 FormView를 만든다.
const FormView = Object.create(View);

// el -> element, <input><div>....
FormView.setup = function (el) {
    this.init(el);
    this.inputEl = el.querySelector('[type=text]');
    this.resetEl = el.querySelector('[type=reset]');
    this.showResetBtn(false);
}

FormView.showResetBtn = function(show = true) {
    this.resetEl.style.display = show ? 'block' : 'none';
}

export default FormView