## Project setup
```
npm install
```

### Run
```
node server.js
```


<!DOCTYPE html>
<html>
<body>
  <h1>
    API
  </h1>
  <h1>User</h1>
  <h2>/user/signup</h2>
        <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">POST memegenerator-jcg-jmm/user/signup</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>email</td>
            <td>string</td>
            <td>User's email</td>
        </tr>
        <tr>
            <td>username</td>
            <td>string</td>
            <td>User's username</td>
        </tr>
        <tr>
            <td>password</td>
            <td>string</td>
            <td>User's password</td>
        </tr>
        <tr>
            <td>idMeme</td>
            <td>Array[String]</td>
            <td>User's idMemes</td>
        </tr>
   </table>
   <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">POST memegenerator-jcg-jmm/user/signup</th>
        </tr>
        <tr>
            <th>Status</th>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>204</td>
            <td>msg</td>
            <td>JSON</td>
            <td>User Created</td>
        </tr>
        <tr>
            <td>500</td>
            <td>err</td>
            <td>JSON</td>
            <td>Some error occurred while creating the User</td>
        </tr>
    </table>
  </h2>
  
  
  
  
  
  <h2>/user/signin</h2>
        <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">POST memegenerator-jcg-jmm/user/signin</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Body</th>
            <th>Content</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>email</td>
            <td>string</td>
            <td></td>
            <td></td>
            <td>User's email</td>
        </tr>
        <tr>
            <td>password</td>
            <td>string</td>
            <td></td>
            <td></td>
            <td>User's password</td>
        </tr>
   </table>
   <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">POST memegenerator-jcg-jmm/user/signin</th>
        </tr>
        <tr>
            <th>Status</th>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>404</td>
            <td>msg</td>
            <td>JSON</td>
            <td>Not found User with email</td>
        </tr>
        <tr>
            <td>500</td>
            <td>err</td>
            <td>JSON</td>
            <td>Error retrieving User with email</td>
        </tr>
    </table>
  </h2>
  
  
  
  
  <h2>/user/getAll</h2>
        <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">GET memegenerator-jcg-jmm/user/getAll</th>
        </tr>
   </table>
   <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">POST memegenerator-jcg-jmm/user/getAll</th>
        </tr>
        <tr>
            <th>Status</th>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>500</td>
            <td>err</td>
            <td>JSON</td>
            <td>Error retrieving User with email</td>
        </tr>
    </table>
  </h2>
  
  
  
  
  <h2>/user/findUserByEmail/:email</h2>
        <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">GET memegenerator-jcg-jmm/user/findUserByEmail/:email</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>email</td>
            <td>string</td>
            <td>User's email</td>
        </tr>
   </table>
   <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">POST memegenerator-jcg-jmm/user/findUserByEmail/:email</th>
        </tr>
        <tr>
            <th>Status</th>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>404</td>
            <td>msg</td>
            <td>JSON</td>
            <td>Not found User with email</td>
        </tr>
        <tr>
            <td>500</td>
            <td>err</td>
            <td>JSON</td>
            <td>Error retrieving User with email</td>
        </tr>
    </table>
  </h2>
    
  
  
  
  <h2>/user/update/:idUser</h2>
        <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">PUT memegenerator-jcg-jmm/user/update/:idUser</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>idUser</td>
            <td>string</td>
            <td>User's id</td>
        </tr>
   </table>
   <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">POST memegenerator-jcg-jmm/user/update/:idUser</th>
        </tr>
        <tr>
            <th>Status</th>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>404</td>
            <td>msg</td>
            <td>JSON</td>
            <td>Not found User with Id</td>
        </tr>
        <tr>
            <td>500</td>
            <td>err</td>
            <td>JSON</td>
            <td>Error retrieving User with Id</td>
        </tr>
    </table>
  </h2>
  
  
  
  
  <h2>/user/deleteById/:idUser</h2>
        <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">DELETE memegenerator-jcg-jmm/user/deleteById/:idUser</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>idUser</td>
            <td>string</td>
            <td>User's id</td>
        </tr>
   </table>
   <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">DELETE memegenerator-jcg-jmm/user/deleteById/:idUser</th>
        </tr>
        <tr>
            <th>Status</th>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>404</td>
            <td>msg</td>
            <td>JSON</td>
            <td>Not found User with email</td>
        </tr>
        <tr>
            <td>500</td>
            <td>err</td>
            <td>JSON</td>
            <td>Error retrieving User with email</td>
        </tr>
    </table>
  </h2>
  
  
  
  
  
  <h2>/user/deleteAll</h2>
        <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">DELETE memegenerator-jcg-jmm/user/deleteAll</th>
        </tr>
   </table>
   <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">DELETE memegenerator-jcg-jmm/user/deleteAll</th>
        </tr>
        <tr>
            <th>Status</th>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>404</td>
            <td>msg</td>
            <td>JSON</td>
            <td>Not found User with email</td>
        </tr>
        <tr>
            <td>500</td>
            <td>err</td>
            <td>JSON</td>
            <td>Error retrieving User with email</td>
        </tr>
    </table>
  </h2>
  
  
  
  
  
   <h1>Meme</h1>
     <h2>/meme/create</h2>
        <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">POST memegenerator-jcg-jmm/meme/create</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Name</td>
            <td>string</td>
            <td>Meme's name</td>
        </tr>
        <tr>
            <td>Route</td>
            <td>string</td>
            <td>Meme's Route</td>
        </tr>
        <tr>
            <td>idCategory</td>
            <td>string</td>
            <td>Meme's idCategory</td>
        </tr>
   </table>
   <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">POST memegenerator-jcg-jmm/meme/create</th>
        </tr>
        <tr>
            <th>Status</th>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>500</td>
            <td>err</td>
            <td>JSON</td>
            <td>Error retrieving User with email</td>
        </tr>
    </table>
  </h2>
   
   
   
   
   
   
   <h2>/meme/findByName/:name</h2>
        <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">GET memegenerator-jcg-jmm/meme/findByName/:name</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Name</td>
            <td>string</td>
            <td>Meme's name</td>
        </tr>
   </table>
   <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">GET memegenerator-jcg-jmm/meme/findByName/:name</th>
        </tr>
        <tr>
            <th>Status</th>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
          <tr>
            <td>404</td>
            <td>err</td>
            <td>JSON</td>
            <td>Not found Meme with name</td>
        </tr>
        <tr>
            <td>500</td>
            <td>err</td>
            <td>JSON</td>
            <td>Error retrieving User with email</td>
        </tr>
    </table>
  </h2>
  
  


   
   
   
   
   
   
   <h2>/meme/deleteById/:idMeme</h2>
        <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">DELETE memegenerator-jcg-jmm/meme/meme/deleteById/:idMeme</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>idMeme</td>
            <td>string</td>
            <td>Meme's id</td>
        </tr>
   </table>
   <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">DELETE memegenerator-jcg-jmm/meme/deleteById/:idMeme</th>
        </tr>
        <tr>
            <th>Status</th>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
          <tr>
            <td>404</td>
            <td>err</td>
            <td>JSON</td>
            <td>Not found Meme with name</td>
        </tr>
        <tr>
            <td>500</td>
            <td>err</td>
            <td>JSON</td>
            <td>Error retrieving User with email</td>
        </tr>
    </table>
  </h2>
  
  
  
  
  
 
   
   
   
   
   
   <h2>/user/findMemesByUsername/:username</h2>
        <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">DELETE memegenerator-jcg-jmm/user/findMemesByUsername/:username</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Username</td>
            <td>string</td>
            <td>User's name</td>
        </tr>
   </table>
   <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">DELETE memegenerator-jcg-jmm/user/findMemesByUsername/:username</th>
        </tr>
        <tr>
            <th>Status</th>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
          <tr>
            <td>404</td>
            <td>err</td>
            <td>JSON</td>
            <td>Not found Meme with name</td>
        </tr>
        <tr>
            <td>500</td>
            <td>err</td>
            <td>JSON</td>
            <td>Error retrieving User with email</td>
        </tr>
    </table>
  </h2>
    
  
  
  
  
 
   
   
   
   
   
   <h2>/user/findMemesByCategoryName/:value</h2>
        <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">DELETE memegenerator-jcg-jmm/user/findMemesByCategoryName/:value</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Username</td>
            <td>string</td>
            <td>Category's name</td>
        </tr>
   </table>
   <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">DELETE memegenerator-jcg-jmm/user/findMemesByCategoryName/:value</th>
        </tr>
        <tr>
            <th>Status</th>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
         <tr>
            <td>404</td>
            <td>err</td>
            <td>JSON</td>
            <td>Not found Meme with name</td>
        </tr>
        <tr>
            <td>500</td>
            <td>err</td>
            <td>JSON</td>
            <td>Error retrieving User with email</td>
        </tr>
    </table>
  </h2>
  
   
  
  
  
 
   
   
   
   
   
   <h2>/user/findMemesByMemeName/:value</h2>
        <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">DELETE memegenerator-jcg-jmm/user/findMemesByMemeName/:value</th>
        </tr>
        <tr>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Username</td>
            <td>string</td>
            <td>Category's name</td>
        </tr>
   </table>
   <table style="width:100%">
        <tr>
            <th colspan="4">Response</th>
        </tr>
        <tr>
            <th colspan="4">DELETE memegenerator-jcg-jmm/user/findMemesByMemeName/:value</th>
        </tr>
        <tr>
            <th>Status</th>
            <th>Params</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>404</td>
            <td>err</td>
            <td>JSON</td>
            <td>Not found Meme with name</td>
        </tr>
        <tr>
            <td>500</td>
            <td>err</td>
            <td>JSON</td>
            <td>Error retrieving User with email</td>
        </tr>
    </table>
  </h2>
</body>
</html>
