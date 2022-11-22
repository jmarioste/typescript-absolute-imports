import _users from "./data/users.json"
import { User } from "./types/User";

const users = _users as User[];
const user = users[0];

console.log(user.first_name)


