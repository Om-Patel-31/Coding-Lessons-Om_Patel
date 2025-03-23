async function loadPyodideAndRun() {
    window.pyodide = await loadPyodide();
    console.log("Pyodide loaded successfully!");
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadPyodideAndRun();
});

async function runPython() {
    if (!window.pyodide) {
        document.getElementById("output").innerText = "Error: Pyodide is not yet loaded!";
        return;
    }

    let code = document.getElementById("code").value;
    try {
        let wrappedCode = `
import sys
from io import StringIO

old_stdout = sys.stdout
sys.stdout = new_stdout = StringIO()

try:
    exec(${JSON.stringify(code)})
except Exception as e:
    print("Error:", e)

sys.stdout = old_stdout
new_stdout.getvalue()
        `;

        let output = await pyodide.runPythonAsync(wrappedCode);
        document.getElementById("output").innerText = output;
    } catch (error) {
        document.getElementById("output").innerText = "Error:\n" + error;
    }
}