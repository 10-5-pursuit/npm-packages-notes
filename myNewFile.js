const chalk = require('chalk')

console.log((`
CPU: ${chalk.bold.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.dim.yellow('70%')}
`))