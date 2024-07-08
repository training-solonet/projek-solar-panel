import { io } from 'socket.io-client';

const socket = io('http://connectis.my.id:5000'); 

export default socket;