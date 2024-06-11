import { useForm } from "react-hook-form";
import "../../styles/components/SessionsIndex/_Form.scss";

const Form = ({ workoutTypeOptions }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form-section'>
        <label htmlFor='workout'>Type</label>
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
      </div>

      <div className='form-section'>
        <label htmlFor='date'>Date</label>
        <input
          label='date'
          type='date'
          id='workout-date'
          name='date'
          defaultValue={new Date().toISOString().split("T")[0]}
          min='2018-01-01'
          max={new Date().toISOString().split("T")[0]}
          {...register("date")}
        />
      </div>

      <div className='form-section'>
        {" "}
        <label htmlFor='duration'>Duration in min</label>
        <input {...register("duration", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.duration && <span>This field is required</span>}
      </div>

      <input id='submit' type='submit' />
    </form>
  );
};

export default Form;
