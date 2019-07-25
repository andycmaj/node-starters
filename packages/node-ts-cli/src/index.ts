import chalk from 'chalk';
import inquirer from 'inquirer';
import figlet from 'figlet';
import { NConsumer, NProducer } from 'sinek';
import { consumerConfig } from './config';

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
