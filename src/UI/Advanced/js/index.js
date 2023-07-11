var startpoint =  "foobar.com:3591/";

var search = () => {

    var button_send_1 = document.getElementById('button_send_1')
    var system_out = document.getElementById('system_out').value;
    var query_name = document.getElementById('query_name').value;
    var visua_type = document.getElementById('visua_type').value;
    var weight = document.getElementById('weight').checked;
    var files_to_come = document.getElementById('files_to_come').value;

    var form = new FormData();
    form.append('query',query_name)
    form.append('type',visua_type)
    form.append('w',weight)
    form.append('d',files_to_come)

    button_send_1.style.display = 'none'

    fetch(startpoint+"generate/"+system_out,{
        method:'POST',
        body:form
    }).then(response => response.json())
    .then(data => {
        if(data.worked){
            getResult(data.data_response);

            setTimeout(()=>{
                button_send_1.style.display = 'block';
            },2000)
        }else{
            console.log(data.data_response)
            alert(data.data_response);

            setTimeout(()=>{
                button_send_1.style.display = 'block';
            },2000)
        }
    })
    .catch(error => {
        console.log(error.data_response)
        alert(error.data_response);
    })

    return false
}

var getResult = (URL_download) => {
    console.log(URL_download)
    window.open(URL_download,'_blank');
}
