const accountId = 144553
let accountEmail = 'kalpana@google.com'
var accountPassword = '123456'
accountCity  =" jaipur "
// accountId=2 // not allowed
accountEmail="sk123"
accountPassword="212121"
accountCity="jhansi"
console.log(accountId);

// Prefer not to use var because of issue in block scope and functional scope
console.table([accountEmail,accountId,accountPassword,accountCity]);