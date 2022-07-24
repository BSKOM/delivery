import state from './state';

const iam = document.querySelector('.iam');

/* 
start components event hubs BSKOM (I am)
https://github.com/BSKOM/eventHBS 
*/

/* 
******** evHUB HUB *******
for highlights the structure of functions used to process events: 
for clear self-documentation next to each property of the object should be
a comment describing the purpose of the property (function)
*/
const evHUB = {
  'shop': shop,  /* function for select shop ( obj prop 'shop') */
  'good': good,  /* function for select good ( obj prop 'good') */
  'plus': plus,  /* function for increnent good ( obj prop 'plus') */
  'minus': minus,  /* function for decrenent good ( obj prop 'minus') */
  'calc': calc  /* function for calculate total */
};

/* universal function for all event handlers  */
const onEvent = (e) => disp(e);

/* selector to create a collection of all active elements for the event handler */
const eventType = document.querySelectorAll('[event-type]');

/* set an Event Handler to all element of colection */
[...eventType].map((el) => el.addEventListener(`${el[event-type].value}`, onEvent));

/* 
******** disp *******
universal hub dispatcher for processing events (function calls)
*/
function disp(evt) {
  const target = evt.target;
  evHUB[target.foo]();
}

/* end components event hubs BSKOM */

const app = () => {
  console.log('app...', state);  
}

export default app;