const getid = document.getElementById('root');

//This is the object which stores elements.
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Please Click this link to open google'
};

//This is the rendering process.
const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children;
for (const prop in reactElement.props) {
    if (reactElement.type == 'children') continue
    domElement.setAttribute(prop, reactElement.props[prop]);
}

//This append child gets the data from the getid query.
getid.appendChild(domElement);

//This is my custom rendered react project.

