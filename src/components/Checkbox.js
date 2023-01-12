import checkSvg from '../../assets/icons/check.svg'
import './Checkbox.css';
export default class Checkbox {
    constructor(checked, callback) {
        this.checked = checked;
        this.callback = callback;
        this.checkboxDiv = document.createElement('div');
        this.checkboxDiv.addEventListener('click', this.onClick.bind(this));
        this.checkboxDiv.classList.add('checkbox');
        this.updateCheckMark();
        return this.checkboxDiv;
    }

    toggle() {
        if (this.checked) {
            this.checked = false;
        } else {
            this.checked = true;
        }
        this.updateCheckMark();
    }

    updateCheckMark() {
        if (this.checked) {
            const tempSvg = document.createElement('div');
            tempSvg.innerHTML = checkSvg;
            this.checkboxDiv.appendChild(tempSvg.firstChild);
        } else {
            this.checkboxDiv.innerHTML = '';
        }
    }

    onClick() {
        this.toggle();
        this.callback();
    }
}