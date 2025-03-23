function loadCode(filePath, elementId) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).textContent = data;
        })
        .catch(error => {
            console.error('Error loading the file:', error);
            document.getElementById(elementId).textContent = "Failed to load the code.";
        });
}

loadCode("./classes.py", 'codeDisplay1');
loadCode("./Inheritance_and_Polymorphism.py", 'codeDisplay2');
loadCode("./basta_fazoolin'.py", 'codeDisplay3');
loadCode("./Become_a_pokemon_master.py", 'codeDisplay4');