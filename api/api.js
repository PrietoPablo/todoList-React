const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors('*'));

let tasks = [
    {
        id: 1,
        label: 'Apprendre React',
        done: true
    },
    {
        id: 2,
        label: 'Apprendre Angular',
        done: false
    },
    {
        id: 3,
        label: 'Apprendre VueJS',
        done: false
    }
];

app.get('/tasks', (req, res) => {
    return res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = {
        id: Math.max(...tasks.map(t => t.id)) + 1,
        label: req.body.label,
        done: false
    };

    tasks = [...tasks, newTask];

    return res.json(newTask);
});

app.put('/tasks/:task_id', (req, res) => {
    const task_id = Number(req.params.task_id);

    tasks = tasks.map(task => {
        if(task.id === task_id) {
            return {
                ...task,
                done: !task.done
            };
        }

        return task;
    });

    return res.json(tasks.find(task => task.id === task_id));
});

app.delete('/tasks/:task_id', (req, res) => {
    const task_id = Number(req.params.task_id);

    tasks = tasks.filter(task => task.id !== task_id);
    return res.json(tasks);
})

app.listen(3000, () => {
    console.log(`API running http://localhost:3000`);
});