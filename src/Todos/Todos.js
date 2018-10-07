import React, {Component} from 'react';
import TodoItems from './TodoItems'
import TodoInput from './TodoInput';

class Todos extends Component {
    state = {
        items: [],
        term: '',
    }

    deleteItem = (item) => {
        let itemsBeforeDeleting = [...this.state.items].filter(el => el !== item);
        
        this.setState({items: [...itemsBeforeDeleting]});
    }

    onChange = (e) => {
        this.setState({term: e.target.value})
    }

    onSubmit = () => {
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }

    render () {
        return (
            <div>
                <TodoInput submit={this.onSubmit} change={this.onChange} term={this.state.term}/>
                <TodoItems updated={this.updateItem} items={this.state.items} deleted={this.deleteItem}/>
            </div>
        );
    }
}

export default Todos;