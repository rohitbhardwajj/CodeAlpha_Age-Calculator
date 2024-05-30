document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const dob = document.getElementById('dob').value;
   
    if (dob) {
        const age = calculateAge(new Date(dob));
        document.getElementById('result').textContent = `You are ${age} years old.`;
    }
});

function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age;
}







