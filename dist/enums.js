var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "notStarted";
    StatusEnum["Started"] = "inProgress";
    StatusEnum["Done"] = "finished";
})(StatusEnum || (StatusEnum = {}));
var currentStatus = StatusEnum.NotStarted;
currentStatus = StatusEnum.Started;
