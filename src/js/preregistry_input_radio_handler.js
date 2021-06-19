let yesWa = document.getElementById('yes-wa');
let noWa = document.getElementById('no-wa');

let yesRadio = document.getElementById('yes-radio');
let noRadio = document.getElementById('no-radio');

let formSection2 = document.getElementById('formSection2');
let wrapper = document.getElementById('wrapper');

let urlRadioOn = '../images/INPUT_RADIO_ON.svg';
let urlRadioOff = '../images/INPUT_RADIO_OFF.svg';
let temp = document.createElement('div');
const html = `<div class="form-section-2-1">
<div id="preregistrationDark" class="preregistration-dark">
    <p class="preregistration-label">
        Ingresa un número de celular válido para contacto
    </p>

    <div class="control">
        <div class="selects">
            <select class="country-select">
                <option>Perú(+51)</option>
                <option>Chile(+56)</option>
            </select>
            <input class="input" type="text" name="phone" value="" />
        </div>
    </div>
</div>
</div>`;
temp.innerHTML = html;
let htmlObject = temp.firstChild;
yesWa.addEventListener(
	'click',
	function (e) {
		[yesRadio.src, noRadio.src] = [urlRadioOn, urlRadioOff];
		wrapper.append(htmlObject);
	},
	false
);

noWa.addEventListener(
	'click',
	function (e) {
		[noRadio.src, yesRadio.src] = [urlRadioOn, urlRadioOff];
		wrapper.removeChild(htmlObject);
	},
	false
);
