import './../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./../index.pug')
}

export class Common {
  constructor () {
    this.init()
  }

  dropdown () {
    const dopdownTrigger = document.querySelectorAll('.dropdown__trigger')
    for (let trigger of dopdownTrigger) {
      trigger.addEventListener('click', function () {
        this.nextSibling.classList.toggle('show')
      })
    }
  }

  closeDropdown () {
    window.onclick = function (event) {
      if (!event.target.matches('.dropdown__trigger')) {
        const dropdowns = document.querySelectorAll('.dropdown__content')
        for (let dropdown of dropdowns) {
          let openDropdown = dropdown
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show')
          }
        }
      }
    }
  }

  init () {
    this.dropdown()
    this.closeDropdown()
  }
}
export default new Common()
