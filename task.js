const editorElement = document.getElementById('editor');

editorElement.addEventListener('input', onChangeEditor);
editorElement.value = localStorage.getItem('text');

document.getElementById('btn-clear').addEventListener('click', e => {
    editorElement.value = '';
    editorElement.dispatchEvent(new KeyboardEvent('input'));
});

function onChangeEditor(e) {
    localStorage.setItem('text', editorElement.value);
}
