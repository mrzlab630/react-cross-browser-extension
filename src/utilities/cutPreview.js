function cutPreview(textPrev,limit) {

    if(!textPrev || typeof limit !== 'number'){
        return null;
    }

    if(textPrev.length <= limit){
        return textPrev;
    }

    let text = textPrev.substring(0,limit);

    return text.substring(0,Math.max(text.lastIndexOf(' '),text.lastIndexOf(',')-1)) + '...';

};

export default cutPreview;