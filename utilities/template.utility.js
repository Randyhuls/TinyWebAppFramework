export class Template {
    constructor() {

    }

    static render(element, data) {
        if (!element instanceof (HTMLElement || String)) throw 'Parameter is not of type HTMLElement or String'
        if (!data instanceof (Array || Object)) throw 'Data is not of type Object or Array'

        let rootElement = element instanceof HTMLElement ? element : document.querySelector((`#${element}` || `.${element}`))

        let childElements = Array.from(rootElement.children)

        if (data instanceof Object) {
            for (let prop in data) {
                let propElement = rootElement.querySelector(`*[data-bind='${prop}']`)
                if (propElement) propElement.innerHTML = data[prop]
            }
        } else if (data instanceof Array) {
            // TODO: ?
        }

    }
}