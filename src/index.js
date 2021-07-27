import User from './user';
import Project from './project';
import Events from './event-listeners'

const user = User();
const example = Project('Daily Fitness', 'My reoccurring goal to get in a healthy amount of body movement and exertion.', 1)

user.newProject(example);
user.printProject()


Events(user);