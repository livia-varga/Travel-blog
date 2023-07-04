import blogService from "../services/blogService";


const API_URL = 'https://travel-blog-b1188-default-rtdb.europe-west1.firebasedatabase.app/'

export default function FirebaseDatabase() {
    return (
        <>
            <button onClick={getData}>get data</button>
        </>
    );

    function getData() {

        const baseURL = "https://travel-blog-b1188-default-rtdb.europe-west1.firebasedatabase.app/"

        fetch(`${baseURL}/.json`)
            .then(resp => resp.json())
            .then(data => console.log(data));
    }
}

   
