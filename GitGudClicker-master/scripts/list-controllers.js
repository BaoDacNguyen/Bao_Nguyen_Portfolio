const listControllers = function(){
    const displayButton = document.getElementById('display');
    displayButton.addEventListener('click', submitEvent);
}

const submitEvent = function(){
    const formData = new Object();
    formData[name] = useName();
    formData[score] = getScore();

    postToGoogleDB(formData);
}