import AsyncStorage from '@react-native-async-storage/async-storage';

const PLACES_STORAGE_KEY = '@places_storage_key';


export const loadPlaces = async () =>{
    try{
        const storedPlaces = await AsyncStorage.getItem(PLACES_STORAGE_KEY);
        return storedPlaces ? JSON.parse(storedPlaces) : [];
    }catch(error){
        console.error('Failed to load places: ', error);
        return[];
    }
};

export const savePlaces = async (places) =>{
    try {
        await AsyncStorage.setItem(PLACES_STORAGE_KEY, JSON.stringify(places)); 
    } catch (error) {
        console.error('Erro to save places: ', error);        
    }
}