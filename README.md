# Conversor-API

EndPoint Tree

##.../generate/{System}
###Makes Contact with Epistolarium's Server itself and return the search.
###Method = POST

System's Values = {
"GEPHI" = "GEPHI system"
"VOS" = "VOSviewer"
} 

Post-Body:
query = Espitolarium Query Name
type = Type of Visualization (e.g. 'cocitation' or 'persons/graph')
w = Weighted or not (true or false)
d = included Files ("csv","json","all")

Response:
Successful Response:
{
data_repsonse: {link_file_result}
worked:true
}

Failure Response:
{
data_repsonse: {Error Message}
worked:false
}


##.../view/{file_name}
###Return the file based on its name
###Method = GET

file_name = Name of the generated file

Response:
Successful Response:
{
worked:true
}

Failure Response:
{
data_repsonse: {Error Message}
worked:false
}

##.../delete/{file_name}
###Delete the file based on its name
###Method = GET

file_name = Name of the generated file

Response:
Successful Response:
{
worked:true
}

Failure Response:
{
data_repsonse: {Error Message}
worked:false
}
