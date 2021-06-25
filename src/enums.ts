enum StatusEnum {
    NotStarted = 'notStarted',
    Started = 'inProgress',
    Done = 'finished'
}

let currentStatus: StatusEnum = StatusEnum.NotStarted;

currentStatus = StatusEnum.Started;

// Here the currentStatus variable would only accept available status. 

// We can use enums in interface
interface Task{
    id: string,
    status: StatusEnum
}