export class model
{
    user;
    items;
    constructor()
    {
        this.user="akash";
        this.items=[
            {action:"buy flowers", done:false},
            {action:"get shoes", done:false},
            {action:"collect tickets", done:true},
            {action:"do workouts", done:false},
        ]
    }
}

export class TodoItems
{
    action;
    done;
    constructor(action,done)
    {
        this.action=action;
        this.done=done;
    }
}