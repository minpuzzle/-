// 레시피 데이터
const recipes = [
  {
      id: 0,
      name: "비빔밥",
      type: "한식",
      ingredients: ["밥", "나물", "고추장", "참기름", "달걀"],
      instructions: ["나물을 데쳐 간장 참기름, 마늘로 무칩니다.", "소고기를 간장, 설탕, 다진 마늘로 볶습니다.", "밥 위에 나물, 고기, 고추장, 계란 프라이를 올리고 비벼줍니다."],
      img: "bibimbap.webp"
  },
  {
    id: 1,
    name: "불고기",
    type: "한식",
    ingredients: ["소고기", "간장"," 설탕"," 마늘"," 양파"," 배"],
    instructions: "1. 스파게티 면을 삶습니다. 2. 팬에 토마토 소스를 데우고 삶은 면을 섞습니다. 3. 접시에 담고 치즈를 뿌려줍니다.",
    img: "spaghetti.jpg"
  },
  {
    id: 2,
    name: "된장찌개",
    type: "한식",
    ingredients: ["된장", "두부", "애호박", "감자", "대파"],
    instructions: "1. 스파게티 면을 삶습니다. 2. 팬에 토마토 소스를 데우고 삶은 면을 섞습니다. 3. 접시에 담고 치즈를 뿌려줍니다.",
    img: "spaghetti.jpg"
  },
  {
    id: 3,
    name: "김치찌개",
    type: "한식",
    ingredients: ["김치", "돼지고기", "두부", "대파", "고춧가루"],
    instructions: "1. 스파게티 면을 삶습니다. 2. 팬에 토마토 소스를 데우고 삶은 면을 섞습니다. 3. 접시에 담고 치즈를 뿌려줍니다.",
    img: "spaghetti.jpg"
  },
  {
    id: 4,
    name: "스파게티",
    type: "양식",
    ingredients: ["스파게티 면", "토마토 소스", "치즈"],
    instructions: "1. 스파게티 면을 삶습니다. 2. 팬에 토마토 소스를 데우고 삶은 면을 섞습니다. 3. 접시에 담고 치즈를 뿌려줍니다.",
    img: "spaghetti.jpg"
  },
  {
    id: 5,
    name: "까르보나라",
    type: "양식",
    ingredients: ["스파게티 면", "베이컨", "달걀", "치즈", "생크림"],
    instructions: "1. 스파게티 면을 삶습니다. 2. 팬에 토마토 소스를 데우고 삶은 면을 섞습니다. 3. 접시에 담고 치즈를 뿌려줍니다.",
    img: "spaghetti.jpg"
  },
  {
    id: 6,
    name: "치킨 파마산",
    type: "양식",
    ingredients: ["닭가슴살, 빵가루", "파마산 치즈", "토마토소스"],
    instructions: "1. 스파게티 면을 삶습니다. 2. 팬에 토마토 소스를 데우고 삶은 면을 섞습니다. 3. 접시에 담고 치즈를 뿌려줍니다.",
    img: "spaghetti.jpg"
  },
  {
    id: 7,
    name: "라자냐",
    type: "양식",
    ingredients: ["라자냐 면","다진 소고기", "토마토소스", "모짜렐라"],
    instructions: "1. 스파게티 면을 삶습니다. 2. 팬에 토마토 소스를 데우고 삶은 면을 섞습니다. 3. 접시에 담고 치즈를 뿌려줍니다.",
    img: "spaghetti.jpg"
  },
  {
    id: 8,
    name: "초밥",
    type: "일식",
    ingredients: ["밥", "생선", "김"],
    instructions: "1. 초밥용 밥을 준비합니다. 2. 생선회를 얇게 썹니다. 3. 밥 위에 생선회를 얹고 김으로 고정합니다.",
    img: "sushi.jpg"
  },
  {
    id: 9,
    name: "라멘",
    type: "일식",
    ingredients: ["라멘 면", "돼지뼈", "닭뼈", "다시마", "생강", "대파", "간장", "차슈(돼지고기 조림)", "삶은 달걀", "김", "숙주"],
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
const instructionsElement = document.getElementById("recipe-instructions");

// 순서 있는 목록(ol) 생성
const ol = document.createElement("ol");

// 각 단계를 목록 항목(li)으로 추가
recipe.instructions.forEach(step => {
  const li = document.createElement("li"); // 목록 항목 생성
  li.textContent = step; // 텍스트 내용 설정
  ol.appendChild(li); // ol에 항목 추가
});

// 생성한 ol을 #recipe-instructions에 추가
instructionsElement.appendChild(ol);


