export class HTMLElementUtility {
    static setClassWithAnimation(element, className, reversed, onFinished) {
        // If animations needs to be reversed
        if (reversed) {
            element.classList.remove(className)
            void element.offsetWidth // Force DOM to reflow the page
            element.style.animationDirection = 'reverse'
            element.classList.add(className)

        } else {
            element.classList.add(className)
        }

        let computed = window.getComputedStyle(element)
        let duration = parseFloat(computed.animationDuration || computed.transitionDuration || 0)*1000

        setTimeout(onFinished, duration)
    }
}