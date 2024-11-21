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
    instructions: ["양념 만들기: 간장, 설탕, 다진 마늘, 배즙, 참기름을 섞어줍니다.","고기를 양념에 30분 이상 재웁니다.","팬에 양념한 고기와 양파를 함께 볶아 완성합니다."],
    img: "Bulgogi.webp"
  },
  {
    id: 2,
    name: "된장찌개",
    type: "한식",
    ingredients: ["된장", "두부", "애호박", "감자", "대파"],
    instructions: ["멸치 육수 준비: 물에 멸치와 다시마를 넣고 끓여 육수를 만듭니다.","된장 풀기: 육수에 된장을 넣고 잘 풀어줍니다.","두부, 애호박, 감자 등을 넣어 끓이다가 마지막에 대파를 추가합니다."],
    img: "Doenjang Jjigae.webp"
  },
  {
    id: 3,
    name: "김치찌개",
    type: "한식",
    ingredients: ["김치", "돼지고기", "두부", "대파", "고춧가루"],
    instructions: ["돼지고기를 팬에 볶아 향을 내고, 김치를 넣어 함께 볶습니다.","물을 부어 끓이고 두부를 넣습니다." ,"고춧가루와 간장으로 간을 맞춥니다."],
    img: "Kimchi Jjigae.webp"
  },
  {
    id: 4,
    name: "스파게티",
    type: "양식",
    ingredients: ["스파게티 면", "토마토 소스", "치즈"],
    instructions: ["스파게티면을 끓는 소금물에 삶아 물기를 뺍니다.","팬에 다진 소고기와 양파를 볶다가 토마토소스를 넣고 끓입니다.","삶은 스파게티면에 소스를 부어 섞어줍니다."],
    img: "Spaghetti.webp"
  },
  {
    id: 5,
    name: "까르보나라",
    type: "양식",
    ingredients: ["스파게티 면", "베이컨", "달걀", "치즈", "생크림"],
    instructions: ["스파게티면을 삶아 물기를 뺍니다.","팬에 베이컨을 볶아 기름을 냅니다.","달걀, 치즈, 생크림을 섞어 만든 소스를 삶은 면에 섞고, 베이컨을 넣어줍니다.","팬에 소스를 넣고 낮은 온도로 섞으며 졸입니다."],
    img: "Carbonara.webp"
  },
  {
    id: 6,
    name: "치킨 파마산",
    type: "양식",
    ingredients: ["닭가슴살, 빵가루", "파마산 치즈", "토마토소스"],
    instructions: ["닭가슴살에 밀가루, 달걀, 빵가루 순서로 튀김옷을 입힙니다.","닭가슴살을 팬에 튀기듯 굽습니다.","토마토소스와 치즈를 닭 위에 얹어 오븐에 구워 마무리합니다."],
    img: "Chicken Parmesan.webp"
  },
  {
    id: 7,
    name: "라자냐",
    type: "양식",
    ingredients: ["라자냐 면","다진 소고기", "토마토소스", "모짜렐라"],
    instructions: ["라자냐 면을 삶고, 다진 고기를 토마토소스와 함께 볶습니다.","오븐용 그릇에 라자냐 면, 고기소스, 모짜렐라 치즈를 반복적으로 층층이 쌓습니다.","오븐에서 180°C로 30분 정도 구워냅니다."],
    img: "Lasagna.webp"
  },
  {
    id: 8,
    name: "초밥",
    type: "일식",
    ingredients: ["밥", "생선", "김"],
    instructions: ["따뜻한 밥에 식초, 설탕, 소금을 섞어 초밥용 밥을 만듭니다.","생선을 얇고 균일하게 썹니다.","손으로 밥을 작게 뭉치고 와사비를 얇게 발라 생선을 올립니다."],
    img: "sushi.webp"
  },
  {
    id: 9,
    name: "라멘",
    type: "일식",
    ingredients: ["라멘 면", "돼지뼈", "닭뼈", "다시마", "생강", "대파", "간장", "차슈(돼지고기 조림)", "삶은 달걀", "김", "숙주"],
    instructions: ["돼지뼈와 닭뼈를 찬물에 담가 핏물을 제거한 뒤 물에 넣고 생강, 대파, 다시마를 넣고 3시간 이상 끓여 육수를 만듭니다.","차슈는 간장, 설탕, 생강, 미림으로 만든 양념에 돼지고기를 졸여 준비합니다.","라멘 면을 삶아 그릇에 담고, 육수를 부어줍니다.","차슈, 삶은 달걀, 숙주, 김을 올려 완성합니다."],
    img: "Ramen.webp"
  },
  {
    id: 10,
    name: "우동",
    type: "일식",
    ingredients: ["우동 면, 다시마", "가쓰오부시", "간장", "미림", "대파", "가마보코(어묵)", "튀김 부스러기"],
    instructions: ["다시마와 가쓰오부시를 물에 끓여 육수를 만듭니다.","육수에 간장과 미림을 넣어 간을 맞춥니다.","우동 면을 삶아 그릇에 담고 뜨거운 육수를 붓습니다.","대파, 가마보코, 튀김 부스러기를 올립니다."],
    img: "Udon.webp"
  },
  {
    id: 11,
    name: "돈까스",
    type: "일식",
    ingredients: ["돼지고기(등심)", "밀가루", "달걀"," 빵가루", "소금", "후추", "식용유"],
    instructions: ["돼지고기를 두드려 얇게 펍니다.","소금과 후추로 간합니다.밀가루, 달걀물, 빵가루 순서로 튀김옷을 입힙니다.","팬에 기름을 두르고 돈까스를 바삭하게 튀깁니다."],
    img: "Tonkatsu.jpg"
  },
  {
    id: 12,
    name: "짜장면",
    type: "중식",
    ingredients: ["짜장 소스(춘장)", "돼지고기", "양파", "감자", "애호박", "면", "물", "설탕", "녹말물"],
    instructions: ["팬에 춘장을 기름에 볶아 향을 냅니다.","돼지고기와 양파, 감자, 애호박을 볶다가 춘장을 넣습니다.","물을 넣고 끓인 후, 녹말물을 넣어 농도를 맞춥니다.","삶은 면에 소스를 얹어 완성합니다."],
    img: "Jajangmyeon.jpg"
  },
  {
    id: 13,
    name: "짬뽕",
    type: "중식",
    ingredients: ["짬뽕용 면", "오징어"," 새우", "돼지고기", "양배추", "대파", "고춧가루", "고추기름", "육수(멸치 또는 치킨 육수)"],
    instructions: ["고추기름에 고춧가루, 돼지고기, 오징어, 새우를 볶아줍니다.","채 썬 양배추와 대파를 넣고 함께 볶습니다.","육수를 부어 끓이다가 짬뽕 면을 삶아 넣습니다."],
    img: "Jjamppong.jpg"
  },
  {
    id: 14,
    name: "마파두부",
    type: "중식",
    ingredients: ["두부", "다진 돼지고기", "마늘"," 생강", "고추기름", "두반장", "간장", "설탕", "녹말물", "대파"],
    instructions: ["두부를 깍둑썰기해 끓는 물에 데쳐 준비합니다.","고추기름에 마늘과 생강을 볶고, 다진 돼지고기를 넣어 익힙니다.","두반장, 간장, 설탕을 넣어 볶다가 물을 조금 부어 끓입니다.","두부를 넣고 녹말물로 농도를 맞춥니다."],
    img: "Mapo Tofu.jpg"
  },
  {
    id: 15,
    name: "탕수육",
    type: "중식",
    ingredients: ["돼지고기", "전분", "달걀", "식용유", "식초", "설탕"," 간장", "파인애플(선택)"],
    instructions: ["돼지고기를 전분과 달걀물에 묻혀 바삭하게 튀깁니다.","팬에 설탕, 식초, 간장, 물을 넣고 끓인 후 농도를 맞춥니다.","튀긴 고기를 소스에 버무리거나 따로 찍어 먹습니다."],
    img: "Sweet and Sour Pork.jpg"
  },
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


// 식재료로 검색하는 함수
function searchByIngredient() {
  const ingredientInput = document.getElementById("ingredient-input").value.toLowerCase(); // 입력받은 재료명을 소문자로 변환
  const filteredRecipes = recipes.filter(recipe =>
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(ingredientInput)) // 재료 목록 중 입력 값이 포함된 항목 찾기
  );
  displayRecipes(filteredRecipes); // 필터링된 레시피를 화면에 표시
}