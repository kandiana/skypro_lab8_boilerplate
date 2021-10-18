import htmlToElement from '~/lib/htmlToElement'

export class Svg
  constructor: (@container, @html) ->
    @render()
  
  render: ->
    @element = htmlToElement @html

    @container.appendChild @element
