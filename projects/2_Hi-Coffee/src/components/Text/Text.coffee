export class Text
  constructor: (@container, text) ->
    @render()
    @element.textContent = text
  
  render: ->
    @element = document.createElement 'p'

    @container.appendChild @element
