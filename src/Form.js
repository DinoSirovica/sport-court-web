import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

export const FormReg = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required("Your name is required!"),
        email: yup.string().email().required("Your email is required!"),
        age: yup.number("Your age must be number!").positive().integer().required("Your age is required!"), //min(), max()
        password: yup.string().required("Password required").min(4, "Password must have at least 4 symbols").max(20, "Password cant have more than 20 symbols"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords Don't Mach")
            .required("Password required"),
    });


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}><br />
            <input type="text" placeholder="Full Name..." {...register("fullName")}></input><br />
            <p>{errors.fullName?.message}</p>

            <input type="text" placeholder="Email..." {...register("email")}></input><br />
            <p>{errors.email?.message}</p>

            <input type="number" placeholder="Age..." {...register("age")}></input><br />
            <p>{errors.age?.message}</p>

            <input type="password" placeholder="Password..." {...register("password")}></input><br />
            <p>{errors.password?.message}</p>

            <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}></input><br />
            <p>{errors.confirmPassword?.message}</p>
            <input type="submit" ></input>
        </form>
    )
}