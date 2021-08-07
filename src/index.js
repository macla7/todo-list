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
import todoDomBuilder from './todo-dom-builder';
import './style.scss';


const user = User(todoDomBuilder);
const example = Project('Example Project', 'My reoccurring goal to get in a healthy amount of body movement and exertion.', 1)

user.newProject(example);
user.printProject();
user.domPrinter();

ProjectFormEvents();
TodoFormEvents();
FormRangeEvents();
NewProject(user, Project, EditProTitELGen, ShowProDesELGen, TodoProELGen);
NewTodo(user, Todo, todoDomBuilder);


