document.addEventListener('DOMContentLoaded', () => {
    const valueEl = document.querySelector('[data-test-id="cur-value"]');
    const input = document.querySelector('[data-test-id="input-value"]');
    const form = document.querySelector('.input-wrapper');
    const label = document.querySelector('.input-label');

    const min_curr = -1000000000;
    const max_curr = 1000000000;

    let currentValue = 0;

    const updateView = () => {
        valueEl.classList.remove('value-plus', 'value-minus');
        valueEl.textContent = currentValue;
        if (currentValue > 0) valueEl.classList.add('value-plus');
        else if (currentValue < 0) valueEl.classList.add('value-minus');
    };

    function validation(value, min, max) {
        if (value < min) return min;
        if (value > max) return max;
        return value;
    }

    document.querySelector('[data-test-id="btn-minus-3"]').addEventListener('click', () => {
        currentValue = validation(currentValue-3, min_curr, max_curr);
        updateView();
    });
    document.querySelector('[data-test-id="btn-minus-2"]').addEventListener('click', () => {
        currentValue = validation(currentValue-2, min_curr, max_curr);
        updateView();
    });
    document.querySelector('[data-test-id="btn-minus-1"]').addEventListener('click', () => {
        currentValue = validation(currentValue-1, min_curr, max_curr);
        updateView();
    });

    document.querySelector('[data-test-id="btn-plus-1"]').addEventListener('click', () => {
        currentValue = validation(currentValue+1, min_curr, max_curr);
        updateView();
    });
    document.querySelector('[data-test-id="btn-plus-2"]').addEventListener('click', () => {
        currentValue = validation(currentValue+2, min_curr, max_curr);
        updateView();
    });
    document.querySelector('[data-test-id="btn-plus-3"]').addEventListener('click', () => {
        currentValue = validation(currentValue+3, min_curr, max_curr);
        updateView();
    });
    document.querySelector('[data-test-id="btn-reset"]').addEventListener('click', () => {
        currentValue = 0;
        updateView();
    });

    input.addEventListener('input', () => {
        const value = input.value;
        if (value==='') {
            label.style.display = '';
        } else {
            label.style.display = 'none';
        }
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        const val = input.value;

        if (!/^-?\d+$/.test(val)) {
            input.value = '';
            label.style.display = 'block';
            return;
        }

        let number = Number(val);
        if (number < -10000000|| number > 10000000) {
            input.value = '';
            label.style.display = 'block';
            return;
        }

        currentValue = validation(number, min_curr, max_curr);
        updateView();

        input.value = '';
        label.style.display = 'block';
    });
});