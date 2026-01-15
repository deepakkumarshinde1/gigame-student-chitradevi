(async () => {
  async function timeout() {
    return new Promise((resolve, reject) => {
      resolve("Timeout");
    }, 1000);
  }
  const result = await Promise.allSettled([
    fetch("https://fakestoreapi.com/products/1"),
    timeout(),
  ]);
  console.log(result);
})();

// localStorage example
localStorage.setItem("candidateName", "Chitra Devi"); // set specific item
const candidateName = localStorage.getItem("candidateName"); // get specific item
console.log("Name from localStorage:", candidateName);
localStorage.removeItem("candidateName"); // remove specific item
localStorage.clear(); // remove all items

// sessionStorage example
sessionStorage.setItem("sessionID", "123456"); // set specific item
const sessionID = sessionStorage.getItem("sessionID"); // get specific item
console.log("Session ID from sessionStorage:", sessionID);
sessionStorage.removeItem("sessionID"); // remove specific item
sessionStorage.clear(); // remove all items

// IndexedDB example
const request = indexedDB.open("MyDatabase1", 1);

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  db.createObjectStore("user", { keyPath: "id" });
};

request.onerror = function (event) {
  console.log("Database error: ", event.target.errorCode);
};

request.onsuccess = function (event) {
  const db = event.target.result;
  const transaction = db.transaction(["user"], "readwrite");
  const objectStore = transaction.objectStore("user");

  // Add data
  objectStore.add({ id: 12, name: "Chitra Devi" });
  transaction.oncomplete = () => {
    console.log("Transaction completed");
  };

  transaction.onerror = () => {
    console.error("Transaction failed");
  };
};
