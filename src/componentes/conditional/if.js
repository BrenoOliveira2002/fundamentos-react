export default props => {

    if(props.text) {

        return props.children
    } else {

        return false
    }
}