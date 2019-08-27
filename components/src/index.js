import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                author= "Mullah" 
                timeAgo="Today at 8:00PM" 
                content="Nice Blog Post!"
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                author= "Issa" 
                timeAgo="Today at 3:45AM" 
                content="I Like the subject"
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author= "Hassan" 
                timeAgo="Yesterday at 4:00AM" 
                content="I love writing"
                avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));