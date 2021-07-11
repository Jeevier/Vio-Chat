import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';


const projectID = '37e02ca5-7708-4a7d-97d9-8f1b0d3ab92a';

const App = () => {
        if (!sessionStorage.getItem('username'))  return <LoginForm / > ;

        return ( <
            ChatEngine height = "100vh"
            projectID = { projectID }
            userName = { sessionStorage.getItem('username') }
            userSecret = { sessionStorage.getItem('password') }
            renderChatFeed = {
                (chatAppProps) => < ChatFeed {...chatAppProps }
                />}
                onNewMessage = {
                    () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play() }
                />
            );
        };

        // infinite scroll, logout, more customizations...

        export default App;