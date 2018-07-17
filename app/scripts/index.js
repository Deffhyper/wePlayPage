import './../styles/main.scss'
import $ from 'jquery'
import { Expo, TimelineMax } from 'gsap/TweenMax'

if (process.env.NODE_ENV !== 'production') {
  require('./../index.pug')
}

export class Common {
  constructor () {
    this.init()
  }

  socialLinkAnimation () {
    let tl = new TimelineMax()
    tl.staggerFromTo($('.socials-list__item'), 1, {
      y: -15,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut
    }, 0.3)
      .fromTo($('.header__logo'), 1, {
        y: -15,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        ease: Expo.easeOut
      }, '-=1.8')
      .fromTo($('.content__title'), 2, {
        y: 40,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        ease: Expo.easeOut
      }, '-=1.4')
      .fromTo($('.content__subtitle'), 2, {
        y: 40,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        ease: Expo.easeOut
      }, '-=1.8')
      .to($('.u-accent-color'), 0.5, {className: '+=active'}, '-=1.4')
      .to($('.u-second-color'), 0.5, {className: '+=active'}, '-=.9')
  }

  init () {
    this.socialLinkAnimation()
  }
}
export default new Common()
