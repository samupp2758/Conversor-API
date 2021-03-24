# Conversor-API

EndPoint Tree

## .../generate/{System}
### Makes Contact with Epistolarium's Server itself and return the search.
### Method = POST

System's Values = {
<br>
"GEPHI" = "GEPHI system"
<br>
"VOS" = "VOSviewer"
<br>
} 

Post-Body:
<br>
query = Espitolarium Query Name
<br>
type = Type of Visualization (e.g. 'cocitation' or 'persons/graph')
<br>
w = Weighted or not (true or false)
<br>
d = included Files ("csv","json","all")
<br>
Response:
<br>
Successful Response:
<br>
{
<br>
data_repsonse: {link_file_result}
<br>
worked:true
<br>
}
<br>
Failure Response:
<br>
{
<br>
data_repsonse: {Error Message}
<br>
worked:false
<br>
}


## .../view/{file_name}
### Return the file based on its name
### Method = GET

file_name = Name of the generated file
<br>
Response:
<br>
Successful Response:
<br>
{
<br>
worked:true
<br>
}
<br>
Failure Response:
<br>
{
<br>
data_repsonse: {Error Message}
<br>
worked:false
<br>
}

## .../delete/{file_name}
### Delete the file based on its name
### Method = GET

file_name = Name of the generated file
<br>
Response:
<br>
Successful Response:
<br>
{
<br>
worked:true
<br>
}
<br>
Failure Response:
<br>
{
<br>
data_repsonse: {Error Message}
<br>
worked:false
<br>
}
