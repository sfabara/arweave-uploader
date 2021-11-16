import { useForm } from "react-cool-form";

const Field = ({ label, id, error, ...rest }) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...rest} />
        {error && <p>{error}</p>}
    </div>
);

const MyForm = ({}) => {
    //////////////////////////////////////////////////////
    const { form, use } = useForm({
        // (Strongly advise) Provide the default values
        defaultValues: { username: "", email: "", password: "" },
        // The event only triggered when the form is valid
        onSubmit: (values) => console.log("onSubmit: ", values),
    });
    // We can enable the "errorWithTouched" option to filter the error of an un-blurred field
    // Which helps the user focus on typing without being annoyed by the error message
    const errors = use("errors", { errorWithTouched: true }); // Default is "false"

    /////////////////////////////////////////////////////

    return (
        <>
            <form ref={form} noValidate>
                <Field
                    label="Username"
                    id="username"
                    name="username"
                    // Support built-in validation
                    required
                    error={errors.username}
                />
                <Field
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    required
                    error={errors.email}
                />
                <Field
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    required
                    minLength={8}
                    error={errors.password}
                />
                <input type="submit" />
            </form>

        </>



    )
}

export default MyForm