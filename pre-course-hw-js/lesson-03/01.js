// code
const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    let GermanyFlagColors = []
    for(let i = 0; i<colors.length; i++){
        if(colors[i] === 'черный' || colors[i]=== 'красный' || colors[i]=== 'желтый'){
            GermanyFlagColors.push(colors[i])
        }
    }
    return GermanyFlagColors.join('-')
}

console.log(createColorString(colors));
