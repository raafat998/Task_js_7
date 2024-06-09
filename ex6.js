document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton');
    const songTextInput = document.getElementById('songTextInput');
    const playlist = document.getElementById('playlist');

    addButton.addEventListener('click', function() {
        const songName = songTextInput.value.trim();
        
        if (songName === '') {
            alert('Please enter a song name.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = songName;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px';

        deleteButton.addEventListener('click', function() {
            playlist.removeChild(li);
        });

        li.appendChild(deleteButton);
        playlist.appendChild(li);

        songTextInput.value = '';
    });
});