function inOrder(currentNode){
    if(currentNode.left){
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if(currentNode.right){
        inOrder(currentNode.right)
    }
}

function findOrAdd(rootNode, newNode) {
    let currentNode = rootNode
    if (newNode.data > rootNode.data) {
        currentNode = rootNode.right
        if (currentNode) {
            findOrAdd(currentNode, newNode)
        } else {
            rootNode.right = newNode
        }
    } else if (newNode.data < rootNode.data) {
        currentNode = rootNode.left
        if (currentNode) {
            findOrAdd(currrent, newNode)
        } else {
            rootNode.left = newNode
        }
    }
    return true
}

function max(rootNode) {
    if (rootNode.right) {
        return max(rootNode.right)
    } else {
        return rootNode
    }
}

function min(rootNode) {
    if (rootNode.left) {
        return max(rootNode.left)
    } else {
        return rootNode
    }
}