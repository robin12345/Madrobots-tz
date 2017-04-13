function eventSubmitForm () {
    var value = document.getElementsByClassName('search__input')[0],
        el = document.getElementsByClassName('error')[0];
    el.style.display = value.value.length < 3 ? 'inline-block' : 'none';
}