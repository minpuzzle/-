// 레시피 데이터
const recipes = [
  {
      id: 0,
      name: "비빔밥",
      type: "한식",
      ingredients: ["밥", "나물", "고추장", "참기름", "달걀"],
      instructions: ["나물을 데쳐 간장 참기름, 마늘로 무칩니다."," 소고기를 간장, 설탕, 다진 마늘로 볶습니다." ," 밥 위에 나물, 고기, 고추장, 계란 프라이를 올리고 비벼줍니다."],
      img: "bibimbap.jpg"
  },
  {
      id: 1,
      name: "스파게티",
      type: "양식",
      ingredients: ["스파게티 면", "토마토 소스", "치즈"],
      instructions: "1. 스파게티 면을 삶습니다. 2. 팬에 토마토 소스를 데우고 삶은 면을 섞습니다. 3. 접시에 담고 치즈를 뿌려줍니다.",
      img: "spaghetti.jpg"
  },
  {
      id: 2,
      name: "초밥",
      type: "일식",
      ingredients: ["밥", "생선", "김"],
      instructions: "1. 초밥용 밥을 준비합니다. 2. 생선회를 얇게 썹니다. 3. 밥 위에 생선회를 얹고 김으로 고정합니다.",
      img: "sushi.jpg"
  }
];

// 레시피 목록 표시
function displayRecipes(recipeArray) {
  const recipeList = document.getElementById("recipe-list");
  recipeList.innerHTML = "";

  recipeArray.forEach(recipe => {
      const card = document.createElement("div");
      card.className = "recipe-card";
      card.onclick = () => goToDetailPage(recipe.id);

      card.innerHTML = `
          <img src="${recipe.img}" alt="${recipe.name}">
          <h3>${recipe.name}</h3>
      `;
      recipeList.appendChild(card);
  });
}

// 상세 페이지로 이동
function goToDetailPage(recipeId) {
  window.location.href = `정보.html?id=${recipeId}`;
}

// 드롭다운 토글
function toggleDropdown(type) {
  document.getElementById("type-dropdown").style.display = type === "type" ? "block" : "none";
  document.getElementById("ingredient-dropdown").style.display = type === "ingredient" ? "block" : "none";
}

// 종류별 필터
function filterByType(type) {
  const filteredRecipes = recipes.filter(recipe => recipe.type === type);
  displayRecipes(filteredRecipes);
  toggleDropdown(); // 드롭다운 닫기
}

// 검색 기능
function searchRecipe() {
  const searchTerm = document.getElementById("search-input").value.toLowerCase();
  const filteredRecipes = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchTerm)
  );
  displayRecipes(filteredRecipes);
}

// 초기 레시피 목록 표시
window.onload = () => displayRecipes(recipes);

// URL에서 레시피 ID 가져오기
const urlParams = new URLSearchParams(window.location.search);
const recipeId = parseInt(urlParams.get("id"));

// 레시피 정보 가져오기
const recipe = recipes.find(r => r.id === recipeId);

// 페이지에 데이터 표시
document.getElementById("recipe-name").textContent = recipe.name;
document.getElementById("recipe-img").src = recipe.img;
document.getElementById("recipe-img").alt = recipe.name;

// 재료를 한 줄로 표시
document.getElementById("recipe-ingredients").textContent = recipe.ingredients.join(", ");

// 만드는 방법 표시
document.getElementById("recipe-instructions").textContent = recipe.instructions;

