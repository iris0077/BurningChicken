// Étape 1 : Obtenir une liste de plats de la catégorie "chicken"
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken')
  .then(response => response.json())
  .then(data => {
    const meals = data.meals;
    
    // Choisir un plat aléatoire
    const randomIndex = Math.floor(Math.random() * meals.length);
    const randomMealId = meals[randomIndex].idMeal;

    // Étape 2 : Obtenir les détails complets du plat
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomMealId}`);
  })
  .then(response => response.json())
  .then(data => {
    const mealDetails = data.meals[0];
    console.log("Détails de la recette :", mealDetails);
// Affichage du titre de la recette
    document.getElementById("titreRecette").textContent = mealDetails.strMeal;

    // Récupérer le titre original
const titreOriginal = mealDetails.strMeal;

// Remplacer "chicken" (insensible à la casse) par "cop"
const titreModifie = titreOriginal.replace(/chicken/gi, "Cop");

// Afficher le titre modifié dans la page
document.getElementById("titreRecette").textContent = titreModifie;



    // Supposons que mealDetails est l'objet récupéré depuis l'API
const instructions = mealDetails.strInstructions;
const modifiedText = instructions.replace(/chicken/gi, "cop");


// On formate les instructions pour l'affichage HTML
document.getElementById("instructionsRecette").innerHTML = modifiedText.replace(/\r\n/g, "<br>");



  })
  .catch(error => {
    console.error("Erreur lors de la récupération des données :", error);
  });
