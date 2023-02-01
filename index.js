document.getElementById("inputEmail").addEventListener("blur", function(event) {

  });
  
  function checkAge(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);
    const age = today.getFullYear() - birthDate.getFullYear();
    const ageLimit = 13;
    if (age < ageLimit) {
      return false;
    } else {
      return true;
    }
  }
  
  const dateOfBirth = document.getElementById('inputBirthDate');
  const isOldEnough = checkAge(dateOfBirth);
  if (!isOldEnough) {
    alert("Vous ne pouvez pas vous crée de compte.");
  } else {
    alert("Bienvenue."); 
  }