import chalk from 'chalk';
import inquirer from 'inquirer';
import figlet from 'figlet';

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync('HELLO', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
      })
    )
  );
};

const run = async () => {
  // show script introduction
  init();

  // HERE YA GO
};

run();
