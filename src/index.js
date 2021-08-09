import User from './factory-functions/user';
import Project from './factory-functions/project';
import Todo from './factory-functions/todo';
import ProjectFormEvents from './Event-Listeners/project-form-EL';
import TodoFormEvents from './Event-Listeners/todo-form-EL';
import FormRangeEvents from './Event-Listeners/form-range-EL';
import NewProject from './Event-Listeners/new-project-EL';
import NewTodo from './Event-Listeners/new-todo-EL';
import TodoProELGen from './Event-Listeners/pro-todo-EL-gen';
import EditProTitELGen from './Event-Listeners/pro-edit-tit-EL-gen';
import ShowProDesELGen from './Event-Listeners/pro-show-des-EL-gen';
import TodoDelELGen from './Event-Listeners/todo-del-EL-gen';
import ProjectDomBuilder from './dom-builders/project-dom-builder'
import TodoDomBuilder from './dom-builders/todo-dom-builder';
import Save from './local-saving/save';
import Loader from './local-saving/load';
import './style.scss';

const user = User(TodoDomBuilder, ProjectDomBuilder);

if (localStorage.length != 0) {
  Loader(user, Project, Todo)
} else {
  const examplePro = Project('Example Project', 'My reoccurring goal to get in a healthy amount of body movement and exertion.', 0)
  const exampleTodo = Todo('Walk Dog', 'Make sure to take the tennis ball and leash', '', 3, 0)

  examplePro.newTodo(exampleTodo);
  user.newProject(examplePro);
}

user.domPrinter();

ProjectFormEvents();
TodoFormEvents();
FormRangeEvents();
NewProject(user, Project, EditProTitELGen, ShowProDesELGen, TodoProELGen,  TodoDomBuilder, TodoDelELGen, Save);
NewTodo(user, Todo, TodoDomBuilder, TodoDelELGen, ShowProDesELGen, Save);


