function runPython() {
    // Get the Python code from the textarea
    let code = document.getElementById("code").value;
    
    // Check if the Brython is loaded
    if (!window.Brython) {
        document.getElementById("output").innerText = "Error: Brython is not yet loaded!";
        return;
    }

    try {
        // Execute Python code with Brython
        let output = __BRYTHON__.run_script(code);
        
        // Show the output
        document.getElementById("output").innerText = output;
    } catch (error) {
        document.getElementById("output").innerText = "Error:\n" + error;
    }
}