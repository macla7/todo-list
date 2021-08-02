import User from './user';
import Project from './project';
import ProjectFormEvents from './project-form-EL';
import ProjectRangeEvents from './project-range-EL';
import Events from './event-listeners'
import './style.scss'

const user = User();
const example = Project('Example Project', 'My reoccurring goal to get in a healthy amount of body movement and exertion.', 1)

user.newProject(example);
user.printProject();
user.domPrinter();


ProjectFormEvents();
ProjectRangeEvents();
Events(user, Project);
