export class Layout {
    // TODO: add more methods

    setValue(modelName, value) {
        let element = document.querySelector(`[data-bind=${modelName}]`)

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
        if (!data instanceof Object) throw 'Data is not of type Object'

        this.data = data

        let rootElement = element instanceof HTMLElement ? element :
            document.querySelector(`#${element}`) || document.querySelector(`.${element}`)

        for (let prop in this.data) {
            let propElement = rootElement.querySelector(`*[data-bind='${prop}']`)

            if (propElement) {
                switch (propElement.tagName.toLowerCase()) {
                    case 'input':
                        propElement.value = this.data[prop]
                        break
                    default:
                        propElement.innerHTML = this.data[prop]
                        break
                }
            }
        }

        // Observe mutations in element for two way binding
        Array.from(document.querySelectorAll('*[data-bind]'))
        .filter(e => e.tagName.toLowerCase() === 'input')
        .forEach(element => {
            let attr = element.getAttribute('data-bind')
            this.data[attr] = element.value

            // Observe element; upon mutations update the layout data model
            let observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => this.data[attr] = mutation.target.value)
            })
            observer.observe(element, { attributes: true })
        })
    }

}