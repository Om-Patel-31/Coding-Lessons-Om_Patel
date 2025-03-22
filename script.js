document.getElementById('card-view-btn').addEventListener('click', function() {
    document.querySelector('.content-cards').classList.add('card-view');
    document.querySelector('.content-cards').classList.remove('list-view');
});

document.getElementById('list-view-btn').addEventListener('click', function() {
    document.querySelector('.content-cards').classList.add('list-view');
    document.querySelector('.content-cards').classList.remove('card-view');
});