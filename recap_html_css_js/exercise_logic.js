// const demo = document.getElementById("demo")

function myFunction1() {
  let message = '';
  let n = +prompt('Please enter number for n', '');
  for (let i = 0; i < n; i++) message += '*';
  alert(message);
  return console.log(`n = ${n}`);
}

function myFunction2() {
  let message = '';
  let n = +prompt('Please enter number for n', '');
  for (let i = 0; i < n; i++) {
    message += '\n';
    for (let j = 0; j < n; j++) message += '*';
  }
  alert(message);
  return `Answer2`;
}

// ข้อ 3
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 0; i < n ; i++) {
//     message += '\n';
//     for(let j = 1; j <= n ; j++) message += j;
// }
// alert(message);

// ข้อ 4
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i <= n ; i++) {
//     for(let j = 1; j <= n ; j++) message += `${i}`;
//     message += '\n';
// }
// alert(message);

// ข้อ 5
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = n; i >= 1 ; i--) {
//     for(let j = 1; j <= n ; j++) message += `${i}`;
//     message += '\n';
// }
// alert(message);

// ข้อ 6
// let message='';
// let n = +prompt('Please enter number for n','');
// let c = 1;
// for(let i = 1; i <= n; i++) {
//     for(let j = 1 ; j <= n; j++) {
//         message += `${c}`;
//         c++;
//     }
//     message += '\n';
// }
// alert(message);

// ข้อ 7
// let message='';
// let n = +prompt('Please enter number for n','');
// let c = n*n;
// for(let i = n; i >= 1; i--) {
//     for(let j = n ; j >= 1; j--) {
//         message += `${c}`;
//         c--;
//     }
//     message += '\n';
// }
// alert(message);

// ข้อ 8
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 0; i < n; i++)
// {   message += `${i*2}` + `\n`;
// }
// alert(message);

// ข้อ 9
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i <= n; i++)
// {   message += `${i*2}` + `\n`;
// }
// alert(message);

// ข้อ 10
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {    message += `${i*j}`;
//     }
//     message += `\n`;
// }
// alert(message);

// ข้อ 11
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(i === j)
//         {   message += `-`;
//         }
//         else
//         {   message += `*`;
//         }
//     }
//     message += `\n`;
// }
// alert(message);

// ข้อ 12
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = n; i >= 1; i--)
// {   for(let j = 1; j <= n; j++)
//     {   if(i === j)
//         {   message += `-`;
//         }
//         else
//         {   message += `*`;
//         }
//     }
//     message += `\n`;
// }
// alert(message);

// ข้อ 13
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(j > i)
//         {   message += `-`;
//         }
//         else
//         {   message += `*`;
//         }
//     }
//     message += `\n`;
// }
// alert(message);

// ข้อ 14
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = n; i >= 1; i--)
// {   for(let j = 1; j <= n; j++)
//     {   if(j > i)
//         {   message += `-`;
//         }
//         else
//         {   message += `*`;
//         }
//     }
//     message += `\n`;
// }
// alert(message);

// ข้อ 15
// let message='';
// let n = +prompt('Please enter number for n','');
// let i;
// for(i = 1; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(j > i)
//         {   message += `-`;
//         }
//         else
//         {   message += `*`;
//         }
//     }
//     message += `\n`;
// }
// for(i = i-2; i >= 1; i--)
// {   for(let j = 1; j <= n; j++)
//     {   if(j > i)
//         {   message += `-`;
//         }
//         else
//         {   message += `*`;
//         }
//     }
//     message += `\n`;
// }
// alert(message);

// ข้อ 16
// let message='';
// let n = +prompt('Please enter number for n','');
// let i;
// for(i = 1; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(j > i)
//         {   message += `-`;
//         }
//         else
//         {   message += `${i}`;
//         }
//     }
//     message += `\n`;
// }
// for(i = i-2; i >= 1; i--)
// {   for(let j = 1; j <= n; j++)
//     {   if(j > i)
//         {   message += `-`;
//         }
//         else
//         {   message += `${i}`;
//         }
//     }
//     message += `\n`;
// }
// alert(message);

// ข้อ 17
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(j+i <= n)
//         {   message += `-`;
//         }
//         else
//         {   message += `*`;
//         }
//     }
//     message += `\n`;
// }
// alert(message);

// ข้อ 18
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(j < i)
//         {   message += `-`;
//         }
//         else
//         {   message += `*`;
//         }
//     }
//     message += `\n`;
// }
// alert(message);

// ข้อ 19
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(j+i <= n)
//         {   message += `-`;
//         }
//         else
//         {   message += `*`;
//         }
//     }
//     message += `\n`;
// }
// for(let i = 2; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(j < i)
//         {   message += `-`;
//         }
//         else
//         {   message += `*`;
//         }
//     }
//     message += `\n`;
// }
// alert(message);

// ข้อ 20
// let message='';
// let n = +prompt('Please enter number for n','');
// let c = 1;
// for(let i = 1; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(j+i <= n)
//         {   message += `-`;
//         }
//         else
//         {   message += `${c}`;
//             c++;
//         }
//     }
//     message += `\n`;
// }
// for(let i = 2; i <= n; i++)
// {   for(let j = 1; j <= n; j++)
//     {   if(j < i)
//         {   message += `-`;
//         }
//         else
//         {   message += `${c}`;
//             c++;
//         }
//     }
//     message += `\n`;
// }
// alert(message);

// ข้อ 21
// let message = '';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i<=n; i++)
// {   for(let j = 1; j<=n; j++)
//     {   if(j + i <= n)
//         {   message += `-`;
//         }
//         else
//         {   message += `*`;
//         }
//     }
//     for(let j = 2; j<=n; j++)
//     {   if(j > i)
//         {   message += `-`;
//         }
//         else
//         {   message += `*`;
//         }
//     }
//     message += `\n`;
// }
// alert(message);

// ข้อ 22
// let message='';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i <= n; i++)
// {   for(let j = 1; j < n; j++)
//     {   if(j < i)
//         {   message += `-`;
//         }
//         else
//         {   message += `*`;
//         }
//     }
//     for(let j = n; j >= 1; j--)
//         {   if(j < i)
//             {   message += `-`;
//             }
//             else
//             {   message += `*`;
//             }
//         }
//     message += `\n`;
// }
// alert(message);

// ข้อ 23
// let message = '';
// let n = +prompt('Please enter number for n','');
// for(let i = 1; i<=n; i++)
// {   for(let j = 1; j<=n; j++)
//     {   if(j + i <= n)
//         {   message += `-`;
//         }
//         else
//         {   message += `*`;
//         }
//     }
//     for(let j = 2; j<=n; j++)
//     {   if(j > i)
//         {   message += `-`;
//         }
//         else
//         {   message += `*`;
//         }
//     }
//     message += `\n`;
// }
// for(let i = 2; i <= n; i++)
// {   for(let j = 1; j < n; j++)
//     {   if(j < i)
//         {   message += `-`;
//         }
//         else
//         {   message += `*`;
//         }
//     }
//     for(let j = n; j >= 1; j--)
//         {   if(j < i)
//             {   message += `-`;
//             }
//             else
//             {   message += `*`;
//             }
//         }
//     message += `\n`;
// }
// alert(message);

// ข้อ 24
// let message = '';
// let n = +prompt('Please enter number for n','');
// let c = 1;
// for(let i = 1; i<=n; i++)
// {   for(let j = 1; j<=n; j++)
//     {   if(j + i <= n)
//         {   message += `-`;
//         }
//         else
//         {   message += `${c}`;
//             c++;
//         }
//     }
//     for(let j = 2; j<=n; j++)
//     {   if(j > i)
//         {   message += `-`;
//         }
//         else
//         {   message += `${c}`;
//             c++;
//         }
//     }
//     message += `\n`;
// }
// for(let i = 2; i <= n; i++)
// {   for(let j = 1; j < n; j++)
//     {   if(j < i)
//         {   message += `-`;
//         }
//         else
//         {   message += `${c}`;
//             c++;
//         }
//     }
//     for(let j = n; j >= 1; j--)
//         {   if(j < i)
//             {   message += `-`;
//             }
//             else
//             {   message += `${c}`;
//                 c++;
//             }
//         }
//     message += `\n`;
// }
// alert(message);
