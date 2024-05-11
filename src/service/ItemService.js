import axios from 'axios';

const Item_Base_URL = "http://localhost:8080/items";

class ItemService {

    // get all item list
    getItems(){
        return axios.get(Item_Base_URL);
    }

    // save item
    addItem(item){
        const formData = new FormData();
        formData.append('file', item.uploadedImage); // Assuming item.file is the uploaded file
        formData.append('name', item.name);
        formData.append('description', item.description);
        formData.append('youtubeUrl', item.youtubeUrl);
    
        return axios.post(Item_Base_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    // get item by id
    getItemById(itemID){
        return axios.get(Item_Base_URL + '/' + itemID);
    }

    // get item by name
    getItemByName(itemName) {
        return axios.get(`${Item_Base_URL}/${itemName}`);
    }
}

const itemService = new ItemService();
export default itemService;