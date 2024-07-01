document.addEventListener('DOMContentLoaded', () => {
    const flexboxContainer = document.getElementById('flexboxContainer');
    const resetBtn = document.getElementById('resetBtn');
    const gapInput = document.getElementById('gap');
    const rowBtn = document.getElementById('rowBtn');
    const columnBtn = document.getElementById('columnBtn');
    const justifyStartBtn = document.getElementById('justifyStartBtn');
    const justifyCenterBtn = document.getElementById('justifyCenterBtn');
    const justifyEndBtn = document.getElementById('justifyEndBtn');
    const justifySpaceBetweenBtn = document.getElementById('justifySpaceBetweenBtn');
    const justifySpaceAroundBtn = document.getElementById('justifySpaceAroundBtn');
    const justifySpaceEvenlyBtn = document.getElementById('justifySpaceEvenlyBtn');
    const alignStartBtn = document.getElementById('alignStartBtn');
    const alignCenterBtn = document.getElementById('alignCenterBtn');
    const alignEndBtn = document.getElementById('alignEndBtn');
    const growResetBtn = document.getElementById('growResetBtn');
    const growAllBtn = document.getElementById('growAllBtn');
    const box1GrowInput = document.getElementById('box1Grow');
    const box2GrowInput = document.getElementById('box2Grow');
    const box3GrowInput = document.getElementById('box3Grow');
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const box3 = document.getElementById('box3');

    resetBtn.addEventListener('click', () => {
        flexboxContainer.style.gap = '0px';
        flexboxContainer.style.flexDirection = 'row';
        flexboxContainer.style.justifyContent = 'flex-start';
        flexboxContainer.style.alignItems = 'flex-start';
        gapInput.value = 0;
        box1GrowInput.value = 0;
        box2GrowInput.value = 0;
        box3GrowInput.value = 0;
        box1.style.flexGrow = 0;
        box2.style.flexGrow = 0;
        box3.style.flexGrow = 0;
    });

    gapInput.addEventListener('input', () => {
        flexboxContainer.style.gap = `${gapInput.value}px`;
    });

    rowBtn.addEventListener('click', () => {
        flexboxContainer.style.flexDirection = 'row';
    });

    columnBtn.addEventListener('click', () => {
        flexboxContainer.style.flexDirection = 'column';
    });

    justifyStartBtn.addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'flex-start';
    });

    justifyCenterBtn.addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'center';
    });

    justifyEndBtn.addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'flex-end';
    });

    justifySpaceBetweenBtn.addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'space-between';
    });

    justifySpaceAroundBtn.addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'space-around';
    });

    justifySpaceEvenlyBtn.addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'space-evenly';
    });

    alignStartBtn.addEventListener('click', () => {
        flexboxContainer.style.alignItems = 'flex-start';
    });

    alignCenterBtn.addEventListener('click', () => {
        flexboxContainer.style.alignItems = 'center';
    });

    alignEndBtn.addEventListener('click', () => {
        flexboxContainer.style.alignItems = 'flex-end';
    });

    growResetBtn.addEventListener('click', () => {
        box1GrowInput.value = 0;
        box2GrowInput.value = 0;
        box3GrowInput.value = 0;
        box1.style.flexGrow = 0;
        box2.style.flexGrow = 0;
        box3.style.flexGrow = 0;
    });

    growAllBtn.addEventListener('click', () => {
        box1GrowInput.value = 1;
        box2GrowInput.value = 1;
        box3GrowInput.value = 1;
        box1.style.flexGrow = 1;
        box2.style.flexGrow = 1;
        box3.style.flexGrow = 1;
    });

    box1GrowInput.addEventListener('input', () => {
        box1.style.flexGrow = box1GrowInput.value;
    });

    box2GrowInput.addEventListener('input', () => {
        box2.style.flexGrow = box2GrowInput.value;
    });

    box3GrowInput.addEventListener('input', () => {
        box3.style.flexGrow = box3GrowInput.value;
    });
});
