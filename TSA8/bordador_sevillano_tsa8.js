document.addEventListener('DOMContentLoaded', () => {
    const flexboxContainer = document.getElementById('flexboxContainer');
    const growScale = 0.2;

    document.getElementById('reset-flexbox').addEventListener('click', () => {
        flexboxContainer.style.flexDirection = 'row';
        flexboxContainer.style.justifyContent = 'flex-start';
        flexboxContainer.style.alignItems = 'stretch';
        flexboxContainer.style.gap = '10px';
    });

    document.getElementById('gap-value').addEventListener('input', (e) => {
        flexboxContainer.style.gap = `${e.target.value}px`;
    });

    document.getElementById('flex-row').addEventListener('click', () => {
        flexboxContainer.style.flexDirection = 'row';
        console.log('Flex Direction: Row');
    });

    document.getElementById('flex-column').addEventListener('click', () => {
        flexboxContainer.style.flexDirection = 'column';
        console.log('Flex Direction: Column');
    });

    document.getElementById('start').addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'flex-start';
        console.log('Justify Content: Start');
    });

    document.getElementById('center').addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'center';
        console.log('Justify Content: Center');
    });

    document.getElementById('end').addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'flex-end';
        console.log('Justify Content: End');
    });

    document.getElementById('space-around').addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'space-around';
        console.log('Justify Content: Space Around');
    });

    document.getElementById('space-between').addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'space-between';
        console.log('Justify Content: Space Between');
    });

    document.getElementById('space-evenly').addEventListener('click', () => {
        flexboxContainer.style.justifyContent = 'space-evenly';
        console.log('Justify Content: Space Evenly');
    });

    document.getElementById('align-start').addEventListener('click', () => {
        flexboxContainer.style.alignItems = 'flex-start';
        console.log('Align Items: Start');
    });

    document.getElementById('align-center').addEventListener('click', () => {
        flexboxContainer.style.alignItems = 'center';
        console.log('Align Items: Center');
    });

    document.getElementById('align-end').addEventListener('click', () => {
        flexboxContainer.style.alignItems = 'flex-end';
        console.log('Align Items: End');
    });

    const boxes = ['box1', 'box2', 'box3'];
    
    document.getElementById('reset-flex-grow').addEventListener('click', () => {
        boxes.forEach(boxId => {
            document.getElementById(boxId).style.flexGrow = 0;
            document.getElementById(`grow-${boxId}`).value = 0;
        });
        console.log('Reset Flex Grow');
    });

    document.getElementById('grow-all').addEventListener('click', () => {
        boxes.forEach(boxId => {
            document.getElementById(boxId).style.flexGrow = growScale;
            document.getElementById(`grow-${boxId}`).value = growScale;
        });
        console.log('Grow All');
    });

    boxes.forEach(boxId => {
        document.getElementById(`grow-${boxId}`).addEventListener('input', (e) => {
            const scaledValue = e.target.value * growScale;
            document.getElementById(boxId).style.flexGrow = scaledValue;
            console.log(`${boxId} Flex Grow: ${scaledValue}`);
        });
    });
});
