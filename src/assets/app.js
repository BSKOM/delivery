import state from './state';

/* 
start components event hubs BSKOM (I am)
https://github.com/BSKOM/eventHBS 

*/

const onEvent = (e) => disp(e);
const eventType = document.querySelectorAll('[event-type]');

const iam = document.querySelector('.iam');

let evHUB = {
  'shop': shop,  /* function for event shop ('foo':foo) */
  'good': good   /* function for event good 'foo1':foo1  ... etc*/
};

[...eventType].map((el) => el.addEventListener(`${el[event-type].value}`, onEvent));

function disp(evt) {
  const target = evt.target;
  evHUB[target.foo]();
}

/* end components event hubs BSKOM */

const app = () => {
  console.log('app...', state);  
}

export default app;