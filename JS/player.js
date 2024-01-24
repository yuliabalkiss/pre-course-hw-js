//data

let playList = {
    title: 'Hip-Hop Hits',
    coverImageUrl: './hip-hop-hits.jpg',
    info: {
        tracksCount: 4,
        totalTracksDurationInSeconds:733,
    },
    tracks:[

        {
            coverImageUrl: 'track1.png',
            artistName:'Eminem',
            title: 'Rap God',
            fileUrl:'Eminem_-_Rap_God.mp3',
            isHot: false,
        },
        {

            coverImageUrl: 'track2.mp3',
            artistName:'50cent',
            title: 'In da Club',
            fileUrl:'50_Cent_-_In_Da_Club_FlexyOkay.mp3',
            isHot: true,
        }
    ]
}
// render

renderPlayList(playList)
function renderPlayList(playListForRendering){
    let playListImgElement = document.createElement('img');
    playListImgElement.src = playList.coverImageUrl;
    document.body.append(playListImgElement);

    let playListTitleElement = document.createElement('h2');
    playListTitleElement.append(playList.title);
    document.body.append(playListTitleElement);

    let tracksListElement = document.createElement('ul');

    let track1ListElement = document.createElement('li')
    track1ListElement.append(playList.tracks[0].artistName + ' - ' + playList.tracks[0].title)

    let track2ListElement = document.createElement('li');
    track2ListElement.append(playList.tracks[1].artistName + ' - ' + playList.tracks[1].title)

    tracksListElement.append(track1ListElement)
    tracksListElement.append(track2ListElement)

    document.body.append(tracksListElement)

}

