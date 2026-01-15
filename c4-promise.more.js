async function apiWithTimeout(url, timeout = 1000) {
  let controller = new AbortController();
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      controller.abort("Timeout exceeded");
      reject(new Error("API timeout after 10 seconds"));
    }, timeout);
  });

  try {
    const response = await Promise.race([
      fetch(url, { signal: controller.signal }),
      timeoutPromise,
    ]);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

// Usage
(async () => {
  try {
    const data = await apiWithTimeout(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log("API success:", data);
  } catch (err) {
    console.error("API failed:", err.message);
  }
})();
