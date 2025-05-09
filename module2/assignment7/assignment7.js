window.onload = function () {
    const list = document.querySelector("#list");
    const max = parseInt(prompt('Give me the highest number on the dice and I will try to roll that value.'))
    while(true){
        let roll = RollDice(max)
        if (roll === max){
            const element = document.createElement("li");
            element.innerHTML = roll;
            list.append(element);
            break
        }
        const element = document.createElement("li");
        element.innerHTML = roll;
        list.append(element);
    }
}

function RollDice(max){
    return Math.floor(Math.random() * max + 1);
}