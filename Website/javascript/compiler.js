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

        // Function to get CodeMirror content
        function getCode() {
            return codeMirrorEditor.getValue();
        }

        // Function to set CodeMirror content
        function setCode(value) {
            codeMirrorEditor.setValue(value);
        }

        // Run button - updates textarea and triggers Brython
        document.getElementById("run-btn").addEventListener("click", function () {
            document.getElementById("code").value = getCode();
        });

        // Clear CodeMirror content
        document.getElementById("clear-btn").addEventListener("click", function () {
            setCode("");
        });

        // Clear output content
        document.getElementById("clear-output-btn").addEventListener("click", function () {
            document.getElementById("output").textContent = "";
        });

    } else {
        console.error("CodeMirror failed to load.");
    }
});