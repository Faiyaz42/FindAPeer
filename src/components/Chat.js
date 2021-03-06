import React, { Component } from 'react'
import "./Chat.css"
import Posts from "./Posts";
import {v4 as uuidv4} from 'uuid';
import { ChatEngine } from 'react-chat-engine';
export class Chat extends Component {
    
    state = {
        username: "",
        text: "",
        posts: []
    }
    post = (text, username) => {
        const newPost = {
            id: uuidv4(),
            username: username,
            text: text
        }
        this.setState({posts: [...this.state.posts, newPost]});
        console.log(newPost.id);
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.post(this.state.text, this.state.username);
        this.setState({text: "", username: "Ali"});
    }
    onChange = (e) => this.setState({text: e.target.value });
    setUsername = (e) => {
        this.setState({username: e.target.value});
    }
    
    render() {
        return (
            <div className="chat">
                {/* <h1 style={{gridRow:2}}>Chat</h1>
                <div id="chatBOX" style={{gridRow:3, overflowY:"scroll", overflowX: "hidden"}}>
                   
                    <Posts username={andy} text={text}/>
                    {this.state.posts.map(posts =>(
                        <Posts username={username} text={posts.text}/>
                    ))}
                </div>
                <form onSubmit={this.onSubmit} style={{display:"flex",gridRow:4, width:"90%", margin:"auto"}}>
                   
                    <input id="text" placeholder="What's happening?" type="text" name="text" style={{flex:"10", padding:"15px"}} value={this.state.text} onChange={this.onChange}/>
                    <input id="submit" type="submit" value="Submit" className="btn" style={{flex:"2", cursor:"pointer"}}/>
                </form> */}
                <ChatEngine
                    height='80vh'
                    userName='Andy'
                    userSecret='123123'
                    projectID='d8f29e32-98e9-4bb3-ac89-d64f3592ddf3'
                />
            </div>
        )
    }
}
var andy = "https://cdn.discordapp.com/attachments/396871882139500564/810543746969108530/unknown.png"
var username = "https://cdn.discordapp.com/attachments/807075592490057748/810565880081547264/unknown.png"
var text = [
    "hello",
    "whats up"
]
export default Chat
