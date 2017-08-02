'use_strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('What do you think about Tarantino? ', (answer) => {
  console.log('Thank you for your valuable feedback:', answer)

  rl.sub_question('Pulp fiction? ', (answer) => {
  console.log('According to your feedbac your valuable Pulp fiction is ', answer)
	})

  rl.close()
})