import { Svg } from '../components/Svg/Svg'
import { Text } from '../components/Text/Text'

import coffee from '~/assets/image/coffee.svg'

import './MainPage.styl'

export class MainPage
  constructor: (@container) ->
    @render()

  switchImageToText: =>
    @element.textContent = ''
    text = new Text @element, 'Привет, кофе!'
    text.element.classList.add 'main-page__text'

  render: ->
    @element = document.createElement 'div'
    @element.classList.add 'main-page'

    @container.textContent = ''
    @container.appendChild @element

    coffeeSvg = new Svg @element, coffee
    coffeeSvg.element.classList.add 'main-page__coffee'

    coffeeSvg.element.addEventListener 'click', @switchImageToText
