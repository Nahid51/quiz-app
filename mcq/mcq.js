fetch("../assets/questions.json")
    .then(res => res.json())
    .then(data => console.log(data))