const words = ["t", "ti", "te", "tie", "tiger", "test", "team", "tictok"];

function arrayToTree(stringArray) {
  const root = { value: "", children: {} };

  stringArray.forEach((str) => {
    let currentNode = root;

    for (let char of str) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = {
          value: currentNode.value + char,
          children: {},
        };
      }

      currentNode = currentNode.children[char];
    }
  });

  return root;
}
