// Задание 1
let i = 1
while (i<=2) {
  console.log('Привет');
i++
}

// Задание 2
let c = 1
while (c<=5) {
  console.log(c);
  c++
}

// Задание 3
let x = 0
for (x=0; x<30; x++){
  if (x>=7 && x<=22) 
  console.log(x)
}

// Задание 4
let obj = {
	Коля: 200,
	Вася: 300,
	Петя: 400,
}

for (let key in obj) { 
  console.log(`${key} — зарплата  ${obj[key]} долларов`);
}

// Задание 5
let n = 1000; 
let num= 0; 

while (n > 50) {
  n = n / 2;
  num++;
}
console.log(`Получилось число ${n}. Число итераций равно ${num}`);

// Задание 6
for (let dayNumber = 5; dayNumber <= 31; dayNumber += 7) {
  console.log(`Сегодня пятница ${dayNumber}-е число. Необходимо подготовить отчет.`);
}