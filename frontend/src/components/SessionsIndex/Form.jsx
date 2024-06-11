import { useForm } from "react-hook-form";
import "../../styles/components/SessionsIndex/_Form.scss";

const Form = ({ workoutTypeOptions }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("duration", "workout", "date")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select
        id='workout'
        defaultValue={workoutTypeOptions[0].value}
        {...register("workout", {
          required: true,
        })}>
        {workoutTypeOptions.map((t, i) => {
          return (
            <option key={i} value={t.value}>
              {t.label}
            </option>
          );
        })}
      </select>

      <label htmlFor='start'>Workout date:</label>
      <input
        label='date'
        type='date'
        id='start'
        name='date'
        defaultValue={new Date().toISOString().split("T")[0]}
        min='2018-01-01'
        max={new Date().toISOString().split("T")[0]}
        {...register("date")}
      />

      <input {...register("duration", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.duration && <span>This field is required</span>}

      <input type='submit' />
    </form>
  );
};

export default Form;
