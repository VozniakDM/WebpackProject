import Comment from "./Comment";
import  './styles/style.css'
import  './styles/less/styles.less'
import  './styles/scss/style.sass'
import  './styles/scss/styles.scss'
import userAvatar from './assets/user.png'

const comment = new Comment('Lesson 6 about webpack', userAvatar);

console.log(comment.toString());