function goToPage(pageUrl) {
    window.location.href = pageUrl;
}
// 미리 추가된 레시피 데이터
const recipes = [
    { title: "김치찌개", content: "돼지고기, 김치, 두부, 고추가루를 넣고 끓입니다.", image: "kimchi_stew.jpg", type: "한국", ingredients: ["돼지고기", "김치", "두부"] },
    { title: "된장찌개", content: "된장, 두부, 감자, 애호박을 넣고 끓입니다.", image: "doenjang_stew.jpg", type: "한국", ingredients: ["된장", "두부", "감자"] },
    { title: "비빔밥", content: "밥 위에 여러 가지 나물과 고추장을 넣고 비빕니다.", image: "bibimbap.jpg", type: "한국", ingredients: ["밥", "나물", "고추장"] },
    { title: "불고기", content: "고기를 양념에 재워 구워서 먹는 한국 요리입니다.", image: "bulgogi.jpg", type: "한국", ingredients: ["소고기", "양념"] },
    { title: "잡채", content: "당면과 다양한 채소, 고기를 볶아서 만듭니다.", image: "japchae.jpg", type: "한국", ingredients: ["당면", "채소", "고기"] }
    // 다른 레시피 추가 가능
  ];

  // 레시피 목록 표시
  function displayRecipes(recipesToShow) {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    recipesToShow.forEach((recipe, index) => {
      const recipeCard = document.createElement('div');
      recipeCard.className = 'recipe-card';
      recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
      `;
      recipeList.appendChild(recipeCard);
    });
  }

  // 드롭다운 토글
  function toggleDropdown(type) {
    document.getElementById('type-dropdown').style.display = type === 'type' ? 'block' : 'none';
    document.getElementById('ingredient-dropdown').style.display = type === 'ingredient' ? 'block' : 'none';
  }

  // 종류별 필터
  function filterByType(type) {
    const filteredRecipes = recipes.filter(recipe => recipe.type === type);
    displayRecipes(filteredRecipes);
    toggleDropdown(); // 드롭다운 닫기
  }

  // 식재료별 검색
  function searchByIngredient() {
    const ingredient = document.getElementById('ingredient-input').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
      recipe.ingredients.some(ing => ing.toLowerCase().includes(ingredient))
    );
    displayRecipes(filteredRecipes);
    toggleDropdown(); // 드롭다운 닫기
  }

  // 검색 함수
  function searchRecipe() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm) ||
      recipe.content.toLowerCase().includes(searchTerm)
    );
    displayRecipes(filteredRecipes);
  }

  // 초기 레시피 목록 표시
  window.onload = () => displayRecipes(recipes);