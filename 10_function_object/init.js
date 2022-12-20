

document.querySelector('#resultGenerate').addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#secondNameOutput').innerText = initPerson.secondName;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthDateOutput').innerText = initPerson.birthDate;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;
    document.querySelector('#professiyaOutput').innerText = initPerson.professiya;
    document.querySelector('#zpt1').innerText = ',';
    document.querySelector('#zpt2').innerText = ',';
});

document.querySelector('#resultReset').addEventListener('click', () => {
    document.querySelector('#firstNameOutput').innerText = '';
    document.querySelector('#surnameOutput').innerText = '';
    document.querySelector('#secondNameOutput').innerText = '';
    document.querySelector('#genderOutput').innerText = '';
    document.querySelector('#birthDateOutput').innerText = '';
    document.querySelector('#birthYearOutput').innerText = '';
    document.querySelector('#professiyaOutput').innerText = '';
    document.querySelector('#zpt1').innerText = '';
    document.querySelector('#zpt2').innerText = '';
});