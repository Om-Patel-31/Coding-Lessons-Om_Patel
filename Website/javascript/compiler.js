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
        let output = await pyodide.runPythonAsync(code);
        document.getElementById("output").innerText = "Output:\n" + output;
    } catch (error) {
        document.getElementById("output").innerText = "Error:\n" + error;
    }
}