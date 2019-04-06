import React, { useReducer, useRef, useEffect, useCallback } from 'react';
import { wishes, Wish, photoMap } from './data';
import { animated, config, useTransition } from 'react-spring';

interface State {
  wishList: Wish[];
  wishQueue: Wish[];
  isComplete: boolean;
}

interface SendWish {
  type: 'sendWish';
}
interface RemoveWish {
  type: 'removeWish';
}
interface SetComplete {
  type: 'complete';
}
interface Reset {
  type: 'reset';
}

type Actions = SendWish | RemoveWish | SetComplete | Reset;

function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case 'sendWish': {
      const copy = shuffle([...state.wishList]);
      const queuedWish = copy.pop();
      return {
        ...state,
        wishList: copy,
        wishQueue: state.wishQueue.concat(queuedWish || [])
      };
    }
    case 'removeWish': {
      const wishQueue = [...state.wishQueue];
      wishQueue.shift();
      return { ...state, wishQueue };
    }
    case 'complete': {
      return { ...state, isComplete: true };
    }
    case 'reset': {
      return { ...initialState };
    }
    default:
      return state;
  }
}

const initialState = {
  wishList: wishes,
  wishQueue: [],
  isComplete: false
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const timeoutFn = useRef<any>(null);
  useEffect(() => {
    if (state.wishQueue.length !== 0) {
      if (state.wishQueue.length > 2) {
        dispatch({ type: 'removeWish' });
        return;
      }
      const wordCount =
        (state.wishQueue[state.wishQueue.length - 1].message.split(' ').length /
          3.7) *
        1000;
      const timeoutLen = Math.max(
        2500 * state.wishQueue.length,
        3500,
        wordCount
      );
      if (timeoutFn.current) {
        clearTimeout(timeoutFn.current);
      }
      timeoutFn.current = setTimeout(() => {
        dispatch({ type: 'removeWish' });
      }, timeoutLen);
    }
  }, [state.wishQueue, dispatch]);

  const wishTransition = useTransition(state.wishQueue, item => item.message, {
    from: { transform: `translate(0, 100%) scale(0.1)`, opacity: 0 },
    enter: { transform: `translate(0, 0%) scale(1)`, opacity: 1 },
    leave: { transform: `translate(0, 100%) scale(0.1)`, opacity: 0 },
    config: config.stiff,
    onDestroyed: () => {
      if (state.wishList.length === 0 && state.wishQueue.length === 0) {
        dispatch({ type: 'complete' });
      }
    }
  });

  const endTransition = useTransition(state.isComplete, null, {
    from: { transform: `translate(0, 200%)`, opacity: 0 },
    enter: { transform: `translate(0, 0%)`, opacity: 1 },
    leave: { transform: `translate(0, 100%)`, opacity: 0 },
    config: config.slow
  });

  const textTransition = useTransition(state.wishList.length !== 0, null, {
    from: { transform: `translate(0, 200%)`, opacity: 0 },
    enter: { transform: `translate(0, 0%)`, opacity: 1 },
    leave: { transform: `translate(0, 100%)`, opacity: 0 },
    config: config.stiff
  });

  const animatedGreeting = textTransition.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          <h1>60 reasons why we love you!</h1>
        </animated.div>
      )
  );

  const hiddenCss =
    state.wishQueue.length > 0 || state.wishList.length === 0 ? '--hidden' : '';

  const clickHandler = useCallback(() => {
    if (state.isComplete) {
      dispatch({ type: 'reset' });
      return;
    }
    if (state.wishList.length > 0) {
      dispatch({ type: 'sendWish' });
    }
  }, [state.wishList.length, state.isComplete, dispatch]);

  const animatedWish = wishTransition.map(({ item, key, props }) => {
    return (
      item && (
        <animated.div key={key} style={props} className={`wish-card`}>
          <div className='wish-card__img'>
            <img src={photoMap[item.name]} />
          </div>
          <div className='wish-card__content'>
            <h5>{item.name} says:</h5>
            <p>"{item.message}"</p>
          </div>
        </animated.div>
      )
    );
  });

  const animatedEnd = endTransition.map(
    ({ item, key, props }) =>
      item && (
        <animated.div className='ending' key={key} style={props}>
          <h1>Happy 60th Mom!</h1>
          <p>We love you!</p>
          <img src={photoMap['family']} />
        </animated.div>
      )
  );

  const handleCount = () => {
    if (state.wishList.length > 60) {
      return state.wishList.length - 60;
    }

    if (state.wishList.length === 0) {
      return '';
    }

    return state.wishList.length;
  };

  return (
    <>
      <div className='cake'>
        <div className='plate' />
        <div className='layer layer-bottom' />
        <div className='layer layer-middle' />
        <div className='layer layer-top' />
        <div className='icing'>
          <div className='wish-count'>{handleCount()}</div>
        </div>
        <div className='drip drip1' />
        <div className='drip drip2' />
        <div className='drip drip3' />
        <div className='candle'>
          <div className={`flame ${hiddenCss}`} />
        </div>
      </div>
      <div className='bday-message__wrapper'>
        {animatedGreeting}
        <button className='wish-btn' onClick={clickHandler}>
          {!state.isComplete ? 'Make a wish' : 'Star over'}
        </button>
        <div className='bday-message'>
          {animatedWish}
          {animatedEnd}
        </div>
      </div>
    </>
  );
}

function shuffle<T>(arr: T[]) {
  let ci: number = arr.length,
    randomIndex;

  while (0 !== ci) {
    randomIndex = Math.floor(Math.random() * ci);
    ci -= 1;
    [arr[ci], arr[randomIndex]] = [arr[randomIndex], arr[ci]];
  }

  return arr;
}
