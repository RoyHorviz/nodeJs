// פונקציה לבדיקת מספר ראשוני
function isPrime(num) {
  if (num < 2) return false; // מספרים קטנים מ-2 אינם ראשוניים
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // אם מתחלק במספר אחר מ-1 או מעצמו
  }
  return true;
}

// הדפסת כל המספרים הראשוניים הקטנים מ-237
for (let i = 2; i < 237; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
