 const students = ["Alice", "Bob", "Charlie", "David", "Eve"];
    const output = document.getElementById("output");
    const btn = document.getElementById("searchBtn");

    btn.addEventListener("click", () => {
      let results = "";

      // filter()
      results += "Filter (names with 'a'): " + students.filter(n => n.includes("a")) + "<br>";

      // find()
      results += "Find (first starting with C): " + students.find(n => n.startsWith("C")) + "<br>";

      // findIndex()
      results += "FindIndex (David): " + students.findIndex(n => n === "David") + "<br>";

      // some()
      results += "Some (any longer than 4 letters?): " + students.some(n => n.length > 4) + "<br>";

      // every()
      results += "Every (all longer than 2 letters?): " + students.every(n => n.length > 2) + "<br>";

      // includes()
      results += "Includes (Bob?): " + students.includes("Bob") + "<br>";
      output.innerHTML = results;
    });
