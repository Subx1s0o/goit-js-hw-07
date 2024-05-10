const catList = document.querySelectorAll(".item");

console.log(`Number of categories: ${catList.length}`);

catList.forEach((el) => {
  const h2elem = el.querySelector("h2");
  console.log(`Category: ${h2elem.textContent}`);

  const nestedUl = el.querySelector("ul");
  if (nestedUl) {
    const nestedLiCount = nestedUl.querySelectorAll("li").length;
    console.log(`Elements: ${nestedLiCount}`);
  }
});
