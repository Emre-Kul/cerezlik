function sayHi() {
    return "hi";
}

function sayMyName(name = "Heisenberg") {
    if(name.toLocaleLowerCase() === "heisenberg") {
        return "You're Goddamn Right";
    }
    return name;
}

module.exports = {
    sayHi,
    sayMyName,
}