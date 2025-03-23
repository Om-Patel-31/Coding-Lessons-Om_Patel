document.addEventListener("DOMContentLoaded", function () {
    var codeMirrorEditor = CodeMirror.fromTextArea(document.getElementById("code"), {
        mode: "python",
        theme: "dracula",
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true,
        indentUnit: 4,
        tabSize: 4
    });

    // Expose CodeMirror editor globally
    window.getCode = function () {
        return codeMirrorEditor.getValue();
    };
});