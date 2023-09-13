var acount = {
  pin: 1234,
  amount: 0,
  owner: "Patricio Estrella",
  deposits: [],
};

// console.log(acount);

//Hacer depósitos
acount.deposits.push(100);
acount.deposits.push(400);
acount.deposits.push(1000);
acount.deposits.push(100);

//Hacer retiros
acount.deposits.push(-300);

//Conocer el saldo de mi amigo
var copiaDepositos = acount.deposits.map((money) => money);

var total = copiaDepositos.reduce((suma, money) => suma + money);

console.log(`Saldo de tu amigo: $${total} MX `);
