import React, { useReducer, useRef, useEffect } from "react";
import { wishes, Wish, photoMap } from "./data";

interface State {
  wishList: Wish[];
  currentWish: Wish;
  isVisible: boolean;
  isComplete: boolean;
}

interface SendWish {
  type: "sendWish";
}
interface SetVisibility {
  type: "visible";
  payload: boolean;
}
interface SetComplete {
  type: "complete";
}

const initWish = {
  name: "",
  message: ""
};

type Actions = SendWish | SetVisibility | SetComplete;

function reducer(state: State, action: Actions): State {
  console.log({ state, action });
  switch (action.type) {
    case "sendWish": {
      const copy = shuffle([...state.wishList]);

      return {
        currentWish: copy.pop() || initWish,
        wishList: copy,
        isVisible: true,
        isComplete: state.isComplete
      };
    }
    case "visible": {
      return { ...state, isVisible: action.payload };
    }
    case "complete": {
      return { ...state, isComplete: true };
    }
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    wishList: wishes,
    currentWish: initWish,
    isVisible: false,
    isComplete: false
  });

  const timeout = useRef<any>();
  useEffect(() => {
    if (state.isVisible === true && !state.isComplete) {
      clearTimeout(timeout.current);
      if (state.wishList.length === 0) {
        dispatch({ type: "complete" });
      }
      timeout.current = setTimeout(() => {
        dispatch({ type: "visible", payload: false });
      }, 2500);
    }
  }, [state.isVisible, state.isComplete, dispatch]);

  const hiddenCss = state.isVisible || state.isComplete ? "--hidden" : "";

  const clickHandler = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      dispatch({ type: "sendWish" });
    },
    [dispatch]
  );

  const showWish = state.isVisible && !state.isComplete ? "" : "--hidden";

  const wishListDisplay = (
    <div className={`wish-card ${showWish}`}>
      <img className="wish-card__img" src={photoMap[state.currentWish.name]} />
      <div className="wish-card__content">
        <h5>{state.currentWish.name} says:</h5>
        <p>"{state.currentWish.message}"</p>
      </div>
    </div>
  );

  const handleCount = () => {
    if (state.wishList.length > 60) {
      return state.wishList.length - 60;
    }
    return state.wishList.length;
  };

  return (
    <>
      <div className="bday-message__wrapper">
        <h1> Happy Birthday Mom!</h1>
        <p>Click the cake to blow out your candle!</p>
        <div className="bday-message">
          {wishListDisplay}
          {state.isComplete && <h1>All done!</h1>}
        </div>
      </div>

      <div className="cake" onClick={clickHandler}>
        <div className="plate" />
        <div className="layer layer-bottom" />
        <div className="layer layer-middle" />
        <div className="layer layer-top" />
        <div className="icing">
          <div className="wish-count">{handleCount()}</div>
        </div>
        <div className="drip drip1" />
        <div className="drip drip2" />
        <div className="drip drip3" />
        <div className="candle">
          <div className={`flame ${hiddenCss}`} />
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

// document.addEventListener('DOMContentLoaded', () => new App());

// class App {
//   flame: HTMLElement;
//   cake: HTMLElement;
//   bdayMessage: HTMLElement;
//   bdayMessages: string[] = [
//     'Greg, Karen, and I love you! <span>♥</span>',
//     'Be as loud as you want when eating! <span>🍽</span>',
//     'You are a big impact on my life! <span>✨</span>',
//     'Mom (your wife) is Awesome! <span>💏</span>',
//     'Da Paw is loved by the grandkids! <span>👴</span>',
//     'Great golfer! (hole in one in the bag) <span>🏌</span>',
//     'You have great intiuition, personal and business <span>👁️‍🗨️</span>',
//     'Oldest Brother and pillar of an amazing family <span>🏛</span>',
//     'Great sense of humor! <span>🤣</span>',
//     'Will ask funny questions when filming you <span>🎬</span>',
//     'Loves speaking to strangers! <span>🙃</span>',
//     'Always around for us as kids <span>👪</span>',
//     'Fun to travel with! <span>🛫</span>'
//   ];

//   private _bdMsgQueue: string[] = [];
//   private _timeout: number
//   private _timeoutLn: number = 2500;

//   constructor() {
//     this.flame = <HTMLElement>document.querySelector('.flame');
//     this.cake = <HTMLElement>document.querySelector('.cake');
//     this.bdayMessage = <HTMLElement>document.querySelector('.bday-message__text');
//     this._attachListeners();
//   }

//   onCakeClick(e): void {
//     this.getBdayMessage();
//     this._toggleVisibility();
//   }

//   getBdayMessage(): void {
//     //reset if necessary
//     if (this._bdMsgQueue.length === 0) {
//       this._bdMsgQueue = [...this.bdayMessages];
//     }
//     //randomize list
//     shuffle(this._bdMsgQueue);
//     this.bdayMessage.innerHTML = this._bdMsgQueue.pop();
//   }

//   private _toggleVisibility(): void {

//     if (this._timeout) {
//       clearTimeout(this._timeout);
//     }

//     this.flame.classList.add('--hidden')
//     this.bdayMessage.classList.remove('--hidden');

//     this._timeout = setTimeout(() => {
//       this.flame.classList.remove('--hidden');
//       this.bdayMessage.classList.add('--hidden');
//     }, this._timeoutLn);
//   }

//   private _attachListeners(): void {
//     this.cake.addEventListener('click', (e) => this.onCakeClick(e));
//   }

// }
