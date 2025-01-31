import './style.css';
import { Formik, useFormik } from 'formik';
import * as Yup from "yup";


const UserForm = () => {
    const renderUsers = () => {
        const storedUsers = localStorage.getItem("listUsers");
        const userList = JSON.parse(storedUsers) || [];
        const list = document.getElementById("userList");
        list.innerHTML = userList.map(user => `<div className="container" ><a>${user.userName}<a/><div/>`).join('');
    }

    const formik = useFormik({
        initialValues: {
            userName: "",
            password: "",
            email: ""
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .max(30, "Username must be 30 characters or less")
                .required("Required"),
            email: Yup.string().email()
                .required("Required"),
            password: Yup.string()
                .required('No password provided.')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),

        }),

        onSubmit: (values) => {
            const storedUsers = localStorage.getItem("listUsers");
            const userList = JSON.parse(storedUsers) || [];

            if (userList.some(obj => obj.email === values.email)) {
                alert("This email is already used")

            }
            else {
                userList.push(values);
                localStorage.setItem("listUsers", JSON.stringify(userList));
            }
            renderUsers();
        }


    });
    renderUsers();
    return (
        <>
            <div className="container">
                <form onSubmit={formik.handleSubmit}>
                    <div className="input-container">
                        <input
                            id="userName"
                            name="userName"
                            type="text"
                            placeholder="User Name"
                            onChange={formik.handleChange}
                            value={formik.values.userName} />
                        {formik.errors.userName ? <p>{formik.errors.userName}</p> : null}
                    </div>
                    <div className="input-container">
                        <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Email"
                            onChange={formik.handleChange}
                            value={formik.values.email} />
                        {formik.errors.email ? <p>{formik.errors.email}</p> : null}
                    </div>
                    <div className="input-container">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            value={formik.values.password} />
                        {formik.errors.password ? <p>{formik.errors.password}</p> : null}
                    </div>
                    <button
                        type='submit'>
                        Create User
                    </button>
                </form>
            </div>
            <div className="container" id='userList'>

            </div>

        </>
    );
}

export default UserForm;