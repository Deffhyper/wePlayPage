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

  openMobMenu () {
    const mobTrigger = document.getElementById('mob-menu-trigger')
    let overlay = document.createElement('div')
    overlay.className = 'blur'

    mobTrigger.addEventListener('click', function () {
      this.classList.toggle('active')
      document.querySelector('.header').classList.toggle('menu-open')

      if (this.classList.contains('active')) {
        document.body.appendChild(overlay)
        document.body.classList.add('top-menu-open')
      } else {
        overlay.remove()
        document.body.classList.remove('top-menu-open')
      }
      overlay.addEventListener('click', function () {
        document.querySelector('.header').classList.remove('menu-open')
        mobTrigger.classList.remove('active')
        document.body.classList.remove('top-menu-open')
        this.remove()
        this.removeEventListener('click')
      })
    })
  }

  modalOpen () {
    const modalArray = document.querySelectorAll('.modal-trigger')
    for (let modal of modalArray) {
      modal.addEventListener('click', function (event) {
        event.preventDefault()
        let modalDataAttr = this.dataset.modal

        document.querySelector(modalDataAttr).style.display = 'block'
      })
    }
  }

  init () {
    this.dropdown()
    this.closeDropdown()
    this.openMobMenu()
    this.modalOpen()
  }
}
export default new Common()
