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

        // Clear CodeMirror content when clear button is clicked
        document.getElementById("clear-btn").addEventListener("click", function () {
            codeMirrorEditor.setValue("");
        });

        // Clear output content when clear output button is clicked
        document.getElementById("clear-output-btn").addEventListener("click", function () {
            document.getElementById("output").textContent = "";
        });
    } else {
        console.error("CodeMirror failed to load.");
    }
});