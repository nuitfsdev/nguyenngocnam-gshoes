import axios from 'axios';

const shoes = async function () {
  try{
    const response = await axios.get('https://gshoesbe.onrender.com/api/product');
    console.log(response)
    return response.data;
  }catch(errors)
  {
   console.log(errors.message)
  }
}
  export default shoes;