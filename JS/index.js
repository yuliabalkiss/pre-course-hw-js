//
// // data
// const info = {
//     title: 'it-incubator',
//     graduatesCount: 2000,
//     areYouChampion: true,
//     technologies: [
//         {title: 'Front'},
//         {title: 'Back'},
//         {title: 'DevOps'},
//
//       ],
// };
//
//
//
// // render
//     let pageTitleElement = document.createElement('h1');
//     pageTitleElement.innerText = info.title;
//     document.body.append(pageTitleElement);
//
//     let graduatesCountElement = document.createElement('input');
//     graduatesCountElement.value = info.graduatesCount;
//     document.body.append(graduatesCountElement);
//
//     let areYouChampionElement = document.createElement('input');
//     areYouChampionElement.type = 'checkbox';
//     areYouChampionElement.checked = info.areYouChampion;
//
//     document.body.append(areYouChampionElement);
//     let  techSelectElement = document.createElement('select');
//     let techSelectOption0Element = document.createElement('option')
//     techSelectOption0Element.append(info.technologies[0].title)
//    let techSelectOption1Element = document.createElement('option')
//     techSelectOption1Element.append(info.technologies[1].title)
//      let techSelectOption2Element = document.createElement('option')
//     techSelectOption2Element.append(info.technologies[2].title)

    techSelectElement.append(techSelectOption0Element,techSelectOption1Element,techSelectOption2Element)
    document.body.append(techSelectElement)