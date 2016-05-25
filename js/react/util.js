module.exports={
    formatDate: function(data){
        if(data instanceof Date)
            return ("0"+data.getDate()).slice(-2) + "/" +  ("0"+data.getMonth()).slice(-2)+ "/" + data.getFullYear();
    }
};
