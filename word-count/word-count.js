function WordCount(str){
    const arrayString = str.split(' ');

    return arrayString.filter(word => word !== '').length;
};

function returnWordCount(){
    var stringText = document.querySelector('#stringtext').value;
    if(WordCount(stringText) == '1'){
        document.querySelector('#wordcount').innerText = (WordCount(stringText)) + ' word';
    }else
    document.querySelector('#wordcount').innerText = (WordCount(stringText)) + ' words';
}

