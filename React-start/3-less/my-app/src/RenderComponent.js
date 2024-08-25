import React from 'react';
import ToDoList from './ToDoList';
import GrandChildComponents from './GrandChildComponent';

const RenderComponent = () => {
    const ToDo = [
        { id: 1, name: 'firstToDo' },
        { id: 2, name: 'secondToDo' },
        { id: 3, name: 'thirdToDo' },
        { id: 4, name: 'fourthToDo' }
    ];

    const MyName = {
        name:'Bohdan'
    }

    const MyFunctionName = () => {
        return 'Bohdan'
    }

    const MyNameArray = ['Bohdan']
    return (
        <div>
            {/* {ToDo.map((name) => {
                return <ToDoList key={name.id} renderOneToDo={name.name} id={name.id} />
            })} */}
            <GrandChildComponents MyName={MyName} MyFunctionName={MyFunctionName} MyNameArray={MyNameArray} />
        
        </div>
    );
}

export default RenderComponent;
