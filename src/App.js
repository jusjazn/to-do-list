import React, { useState } from 'react';
import 'antd/dist/antd.css' ;
import { Button } from 'antd';
import {CheckCircleTwoTone, CloseCircleTwoTone, FormOutlined, ScheduleTwoTone, SmileTwoTone, HeartTwoTone, ShoppingTwoTone} from '@ant-design/icons';
import { Layout, Space } from 'antd';
import { Input } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { TextArea } = Input;

function App() {

  // list of tasks
  const [tasks, setTasks] = useState([]);
  
  // list of each field in a to do item
  const [taskName, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  // adding items
  const addItem = () => {
    if(taskName === "" || description === "" || dueDate ===""){
      alert("Please fill out all of the fields!")
    } else {

      setTasks([
        ...tasks,
        { name: taskName, 
          detail: description, 
          date: dueDate}
      ]);

      setName("");
      setDescription("");
      setDueDate("");
   }
  };

  // delete all items in list
  const clearList = () => {
    setTasks([]);
  }

  // order items by date
  const orderDate = () => {

  }

  // order items by name
  const orderName = () => {

  }

  const ToDoItem = ({ task }) => {

    const [status, setStatus] = useState(false);

    const checkOff = () => {
      setStatus(!status);
    };

    const deleteTask = () => {
      const newArray = [];
      tasks.forEach((i) => {
        if (i !== task) newArray.push(i);
        // or you can use filter!
      
      setTasks(newArray);
      });

    };

    return (
      <div
      style ={{
        border: "3px solid pink",
        width: "300px",
        marginTop: "10px",
        marginRight: "10px",
        marginBottom: "50px",
        padding: "10px",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "pink"
      }}>

      {status ? (
        <h2>
          <strike>{task.name}</strike>
        </h2>

      ) : (
        <div>
          <h2>{task.name}</h2>
          <p>{task.detail}</p>
          <p>Due: {task.date}</p>
        </div>
      )}
      
      <Button type="default" shape="round" value="small" icon={<CheckCircleTwoTone twoToneColor="#b7eb8f"/>} onClick={checkOff}> check off </Button>
      <Button type="default" shape="round" value= "small" icon={<CloseCircleTwoTone twoToneColor="#ffa39e" />}onClick={deleteTask}>delete</Button>

      </div>
    );
  };
    
  return(

    <Layout>
    
    <Header style={{backgroundColor: "#d3adf7", fontSize: "26px"}}>
      <div style={{
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "#d3adf7",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}>

      <Space size = 'middle' direction = 'horizontal'>
        <h1> your to do list </h1>
        <FormOutlined/>
      </Space>
  

      </div>
    </Header>
    
    <Layout>
      <Sider width="400" style={{backgroundColor: "#ffadd2"}}>
        <div style={{
          alignItems: "center",
          textAlign: "center"
        }}>

          <br></br>
          <Space size='small' direction='horizontal'>
            <SmileTwoTone twoToneColor="#fff566" style={{fontSize: '18px'}}/>
            <ScheduleTwoTone twoToneColor="#b7eb8f" style={{fontSize: '18px'}}/>
            <ShoppingTwoTone twoToneColor="#d3adf7" style={{fontSize: '18px'}}/>
            <HeartTwoTone twoToneColor="#ffadd2" style={{fontSize: '18px'}}/>
          </Space>

          <br></br>
          <br></br>

          <Input style={{width: 300}}
            placeholder="name of task"
            type="text" 
            value = {taskName}
            onChange={(e) => setName(e.target.value)}
          />

          <br></br>
          <br></br>
          <br></br>

          <TextArea style={{width: 300}}
            placeholder="description of task"
            type="text"
            value = {description}
            onChange={(e) => setDescription(e.target.value)}
            autoSize={{minRows: 3}}>
            
          </TextArea>
      
          <br></br>
          <br></br>

          <Input style={{width: 300}}
            placeholder="due date (mm/dd)"
            type="text"
            value = {dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            />

          <br></br>
          <br></br>

          <Button type="ghost" onClick={addItem} shape="round" style={{backgroundColor: "#ffd6e7"}}> add item </Button>

          <br></br>
          <br></br>

          <Space size = 'small' direction='horizontal'>
            <SmileTwoTone twoToneColor="#fff566" style={{fontSize: '18px'}}/>
            <ScheduleTwoTone twoToneColor="#b7eb8f" style={{fontSize: '18px'}}/>
            <ShoppingTwoTone twoToneColor="#d3adf7" style={{fontSize: '18px'}}/>
            <HeartTwoTone twoToneColor="#ffadd2" style={{fontSize: '18px'}}/>
          </Space>
          <br></br>
          <br></br>

        </div>
      </Sider>

      <Content style={{padding: '0 50px', backgroundColor: "#ffd6e7"}}>
        <div style={{
          display:"flex",
          flexDirection:"row",
          flexWrap: 'wrap',
          
        }}>
          {tasks.map((todo) => <ToDoItem task={todo} />)}
        </div>
      </Content>
    </Layout>

    <Footer style={{
      alignItems: "center",
      textAlign: "center",
      display: "flex",
      flexDirection: "row", 
      justifyContent: "center",
      backgroundColor: "#d3adf7"
      
    }}>

      <Space size ='large' direction ='horizontal'>
        <Button type = "default" onClick={orderDate} shape="round"> order by date </Button>
      
        <Button type = "default" onClick={orderName} shape="round"> order by name </Button>
 
        <Button type="default" onClick={clearList} shape="round" style ={{backgroundColor:"#ffa39e"}}> clear list </Button>
      </Space>

    </Footer>
    </Layout>

  
  );
};


export default App;