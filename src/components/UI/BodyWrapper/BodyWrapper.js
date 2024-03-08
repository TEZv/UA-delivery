
const BodyWrapper = props => {
    return <div className="pb-20 pr-32 pt-10 flex">
        <div className="flex">
            {props.children}
        </div>
    </div>
}

export default BodyWrapper