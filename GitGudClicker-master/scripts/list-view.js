const initViews = function(){
    getFromGoogleDB();
}

const showComments = function(sheetData){
    clearChat();
    for (let row of sheetData.values){
        addComment(row);
    }
}

const addComment = function(row){
    const [time, name, score] = row;
    const List = document.getElementById('leaderboardList');
    List.innerHTML += `<li>${time} ${name} ${score}</li>`;
}

const clearChat = function(){
    const List = document.getElementById('leaderboardList');
    List.innerHTML = '';
}

initViews();