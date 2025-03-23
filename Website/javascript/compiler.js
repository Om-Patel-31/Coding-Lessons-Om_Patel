async function loadPyodideAndRun() {
    window.pyodide = await loadPyodide();
}
loadPyodideAndRun();

async function runPython() {
    let code = document.getElementById("code").value;
    try {
        let output = await pyodide.runPythonAsync(code);
        document.getElementById("output").innerText = output;
    } catch (error) {
        document.getElementById("output").innerText = "Error: " + error;
    }
}