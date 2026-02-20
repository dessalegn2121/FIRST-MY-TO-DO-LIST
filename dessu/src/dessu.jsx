const Dessu = () => {
    const book = () => {
        alert("Form submitted successfully!");
    }
    return (
        <div>
           <label>Full Name :</label>&nbsp;
             <input type="text" placeholder='Enter your name' /><br /><br />
           <label>Email  :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <input type="email" placeholder='Enter your email' /><br /><br />
           <label>Password  :</label>&nbsp;&nbsp;
                <input type="password" placeholder='Enter your password' /><br /><br />
           <label>Gender :</label>&nbsp;&nbsp;
                <select>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select><br /><br />
           <label>Age :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" placeholder='Enter your age' min="0" /><br /><br />
           <button type="submit" onMouseOver={book}>Submit</button>
        </div>
      );
}
 
export default Dessu;