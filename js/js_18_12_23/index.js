console.log(10 && 15 && "Hello");

/*
 * Напиши скрипт який перевірить входження 
 * числа у відрізок зазначений x1 та x2. *
 * - До x1
 * - Після x2
 * - Від x1 до x2
 * - До x1 або після x2
 */
//                  10                      30 
// ================================================================
//                  x1                      x2
// const x1 = 10;
// const x2 = 30;
// const number = 15;

// console.log(`Число ${number} потрапляє у відрізок до ${x1}` , number > x1);

// console.log(`Число ${number} потрапляє у відрізок після ${x2}?` , number > x2);

// console.log(`Число ${number} потрапляє у відрізок від ${x1} до ${x2}?`, number > x1 && number < x2);

// console.log(`Число ${number} потрапляє у відрізок до ${x1} або після ${x2}?`, number < x1 || number >);

/*
 * Напиши скрипт перевірки підписки користувача під час доступу до контенту
 * - Є три типи підписки: free, pro и vip.
 * - Отримати доступ можуть тільки pro и vip
 */

const sub = 'pro';

// якщо користувач pro або користувач vip тоді є доступ

const canAccessContent = sub === "pro" || sub === "vip";


console.log('Є доступ до контенту? ', canAccessContent);