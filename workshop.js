
const freelancers = [
    { name: "Alice", price: 30, occupation: "Writer" },
    { name: "Bob", price: 50, occupation: "Teacher" },
    { name: "Carol", price: 70, occupation: "Programmer" },
    { name: "Prof. Utonium", price: 90, occupation: "Teacher" },
    { name: "Dr. Jones", price: 120, occupation: "Writer" },
    { name: "James", price: 120, occupation: "Programmer"},

];

const names = ["Tyler", "Alex", "Brandon", "Amber", "Louis", "Anthony", "Michael"];
const occupations = ["Writer", "Programmer", "Teacher"];
const priceRange = { min: 30, max: 120 };


const freelanceList = document.querySelector("#freelanceList");
const priceAverage = document.querySelector("#price");


function renderFreelancers() {
    freelanceList.innerHTML = '';
    freelancers.forEach(freelancer => {
        const li = document.createElement("li");
        li.textContent = `${freelancer.name}, ${freelancer.occupation}, : $${freelancer.price}`;
        freelanceList.appendChild(li);
    });
    newPriceAverage();

    

};


function newPriceAverage() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const average = total / freelancers.length;
    priceAverage.textContent = `Average starting price: $${average.toFixed(2)}`;
    
};


function randomFreelance() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = Math.floor(Math.random() * (priceRange.max - priceRange.min + 1)) + priceRange.min;
    return { name, occupation, price };
}


let entries = 0;
const maxEntries = 20 - freelancers.length;

setInterval(() => {
    if (freelancers.length >= 20) {
        freelancers.shift();
    }
    const newFreelancer = randomFreelance();
    freelancers.push(newFreelancer); 
    renderFreelancers(); 
}, 5000);


renderFreelancers(); 
