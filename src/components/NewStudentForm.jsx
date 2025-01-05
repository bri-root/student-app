import { useState } from 'react';

const NewStudentForm = () => {

    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
    });

    // const handleNameChange = (event) => {
    //     setFormFields({
    //         ...formFields,
    //         name: event.target.value,
    //     })
    // };

    // const handleEmailChange = (event) => {
    //     setFormFields({
    //         ...formFields,
    //         email: event.target.value,
    //     })
    // };

    const handleChange = (event) => {
        setFormFields({...formFields, [event.target.name]: event.target.value});

    };

        return (
        <form>
            <div>
            <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    name="name"
                    value={formFields.name}
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    id="email"
                    name="email"
                    value={formFields.email}
                    onChange={handleChange} />
            </div>
            <input
                type="submit"
                value="Add Student" />
        </form>
    );
};

export default NewStudentForm;