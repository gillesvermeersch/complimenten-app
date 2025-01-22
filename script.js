// fetch compliments
async function fetchCompliments() {
    try {
        const response = await fetch('./data/complimenten.json');
    console.log(response);
    if (!response.ok) {
    throw new Error("ik kan de json fille niet laden. Check spelling en pad");

}
    const data = await response.json();
    console.log(data); 
    return data.complimenten; 
} catch (error) {
    console.error("ik kan de complimenten niet verkrijgen",error);
    return ["je bent geweldig!","Blijf stralen","Code met passie!"];
    } finally {
    console.log("fetchCompliments is klaar");

    };
};



// display compliments
function displayRandomCompliment(compliments){
const complimentElement = document.getElementById('compliment');
const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
complimentElement.textContent = randomCompliment;
};
// main function
(async()=>{
    const compliments = await fetchCompliments();
    const button = document.getElementById('generate-btn');
    button.addEventListener('click' , () => displayRandomCompliment(compliments));
})();



