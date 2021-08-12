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
import ProjectDelELGen from './Event-Listeners/pro-del-EL-gen';
import TodoDelELGen from './Event-Listeners/todo-del-EL-gen';
import TodoCompELGen from './Event-Listeners/todo-comp-EL-gen';
import ProjectDomBuilder from './dom-builders/project-dom-builder'
import TodoDomBuilder from './dom-builders/todo-dom-builder';
import Save from './local-saving/save';
import Loader from './local-saving/load';
import TodoDate from './misc/todo-date.js';
import { parseISO, format, formatDistance, isBefore } from 'date-fns'
import './style.scss';

// Create the new user
const user = User(TodoDomBuilder, ProjectDomBuilder, TodoDate(parseISO, format, formatDistance, isBefore));

console.log(localStorage)

// If theres a locally stored user, import their projects
// and todos, else create examples
if (localStorage.length != 0) {
  Loader(user, Project, Todo)
} else {
  const examplePro = Project('Example Project', 'My reoccurring goal to get in a healthy amount of body movement and exertion.')
  const exampleTodo = Todo('Walk Dog', 'Make sure to take the tennis ball and leash', '', 3)

  examplePro.newTodo(exampleTodo);
  user.newProject(examplePro);
}

// Print to dom
user.domPrinter();

// Set Event Listeners for forms, then all the other EL's
// are set whenever a new project or todo is made, so they're
// passed into NewProject and NewTodo.
ProjectFormEvents();
TodoFormEvents();
FormRangeEvents();
NewProject(user, Project, EditProTitELGen, ShowProDesELGen, TodoProELGen,  TodoDomBuilder, TodoDelELGen, ProjectDelELGen, Save, TodoDate(parseISO, format, formatDistance, isBefore));
NewTodo(user, Todo, TodoDomBuilder, TodoDelELGen, ShowProDesELGen, TodoCompELGen, Save, TodoDate(parseISO, format, formatDistance, isBefore));


