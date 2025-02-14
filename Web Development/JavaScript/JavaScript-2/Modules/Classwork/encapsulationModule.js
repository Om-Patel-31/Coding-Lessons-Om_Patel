const encapsulationModule = (function() {
    let privateVar = "This is a private variable";

    function getPrivateVar() {
        return privateVar;
    }

    return {
        getPrivateVar: getPrivateVar
    };
})();

export default encapsulationModule;