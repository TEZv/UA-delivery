
const BodyWrapper = props => {
    return <div className="mr-20 ml-2 pb-80 pt-10 flex">
        <div className="flex">
            {props.children}
        </div>
    </div>
}

export default BodyWrapper