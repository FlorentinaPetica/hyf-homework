// item array removal

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];

  let nameToRemove = "Ahmad";
  
  names.splice(names.indexOf(nameToRemove), 1);

  console.log(names);