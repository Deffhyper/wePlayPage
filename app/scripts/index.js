import './../styles/main.scss'
import $ from 'jquery'
import { Power2, TimelineMax } from 'gsap/TweenMax'

if (process.env.NODE_ENV !== 'production') {
  require('./../index.pug')
}

export class Common {
  constructor () {
    this.init()
  }

  socialLinkAnimation () {
    let tl = new TimelineMax()
    tl.staggerFromTo($('.socials-list__item'), 0.6, {
      y: -15,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      ease: Power2.easeOut
    }, 0.3)
  }
  decorAnimation () {
    let tl = new TimelineMax()
    tl.fromTo($('.decor'), 0.6, {
      x: 15,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      ease: Power2.easeOut
    })
  }
  init () {
    this.socialLinkAnimation()
    this.decorAnimation()
  }
}
export default new Common()
