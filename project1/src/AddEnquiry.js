import React, { useState } from 'react'

export default function AddEnquiry() {
    const option = [
        {value: "" , text: "Select a Course"},
        {value: 1, text: "DCA"},
        {value: 2, text: "ADJP"},
        {value: 3, text: "DMO"},
        {value: 4, text: "DDTP"},
        {value: 5, text: "MERN"},
        {value: 6, text: "MEAN"},
        {value: 7, text: "DWD"},
        {value: 8, text: "ADPP"},
        {value: 9, text: "HDCP"},
        {value: 10, text: "HDCA"}
    ]

    const option1 = [
        {value: "", text: "Reference"},
        {value: 1, text: "Prakash"},
        {value: 2, text: "Balaji"},
        {value: 3, text: "Anandhi"},
        {value: 4, text: "Others"}
    ]
    const [name, setName] = useState("");
    const [branch, setBranch] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [cell, setCell] = useState("");
    const [email, setEmail] = useState("");
    const [qualification, setQualification] = useState("");
    const [selected, setSelected] = useState(option[0]);
    const [refer, setRefer] = useState(option1[0]);

    const handleChange = (e) => {
        setSelected(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className='addenquiry-container'>
        <h2 className='addenquiry-head'>List of Enquiry Details:-</h2>
        <table className='addenquiry-table'>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>qwert</td>
                    <td>asdfg</td>
                    <td>
                        <button>EDIT</button>
                        <button>DELETE</button>
                        <button>ADMISSION</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h4 className='addenquiry-detail'>Add Enquiry</h4>
        <form className='addenquiry-form' onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type='text' name='name' value={name} onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div>
                <label>Branch:</label>
                <input type='text' name='branch' value={branch} onChange={(e)=> setBranch(e.target.value)}/>
            </div>
            <div>
                <label>Location:</label>
                <input type='text' name='location' value={location} onChange={(e)=> setLocation(e.target.value)}/>
            </div>
            <div>
                <label>Phone Number:</label>
                <input type='text' name='phone' value={phone} onChange={(e)=> setPhone(e.target.value)}/>
            </div>
            <div>
                <label>Alt Phone Number:</label>
                <input type='text' name='altphone' value={cell} onChange={(e)=> setCell(e.target.value)}/>
            </div>
            <div>
                <label>Email:</label>
                <input type='email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Qualification:</label>
                <input type='text' name='qualification' value={qualification} onChange={(e)=> setQualification(e.target.value)}/>
            </div>
            <div>
                <label>Courses Name:</label>
                <select value={selected} onChange={handleChange}>
                    {option.map(options => (
                        <option key={options.value} value={options.value}>
                            {options.text}
                        </option>
                            ))}
                </select>
            </div>
            <div className='addenquiry-refer'>
                <div>
                    <label>Reference:</label>
                    <select value={refer} onChange={(e) => setRefer(e.target.value)}>
                        {option1.map(options => (
                            <option key={options.value} value={options.value}>
                                {options.text}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>If Others:</label>
                    <input type='text' name='others'/>
                </div>
            </div>
            <div>
                <label>Remarks:</label>
                <textarea></textarea>
            </div>
        </form>
    </div>
  )
}
