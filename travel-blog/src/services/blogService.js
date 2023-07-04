const API_URL = 'https://travel-blog-b1188-default-rtdb.europe-west1.firebasedatabase.app/'

function read() {
    return fetch(`${API_URL}.json`)
        .then(res => res.json())
        .then(data => console.log(data));
}

export default {
    read: read,
}