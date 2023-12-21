// api.ts
import axios from 'axios';

export const getProducts = async () => {
  try {
    const response = await axios.get('/sua-rota-de-api-aqui'); 
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
};
