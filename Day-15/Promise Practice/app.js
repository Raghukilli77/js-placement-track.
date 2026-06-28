let button = document.querySelector("#show");
let marks = document.querySelector("#marks");
let output = document.querySelector("#list");

button.addEventListener("click", () => {
    let promise = new Promise((resolve, reject) => {
        let score = Number(marks.value);
        if (score >= 50) {
            resolve("pass");
        } else {
            reject("fail");
        }
    });

    promise
        .then(result => {
            console.log(result);
            output.innerHTML = result; // show "pass" in webpage
        })
        .catch(error => {
            console.log(error);
            output.innerHTML = error; // show "fail" in webpage
        });
});
