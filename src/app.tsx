import * as React from "react";

export default function App() {
  return (
    <>
      <div className="bday-message__wrapper">
        <h1>> Happy Birthday Mom!</h1>
        <p>Click the cake to blow out your candle!</p>
        <div className="bday-message">
          <h3 className="bday-message__text --hidden" />
        </div>
      </div>

      <div className="cake">
        <div className="plate" />
        <div className="layer layer-bottom" />
        <div className="layer layer-middle" />
        <div className="layer layer-top" />
        <div className="icing" />
        <div className="drip drip1" />
        <div className="drip drip2" />
        <div className="drip drip3" />
        <div className="candle">
          <div className="flame" />
        </div>
      </div>
    </>
  );
}

// document.addEventListener('DOMContentLoaded', () => new App());

// function shuffle(arr: string[]) {
//   let ci: number = arr.length, randomIndex;

//   while (0 !== ci) {
//     randomIndex = Math.floor(Math.random() * ci);
//     ci -= 1;
//     [arr[ci], arr[randomIndex]] = [arr[randomIndex], arr[ci]];
//   }

//   return arr;
// }

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
