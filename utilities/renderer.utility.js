export class Renderer {
    setValue(modelName, value) {
        let element = document.querySelector(`[data-bind=${modelName}]`) || document.querySelector(`[data-bind-two=${modelName}]`)

        if (!element) throw `No such element to be found: data-bind="${modelName}"`

        switch(element.tagName.toLowerCase()) {
            case 'input': element.value = value
                break
            default: element.innerHTML = value
                break
        }

        this.data[modelName] = value

        console.log(`Value of element with binding ${modelName} was set: ${value}`)
    }

    render(element, data) {
        if (!element instanceof (HTMLElement || String)) throw 'Parameter is not of type HTMLElement or String'
        if (!data instanceof (Array || Object)) throw 'Data is not of type Object or Array'

        this.data = data

        let rootElement = element instanceof HTMLElement ? element :
            document.querySelector(`#${element}`) || document.querySelector(`.${element}`)

        for (let prop in data) {
            let propElement = rootElement.querySelector(`*[data-bind='${prop}']`) ||
                rootElement.querySelector(`*[data-bind-two='${prop}']`)

            if (propElement) {
                switch (propElement.tagName.toLowerCase()) {
                    case 'input':
                        propElement.value = data[prop]
                        break
                    default:
                        propElement.innerHTML = data[prop]
                }
            }
        }

        // Set on change events for two way binding
        let twoWayBindingElements = Array.from(document.querySelectorAll('*[data-bind-two]'))
        twoWayBindingElements.forEach(element => {
            let attr = element.getAttribute('data-bind-two')
            data[attr] = element.value
            element.onchange = (e) => {
                data[attr] = e.target.value
                console.log('value of '+element.tagName+' changed', data)
            }
        })
    }

}