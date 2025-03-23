document.addEventListener("DOMContentLoaded", function () {
    if (typeof CodeMirror !== "undefined") {
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

        // Update Brython textarea with CodeMirror content before running code
        document.getElementById("run-btn").addEventListener("click", function () {
            document.getElementById("code").value = getCode();
        });
    } else {
        console.error("CodeMirror failed to load.");
    }
});