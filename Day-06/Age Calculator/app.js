function getage()
{
    let year = 
    Number(document.getElementById("birthyear").value);
    let currentage = (2026 - year);
    document.getElementById("age").innerText = `your age is ${currentage} old`;
}
