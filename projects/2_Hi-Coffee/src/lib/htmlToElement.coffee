htmlToElement = (html) ->
  template = document.createElement 'template'
  template.innerHTML = html.trim()
  return template.content.firstChild

export default htmlToElement
