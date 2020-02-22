import React from 'react';
import Todos from '../components/Todos';
import { connect } from 'react-redux';
import {changeInput, insert, toggle, remove} from '../moduels/todos'
const TodosContainer = ({
    input,
    todos,
    changeInput,
    insert,
    toggle,
    remove
}) => {
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
    );
};

export default connect(
    // 비구조화 할당을 통해 todos를 분리하며
    // state.todos.input 대신 todos.input을 사용
    ({todos}) => ({
        input: todos.input,
        todos: todos.todos,
    }),
    {
        changeInput,
        insert,
        toggle,
        remove,
    },
)(TodosContainer)