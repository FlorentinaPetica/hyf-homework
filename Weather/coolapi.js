// Find a cool api

fetch("https://api.imgflip.com/get_memes")
  .then((response) => response.json())
  .then((memes) => {
    console.log(`This api has 2 keys ${Object.keys(memes)}`);
    console.log(
      `In the data key we have memes key with a array value with a length of ${memes.data.memes.length}`
    );
    console.log(
      `For each index of the array we have the following key : values`
    );
    Object.keys(memes.data.memes[1]).forEach((e) =>
      console.log("key: " + e + " : " + "value: " + memes.data.memes[1][e])
    );
  });
