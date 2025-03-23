function runPython() {
    let code = document.getElementById("code").value;
    let output = document.getElementById("output");
    
    try {
        output.innerHTML = ''; // Clear previous output
        __BRYTHON__.run_script(code);
    } catch (error) {
        output.innerHTML = "Error: " + error;
    }
}