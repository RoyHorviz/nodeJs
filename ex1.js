const num = 123;

//בדיקת 3 המצבים ללא תנאי לוגי בתוך ההדפסה 
console.log(
  ((num % 2 === 0) && (num % 3 === 0) && (num % 5 === 0)) * 3 + // מתחלק ב-2, 3, ו-5
  (((num % 2 === 0) && (num % 3 === 0) && (num % 5 !== 0)) || 
   ((num % 3 === 0) && (num % 5 === 0) && (num % 2 !== 0)) || 
   ((num % 2 === 0) && (num % 5 === 0) && (num % 3 !== 0))) * 2 + // מתחלק בדיוק בשניים
  (((num % 2 === 0) && (num % 3 !== 0) && (num % 5 !== 0)) || 
   ((num % 3 === 0) && (num % 2 !== 0) && (num % 5 !== 0)) || 
   ((num % 5 === 0) && (num % 2 !== 0) && (num % 3 !== 0))) * 1 // מתחלק בדיוק באחד
);