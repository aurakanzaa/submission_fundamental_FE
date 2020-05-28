import '../component/meal-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document. querySelector("search-bar");
    const mealListElement = document.querySelector("meal-list");

    // const onButtonSearchClicked = async () => {
    //     try{
    //         const result = await DataSource.searchMeal(searchElement.value);
    //         renderResult(result);
    //     }catch (message) {
    //         fallbackResult(message);
    //     }
    // };
   
    const onButtonSearchClicked = () => {
        searchMeal(searchElement.nodeValue);
    };

    const searchMeal = async (keyword) => {
        // loaderElement.style.display = 'block';
        try {
            const result = await DataSource.searchMeal(keyword);
            renderResult(result);
        } catch {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        mealListElement.meals = results;
    };
  
    const fallbackResult = message => {
        mealListElement.renderError(message);
    };
  
    searchElement.clickEvent = onButtonSearchClicked;

    // const onButtonSearchClicked = () => {
    //     searchMeal(searchElement.nodeValue);
    // };

    // const searchMeal = async (keyword) => {
    //     // loaderElement.style.display = 'block';
    //     try {
    //         const result = await DataSource.searchMeal(keyword);
    //         renderResult(result);
    //     } catch {
    //         fallbackResult(message)
    //     }
    // };

    // const renderResult = result => {
    //     // loaderElement.style.display = 'none';
    //     mealListElement.meals = results;
    // };

    // const fallbackResult = message => {
    //     // loaderElement.style.display = 'none';
    //     mealListElement.renderError(message);
    // }

    // searchMeal('desserts');

    // searchElement.clickEvent = onButtonSearchClicked;
    
 };
  
 export default main;