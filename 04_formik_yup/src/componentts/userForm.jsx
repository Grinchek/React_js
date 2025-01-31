import './style.css';
import { Formik, useFormik } from 'formik';
import * as Yup from "yup";
const UserForm = () => {
    const formik = useFormik({
        initialValues: {
            userName: "",
            password: ""
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .max(30, "Username must be 30 characters or less")
                .required("Required"),
            password: Yup.string()
                .required('No password provided.')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        }),
        onSubmit: (values) => {
            const storedUsers = localStorage.getItem("listUsers");
            const userList = JSON.parse(storedUsers) || [];
            const usernameIsCorrect = userList.some(obj => obj.userName === values.userName);
            const passwordIsCorrect = userList.some(obj => obj.password === values.password);

            if (usernameIsCorrect && passwordIsCorrect) {
                alert("You have been signed in successfuly");

            }
            else {
                alert("Invalid Username of Password");
            }

        }
    });
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
                        Sign in
                    </button>
                </form>
            </div>
        </>
    );
}

export default UserForm;