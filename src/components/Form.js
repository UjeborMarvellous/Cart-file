import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Select,
    useFormControl,
    RequiredIndicator
  } from "@vechaiui/react"

const Form = () => {
    const [loading, setLoading] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false)
    const handleToggleShowPassword = () => setShowPassword(!showPassword)
  
    const { register, formState: { errors }, handleSubmit } = useFormControl();
    const onSubmit = async (data) => {
      setLoading(true);
      setTimeout(() => {
        alert(JSON.stringify(data));
        setLoading(false);
      }, 500);
    };
    
    return (
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <FormControl invalid={Boolean(errors.username)}>
            <FormLabel>
              Username<RequiredIndicator />
            </FormLabel>
            <Input {...register("username", { required: true })} placeholder="Enter your username." />
            {errors.username && errors.username.type === "required" && <FormErrorMessage>Username is required</FormErrorMessage>}
          </FormControl>
  
          <FormControl invalid={Boolean(errors.password)}>
            <FormLabel>
              Password<RequiredIndicator />
            </FormLabel>
            <Input.Group>
              <Input
                className="pr-16"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
              <Input.RightElement className="w-16">
                <Button type="button" size="xs" variant="solid" onClick={handleToggleShowPassword}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </Input.RightElement>
            </Input.Group>
            {errors.password && errors.password.type === "required" && <FormErrorMessage>Password is required</FormErrorMessage>}
          </FormControl>
  
          <FormControl>
            <FormLabel>
              Gender
            </FormLabel>
            <Select {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </Select>
          </FormControl>
  
          <Button type="submit" variant="solid" color="primary" loading={loading}>Submit</Button>
        </form>
      </div>
    );
  }
  export default Form;