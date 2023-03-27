function TodoList(props) {
    return (
        <div className="w-full px-4">
            <ul>
                {props.children}
            </ul>
        </div>
    );
}

export { TodoList };