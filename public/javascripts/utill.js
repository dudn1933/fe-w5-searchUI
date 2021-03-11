const _ = {
    $: (selector) => document.querySelector(selector),
    $all: (selector) => document.querySelectorAll(selector),
    addClass: (node, ...className) => node.classList.add(...className),
    removeClass: (node, ...className) => node.classList.remove(...className),
    contains: (node, className) => node.classList.contains(className) 
}

export default _;