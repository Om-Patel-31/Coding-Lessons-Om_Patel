// Function to load code from a file and display it in a specified container
function loadCode(filePath, elementId) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            // Insert the code into the designated element
            document.getElementById(elementId).innerHTML = "<code>" + data.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</code>";
        })
        .catch(error => {
            console.error('Error loading the file:', error);
            document.getElementById(elementId).innerHTML = "Failed to load the code.";
        });
}

loadCode("/Python/Classes/classes.py", 'codeDisplay1');
loadCode("/Python/Classes/Inheritance_and_Polymorphism.py", 'codeDisplay2');
loadCode("/Python/Classes/basta_fazoolin'.py", 'codeDisplay3');
loadCode("/Python/Classes/Become_a_pokemon_master.py", 'codeDisplay4');