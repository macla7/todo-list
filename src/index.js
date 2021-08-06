import User from './user';
import Project from './project';
import ProjectFormEvents from './project-form-EL';
import TodoFormEvents from './todo-form-EL';
import FormRangeEvents from './form-range-EL';
import NewProject from './new-project-EL';
import TodoProELGen from './pro-todo-EL-gen';
import EditProTitELGen from './pro-edit-tit-EL-gen';
import ShowProDesELGen from './pro-show-des-EL-gen';
import './style.scss';


const user = User();
const example = Project('Example Project', 'My reoccurring goal to get in a healthy amount of body movement and exertion.', 1)

user.newProject(example);
user.printProject();
user.domPrinter();

ProjectFormEvents();
TodoFormEvents();
FormRangeEvents();
NewProject(user, Project, EditProTitELGen, ShowProDesELGen, TodoProELGen);


