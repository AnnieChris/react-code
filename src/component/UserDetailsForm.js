//Parent Component
import React, {useState} from 'react';
import UserDetailsFormResult from './UserDetailsFormResult';


var firstNameTemp, lastNameTemp, ageTemp, addressTemp, hobbyTemp;

function UserDetailsForm(props) 
{
    const[firstName, setfirstName] = useState('');
    const[lastName, setlastName] = useState('');
    const[age, setAge] = useState('');
    const[address, setAddress] = useState('');
    const[hobbies, setHobbies] = useState([]);

    const handlefirstNameChange = (e) => {
        firstNameTemp = e.target.value;
    }
    
    const handlelastNameChange = (e) => {
        lastNameTemp = e.target.value;
    }

    const handleAgeChange = (e) => {
        ageTemp = e.target.value;
    }

    const handleAddressChange = (e) => {
        addressTemp = e.target.value;
    }

    const handlehobbiesChange = (e) => {
       // hobbyTemp = e.target.values;
        var options = e.target.options;
        hobbyTemp = [];
        for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
            hobbyTemp.push(options[i].value);
          }
        }
    }
    
    const handleSubmit = (e) => {
        setfirstName(firstNameTemp);
        setlastName(lastNameTemp);
        setAge(ageTemp);
        setAddress(addressTemp);
        setHobbies(hobbyTemp);
        document.getElementById("userdetailsrenderDiv").style.display="";

    }
    

    return (
        <div className='form_contents'>
            <h1>User Details Form</h1>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td><label>First Name : </label></td>
                            <td><input type="text" onChange={handlefirstNameChange}  required/></td>
                            
                        </tr>

                        <tr>
                            <td><label>Last Name : </label></td>
                            <td><input type="text" onChange={handlelastNameChange}  required/></td>
                            
                        </tr>

                        <tr>
                            <td><label>Age : </label></td>
                            <td><input type="number" onChange={handleAgeChange} required/></td>
                            
                        </tr>

                        <tr>
                            <td><label>Address : </label></td>
                            <td><textarea onChange={handleAddressChange} required/></td>
                            
                        </tr>

                        <tr>
                            <td><label>Hobbies : </label></td>
                            <td>
                                <select onChange={handlehobbiesChange} required multiple>
                                    <option value="">select</option>
                                    <option value="painting">Painting</option>
                                    <option value="dancing">Dancing</option>
                                    <option value="reading">Reading</option>
                                    <option value="singing">Singing</option>                    
                                </select>
                            </td>
                            
                        </tr>

                        <tr>
                            <td></td>
                            <td><input type="button" value="submit" onClick={handleSubmit}/></td>
                        </tr>
                    
 
                    </tbody>
                </table>
            </form>   
            <div id='userdetailsrenderDiv' style={{display:'none'}}>
                <UserDetailsFormResult firstName = {firstName}
                                        lastName = {lastName}
                                        age = {age}
                                        address = {address}
                                        hobbies = {hobbies} />

            </div>
        </div>
    );
}

export default UserDetailsForm;