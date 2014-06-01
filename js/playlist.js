var playlistPrefix = '14年PETS-2模拟考场（';
var playlistEndfix = '）';
var playlistType = ["试题", "长对话", "短对话", "独白", "语音点拨", "13年9月PETS2真题", "14年3月PETS2真题"];
var playlistTypeCount = [38, 9, 9, 3, 1, 1, 1];
var ChineseNumber = ['一', '二', '三', '四', '五', '六', '七', '八', '九'];
var playlist = [];
var i, j, listCountNum = '', playlistItem = '';
for (i = 0; i < playlistType.length; i++) {
    for (j = 0; j < playlistTypeCount[i]; j++) {
    listCountNum = playlistTypeCount[i] < 10 ? ChineseNumber[j] : j+1;
    listCountNum = playlistTypeCount[i] === 1 ? '' : listCountNum;
    playlistItem = playlistPrefix + playlistType[i] + listCountNum + playlistEndfix;
    playlist.push(playlistItem);
    }
}
console.log(playlist)