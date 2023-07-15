// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  let input = userInput[0];
  let string = 0;
  let areaType = ["Theatre", "Pub", "Commercial Park"];
  let price = [1500, 1000, 3000];
  let area = [5, 4, 10];
  let profitArray = [];
  let noOfAreaCounts = [];
  
  if (input > 3){

  for (let j = 0; j < area.length; j++) {
    for (let i = 1; input >= area[j] * i; i++) {
      let add = (input - parseInt(area[j]) * i) * price[j];
      string = string + add;

      if (input < area[j] * (i + 1)) {
        noOfAreaCounts.push(i);
        profitArray.push(string);
      }
    }

    string = 0;
  }

  var unique = [...new Set(profitArray)];
  let maxEle = Math.max(...profitArray);

  let uniIndex = profitArray.indexOf(maxEle);
  let empty = [0, 0, 0];

  if (unique.length === areaType.length) {
    empty[uniIndex] = noOfAreaCounts[uniIndex];
    console.log("Earnings: $" +maxEle);
    console.log(
      "T:" + empty[0] + " " + "P:" + empty[1] + " " + "C:" + empty[2]
    );
  }

  if (unique.length === 2) {
    let firstIndex = profitArray.indexOf(maxEle);
    let lastIndex = profitArray.lastIndexOf(maxEle);

    empty[firstIndex] = noOfAreaCounts[firstIndex];
    empty[lastIndex] = noOfAreaCounts[lastIndex];

    if (maxEle === profitArray[0]) {
        console.log("Earnings: $" +maxEle);
      console.log("T:" + empty[0] + " " + "P:" + "0" + " " + "C:" + "0");
    }
    if (maxEle === profitArray[1]) {
        console.log("Earnings: $" +maxEle);
      console.log("T:" + "0" + " " + "P:" + empty[1] + " " + "C:" + "0");
    }
    if (maxEle === profitArray[3]) {
        console.log("Earnings: $" +maxEle);
      console.log("T:" + "0" + " " + "P:" + "0" + " " + "C:" + empty[2]);
    }
  }

  if (unique.length === 1) {
    if (maxEle === profitArray[0]) {
        console.log("Earnings: $" +maxEle);
      console.log(
        "T:" + noOfAreaCounts[0] + " " + "P:" + "0" + " " + "C:" + "0"
      );
    }
    if (maxEle === profitArray[1]) {
        console.log("Earnings: $" +maxEle);
      console.log(
        "T:" + "0" + " " + "P:" + noOfAreaCounts[1] + " " + "C:" + "0"
      );
    }
    if (maxEle === profitArray[3]) {
        console.log("Earnings: $" +maxEle);
      console.log(
        "T:" + "0" + " " + "P:" + "0" + " " + "C:" + noOfAreaCounts[2]
      );
    }
  }
  }
  else {console.log("Area should be more than 3");}
});
