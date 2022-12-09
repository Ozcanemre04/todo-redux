
import { useSelector } from 'react-redux';
import AddTodo from './components/AddTodo/AddTodo';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';


function App() {
  return (
    <div className="App">
     <Header/>
     <section className='w-full h-screen' style={{backgroundColor:'#C6D8F4'}}>
     <AddTodo/>
     <TodoList/>
     </section>
    </div>
  )
}

export default App
